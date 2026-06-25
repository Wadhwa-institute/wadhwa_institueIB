import type { Metadata } from "next";
import ReviewsClient from "./reviews-client";
import { aggregateRating, reviews, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Student Reviews",
  description:
    "Read reviews from Wadhwa Institute students — real stories of IB grade improvement across Economics, Business Management, Mathematics, and French.",
  alternates: { canonical: "/reviews" },
};

// Additive JSON-LD: surfaces the published reviews + aggregate rating as
// structured data tied to the existing organization node, plus a breadcrumb.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Wadhwa Institute",
      url: siteUrl,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: aggregateRating.bestRating,
        worstRating: aggregateRating.worstRating,
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.studentName },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: r.quote,
        itemReviewed: { "@id": `${siteUrl}/#organization` },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Reviews", item: `${siteUrl}/reviews` },
      ],
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReviewsClient />
    </>
  );
}
