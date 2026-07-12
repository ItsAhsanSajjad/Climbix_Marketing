"use client";

import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IconArrow } from "@/components/ui/Icon";
import { useStickyCta } from "@/lib/useStickyCta";
import { ease } from "@/lib/motion";

/** Sentinels that hide the bar: the contact form room and the page footer. */
const SENTINELS = ["contact"] as const;
const MIN_SCROLL = 680;

/**
 * Tasteful conversion helper for the homepage. Appears once the visitor has
 * scrolled past the hero, hides while the contact section is on screen (the
 * form is the action there), and offers a real dismiss control - the choice
 * persists for the browser session. IntersectionObserver-driven: nothing on
 * the scroll path forces layout.
 */
export function ConversionStickyCTA() {
  const { show, dismiss } = useStickyCta(SENTINELS, MIN_SCROLL);

  const dismissBtn = (
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
  );

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Desktop pill */}
          <m.div
            key="sticky-desktop"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease }}
            className="fixed bottom-6 right-6 z-40 hidden md:block"
          >
            <div className="flex items-center gap-1 rounded-full border border-platinum-300 bg-white/95 p-1.5 shadow-lift backdrop-blur-md">
              <Link
                href="#contact"
                data-cta="sticky-desktop"
                className="group/sticky flex min-h-11 items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 transition-colors hover:bg-platinum-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500"
              >
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-graphite">Get Free Audit</span>
                  <span className="text-xs text-slate-500">Free · No pressure</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt-500 text-white transition-transform duration-300 group-hover/sticky:translate-x-0.5">
                  <IconArrow className="h-4 w-4" />
                </span>
              </Link>
              {dismissBtn}
            </div>
          </m.div>

          {/* Mobile sticky bar */}
          <m.div
            key="sticky-mobile"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-platinum-300 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center gap-2">
              <Link
                href="#contact"
                data-cta="sticky-mobile"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-cobalt-500 text-sm font-semibold text-white shadow-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
              >
                Get Free Audit
                <IconArrow className="h-4 w-4" />
              </Link>
              {dismissBtn}
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
