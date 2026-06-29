/**
 * Minimal className joiner. Kept dependency-free on purpose - Phase 1 has no
 * need for clsx/tailwind-merge yet. Falsy values are dropped.
 */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
