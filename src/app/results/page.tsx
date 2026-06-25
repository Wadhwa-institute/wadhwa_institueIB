import type { Metadata } from "next";
import Link from "next/link";
import { resolveAsset } from "@/lib/assets";
import { siteAssets, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Results & Achievements",
  description:
    "Student achievements at Wadhwa Institute — real perfect 7s and standout IB results from our coaching in Gurugram.",
  alternates: { canonical: "/results" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Results", item: `${siteUrl}/results` },
      ],
    },
  ],
};

const achievementImages = [
  {
    src: resolveAsset(siteAssets.result1, siteAssets.result1Fallback),
    alt: "Wadhwa Institute student achievement — perfect 7 in Business Management",
  },
  {
    src: resolveAsset(siteAssets.result2, siteAssets.result2Fallback),
    alt: "Wadhwa Institute student achievement — perfect 7 in Business Management",
  },
];

export default function ResultsPage() {
  return (
    <div className="space-y-14 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ---------------- HERO ---------------- */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, left: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">Results &amp; achievements</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            Real students. Real perfect 7s.
          </h1>
          <p className="max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
            A showcase of standout IB outcomes from Wadhwa Institute. Every result
            reflects mentor-led preparation, structured revision, and exam-tested
            strategy.
          </p>
        </div>
      </section>

      {/* ---------------- FEATURED ACHIEVEMENTS (2 images + placeholder) ---------------- */}
      <section className="reveal space-y-6">
        <p className="eyebrow">Featured achievements</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievementImages.map((image, index) => (
            <div
              key={index}
              className="lift-card group relative overflow-hidden rounded-[24px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--black)] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="m-5 inline-flex items-center gap-2 rounded-full border border-[var(--green)] bg-[var(--black)]/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--green)]">
                  Perfect 7 · IB Business Management
                </span>
              </div>
            </div>
          ))}

          {/* Blank "Next could be you" placeholder card */}
          <div
            className="flex aspect-[3/4] flex-col items-center justify-center gap-5 rounded-[24px] border border-dashed p-8 text-center"
            style={{ background: "var(--black-3)", borderColor: "rgba(127,217,0,0.3)" }}
          >
            <span className="pulse-arrow text-5xl text-[var(--green)]">→</span>
            <p className="font-serif-italic text-3xl leading-tight text-[var(--green)]">
              Next could be you
            </p>
            <p className="text-[12px] leading-6 text-[var(--white-dim)]">
              Join the students rewriting their IB story.
            </p>
            <Link
              href="/contact"
              className="btn-primary rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Enrol now
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- DISCLAIMER + CTA ---------------- */}
      <section className="reveal rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-7 sm:px-8">
        <p className="eyebrow">A note on results</p>
        <p className="mt-3 max-w-3xl text-[12px] leading-7 text-[var(--white-dim)]">
          Individual results vary by student effort, starting level, and exam
          session. Student names, photographs, and testimonials are published only
          with the written consent of the student (and, where applicable, their
          parent or guardian), in line with the CCPA Guidelines for Prevention of
          Misleading Advertisement in the Coaching Sector, 2024.{" "}
          <Link href="/contact" className="text-[var(--green)]">
            Book a free consultation →
          </Link>
        </p>
      </section>
    </div>
  );
}
