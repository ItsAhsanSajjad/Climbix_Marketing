import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { RevenueLeakMap } from "@/components/sections/RevenueLeakMap";
import { problems } from "@/lib/site";

/**
 * Revenue leak - split editorial story. Left: the narrative + leak points as
 * hairline editorial rows (no cards). Right: the custom RevenueLeakMap visual.
 */
export function RevenueLeakSection() {
  return (
    <EditorialSection id="leaks">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <EditorialHeading
            index="01 / 05"
            eyebrow="The growth gap"
            title={
              <>
                Most budgets leak before they reach{" "}
                <span className="text-cobalt-gradient">revenue</span>
              </>
            }
            lead="Traffic is rarely the problem. The system around it is. Here is where growing brands quietly lose money every month."
          />

          <StaggerContainer as="ol" stagger={0.09} className="mt-10 flex flex-col">
            {problems.map((p, i) => (
              <StaggerItem
                as="li"
                key={p.title}
                className="flex gap-5 border-t border-graphite-900/10 py-5 first:border-t-0"
              >
                <span className="mt-1 font-mono text-sm font-semibold text-sand-600">0{i + 1}</span>
                <div>
                  <h3 className="text-base font-semibold text-graphite-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-graphite-600">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <Reveal blur={false}>
          <RevenueLeakMap />
        </Reveal>
      </div>
    </EditorialSection>
  );
}
