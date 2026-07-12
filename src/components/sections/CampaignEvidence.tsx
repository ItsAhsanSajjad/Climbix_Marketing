import { Container } from "@/components/ui/Container";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { caseStudies, campaignEvidence } from "@/lib/site";

/**
 * Campaign evidence - the visual-proof layer.
 *
 * Recreates the reporting view behind three verified campaigns as branded,
 * browser-framed dashboards. The numbers are the SAME verified figures rendered
 * in `caseStudies` (primary + secondary) - no new claims, one source of truth.
 * Raw Google Ads exports are deliberately NOT shipped: several contain account
 * emails / client PII (see docs/stats-sources.md), so we rebuild the view in our
 * own design language and say so on-section. Light "screens" glow on obsidian.
 */

const accents = ["cobalt", "teal", "bronze"] as const;
type Accent = (typeof accents)[number];

const accentBar: Record<Accent, string> = {
  cobalt: "bg-cobalt-500",
  teal: "bg-teal-500",
  bronze: "bg-bronze-400",
};
const accentText: Record<Accent, string> = {
  cobalt: "text-cobalt-600",
  teal: "text-teal-600",
  bronze: "text-bronze-600",
};
const accentStroke: Record<Accent, string> = {
  cobalt: "#2458FF",
  teal: "#20BFA9",
  bronze: "#C8A45D",
};

/** A single KPI tile - mono label, large display value, thin accent edge. */
function MetricTile({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: Accent;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-platinum-300 bg-ivory-50 p-3.5 sm:p-4">
      <span aria-hidden className={`absolute inset-y-0 left-0 w-1 ${accentBar[accent]}`} />
      <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 font-display text-xl font-bold leading-none tracking-tight text-graphite sm:text-2xl">
        {value}
      </dd>
    </div>
  );
}

/**
 * Decorative trend line - a rising reporting sparkline. Purely visual (no axis,
 * no claimed values); `seed` just varies the silhouette per campaign so the
 * three frames don't look copy-pasted. aria-hidden.
 */
function Sparkline({ seed, accent }: { seed: number; accent: Accent }) {
  const base = [18, 22, 16, 26, 20, 30, 24, 34, 30, 40];
  const pts = base.map((y, i) => {
    const jitter = ((Math.sin(seed * 3.7 + i) + 1) / 2) * 8;
    const yy = 46 - (y + jitter);
    return [i * (240 / (base.length - 1)), Math.max(6, yy)] as const;
  });
  const line = pts.map((p) => p.join(",")).join(" ");
  const area = `0,46 ${line} 240,46`;
  const id = `spark-${seed}`;
  return (
    <svg
      viewBox="0 0 240 48"
      preserveAspectRatio="none"
      className="h-10 w-full sm:h-12"
      aria-hidden
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accentStroke[accent]} stopOpacity="0.18" />
          <stop offset="100%" stopColor={accentStroke[accent]} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${id})`} />
      <polyline
        points={line}
        fill="none"
        stroke={accentStroke[accent]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Browser chrome bar - a generic reporting-tool window, no account details. */
function ChromeBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-platinum-200 bg-white px-4 py-2.5">
      <span aria-hidden className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-platinum-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-platinum-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-platinum-300" />
      </span>
      <span className="ml-1 inline-flex items-center gap-1.5 truncate rounded-md bg-ivory-100 px-2.5 py-1 font-mono text-[0.65rem] text-slate-500">
        <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 1 1 8 0v4" />
        </svg>
        {label}
      </span>
    </div>
  );
}

export function CampaignEvidence() {
  const [featured, ...supporting] = caseStudies;
  const fAccent = accents[0];

  return (
    <section
      id="evidence"
      aria-labelledby="evidence-heading"
      className="dark-section relative overflow-hidden scroll-mt-24 py-section md:py-section-lg"
    >
      <div aria-hidden className="signal-grid pointer-events-none absolute inset-0 opacity-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cobalt-500/15 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px]"
      />

      <Container className="relative">
        {/* Header */}
        <Reveal className="flex max-w-3xl flex-col items-start gap-4">
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-bronze-400/70" aria-hidden />
            <span className="doc-kicker text-bronze-300">{campaignEvidence.eyebrow}</span>
          </span>
          <h2
            id="evidence-heading"
            className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {campaignEvidence.headline}
          </h2>
          <p className="text-base leading-relaxed text-mist-300">
            {campaignEvidence.description}
          </p>
        </Reveal>

        {/* Featured reporting view */}
        <Reveal delay={0.1} className="mt-12">
          <figure className="overflow-hidden rounded-3xl bg-white shadow-lift-lg ring-1 ring-white/10">
            <ChromeBar label={campaignEvidence.featuredLabel} />
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
              {/* Hero metric + trend */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-ivory-100 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-slate-500">
                    {featured.market}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-ivory-100 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-slate-500">
                    {featured.period}
                  </span>
                </div>
                <span className={`mt-5 font-display text-6xl font-bold leading-none tracking-tight text-graphite sm:text-7xl`}>
                  {featured.primary.value}
                </span>
                <span className="mt-2 text-base font-medium text-slate-600">
                  {featured.primary.label}
                </span>
                <div className="mt-6 rounded-xl border border-platinum-300 bg-ivory-50 p-3">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-500">
                    Daily trend
                  </span>
                  <Sparkline seed={1} accent={fAccent} />
                </div>
              </div>

              {/* Supporting KPI tiles */}
              <dl className="grid grid-cols-2 gap-3 self-center sm:gap-4">
                {featured.secondary.map((mtr, i) => (
                  <MetricTile
                    key={mtr.label}
                    label={mtr.label}
                    value={mtr.value}
                    accent={accents[(i + 1) % accents.length]}
                  />
                ))}
              </dl>
            </div>
            <figcaption className="flex items-start gap-2 border-t border-platinum-200 bg-ivory-50 px-6 py-3.5 text-xs leading-relaxed text-slate-500 sm:px-8">
              <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
              <span>{featured.context}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Two supporting reporting views */}
        <StaggerContainer
          as="ul"
          stagger={0.12}
          className="mt-6 grid list-none grid-cols-1 gap-6 md:mt-8 md:grid-cols-2"
        >
          {supporting.map((cs, idx) => {
            const accent = accents[(idx + 1) % accents.length];
            return (
              <StaggerItem as="li" key={cs.slug}>
                <figure className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-white/10">
                  <ChromeBar label={`${cs.campaignType}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-ivory-100 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-slate-500">
                        {cs.market}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-ivory-100 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-slate-500">
                        {cs.period}
                      </span>
                    </div>
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <div>
                        <span className={`font-display text-5xl font-bold leading-none tracking-tight ${accentText[accent]}`}>
                          {cs.primary.value}
                        </span>
                        <span className="mt-1.5 block text-sm font-medium text-slate-600">
                          {cs.primary.label}
                        </span>
                      </div>
                      <div className="w-24 shrink-0 sm:w-28">
                        <Sparkline seed={idx + 2} accent={accent} />
                      </div>
                    </div>
                    <dl className="mt-5 grid grid-cols-2 gap-3">
                      {cs.secondary.slice(0, 2).map((mtr, i) => (
                        <MetricTile
                          key={mtr.label}
                          label={mtr.label}
                          value={mtr.value}
                          accent={accents[(idx + i + 1) % accents.length]}
                        />
                      ))}
                    </dl>
                  </div>
                  <figcaption className="flex items-start gap-2 border-t border-platinum-200 bg-ivory-50 px-6 py-3.5 text-xs leading-relaxed text-slate-500">
                    <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                    <span>{cs.context}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-3xl border-t border-white/10 pt-5 text-sm leading-relaxed text-mist-300">
            {campaignEvidence.footnote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
