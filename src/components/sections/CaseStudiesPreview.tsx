import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { caseStudies, caseStudiesPreview } from "@/lib/site";

/**
 * Selected case studies - three anonymized, verified campaign outcomes.
 * Replaces the old placeholder case-study section with real evidence: one
 * primary metric per card, secondary metrics with period context, and a link
 * into the full /case-studies presentation. No invented numbers - every
 * figure traces to docs/stats-sources.md.
 */
export function CaseStudiesPreview() {
  return (
    <Section id="case-studies" className="bg-ivory-100">
      <Reveal>
        <SectionHeading
          eyebrow={caseStudiesPreview.eyebrow}
          title={
            <>
              Campaign outcomes, with <span className="text-bronze">context</span>
            </>
          }
          description={caseStudiesPreview.description}
        />
      </Reveal>

      <StaggerContainer
        as="ul"
        stagger={0.1}
        className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {caseStudies.map((cs) => (
          <StaggerItem as="li" key={cs.slug} className="h-full">
            <article className="lux-card flex h-full flex-col gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
              <div className="flex flex-col gap-2">
                <span className="doc-kicker">{cs.industry}</span>
                <h3 className="text-lg font-semibold leading-snug text-graphite">
                  {cs.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center rounded-full bg-ivory-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    {cs.market}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-ivory-100 px-2.5 py-0.5 font-mono text-xs text-slate-500">
                    {cs.period}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-graphite">Challenge. </span>
                  {cs.challenge}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-graphite">Approach. </span>
                  {cs.approach}
                </p>
              </div>

              <div className="mt-auto flex items-end justify-between gap-4 border-t border-platinum-200 pt-5">
                <div>
                  <span className="font-display text-4xl font-bold leading-none tracking-tight text-cobalt-600">
                    {cs.primary.value}
                  </span>
                  <span className="mt-1.5 block text-sm font-medium text-slate-600">
                    {cs.primary.label}
                  </span>
                </div>
                <Link
                  href={`/case-studies#${cs.slug}`}
                  data-cta={`case-preview-${cs.slug}`}
                  aria-label={`Read the ${cs.title} case study`}
                  className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg text-sm font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
                >
                  Read study
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <Button href={caseStudiesPreview.cta.href} size="lg" variant="secondary" data-cta="case-studies-all">
          {caseStudiesPreview.cta.label}
        </Button>
      </Reveal>
    </Section>
  );
}
