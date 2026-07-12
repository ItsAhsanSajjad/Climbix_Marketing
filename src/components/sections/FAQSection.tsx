import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { FAQItem } from "@/components/sections/FAQItem";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/site";

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
              Everything you ask before the first{" "}
              <span className="text-bronze">call</span>.
            </>
          }
          description="Straight answers - including the ones agencies usually dodge."
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
            <p className="text-lg text-slate-600">
              Still unsure?{" "}
              <span className="text-graphite">Get the audit first.</span>
            </p>
            <p className="text-sm text-slate-600">
              Free, no obligation - the findings are yours to keep either way.
            </p>
          </div>
          <Button href="/free-marketing-audit" size="lg" data-cta="faq">
            Get Free Audit
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
