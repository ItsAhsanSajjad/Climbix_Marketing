"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import {
  CONSENT_OPEN_EVENT,
  applyConsent,
  getStoredConsent,
  storeConsent,
  trackingConfigured,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Cookie/consent banner - Consent Mode v2 companion.
 *
 * Renders only when tracking is configured for the deployment AND the visitor
 * has not chosen yet (or asked to change their choice via "Cookie settings").
 * Non-blocking: a bottom region, not a modal - the page stays usable. No
 * preselected acceptance; "Essential only" is as prominent as "Accept".
 * Choice persists in localStorage and can be changed any time.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  // On mount: apply a stored choice (loads the pixel if it was granted) or
  // open the banner when no choice exists yet.
  useEffect(() => {
    if (!trackingConfigured) return;
    const stored = getStoredConsent();
    if (stored) {
      applyConsent(stored);
    } else {
      setOpen(true);
    }
  }, []);

  // "Cookie settings" (footer) re-opens the banner.
  useEffect(() => {
    function onOpen() {
      if (trackingConfigured) setOpen(true);
    }
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  if (!open) return null;

  function choose(choice: ConsentChoice) {
    storeConsent(choice);
    applyConsent(choice);
    track("consent_update", { choice });
    setOpen(false);
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-platinum-300 bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 shadow-lift backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          We use optional cookies to measure campaigns and site performance.
          Nothing loads until you choose, and essential site features work
          either way. Details in our{" "}
          <Link
            href="/privacy"
            className="font-medium text-cobalt-600 underline underline-offset-2 hover:text-cobalt-700"
          >
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="inline-flex h-11 items-center justify-center rounded-full border border-platinum-300 bg-white px-5 text-sm font-semibold text-graphite transition-colors hover:border-graphite/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="inline-flex h-11 items-center justify-center rounded-full bg-cobalt-500 px-5 text-sm font-semibold text-white shadow-cobalt transition-colors hover:bg-cobalt-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer control - lets visitors change their cookie choice later. */
export function CookieSettingsButton({ className }: { className?: string }) {
  if (!trackingConfigured) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
