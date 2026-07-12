"use client";

import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useStickyCta } from "@/lib/useStickyCta";
import { ease } from "@/lib/motion";

const SENTINELS = ["audit-form", "landing-footer"] as const;
const MIN_SCROLL = 600;

/**
 * Mobile-only sticky bottom bar for the PPC landing page. Appears once the
 * visitor has scrolled past the hero, hides whenever the audit form (or the
 * footer) is on screen, and can be dismissed for the session.
 * IntersectionObserver-driven - no layout reads on the scroll path.
 */
export function LandingStickyCTA() {
  const { show, dismiss } = useStickyCta(SENTINELS, MIN_SCROLL);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          key="landing-sticky"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-platinum-300 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center gap-2">
            <Link
              href="#audit-form"
              data-cta="landing-sticky"
              className="flex h-12 flex-1 items-center justify-center rounded-full bg-cobalt-500 text-sm font-semibold text-white shadow-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
            >
              Get Free Audit
            </Link>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss this bar"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-platinum-100 hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
