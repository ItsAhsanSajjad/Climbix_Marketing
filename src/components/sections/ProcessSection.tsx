import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { ProcessRail } from "@/components/sections/ProcessRail";
import { IconCheck } from "@/components/ui/Icon";
import { processSteps } from "@/lib/site";

/**
 * Audit → Scale framework. A connected four-step timeline: an animated rail with
 * nodes runs across the top; each step is a glass card stating the work, the
 * concrete deliverable ("you get..."), and the outcome. This turns the old sparse
 * numbered list into a strategic system that fills its space with substance.
 */
export function ProcessSection() {
  return (
    <Section id="process" className="relative">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative">
        <Reveal>
          <SectionHeading
            index="03 / 05"
            eyebrow="The Climbix framework"
            title={
              <>
                A clear path from{" "}
                <span className="text-gradient">audit to scale</span>
              </>
            }
            description="No black boxes. A focused, four-step operating system that turns guesswork into a measurable growth engine - with a concrete deliverable at every stage."
          />
        </Reveal>

        <StaggerContainer
          as="ol"
          stagger={0.12}
          delayChildren={0.15}
          className="relative mt-16 grid gap-6 md:grid-cols-4 md:gap-5"
        >
          <ProcessRail />
          {processSteps.map((s) => (
            <StaggerItem as="li" key={s.step} className="group flex flex-col">
              {/* Node on the rail */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-400/30 bg-ink-950 font-mono text-sm font-bold text-accent-300 shadow-glow transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-400/70 group-hover:text-accent-200">
                {s.step}
              </div>

              <div className="glass-panel mt-6 flex flex-1 flex-col rounded-2xl p-5 transition-colors duration-300 group-hover:border-accent-400/30">
                <h3 className="text-lg font-semibold text-paper">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-200">{s.body}</p>

                <div className="mt-4 flex items-start gap-2 border-t border-ink-700/60 pt-4">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <div>
                    <span className="font-mono text-[0.6rem] uppercase tracking-wide text-mist-400">
                      You get
                    </span>
                    <p className="text-sm font-medium text-mist-100">{s.deliverable}</p>
                  </div>
                </div>

                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-400/20 bg-accent-500/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wide text-accent-300">
                  → {s.outcome}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
