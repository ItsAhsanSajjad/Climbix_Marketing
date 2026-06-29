/**
 * Ambient background motion. Two large, heavily-blurred accent orbs that drift
 * slowly behind all content. Pure CSS animation (GPU transform) - no JS, no
 * client boundary. Disabled under reduced motion via globals.css.
 */
export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="orb-drift-a absolute -left-32 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-accent-500/10 blur-[110px]" />
      <div className="orb-drift-b absolute -right-40 top-[30%] h-[38rem] w-[38rem] rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="orb-drift-c absolute bottom-[-15%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.06] blur-[110px]" />
    </div>
  );
}
