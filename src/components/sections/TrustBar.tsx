import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { trustItems } from "@/lib/site";

/**
 * Credibility strip - a refined capability band bridging the hero into the
 * argument. Honest, neutral positioning signals (no fabricated logos/numbers),
 * set in mono with hairline dividers so it reads as a deliberate system bar
 * rather than a list of adjectives.
 */
export function TrustBar() {
  return (
    <div className="relative border-y border-white/5 bg-ink-900/30">
      <Container>
        <div className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:gap-10">
          <Reveal as="span" blur={false}>
            <span className="flex items-center gap-2 whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />
              Built for serious growth
            </span>
          </Reveal>

          <StaggerContainer
            stagger={0.08}
            className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 lg:flex lg:flex-1 lg:items-center lg:justify-between"
          >
            {trustItems.map((item) => (
              <StaggerItem
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-mist-200"
              >
                <span className="h-3 w-px bg-accent-400/60" aria-hidden />
                {item}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </div>
  );
}
