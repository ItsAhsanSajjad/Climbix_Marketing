import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply to using the Climbix Marketing website.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="Our full terms are being finalised ahead of launch. Here's the short version of what to expect."
    >
      <p>
        <strong className="text-graphite">This site:</strong> the content here is
        for information about Climbix Marketing&apos;s services. Submitting a form
        requests a free audit or strategy call - it doesn&apos;t create a contract
        or any obligation on either side.
      </p>
      <p>
        <strong className="text-graphite">Our offers:</strong> the free audit and
        strategy call are genuine and carry no obligation to buy. Any paid
        engagement is governed by a separate agreement we&apos;ll share in writing.
      </p>
      <p>
        <strong className="text-graphite">No guarantees:</strong> marketing results
        depend on many factors. We commit to a disciplined method and honest
        reporting - not to specific numbers.
      </p>
      <p className="text-slate-500">
        This is a placeholder summary, not the final legal document. The complete
        terms will be published here before live campaigns run.
      </p>
    </LegalPage>
  );
}
