import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { IconCheck } from "@/components/ui/Icon";
import { trustPillars } from "@/lib/site";

/**
 * Trust architecture - content-based credibility (not visual only). Six pillars
 * describing how Climbix works; honest by construction (these are commitments,
 * not claimed results).
 */
export function TrustArchitecture() {
  return (
    <Section id="trust">
      <Reveal>
        <SectionHeading
          eyebrow="Why teams trust Climbix"
          title={
            <>
              Built to earn trust{" "}
              <span className="text-gradient">before the spend</span>
            </>
          }
          description="No borrowed logos, no inflated promises. Just the operating principles every engagement runs on."
        />
      </Reveal>

      <StaggerContainer stagger={0.07} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trustPillars.map((p) => (
          <StaggerItem key={p.title} className="h-full">
            <Card className="h-full">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent-400/25 bg-accent-500/10 text-cyan-400">
                <IconCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-paper">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-200">{p.body}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
