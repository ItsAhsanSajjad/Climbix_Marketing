"use client";

import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { ease, duration, viewport } from "@/lib/motion";
import { measures, processSteps } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The process - a vertical animated timeline on the ivory canvas.
 * A spine runs down the page and draws itself segment by segment as each of
 * the five steps scrolls into view: bronze-outlined number circles sit on the
 * spine, content alternates left/right of it on lg for editorial rhythm, and
 * every step closes with a single teal-check "You get:" deliverable line.
 * Reduced motion: transitions collapse to 0s, so spine + rows appear instantly.
 */
export function ProcessSection() {
  const reduced = useReducedMotion();

  // Hidden states are constant (safe for SSR hydration); only the transition
  // timing branches on reduced motion.
  const rowShow = reduced
    ? { duration: 0 }
    : { duration: duration.reveal, ease, delay: 0.15 };
  const circleShow = reduced ? { duration: 0 } : { duration: duration.reveal, ease };
  const segmentShow = reduced ? { duration: 0 } : { duration: duration.slow, ease };

  return (
    <Section id="process">
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              From audit to scale - without the black{" "}
              <span className="text-bronze">box</span>.
            </>
          }
          description="Five disciplined steps from diagnosis to compounding growth. At every stage you know what we are doing, why we are doing it, and exactly what you receive."
        />
      </Reveal>

      <ol className="mx-auto mt-16 flex max-w-5xl flex-col md:mt-20">
        {processSteps.map((s, i) => {
          const isLast = i === processSteps.length - 1;
          const contentLeft = i % 2 !== 0; // odd rows swing left of the spine on lg

          return (
            <m.li
              key={s.step}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex gap-6 sm:gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)] lg:gap-0"
            >
              {/* Spine column: number circle + growing segment to the next step. */}
              <div className="flex shrink-0 flex-col items-center lg:col-start-2 lg:row-start-1">
                <m.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.86 },
                    show: { opacity: 1, scale: 1, transition: circleShow },
                  }}
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-bronze-400 bg-white text-base font-semibold text-bronze-600 shadow-soft"
                >
                  {s.step}
                </m.div>
                {!isLast && (
                  <m.div
                    aria-hidden
                    variants={{
                      hidden: { scaleY: 0 },
                      show: { scaleY: 1, transition: segmentShow },
                    }}
                    className="mt-2 w-px flex-1 origin-top bg-gradient-to-b from-bronze-400/70 via-platinum-300 to-platinum-300"
                  />
                )}
              </div>

              {/* Step content - alternates sides of the spine on lg. */}
              <m.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: rowShow },
                }}
                className={cn(
                  "pt-2.5 lg:row-start-1",
                  !isLast && "pb-14 lg:pb-20",
                  contentLeft
                    ? "lg:col-start-1 lg:pr-2 lg:text-right"
                    : "lg:col-start-3 lg:pl-2",
                )}
              >
                <h3 className="text-lg font-semibold text-graphite lg:text-xl">
                  {s.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 max-w-prose text-base leading-relaxed text-slate-600",
                    contentLeft && "lg:ml-auto",
                  )}
                >
                  {s.body}
                </p>
                <p
                  className={cn(
                    "mt-5 flex items-start gap-2.5 text-sm font-medium text-graphite",
                    contentLeft && "lg:justify-end",
                  )}
                >
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <span>
                    <span className="text-slate-500">You get:</span> {s.deliverable}
                  </span>
                </p>
              </m.div>
            </m.li>
          );
        })}
      </ol>

      {/* What step 05 reports on - measurement folded into the process. */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-4 max-w-5xl border-t border-platinum-300 pt-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            What we report on
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {measures.map((item) => (
              <li
                key={item.metric}
                className="inline-flex items-baseline gap-2 rounded-full border border-platinum-300 bg-white px-4 py-2 text-sm"
              >
                <span className="font-mono font-semibold text-cobalt-600">{item.metric}</span>
                <span className="text-slate-600">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
