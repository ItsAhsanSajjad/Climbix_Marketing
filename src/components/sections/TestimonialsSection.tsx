import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { testimonials, testimonialsNote, trustFramework } from "@/lib/site";

/**
 * Trust section - single truth model: launch-stage honest.
 *
 * While every entry in site.ts `testimonials` is placeholder:true, this renders
 * the method-based trust framework ("Built to earn trust before claiming
 * results") - NO invented reviews ever reach the public page. The moment a
 * real, verified, client-approved quote is added (placeholder:false), the
 * section switches to attributed testimonial cards automatically and the
 * launch-stage framing gives way to real proof.
 */
export function TestimonialsSection() {
  const real = testimonials.filter((t) => !t.placeholder);

  if (real.length === 0) {
    return (
      <Section id="testimonials" className="bg-ivory-100">
        <Reveal>
          <SectionHeading
            eyebrow={trustFramework.eyebrow}
            title={
              <>
                Built to earn trust before claiming{" "}
                <span className="text-bronze">results</span>.
              </>
            }
            description={trustFramework.body}
          />
        </Reveal>

        <StaggerContainer
          stagger={0.09}
          className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {trustFramework.pillars.map((p, i) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="lux-card flex h-full flex-col p-7">
                <span className="doc-kicker">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-graphite">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-slate-500">{testimonialsNote}</p>
        </Reveal>
      </Section>
    );
  }

  // Real, verified, client-approved testimonials only.
  const featured = real.find((t) => t.featured) ?? real[0];
  const rest = real.filter((t) => t !== featured);

  return (
    <Section id="testimonials" className="bg-ivory-100">
      <Reveal>
        <SectionHeading
          eyebrow="Client experience"
          title={
            <>
              What working with Climbix feels{" "}
              <span className="text-bronze">like</span>
            </>
          }
        />
      </Reveal>

      <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-6">
        <Reveal>
          <figure className="doc-panel p-8 md:p-10">
            <blockquote className="font-editorial text-2xl leading-relaxed text-graphite">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display font-semibold text-bronze-300" aria-hidden>
                {featured.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-graphite">
                  {featured.name} · {featured.role}
                </span>
                <span className="block text-sm text-slate-500">{featured.company}</span>
              </span>
              <span className="ml-auto hidden rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-600 sm:inline-flex">
                {featured.resultTag}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {rest.length > 0 && (
          <StaggerContainer stagger={0.08} className="grid gap-6 md:grid-cols-2">
            {rest.map((t) => (
              <StaggerItem key={t.name} className="h-full">
                <figure className="lux-card flex h-full flex-col p-7">
                  <blockquote className="font-editorial text-lg leading-relaxed text-graphite">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-semibold text-bronze-300" aria-hidden>
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-graphite">
                        {t.name} · {t.role}
                      </span>
                      <span className="block text-sm text-slate-500">{t.company}</span>
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </Section>
  );
}
