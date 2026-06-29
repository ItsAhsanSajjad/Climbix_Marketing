import { IconCheck } from "@/components/ui/Icon";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { landing, heroTrustIndicators } from "@/lib/site";

/**
 * PPC landing hero (editorial light) - one clear offer on the left, the lead
 * form in a deep-navy panel on the right (form above the fold). Sharper and more
 * direct than the homepage hero. No distractions.
 */
export function LandingHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="mx-auto w-full max-w-[1180px] px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          {/* Offer */}
          <StaggerContainer trigger="mount" stagger={0.1} className="flex flex-col items-start gap-5">
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-cobalt-200 bg-cobalt-50 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-cobalt-700">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt-500" aria-hidden />
                Free Marketing Audit
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-editorial text-edito-sm leading-[1.06] text-graphite-900 sm:text-edito-md lg:text-[3.4rem]">
                {landing.headline}{" "}
                <span className="text-cobalt-gradient">{landing.headlineAccent}</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-xl text-lg leading-relaxed text-graphite-600">{landing.subhead}</p>
            </StaggerItem>
            <StaggerItem as="div">
              <ul className="flex flex-col gap-2.5">
                {heroTrustIndicators.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-graphite-700">
                    <IconCheck className="h-4 w-4 shrink-0 text-cobalt-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <p className="font-mono text-[0.72rem] uppercase tracking-wide text-graphite-500">
                {landing.microcopy}
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Form in a deep-navy panel */}
          <Reveal>
            <div
              id="audit-form"
              className="relative scroll-mt-24 overflow-hidden rounded-4xl bg-navy-900 p-6 shadow-lift md:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cobalt-500/25 blur-3xl" aria-hidden />
              <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-400/60 to-transparent" />
              <div className="relative">
                <h2 className="font-display text-xl font-bold text-white">Get your free audit</h2>
                <p className="mt-1.5 text-sm text-white/65">
                  Takes 30 seconds. We will review and send back your biggest leaks.
                </p>
                <LeadForm source="audit" tone="dark" submitLabel="Get My Free Audit" className="mt-6" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
