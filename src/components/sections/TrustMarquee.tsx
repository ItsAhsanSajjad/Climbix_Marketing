import { services, trustItems } from "@/lib/site";

/**
 * Horizontal capability marquee - a different rhythm from the card sections.
 * Pure CSS animation (no JS, no client boundary); edge-faded; honours reduced
 * motion via the globals media query. Honest capability/positioning tags only.
 */
const tags = [
  ...services.map((s) => s.title),
  ...trustItems,
];

function Row() {
  return (
    <div className="animate-marquee flex w-max shrink-0 items-center gap-3 pr-3">
      {tags.map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="flex items-center gap-2 whitespace-nowrap rounded-full border border-graphite-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-graphite-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cobalt-500" aria-hidden />
          {t}
        </span>
      ))}
    </div>
  );
}

export function TrustMarquee() {
  return (
    <div className="border-y border-graphite-900/10 bg-white/40 py-5">
      <div className="mx-auto flex max-w-[1180px] items-center gap-4 px-5 lg:px-8">
        <span className="hidden shrink-0 whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.18em] text-graphite-500 sm:block">
          Built for serious growth
        </span>
        <div className="marquee-mask relative flex-1 overflow-hidden">
          <div className="flex w-max">
            {/* duplicated row for a seamless -50% loop */}
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </div>
  );
}
