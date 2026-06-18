import type { Metadata } from "next";
import ReviewsClient from "./reviews-client";

export const metadata: Metadata = {
  title: "Student Reviews",
  description:
    "Read reviews from Wadhwa Institute students — real stories of IB grade improvement across Economics, Business Management, Mathematics, and French.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
