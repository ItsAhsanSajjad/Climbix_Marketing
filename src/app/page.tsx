import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RedesignHero } from "@/components/sections/RedesignHero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { RevenueLeakSection } from "@/components/sections/RevenueLeakSection";
import { GrowthSystemSection } from "@/components/sections/GrowthSystemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofSection } from "@/components/sections/ProofSection";
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cobalt-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <ProfessionalServiceJsonLd />
      <span id="top" />

      {/* Editorial Growth Studio is the site-wide base theme (see globals);
          this wrapper just establishes a positioning context. */}
      <div className="relative">
        <Navbar />

        <main id="main">
          <RedesignHero />
          <TrustMarquee />
          <RevenueLeakSection />
          <GrowthSystemSection />
          <ProcessSection />
          <ProofSection />
          <FAQSection />
          <ContactSection />
        </main>

        <Footer />
        <ConversionStickyCTA />
      </div>
    </>
  );
}
