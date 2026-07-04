import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { authority, whyClimbix } from "@/lib/site";

/**
 * Renders the authority headline with the "audit-first" phrase carrying the
 * single champagne emphasis. Data-driven from site.ts - falls back to the
 * plain headline if the phrase ever changes.
 */
function AuthorityTitle() {
  const phrase = "audit-first";
  const index = authority.headline.indexOf(phrase);
  if (index === -1) return <>{authority.headline}</>;
  return (
    <>
      {authority.headline.slice(0, index)}
      <span className="text-bronze">{phrase}</span>
      {authority.headline.slice(index + phrase.length)}
    </>
  );
}

/**
 * Authority section ("Why Climbix"). Six operating principles rendered as calm
 * editorial blocks on an ivory field - short bronze rule + champagne index, no
 * boxed icon cards. The sixth principle (we tell you when we're not the right
 * fit) carries a champagne left border: selectivity is the point.
 */
export function WhyClimbixSection() {
  const lastIndex = whyClimbix.length - 1;

  return (
    <Section id="why" className="bg-ivory-100">
      <Reveal>
        <SectionHeading
          eyebrow={authority.eyebrow}
          title={<AuthorityTitle />}
          description={authority.contrast}
        />
      </Reveal>

      <StaggerContainer
        as="ol"
        className="mt-16 grid list-none grid-cols-1 gap-x-10 gap-y-12 md:mt-20 md:grid-cols-2 lg:grid-cols-3"
      >
        {whyClimbix.map((item, index) => (
          <StaggerItem
            key={item.title}
            as="li"
            className={
              index === lastIndex
                ? "border-l-2 border-champagne-400 pl-6"
                : undefined
            }
          >
            <div className="flex items-center gap-4">
              <span aria-hidden className="bronze-rule w-10 shrink-0" />
              <span className="doc-kicker">
                {String(index + 1).padStart(2, "0")}
              </span>
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
