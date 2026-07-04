"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconCheck } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import { ease } from "@/lib/motion";

const STORAGE_KEY = "climbix-offer-popup-dismissed";
const SHOW_AFTER_MS = 14000;
const SHOW_AFTER_SCROLL = 0.45;

const bullets = ["No pressure", "No contract", "Clear fixes", "Tracking-first review"] as const;

/**
 * Offer popup - premium, quiet, and respectful. Shows once per session after
 * 14s OR 45% scroll (whichever first), remembers dismissal in sessionStorage,
 * closes on Escape/backdrop/button, and its CTA scrolls to the hero form
 * (never a dead button). Fade/scale entrance; honours reduced motion via
 * MotionConfig. Focus moves into the dialog on open and back out on close.
 */
export function OfferPopup() {
  const [show, setShow] = useState(false);
  const [armed, setArmed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Arm once per session; first trigger (time or scroll) wins.
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      setShow(true);
      setArmed(true);
    };
    const timer = window.setTimeout(fire, SHOW_AFTER_MS);
    const pastThreshold = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      return max > 0 && window.scrollY / max >= SHOW_AFTER_SCROLL;
    };
    const onScroll = () => {
      if (pastThreshold()) fire();
    };
    // Restored/deep-linked sessions can mount already past the threshold - the
    // scroll event never refires, so check once after a short grace period.
    const graceCheck = window.setTimeout(() => {
      if (pastThreshold()) fire();
    }, 2500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(graceCheck);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = useCallback(() => {
    setShow(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }, []);

  // Escape closes; focus lands on the close button when opened.
  useEffect(() => {
    if (!show) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show, dismiss]);

  function claim() {
    track("cta_click", { label: "Get Free Audit", href: "#hero-form", location: "offer-popup" });
    dismiss();
    // No explicit behavior: inherits the page's scroll-behavior (smooth), which
    // the reduced-motion media query flips to auto - so this respects the user.
    document.getElementById("hero-form")?.scrollIntoView({ block: "center" });
  }

  if (!armed && !show) return null;

  return (
    <AnimatePresence>
      {show && (
        <m.div
          key="offer-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-obsidian/50 p-4 backdrop-blur-sm sm:items-center"
          onClick={dismiss}
        >
          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="offer-popup-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            className="doc-panel relative w-full max-w-md p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={dismiss}
              aria-label="Close offer"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-platinum-300 text-slate-500 transition-colors hover:border-slate-400 hover:text-graphite"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <span className="doc-kicker">Free growth leak audit</span>
            <h2 id="offer-popup-title" className="mt-3 font-display text-2xl font-bold leading-snug text-graphite">
              Before you spend more, find the leak.
            </h2>
            <p className="mt-2.5 text-base leading-relaxed text-slate-600">
              Get a free growth audit covering your ads, landing page, tracking,
              and funnel path.
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <IconCheck className="h-4 w-4 shrink-0 text-teal-500" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={claim}
                className="inline-flex h-12 items-center justify-center rounded-full bg-cobalt-500 px-7 text-base font-semibold text-white shadow-cobalt transition-all hover:-translate-y-0.5 hover:bg-cobalt-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
              >
                Get Free Audit
              </button>
              <button
                type="button"
                onClick={dismiss}
                className="inline-flex h-12 items-center justify-center rounded-full px-5 text-base font-medium text-slate-500 transition-colors hover:text-graphite"
              >
                Maybe Later
              </button>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
