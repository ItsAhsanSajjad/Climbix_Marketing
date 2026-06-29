import type { Metadata } from "next";
import { Suspense } from "react";
import { ThankYouContent } from "@/components/sections/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received. Here's what happens next.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  // useSearchParams() in ThankYouContent requires a Suspense boundary.
  return (
    <Suspense fallback={null}>
      <ThankYouContent />
    </Suspense>
  );
}
