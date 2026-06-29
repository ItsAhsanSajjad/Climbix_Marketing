/**
 * A single FAQ entry built on native <details>/<summary> - keyboard-accessible
 * and screen-reader friendly with no JS. The chevron rotates via a CSS rule
 * (details[open] .faq-chev) in globals.css, so it works without motion JS and
 * respects reduced motion automatically.
 */
export function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-ink-600/70 bg-ink-900/40 transition-colors duration-200 open:border-accent-400/30 open:bg-ink-900/60">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-paper [&::-webkit-details-marker]:hidden">
        {/* display:contents heading - gives screen-reader heading navigation
            without affecting the summary's flex layout. */}
        <h3 className="contents">{q}</h3>
        <span
          className="faq-chev flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-600 text-accent-300 transition-transform duration-300"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>
      <p className="px-5 pb-5 text-sm leading-relaxed text-mist-200">{a}</p>
    </details>
  );
}
