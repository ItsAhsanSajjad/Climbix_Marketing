import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";

/**
 * Reusable deep-navy "strategy room" - the conversion climax shared by the
 * homepage (#contact) and the PPC landing. Maximum contrast against the light
 * pages: persuasive copy + expectations on the left, a frosted glass form
 * container on the right. LeadForm is dark-toned and logically untouched.
 */
export function ConversionRoom({
  id,
  formId,
  eyebrow,
  title,
  lead,
  outcomes,
  formTitle,
  formSubtitle,
  source,
  submitLabel,
}: {
  id?: string;
  formId?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  outcomes: readonly string[];
  formTitle: string;
  formSubtitle: string;
  source: "home" | "audit";
  submitLabel: string;
}) {
  return (
    <EditorialSection id={id} tone="navy" className="relative overflow-hidden">
      <div aria-hidden className="blueprint-light pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cobalt-500/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sand-500/15 blur-3xl" />

      <div className="relative grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <EditorialHeading tone="dark" eyebrow={eyebrow} title={title} lead={lead} />

          <ul className="mt-8 flex flex-col gap-4">
            {outcomes.map((item, i) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cobalt-400/40 bg-cobalt-500/20 font-mono text-[0.65rem] font-bold text-cobalt-200">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-white/85">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-2.5 border-t border-white/10 pt-6">
            <p className="flex items-center gap-2 text-xs text-white/70">
              <IconCheck className="h-4 w-4 shrink-0 text-cobalt-300" />
              Free 15-minute call · No obligation
            </p>
            <p className="flex items-center gap-2 text-xs text-white/70">
              <IconCheck className="h-4 w-4 shrink-0 text-cobalt-300" />
              If we are not a fit, we will tell you - honestly.
            </p>
          </div>
        </div>

        <Reveal blur={false} delay={0.1}>
          <div
            id={formId}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-lift backdrop-blur-md scroll-mt-24 md:p-8"
          >
            <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-400/60 to-transparent" />
            <h3 className="font-display text-xl font-bold text-white">{formTitle}</h3>
            <p className="mt-1.5 text-sm text-white/65">{formSubtitle}</p>
            <LeadForm source={source} tone="dark" submitLabel={submitLabel} className="mt-6" />
          </div>
        </Reveal>
      </div>
    </EditorialSection>
  );
}
