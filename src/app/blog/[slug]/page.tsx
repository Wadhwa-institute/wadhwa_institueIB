import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Wadhwa Institute`,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${siteUrl}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: url,
        url,
        author: { "@type": "Organization", name: "Wadhwa Institute", "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="space-y-10 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, right: -50 }} />
        <div className="relative space-y-4">
          <Link href="/blog" className="text-xs uppercase tracking-[0.2em] text-[var(--green)]">
            ← All guides
          </Link>
          <p className="label">
            {formatDate(post.date)} · {post.readMins} min read
          </p>
          <h1 className="font-display text-4xl uppercase leading-tight text-[var(--white)] sm:text-6xl">
            {post.title}
          </h1>
          <p className="max-w-2xl text-[14px] leading-8 text-[var(--white-dim)]">{post.intro}</p>
        </div>
      </section>

      <section className="reveal mx-auto max-w-3xl space-y-10">
        {post.sections.map((section) => (
          <div key={section.heading} className="space-y-3">
            <h2 className="font-display text-2xl uppercase text-[var(--white)] sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] leading-8 text-[var(--white-dim)]">
                {p}
              </p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2 pt-1">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[14px] leading-7 text-[var(--white-dim)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green)]" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        <div className="rounded-[24px] border border-[var(--green)] bg-[var(--green-faint)] px-6 py-7 text-center">
          <p className="font-serif-italic text-2xl text-[var(--white)]">
            Want a structured plan toward a 7?
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-4 inline-flex rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
          >
            Book a free consultation
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="reveal mx-auto max-w-3xl space-y-5">
          <p className="eyebrow">Keep reading</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="lift-card rounded-[20px] p-5">
                <p className="text-sm font-medium leading-6 text-[var(--white)]">{r.title}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[var(--green)]">
                  {r.readMins} min read →
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
