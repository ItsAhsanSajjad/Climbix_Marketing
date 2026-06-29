import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import {
  IconTarget,
  IconTrending,
  IconLayout,
  IconShare,
  IconChart,
  IconArrow,
} from "@/components/ui/Icon";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

const icons = [IconTarget, IconTrending, IconLayout, IconShare, IconChart];

// Bento spans - card 0 is featured and wider, keeping the grid intentional.
const spans = [
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
  "lg:col-span-6",
];

export function ServicesSection() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          index="02 / 05"
          eyebrow="Capabilities"
          title={
            <>
              A complete growth engine,{" "}
              <span className="text-gradient">built to convert</span>
            </>
          }
          description="Five disciplines run as one system - so your acquisition, conversion, and measurement pull in the same direction instead of fighting each other."
        />
      </Reveal>

      <StaggerContainer
        stagger={0.08}
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12"
      >
        {services.map((service, i) => {
          const Icon = icons[i];
          const featured = i === 0;
          return (
            <StaggerItem key={service.title} className={cn("h-full", spans[i])}>
              <SpotlightCard className={cn("flex h-full flex-col")}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent-400/25 bg-accent-soft text-accent-300 shadow-glow transition-all duration-300 group-hover/spot:scale-110 group-hover/spot:border-accent-400/50 group-hover/spot:text-accent-200">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mist-400">
                    {service.tag}
                  </span>
                </div>

                <h3
                  className={cn(
                    "mt-5 font-semibold text-paper",
                    featured ? "text-2xl" : "text-lg",
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-2.5 leading-relaxed text-mist-200",
                    featured ? "max-w-md text-base" : "text-sm",
                  )}
                >
                  {service.body}
                </p>

                {featured && <FeaturedSignal />}

                <dl className="mt-4 space-y-2 border-t border-ink-700/60 pt-4">
                  <div className="flex gap-2 text-xs leading-snug">
                    <dt className="shrink-0 font-mono text-[0.6rem] uppercase tracking-wide text-mist-400">
                      You get
                    </dt>
                    <dd className="text-mist-200">{service.gets}</dd>
                  </div>
                  <div className="flex gap-2 text-xs leading-snug">
                    <dt className="shrink-0 font-mono text-[0.6rem] uppercase tracking-wide text-mist-400">
                      Best for
                    </dt>
                    <dd className="text-mist-200">{service.forWho}</dd>
                  </div>
                </dl>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/20 bg-accent-500/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-accent-300">
                    <span className="h-1 w-1 rounded-full bg-cyan-400" aria-hidden />
                    {service.outcome}
                  </span>
                  <IconArrow
                    className="h-4 w-4 text-mist-400 transition-all duration-300 group-hover/spot:translate-x-1 group-hover/spot:text-accent-300"
                  />
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}

/** Mini signal-bars visual for the featured card - fills space with substance. */
function FeaturedSignal() {
  const bars = [38, 52, 44, 66, 58, 80, 72, 94];
  return (
    <div className="mt-6 flex items-end gap-1.5" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-full rounded-sm bg-gradient-to-t from-accent-500/30 to-cyan-400/70"
          style={{ height: `${h * 0.5}px` }}
        />
      ))}
    </div>
  );
}
