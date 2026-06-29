"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";

const steps = [
  { title: "Check your inbox", body: "A confirmation is on its way. Add us to your contacts so nothing lands in spam." },
  { title: "We review your details", body: "Within one business day, we go through your spend, tracking, and pages." },
  { title: "You get clear next steps", body: "We send back your biggest leaks and the highest-leverage fixes - or a call invite." },
] as const;

const prep = [
  "Have your top growth goal in mind",
  "Know roughly what you spend on ads",
  "Your website / landing page URL handy",
] as const;

/**
 * Thank-you confirmation (cinematic light). Fires the conversion event on view,
 * then lays out what happens next + a short prep checklist so the experience
 * feels finished and reassuring. Calm, premium, on-brand.
 */
export function ThankYouContent() {
  const params = useSearchParams();
  const from = params.get("from") ?? "home";

  useEffect(() => {
    // Conversion event. TODO (launch): map to a GA4 / Google Ads conversion in GTM.
    track("thank_you_view", { from });
  }, [from]);

  const isAudit = from === "audit";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16">
      <div aria-hidden className="blueprint-light pointer-events-none absolute inset-0 opacity-50" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cobalt-500/10 blur-3xl" />

      <div className="relative w-full max-w-2xl text-center">
        <Link href="/" className="mb-10 inline-flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-graphite-900">
            {site.name}
            <span className="text-cobalt-600">.</span>
          </span>
        </Link>

        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cobalt-gradient text-white shadow-lift">
          <IconCheck className="h-8 w-8" />
        </span>

        <h1 className="mt-7 font-editorial text-edito-sm text-graphite-900 md:text-edito-md">
          {isAudit ? "Your audit request is in." : "You're booked in."}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-graphite-600">
          {isAudit
            ? "Thanks - we have your details and we will start reviewing your marketing right away."
            : "Thanks - we have your details and we will be in touch to lock in your strategy call."}
        </p>

        {/* what happens next */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-graphite-900/8 text-left sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col bg-white p-5">
              <span className="font-mono text-sm font-bold text-cobalt-600">0{i + 1}</span>
              <h2 className="mt-2 text-sm font-semibold text-graphite-900">{s.title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-graphite-600">{s.body}</p>
            </div>
          ))}
        </div>

        {/* prep checklist */}
        <div className="mt-6 rounded-2xl border border-graphite-900/10 bg-white/60 p-5 text-left">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-cobalt-600">
            To get the most from it
          </span>
          <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {prep.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-graphite-700">
                <IconCheck className="h-4 w-4 shrink-0 text-cobalt-600" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700">
            Back to homepage
            <IconArrow className="h-4 w-4" />
          </Link>
          {isAudit && (
            <Link href="/free-marketing-audit" className="text-sm font-medium text-graphite-500 transition-colors hover:text-graphite-800">
              View the audit offer
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
