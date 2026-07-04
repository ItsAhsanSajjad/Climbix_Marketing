// MVP case study preview - replace with verified client case study before claiming outcomes.

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { caseStudy } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Case study preview - the documentation structure every engagement follows,
 * shown as a calm four-step flow (Problem, Diagnosis, Action, Result). The
 * Result card is deliberately numberless-claims: styled as a reserved slot so
 * it reads as "verified data goes here", never as invented performance.
 */
export function CaseStudySection() {
  // Wrap the word "results" in the champagne emphasis treatment.
  const [before, after] = caseStudy.headline.split("results");

  return (
    <Section id="case-study">
      <Reveal>
        <SectionHeading
          eyebrow={caseStudy.eyebrow}
          title={
            <>
              {before}
              <span className="text-bronze">results</span>
              {after}
            </>
          }
          description="Every engagement is documented the same way - from problem to verified outcome - so you always see the reasoning behind the numbers."
        />
      </Reveal>

      <StaggerContainer
        as="ol"
        stagger={0.1}
        delayChildren={0.1}
        className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-4"
      >
        {caseStudy.steps.map((step, i) => {
          const isResult = i === caseStudy.steps.length - 1;
          return (
            <StaggerItem as="li" key={step.label} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col p-6",
                  isResult
                    ? "rounded-3xl border-2 border-dashed border-platinum-300 bg-ivory-50"
                    : "lux-card",
                )}
              >
                <p className="doc-kicker">
                  {String(i + 1).padStart(2, "0")} {step.label}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-graphite">
                  {step.label}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <Reveal delay={0.15}>
        <p className="mt-10 text-center text-sm italic text-slate-500">
          {caseStudy.note}
        </p>
      </Reveal>
    </Section>
  );
}
