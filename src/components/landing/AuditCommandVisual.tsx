"use client";

import { m } from "framer-motion";
import { ease, viewport } from "@/lib/motion";

/**
 * Audit Command Visual - the PPC landing's signature. A horizontal "scan" of the
 * funnel (traffic -> landing -> tracking -> conversion) that flags where budget
 * leaks, ending in a priority fix plan. A scan beam sweeps the panel. Method /
 * diagnostic, honest (named checkpoints + ok/leak status, no numbers); labelled
 * illustrative. Stacks vertically on mobile, flows horizontally on sm+.
 */

const checkpoints = [
  { name: "Traffic source", status: "Tracked", ok: true },
  { name: "Landing page", status: "Leak found", ok: false },
  { name: "Tracking", status: "Leak found", ok: false },
  { name: "Conversion", status: "Tracked", ok: true },
] as const;

export function AuditCommandVisual() {
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
            Audit scan
          </span>
        </span>
        <span className="rounded-full border border-graphite-900/10 bg-canvas-50/80 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wide text-graphite-400">
          Illustrative
        </span>
      </div>

      {/* scan beam */}
      <div aria-hidden className="relative mt-4 h-px w-full overflow-hidden rounded-full bg-graphite-900/10">
        <span className="animate-marquee absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cobalt-500 to-transparent" />
      </div>

      {/* pipeline */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        {checkpoints.map((c, i) => (
          <div key={c.name} className="flex items-center gap-3 sm:flex-1 sm:flex-col sm:items-stretch sm:gap-0">
            <m.div
              className="flex-1 rounded-2xl border border-graphite-900/10 bg-white/85 px-3.5 py-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease, delay: 0.2 + i * 0.12 }}
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-wide text-graphite-400">
                0{i + 1}
              </span>
              <p className="mt-0.5 text-sm font-semibold text-graphite-900">{c.name}</p>
              <span
                className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wide ${
                  c.ok
                    ? "border border-cobalt-200 bg-cobalt-50 text-cobalt-700"
                    : "border border-sand-400/60 bg-sand-100 text-sand-600"
                }`}
              >
                <span className={`h-1 w-1 rounded-full ${c.ok ? "bg-cobalt-500" : "bg-sand-500"}`} />
                {c.status}
              </span>
            </m.div>
            {/* connector */}
            <span aria-hidden className="shrink-0 text-graphite-300 sm:hidden">↓</span>
          </div>
        ))}
      </div>

      {/* output */}
      <m.div
        className="mt-5 flex items-center justify-between rounded-2xl border border-cobalt-200 bg-cobalt-50 px-4 py-3"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease, delay: 0.8 }}
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-wide text-graphite-500">Output</span>
        <span className="text-sm font-semibold text-cobalt-700">Priority fix plan + next step</span>
      </m.div>
    </m.div>
  );
}
