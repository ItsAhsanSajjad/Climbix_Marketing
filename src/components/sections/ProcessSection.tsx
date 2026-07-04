import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The process - a calm, premium four-step timeline on the ivory canvas.
 * Desktop: four columns joined by a thin platinum hairline running through
 * bronze-outlined number circles. Mobile: a vertical stack with a left rail.
 * Each step closes with a single teal-check "You get:" deliverable line.
 */
export function ProcessSection() {
  return (
    <Section id="process">
      <Reveal>
        <SectionHeading
          eyebrow="The process"
          title={
            <>
              From audit to scale - with no black{" "}
              <span className="text-bronze">box</span>.
            </>
          }
          description="Four disciplined steps from diagnosis to growth. At every stage you know what we are doing, why we are doing it, and exactly what you receive."
        />
      </Reveal>

      <StaggerContainer
        as="ol"
        stagger={0.12}
        delayChildren={0.1}
        className="mt-16 flex flex-col md:mt-20 md:grid md:grid-cols-4 md:gap-10"
      >
        {processSteps.map((s, i) => {
          const isLast = i === processSteps.length - 1;
          return (
            <StaggerItem
              as="li"
              key={s.step}
              className="relative flex gap-6 md:flex-col md:gap-0"
            >
              {/* Desktop hairline segment joining this circle to the next. */}
              {!isLast && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-14 right-[-2.5rem] top-7 hidden h-px bg-platinum-300 md:block"
                />
              )}

              {/* Number circle + mobile left rail. */}
              <div className="flex flex-col items-center md:block">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-bronze-400 bg-white text-base font-semibold text-bronze-600 shadow-soft">
                  {s.step}
                </div>
                {!isLast && (
                  <div
                    aria-hidden
                    className="mt-3 w-px flex-1 bg-platinum-300 md:hidden"
                  />
                )}
              </div>

              <div className={cn("pt-2.5 md:mt-7 md:pt-0", !isLast && "pb-12 md:pb-0")}>
                <h3 className="text-lg font-semibold text-graphite">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {s.body}
                </p>
                <p className="mt-5 flex items-start gap-2.5 text-sm font-medium text-graphite">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <span>
                    <span className="text-slate-500">You get:</span> {s.deliverable}
                  </span>
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
