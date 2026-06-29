/**
 * Conversion tracking shim - production-ready, vendor-agnostic.
 *
 * `track()` always pushes a structured event onto window.dataLayer (for GTM),
 * and additionally forwards to gtag (GA4 / Google Ads) and fbq (Meta Pixel) if
 * those globals are present - so events flow whether you wire tags via GTM or
 * load GA4/Pixel standalone (see AnalyticsScripts). SSR-safe; never throws; a
 * no-op until at least one destination exists.
 *
 * Instrumented triggers:
 *   - "cta_click"      - any primary/secondary CTA (delegated via CtaTracker)
 *   - "lead_submit"    - homepage lead form submitted
 *   - "audit_request"  - audit landing form submitted
 *   - "thank_you_view" - /thank-you viewed (the conversion event)
 *
 * TODO (launch): in GTM, map "thank_you_view" / "audit_request" to a GA4
 * conversion + a Google Ads conversion (AW-.../label). The Meta Pixel mapping
 * below sends a standard "Lead" event for form/thank-you steps.
 */

type EventName = "cta_click" | "lead_submit" | "audit_request" | "thank_you_view";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Which events count as a Meta "Lead" standard event.
const META_LEAD_EVENTS = new Set<EventName>([
  "lead_submit",
  "audit_request",
  "thank_you_view",
]);

export function track(event: EventName, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  // GA4 / Google Ads (standalone gtag)
  window.gtag?.("event", event, payload);

  // Meta Pixel (standalone fbq)
  if (window.fbq) {
    if (META_LEAD_EVENTS.has(event)) window.fbq("track", "Lead", payload);
    else window.fbq("trackCustom", event, payload);
  }
}
