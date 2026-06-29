"use client";

import { m, useReducedMotion } from "framer-motion";
import { IconTrending } from "@/components/ui/Icon";
import { CountUpMetric } from "@/components/motion/CountUpMetric";
import { ease, duration } from "@/lib/motion";

/**
 * Climbix "Campaign Intelligence" panel - the signature hero visual and the
 * brand's repeated design language. A layered glass dashboard (depth cards
 * behind it), a drawing growth line, an animated campaign-health ring, and
 * floating mono metric chips. Composed UI, never stock art. One coordinated
 * entrance; reduced motion snaps every step to its end state.
 */

const KPI_DELAY = 0.55;

const tiles = [
  { value: 4.8, suffix: "x", decimals: 1, label: "ROAS" },
  { prefix: "-", value: 41, suffix: "%", decimals: 0, label: "Cost / lead" },
  { value: 3.2, suffix: "x", decimals: 1, label: "Pipeline" },
] as const;

export function CampaignIntelligencePanel() {
  const reduce = useReducedMotion();

  return (
    <m.div
      className="relative mx-auto w-full max-w-[34rem] lg:mx-0"
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration.hero, ease, delay: 0.25 }}
    >
      {/* Depth: two faint layered cards offset behind the main panel. */}
      <div
        aria-hidden
        className="absolute -right-5 -top-5 h-full w-full rounded-[1.75rem] border border-ink-700/50 bg-ink-900/40"
      />
      <div
        aria-hidden
        className="absolute -left-4 top-6 h-full w-full rounded-[1.75rem] border border-ink-700/40 bg-ink-900/30"
      />

      <div className="animate-float">
        <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-5 sm:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ring rounded-full bg-cyan-400/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist-300">
                Campaign Intelligence
              </span>
            </div>
            <span className="rounded-full border border-ink-600/60 bg-ink-950/50 px-2.5 py-1 font-mono text-[0.65rem] text-mist-400">
              SAMPLE
            </span>
          </div>

          {/* Revenue + health ring row */}
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-ink-700/60 bg-ink-950/50 p-5">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-wide text-mist-400">
                Revenue from paid
              </p>
              <p className="mt-1 font-display text-3xl font-bold text-paper">
                <CountUpMetric value={284910} prefix="$" delay={KPI_DELAY} />
              </p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-cyan-500/15 px-2 py-0.5 font-mono text-[0.65rem] font-semibold text-cyan-400">
                <IconTrending className="h-3.5 w-3.5" />
                +38% MoM
              </span>
            </div>
            <HealthRing reduce={!!reduce} />
          </div>

          {/* Growth chart */}
          <div className="mt-4 rounded-2xl border border-ink-700/60 bg-ink-950/40 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[0.65rem] uppercase tracking-wide text-mist-400">
                Growth trajectory
              </span>
              <span className="font-mono text-[0.65rem] text-cyan-400">90d</span>
            </div>
            <svg
              viewBox="0 0 320 88"
              className="h-20 w-full"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="ciArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#11cfd6" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#11cfd6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="ciLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3aa0ff" />
                  <stop offset="100%" stopColor="#34e3e3" />
                </linearGradient>
              </defs>
              <m.path
                d="M0 72 L36 66 L72 70 L108 52 L144 56 L180 36 L216 40 L252 22 L288 16 L320 8"
                fill="none"
                stroke="url(#ciLine)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={reduce ? { duration: 0 } : { duration: 0.9, ease, delay: 0.5 }}
              />
              <m.path
                d="M0 72 L36 66 L72 70 L108 52 L144 56 L180 36 L216 40 L252 22 L288 16 L320 8 L320 88 L0 88 Z"
                fill="url(#ciArea)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={reduce ? { duration: 0 } : { duration: 0.4, ease, delay: 1.2 }}
              />
            </svg>
          </div>

          {/* KPI tiles */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-ink-700/60 bg-ink-900/50 p-3 transition-colors duration-300 hover:border-accent-400/40"
              >
                <p className="font-display text-xl font-bold text-paper">
                  <CountUpMetric
                    value={t.value}
                    prefix={"prefix" in t ? t.prefix : ""}
                    suffix={t.suffix}
                    decimals={t.decimals}
                    delay={KPI_DELAY}
                  />
                </p>
                <p className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-mist-400">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honesty: this is a product UI mockup, not a real client account. The
            site's positioning is "proof we earn, not invent" - so the panel is
            labelled as illustrative sample data. */}
        <p className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mist-400/80">
          Illustrative dashboard · sample data, not client results
        </p>
      </div>

      {/* Floating metric chips around the panel */}
      <FloatingChip
        className="-right-4 top-16 animate-float-slow sm:-right-8"
        label="Audit score"
        value="92"
        accent
        reduce={!!reduce}
        delay={0.7}
      />
      <FloatingChip
        className="-left-3 bottom-24 animate-float-delayed sm:-left-7"
        label="Tracking"
        value="Server-side"
        reduce={!!reduce}
        delay={0.85}
      />
    </m.div>
  );
}

/** Animated circular campaign-health score. */
function HealthRing({ reduce }: { reduce: boolean }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const pct = 0.92;
  return (
    <div className="relative grid h-[68px] w-[68px] place-items-center">
      <svg viewBox="0 0 64 64" className="h-[68px] w-[68px] -rotate-90">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3aa0ff" />
            <stop offset="100%" stopColor="#34e3e3" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(39,50,77,0.8)" strokeWidth="5" />
        <m.circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={reduce ? { duration: 0 } : { duration: 1.1, ease, delay: 0.7 }}
        />
      </svg>
      <div className="absolute text-center">
        <span className="font-display text-base font-bold text-paper">
          <CountUpMetric value={92} delay={0.7} />
        </span>
        <span className="block font-mono text-[0.55rem] uppercase tracking-wide text-mist-400">
          health
        </span>
      </div>
    </div>
  );
}

function FloatingChip({
  className,
  label,
  value,
  accent,
  reduce,
  delay,
}: {
  className: string;
  label: string;
  value: string;
  accent?: boolean;
  reduce: boolean;
  delay: number;
}) {
  return (
    <m.div
      className={`metric-chip absolute z-10 hidden rounded-xl px-3 py-2 sm:block ${className}`}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={reduce ? { duration: 0.3 } : { duration: 0.6, ease, delay }}
    >
      <span className="font-mono text-[0.6rem] uppercase tracking-wide text-mist-400">
        {label}
      </span>
      <span
        className={`block font-display text-sm font-bold ${accent ? "text-gradient" : "text-paper"}`}
      >
        {value}
      </span>
    </m.div>
  );
}
