import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { measures, proofStatus } from "@/lib/site";

/**
 * Proof framework - the honest answer to "where are your results?". Instead of
 * borrowed logos or invented numbers, it shows the discipline: exactly what we
 * measure, a transparent note on launch-phase proof status, and a clearly
 * labelled example of the case-study structure real results will fill later.
 */
export function ProofFramework() {
  return (
    <Section id="results">
      <Reveal>
        <SectionHeading
          index="04 / 05"
          eyebrow="Proof & measurement"
          title={
            <>
              We measure what moves{" "}
              <span className="text-gradient">revenue</span>
            </>
          }
          description="Optimising for impressions and clicks is how budgets get wasted. These are the metrics every Climbix engagement is judged on."
        />
      </Reveal>

      {/* What we measure */}
      <StaggerContainer
        stagger={0.06}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {measures.map((m) => (
          <StaggerItem key={m.label} className="h-full">
            <div className="glass-panel flex h-full flex-col gap-1 rounded-2xl p-4">
              <span className="font-mono text-sm font-semibold text-gradient">{m.metric}</span>
              <span className="text-xs leading-snug text-mist-200">{m.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Honest proof status */}
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-ink-600/70 bg-ink-900/40 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-paper">{proofStatus.heading}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-200">{proofStatus.body}</p>
            <div className="mt-6">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent-300">
                {proofStatus.focusLabel}
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {proofStatus.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-accent-400/20 bg-accent-500/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-accent-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Example case-study structure - clearly marked as a template */}
        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col rounded-3xl border border-dashed border-ink-600 bg-ink-950/30 p-6 md:p-8">
            <span className="absolute right-5 top-5 rounded-full border border-ink-600/60 bg-ink-950/60 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wide text-mist-400">
              Example layout
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mist-400">
              Case study · structure
            </span>
            <div className="mt-5 flex flex-col gap-4">
              {[
                { k: "Challenge", v: "The growth problem we were brought in to solve." },
                { k: "What we did", v: "The system we built - campaigns, pages, tracking." },
                { k: "What we measured", v: "CPL, conversion rate, ROAS - before and after." },
              ].map((row) => (
                <div key={row.k} className="border-l-2 border-ink-600 pl-4">
                  <span className="font-mono text-[0.6rem] uppercase tracking-wide text-accent-300">
                    {row.k}
                  </span>
                  <p className="text-sm text-mist-300">{row.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-mist-400">
              Real case studies are added here as live campaigns publish - never borrowed or invented.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
