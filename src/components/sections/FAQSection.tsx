import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { faqs, site } from "@/lib/site";

/**
 * FAQ - objection handling. Sticky editorial intro on the left, a single-column
 * accordion on the right (native <details>, keyboard accessible, no JS). Emits
 * FAQPage JSON-LD for rich results.
 */
export function FAQSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <EditorialSection id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <EditorialHeading
            index="05 / 05"
            eyebrow="Questions, answered"
            title={
              <>
                Everything you would ask on the{" "}
                <span className="text-cobalt-gradient">first call</span>
              </>
            }
            lead="Straight answers - including the ones agencies usually dodge."
          />
          <div className="mt-8 hidden lg:block">
            <EditorialButton href={site.ctaPrimary.href} size="md">
              {site.ctaPrimary.label}
            </EditorialButton>
          </div>
        </div>

        <StaggerContainer stagger={0.06} className="flex flex-col gap-3">
          {faqs.map((f) => (
            <StaggerItem key={f.q}>
              <details className="group surface-card rounded-2xl open:border-cobalt-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-graphite-900 [&::-webkit-details-marker]:hidden">
                  <h3 className="contents">{f.q}</h3>
                  <span className="faq-chev flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-graphite-900/15 text-cobalt-600 transition-transform duration-300" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-graphite-600">{f.a}</p>
              </details>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </EditorialSection>
  );
}
