"use client";

import Link from "next/link";
import { useState } from "react";
import type { Subject } from "@/lib/site-data";

export default function SubjectPageClient({ subject }: { subject: Subject }) {
  const [openTopic, setOpenTopic] = useState(subject.topics[0]?.name ?? "");

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-200">
            {subject.difficulty} • {subject.passRate}% pass rate
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/90">
              Premium IB learning pathway
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {subject.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              {subject.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/app"
              className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Unlock premium resources
            </Link>
            <Link
              href="/reviews"
              className="rounded-full border border-emerald-200/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400"
            >
              Read student success stories
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(16,185,129,0.14)]">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">What learners get</p>
          <div className="mt-5 space-y-4">
            {subject.benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Curriculum overview</p>
          <div className="mt-5 space-y-3">
            {subject.topics.map((topic) => {
              const isOpen = openTopic === topic.name;
              return (
                <div key={topic.name} className="rounded-2xl border border-white/10 bg-white/[0.02]">
                  <button
                    type="button"
                    onClick={() => setOpenTopic(isOpen ? "" : topic.name)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  >
                    <div>
                      <p className="font-semibold text-white">{topic.name}</p>
                      <p className="mt-1 text-sm text-slate-300">
                        {topic.videoCount} video lessons • {topic.noteCount} notes
                      </p>
                    </div>
                    <span className="text-emerald-200">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-white/10 px-4 pb-4 pt-3 text-sm text-slate-200">
                      Designed to move learners from concept learning to exam confidence with guided practice and revision support.
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Faculty and success</p>
          <div className="mt-5 space-y-4">
            {subject.faculty.map((member) => (
              <div key={member} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100">
                {member}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-4">
              <p className="text-sm text-emerald-100">Average improvement</p>
              <p className="mt-2 text-2xl font-semibold text-white">+2 grades</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-sm text-slate-200">Student rating</p>
              <p className="mt-2 text-2xl font-semibold text-white">4.9/5</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
