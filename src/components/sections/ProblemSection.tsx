import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { problems } from "@/lib/site";

/**
 * Problem / value section. Names the pain before pitching the solution. Heading
 * is sticky on desktop; the pain cards stagger in as they enter view.
 */
export function ProblemSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            index="01 / 05"
            eyebrow="The growth gap"
            title={
              <>
                Most marketing budgets leak before they ever{" "}
                <span className="text-gradient">reach revenue</span>
              </>
            }
            description="Traffic isn't the problem. The system around it is. Here's where growing brands quietly lose money every month."
          />
        </Reveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {problems.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-paper">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist-200">
                  {p.body}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
