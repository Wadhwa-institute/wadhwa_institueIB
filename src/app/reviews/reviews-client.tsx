"use client";

import { useMemo, useState } from "react";
import { reviews } from "@/lib/site-data";

export default function ReviewsClient() {
  const subjectOptions = useMemo(
    () => ["All", ...Array.from(new Set(reviews.map((review) => review.subject)))],
    [],
  );
  const [subjectFilter, setSubjectFilter] = useState("All");

  const filteredReviews = useMemo(() => {
    if (subjectFilter === "All") return reviews;
    return reviews.filter((review) => review.subject === subjectFilter);
  }, [subjectFilter]);

  return (
    <div className="space-y-12 pb-12">
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, right: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">Student reviews</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            Stories from students who hit their target
          </h1>
          <p className="max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
            Real feedback from learners who transformed their IB journey at Wadhwa
            Institute. Filter by subject to explore success stories.
          </p>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
        <div className="flex flex-col gap-2 sm:max-w-sm">
          <label htmlFor="subject-filter" className="label">
            Filter by subject
          </label>
          <select
            id="subject-filter"
            aria-label="Filter by subject"
            value={subjectFilter}
            onChange={(event) => setSubjectFilter(event.target.value)}
            className="w-full rounded-xl border border-[var(--white-faint)] bg-[var(--black-4)] px-4 py-3 text-[var(--white)]"
          >
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option === "All" ? "All subjects" : option}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {filteredReviews.map((review) => (
          <article key={review.studentName} className="lift-card rounded-[24px] p-6">
            <div className="stars" aria-label={`Scored ${review.score}`}>
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
      </section>
    </div>
  );
}
