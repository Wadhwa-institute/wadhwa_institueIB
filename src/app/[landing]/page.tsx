import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLanding, landings } from "@/lib/landings";
import { siteContact, siteUrl, subjects } from "@/lib/site-data";

type Params = { landing: string };

export function generateStaticParams(): Params[] {
  return landings.map((l) => ({ landing: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { landing: slug } = await params;
  const landing = getLanding(slug);
  if (!landing) return {};
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical: `/${landing.slug}` },
    openGraph: {
      title: `${landing.metaTitle} | Wadhwa Institute`,
      description: landing.metaDescription,
      url: `/${landing.slug}`,
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { landing: slug } = await params;
  const landing = getLanding(slug);
  if (!landing) notFound();

  const related = (landing.relatedSubjects ?? [])
    .map((s) => subjects.find((subject) => subject.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: landing.h1,
        serviceType: landing.serviceType,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "City", name: "Gurugram" },
        url: `${siteUrl}/${landing.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: landing.h1,
            item: `${siteUrl}/${landing.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: landing.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="space-y-16 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-14 sm:px-10 lg:px-12">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 340, height: 340, top: -90, left: -70 }} />
        <div className="relative max-w-3xl space-y-6">
          <p className="eyebrow">IB coaching · Gurugram &amp; online</p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] uppercase leading-[0.95] text-[var(--white)]">
            {landing.h1}
          </h1>
          <p className="font-serif-italic text-2xl text-[var(--green)]">{landing.tagline}</p>
          {landing.intro.map((p) => (
            <p key={p} className="max-w-2xl text-[14px] leading-8 text-[var(--white-dim)]">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Book a free consultation
            </Link>
            <a
              href={`tel:${siteContact.phoneHref}`}
              className="btn-outline rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Call {siteContact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="reveal space-y-6">
        <p className="eyebrow">What you get</p>
        <div className="grid gap-4 md:grid-cols-2">
          {landing.highlights.map((h) => (
            <div key={h.title} className="lift-card rounded-[24px] p-6">
              <p className="text-lg font-medium text-[var(--white)]">{h.title}</p>
              <p className="mt-2 text-[13px] leading-7 text-[var(--white-dim)]">{h.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED SUBJECTS */}
      {related.length > 0 && (
        <section className="reveal space-y-6">
          <p className="eyebrow">Explore the syllabus</p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((subject) => (
              <Link
                key={subject.slug}
                href={`/courses/${subject.slug}`}
                className="lift-card rounded-[24px] p-6"
              >
                <h3 className="font-display text-3xl uppercase text-[var(--white)]">
                  {subject.name}
                </h3>
                <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">
                  {subject.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="reveal space-y-6">
        <p className="eyebrow">Frequently asked</p>
        <div className="grid gap-4 md:grid-cols-2">
          {landing.faqs.map((item) => (
            <div key={item.q} className="lift-card rounded-[24px] p-6">
              <h3 className="text-base font-semibold text-[var(--white)]">{item.q}</h3>
              <p className="mt-2 text-[13px] leading-7 text-[var(--white-dim)]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED SEARCHES (internal linking) */}
      <section className="reveal space-y-4">
        <p className="eyebrow">Related searches</p>
        <div className="flex flex-wrap gap-3">
          {landings
            .filter((l) => l.slug !== landing.slug)
            .map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}`}
                className="rounded-full border border-[var(--white-faint)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--white-dim)] transition hover:border-[var(--green)] hover:text-[var(--green)]"
              >
                {l.h1}
              </Link>
            ))}
          <Link
            href="/ib-coaching-gurugram"
            className="rounded-full border border-[var(--white-faint)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--white-dim)] transition hover:border-[var(--green)] hover:text-[var(--green)]"
          >
            IB Coaching in Gurugram
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 text-center sm:px-10">
        <div className="glow-orb" style={{ width: 320, height: 320, top: -90, left: "50%", marginLeft: -160 }} />
        <div className="relative space-y-5">
          <p className="eyebrow justify-center">Get started</p>
          <h2 className="font-display text-5xl uppercase text-[var(--white)] sm:text-6xl">
            Start with a free consultation
          </h2>
          <p className="mx-auto max-w-md text-[13px] leading-8 text-[var(--white-dim)]">
            Tell us your subjects and target grades — we&rsquo;ll map a plan and reply
            within one working day.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Link href="/contact" className="btn-primary rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]">
              Contact us
            </Link>
            <Link
              href="/ib-coaching-gurugram"
              className="btn-outline rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
            >
              IB coaching in Gurugram
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
