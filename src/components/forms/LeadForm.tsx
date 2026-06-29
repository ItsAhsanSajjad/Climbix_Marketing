"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Field } from "@/components/ui/Field";
import { GoalSelect } from "@/components/forms/GoalSelect";
import { BudgetSelect } from "@/components/forms/BudgetSelect";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "goal", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

/**
 * Lead capture form - production-ready front end.
 *
 * Submission: if NEXT_PUBLIC_LEAD_ENDPOINT is set, the payload is POSTed there;
 * otherwise it's a no-op send. Either way we fire the conversion event and route
 * to /thank-you. Marketing attribution (UTMs / gclid / fbclid / referrer) is
 * captured from the URL and sent with the lead. A hidden honeypot field traps
 * bots. Accessible: labelled fields, inline errors (role="alert"), focus moves
 * to the first invalid control, large tap targets, visible focus rings.
 *
 * TODO (launch): point NEXT_PUBLIC_LEAD_ENDPOINT at a real CRM/email endpoint
 * (e.g. a serverless route, HubSpot/Formspree, etc.) and add server-side
 * validation + a real spam check (e.g. Cloudflare Turnstile) on that endpoint.
 */
export function LeadForm({
  source = "home",
  submitLabel = "Book My Strategy Call",
  tone = "dark",
  className,
}: {
  source?: "home" | "audit";
  submitLabel?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    goal: "",
    budget: "",
  });
  const [meta, setMeta] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  // Capture campaign attribution from the landing URL (PPC clicks carry UTMs).
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const m: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = p.get(k);
      if (v) m[k] = v;
    });
    if (document.referrer) m.referrer = document.referrer;
    setMeta(m);
  }, []);

  const set = (k: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!emailRe.test(values.email)) e.email = "That email doesn't look right.";
    if (!values.goal) e.goal = "Pick the goal that matters most.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    // Honeypot: a real user never fills this hidden field; bots do. Bail silently.
    if (honeypot) return;

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      document.getElementById(Object.keys(e)[0])?.focus();
      return;
    }

    setSubmitting(true);
    const payload = { ...values, source, ...meta };

    // Optional real submission - enabled by setting NEXT_PUBLIC_LEAD_ENDPOINT.
    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Swallow network errors so the user still reaches /thank-you.
        // TODO (launch): surface a retry/error state once the endpoint is live.
      }
    }

    track(source === "audit" ? "audit_request" : "lead_submit", {
      source,
      goal: values.goal,
      budget: values.budget || "unspecified",
      ...meta,
    });
    router.push(`/thank-you?from=${source}`);
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("flex flex-col gap-4", className)}>
      {/* Hidden source for native form scrapers / no-JS fallback. */}
      <input type="hidden" name="source" value={source} readOnly />

      {/* Honeypot - visually hidden (clip, no overflow), excluded from a11y + tab order. */}
      <div aria-hidden className="sr-only">
        <label htmlFor="company_site">Company website (leave blank)</label>
        <input
          id="company_site"
          name="company_site"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          tone={tone}
          placeholder="Your full name"
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
        />
        <Field
          id="email"
          label="Business email"
          type="email"
          inputMode="email"
          required
          tone={tone}
          placeholder="you@company.com"
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
        <Field
          id="website"
          label="Website URL"
          type="url"
          inputMode="url"
          tone={tone}
          placeholder="https://"
          autoComplete="url"
          value={values.website}
          onChange={set("website")}
        />
        <Field
          id="phone"
          label="Phone or WhatsApp"
          type="tel"
          inputMode="tel"
          tone={tone}
          placeholder="+1 ..."
          autoComplete="tel"
          value={values.phone}
          onChange={set("phone")}
        />
        <GoalSelect value={values.goal} onChange={set("goal")} error={errors.goal} tone={tone} />
        <BudgetSelect value={values.budget} onChange={set("budget")} tone={tone} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="relative mt-1 inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-cobalt-gradient px-7 text-sm font-semibold text-white shadow-lift transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : submitLabel}
        {!submitting && <IconArrow className="h-4 w-4" />}
      </button>

      <p className={cn("flex items-center gap-2 text-xs", tone === "light" ? "text-graphite-500" : "text-white/55")}>
        <IconCheck className="h-3.5 w-3.5 shrink-0 text-cobalt-400" />
        We only use this to prepare your audit. No spam, no sharing - ever.
      </p>
    </form>
  );
}
