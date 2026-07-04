import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { measures, proofStatus } from "@/lib/site";

/**
 * Measurement - trust through transparency. The six numbers Climbix optimises
 * toward, followed by the honest proof-status statement: no invented case
 * studies, method as the proof.
 */
export function MeasurementSection() {
  return (
    <Section id="results">
      <Reveal>
        <SectionHeading
          eyebrow="Measurement"
          title={
            <>
              We measure what actually moves <span className="text-bronze">revenue</span>.
            </>
          }
          description="Every campaign is optimised toward the numbers that build pipeline - not the vanity metrics that just decorate a report."
        />
      </Reveal>

      {/* The six measures - compact reference grid. */}
      <StaggerContainer
        as="ul"
        className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {measures.map((item) => (
          <StaggerItem as="li" key={item.metric} className="h-full">
            <div className="lux-card flex h-full flex-col gap-1.5 rounded-2xl p-5">
              <span className="text-lg font-semibold text-cobalt-600">
                {item.metric}
              </span>
              <span className="text-sm text-slate-600">{item.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Honest proof status - no fake case studies, method as proof. */}
      <Reveal delay={0.1}>
        <div className="doc-panel mt-8 p-8 md:p-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <h3 className="text-xl font-semibold text-graphite md:text-2xl">
              {proofStatus.heading}
            </h3>
            <p className="text-lux-body text-slate-600">{proofStatus.body}</p>
            <div className="bronze-rule mt-2 w-16" aria-hidden="true" />
            <p className="doc-kicker">{proofStatus.focusLabel}</p>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {proofStatus.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-platinum-300 bg-platinum-100 px-4 py-1.5 text-sm font-medium text-cobalt-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
