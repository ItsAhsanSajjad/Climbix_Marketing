import { Container } from "@/components/ui/Container";
import { IconCheck } from "@/components/ui/Icon";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { landing, heroTrustIndicators } from "@/lib/site";

/**
 * PPC landing hero - one clear offer + the lead form above the fold. Built for
 * paid traffic: benefit-driven headline, trust right next to the form, no
 * distractions.
 */
export function LandingHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-16">
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Offer */}
          <StaggerContainer trigger="mount" stagger={0.1} className="flex flex-col items-start gap-5">
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/25 bg-accent-500/10 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />
                Free Marketing Audit
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-[2.4rem] font-bold leading-[1.05] tracking-tight text-paper sm:text-display-md lg:text-[3.6rem] lg:leading-[1.02]">
                {landing.headline}{" "}
                <span className="text-gradient">{landing.headlineAccent}</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-prose text-lg leading-relaxed text-mist-200">
                {landing.subhead}
              </p>
            </StaggerItem>
            <StaggerItem as="div">
              <ul className="flex flex-col gap-2.5">
                {heroTrustIndicators.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-mist-100">
                    <IconCheck className="h-4 w-4 shrink-0 text-cyan-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <p className="font-mono text-[0.72rem] uppercase tracking-wide text-mist-400">
                {landing.microcopy}
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Form */}
          <Reveal>
            <div
              id="audit-form"
              className="glass-panel scroll-mt-24 rounded-3xl p-6 md:p-8"
            >
              <h2 className="font-display text-xl font-bold text-paper">
                Get your free audit
              </h2>
              <p className="mt-1.5 text-sm text-mist-300">
                Takes 30 seconds. We&apos;ll review and send back your biggest leaks.
              </p>
              <LeadForm
                source="audit"
                submitLabel="Get My Free Audit"
                className="mt-6"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
