import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { sampleTestimonial } from "@/lib/site";

/**
 * Client-experience preview - MVP demo content, clearly labeled illustrative.
 *
 * PHASE TWO: replace `sampleTestimonial` in site.ts with a verified client
 * quote (real name/company only with written approval), then delete or soften
 * the `note` line. The layout needs no changes - it is a single centered
 * editorial quote so a real testimonial drops straight in.
 *
 * Design: quiet band on the porcelain canvas between the case-study evidence
 * and the process section. Fraunces italic carries the human voice; a bronze
 * rule + neutral role attribution keep it premium without inventing a person.
 */
export function TestimonialPreview() {
  return (
    <Section id="feedback" className="!py-16 md:!py-20">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="doc-kicker">{sampleTestimonial.eyebrow}</span>

        <figure className="mt-7 flex flex-col items-center">
          <span
            aria-hidden
            className="font-editorial text-6xl leading-none text-champagne-400"
          >
            {"“"}
          </span>
          <blockquote className="mt-2 font-editorial text-2xl italic leading-snug text-graphite md:text-[1.75rem]">
            {sampleTestimonial.quote}
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-2.5">
            <span aria-hidden className="bronze-rule w-12" />
            <span className="text-base font-semibold text-graphite">
              {sampleTestimonial.role}
            </span>
            <span className="text-sm text-slate-600">{sampleTestimonial.company}</span>
          </figcaption>
        </figure>

        {/* Subtle, honest disclosure - professional, not a warning banner. */}
        <p className="mt-9 max-w-xl font-mono text-xs leading-relaxed tracking-wide text-slate-500">
          {sampleTestimonial.note}
        </p>
      </Reveal>
    </Section>
  );
}
