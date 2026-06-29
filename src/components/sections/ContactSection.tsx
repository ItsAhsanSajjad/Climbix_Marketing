import { ConversionRoom } from "@/components/sections/ConversionRoom";
import { callOutcomes } from "@/lib/site";

/**
 * Homepage conversion climax (#contact) - the shared deep-navy strategy room
 * with homepage copy. LeadForm preserved (source="home").
 */
export function ContactSection() {
  return (
    <ConversionRoom
      id="contact"
      eyebrow="Your free strategy call"
      title={
        <>
          Let&apos;s find where your growth system is{" "}
          <span className="text-cobalt-gradient">leaking</span>
        </>
      }
      lead="Tell us where you are and what you want to grow. We come to the call with a clear read on your biggest leaks and the highest-leverage moves to make first."
      outcomes={callOutcomes}
      formTitle="Book your strategy call"
      formSubtitle="Takes 30 seconds. No obligation."
      source="home"
      submitLabel="Book My Strategy Call"
    />
  );
}
