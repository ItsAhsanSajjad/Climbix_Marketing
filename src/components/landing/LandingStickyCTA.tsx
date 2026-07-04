"use client";

import { useState } from "react";
import Link from "next/link";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Mobile-only sticky bottom bar for the PPC landing page. Appears once the
 * visitor has scrolled past the hero (~600px) and hides again whenever the
 * audit form itself is in view - the form is the action there, so a duplicate
 * sticky CTA would only crowd the submit button.
 */
export function LandingStickyCTA() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const form = document.getElementById("audit-form");
    let formInView = false;
    if (form) {
      const rect = form.getBoundingClientRect();
      formInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 80;
    }
    setShow(latest > 600 && !formInView);
  });

  return (
    <AnimatePresence>
      {show && (
        <m.div
          key="landing-sticky"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-platinum-300 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden"
        >
          <Link
            href="#audit-form"
            data-cta="landing-sticky"
            className="flex h-12 w-full items-center justify-center rounded-full bg-cobalt-500 text-sm font-semibold text-white shadow-cobalt"
          >
            Request My Free Audit
          </Link>
        </m.div>
      )}
    </AnimatePresence>
  );
}
