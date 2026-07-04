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
import { services } from "@/lib/site";

/** Icons for the four grid cards, aligned to the order of `services` 0-3. */
const cardIcons = [IconTarget, IconTrending, IconLayout, IconShare] as const;

/** First four services render as white cards; the fifth (Analytics &
 * Conversion Tracking - the differentiator) gets a featured dark treatment. */
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
              Five disciplines, one system built for{" "}
              <span className="text-bronze">revenue</span>
            </>
          }
          description="Each service stands on its own - together they form one measurable path from budget to pipeline."
        />
      </Reveal>

      <StaggerContainer
        stagger={0.08}
        className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
      >
        {gridServices.map((service, i) => {
          const Icon = cardIcons[i];
          return (
            <StaggerItem key={service.title} className="h-full">
              <article className="lux-card flex h-full flex-col gap-6 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-platinum-100 text-cobalt-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {service.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-graphite">
                    {service.title}
                  </h3>
                  <p className="text-base text-slate-600">{service.body}</p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <p className="text-sm font-semibold text-graphite">
                    What we fix
                  </p>
                  <ul className="flex flex-col gap-2">
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

                <div className="mt-auto flex flex-col gap-4 border-t border-platinum-200 pt-6">
                  <p className="text-sm text-slate-500">
                    <span className="font-semibold text-graphite">
                      Best for:{" "}
                    </span>
                    {service.forWho}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Link
                      href="/free-marketing-audit"
                      data-cta={"svc-" + service.tag}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700"
                    >
                      {service.cta}
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
      </StaggerContainer>

      {/* Featured differentiator: Analytics & Conversion Tracking. */}
      <Reveal className="mx-auto mt-6 max-w-5xl">
        <article className="dark-section overflow-hidden rounded-4xl p-8 shadow-lift md:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div className="flex flex-col gap-5">
              <span className="doc-kicker">Core differentiator</span>
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white/10 text-teal-400">
                  <IconChart className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-mist-300">
                  {featured.tag}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {featured.title}
              </h3>
              <p className="max-w-prose text-base text-mist-200">
                {featured.body}
              </p>
              <p className="text-sm text-mist-300">
                <span className="font-semibold text-white">Best for: </span>
                {featured.forWho}
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <Button
                  href="/free-marketing-audit"
                  variant="primary"
                  size="lg"
                  data-cta="svc-featured-measurement"
                >
                  {featured.cta}
                </Button>
                <p className="text-sm text-mist-300">
                  Free review. No pressure. Clear next steps.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-sm font-semibold text-white">What we fix</p>
              {featured.fixes.map((fix) => (
                <div key={fix} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-white/10 text-teal-400">
                    <IconCheck className="h-5 w-5" />
                  </span>
                  <p className="text-base text-mist-200">{fix}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
