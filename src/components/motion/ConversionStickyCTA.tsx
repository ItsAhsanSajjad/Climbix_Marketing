"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { IconArrow } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { ease } from "@/lib/motion";

/**
 * Tasteful conversion helper. Appears once the visitor has scrolled past the
 * hero and hides again near the footer (where the main CTA already lives, so it
 * never doubles up). Desktop: a compact pill bottom-right. Mobile: a sticky
 * bottom bar with the primary action + a low-friction audit link.
 */
export function ConversionStickyCTA() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const doc = document.documentElement;
    const nearFooter = latest + window.innerHeight > doc.scrollHeight - 720;
    // Hide once the contact form is in view - the form is the action there, so a
    // duplicate sticky CTA would be redundant and could crowd the submit button.
    const contact = document.getElementById("contact");
    const contactInView = contact
      ? contact.getBoundingClientRect().top < window.innerHeight * 0.9
      : false;
    setShow(latest > 680 && !nearFooter && !contactInView);
  });

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
            <Link
              href={site.ctaPrimary.href}
              className="group/sticky flex items-center gap-3 rounded-full border border-accent-400/30 bg-ink-900/85 py-2.5 pl-5 pr-2.5 shadow-glow backdrop-blur-xl transition-colors hover:border-accent-400/60"
            >
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-paper">Book a Strategy Call</span>
                <span className="font-mono text-[0.62rem] uppercase tracking-wide text-mist-400">
                  Free · 15 min · No obligation
                </span>
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-gradient text-ink-950 transition-transform duration-300 group-hover/sticky:translate-x-0.5">
                <IconArrow className="h-4 w-4" />
              </span>
            </Link>
          </m.div>

          {/* Mobile sticky bar */}
          <m.div
            key="sticky-mobile"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center gap-3">
              <Link
                href={site.ctaSecondary.href}
                className="shrink-0 font-mono text-[0.7rem] uppercase tracking-wide text-mist-300"
              >
                Free
                <br />
                audit
              </Link>
              <Link
                href={site.ctaPrimary.href}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent-gradient text-sm font-semibold text-ink-950 shadow-glow"
              >
                Book a Strategy Call
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
