import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Climbix Marketing handles the information you share with us.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Our full privacy policy is being finalised ahead of launch. In plain English, here's how we handle the details you share."
    >
      <p>
        <strong className="text-graphite">What we collect:</strong> only what you
        enter in our forms - your name, business email, website, phone, and a few
        details about your growth goals and budget range.
      </p>
      <p>
        <strong className="text-graphite">How we use it:</strong> solely to prepare
        and deliver your audit or strategy call, and to contact you about it. We do
        not sell or rent your information, and we don&apos;t share it beyond the
        people working on your request.
      </p>
      <p>
        <strong className="text-graphite">Cookies &amp; tracking:</strong> we use
        analytics and advertising tools (such as Google Analytics, Google Ads, and
        the Meta Pixel) to understand how the site is used and to measure ad
        performance. None of these load their cookies until you choose
        &ldquo;Accept all&rdquo; in the consent banner - analytics and advertising
        storage default to denied, and you can change your choice any time via
        &ldquo;Cookie settings&rdquo; in the footer.
      </p>
      <p>
        <strong className="text-graphite">Your control:</strong> you can ask us to
        update or delete your information at any time by emailing us, and you can
        block cookies in your browser settings.
      </p>
      <p className="text-slate-500">
        This is a placeholder summary, not the final legal document. The complete
        policy will be published here before live campaigns run.
      </p>
    </LegalPage>
  );
}
