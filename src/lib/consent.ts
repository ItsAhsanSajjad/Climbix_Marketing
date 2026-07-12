"use client";

/**
 * Consent Mode v2 helpers (client-only).
 *
 * Defaults are set to DENIED by an inline script in AnalyticsScripts before
 * any Google tag loads. These helpers store the visitor's choice, forward it
 * to gtag as a consent update, and gate the Meta Pixel (which has no native
 * consent mode - it simply doesn't load until consent is granted).
 */

export type ConsentChoice = "granted" | "denied";

export const CONSENT_KEY = "climbix-consent";
/** Dispatched (window) to re-open the banner, e.g. from "Cookie settings". */
export const CONSENT_OPEN_EVENT = "climbix:consent-open";

/** True when any marketing/analytics tag is configured for this deployment. */
export const trackingConfigured = Boolean(
  process.env.NEXT_PUBLIC_GTM_ID ||
    process.env.NEXT_PUBLIC_GA4_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ||
    process.env.NEXT_PUBLIC_META_PIXEL_ID,
);

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function storeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* storage unavailable (private mode) - consent still applies this session */
  }
}

/** Forward the choice to Google tags (Consent Mode v2 update). */
function updateGoogleConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

/** Load the Meta Pixel - only ever called after consent is granted. */
function loadMetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId || typeof window === "undefined" || window.fbq) return;
  /* eslint-disable */
  // Standard Meta Pixel bootstrap, injected on consent instead of page load.
  (function (f: any, b: Document, e: string, v: string) {
    let n: any, t: any, s: any;
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s?.parentNode?.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  // The bootstrap above just defined window.fbq; TS narrowed it to undefined
  // from the early-return guard, so go through an explicit cast.
  const fbq = window.fbq as unknown as (...args: unknown[]) => void;
  fbq("init", pixelId);
  fbq("track", "PageView");
}

/**
 * Apply a consent choice to the live page: Google consent update + Meta Pixel
 * gating. Safe to call repeatedly (pixel loads once).
 */
export function applyConsent(choice: ConsentChoice) {
  updateGoogleConsent(choice);
  if (choice === "granted") loadMetaPixel();
}
