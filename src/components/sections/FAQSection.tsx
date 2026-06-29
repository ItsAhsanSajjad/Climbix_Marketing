import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { FAQItem } from "@/components/sections/FAQItem";
import { Button } from "@/components/ui/Button";
import { faqs, site } from "@/lib/site";

/**
 * FAQ - objection handling. Two-column accordion of honest answers (no
 * guaranteed-results claims). Emits FAQPage JSON-LD for rich results. The "still
 * have questions" CTA keeps the conversion path one tap away.
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

  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  return (
    <Section id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal>
        <SectionHeading
          index="05 / 05"
          eyebrow="Questions, answered"
          title={
            <>
              Everything you&apos;d ask on the{" "}
              <span className="text-gradient">first call</span>
            </>
          }
          description="Straight answers - including the ones agencies usually dodge."
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        {columns.map((col, ci) => (
          <StaggerContainer key={ci} stagger={0.07} className="flex flex-col gap-4">
            {col.map((f) => (
              <StaggerItem key={f.q}>
                <FAQItem q={f.q} a={f.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-ink-600/70 bg-ink-900/40 px-6 py-5 sm:flex-row">
          <p className="text-sm text-mist-200">
            Still have a question? Get it answered on a free call.
          </p>
          <Button href={site.ctaPrimary.href} size="md" data-cta="faq">
            {site.ctaPrimary.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
