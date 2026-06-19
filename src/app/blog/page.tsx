import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "IB Guides & Blog",
  description:
    "IB exam tips, subject guides, and advice from Wadhwa Institute — how to score a 7, choose IB coaching in Gurugram, and master IAs and past papers.",
  alternates: { canonical: "/blog" },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-12 pb-12">
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, left: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">IB guides &amp; blog</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            Tips to master the IB
          </h1>
          <p className="max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
            Practical, exam-tested guidance from our mentors — how to score a 7,
            choose the right IB coaching, and get ahead on IAs and past papers.
          </p>
        </div>
      </section>

      <section className="reveal grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="lift-card rounded-[24px] p-6">
            <p className="label">
              {formatDate(post.date)} · {post.readMins} min read
            </p>
            <h2 className="font-display mt-3 text-3xl uppercase leading-tight text-[var(--white)]">
              {post.title}
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">{post.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--green)]">
              Read guide <span className="pulse-arrow">→</span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
