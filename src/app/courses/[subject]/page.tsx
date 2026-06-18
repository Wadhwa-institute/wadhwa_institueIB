import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubjectPageClient from "@/components/subject-page-client";
import { subjects } from "@/lib/site-data";

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

  return <SubjectPageClient subject={currentSubject} />;
}
