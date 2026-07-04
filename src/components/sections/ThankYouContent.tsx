"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";

const steps = [
  {
    title: "Check your inbox",
    body: "A confirmation is on its way. Add us to your contacts so nothing lands in spam.",
  },
  {
    title: "We review your details",
    body: "Within one business day, we go through your spend, tracking, and pages.",
  },
  {
    title: "You get clear next steps",
    body: "We send back your biggest leaks and the highest-leverage fixes - or a call invite.",
  },
] as const;

/**
 * Thank-you confirmation. Fires the conversion event on view (the moment a real
 * GTM/GA4 setup will count the lead) and tells the visitor exactly what happens
 * next so the experience feels finished, not abandoned. Calm light luxury.
 */
export function ThankYouContent() {
  const params = useSearchParams();
  const from = params.get("from") ?? "home";

  useEffect(() => {
    // Conversion event. TODO (Phase 4): map this to a GA4 conversion / Google Ads
    // conversion tag in GTM. Payload includes the source so audit vs call
    // conversions can be reported separately.
    track("thank_you_view", { from });
  }, [from]);

  const isAudit = from === "audit";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cobalt-500/10 blur-[100px]"
      />
      <div className="relative w-full max-w-xl text-center">
        <Link href="/" className="mb-10 inline-flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-graphite">
            {site.name}
            <span className="text-cobalt-500">.</span>
          </span>
        </Link>

        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/12 text-teal-500 shadow-soft">
          <IconCheck className="h-8 w-8" />
        </span>

        <h1 className="mt-7 font-display text-lux-sm text-graphite md:text-lux-md">
          {isAudit ? "Your audit request is in." : "You're booked in."}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lux-body text-slate-600">
          {isAudit
            ? "Thanks - we've got your details and we'll start reviewing your marketing right away."
            : "Thanks - we've got your details and we'll be in touch to lock in your strategy call."}
        </p>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="lux-card p-6">
              <span className="text-lg font-semibold text-cobalt-600">0{i + 1}</span>
              <h2 className="mt-2 text-base font-semibold text-graphite">{s.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 text-base font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700"
        >
          Back to homepage
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
