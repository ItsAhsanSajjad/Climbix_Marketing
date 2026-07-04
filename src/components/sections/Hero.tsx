import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { GrowthLeakConsole } from "@/components/sections/GrowthLeakConsole";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { hero, heroChecklist, site } from "@/lib/site";

/**
 * Hero - deep midnight navy authority block. Names the pain (blind spend),
 * promises a measurable system, and shows the Growth Leak Console so the claim
 * is felt, not just stated. Both CTAs above the fold with an explicit
 * risk-reversal line. CTA hrefs unchanged so tracking + routing keep working.
 */
export function Hero() {
  return (
    <section className="dark-section relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      {/* Controlled light: one cool wash, one warm champagne edge. */}
      <div aria-hidden className="pointer-events-none absolute -top-36 left-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cobalt-500/12 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-44 right-0 h-[30rem] w-[30rem] rounded-full bg-bronze-500/10 blur-[120px]" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <StaggerContainer
            trigger="mount"
            stagger={0.11}
            delayChildren={0.05}
            className="flex flex-col items-start gap-7"
          >
            <StaggerItem>
              <span className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze-400/70" aria-hidden />
                <span className="doc-kicker text-bronze-300">{hero.eyebrow}</span>
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-display text-[2.85rem] font-bold leading-[1.04] tracking-tight text-white sm:text-lux-lg lg:text-lux-xl">
                Stop guessing where your marketing{" "}
                <span className="text-bronze">budget</span> is going.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-prose text-lux-lead text-mist-200">{hero.subhead}</p>
            </StaggerItem>

            <StaggerItem className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <MagneticButton className="w-full sm:w-auto">
                <Button href={site.ctaPrimary.href} size="xl" className="w-full">
                  {site.ctaPrimary.label}
                  <IconArrow className="h-5 w-5" />
                </Button>
              </MagneticButton>
              <Button href={site.ctaSecondary.href} variant="onDark" size="lg">
                {site.ctaSecondary.label}
              </Button>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-md text-base leading-relaxed text-mist-300">
                {hero.riskLine}
              </p>
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

          <GrowthLeakConsole />
        </div>
      </Container>
    </section>
  );
}
