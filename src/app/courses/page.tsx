import Link from "next/link";
import { subjects } from "@/lib/site-data";

export default function CoursesPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Course pathways</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Explore subject tracks designed for IB success.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Each course page brings together curriculum guidance, success metrics, faculty insights, and premium unlock prompts in one place.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/courses/${subject.slug}`}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-emerald-400/60"
          >
            <div className={`inline-flex rounded-full bg-gradient-to-r ${subject.accent} px-3 py-1 text-xs font-semibold text-slate-950`}>
              {subject.difficulty}
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white">{subject.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">{subject.shortDescription}</p>
            <div className="mt-5 flex items-center justify-between text-sm text-slate-200">
              <span>{subject.passRate}% pass rate</span>
              <span>{subject.enrolledCount}+ enrolled</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
