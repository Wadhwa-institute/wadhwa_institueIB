import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubjectPageClient from "@/components/subject-page-client";
import { siteUrl, subjects } from "@/lib/site-data";

export function generateStaticParams() {
  return subjects.map((subject) => ({ subject: subject.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject } = await params;
  const currentSubject = subjects.find((item) => item.slug === subject);

  if (!currentSubject) {
    return { title: "Subject not found" };
  }

  return {
    title: `${currentSubject.name} Coaching`,
    description: currentSubject.description,
    alternates: { canonical: `/courses/${currentSubject.slug}` },
    openGraph: {
      title: `${currentSubject.name} Coaching | Wadhwa Institute`,
      description: currentSubject.description,
      url: `/courses/${currentSubject.slug}`,
    },
  };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const currentSubject = subjects.find((item) => item.slug === subject);

  if (!currentSubject) {
    notFound();
  }

  const courseUrl = `${siteUrl}/courses/${currentSubject.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: `${currentSubject.name} — IB Coaching`,
        description: currentSubject.description,
        url: courseUrl,
        provider: {
          "@type": "EducationalOrganization",
          name: "Wadhwa Institute",
          "@id": `${siteUrl}/#organization`,
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Courses", item: `${siteUrl}/courses` },
          { "@type": "ListItem", position: 3, name: currentSubject.name, item: courseUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SubjectPageClient subject={currentSubject} />
    </>
  );
}
