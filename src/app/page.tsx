import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SampleAuditSection } from "@/components/sections/SampleAuditSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MeasurementSection } from "@/components/sections/MeasurementSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyClimbixSection } from "@/components/sections/WhyClimbixSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ConversionStickyCTA } from "@/components/motion/ConversionStickyCTA";
import { OfferPopup } from "@/components/motion/OfferPopup";
import { ProfessionalServiceJsonLd } from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      {/* Accessibility: skip straight to content past the nav. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cobalt-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <ProfessionalServiceJsonLd />
      <span id="top" />
      <Navbar />

      <main id="main">
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <OfferSection />
        <SolutionSection />
        <ServicesSection />
        <SampleAuditSection />
        <ProcessSection />
        <MeasurementSection />
        <TestimonialsSection />
        <WhyClimbixSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <ConversionStickyCTA />
      <OfferPopup />
    </>
  );
}
