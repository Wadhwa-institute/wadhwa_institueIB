import type { Metadata } from "next";
import Link from "next/link";
import { subjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "IB Courses",
  description:
    "Explore IB course pathways at Wadhwa Institute — English, French, Business Management, Economics, and Mathematics, with mentor-led teaching in Gurugram.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <div className="space-y-12 pb-12">
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, left: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">Course pathways</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            Subject tracks built for IB success
          </h1>
          <p className="max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
            Each course brings together curriculum guidance, success metrics,
            faculty insights, and exam strategy in one focused pathway.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/courses/${subject.slug}`}
            className="lift-card rounded-[24px] p-6"
          >
            <span className="inline-flex rounded-full border border-[var(--green)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
              {subject.difficulty}
            </span>
            <h2 className="font-display mt-4 text-3xl uppercase text-[var(--white)]">
              {subject.name}
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">
              {subject.shortDescription}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--green)]">
              View pathway <span className="pulse-arrow">→</span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
