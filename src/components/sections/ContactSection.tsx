import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { LineSweep } from "@/components/motion/LineSweep";
import { LeadForm } from "@/components/forms/LeadForm";
import { callOutcomes } from "@/lib/site";

/**
 * Contact / conversion block - the homepage lead-capture climax (#contact).
 * Persuasive copy + the real lead form on the left; a concrete "what you get on
 * the call" preview + reassurance on the right so submitting feels low-risk.
 */
export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-section md:py-section-lg">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-accent-400/20 bg-ink-900/70 px-5 py-10 shadow-glow sm:px-8 md:px-12 md:py-14">
            <LineSweep origin="center" className="absolute inset-x-0 top-0" />
            <div
              className="orb-drift-a pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl"
              aria-hidden
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              {/* Copy + form */}
              <div className="flex flex-col items-start">
                <Eyebrow>Book your free strategy call</Eyebrow>
                <h2 className="mt-5 font-display text-display-sm text-paper md:text-[2.6rem] md:leading-[1.05]">
                  See where your growth system is{" "}
                  <span className="text-gradient">leaking</span>
                </h2>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-mist-200">
                  Tell us where you are and what you want to grow. We&apos;ll come
                  to the call with a clear read on your biggest leaks and the
                  highest-leverage moves to make first.
                </p>
                <LeadForm
                  source="home"
                  submitLabel="Book My Strategy Call"
                  className="mt-8 w-full"
                />
              </div>

              {/* Reassurance / what you get */}
              <Reveal delay={0.1}>
                <div className="glass-panel flex h-full flex-col rounded-2xl p-6 md:p-7">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-300">
                    On your free call, you&apos;ll get
                  </span>
                  <ul className="mt-5 flex flex-col gap-4">
                    {callOutcomes.map((item, i) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-400/30 bg-accent-500/15 font-mono text-[0.65rem] font-bold text-accent-300">
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-mist-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-2.5 border-t border-ink-700/60 pt-5">
                    <p className="flex items-center gap-2 text-xs text-mist-300">
                      <IconCheck className="h-4 w-4 shrink-0 text-cyan-400" />
                      Free 15-minute call · No obligation
                    </p>
                    <p className="flex items-center gap-2 text-xs text-mist-300">
                      <IconCheck className="h-4 w-4 shrink-0 text-cyan-400" />
                      If we&apos;re not a fit, we&apos;ll tell you - honestly.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
