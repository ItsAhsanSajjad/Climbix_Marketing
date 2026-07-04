import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { RevenueLeakMemo } from "@/components/sections/RevenueLeakMemo";
import { problem, problems } from "@/lib/site";

/**
 * The Problem - the emotionally sharp diagnosis. Left: a sticky editorial
 * heading naming the real cause (a disconnected system, not bad traffic).
 * Right: the Revenue Leak Memo artifact, then the five ways the disconnect
 * shows up as a tight stack of premium white lux-cards with large bronze
 * editorial numbers. Closes on a quiet loss-aversion line. Reduced-motion
 * safe via Reveal/Stagger.
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
              eyebrow={problem.eyebrow}
              title={
                <>
                  Your traffic is not the problem.{" "}
                  <span className="mt-2 block">
                    Your system is{" "}
                    <span className="text-bronze">disconnected</span>.
                  </span>
                </>
              }
              description={problem.subhead}
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
            <StaggerContainer className="mt-5 flex flex-col gap-4">
              {problems.map((p, i) => (
                <StaggerItem key={p.title}>
                  <article className="lux-card flex h-full items-start gap-5 p-6">
                    <span className="font-editorial text-3xl leading-none text-bronze-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-graphite md:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-base leading-relaxed text-slate-600">
                        {p.body}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <Reveal delay={0.1}>
              <p className="mt-8 font-editorial text-lg italic leading-relaxed text-slate-500">
                Every unclear campaign keeps spending while you wait.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
