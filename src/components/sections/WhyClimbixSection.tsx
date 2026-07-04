import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { whyClimbix } from "@/lib/site";

/**
 * "Why Climbix" positioning band. Six differentiators rendered as calm
 * editorial blocks on an ivory field - bronze index + hairline rule, no boxed
 * icon cards. The argument is clarity before spend, stated plainly.
 */
export function WhyClimbixSection() {
  return (
    <Section id="why" className="bg-ivory-100">
      <Reveal>
        <SectionHeading
          eyebrow="Why Climbix"
          title={
            <>
              Built for brands that want clarity before more{" "}
              <span className="text-bronze">spend</span>.
            </>
          }
          description="Most agencies start by asking for budget. We start by finding out where yours is going."
        />
      </Reveal>

      <StaggerContainer
        as="ol"
        className="mt-16 grid list-none grid-cols-1 gap-x-10 gap-y-12 md:mt-20 md:grid-cols-2 lg:grid-cols-3"
      >
        {whyClimbix.map((item, index) => (
          <StaggerItem key={item.title} as="li">
            <div className="flex items-center gap-4">
              <span aria-hidden className="bronze-rule w-10 shrink-0" />
              <span className="doc-kicker">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-graphite">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {item.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
