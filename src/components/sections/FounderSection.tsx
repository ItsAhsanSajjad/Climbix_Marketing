import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { IconCheck } from "@/components/ui/Icon";
import { credibility } from "@/lib/site";

/**
 * Company credibility - the calm, human "who is behind this" moment. Left: an
 * editorial heading explaining why Climbix exists. Right: a premium white
 * doc-panel team card with an initials avatar (photo placeholder), role, a
 * bronze rule, and three plain-spoken proof points with teal checks. No
 * invented names, no stock faces - honest by design. Reduced-motion safe via
 * Reveal.
 */
export function FounderSection() {
  return (
    <Section id="credibility" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        {/* Editorial heading */}
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow={credibility.eyebrow}
            title={
              <>
                Built for serious businesses that want{" "}
                <span className="text-bronze">clarity</span> before scale.
              </>
            }
            description={credibility.body}
          />
        </Reveal>

        {/* Founder / team credibility card */}
        <Reveal delay={0.12}>
          <div className="doc-panel p-8">
            {/* TODO: replace initials placeholder with real founder photo */}
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900"
              aria-hidden
            >
              <span className="font-display text-xl text-bronze-300">
                {credibility.card.initials}
              </span>
            </div>

            <p className="mt-5 text-lg font-semibold text-graphite">
              {credibility.card.name}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {credibility.card.role}
            </p>

            <div className="bronze-rule my-6" aria-hidden />

            <ul className="flex flex-col gap-4">
              {credibility.card.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                  <span className="text-base leading-relaxed text-graphite">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
