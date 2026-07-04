import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { engineSteps } from "@/lib/site";

/**
 * Solution - one connected growth engine. The answer to the disconnected-system
 * problem: a premium six-node chain from Traffic to Optimization, rendered as a
 * deliberate system diagram (numbered nodes on a hairline rail, 3x2 on desktop,
 * single column on mobile). Closes with a fit-check CTA to the form.
 */
export function SolutionSection() {
  return (
    <Section id="engine" className="bg-ivory-100">
      <Reveal>
        <SectionHeading
          eyebrow="The growth engine"
          title={
            <>
              One connected growth engine. Not five separate{" "}
              <span className="text-bronze">vendors</span>.
            </>
          }
          description="Paid ads, SEO, landing pages, social, and tracking - built and measured as a single path from the first click to attributed revenue."
        />
      </Reveal>

      {/* System chain - deterministic grid, connector arrows between nodes. */}
      <StaggerContainer
        stagger={0.09}
        className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {engineSteps.map((s, i) => (
          <StaggerItem key={s.label} className="h-full">
            <div className="lux-card relative flex h-full items-start gap-4 p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cobalt-500/30 bg-cobalt-500/[0.06] text-sm font-bold text-cobalt-600">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-graphite">{s.label}</h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-600">{s.note}</p>
              </div>
              {/* connector arrow to the next node (hidden on the last + on stack edges) */}
              {i < engineSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3.5 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-platinum-300 bg-white text-bronze-500 lg:flex"
                >
                  <IconArrow className="h-3 w-3" />
                </span>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal delay={0.15}>
        <div className="mt-12 flex justify-center">
          <Button href="#contact" size="lg" variant="secondary">
            See If We Are the Right Fit
            <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
