"use client";

import { m, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { leakPoints } from "@/lib/site";

/**
 * Revenue Leak Memo - a light diagnostic artifact for the leak section. A white
 * document sheet tracing the four points where budget escapes, from before the
 * click to the data. A calm bronze rail with markers - not a chart, not a
 * dashboard. Flex rail (dot + growing connector) so nothing clips at 320px.
 * Honest, no numbers, labelled Illustrative. Reduced-motion safe.
 */
export function RevenueLeakMemo() {
  const reduce = useReducedMotion();

  return (
    <m.div
      className="doc-panel mx-auto w-full max-w-[30rem] p-6 sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduce ? 0.4 : 0.7, ease }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="doc-kicker">Revenue Leak Memo</span>
          <h3 className="mt-2 font-editorial text-2xl text-graphite">Where budget escapes</h3>
        </div>
        <span className="shrink-0 rounded-full border border-platinum-300 px-2.5 py-1 text-xs font-medium text-slate-500">
          Illustrative
        </span>
      </div>

      <div className="bronze-rule my-6" aria-hidden />

      <div className="flex flex-col">
        {leakPoints.map((p, i) => {
          const last = i === leakPoints.length - 1;
          return (
            <m.div
              key={p.stage}
              className="flex gap-4"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduce ? 0.3 : 0.5, ease, delay: reduce ? 0 : 0.1 + i * 0.1 }}
            >
              {/* rail */}
              <div className="flex flex-col items-center">
                <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-bronze-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                {!last && <span className="my-1 w-px flex-1 bg-platinum-300" />}
              </div>
              {/* content */}
              <div className={last ? "pb-0" : "pb-6"}>
                <div className="flex items-center gap-2.5">
                  <h4 className="text-[0.95rem] font-semibold text-graphite">{p.stage}</h4>
                  <span className="rounded-full bg-bronze-500/10 px-2 py-0.5 text-xs font-semibold text-bronze-600">
                    Leak
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            </m.div>
          );
        })}
      </div>
    </m.div>
  );
}
