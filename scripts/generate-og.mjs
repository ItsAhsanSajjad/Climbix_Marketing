/**
 * Generates public/og-image.png (1200x630) - the Climbix conversion-system
 * social card. Rasterizes an inline SVG with sharp (bundled with Next).
 *
 * Soft-ivory canvas, charcoal headline with a champagne emphasis, and a deep
 * midnight-navy "Growth Leak Diagnostic" panel mirroring the hero console.
 * Windows-safe system fonts (Segoe UI / Arial).
 *
 * Run: node scripts/generate-og.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "og-image.png");

const W = 1200;
const H = 630;

const rows = [
  { label: "Spend leakage", tag: "Elevated", color: "#D1AA62" },
  { label: "Campaign clarity", tag: "Review", color: "#94A3B8" },
  { label: "Landing path", tag: "Leaking", color: "#D1AA62" },
  { label: "Tracking health", tag: "At risk", color: "#D1AA62" },
  { label: "Lead quality", tag: "Unclear", color: "#94A3B8" },
];

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FCFAF5"/>
      <stop offset="1" stop-color="#F8F5EF"/>
    </linearGradient>
    <linearGradient id="navy" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#12293F"/>
      <stop offset="1" stop-color="#061522"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#C6A15B"/>
      <stop offset="1" stop-color="#D1AA62"/>
    </linearGradient>
    <radialGradient id="warm" cx="0.15" cy="0.1" r="0.7">
      <stop offset="0" stop-color="#C6A15B" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#C6A15B" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#warm)"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#gold)"/>

  <!-- wordmark -->
  <g transform="translate(80,76)">
    <rect x="0" y="-2" width="34" height="34" rx="9" fill="#2458FF"/>
    <path d="M8 24 h6 v-8 h6 v-8 h8" fill="none" stroke="#ffffff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="48" y="24" font-family="Segoe UI, Arial, sans-serif" font-size="27" font-weight="700" fill="#182333">Climbix</text>
    <text x="149" y="24" font-family="Segoe UI, Arial, sans-serif" font-size="27" font-weight="700" fill="#C6A15B">.</text>
  </g>

  <!-- kicker -->
  <text x="82" y="210" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="4" fill="#C8A45D">FREE GROWTH LEAK AUDIT</text>

  <!-- headline -->
  <text x="80" y="286" font-family="Segoe UI, Arial, sans-serif" font-size="55" font-weight="800" fill="#142033">Find where your</text>
  <text x="80" y="352" font-family="Segoe UI, Arial, sans-serif" font-size="55" font-weight="800" fill="#142033">marketing budget is</text>
  <text x="80" y="418" font-family="Segoe UI, Arial, sans-serif" font-size="55" font-weight="800" fill="url(#gold)">leaking.</text>

  <!-- subline -->
  <text x="82" y="484" font-family="Segoe UI, Arial, sans-serif" font-size="22" fill="#667085">A free audit of your ads, landing pages, tracking and</text>
  <text x="82" y="514" font-family="Segoe UI, Arial, sans-serif" font-size="22" fill="#667085">funnel path - what is wasting budget, what to fix first.</text>

  <!-- navy diagnostic panel -->
  <g transform="translate(788,120)">
    <rect x="0" y="0" width="334" height="392" rx="26" fill="url(#navy)"/>
    <rect x="0" y="0" width="334" height="4" rx="2" fill="url(#gold)"/>
    <text x="28" y="46" font-family="Consolas, monospace" font-size="13" letter-spacing="3" fill="#D1AA62">GROWTH LEAK DIAGNOSTIC</text>
    <text x="28" y="80" font-family="Segoe UI, Arial, sans-serif" font-size="21" font-weight="600" fill="#ffffff">Where the budget goes</text>
    <rect x="28" y="100" width="278" height="1" fill="#C6A15B" opacity="0.5"/>
    ${rows
      .map((r, i) => {
        const y = 140 + i * 54;
        return `
      <text x="28" y="${y}" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="500" fill="#EEF2F8">${r.label}</text>
      <rect x="222" y="${y - 16}" width="84" height="24" rx="12" fill="${r.color}" opacity="0.16"/>
      <text x="264" y="${y}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="${r.color}">${r.tag}</text>`;
      })
      .join("")}
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await sharp(png).toFile(out);
console.log("OG image written:", out, `(${png.length} bytes)`);
