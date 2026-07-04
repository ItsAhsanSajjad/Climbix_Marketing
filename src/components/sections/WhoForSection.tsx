import { whoFor } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

/**
 * Qualification section - selectivity builds authority. A calm, factual
 * two-column fit statement: who the engagement is built for, and who it is
 * honestly not for. Closes with a single low-friction path into the audit.
 */
export function WhoForSection() {
  return (
    <Section id="fit" className="bg-ivory-100">
      <Reveal>
        <SectionHeading
          eyebrow={whoFor.eyebrow}
          title={
            <>
              This is for brands that want <span className="text-bronze">clarity</span> before
              scale.
            </>
          }
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
        {/* Fit column - the reader we are built for. */}
        <Reveal className="h-full">
          <div className="lux-card h-full p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite">
              This is for you if
            </h3>
            <div className="champagne-rule mt-4" aria-hidden />
            <StaggerContainer as="ul" className="mt-6 flex flex-col gap-4">
              {whoFor.forItems.map((item) => (
                <StaggerItem key={item} as="li" className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                  <span className="text-base text-graphite">{item}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Reveal>

        {/* Non-fit column - calm and factual, not snarky. */}
        <Reveal delay={0.1} className="h-full">
          <div className="h-full rounded-3xl border border-platinum-300 bg-ivory-200 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">
              Not a fit if
            </h3>
            <div className="mt-4 h-px bg-platinum-300" aria-hidden />
            <StaggerContainer as="ul" className="mt-6 flex flex-col gap-4">
              {whoFor.notForItems.map((item) => (
                <StaggerItem key={item} as="li" className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-[3px] w-3.5 shrink-0 rounded-full bg-slate-400"
                  />
                  <span className="text-base text-slate-600">{item}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Reveal>
      </div>

      {/* Single clear next step for the qualified reader. */}
      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col items-center gap-5 text-center md:mt-14">
          <p className="text-base text-slate-600">
            If the left column sounds like you, start with the audit.
          </p>
          <Button href="/free-marketing-audit" size="lg">
            Get Free Audit
          </Button>
          <p className="text-sm text-slate-600">Free review. No pressure. Clear next steps.</p>
        </div>
      </Reveal>
    </Section>
  );
}
