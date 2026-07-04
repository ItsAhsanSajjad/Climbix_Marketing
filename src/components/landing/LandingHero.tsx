import { Container } from "@/components/ui/Container";
import { IconCheck } from "@/components/ui/Icon";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { landing, landingChecklist } from "@/lib/site";

/**
 * PPC landing hero on the ivory canvas - one clear offer on the left, the lead
 * form visible above the fold in a white lux-card on the right. Direct
 * response, but advisory in tone: honest present-tense pain, no hype, bronze
 * reserved for the single emphasis phrase and the small document kicker.
 */
export function LandingHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Offer */}
          <StaggerContainer
            trigger="mount"
            stagger={0.1}
            className="flex flex-col items-start gap-7 lg:pt-6"
          >
            <StaggerItem>
              <span className="doc-kicker">Free marketing audit</span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-[2.5rem] font-bold leading-[1.04] tracking-tight text-graphite sm:text-lux-md lg:text-lux-lg">
                {landing.headline}{" "}
                <span className="text-bronze">{landing.headlineAccent}</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-prose text-lux-lead text-slate-600">
                {landing.subhead}
              </p>
            </StaggerItem>
            <StaggerItem as="div">
              <ul className="flex flex-col gap-3.5">
                {landingChecklist.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 text-base text-graphite sm:text-lg"
                  >
                    <IconCheck className="h-5 w-5 shrink-0 text-teal-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base font-medium text-slate-500">
                {landing.microcopy}
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Form - visible above the fold */}
          <Reveal>
            <div id="audit-form" className="lux-card scroll-mt-24 p-7 md:p-9">
              <span className="doc-kicker">The next step</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-graphite">
                Request your free audit
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                A few details is all it takes. We review your spend, pages, and
                tracking, then send back where the budget is leaking first.
              </p>
              <LeadForm
                source="audit"
                submitLabel="Request My Free Audit"
                className="mt-7"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
