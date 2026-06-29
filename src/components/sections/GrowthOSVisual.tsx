"use client";

import { m, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Growth Command Console - the hero's signature visual.
 *
 * Layout is fully deterministic: on lg+ a fixed 3x3 CSS grid places the four
 * modules in the corner cells and the hub in the exact centre cell - cards are
 * `w-full max-w-[...]` so they can never overflow or clip. SVG connector lines
 * sit behind, running from the hub to each module. Below lg it stacks (hub, a
 * 1/2-col module grid, status). Method-based + honest (qualitative states, no
 * numbers); labelled illustrative. Reduced motion snaps to the final state.
 */

const modules = [
  { name: "Acquire", sub: "Paid + organic reach", cell: "col-start-1 row-start-1", x: 18, y: 18 },
  { name: "Convert", sub: "Pages that convert", cell: "col-start-3 row-start-1", x: 82, y: 18 },
  { name: "Track", sub: "Data you can trust", cell: "col-start-1 row-start-3", x: 18, y: 82 },
  { name: "Optimize", sub: "Compounding tests", cell: "col-start-3 row-start-3", x: 82, y: 82 },
] as const;

const status = [
  { k: "Signal", v: "Tracked" },
  { k: "Funnel", v: "Mapped" },
  { k: "Priority", v: "Set" },
] as const;

function ModuleCard({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="w-full rounded-2xl border border-graphite-900/10 bg-white px-3.5 py-3 shadow-soft">
      <span className="flex items-center gap-1.5 text-sm font-semibold text-graphite-900">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt-500" />
        {name}
      </span>
      <span className="mt-0.5 block text-xs leading-snug text-graphite-500">{sub}</span>
    </div>
  );
}

function Hub() {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl border border-cobalt-200 bg-white px-3 py-4 text-center shadow-lift ring-4 ring-cobalt-500/5">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-gradient shadow-[0_8px_20px_-8px_rgba(35,80,214,0.6)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18h4V12h4V6h8" />
        </svg>
      </span>
      <span className="mt-2.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-graphite-400">
        Growth System
      </span>
      <span className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-graphite-900">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ring rounded-full bg-cobalt-400" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cobalt-500" />
        </span>
        Live
      </span>
    </div>
  );
}

function StatusStrip() {
  return (
    <div className="grid grid-cols-3 divide-x divide-graphite-900/10 rounded-xl border border-graphite-900/10 bg-white/70">
      {status.map((s) => (
        <div key={s.k} className="flex flex-col items-center gap-0.5 px-2 py-2.5 text-center">
          <span className="font-mono text-[0.56rem] uppercase tracking-wide text-graphite-400">{s.k}</span>
          <span className="text-xs font-semibold text-cobalt-700">{s.v}</span>
        </div>
      ))}
    </div>
  );
}

export function GrowthOSVisual() {
  const reduce = useReducedMotion();

  return (
    <m.div
      className="relative mx-auto w-full max-w-[40rem]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.4 : 0.8, ease, delay: 0.15 }}
    >
      <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-cobalt-500/10 blur-3xl" />

      <div className="glass-light relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
        {/* header */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ring rounded-full bg-cobalt-400/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cobalt-500" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-graphite-600">
              Growth Command
            </span>
          </span>
          <span className="rounded-full border border-graphite-900/10 bg-canvas-50/80 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wide text-graphite-400">
            Illustrative
          </span>
        </div>
        <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-graphite-400">
          Tracing where budget leaks
        </p>

        {/* ---- lg+: deterministic 3x3 command grid ---- */}
        <div className="relative mt-5 hidden aspect-[4/3] lg:block">
          <div aria-hidden className="blueprint-light pointer-events-none absolute inset-0 rounded-2xl opacity-30" />
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt-500/12 blur-2xl" />

          {/* connectors behind the grid */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 z-0 h-full w-full" aria-hidden preserveAspectRatio="none">
            {modules.map((mod, i) => (
              <g key={mod.name}>
                <m.line
                  x1="50" y1="50" x2={mod.x} y2={mod.y}
                  stroke="#2350d6" strokeOpacity="0.18" strokeWidth="0.5" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, ease, delay: 0.35 + i * 0.06 }}
                />
                <line x1="50" y1="50" x2={mod.x} y2={mod.y} stroke="#3b6bf0" strokeWidth="0.7" strokeLinecap="round" className="animate-signal" />
              </g>
            ))}
          </svg>

          {/* the grid */}
          <div className="absolute inset-0 z-10 grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-x-6 gap-y-6">
            {modules.map((mod, i) => (
              <m.div
                key={mod.name}
                className={`w-full max-w-[150px] ${mod.cell}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduce ? 0.3 : 0.5, ease, delay: reduce ? 0 : 0.6 + i * 0.1 }}
              >
                <ModuleCard name={mod.name} sub={mod.sub} />
              </m.div>
            ))}

            <m.div
              className="z-20 col-start-2 row-start-2 w-full max-w-[170px]"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduce ? 0.3 : 0.6, ease, delay: 0.25 }}
            >
              <Hub />
            </m.div>
          </div>
        </div>

        {/* ---- mobile + tablet: stacked console ---- */}
        <div className="mt-5 flex flex-col gap-3 lg:hidden">
          <div className="mx-auto w-full max-w-[15rem]">
            <Hub />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {modules.map((mod) => (
              <ModuleCard key={mod.name} name={mod.name} sub={mod.sub} />
            ))}
          </div>
        </div>

        {/* integrated status strip */}
        <div className="mt-5">
          <StatusStrip />
        </div>
      </div>
    </m.div>
  );
}
