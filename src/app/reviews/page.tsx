"use client";

import { useMemo, useState } from "react";
import { reviews, subjects } from "@/lib/site-data";

const ratingOptions = ["All", "4.5+", "4.0+", "3.5+"];

export default function ReviewsPage() {
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const subjectMatch = subjectFilter === "All" || review.subject === subjectFilter;
      const ratingMatch =
        ratingFilter === "All" ||
        (ratingFilter === "4.5+" && review.rating >= 4.5) ||
        (ratingFilter === "4.0+" && review.rating >= 4) ||
        (ratingFilter === "3.5+" && review.rating >= 3.5);

      return subjectMatch && ratingMatch;
    });
  }, [ratingFilter, subjectFilter]);

  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Student reviews</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Verified stories from students who transformed their IB journey.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Filter by subject and rating to explore success stories, academic outcomes, and real student feedback from the platform.
          </p>
        </div>
      </section>

      <section className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Aggregate score</p>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-4xl font-semibold text-white">4.9/5</span>
              <span className="pb-1 text-sm text-slate-200">from 487 verified students</span>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-300">Subject filter</p>
              <select
                aria-label="Filter by subject"
                value={subjectFilter}
                onChange={(event) => setSubjectFilter(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
              >
                <option value="All">All subjects</option>
                {subjects.map((subject) => (
                  <option key={subject.slug} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="text-sm text-slate-300">Rating filter</p>
              <select
                aria-label="Filter by rating"
                value={ratingFilter}
                onChange={(event) => setRatingFilter(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
              >
                {ratingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {filteredReviews.map((review) => (
          <article
            key={`${review.studentName}-${review.title}`}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">{review.studentName}</p>
                <p className="text-sm text-slate-200">{review.subject} • {review.engagement}</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-100">
                {review.rating.toFixed(1)}★
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{review.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">{review.body}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-200">
              <span>{review.resultScore}</span>
              {review.verificationBadge ? <span>✓ Verified enrollment</span> : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
