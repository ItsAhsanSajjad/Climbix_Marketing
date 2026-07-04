import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { IconCheck } from "@/components/ui/Icon";
import { auditIncludes } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The five deliverables of the free audit, as a calm light card grid - the
 * fifth (the priority fix list, the payoff) spans the full row. What we
 * typically find lives on the page itself, so this section stays purely about
 * what you receive.
 */
export function AuditOfferSection() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="What you receive"
          align="left"
          title={
            <>
              A written read on your funnel -{" "}
              <span className="text-bronze">not a sales pitch</span>
            </>
          }
          description="Five deliverables, in plain English: where your spend, tracking, and pages are leaking - and exactly what deserves attention first."
        />
      </Reveal>

      <StaggerContainer stagger={0.08} className="mt-16 grid gap-6 sm:grid-cols-2">
        {auditIncludes.map((a, i) => (
          <StaggerItem
            key={a.title}
            className={cn(
              "h-full",
              i === auditIncludes.length - 1 && "sm:col-span-2",
            )}
          >
            <Card className="h-full">
              <div
                className={cn(
                  i === auditIncludes.length - 1 &&
                    "sm:flex sm:items-start sm:gap-6",
                )}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500">
                  <IconCheck className="h-6 w-6" />
                </span>
                <div
                  className={cn(
                    "mt-5",
                    i === auditIncludes.length - 1 && "sm:mt-0",
                  )}
                >
                  <h3 className="text-lg font-semibold text-graphite">
                    {a.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-base leading-relaxed text-slate-600">
                    {a.body}
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
