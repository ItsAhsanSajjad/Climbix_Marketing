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
 * next so the experience feels finished, not abandoned.
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
        className="pointer-events-none absolute left-1/2 top-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden
      />
      <div className="relative w-full max-w-xl text-center">
        <Link href="/" className="mb-10 inline-flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {site.name}
            <span className="text-accent-400">.</span>
          </span>
        </Link>

        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-400/30 bg-accent-500/15 text-cyan-400 shadow-glow">
          <IconCheck className="h-7 w-7" />
        </span>

        <h1 className="mt-6 font-display text-display-sm text-paper md:text-[2.6rem] md:leading-[1.05]">
          {isAudit ? "Your audit request is in." : "You're booked in."}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-mist-200">
          {isAudit
            ? "Thanks - we've got your details and we'll start reviewing your marketing right away."
            : "Thanks - we've got your details and we'll be in touch to lock in your strategy call."}
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="glass-panel rounded-2xl p-5">
              <span className="font-mono text-sm font-bold text-accent-300">0{i + 1}</span>
              <h2 className="mt-2 text-sm font-semibold text-paper">{s.title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-mist-300">{s.body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
        >
          Back to homepage
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
