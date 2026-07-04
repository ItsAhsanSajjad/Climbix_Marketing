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
 * have questions" CTA keeps the conversion path one tap away. Light luxury room.
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
          eyebrow="Questions, answered"
          title={
            <>
              Everything you&apos;d ask on the first{" "}
              <span className="text-bronze">call</span>
            </>
          }
          description="Straight, considered answers - including the ones most firms prefer to leave unspoken."
        />
      </Reveal>

      <div className="mx-auto mt-20 grid max-w-5xl gap-5 md:grid-cols-2">
        {columns.map((col, ci) => (
          <StaggerContainer key={ci} stagger={0.07} className="flex flex-col gap-5">
            {col.map((f) => (
              <StaggerItem key={f.q}>
                <FAQItem q={f.q} a={f.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="lux-card mx-auto mt-20 flex max-w-5xl flex-col items-center justify-between gap-8 px-10 py-10 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col gap-2">
            <p className="doc-kicker">Still deciding</p>
            <p className="text-lux-body text-slate-600">
              Have a question we didn&apos;t cover?{" "}
              <span className="text-graphite">
                Bring it to a private, no-pressure conversation.
              </span>
            </p>
          </div>
          <Button href={site.ctaPrimary.href} size="lg" data-cta="faq">
            {site.ctaPrimary.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
