import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { hero, heroChecklist, heroForm, formBadges, site } from "@/lib/site";

/**
 * Hero - the lead-capture machine. Deep midnight navy authority block: left
 * names the pain and de-risks the ask; right captures the lead immediately in a
 * bright document sheet layered over a subtle navy diagnostic panel. The real
 * LeadForm (compact variant) does the work - validation, honeypot, source, UTM,
 * tracking, and redirect all unchanged.
 */
export function Hero() {
  return (
    <section className="dark-section relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
      {/* Controlled light: one cool wash, one warm champagne edge. */}
      <div aria-hidden className="pointer-events-none absolute -top-36 left-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cobalt-500/12 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-44 right-0 h-[30rem] w-[30rem] rounded-full bg-bronze-500/10 blur-[120px]" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <StaggerContainer
            trigger="mount"
            stagger={0.11}
            delayChildren={0.05}
            className="flex flex-col items-start gap-6"
          >
            <StaggerItem>
              <span className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze-400/70" aria-hidden />
                <span className="doc-kicker text-bronze-300">{hero.eyebrow}</span>
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-display text-[2.7rem] font-bold leading-[1.05] tracking-tight text-white sm:text-lux-lg lg:text-[4.3rem] lg:leading-[1.02]">
                {hero.headline}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="font-editorial text-xl italic text-bronze-300 sm:text-2xl">
                {hero.highlight}
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-prose text-lg leading-relaxed text-mist-200 sm:text-lux-lead">
                {hero.subhead}
              </p>
            </StaggerItem>

            <StaggerItem className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <MagneticButton className="w-full sm:w-auto">
                <Button href="#hero-form" size="xl" className="w-full" data-cta="hero-audit">
                  Get Free Audit
                  <IconArrow className="h-5 w-5" />
                </Button>
              </MagneticButton>
              <Button href={site.ctaPrimary.href} variant="onDark" size="lg">
                Book Call
              </Button>
            </StaggerItem>

            <StaggerItem>
              <p className="text-base text-mist-300">{hero.riskLine}</p>
            </StaggerItem>

            <StaggerItem as="div" className="pt-1">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {heroChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[0.95rem] text-mist-100">
                    <IconCheck className="h-4 w-4 shrink-0 text-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerContainer>

          {/* Lead form sheet, layered over a subtle diagnostic panel. */}
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-[29rem]">
            {/* Backdrop diagnostic sheet - pure decoration. */}
            <div
              aria-hidden
              className="dark-panel signal-grid absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] opacity-70 sm:block"
            />
            <div
              id="hero-form"
              className="doc-panel relative scroll-mt-28 p-6 shadow-lift-lg sm:p-8"
            >
              <span className="doc-kicker">Free growth audit</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-graphite">
                {heroForm.title}
              </h2>
              <p className="mt-1.5 text-base text-slate-600">{heroForm.subtitle}</p>
              <LeadForm
                source="home"
                compact
                submitLabel={heroForm.submitLabel}
                className="mt-6"
              />
              <TrustBadges items={formBadges} className="mt-5" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
