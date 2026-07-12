"use client";

import { Fragment } from "react";
import { m, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { ease, viewport } from "@/lib/motion";
import { contrast, funnelStory, problem } from "@/lib/site";

/** Seconds between one funnel stage finishing and the next beginning. */
const STEP = 0.26;

/**
 * The Problem - the animated problem story. A centered diagnosis heading, then
 * the six-stage funnel from site.ts drawn left-to-right (desktop) or down a
 * growing rail (mobile), each hand-off annotated with the leak that strikes it.
 * Below, the honest "guessing versus knowing" contrast resolves the tension
 * without fear-selling. Sequenced with framer variants; reduced motion
 * collapses every duration/delay to zero so it all appears instantly.
 */
export function ProblemSection() {
  const reduced = useReducedMotion();
  const d = (s: number) => (reduced ? 0 : s);

  // Desktop sequence: node appears -> connector draws -> leak label surfaces.
  const nodeVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: d(0.5), ease, delay: d(i * STEP) },
    }),
  };
  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    show: (i: number) => ({
      scaleX: 1,
      transition: { duration: d(0.4), ease, delay: d(i * STEP + 0.18) },
    }),
  };
  const leakVariants: Variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: { duration: d(0.45), ease, delay: d(i * STEP + 0.34) },
    }),
  };

  // Mobile sequence: the rail grows top-down while rows step in beside it.
  const railVariants: Variants = {
    hidden: { scaleY: 0 },
    show: { scaleY: 1, transition: { duration: d(1.4), ease, delay: d(0.1) } },
  };
  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: d(0.5), ease, delay: d(0.15 + i * 0.16) },
    }),
  };

  const last = funnelStory.length - 1;

  return (
    <Section id="problem" className="bg-ivory-50">
      {/* Diagnosis heading */}
      <Reveal>
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={
            <>
              Your traffic is not the problem.{" "}
              <span className="mt-2 block">
                Your system is <span className="text-bronze">disconnected</span>.
              </span>
            </>
          }
          description={problem.subhead}
        />
      </Reveal>

      {/* Funnel story - desktop: horizontal six-node flow */}
      <m.div
        className="mt-16 hidden items-start md:flex"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        aria-label="The six stages after the click, and the leak at each hand-off"
      >
        {funnelStory.map((f, i) => (
          <Fragment key={f.stage}>
            <div className="flex w-0 flex-1 flex-col items-center">
              <m.div
                custom={i}
                variants={nodeVariants}
                className="lux-card flex h-20 w-full items-center justify-center px-2 py-3 text-center"
              >
                <div>
                  <span className="doc-kicker block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-graphite lg:text-base">
                    {f.stage}
                  </h3>
                </div>
              </m.div>
              <m.p
                custom={i}
                variants={leakVariants}
                className="mt-3 flex items-start justify-center gap-1.5 px-1 text-center text-sm leading-snug text-bronze-600"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-500"
                  aria-hidden
                />
                {f.leak}
              </m.p>
            </div>
            {i < last && (
              <div
                className="flex h-20 w-5 shrink-0 items-center lg:w-9"
                aria-hidden
              >
                <div className="relative h-px w-full">
                  <div className="absolute inset-0 bg-platinum-300" />
                  <m.div
                    custom={i}
                    variants={lineVariants}
                    className="absolute inset-0 origin-left bg-bronze-400"
                  />
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </m.div>

      {/* Funnel story - mobile: vertical stepper with a growing rail */}
      <m.div
        className="relative mt-12 md:hidden"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        aria-label="The six stages after the click, and the leak at each hand-off"
      >
        <div
          className="absolute bottom-3 left-[7px] top-3 w-px bg-platinum-300"
          aria-hidden
        />
        <m.div
          variants={railVariants}
          className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-bronze-400"
          aria-hidden
        />
        <div className="flex flex-col gap-7">
          {funnelStory.map((f, i) => (
            <m.div
              key={f.stage}
              custom={i}
              variants={rowVariants}
              className="relative pl-8"
            >
              <span
                className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-bronze-400 bg-ivory-50"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-bronze-500" />
              </span>
              <div className="lux-card px-4 py-3">
                <span className="doc-kicker">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-0.5 text-base font-semibold text-graphite">
                  {f.stage}
                </h3>
              </div>
              <p className="mt-2 flex items-start gap-1.5 pl-1 text-sm leading-snug text-bronze-600">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-500"
                  aria-hidden
                />
                {f.leak}
              </p>
            </m.div>
          ))}
        </div>
      </m.div>

      {/* Quiet aftermath line */}
      <Reveal delay={0.1}>
        <div className="bronze-rule mx-auto mt-14 max-w-[16rem]" aria-hidden />
        <p className="mx-auto mt-6 max-w-reading text-center font-editorial text-xl italic leading-relaxed text-slate-500">
          {problem.aftermath}
        </p>
      </Reveal>

      {/* Guessing vs. knowing - the honest contrast that resolves the story */}
      <div className="mt-16">
        <Reveal>
          <span className="doc-kicker">{contrast.kicker}</span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-graphite">
            {contrast.headline}
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="lux-card h-full p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {contrast.without.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {contrast.without.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-slate-600">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-platinum-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="dark-section h-full rounded-3xl p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-bronze-300">
                {contrast.with.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {contrast.with.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-mist-100">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
