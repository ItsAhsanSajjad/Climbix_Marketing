"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Field } from "@/components/ui/Field";
import { GoalSelect } from "@/components/forms/GoalSelect";
import { BudgetSelect } from "@/components/forms/BudgetSelect";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "website" | "goal", string>>;
type Status = "idle" | "submitting" | "error";

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

/** Human-readable message per server error code. */
const ERROR_COPY: Record<string, string> = {
  rate_limited:
    "Too many attempts from your connection just now. Please wait a few minutes and try again.",
  not_configured:
    "Our form service isn't reachable right now. Please email us directly and we'll run your audit.",
  delivery_failed:
    "Your request couldn't be delivered. Please try again - or email us directly.",
  network:
    "We couldn't reach the server. Check your connection and try again - or email us directly.",
};

/**
 * Lead capture form. Submits to /api/lead (server-side validation, spam
 * defense, delivery) and redirects to /thank-you ONLY after the server
 * confirms delivery - a failed submission shows a visible, retryable error
 * with a direct-email fallback, and never a false success screen.
 *
 * Attribution (UTMs / gclid / fbclid / referrer) is captured from the URL and
 * sent with the lead. A hidden honeypot field traps bots. Accessible:
 * labelled fields, inline errors (role="alert"), status announcements via
 * aria-live, focus moves to the first invalid control, large tap targets.
 */
export function LeadForm({
  source = "home",
  submitLabel = "Get My Free Audit",
  compact = false,
  className,
}: {
  source?: "home" | "audit";
  submitLabel?: string;
  /** Hero variant: hides the optional phone field. Logic is identical. */
  compact?: boolean;
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
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");
  const errorRef = useRef<HTMLDivElement>(null);

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

  // Move focus to the error summary when a submission fails, so keyboard and
  // screen-reader users land on the explanation and the retry actions.
  useEffect(() => {
    if (status === "error") errorRef.current?.focus();
  }, [status, serverError]);

  const set = (k: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  // Two LeadForm instances can render on one page (hero + contact); prefix
  // every field id so ids stay unique and error-focus hits this instance.
  const prefix = `lead-${source}${compact ? "-c" : ""}`;
  const fid = (k: string) => `${prefix}-${k}`;

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
    if (status === "submitting") return; // no duplicate submissions
    // Honeypot: a real user never fills this hidden field; bots do. Bail silently.
    if (honeypot) return;

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      document.getElementById(fid(Object.keys(e)[0]))?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    const payload = { ...values, source, ...meta };

    let errorCode = "network";
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string; fields?: Errors }
        | null;

      if (res.ok && data?.ok) {
        track(source === "audit" ? "audit_request" : "lead_submit", {
          source,
          goal: values.goal,
          budget: values.budget || "unspecified",
          ...meta,
        });
        router.push(`/thank-you?from=${source}`);
        return;
      }

      errorCode = data?.error ?? `http_${res.status}`;
      if (data?.fields) {
        setErrors(data.fields);
        const first = Object.keys(data.fields)[0];
        if (first) document.getElementById(fid(first))?.focus();
        setStatus("idle");
        return;
      }
    } catch {
      errorCode = "network";
    }

    // Visible, retryable failure - entered values are preserved in state.
    track("lead_submit_error", { source, code: errorCode });
    setServerError(ERROR_COPY[errorCode] ?? ERROR_COPY.delivery_failed);
    setStatus("error");
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className={cn("flex flex-col gap-4", className)}>
      {/* Hidden source for native form scrapers / no-JS fallback. */}
      <input type="hidden" name="source" value={source} readOnly />

      {/* Honeypot - visually hidden (clip, no overflow), excluded from a11y + tab order. */}
      <div aria-hidden className="sr-only">
        <label htmlFor={fid("company_site")}>
          Company website (leave blank)
        </label>
        <input
          id={fid("company_site")}
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
          id={fid("name")}
          label="Name"
          required
          placeholder="Your full name"
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
        />
        <Field
          id={fid("email")}
          label="Business email"
          type="email"
          inputMode="email"
          required
          placeholder="you@company.com"
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
        <Field
          id={fid("website")}
          label="Website URL"
          type="url"
          inputMode="url"
          placeholder="https://"
          autoComplete="url"
          value={values.website}
          onChange={set("website")}
          error={errors.website}
        />
        {!compact && (
          <Field
            id={fid("phone")}
            label="Phone or WhatsApp"
            type="tel"
            inputMode="tel"
            placeholder="+1 ..."
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
          />
        )}
        <GoalSelect id={fid("goal")} value={values.goal} onChange={set("goal")} error={errors.goal} />
        <BudgetSelect id={fid("budget")} value={values.budget} onChange={set("budget")} />
      </div>

      {/* Submission failure - visible, focusable, announced; offers retry + direct email. */}
      <div aria-live="polite">
        {status === "error" && (
          <div
            ref={errorRef}
            tabIndex={-1}
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <p className="font-semibold">Your request was not sent.</p>
            <p className="mt-1">{serverError}</p>
            <p className="mt-2">
              Use the button below to try again, or email{" "}
              <a
                href={`mailto:${site.email}?subject=Free%20audit%20request`}
                className="font-semibold underline underline-offset-2 hover:text-red-900"
              >
                {site.email}
              </a>{" "}
              - your details stay filled in.
            </p>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group/btn relative mt-1 inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-cobalt-500 px-8 text-base font-semibold text-white shadow-cobalt transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : status === "error" ? "Try Again" : submitLabel}
        {!submitting && <IconArrow className="h-4 w-4" />}
      </button>

      <p className="flex items-center gap-2 text-sm text-slate-500">
        <IconCheck className="h-4 w-4 shrink-0 text-teal-500" />
        We only use this to prepare your audit. No spam, no sharing - ever.
      </p>
    </form>
  );
}
