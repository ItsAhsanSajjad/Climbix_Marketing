import type { Variants, Transition } from "framer-motion";

/**
 * Climbix motion language - shared timing, easing, and variants.
 * One source of truth so every reveal/stagger across the site feels like the
 * same hand. Keep durations restrained: premium reads as controlled, not busy.
 */

// Premium easing - easeOutExpo-style. Confident settle, no bounce/overshoot.
export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
// Symmetric in/out - for toggles that open and close (mobile menu, nav bar).
export const easeInOut: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const duration = {
  micro: 0.2, // hover / tap micro-interactions
  reveal: 0.6, // section + element reveals
  hero: 0.9, // hero entrance
  slow: 1.1, // rail / divider draws
  draw: 1.3, // chart line draw
} as const;

// Viewport trigger shared by every scroll reveal - fires a touch before the
// element is fully in view, only once, so the page never re-animates on scroll.
export const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

const revealTransition: Transition = { duration: duration.reveal, ease };

/**
 * Fade up + blur-to-clear. Reserved for single, prominent elements (section
 * headings, the CTA panel) - blur is a per-frame re-raster, so it must not run
 * on many grid items at once. Grid items use the blur-free staggerItem below.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: revealTransition },
};

/** Lighter fade, no blur - for large surfaces and anything that repeats. */
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: revealTransition },
};

/** Container that orchestrates staggered children. */
export const staggerContainer = (stagger = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/**
 * Child item for staggerContainer. Opacity + lift only (no blur) so a grid of
 * 3-5 items animating together stays composite-cheap.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: revealTransition },
};
