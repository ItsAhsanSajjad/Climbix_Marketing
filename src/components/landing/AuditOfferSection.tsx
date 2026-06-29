import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { IconCheck } from "@/components/ui/Icon";
import { auditIncludes } from "@/lib/site";

/**
 * What the free audit includes - a single framed "deliverables board" (rows in
 * one panel), not a card grid. Premium, scannable, distinct from the homepage.
 */
export function AuditOfferSection() {
  return (
    <EditorialSection tone="white">
      <EditorialHeading
        eyebrow="What you get"
        align="center"
        title={
          <>
            A real audit, not a{" "}
            <span className="text-cobalt-gradient">sales pitch</span>
          </>
        }
        lead="A focused review of where your spend, tracking, and pages are leaking - and exactly what to fix first."
        className="mx-auto items-center"
      />

      <Reveal blur={false}>
        <div className="surface-card mx-auto mt-12 max-w-4xl overflow-hidden rounded-4xl">
          <div className="flex items-center justify-between border-b border-graphite-900/10 bg-canvas-50 px-6 py-4 md:px-8">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cobalt-600">
              Your audit deliverables
            </span>
            <span className="font-mono text-[0.65rem] text-graphite-400">6 checks</span>
          </div>

          <StaggerContainer className="grid gap-px bg-graphite-900/10 sm:grid-cols-2">
            {auditIncludes.map((a) => (
              <StaggerItem key={a.title} className="flex gap-4 bg-white p-6 md:p-7">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600">
                  <IconCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-graphite-900">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-graphite-600">{a.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Reveal>
    </EditorialSection>
  );
}
