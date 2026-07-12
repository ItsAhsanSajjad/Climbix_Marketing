/**
 * Small set of stroke icons drawn inline as SVG. Kept in-repo to avoid pulling
 * an icon-library dependency for ~6 marks. 24px grid, currentColor stroke.
 */
type IconProps = { className?: string };

const wrap = "h-6 w-6";

function Base({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? wrap}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconTarget(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </Base>
  );
}

export function IconTrending(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </Base>
  );
}

export function IconLayout(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </Base>
  );
}

export function IconShare(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
    </Base>
  );
}

export function IconChart(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <rect x="7" y="12" width="3" height="5" rx="0.5" />
      <rect x="12" y="8" width="3" height="9" rx="0.5" />
      <rect x="17" y="5" width="3" height="12" rx="0.5" />
    </Base>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Base>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </Base>
  );
}

