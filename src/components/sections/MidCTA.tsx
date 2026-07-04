import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { auditChecklist, site } from "@/lib/site";

/**
 * Mid-page audit CTA - the "What We Audit" moment (#audit, nav target). One
 * premium document panel: what the audit inspects on the left, a decisive CTA
 * block on the right. Drives to the PPC landing page (tracked href).
 */
export function MidCTA() {
  return (
    <Section id="audit">
      <Reveal>
        <div className="doc-panel mx-auto max-w-5xl p-8 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            {/* What we inspect */}
            <div>
              <span className="doc-kicker">What we audit</span>
              <h2 className="mt-4 font-display text-lux-sm text-graphite">
                Before you spend another month, know where the{" "}
                <span className="text-bronze">leak</span> is.
              </h2>
              <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {auditChecklist.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-400" aria-hidden />
                    <div>
                      <span className="block text-base font-semibold text-graphite">{item.label}</span>
                      <span className="block text-sm leading-relaxed text-slate-500">{item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA block */}
            <div className="dark-section flex flex-col items-start gap-5 rounded-3xl p-8 text-white md:p-9">
              <p className="text-xl font-semibold leading-snug">
                Get a clear read on your highest-leverage fixes.
              </p>
              <Button href={site.ctaSecondary.href} size="lg" className="w-full sm:w-auto">
                {site.ctaSecondary.label}
                <IconArrow className="h-4 w-4" />
              </Button>
              <p className="text-sm leading-relaxed text-mist-300">
                No pressure. No obligation. Just a clear read on what deserves
                attention first.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
