import { Container } from "@/components/ui/Container";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { callOutcomes } from "@/lib/site";

/**
 * Final CTA room - deep midnight navy, decisive close (#contact). The spec
 * headline names what the visitor already suspects, the outcome list de-risks
 * the call, and the real lead form sits in a bright ivory sheet so the last
 * step feels effortless. LeadForm (validation, honeypot, source, UTM, tracking,
 * redirect) is used as-is.
 */
export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-section md:py-section-lg">
      <Container>
        <Reveal>
          <div className="dark-section relative overflow-hidden rounded-[2.75rem] px-6 py-16 shadow-lift-lg sm:px-10 md:px-16 md:py-20">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cobalt-500/15 blur-[110px]" />
            <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-bronze-500/10 blur-[110px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              {/* Copy + outcomes */}
              <div className="flex flex-col items-start">
                <span className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze-400/70" aria-hidden />
                  <span className="doc-kicker text-bronze-300">Free strategy call</span>
                </span>
                <h2 className="mt-6 font-display text-lux-sm text-white md:text-lux-md">
                  You already know your marketing has{" "}
                  <span className="text-bronze">gaps</span>.
                </h2>
                <p className="mt-5 max-w-reading text-lux-body text-mist-200">
                  Let us find them before they cost you another month of budget.
                  Bring your numbers. Leave with a clearer growth plan.
                </p>

                <div className="bronze-rule mt-9 w-full max-w-reading" aria-hidden />

                <ul className="mt-8 flex flex-col gap-4">
                  {callOutcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
                        <IconCheck className="h-4 w-4" />
                      </span>
                      <span className="text-base text-mist-100">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-base text-bronze-300/90">
                  30 minutes. Zero pressure. Honest answers either way.
                </p>
              </div>

              {/* Light form sheet */}
              <Reveal delay={0.1}>
                <div className="rounded-4xl bg-white p-6 shadow-lift-lg sm:p-8">
                  <h3 className="text-xl font-semibold text-graphite">
                    Book your free strategy call
                  </h3>
                  <p className="mt-1.5 text-base text-slate-600">
                    Tell us where you are. We&apos;ll come prepared.
                  </p>
                  <LeadForm
                    source="home"
                    submitLabel="Book My Free Strategy Call"
                    className="mt-6 w-full"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
