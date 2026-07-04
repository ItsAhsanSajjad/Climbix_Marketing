"use client";

import { m, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Growth Leak Console - the hero's signature visual. A premium diagnostic sheet
 * styled like a high-end analytics product: five inspection rows (spend leakage,
 * campaign clarity, landing conversion path, tracking health, lead quality) each
 * with a qualitative status and a thin signal track, closed by one priority
 * recommendation. Honest by construction: qualitative states only, no invented
 * numbers, labelled Illustrative. Full-width tracks mean nothing can clip at
 * 320px. Reduced-motion renders the final state instantly.
 */

type Tone = "leak" | "review" | "ok";

const rows: { label: string; status: string; tone: Tone; fill: string }[] = [
  { label: "Spend leakage", status: "Elevated", tone: "leak", fill: "72%" },
  { label: "Campaign clarity", status: "Review", tone: "review", fill: "44%" },
  { label: "Landing conversion path", status: "Leaking", tone: "leak", fill: "63%" },
  { label: "Tracking health", status: "At risk", tone: "leak", fill: "56%" },
  { label: "Lead quality signal", status: "Unclear", tone: "review", fill: "38%" },
];

const toneStyles: Record<Tone, { pill: string; bar: string }> = {
  leak: { pill: "bg-bronze-500/12 text-bronze-600", bar: "bg-gradient-to-r from-bronze-400 to-bronze-500" },
  review: { pill: "bg-slate-100 text-slate-500", bar: "bg-slate-300" },
  ok: { pill: "bg-teal-500/10 text-teal-600", bar: "bg-teal-500" },
};

export function GrowthLeakConsole() {
  const reduce = useReducedMotion();

  return (
    <m.div
      className="relative mx-auto w-full max-w-[30rem]"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.4 : 0.85, ease, delay: 0.15 }}
    >
      {/* quiet halo, not a glow */}
      <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-cobalt-500/10 blur-[80px]" />

      <div className="doc-panel relative p-6 shadow-lift-lg sm:p-8">
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="doc-kicker">Growth Leak Diagnostic</span>
            <h3 className="mt-2 font-display text-xl font-bold text-graphite sm:text-2xl">
              Where the budget goes
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-platinum-300 px-2.5 py-1 text-xs font-medium text-slate-500">
            Illustrative
          </span>
        </div>

        <div className="champagne-rule my-6" aria-hidden />

        {/* diagnostic rows */}
        <div className="flex flex-col gap-5">
          {rows.map((r, i) => (
            <m.div
              key={r.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduce ? 0.3 : 0.5, ease, delay: reduce ? 0 : 0.35 + i * 0.1 }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.95rem] font-semibold text-graphite">{r.label}</span>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${toneStyles[r.tone].pill}`}>
                  {r.status}
                </span>
              </div>
              {/* qualitative signal track - full-width rail, proportional fill */}
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-platinum-200">
                <m.div
                  className={`h-full rounded-full ${toneStyles[r.tone].bar}`}
                  initial={{ width: 0 }}
                  animate={{ width: r.fill }}
                  transition={{ duration: reduce ? 0 : 0.8, ease, delay: reduce ? 0 : 0.5 + i * 0.1 }}
                />
              </div>
            </m.div>
          ))}
        </div>

        <div className="champagne-rule my-6" aria-hidden />

        {/* priority recommendation */}
        <m.div
          className="flex items-start gap-3 rounded-2xl border border-cobalt-500/20 bg-cobalt-500/[0.06] p-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.3 : 0.5, ease, delay: reduce ? 0 : 1.05 }}
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cobalt-500 text-white" aria-hidden>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-cobalt-600">
              Priority recommendation
            </span>
            <p className="mt-0.5 text-[0.95rem] font-medium text-graphite">
              Fix tracking before scaling spend - then seal the landing path.
            </p>
          </div>
        </m.div>
      </div>
    </m.div>
  );
}
