/**
 * A single FAQ entry built on native <details>/<summary> - keyboard-accessible
 * and screen-reader friendly with no JS. The chevron rotates via a CSS rule
 * (details[open] .faq-chev) in globals.css, so it works without motion JS and
 * respects reduced motion automatically. Luxury light surface.
 */
export function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-3xl border border-platinum-300 bg-white shadow-soft transition-colors duration-200 open:border-cobalt-500/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-semibold text-graphite [&::-webkit-details-marker]:hidden">
        <h3 className="contents">{q}</h3>
        <span
          className="faq-chev flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-platinum-300 text-cobalt-600 transition-transform duration-300"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>
      <p className="px-6 pb-6 text-lux-body text-slate-600">{a}</p>
    </details>
  );
}
