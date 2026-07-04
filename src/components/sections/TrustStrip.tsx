import { Container } from "@/components/ui/Container";
import { IconCheck } from "@/components/ui/Icon";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { trustStrip, platformBadges } from "@/lib/site";

/**
 * Positioning strip - credibility through method + platform readiness, never
 * fake partner logos. Row one: capability phrases divided by champagne dots.
 * Row two: platform-readiness pills ("Built for Google Ads traffic" - honest
 * capability language, no official partner-status claims).
 */
export function TrustStrip() {
  return (
    <div className="border-b border-platinum-300 bg-ivory-50">
      <Container>
        <StaggerContainer
          stagger={0.06}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 pt-6 sm:gap-x-4"
        >
          {trustStrip.map((item, i) => (
            <StaggerItem key={item} className="flex items-center gap-x-3 sm:gap-x-4">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-bronze-400" aria-hidden />}
              <span className="text-[0.95rem] font-medium text-slate-600">{item}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer
          stagger={0.05}
          className="flex flex-wrap items-center justify-center gap-2 pb-6 pt-4"
        >
          {platformBadges.map((badge) => (
            <StaggerItem
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-platinum-300 bg-white px-3 py-1.5 text-sm font-medium text-graphite"
            >
              <IconCheck className="h-3.5 w-3.5 shrink-0 text-teal-500" />
              {badge}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
}
