import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { ProcessRail } from "@/components/sections/ProcessRail";
import { IconCheck } from "@/components/ui/Icon";
import { processSteps } from "@/lib/site";

/**
 * Audit -> Scale - an open connected timeline (not card boxes). A drawing rail
 * carries four numbered nodes; each step's content flows directly under its node
 * (title, work, the concrete deliverable, the outcome) so it reads as a journey,
 * distinct from the boxed discipline panels above it.
 */
export function ProcessSection() {
  return (
    <EditorialSection id="process">
      <EditorialHeading
        index="03 / 05"
        eyebrow="The Climbix framework"
        align="center"
        title={
          <>
            A clear path from audit to{" "}
            <span className="text-cobalt-gradient">scale</span>
          </>
        }
        lead="No black boxes. A focused operating system that turns guesswork into a measurable growth engine - with a concrete deliverable at every stage."
        className="mx-auto items-center"
      />

      <StaggerContainer
        as="ol"
        stagger={0.12}
        delayChildren={0.15}
        className="relative mt-16 grid gap-y-10 md:grid-cols-4 md:gap-x-8"
      >
        <ProcessRail />
        {processSteps.map((s) => (
          <StaggerItem
            as="li"
            key={s.step}
            className="group relative flex flex-col border-l border-graphite-900/10 pl-5 md:border-l-0 md:pl-0"
          >
            {/* node on the rail */}
            <div className="absolute -left-[9px] top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-cobalt-500 bg-white md:static md:h-12 md:w-12 md:rounded-2xl md:border md:border-cobalt-200 md:shadow-soft md:transition-all md:duration-300 md:group-hover:-translate-y-1 md:group-hover:border-cobalt-500">
              <span className="hidden font-mono text-sm font-bold text-cobalt-600 md:block">{s.step}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt-500 md:hidden" />
            </div>

            <span className="font-mono text-xs font-semibold text-cobalt-600 md:hidden">{s.step}</span>
            <h3 className="mt-1 text-lg font-semibold text-graphite-900 md:mt-6">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite-600">{s.body}</p>

            <div className="mt-4 flex items-start gap-2 border-t border-graphite-900/10 pt-4">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-cobalt-600" />
              <div>
                <span className="font-mono text-[0.6rem] uppercase tracking-wide text-graphite-400">You get</span>
                <p className="text-sm font-medium text-graphite-800">{s.deliverable}</p>
              </div>
            </div>

            <span className="mt-3 inline-flex w-fit items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-wide text-cobalt-700">
              {">"} {s.outcome}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </EditorialSection>
  );
}
