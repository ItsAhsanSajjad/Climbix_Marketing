import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/Icon";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { offer, formBadges } from "@/lib/site";

/**
 * OfferSection - the strong offer block (#audit, nav target).
 * One premium dark split card on the ivory canvas: positioning on the left,
 * tangible deliverables + the low-friction CTA on the right. Copy lives in
 * site.ts (`offer`); this file is layout only.
 */

// Split the offer title so exactly one word carries the champagne emphasis.
const titleWords = offer.title.split(" ");
const titleLead = titleWords.slice(0, -1).join(" ");
const titleEmphasis = titleWords[titleWords.length - 1];

export function OfferSection() {
  return (
    <Section id="audit">
      <Reveal blur={false}>
        <div className="dark-section relative overflow-hidden rounded-[2.5rem] shadow-lift-lg">
          {/* Thin champagne edge along the top - quiet premium marker. */}
          <div aria-hidden className="champagne-rule absolute inset-x-0 top-0" />

          <div className="grid gap-10 px-6 py-14 md:px-14 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            {/* LEFT - positioning */}
            <div>
              <p className="doc-kicker">{offer.kicker}</p>
              <h2 className="mt-4 font-display text-lux-sm text-white md:text-lux-md">
                {titleLead} <span className="text-bronze">{titleEmphasis}</span>
              </h2>
              <p className="mt-5 max-w-xl text-lux-body text-mist-200">{offer.positioning}</p>
              <p className="mt-6 font-editorial text-lg italic text-bronze-300">{offer.value}</p>
            </div>

            {/* RIGHT - deliverables + CTA */}
            <div className="rounded-3xl bg-white p-7 shadow-lift">
              <StaggerContainer as="ul" className="space-y-3.5">
                {offer.deliverables.map((item) => (
                  <StaggerItem key={item} as="li" className="flex items-start gap-3">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <span className="text-base text-graphite">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Button href="/free-marketing-audit" size="lg" className="mt-7 w-full">
                {offer.cta}
              </Button>
              <p className="mt-3 text-center text-sm text-slate-500">{offer.risk}</p>

              <TrustBadges items={formBadges} className="mt-5 justify-center" />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
