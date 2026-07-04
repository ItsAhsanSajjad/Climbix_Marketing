import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { testimonials } from "@/lib/site";

/**
 * REPLACE WITH REAL CLIENT PROOF BEFORE PRODUCTION - flip placeholder:false in
 * site.ts when real testimonials arrive. Until then this section is an honest
 * "what clients should expect" module: no invented names, faces, or companies.
 */

type Testimonial = {
  placeholder: boolean;
  quote: string;
  expectation: string;
  name: string;
  role: string;
  company: string;
  service: string;
};

// Widen the as-const literal so the placeholder flag can be branched on.
const entries: readonly Testimonial[] = testimonials;

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-ivory-100">
      <Reveal>
        <SectionHeading
          eyebrow="What to expect"
          title={
            <>
              The experience clients should <span className="text-bronze">expect</span>
            </>
          }
          description="Climbix is newly launched. We do not publish borrowed or invented testimonials - so instead of fake praise, here is the standard every engagement is held to. Real client feedback will appear here as engagements mature."
        />
      </Reveal>

      <StaggerContainer
        as="ul"
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {entries.map((t) => (
          <StaggerItem as="li" key={t.expectation} className="h-full">
            <figure className="lux-card flex h-full flex-col p-8">
              <span
                aria-hidden="true"
                className="font-editorial text-5xl leading-none text-bronze"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 font-editorial text-xl leading-relaxed text-graphite">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex flex-col gap-3">
                <div className="bronze-rule w-12" />
                {t.placeholder === false ? (
                  // Real, attributed, client-approved testimonial.
                  <>
                    <p className="text-sm font-semibold text-graphite">{t.name}</p>
                    <p className="text-sm text-slate-500">
                      {t.role}
                      {t.company ? `, ${t.company}` : ""}
                    </p>
                    <p className="text-sm text-slate-500">{t.service}</p>
                  </>
                ) : (
                  // Honest placeholder: the expectation we commit to, not a fake person.
                  <>
                    <span className="doc-kicker">{t.expectation}</span>
                    <p className="text-sm text-slate-500">{t.service}</p>
                  </>
                )}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-slate-500">
          Published feedback will always be real, attributed, and client-approved.
        </p>
      </Reveal>
    </Section>
  );
}
