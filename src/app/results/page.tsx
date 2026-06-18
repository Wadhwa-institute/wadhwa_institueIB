import type { Metadata } from "next";
import { studentResults } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Results Gallery | Wadhwa Institute IB",
  description:
    "A grid view of student results, marks, subjects, and academic achievements.",
};

export default function ResultsPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_35%),linear-gradient(135deg,_#0a1122,_#020617_60%,_#07111f)] px-6 py-10 sm:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-200">Results gallery</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Student results in a clean, inspiring grid view
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-200">
            Explore highlighted student outcomes across subjects, with achievement cards that showcase marks, grades, and exam context in a premium format.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {studentResults.map((student) => (
          <article
            key={student.name}
            className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
          >
            <div className="relative">
              <img
                src={student.image}
                alt={`${student.name} student result portrait`}
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent px-4 pb-4 pt-10">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-100">{student.subject}</p>
                <p className="mt-2 text-xl font-semibold text-white">{student.name}</p>
              </div>
            </div>

            <div className="space-y-4 px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-300">Marks</p>
                  <p className="text-2xl font-semibold text-white">{student.marks}</p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-100">
                  Grade {student.grade}
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">
                <p className="text-sm text-slate-300">Exam context</p>
                <p className="mt-1 text-sm leading-6 text-slate-100">{student.exam}</p>
              </div>

              <p className="text-sm leading-6 text-slate-200">{student.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[24px] border border-emerald-400/30 bg-emerald-500/10 px-5 py-5 sm:px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-50">Why this page matters</p>
        <p className="mt-3 text-sm leading-7 text-slate-100">
          The results gallery is designed to highlight student achievements with clarity, visual hierarchy, and an optimistic academic feel while keeping the content easy to update as new results come in.
        </p>
      </section>
    </div>
  );
}
