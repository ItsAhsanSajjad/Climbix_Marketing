import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { RevenueLeakMemo } from "@/components/sections/RevenueLeakMemo";
import { problems } from "@/lib/site";

/**
 * The Problem - the emotionally sharp diagnosis. Left: a sticky editorial
 * heading naming the real cause (a disconnected system, not bad traffic).
 * Right: the Revenue Leak Memo artifact followed by the five ways the
 * disconnect shows up - a numbered editorial stack with hairline rules, not a
 * grid of icon cards. Reduced-motion safe via Reveal/Stagger.
 */
export function ProblemSection() {
  return (
    <Section id="about" className="bg-ivory-50">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
        {/* Sticky diagnosis heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="The problem"
              title={
                <>
                  You are not losing because of bad traffic.{" "}
                  <span className="mt-2 block">
                    You are losing because the system is{" "}
                    <span className="text-bronze">disconnected</span>.
                  </span>
                </>
              }
              description="When ads, pages, and tracking don't talk to each other, money leaks out every single week - and nothing in your reports will ever tell you where."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bronze-rule mt-10 max-w-[16rem]" aria-hidden />
            <p className="mt-6 max-w-reading font-editorial text-xl italic leading-relaxed text-slate-500">
              None of these leaks announce themselves. They compound quietly
              until the budget runs out.
            </p>
          </Reveal>
        </div>

        {/* Visual artifact + the five ways the disconnect shows up */}
        <div className="flex flex-col gap-12">
          <Reveal delay={0.1}>
            <RevenueLeakMemo />
          </Reveal>

          <div>
            <Reveal>
              <span className="doc-kicker">How it shows up</span>
            </Reveal>
            <StaggerContainer className="mt-5 flex flex-col gap-8">
              {problems.map((p, i) => (
                <StaggerItem
                  key={p.title}
                  className="border-t border-platinum-300 pt-6"
                >
                  <div className="flex gap-6">
                    <span className="font-editorial text-3xl leading-none text-bronze-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-graphite">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-600">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}
