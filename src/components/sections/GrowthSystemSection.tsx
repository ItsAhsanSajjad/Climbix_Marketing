import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { IconTarget, IconTrending, IconLayout, IconShare, IconChart, IconArrow } from "@/components/ui/Icon";
import { services, site } from "@/lib/site";

const icons = [IconTarget, IconTrending, IconLayout, IconShare, IconChart];

/**
 * The growth system - sticky narrative. A sticky heading on the left while the
 * five disciplines scroll past as large editorial panels on the right (not a
 * card grid). Each panel states what you get + who it's for + the outcome.
 */
export function GrowthSystemSection() {
  return (
    <EditorialSection id="services" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <EditorialHeading
            index="02 / 05"
            eyebrow="The growth engine"
            title={
              <>
                Five disciplines,{" "}
                <span className="text-cobalt-gradient">one system</span>
              </>
            }
            lead="Acquisition, conversion, and measurement run as one connected engine - so they pull in the same direction instead of fighting each other."
          />
          <div className="mt-8 hidden lg:block">
            <EditorialButton href={site.ctaPrimary.href} size="md">
              {site.ctaPrimary.label}
            </EditorialButton>
          </div>
        </div>

        <StaggerContainer stagger={0.1} className="flex flex-col gap-5">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={service.title}>
                <article className="group surface-card flex gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cobalt-50 text-cobalt-600 transition-colors duration-300 group-hover:bg-cobalt-100">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-[0.7rem] text-graphite-400">0{i + 1}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-graphite-900">{service.title}</h3>
                      <span className="hidden shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-graphite-400 sm:block">
                        {service.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-600">{service.body}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-graphite-900/8 pt-4 text-xs">
                      <span className="text-graphite-700">
                        <span className="font-mono text-[0.6rem] uppercase tracking-wide text-graphite-400">You get </span>
                        {service.gets}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-sand-400/50 bg-sand-100 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wide text-sand-600">
                        {service.outcome}
                      </span>
                      <IconArrow className="ml-auto hidden h-4 w-4 text-graphite-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cobalt-600 sm:block" />
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </EditorialSection>
  );
}
