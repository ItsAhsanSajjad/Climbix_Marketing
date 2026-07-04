import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "How refunds are handled for Climbix Marketing services.",
  robots: { index: false, follow: true },
};

/**
 * Refund policy - honest, legally cautious placeholder.
 * OWNER/LEGAL REVIEW REQUIRED BEFORE PRODUCTION. No money-back guarantee is
 * promised anywhere; the final wording must be approved by the owner.
 */
export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="Our full refund policy is being finalised ahead of launch. In plain English, here's how fees and refunds are handled."
    >
      <p>
        <strong className="text-graphite">Scope of services:</strong> Climbix
        provides marketing services including audits, paid ads management, SEO,
        landing pages, and analytics work. The free growth audit and free
        strategy call carry no fee and therefore no refund terms.
      </p>
      <p>
        <strong className="text-graphite">Service fees:</strong> paid engagements
        are governed by the written agreement you receive before work begins,
        including the fee, scope, and billing schedule.
      </p>
      <p>
        <strong className="text-graphite">Refund review:</strong> if you believe
        a paid service was not delivered as agreed, contact us within 14 days of
        the invoice date. We review every request individually and respond in
        writing.
      </p>
      <p>
        <strong className="text-graphite">Completed work:</strong> work already
        performed and delivered (audits completed, campaigns built and launched,
        pages shipped) is generally non-refundable, as the value has been
        delivered.
      </p>
      <p>
        <strong className="text-graphite">How to request:</strong> email{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-cobalt-600 hover:text-cobalt-700">
          {site.email}
        </a>{" "}
        with your invoice number and the reason for the request.
      </p>
      <p className="text-slate-500">
        This is a placeholder summary, not the final legal document. Owner and
        legal review is required before production. No guaranteed-refund or
        money-back claims are made or implied.
      </p>
    </LegalPage>
  );
}
