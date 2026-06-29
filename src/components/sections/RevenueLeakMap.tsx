"use client";

import { m } from "framer-motion";
import { ease, viewport } from "@/lib/motion";

/**
 * Revenue Leak Diagnostic Board - a contained, consultant-grade funnel analysis.
 * Four narrowing stages form the funnel; each carries a precise leak annotation
 * aligned in a right gutter (leader line drawn on reveal), not a floating tag.
 * Method/diagnostic, honest (named failure points, no numbers). Stacks cleanly
 * on mobile; reduced motion shows the final state.
 */

const stages = [
  { name: "Ad Spend", w: "sm:w-[64%]", leak: "Broad targeting" },
  { name: "Traffic Quality", w: "sm:w-[56%]", leak: "Message mismatch" },
  { name: "Landing Page Experience", w: "sm:w-[48%]", leak: "Slow page experience" },
  { name: "Qualified Leads", w: "sm:w-[40%]", leak: "Weak attribution" },
] as const;

function LeakTag({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className="rounded-md border border-sand-400/60 bg-sand-100 px-1.5 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-wide text-sand-600">
        Leak
      </span>
      <span className="text-xs font-medium leading-tight text-graphite-600">{text}</span>
    </span>
  );
}

export function RevenueLeakMap() {
  return (
    <m.div
      className="glass-light blueprint-light relative overflow-hidden rounded-[2rem] p-5 sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease }}
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ring rounded-full bg-cobalt-400/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cobalt-500" />
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-graphite-600">
            Funnel diagnostic
          </span>
        </span>
        <span className="rounded-full border border-graphite-900/10 bg-canvas-50/80 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wide text-graphite-400">
          Illustrative
        </span>
      </div>

      {/* funnel rows */}
      <div className="mt-6 flex flex-col gap-3.5">
        {stages.map((s, i) => (
          <m.div
            key={s.name}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, ease, delay: i * 0.12 }}
          >
            {/* stage bar */}
            <div className={`flex w-full items-center justify-between rounded-xl border border-cobalt-200/70 bg-gradient-to-r from-white to-cobalt-50 px-4 py-3.5 shadow-soft ${s.w}`}>
              <span className="text-sm font-semibold text-graphite-900">{s.name}</span>
              <span className="font-mono text-[0.6rem] text-graphite-400">0{i + 1}</span>
            </div>

            {/* leader (desktop) */}
            <m.span
              aria-hidden
              className="hidden h-px origin-left flex-1 border-t border-dashed border-graphite-900/25 sm:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease, delay: 0.3 + i * 0.12 }}
            />

            {/* leak annotation (right gutter on desktop, inline on mobile) */}
            <div className="pl-1 sm:w-[9.5rem] sm:shrink-0 sm:pl-0">
              <LeakTag text={s.leak} />
            </div>
          </m.div>
        ))}
      </div>

      <p className="mt-6 border-t border-graphite-900/10 pt-4 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-graphite-400">
        Illustrative diagnostic map · no fabricated results
      </p>
    </m.div>
  );
}
