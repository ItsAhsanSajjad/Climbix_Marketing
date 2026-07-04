import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { GrowthLeakConsole } from "@/components/sections/GrowthLeakConsole";
import { auditPreview, sampleAudit, offer } from "@/lib/site";

type AuditItem = (typeof sampleAudit)[number];

/**
 * Audit report preview - proof through clarity, never fabricated results.
 * Left: the Growth Leak Console (labelled Illustrative by construction).
 * Right: six report-grade .doc-panel cards from site.ts in a 2-col grid
 * (three tidy rows, 1-col on mobile), each rendering its rows by kind -
 * a funnel-stage rail, flagged issues, or a numbered fix order.
 * Qualitative findings only; the disclaimer keeps it honest. Reduced-motion safe.
 */

/** Vertical funnel rail: bronze stage dots joined by a thin platinum line. */
function StageRail({ rows }: { rows: readonly string[] }) {
  return (
    <ol className="mt-5">
      {rows.map((row, i) => (
        <li key={row} className="flex gap-3">
          <span className="flex flex-col items-center" aria-hidden>
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-bronze-400" />
            {i < rows.length - 1 && <span className="w-px flex-1 bg-platinum-300" />}
          </span>
          <span
            className={`text-sm font-medium text-graphite ${
              i < rows.length - 1 ? "pb-4" : ""
            }`}
          >
            {row}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Flagged findings: small bronze warning dots. */
function IssueList({ rows }: { rows: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {rows.map((row) => (
        <li key={row} className="flex items-start gap-3">
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-500"
            aria-hidden
          />
          <span className="text-sm text-graphite">{row}</span>
        </li>
      ))}
    </ul>
  );
}

/** Priority order: cobalt numerals, protection-first sequence. */
function FixList({ rows }: { rows: readonly string[] }) {
  return (
    <ol className="mt-5 space-y-2.5">
      {rows.map((row, i) => (
        <li key={row} className="flex items-start gap-3">
          <span className="w-5 shrink-0 text-sm font-semibold tabular-nums text-cobalt-600">
            {i + 1}.
          </span>
          <span className="text-sm text-graphite">{row}</span>
        </li>
      ))}
    </ol>
  );
}

function ReportRows({ item }: { item: AuditItem }) {
  if (item.kind === "stages") return <StageRail rows={item.rows} />;
  if (item.kind === "fixes") return <FixList rows={item.rows} />;
  return <IssueList rows={item.rows} />;
}

export function SampleAuditSection() {
  return (
    <Section id="proof" className="bg-ivory-50">
      <Reveal>
        <SectionHeading
          eyebrow={auditPreview.eyebrow}
          title={
            <>
              See the exact points where budget turns into{" "}
              <span className="text-bronze">waste</span>.
            </>
          }
          description="This is the structure of the report you receive - the funnel path, the failure points, and the order to fix them."
        />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        {/* Signature diagnostic visual - labelled Illustrative by construction */}
        <Reveal delay={0.1} blur={false}>
          <GrowthLeakConsole />
        </Reveal>

        {/* Six report-grade preview panels - 2-col grid, three rows on desktop */}
        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {sampleAudit.map((item, i) => (
            <StaggerItem key={item.title} className="doc-panel flex h-full flex-col bg-white p-6">
              <span className="doc-kicker">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-graphite">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{item.body}</p>
              <ReportRows item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Honest framing + risk-reversal + CTA */}
      <Reveal delay={0.1}>
        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="text-sm italic text-slate-500">{auditPreview.disclaimer}</p>
          <Button href="/free-marketing-audit" size="lg">
            Get Free Audit
          </Button>
          <p className="text-sm text-slate-500">{offer.risk}</p>
        </div>
      </Reveal>
    </Section>
  );
}
