"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const DISMISS_KEY = "climbix-sticky-dismissed";

/**
 * Visibility logic shared by the sticky CTA bars.
 *
 * Shows after `minScroll` px, hides while any of the `sentinelIds` elements
 * (forms, footer) is on screen, and stays hidden for the rest of the browser
 * session once dismissed. Sentinel visibility uses IntersectionObserver -
 * no getBoundingClientRect calls on the scroll path, so scrolling never
 * forces a synchronous layout.
 */
export function useStickyCta(sentinelIds: readonly string[], minScroll: number) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [sentinelVisible, setSentinelVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // SSR-safe default: hidden
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledPast(latest > minScroll);
  });

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  useEffect(() => {
    const targets = sentinelIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setSentinelVisible(visible.size > 0);
      },
      // Treat a sentinel as "on screen" slightly before it enters, so the bar
      // clears out of the way ahead of the form/footer arriving.
      { rootMargin: "0px 0px 15% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sentinelIds]);

  function dismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* private mode - dismissal still holds for this page view */
    }
  }

  return { show: scrolledPast && !sentinelVisible && !dismissed, dismiss };
}
