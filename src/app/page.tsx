import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SampleAuditSection } from "@/components/sections/SampleAuditSection";
import { CampaignEvidence } from "@/components/sections/CampaignEvidence";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { TestimonialPreview } from "@/components/sections/TestimonialPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyClimbixSection } from "@/components/sections/WhyClimbixSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ConversionStickyCTA } from "@/components/motion/ConversionStickyCTA";
import { ProfessionalServiceJsonLd } from "@/components/seo/StructuredData";

/**
 * Homepage - one conversion journey, no overlapping trust sections:
 * capture (Hero) -> credibility (TrustStrip, StatsBand) -> pain (Problem +
 * contrast) -> offer -> capabilities (Services) -> deliverable preview
 * (SampleAudit) -> visual proof (CampaignEvidence) -> evidence narrative
 * (CaseStudiesPreview) -> human voice (TestimonialPreview, illustrative until
 * phase two) -> risk reduction (Process) -> qualification (WhyClimbix +
 * /about) -> objections (FAQ) -> close (Contact).
 */
export default function HomePage() {
  return (
    <>
      <ProfessionalServiceJsonLd />
      <span id="top" />
      <Navbar />

      <main id="main">
        <Hero />
        <TrustStrip />
        <StatsBand />
        <ProblemSection />
        <OfferSection />
        <ServicesSection />
        <SampleAuditSection />
        <CampaignEvidence />
        <CaseStudiesPreview />
        <TestimonialPreview />
        <ProcessSection />
        <WhyClimbixSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <ConversionStickyCTA />
    </>
  );
}
