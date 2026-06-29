/**
 * Generates the static Open Graph image (public/og-image.png, 1200x630) in the
 * Editorial Growth Studio style. Rasterises an SVG with sharp (already a Next
 * dependency) so it works cross-platform without the @vercel/og runtime.
 *
 * Run: node scripts/generate-og.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(join(root, "public"), { recursive: true });

const W = 1200;
const H = 630;

const gridLines = () => {
  let s = "";
  for (let x = 0; x <= W; x += 48) s += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#1b3fb0" stroke-opacity="0.05" stroke-width="1"/>`;
  for (let y = 0; y <= H; y += 48) s += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#1b3fb0" stroke-opacity="0.05" stroke-width="1"/>`;
  return s;
};

// Right-side blueprint motif: three nodes on a connector line.
const nodes = [
  { y: 210, label: "Acquisition" },
  { y: 315, label: "Conversion" },
  { y: 420, label: "Tracking" },
];
const motif = `
  <line x1="980" y1="210" x2="980" y2="420" stroke="#2350d6" stroke-opacity="0.5" stroke-width="2"/>
  ${nodes
    .map(
      (n) => `
    <circle cx="980" cy="${n.y}" r="9" fill="#ffffff" stroke="#2350d6" stroke-width="3"/>
    <circle cx="980" cy="${n.y}" r="3" fill="#2350d6"/>
    <rect x="1004" y="${n.y - 17}" width="118" height="34" rx="10" fill="#ffffff" stroke="#e4ecfd"/>
    <text x="1018" y="${n.y + 5}" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="#363a45">${n.label}</text>`,
    )
    .join("")}
`;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cobalt" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2350d6"/><stop offset="100%" stop-color="#3b6bf0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#f7f5ef"/>
  ${gridLines()}
  <ellipse cx="120" cy="-40" rx="520" ry="340" fill="#3b6bf0" fill-opacity="0.07"/>
  <ellipse cx="1180" cy="660" rx="460" ry="300" fill="#d8b878" fill-opacity="0.12"/>

  <!-- brand lockup -->
  <rect x="80" y="70" width="50" height="50" rx="14" fill="url(#cobalt)"/>
  <path d="M95 108h8v-12h8v-12h12" fill="none" stroke="#05070d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="146" y="105" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#15171c">Climbix<tspan fill="#2350d6">.</tspan></text>

  <!-- eyebrow -->
  <text x="82" y="190" font-family="Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="3" fill="#2350d6">PERFORMANCE MARKETING STUDIO</text>

  <!-- headline (editorial serif) -->
  <text font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="500" fill="#15171c">
    <tspan x="80" y="278">Turn scattered marketing</tspan>
    <tspan x="80" y="350">into a measurable</tspan>
    <tspan x="80" y="422" fill="#2350d6">growth system.</tspan>
  </text>

  <!-- subline -->
  <text x="82" y="486" font-family="Arial, sans-serif" font-size="24" fill="#525866">Paid ads · SEO · Landing pages · Tracking-first strategy</text>

  <!-- navy chip -->
  <rect x="80" y="524" width="360" height="46" rx="23" fill="#0f1630"/>
  <text x="104" y="553" font-family="Arial, sans-serif" font-size="18" font-weight="600" fill="#ffffff">Book a Free Strategy Call</text>

  ${motif}
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(join(root, "public", "og-image.png"));
console.log("Wrote public/og-image.png");
