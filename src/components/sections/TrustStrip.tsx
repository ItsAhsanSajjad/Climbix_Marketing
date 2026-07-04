import { Container } from "@/components/ui/Container";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { trustStrip } from "@/lib/site";

/**
 * Positioning strip - credibility through method, not fake logos. A refined
 * ivory band directly under the navy hero: short capability phrases divided by
 * champagne dots, reading as one deliberate system line.
 */
export function TrustStrip() {
  return (
    <div className="border-b border-platinum-300 bg-ivory-50">
      <Container>
        <StaggerContainer
          stagger={0.06}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 py-6 sm:gap-x-4"
        >
          {trustStrip.map((item, i) => (
            <StaggerItem key={item} className="flex items-center gap-x-3 sm:gap-x-4">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-bronze-400" aria-hidden />}
              <span className="text-[0.95rem] font-medium text-slate-600">{item}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
}
