"use client";

import Link from "next/link";
import { useState } from "react";
import type { Subject } from "@/lib/site-data";

export default function SubjectPageClient({ subject }: { subject: Subject }) {
  const [openTopic, setOpenTopic] = useState(subject.topics[0]?.title ?? "");

  return (
    <div className="space-y-12 pb-12">
      <section className="relative grid gap-10 overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, left: -50 }} />
        <div className="relative space-y-6">
          <span className="inline-flex items-center rounded-full border border-[var(--green)] px-4 py-1 text-xs uppercase tracking-[0.16em] text-[var(--green)]">
            {subject.difficulty}
          </span>
          <div>
            <p className="eyebrow">Premium IB learning pathway</p>
            <h1 className="font-display mt-4 text-5xl uppercase text-[var(--white)] sm:text-7xl">
              {subject.name}
            </h1>
            <p className="mt-4 max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
              {subject.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="btn-primary rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Book a free consultation
            </Link>
            <Link
              href="/reviews"
              className="btn-outline rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Read success stories
            </Link>
          </div>
        </div>

        <div className="relative rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <p className="label">What learners get</p>
          <div className="mt-5 space-y-4">
            {subject.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-[var(--white-faint)] bg-[var(--black-4)] px-4 py-3 text-[13px] text-[var(--white-dim)]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <p className="eyebrow">Curriculum overview</p>
          <div className="mt-5 space-y-3">
            {subject.topics.map((topic) => {
              const isOpen = openTopic === topic.title;
              return (
                <div
                  key={topic.title}
                  className="rounded-2xl border border-[var(--white-faint)] bg-[var(--black-4)]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenTopic(isOpen ? "" : topic.title)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  >
                    <p className="font-semibold text-[var(--white)]">{topic.title}</p>
                    <span className="text-xl text-[var(--green)]">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-[var(--white-faint)] px-4 pb-4 pt-3 text-[13px] leading-7 text-[var(--white-dim)]">
                      {topic.detail}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-[11px] leading-6 text-[var(--white-dim)]">
            Video lessons and downloadable notes for each topic are delivered inside
            the Wadhwa Institute app.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <div className="glow-orb" style={{ width: 220, height: 220, bottom: -70, right: -50 }} />
          <div className="relative">
            <p className="eyebrow">Why students choose us</p>
            <div className="mt-5 space-y-4">
              {[
                "1:1, mentor-led teaching focused on your target grade",
                "Examiner-aligned feedback on essays, IAs, and past papers",
                "Exam-tested strategy for each paper and assessment",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[var(--white-faint)] bg-[var(--black-4)] px-4 py-3 text-[13px] text-[var(--white-dim)]"
                >
                  {point}
                </div>
              ))}
            </div>
            <Link
              href="/#contact"
              className="btn-primary mt-6 inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Start with a free consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
