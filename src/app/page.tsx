import type { Metadata } from "next";
import Link from "next/link";
import { features, metrics, reviews, subjects } from "@/lib/site-data";

export const metadata: Metadata = {
  description:
    "Premium IB coaching in Gurugram — mentor-led teaching in English, French, Business Management, Economics, and Mathematics. Book a free consultation.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="space-y-16 pb-12">
      {/* ---------------- HERO ---------------- */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-14 sm:px-10 lg:px-12">
        <div className="grid-lines" />
        <div
          className="glow-orb"
          style={{ width: 340, height: 340, top: -90, left: -70 }}
        />
        <div
          className="glow-orb"
          style={{ width: 280, height: 280, bottom: -80, right: -50, animationDelay: "2.4s" }}
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <p className="eyebrow">Premium IB Coaching · Gurugram</p>
            <h1 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] uppercase text-[var(--white)]">
              Master the IB at Gurugram&rsquo;s premier institute
            </h1>
            <p className="font-serif-italic text-2xl text-[var(--green)] sm:text-3xl">
              English · French · Business · Economics · Mathematics
            </p>
            <p className="max-w-xl text-[13px] leading-8 text-[var(--white-dim)]">
              Mentor-led teaching, premium notes, and exam-tested strategy — built
              to move ambitious learners from predicted grades to a final 7.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/contact"
                className="btn-primary rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Book a free consultation
              </Link>
              <Link
                href="/courses"
                className="btn-outline rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Explore subjects
              </Link>
            </div>
          </div>

          <div className="relative rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <p className="eyebrow">Program snapshot</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { value: "Perfect 7", label: "Real student results" },
                { value: "1:1", label: "Mentor-led teaching" },
                { value: "5", label: "IB subjects taught" },
                { value: "Free", label: "First consultation" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--white-faint)] bg-[var(--black-4)] px-4 py-5"
                >
                  <p className="font-display text-4xl text-[var(--green)]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--white-dim)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- QUICK NAV ---------------- */}
      <section className="reveal space-y-6">
        <p className="eyebrow">Where to next</p>
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/courses"
            className="lift-card group rounded-[24px] p-7"
          >
            <p className="label">What lives here</p>
            <h3 className="font-display mt-3 text-4xl uppercase text-[var(--white)]">Courses</h3>
            <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">
              Subject pathways, faculty highlights, curriculum, and learning outcomes.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--green)]">
              Browse subjects <span className="pulse-arrow">→</span>
            </span>
          </Link>
          <Link href="/results" className="lift-card group rounded-[24px] p-7">
            <p className="label">What lives here</p>
            <h3 className="font-display mt-3 text-4xl uppercase text-[var(--white)]">Results</h3>
            <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">
              A showcase of student outcomes, perfect 7s, grades, and exam context.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--green)]">
              See achievements <span className="pulse-arrow">→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* ---------------- METRICS ---------------- */}
      <section className="reveal grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="lift-card rounded-[24px] px-5 py-6">
            <p className="font-display text-4xl text-[var(--white)]">{metric.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--white-dim)]">
              {metric.label}
            </p>
          </div>
        ))}
      </section>

      {/* ---------------- SUBJECTS ---------------- */}
      <section className="reveal space-y-6">
        <div className="space-y-3">
          <p className="eyebrow">Subjects showcase</p>
          <h2 className="font-display text-5xl uppercase text-[var(--white)] sm:text-6xl">
            Learn across the flagship IB subjects
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.slug}
              href={`/courses/${subject.slug}`}
              className="lift-card rounded-[24px] p-6"
            >
              <span className="inline-flex rounded-full border border-[var(--green)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                {subject.difficulty}
              </span>
              <h3 className="font-display mt-4 text-3xl uppercase text-[var(--white)]">
                {subject.name}
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">
                {subject.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--green)]">
                Explore {subject.name} <span className="pulse-arrow">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="reveal grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="lift-card rounded-[24px] p-6">
            <p className="text-lg font-medium text-[var(--white)]">{feature.title}</p>
            <p className="mt-2 text-[13px] leading-7 text-[var(--white-dim)]">{feature.copy}</p>
          </div>
        ))}
      </section>

      {/* ---------------- REVIEWS ---------------- */}
      <section className="reveal space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-3">
            <p className="eyebrow">Student reviews</p>
            <h2 className="font-display text-5xl uppercase text-[var(--white)] sm:text-6xl">
              What learners are saying
            </h2>
          </div>
          <Link
            href="/reviews"
            className="text-xs uppercase tracking-[0.2em] text-[var(--green)] accent-border"
          >
            View all reviews →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.studentName} className="lift-card rounded-[24px] p-6">
              <div className="stars" aria-label={`${review.score} out of 7`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="star" />
                ))}
              </div>
              <p className="font-serif-italic mt-5 text-xl leading-8 text-[var(--white)]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--white)]">
                  {review.studentName}
                </p>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--green)]">
                  {review.subject} · Scored {review.score}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT CTA ---------------- */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-14 text-center sm:px-10">
        <div
          className="glow-orb"
          style={{ width: 320, height: 320, top: -90, left: "50%", marginLeft: -160 }}
        />
        <div className="relative space-y-5">
          <p className="eyebrow justify-center">Get in touch</p>
          <h2 className="font-display text-5xl uppercase text-[var(--white)] sm:text-6xl">
            Your perfect 7 starts here
          </h2>
          <p className="mx-auto max-w-md text-[13px] leading-8 text-[var(--white-dim)]">
            Book a free consultation to map your IB subjects, timelines, and target
            grades. We&rsquo;ll get back to you within one working day.
          </p>
          <div className="flex justify-center pt-1">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
