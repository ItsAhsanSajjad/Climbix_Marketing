import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { CampaignIntelligencePanel } from "@/components/sections/CampaignIntelligencePanel";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { heroTrustIndicators, site } from "@/lib/site";

/**
 * Hero - primary conversion surface. The copy column cascades in on mount and
 * resolves on the primary CTA; the Campaign Intelligence panel enters and floats
 * as the signature visual. Brighter type + an eyebrow chip + reassurance line
 * raise it from "clean SaaS hero" to "serious international growth partner".
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
      {/* Soft accent glow anchored behind the headline. */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
          <StaggerContainer
            trigger="mount"
            stagger={0.12}
            delayChildren={0.05}
            className="flex flex-col items-start gap-6"
          >
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/25 bg-accent-500/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-300">
                  Performance Marketing for Growing Brands
                </span>
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-display text-[2.7rem] font-bold leading-[1.04] tracking-tight text-paper sm:text-display-md lg:text-[4.25rem] lg:leading-[1.0]">
                Marketing that turns{" "}
                <span className="text-gradient">clicks into customers</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-prose text-lg leading-relaxed text-mist-200">
                Climbix builds complete growth systems for growing international
                brands. We connect paid ads, SEO, high-converting landing pages,
                and tracking-first strategy into one measurable engine that turns
                ad spend into qualified pipeline.
              </p>
            </StaggerItem>

            <StaggerItem className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center">
              <MagneticButton className="w-full sm:w-auto">
                <Button href={site.ctaPrimary.href} size="lg" className="w-full">
                  {site.ctaPrimary.label}
                  <IconArrow className="h-5 w-5" />
                </Button>
              </MagneticButton>
              <Button href={site.ctaSecondary.href} variant="secondary" size="lg">
                {site.ctaSecondary.label}
              </Button>
            </StaggerItem>

            <StaggerItem>
              <p className="font-mono text-[0.72rem] uppercase tracking-wide text-mist-400">
                Free 15-minute call · No obligation · Audit-first, no guesswork
              </p>
            </StaggerItem>

            <StaggerItem as="div" className="pt-2">
              <ul className="flex flex-wrap items-center gap-2.5">
                {heroTrustIndicators.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-600/70 bg-ink-800/40 px-3 py-1.5 text-xs font-medium text-mist-200"
                  >
                    <IconCheck className="h-3.5 w-3.5 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerContainer>

          <CampaignIntelligencePanel />
        </div>
      </Container>
    </section>
  );
}
