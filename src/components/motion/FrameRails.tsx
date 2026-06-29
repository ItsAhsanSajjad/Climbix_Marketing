/**
 * Architectural side rails - two faint vertical hairlines at the content
 * container edges, fixed behind everything. A small structural cue that the
 * layout sits on a deliberate grid (a custom-build signal, not a template).
 */
export function FrameRails() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 flex justify-center px-5 lg:px-8">
      <div className="h-full w-full max-w-[1200px] border-x border-white/[0.05]" />
    </div>
  );
}
