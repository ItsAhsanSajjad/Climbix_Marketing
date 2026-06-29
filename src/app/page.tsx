import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofFramework } from "@/components/sections/ProofFramework";
import { TrustArchitecture } from "@/components/sections/TrustArchitecture";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ConversionStickyCTA } from "@/components/motion/ConversionStickyCTA";
import { ProfessionalServiceJsonLd } from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      {/* Accessibility: skip straight to content past the nav. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <ProfessionalServiceJsonLd />
      <span id="top" />
      <Navbar />

      <main id="main">
        <Hero />
        <TrustBar />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <ProofFramework />
        <TrustArchitecture />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <ConversionStickyCTA />
    </>
  );
}
