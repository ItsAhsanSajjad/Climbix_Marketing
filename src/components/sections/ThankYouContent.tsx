"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";

const steps = [
  {
    title: "Request received",
    body: "Your details are with the team. If anything is unclear, we reply from the email you shared.",
  },
  {
    title: "We review your setup",
    body: "We go through your spend, tracking, and pages to find where budget is leaking first.",
  },
  {
    title: "You get clear next steps",
    body: "Your biggest leaks and the highest-leverage fixes, in plain English - and a call invite if it makes sense.",
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
  const fired = useRef(false);

  useEffect(() => {
    // Conversion event - fired exactly once per view (the ref guard also
    // covers React StrictMode's double-invoked dev effects, so GA4/Ads never
    // see a duplicated conversion). TODO (launch): map this to a GA4 / Google
    // Ads conversion tag in GTM. Payload includes the source so audit vs
    // homepage conversions report separately.
    if (fired.current) return;
    fired.current = true;
    track("thank_you_view", { from });
  }, [from]);

  const isAudit = from === "audit";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cobalt-500/10 blur-[90px]"
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
          Your audit request is in.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lux-body text-slate-600">
          {isAudit
            ? "Thanks - we've got your details and we'll start reviewing your marketing right away."
            : "Thanks - we've got your details and we'll start reviewing your ads, pages, and tracking."}
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
          className="mt-12 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-base font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
        >
          Back to homepage
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
