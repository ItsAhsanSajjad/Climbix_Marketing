import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { GrowthLeakConsole } from "@/components/sections/GrowthLeakConsole";
import { sampleAudit, offer } from "@/lib/site";

/**
 * Sample Audit - visual proof through clarity, never fabricated results.
 * Left: the Growth Leak Console (already labelled Illustrative). Right: the
 * four sample diagnostic views from site.ts as honest lux-cards, each footed
 * with "Sample diagnostic view" so nothing reads as client data. Closes with
 * a risk-reversal line and the free-audit CTA. Reduced-motion safe.
 */
export function SampleAuditSection() {
  return (
    <Section id="proof" className="bg-ivory-50">
      <Reveal>
        <SectionHeading
          eyebrow="What you will see"
          title={
            <>
              A clearer view of what is working, what is leaking,{" "}
              <span className="mt-2 block">
                and what to fix <span className="text-bronze">first</span>.
              </span>
            </>
          }
          description="These are sample diagnostic views that show how we present findings - not client results."
        />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        {/* Signature diagnostic visual - labelled Illustrative by construction */}
        <Reveal delay={0.1} blur={false}>
          <GrowthLeakConsole />
        </Reveal>

        {/* The four sample audit views */}
        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {sampleAudit.map((item, i) => (
            <StaggerItem key={item.title} className="lux-card flex flex-col p-6">
              <span
                className="font-editorial text-3xl leading-none text-bronze-500"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-graphite">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {item.body}
              </p>
              <span className="mt-auto pt-4 text-sm text-slate-500">
                Sample diagnostic view
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Risk-reversal + CTA */}
      <Reveal delay={0.1}>
        <div className="mt-16 flex flex-col items-center gap-5 text-center">
          <p className="text-base text-slate-600">{offer.risk}</p>
          <Button href="/free-marketing-audit" size="lg">
            Get Free Audit
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
