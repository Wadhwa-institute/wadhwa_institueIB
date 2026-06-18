import { notFound } from "next/navigation";
import SubjectPageClient from "@/components/subject-page-client";
import { subjects } from "@/lib/site-data";

export function generateStaticParams() {
  return subjects.map((subject) => ({ subject: subject.slug }));
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
