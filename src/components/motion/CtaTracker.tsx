"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Delegated CTA click tracking. Mounted once; listens for clicks on conversion
 * links (the booking anchor, the audit landing, and anything tagged data-cta)
 * and fires a single "cta_click" event. Avoids turning every Button into a
 * client component just to instrument it.
 *
 * TODO (Phase 4): these events flow to dataLayer - map "cta_click" to a GA4
 * event / Google Ads micro-conversion in GTM.
 */
export function CtaTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest(
        'a[href="#contact"], a[href="/free-marketing-audit"], a[href="#audit-form"], [data-cta]',
      ) as HTMLElement | null;
      if (!el) return;
      track("cta_click", {
        label: el.textContent?.trim().slice(0, 60) || "cta",
        href: el.getAttribute("href") || undefined,
        location: el.getAttribute("data-cta") || "link",
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
