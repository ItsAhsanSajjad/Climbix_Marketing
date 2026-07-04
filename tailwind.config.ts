import type { Config } from "tailwindcss";

/**
 * Climbix Marketing - Luxury Growth Intelligence Studio design system.
 *
 * Light-first premium palette: warm ivory / platinum reading surfaces with rich
 * graphite text, obsidian navy reserved for the hero, key strategy panels, and
 * the final CTA. Cobalt + teal are the active signal accents; champagne gold is
 * a sparing premium detail. Deep-dark authority tokens (ink/mist/paper/accent)
 * are retained for the dark sections. Tokens here are the single source of truth.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2.5rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        /* ---- Private Audit Studio: quiet-luxury light surfaces ---- */
        porcelain: "#F8F5EF", // primary canvas
        ivory: {
          50: "#FCFAF5",
          100: "#F8F5EF", // porcelain (canvas)
          200: "#EFE8DC", // warm ivory band
        },
        platinum: {
          100: "#F4F2EC", // warm-neutral inset
          200: "#EAE6DD",
          300: "#DED8CC", // hairline borders on light (warm)
        },
        graphite: "#142033", // charcoal ink - primary text on light
        obsidian: "#04111F", // deepest midnight
        navy: {
          700: "#11273D",
          800: "#0B1E32",
          900: "#061522", // deep midnight navy - hero + final CTA
        },
        midnight: "#0B1E32",

        /* ---- Signal accents (sparing) ---- */
        cobalt: {
          400: "#5B7DFF",
          500: "#2458FF", // electric conversion blue - primary action
          600: "#1D46D9",
          700: "#1738AE",
        },
        teal: {
          400: "#35D2BA",
          500: "#20BFA9", // success teal
          600: "#17998A",
        },
        // Warm champagne gold - luxury emphasis only.
        bronze: {
          300: "#E0C286",
          400: "#D4AF67",
          500: "#C8A45D",
          600: "#A8863F",
        },
        champagne: {
          200: "#EBD9B4",
          300: "#E0C286",
          400: "#D4AF67",
          500: "#C8A45D",
        },

        /* ---- Retained deep-authority tokens (dark sections + compat) ---- */
        ink: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#101728",
          700: "#1a2338",
          600: "#27324d",
          500: "#3a465f",
        },
        mist: {
          50: "#f7f9fc",
          100: "#eef2f8",
          200: "#dde5f1",
          300: "#b9c4d8",
          400: "#8d9ab4",
        },
        paper: "#f8fafc",
        accent: {
          50: "#e8f4ff",
          300: "#7cc4ff",
          400: "#3aa0ff",
          500: "#1283ff",
          600: "#006ae6",
          700: "#0055b8",
        },
        cyan: { 400: "#34e3e3", 500: "#11cfd6" },
        violet: { 400: "#9a7bff", 500: "#7b5cff" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
      },
      fontSize: {
        // Small labels - used sparingly now (luxury = fewer tiny labels).
        eyebrow: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.14em", fontWeight: "600" }],
        meta: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        // Comfortable reading body - default lifted to 18-19px in components.
        "lux-body": ["1.1875rem", { lineHeight: "1.7" }],
        "lux-lead": ["1.375rem", { lineHeight: "1.55", letterSpacing: "-0.005em" }],
        // Luxury display scale - large, confident, elegant.
        "lux-sm": ["2.25rem", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }],
        "lux-md": ["2.85rem", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
        "lux-lg": ["3.75rem", { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }],
        "lux-xl": ["4.75rem", { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" }],
        // Editorial serif accents.
        "edito-md": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.015em", fontWeight: "500" }],
        // Legacy display scale (dark components not yet reskinned).
        "display-sm": ["2.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["4.5rem", { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" }],
      },
      spacing: {
        // Editorial rhythm - premium air without disconnecting the story.
        section: "5.5rem",
        "section-lg": "7.5rem",
      },
      maxWidth: {
        prose: "44rem",
        reading: "38rem",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        // Soft luxury depth on light surfaces - warm, quiet, editorial.
        soft: "0 1px 2px rgba(28,36,48,0.04), 0 14px 34px -18px rgba(28,36,48,0.14)",
        lift: "0 2px 6px rgba(28,36,48,0.05), 0 32px 64px -28px rgba(8,24,39,0.20)",
        "lift-lg": "0 4px 10px rgba(28,36,48,0.06), 0 48px 100px -36px rgba(8,24,39,0.28)",
        // Focus ring / cobalt emphasis.
        cobalt: "0 12px 34px -14px rgba(36,87,255,0.42)",
        // Dark-section inner panel.
        "dark-panel": "0 2px 4px rgba(2,4,9,0.4), 0 30px 70px -28px rgba(2,4,9,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
        // Legacy.
        card: "0 1px 2px rgba(5,7,13,0.4), 0 12px 32px -12px rgba(5,7,13,0.6)",
        glow: "0 0 0 1px rgba(58,160,255,0.25), 0 18px 60px -18px rgba(18,131,255,0.45)",
        panel: "0 2px 4px rgba(5,7,13,0.5), 0 24px 60px -20px rgba(5,7,13,0.85), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "ivory-fade": "linear-gradient(180deg, #FCFAF5 0%, #F8F5EF 100%)",
        "obsidian-fade": "linear-gradient(155deg, #11273D 0%, #0B1E32 50%, #04111F 100%)",
        "cobalt-gradient": "linear-gradient(120deg, #2458FF 0%, #20BFA9 100%)",
        "champagne-line": "linear-gradient(90deg, transparent, #D4AF67, transparent)",
        "bronze-line": "linear-gradient(90deg, transparent, #C8A45D 45%, #C8A45D 55%, transparent)",
        "accent-gradient": "linear-gradient(120deg, #1283ff 0%, #11cfd6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
