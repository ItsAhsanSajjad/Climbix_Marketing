import type { Config } from "tailwindcss";

/**
 * Climbix Marketing — Phase 1 design system.
 * Premium dark-authority palette with a controlled electric-blue → cyan accent.
 * Tokens here are the single source of truth for color, type scale, spacing rhythm,
 * radius, and shadow. Components consume these — no ad-hoc hex values in markup.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Authority surfaces — deep navy / near-black
        ink: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#101728",
          700: "#1a2338",
          600: "#27324d",
          500: "#3a465f",
        },
        // Readable foregrounds on dark — brightened for premium contrast.
        mist: {
          50: "#f7f9fc",
          100: "#eef2f8",
          200: "#dde5f1",
          300: "#b9c4d8", // body text — lifted from #aab6cc for legibility
          400: "#8d9ab4",
        },
        paper: "#f8fafc", // near-white for the highest-contrast headings
        // Primary accent — electric blue to cyan
        accent: {
          50: "#e8f4ff",
          300: "#7cc4ff",
          400: "#3aa0ff",
          500: "#1283ff",
          600: "#006ae6",
          700: "#0055b8",
        },
        cyan: {
          400: "#34e3e3",
          500: "#11cfd6",
        },
        violet: {
          400: "#9a7bff",
          500: "#7b5cff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Controlled type scale (label → display)
        eyebrow: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.16em", fontWeight: "600" }],
        meta: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["4.5rem", { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" }],
      },
      spacing: {
        // Section vertical rhythm — tightened for density (premium ≠ empty).
        section: "5.5rem",
        "section-lg": "7rem",
      },
      maxWidth: {
        prose: "42rem",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(5,7,13,0.4), 0 12px 32px -12px rgba(5,7,13,0.6)",
        "card-hover": "0 1px 2px rgba(5,7,13,0.4), 0 24px 48px -16px rgba(18,131,255,0.25)",
        glow: "0 0 0 1px rgba(58,160,255,0.25), 0 18px 60px -18px rgba(18,131,255,0.45)",
        // Deep, layered panel shadow for the signature dashboard surfaces.
        panel:
          "0 2px 4px rgba(5,7,13,0.5), 0 24px 60px -20px rgba(5,7,13,0.85), inset 0 1px 0 rgba(255,255,255,0.04)",
        chip: "0 8px 24px -10px rgba(5,7,13,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(120deg, #1283ff 0%, #11cfd6 100%)",
        "accent-soft": "linear-gradient(135deg, rgba(18,131,255,0.16), rgba(17,207,214,0.10))",
        // Subtle top-light on glass panels.
        "panel-sheen":
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
