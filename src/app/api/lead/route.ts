import { NextRequest, NextResponse } from "next/server";

/**
 * Lead intake endpoint - the only place lead submissions land.
 *
 * Contract with LeadForm:
 *   - 200 { ok: true }                          -> lead accepted AND delivered
 *   - 400 { ok: false, error, fields? }         -> validation failed (per-field messages)
 *   - 429 { ok: false, error: "rate_limited" }  -> too many attempts from this IP
 *   - 502 { ok: false, error: "delivery_failed" } -> destination unreachable
 *   - 503 { ok: false, error: "not_configured" }  -> no destination configured yet
 *
 * The form must NEVER show success unless this returns ok: true.
 *
 * Delivery destinations (server-side env, never NEXT_PUBLIC):
 *   - LEAD_WEBHOOK_URL              -> lead JSON is POSTed there (CRM / Zapier / Make / Slack)
 *   - RESEND_API_KEY + LEAD_TO_EMAIL -> lead is emailed via the Resend API
 * Configure either or both; delivery succeeds if at least one destination accepts.
 *
 * Spam defense: honeypot field (silent fake-success so bots don't retry) +
 * per-IP rate limiting. The in-memory limiter resets on redeploy and is
 * per-instance on serverless - acceptable for a low-volume lead form; move to
 * Upstash/KV if abuse ever appears.
 */

const RATE_LIMIT = 5; // submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes per IP
const MAX_BODY_BYTES = 10_000;
const OUTBOUND_TIMEOUT_MS = 8_000;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ipHits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  // Opportunistic cleanup so the map can't grow unbounded.
  if (ipHits.size > 5_000) {
    for (const [key, stamps] of ipHits) {
      if (stamps.every((t) => now - t >= RATE_WINDOW_MS)) ipHits.delete(key);
    }
  }
  return false;
}

/** Trim, strip control characters, and cap length. */
function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);
}

function validUrl(value: string): boolean {
  try {
    const u = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return Boolean(u.hostname) && u.hostname.includes(".");
  } catch {
    return false;
  }
}

type Lead = {
  name: string;
  email: string;
  website: string;
  phone: string;
  goal: string;
  budget: string;
  source: string;
  attribution: Record<string, string>;
};

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "referrer",
] as const;

async function deliverToWebhook(url: string, lead: Lead): Promise<boolean> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "climbix_lead", receivedAt: new Date().toISOString(), ...lead }),
    signal: AbortSignal.timeout(OUTBOUND_TIMEOUT_MS),
  });
  return res.ok;
}

async function deliverByEmail(apiKey: string, to: string, lead: Lead): Promise<boolean> {
  const from = process.env.LEAD_FROM_EMAIL || "Climbix Leads <onboarding@resend.dev>";
  const lines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.website && `Website: ${lead.website}`,
    lead.phone && `Phone: ${lead.phone}`,
    `Goal: ${lead.goal}`,
    lead.budget && `Budget: ${lead.budget}`,
    `Form: ${lead.source}`,
    Object.keys(lead.attribution).length &&
      `Attribution: ${JSON.stringify(lead.attribution)}`,
  ].filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `New audit request - ${lead.name}`,
      text: lines.join("\n"),
    }),
    signal: AbortSignal.timeout(OUTBOUND_TIMEOUT_MS),
  });
  return res.ok;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 },
    );
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Answer with fake success so they
  // don't retry, and deliver nothing.
  if (clean(body.company_site, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead: Lead = {
    name: clean(body.name, 200),
    email: clean(body.email, 254),
    website: clean(body.website, 300),
    phone: clean(body.phone, 40),
    goal: clean(body.goal, 120),
    budget: clean(body.budget, 60),
    source: clean(body.source, 40) || "home",
    attribution: {},
  };
  for (const key of ATTRIBUTION_KEYS) {
    const v = clean(body[key], 300);
    if (v) lead.attribution[key] = v;
  }

  // Server-side validation mirrors the client, so bypassing the form changes nothing.
  const fields: Record<string, string> = {};
  if (!lead.name) fields.name = "Please enter your name.";
  if (!lead.email) fields.email = "Please enter your email.";
  else if (!emailRe.test(lead.email)) fields.email = "That email doesn't look right.";
  if (!lead.goal) fields.goal = "Pick the goal that matters most.";
  if (lead.website && !validUrl(lead.website)) {
    fields.website = "That website URL doesn't look right.";
  }
  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { ok: false, error: "invalid_fields", fields },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const leadTo = process.env.LEAD_TO_EMAIL;

  if (!webhookUrl && !(resendKey && leadTo)) {
    // Honest failure: nothing is configured, so the visitor must not see a
    // success screen. The form shows the direct-email fallback on this code.
    console.error("[lead] no delivery destination configured (LEAD_WEBHOOK_URL or RESEND_API_KEY+LEAD_TO_EMAIL)");
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const attempts: Promise<boolean>[] = [];
  if (webhookUrl) attempts.push(deliverToWebhook(webhookUrl, lead));
  if (resendKey && leadTo) attempts.push(deliverByEmail(resendKey, leadTo, lead));

  const results = await Promise.allSettled(attempts);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value);

  if (!delivered) {
    // Log the failure shape only - never the lead's personal data.
    for (const r of results) {
      if (r.status === "rejected") {
        console.error("[lead] delivery attempt failed:", r.reason instanceof Error ? r.reason.message : "unknown error");
      } else if (!r.value) {
        console.error("[lead] delivery destination returned a non-OK status");
      }
    }
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
