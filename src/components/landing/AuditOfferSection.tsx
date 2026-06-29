import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { IconCheck } from "@/components/ui/Icon";
import { auditIncludes, auditFinds } from "@/lib/site";

/** What the free audit includes + what we typically find. */
export function AuditOfferSection() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="What you get"
          title={
            <>
              A real audit -{" "}
              <span className="text-gradient">not a sales pitch</span>
            </>
          }
          description="A focused review of where your spend, tracking, and pages are leaking - and exactly what to fix first."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <StaggerContainer stagger={0.08} className="grid gap-5 sm:grid-cols-2">
          {auditIncludes.map((a) => (
            <StaggerItem key={a.title} className="h-full">
              <Card className="h-full">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent-400/25 bg-accent-500/10 text-cyan-400">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-paper">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-200">{a.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-3xl border border-ink-600/70 bg-ink-900/40 p-6 md:p-8">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-300">
              What we typically find
            </span>
            <ul className="mt-5 flex flex-col gap-3.5">
              {auditFinds.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-mist-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
