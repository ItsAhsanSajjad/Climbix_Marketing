import { IconArrow, IconCheck } from "@/components/ui/Icon";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { GrowthOSVisual } from "@/components/sections/GrowthOSVisual";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { heroTrustIndicators, site } from "@/lib/site";

/**
 * Cinematic hero. Oversized editorial headline with deliberate line breaks, a
 * confident CTA group, integrated trust row, and the Growth Operating System
 * visual. Copy cascades in on mount; the visual enters on its own timeline.
 */
export function RedesignHero() {
  return (
    <section className="relative overflow-hidden">
      {/* layered ambient behind the hero */}
      <div aria-hidden className="pointer-events-none absolute -top-32 left-[-10%] h-[42rem] w-[42rem] rounded-full bg-cobalt-500/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-[-8%] top-24 h-[34rem] w-[34rem] rounded-full bg-sand-400/15 blur-3xl" />

      <div className="mx-auto w-full max-w-[1180px] px-5 pb-20 pt-12 md:pb-28 md:pt-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <StaggerContainer trigger="mount" stagger={0.1} delayChildren={0.05} className="flex flex-col items-start">
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-cobalt-200 bg-cobalt-50 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cobalt-700">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt-500" aria-hidden />
                Performance Marketing Studio
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-6 font-editorial text-[2.7rem] leading-[1.02] tracking-[-0.01em] text-graphite-900 sm:text-[3.4rem] lg:text-[4.7rem] lg:leading-[0.98]">
                Turn scattered
                <br />
                marketing into a
                <br />
                <span className="italic text-cobalt-gradient">measurable</span> growth
                <br className="hidden sm:block" /> system.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-graphite-600">
                Climbix connects campaigns, landing pages, tracking, and reporting
                into one growth system - so you know what is working, what is
                wasting budget, and what to fix first.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <MagneticButton className="w-full sm:w-auto">
                <EditorialButton href={site.ctaPrimary.href} size="lg" className="w-full">
                  {site.ctaPrimary.label}
                  <IconArrow className="h-5 w-5" />
                </EditorialButton>
              </MagneticButton>
              <EditorialButton href={site.ctaSecondary.href} variant="outline" size="lg">
                {site.ctaSecondary.label}
              </EditorialButton>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-wide text-graphite-500">
                Free 15-minute call · No obligation · Audit-first, no guesswork
              </p>
            </StaggerItem>

            <StaggerItem as="div" className="mt-7 w-full border-t border-graphite-900/10 pt-6">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {heroTrustIndicators.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-graphite-700">
                    <IconCheck className="h-4 w-4 shrink-0 text-cobalt-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerContainer>

          <GrowthOSVisual />
        </div>
      </div>
    </section>
  );
}
