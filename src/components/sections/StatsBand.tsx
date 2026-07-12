import { Container } from "@/components/ui/Container";
import { CountUpMetric } from "@/components/motion/CountUpMetric";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { stats, statsBand } from "@/lib/site";

/**
 * Verified statistics band - the proof layer, directly after the trust strip.
 *
 * Conversion psychology, applied honestly:
 *  - Anchoring: the aggregate total (356 - the simple sum of the three
 *    published campaigns, stats-sources.md · S5) lands first and frames the
 *    per-campaign numbers that follow.
 *  - Authority: a provenance chip states where every figure comes from.
 *  - Specificity: exact values (109, 99, $1.43, 31.62%) - never rounded up;
 *    precision is the credibility signal.
 *  - Outcome visualization: each metric carries a one-line benefit in teal.
 * Every figure maps to a row in docs/stats-sources.md. The markets stat (S4)
 * is folded into the aggregate context here; /case-studies still lists it.
 */
export function StatsBand() {
  // The three campaign metrics; S4 (markets) renders inside the anchor line.
  const campaignStats = stats.slice(0, 3);
  const ticks = ["bg-cobalt-400", "bg-teal-400", "bg-bronze-400"] as const;

  return (
    <section
      id="results"
      aria-labelledby="stats-heading"
      className="dark-section relative overflow-hidden scroll-mt-24"
    >
      <div aria-hidden className="signal-grid pointer-events-none absolute inset-0 opacity-25" />
      <Container className="relative py-16 md:py-24">
        <Reveal className="flex flex-col items-start gap-4">
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-bronze-400/70" aria-hidden />
            <span className="doc-kicker text-bronze-300">{statsBand.eyebrow}</span>
          </span>
          <h2
            id="stats-heading"
            className="max-w-3xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {statsBand.headline}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-mist-300">
            {statsBand.description}
          </p>
          {/* Provenance chip - the authority signal. */}
          <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-500/10 px-3.5 py-1.5 text-sm font-medium text-teal-300">
            <IconCheck className="h-4 w-4 shrink-0" />
            {statsBand.verification}
          </span>
        </Reveal>

        {/* Aggregate anchor - honest arithmetic: sum of the three campaigns. */}
        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:items-center sm:gap-9 md:p-9">
            <span className="font-display text-6xl font-bold leading-none tracking-tight text-white md:text-7xl">
              <CountUpMetric value={statsBand.aggregate.value} />
            </span>
            <span aria-hidden className="h-px w-full bg-white/10 sm:h-14 sm:w-px" />
            <div className="max-w-xl">
              <p className="text-lg font-semibold text-white">
                {statsBand.aggregate.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-mist-300">
                {statsBand.aggregate.context}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Three campaign columns - specificity + outcome framing. */}
        <StaggerContainer
          as="ul"
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0"
        >
          {campaignStats.map((stat, i) => (
            <StaggerItem
              as="li"
              key={stat.label}
              className={
                "flex flex-col gap-2.5 sm:px-7 " +
                (i === 0 ? "sm:pl-0 " : "sm:border-l sm:border-white/10 ")
              }
            >
              <span aria-hidden className={`h-1 w-9 rounded-full ${ticks[i]}`} />
              <span className="mt-2 font-display text-5xl font-bold leading-none tracking-tight text-white md:text-6xl">
                <CountUpMetric
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                  delay={0.1 * i}
                />
              </span>
              <span className="text-base font-medium text-mist-100">{stat.label}</span>
              {stat.benefit && (
                <span className="text-sm font-medium leading-relaxed text-teal-300">
                  {stat.benefit}
                </span>
              )}
              <span className="font-mono text-xs leading-relaxed tracking-wide text-mist-300">
                {stat.sublabel}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.15}>
          <p className="mt-12 max-w-3xl border-t border-white/10 pt-5 text-sm leading-relaxed text-mist-300">
            {statsBand.footnote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
