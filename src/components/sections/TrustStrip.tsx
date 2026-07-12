import { IconCheck } from "@/components/ui/Icon";
import { trustStrip } from "@/lib/site";

/**
 * Trust / intelligence strip - a slow premium marquee of method + platform
 * capability signals (never fake client logos). One concise row: the track
 * holds two copies of the content for a seamless -50% loop; hover pauses it;
 * reduced motion leaves a static first copy (overflow hides the duplicate).
 * Second copy is aria-hidden so screen readers hear the list once.
 */
const items = [...trustStrip];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-3 pr-3"
    >
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-platinum-300 bg-white px-3.5 py-1.5 text-sm font-medium text-graphite"
        >
          <IconCheck className="h-3.5 w-3.5 shrink-0 text-teal-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TrustStrip() {
  return (
    <div className="marquee-group border-b border-platinum-300 bg-ivory-50 py-5">
      <div className="relative overflow-hidden">
        {/* soft edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory-50 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory-50 to-transparent" />

        <div className="animate-marquee flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </div>
  );
}
