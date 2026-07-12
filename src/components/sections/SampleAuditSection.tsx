"use client";

import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { GrowthLeakConsole } from "@/components/sections/GrowthLeakConsole";
import { ease, duration, viewport } from "@/lib/motion";
import { auditPreview, sampleAudit, offer } from "@/lib/site";

type AuditItem = (typeof sampleAudit)[number];

/**
 * AUDIT COMMAND CENTER - proof through clarity, never fabricated results.
 * A bento layout: the Growth Leak Console as the large featured cell (labelled
 * Illustrative by construction) beside six report-grade .doc-panel cards from
 * site.ts in an inner 2-col grid. Each card renders its rows by kind - a funnel
 * stage rail whose connector draws in (scaleY), flagged issue dots, or a
 * numbered fix order - with rows stagger-revealing on scroll and a small
 * "Sample" status chip keeping every panel honest. Qualitative findings only;
 * the disclaimer closes the loop. Reduced-motion collapses draws to instant.
 */

/** Vertical funnel rail: bronze stage dots joined by a connector that draws. */
function StageRail({ rows }: { rows: readonly string[] }) {
  const reduce = useReducedMotion();
  return (
    <StaggerContainer as="ol" stagger={0.08} className="mt-5">
      {rows.map((row, i) => (
        <StaggerItem as="li" key={row} className="flex gap-3">
          <span className="flex flex-col items-center" aria-hidden>
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-bronze-400" />
            {i < rows.length - 1 && (
              <m.span
                className="w-px flex-1 origin-top bg-platinum-300"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={viewport}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: duration.slow, ease, delay: 0.2 + i * 0.12 }
                }
              />
            )}
          </span>
          <span
            className={`text-sm font-medium text-graphite ${
              i < rows.length - 1 ? "pb-4" : ""
            }`}
          >
            {row}
          </span>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

/** Flagged findings: small bronze warning dots, revealed row by row. */
function IssueList({ rows }: { rows: readonly string[] }) {
  return (
    <StaggerContainer as="ul" stagger={0.07} className="mt-5 space-y-2.5">
      {rows.map((row) => (
        <StaggerItem as="li" key={row} className="flex items-start gap-3">
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-500"
            aria-hidden
          />
          <span className="text-sm text-graphite">{row}</span>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

/** Priority order: cobalt numerals, protection-first sequence. */
function FixList({ rows }: { rows: readonly string[] }) {
  return (
    <StaggerContainer as="ol" stagger={0.07} className="mt-5 space-y-2.5">
      {rows.map((row, i) => (
        <StaggerItem as="li" key={row} className="flex items-start gap-3">
          <span className="w-5 shrink-0 text-sm font-semibold tabular-nums text-cobalt-600">
            {i + 1}.
          </span>
          <span className="text-sm text-graphite">{row}</span>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

function ReportRows({ item }: { item: AuditItem }) {
  if (item.kind === "stages") return <StageRail rows={item.rows} />;
  if (item.kind === "fixes") return <FixList rows={item.rows} />;
  return <IssueList rows={item.rows} />;
}

/** One report-grade preview panel: kicker + status chip header, kind renderer. */
function ReportCard({ item, index }: { item: AuditItem; index: number }) {
  return (
    <div className="doc-panel flex h-full flex-col bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="doc-kicker tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
          Sample
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-graphite">{item.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
      <ReportRows item={item} />
    </div>
  );
}

export function SampleAuditSection({
  ctaHref = "/free-marketing-audit",
}: {
  ctaHref?: string;
}) {
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

      {/* Bento command center: featured console cell + six report panels */}
      <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-7">
        {/* Signature diagnostic visual - labelled Illustrative by construction */}
        <Reveal
          delay={0.1}
          blur={false}
          className="lg:col-span-5 lg:row-span-2 lg:self-start"
        >
          <GrowthLeakConsole />
        </Reveal>

        {/* Six report-grade preview panels - inner 2-col grid, 1-col on mobile */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {sampleAudit.map((item, i) => (
            <StaggerItem key={item.title} className="h-full">
              <ReportCard item={item} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Honest framing + risk-reversal + CTA */}
      <Reveal delay={0.1}>
        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="text-sm italic text-slate-500">{auditPreview.disclaimer}</p>
          <Button href={ctaHref} size="lg" data-cta="sample-audit">
            Get Free Audit
          </Button>
          <p className="text-sm text-slate-500">{offer.risk}</p>
        </div>
      </Reveal>
    </Section>
  );
}
