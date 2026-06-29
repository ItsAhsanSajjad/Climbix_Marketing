import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Climbix Marketing handles the information you share with us.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Our full privacy policy is being finalised ahead of launch. In plain English, here's how we handle the details you share."
    >
      <p>
        <strong className="text-graphite-900">What we collect:</strong> only what you
        enter in our forms - your name, business email, website, phone, and a few
        details about your growth goals and budget range.
      </p>
      <p>
        <strong className="text-graphite-900">How we use it:</strong> solely to prepare
        and deliver your audit or strategy call, and to contact you about it. We do
        not sell or rent your information, and we don&apos;t share it beyond the
        people working on your request.
      </p>
      <p>
        <strong className="text-graphite-900">Cookies &amp; tracking:</strong> we use
        analytics and advertising tools (such as Google Analytics, Google Ads, and
        the Meta Pixel) to understand how the site is used and to measure ad
        performance. These set cookies and may share limited usage data with those
        providers. A consent banner and full cookie list will be added before live
        advertising traffic runs.
      </p>
      <p>
        <strong className="text-graphite-900">Your control:</strong> you can ask us to
        update or delete your information at any time by emailing us, and you can
        block cookies in your browser settings.
      </p>
      <p className="text-graphite-400">
        This is a placeholder summary, not the final legal document. The complete
        policy will be published here before live campaigns run.
      </p>
    </LegalPage>
  );
}
