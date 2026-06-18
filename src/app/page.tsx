import Link from "next/link";
import { features, metrics, reviews, subjects } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_35%),linear-gradient(135deg,_#0a1122,_#020617_55%,_#07111f)] px-6 py-10 sm:px-10 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(16,185,129,0.06)_45%,transparent_100%)]" />
        <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-100 shadow-[0_10px_40px_rgba(16,185,129,0.12)]">
              Premium IB learning for students aged 14–18
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Master the IB curriculum at India’s premier institute.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                English, French, Business Management, Economics, and Mathematics — delivered with premium notes, app-based unlocks, and mentor-led guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/app"
                className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_18px_40px_rgba(16,185,129,0.28)]"
              >
                Unlock premium resources
              </Link>
              <Link
                href="/courses"
                className="rounded-full border border-emerald-200/70 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white/[0.04]"
              >
                Explore subjects
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-200">
              <span>English • French • Business Management • Economics • Mathematics</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-emerald-400/20 via-transparent to-sky-400/10 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/10 bg-slate-950/55 p-6 backdrop-blur-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_26px_80px_rgba(15,23,42,0.55)] transform-gpu rotate-[-1deg] sm:rotate-[-0.5deg]">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Program snapshot</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-4 shadow-[0_12px_40px_rgba(16,185,129,0.14)] transform-gpu transition duration-200 hover:-translate-y-0.5">
                  <p className="text-3xl font-semibold text-white">95%</p>
                  <p className="mt-2 text-sm text-emerald-50">IB pass rate</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[0_16px_45px_rgba(15,23,42,0.3)] transform-gpu transition duration-200 hover:-translate-y-0.5">
                  <p className="text-3xl font-semibold text-white">24/7</p>
                  <p className="mt-2 text-sm text-slate-200">Doubt support</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[0_16px_45px_rgba(15,23,42,0.3)] transform-gpu transition duration-200 hover:-translate-y-0.5">
                  <p className="text-3xl font-semibold text-white">30</p>
                  <p className="mt-2 text-sm text-slate-200">Days of premium access</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-4 shadow-[0_12px_40px_rgba(16,185,129,0.14)] transform-gpu transition duration-200 hover:-translate-y-0.5">
                  <p className="text-3xl font-semibold text-white">100%</p>
                  <p className="mt-2 text-sm text-emerald-50">App-first revision experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-emerald-400/30 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(15,23,42,0.88))] px-6 py-7 sm:px-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-100">
              Instant guide
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Find the right next step in a glance.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
              The guide below uses a curved arrow, vivid labels, and quick summaries so families and students can jump straight into the subjects they care about or browse the results gallery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Explore subjects
              </Link>
              <Link
                href="/results"
                className="rounded-full border border-white/70 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200"
              >
                View results gallery
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/65 p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_80px_rgba(15,23,42,0.5)] transform-gpu rotate-[0.4deg] sm:rotate-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.14),_transparent_48%)]" />
            <div className="absolute -right-6 bottom-1 h-20 w-20 rounded-full bg-emerald-300/15 blur-2xl" />
            <div className="relative flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">Landing zone</p>
                  <p className="mt-2 text-lg font-semibold text-white">Choose your next destination</p>
                </div>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-50">
                  New vibe
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                <Link
                  href="/courses"
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white/[0.06] hover:shadow-[0_18px_55px_rgba(16,185,129,0.16)]"
                >
                  <p className="text-sm text-slate-300">What lives here</p>
                  <p className="mt-2 text-xl font-semibold text-white">Courses</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">
                    Subject pathways, faculty highlights, curriculum, and learning outcomes.
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-emerald-100">
                    <span>Browse all subjects</span>
                    <span className="text-lg">↗</span>
                  </div>
                </Link>

                <div className="relative hidden h-full sm:block">
                  <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden="true">
                    <path
                      d="M24 150C48 94 104 54 158 54C190 54 210 66 224 90"
                      fill="none"
                      stroke="rgba(52,211,153,0.85)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="10 10"
                    />
                    <path
                      d="M224 90L208 83M224 90L212 102"
                      fill="none"
                      stroke="rgba(52,211,153,0.95)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="24" cy="150" r="7" fill="rgba(52,211,153,0.95)" />
                    <circle cx="224" cy="90" r="7" fill="rgba(52,211,153,0.95)" />
                  </svg>
                </div>

                <Link
                  href="/results"
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white/[0.06] hover:shadow-[0_18px_55px_rgba(59,130,246,0.18)]"
                >
                  <p className="text-sm text-slate-300">What lives here</p>
                  <p className="mt-2 text-xl font-semibold text-white">Results</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">
                    A showcase of student outcomes, marks, grades, and exam context.
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-emerald-100">
                    <span>See achievements</span>
                    <span className="text-lg">↗</span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-100">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  Curved guide arrow
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  Clear page summaries
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  One-click navigation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-[0_18px_55px_rgba(15,23,42,0.35)] backdrop-blur-sm transform-gpu transition duration-200 hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-200">{metric.label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Subjects showcase</p>
          <h2 className="text-3xl font-semibold text-white">Learn across the flagship IB subjects.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.slug}
              href={`/courses/${subject.slug}`}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm transform-gpu transition duration-200 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-[0_28px_80px_rgba(16,185,129,0.18)]"
            >
              <div className={`inline-flex rounded-full bg-gradient-to-r ${subject.accent} px-3 py-1 text-xs font-semibold text-slate-950`}>
                {subject.difficulty}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{subject.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{subject.description}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-slate-200">
                <span>{subject.passRate}% pass rate</span>
                <span>{subject.enrolledCount}+ learners</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.3)] backdrop-blur-sm transform-gpu transition duration-200 hover:-translate-y-1 hover:border-emerald-400/35">
            <p className="text-lg font-semibold text-white">{feature.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{feature.copy}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[28px] border border-emerald-400/30 bg-emerald-500/10 px-6 py-8 sm:px-8 shadow-[0_22px_70px_rgba(16,185,129,0.14)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-50">Before reviews</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Start your IB journey with premium resources, guided support, and a focused learning experience.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-100">
              Early bird access is available now, and the app unlock experience is designed to make premium revision immediate and rewarding.
            </p>
          </div>
          <Link
            href="/app"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
          >
            Download the app and unlock resources
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Student reviews</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">What learners are saying</h2>
          </div>
          <Link href="/reviews" className="text-sm font-semibold text-emerald-200">
            View all verified reviews →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={`${review.studentName}-${review.title}`} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.34)] backdrop-blur-sm transform-gpu transition duration-200 hover:-translate-y-1 hover:border-emerald-400/35">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{review.studentName}</p>
                  <p className="text-sm text-slate-200">{review.subject} • {review.engagement}</p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-100">
                  {review.rating.toFixed(1)}★
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{review.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{review.body}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-200">
                <span>{review.resultScore}</span>
                <span>✓ Verified enrollment</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
