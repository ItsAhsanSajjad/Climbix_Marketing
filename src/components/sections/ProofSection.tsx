import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { measures, proofStatus, trustPillars } from "@/lib/site";

/**
 * Proof & measurement (light). A horizontal "signal board" of the metrics every
 * engagement is judged on, an honest launch-phase proof note, and a "how we
 * work" principles list as editorial rows (folds the old trust-pillars card
 * grid into a calmer rhythm). No invented numbers.
 */
export function ProofSection() {
  return (
    <EditorialSection id="results" tone="white">
      <EditorialHeading
        index="04 / 05"
        eyebrow="Proof & measurement"
        align="center"
        title={
          <>
            We measure what moves{" "}
            <span className="text-cobalt-gradient">revenue</span>
          </>
        }
        lead="Optimising for impressions and clicks is how budgets get wasted. These are the signals every Climbix engagement is judged on."
        className="mx-auto items-center"
      />

      {/* signal board */}
      <Reveal blur={false}>
        <div className="surface-card mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-graphite-900/8 sm:grid-cols-3 lg:grid-cols-6">
          {measures.map((mItem) => (
            <div key={mItem.label} className="flex flex-col gap-1.5 bg-white p-5">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt-500" aria-hidden />
                <span className="font-mono text-sm font-semibold text-cobalt-600">{mItem.metric}</span>
              </span>
              <span className="text-xs leading-snug text-graphite-600">{mItem.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal blur={false} delay={0.1}>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-graphite-500">
          {proofStatus.body}
        </p>
      </Reveal>

      {/* how we work - principles as editorial rows */}
      <div className="mt-16 border-t border-graphite-900/10 pt-12">
        <Reveal blur={false}>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cobalt-600">
            How we work
          </span>
        </Reveal>
        <StaggerContainer stagger={0.07} className="mt-7 grid gap-x-12 gap-y-0 md:grid-cols-2">
          {trustPillars.map((p, i) => (
            <StaggerItem
              as="div"
              key={p.title}
              className="flex gap-5 border-t border-graphite-900/10 py-5"
            >
              <span className="mt-1 font-mono text-sm font-semibold text-graphite-400">0{i + 1}</span>
              <div>
                <h3 className="text-base font-semibold text-graphite-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-600">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </EditorialSection>
  );
}
