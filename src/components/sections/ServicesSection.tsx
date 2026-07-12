import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import {
  IconTarget,
  IconTrending,
  IconLayout,
  IconShare,
  IconChart,
  IconCheck,
} from "@/components/ui/Icon";
import { services, site } from "@/lib/site";

/** data-cta location slug per service, e.g. "svc-paid-ads". */
const ctaSlug = (tag: string) => `svc-${tag.toLowerCase().replace(/\s+/g, "-")}`;

/** Icons for the four white bento cells, aligned to the order of `services` 0-3. */
const cardIcons = [IconTarget, IconTrending, IconLayout, IconShare] as const;

/** First four services render as white lux-cards in a 2x2 inner grid; the fifth
 * (Analytics & Conversion Tracking - the core differentiator) is the featured
 * dark bento cell spanning the other half of the 12-col grid. */
const gridServices = services.slice(0, 4);
const featured = services[4];

export function ServicesSection() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Five disciplines, one system built for revenue{" "}
              <span className="text-bronze">clarity</span>.
            </>
          }
          description="Each service stands on its own - together they form one measurable path from budget to pipeline."
        />
      </Reveal>

      {/* Bento: featured dark differentiator (left half) + 2x2 white grid
          (right half) on lg. Mobile stacks featured first, then the four. */}
      <StaggerContainer
        stagger={0.09}
        className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12"
      >
        {/* Featured cell: Analytics & Conversion Tracking. */}
        <StaggerItem className="h-full lg:col-span-6 lg:row-span-2">
          <article className="dark-section relative flex h-full flex-col overflow-hidden rounded-[2.5rem] p-8 shadow-lift transition duration-300 hover:shadow-lift-lg md:p-10">
            <div
              aria-hidden
              className="signal-grid pointer-events-none absolute inset-0 opacity-70"
            />
            <div className="relative flex h-full flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <span className="doc-kicker">Core differentiator</span>
                <span aria-hidden className="relative flex h-2.5 w-2.5">
                  <span className="animate-ring absolute inset-0 rounded-full bg-teal-400/50" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-teal-400" />
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white/10 text-teal-400">
                  <IconChart className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-mist-300">
                  {featured.tag}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-white">
                  {featured.title}
                </h3>
                <p className="max-w-prose text-base text-mist-200">
                  {featured.body}
                </p>
              </div>

              <div className="flex flex-col gap-3.5 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">What we fix</p>
                <ul className="flex flex-col gap-3">
                  {featured.fixes.map((fix) => (
                    <li key={fix} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-white/10 text-teal-400">
                        <IconCheck className="h-4 w-4" />
                      </span>
                      <p className="text-base text-mist-200">{fix}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-mist-300">
                <span className="font-semibold text-white">Best for: </span>
                {featured.forWho}
              </p>

              <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-5">
                <Button
                  href={site.ctaPrimary.href}
                  variant="primary"
                  size="lg"
                  data-cta={ctaSlug(featured.tag)}
                >
                  {site.ctaPrimary.label}
                </Button>
                <p className="text-sm text-mist-300">
                  Starts with the audit - free, no obligation.
                </p>
              </div>
            </div>
          </article>
        </StaggerItem>

        {/* 2x2 inner grid of the remaining four services. Variants propagate
            through this plain wrapper, so items join the same stagger. */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6 lg:row-span-2">
          {gridServices.map((service, i) => {
            const Icon = cardIcons[i];
            return (
              <StaggerItem key={service.title} className="h-full">
                <article className="lux-card flex h-full flex-col gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-platinum-100 text-cobalt-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-graphite">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600">{service.body}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-graphite">
                      What we fix
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {service.fixes.map((fix) => (
                        <li
                          key={fix}
                          className="flex items-center gap-2.5 text-sm text-graphite"
                        >
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 flex-none rounded-full bg-bronze-400"
                          />
                          {fix}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 border-t border-platinum-200 pt-4">
                    <p className="text-sm text-slate-500">
                      <span className="font-semibold text-graphite">
                        Best for:{" "}
                      </span>
                      {service.forWho}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Link
                        href={site.ctaPrimary.href}
                        data-cta={ctaSlug(service.tag)}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-lg text-sm font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
                      >
                        {site.ctaPrimary.label}
                        <span aria-hidden>&rarr;</span>
                      </Link>
                      <span className="text-xs text-slate-500">
                        Free · No obligation
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </div>
      </StaggerContainer>
    </Section>
  );
}
