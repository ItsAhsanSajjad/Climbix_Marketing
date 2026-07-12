import { Container } from "@/components/ui/Container";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { callOutcomes, contactForm, finalCta, formBadges } from "@/lib/site";

/**
 * Renders finalCta.headline with finalCta.headlineEmphasis carrying the bronze
 * accent. Data-driven; falls back to the plain headline.
 */
function FinalHeadline() {
  const { headline, headlineEmphasis } = finalCta;
  const index = headline.indexOf(headlineEmphasis);
  if (index === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, index)}
      <span className="text-bronze">{headlineEmphasis}</span>
      {headline.slice(index + headlineEmphasis.length)}
    </>
  );
}

/**
 * Final CTA room - deep midnight navy, decisive close (#contact). Same promise
 * as the hero: the visitor requests a free audit (a call may follow, but the
 * form never alternates between promising an audit and promising a booking).
 * The what-happens-next list sets expectations without invented SLAs.
 */
export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-section md:py-section-lg">
      <Container>
        <Reveal>
          <div className="dark-section relative overflow-hidden rounded-[2.5rem] px-6 py-16 shadow-lift-lg sm:px-10 md:px-16 md:py-20">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cobalt-500/15 blur-[90px]" />
            <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-bronze-500/10 blur-[90px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              {/* Copy + expectations */}
              <div className="flex flex-col items-start">
                <span className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze-400/70" aria-hidden />
                  <span className="doc-kicker text-bronze-300">{finalCta.eyebrow}</span>
                </span>
                <h2 className="mt-6 font-display text-lux-sm text-white md:text-lux-md">
                  <FinalHeadline />
                </h2>
                <p className="mt-5 max-w-reading text-lux-body text-mist-200">
                  {finalCta.subhead}
                </p>

                <div className="bronze-rule mt-9 w-full max-w-reading" aria-hidden />

                <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-mist-300">
                  What happens next
                </p>
                <ol className="mt-4 flex flex-col gap-4">
                  {callOutcomes.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15 font-mono text-xs font-semibold text-teal-400">
                        {i + 1}
                      </span>
                      <span className="text-base text-mist-100">{item}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-8 flex items-center gap-2 text-base text-bronze-300/90">
                  <IconCheck className="h-4 w-4 shrink-0" />
                  {finalCta.microcopy}
                </p>
              </div>

              {/* Light form sheet */}
              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-white p-6 shadow-lift-lg sm:p-8">
                  <h3 className="text-xl font-semibold text-graphite">
                    {contactForm.title}
                  </h3>
                  <p className="mt-1.5 text-base text-slate-600">
                    {contactForm.subtitle}
                  </p>
                  <LeadForm
                    source="home"
                    submitLabel={contactForm.submitLabel}
                    className="mt-6 w-full"
                  />
                  <p className="mt-4 text-sm text-slate-500">{contactForm.privacy}</p>
                  <TrustBadges items={formBadges} className="mt-6" />
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
