import type { Metadata } from "next";
import Link from "next/link";
import { siteContact, siteUrl, teachers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our IB Faculty — Meet Your Mentors",
  description:
    "Meet the mentors behind Wadhwa Institute — an IB Mathematics specialist (AA SL & AI SL) and a French teacher with 15+ years of IB experience. Mentor-led IB coaching in Gurugram.",
  alternates: { canonical: "/faculty" },
  openGraph: {
    title: "Our IB Faculty | Wadhwa Institute",
    description:
      "Meet the mentors behind Wadhwa Institute — IB Mathematics (AA/AI SL) and IB French (15+ years). Mentor-led coaching in Gurugram & online.",
    url: "/faculty",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...teachers.map((t) => ({
      "@type": "Person",
      name: t.name,
      jobTitle: t.role,
      image: `${siteUrl}/assets/posters/${t.id}.png`,
      worksFor: { "@id": `${siteUrl}/#organization` },
      knowsAbout: t.subjects,
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Faculty", item: `${siteUrl}/faculty` },
      ],
    },
  ],
};

export default function FacultyPage() {
  return (
    <div className="space-y-16 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-14 sm:px-10 lg:px-12">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 340, height: 340, top: -90, right: -70 }} />
        <div className="relative max-w-3xl space-y-5">
          <p className="eyebrow">The people behind the 7s</p>
          <h1 className="font-display text-[clamp(2.8rem,7vw,6rem)] uppercase leading-[0.95] text-[var(--white)]">
            Meet your mentors
          </h1>
          <p className="font-serif-italic text-2xl text-[var(--green)]">
            Grades are built by people, not platforms
          </p>
          <p className="max-w-2xl text-[14px] leading-8 text-[var(--white-dim)]">
            At Wadhwa Institute you don&rsquo;t get a crowded batch and a recording. You get a
            specialist mentor who knows the IB syllabus, knows the examiner, and learns how
            <em> you</em> think — then builds the plan around it.
          </p>
        </div>
      </section>

      {/* TEACHER PROFILES */}
      {teachers.map((t, i) => (
        <section
          key={t.id}
          id={t.id}
          className="reveal relative scroll-mt-24 overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)]"
        >
          <div
            className={`grid gap-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* POSTER */}
            <div className="flex items-center justify-center bg-[var(--black-3)] p-5 sm:p-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/assets/posters/${t.id}.png`}
                alt={`${t.name}, ${t.role}`}
                className="w-full max-w-[360px] rounded-[18px] border border-[var(--white-faint)] shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>

            {/* TEXT */}
            <div className="space-y-5 p-6 sm:p-10">
              <div className="flex flex-wrap gap-2">
                {t.subjects.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--green)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div>
                <h2 className="font-display text-4xl uppercase leading-none text-[var(--white)] sm:text-5xl">
                  {t.name}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--white-dim)]">
                  {t.role}
                </p>
              </div>
              <p className="font-serif-italic text-xl text-[var(--green)]">{t.pitch}</p>
              {t.bio.map((p) => (
                <p key={p} className="text-[14px] leading-8 text-[var(--white-dim)]">
                  {p}
                </p>
              ))}
              <ul className="grid gap-2 pt-1 sm:grid-cols-2">
                {t.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[13px] leading-6 text-[var(--white)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green)]" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
                >
                  Book a session with this mentor
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* TRUST STRIP */}
      <section className="reveal grid gap-4 sm:grid-cols-3">
        {[
          { v: "1:1", l: "Mentor-led attention, never a crowd" },
          { v: "IB", l: "Specialists in the syllabus & mark schemes" },
          { v: "You", l: "Lessons shaped around how you learn" },
        ].map((s) => (
          <div key={s.l} className="lift-card rounded-[24px] p-6 text-center">
            <p className="font-display text-5xl text-[var(--green)]">{s.v}</p>
            <p className="mt-2 text-[13px] leading-6 text-[var(--white-dim)]">{s.l}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 text-center sm:px-10">
        <div className="glow-orb" style={{ width: 320, height: 320, top: -90, left: "50%", marginLeft: -160 }} />
        <div className="relative space-y-5">
          <p className="eyebrow justify-center">Your turn</p>
          <h2 className="font-display text-5xl uppercase text-[var(--white)] sm:text-6xl">
            Learn from a mentor who gets you
          </h2>
          <p className="mx-auto max-w-md text-[13px] leading-8 text-[var(--white-dim)]">
            Tell us your subject and target grade — we&rsquo;ll match you with the right mentor
            and reply within one working day.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Link href="/contact" className="btn-primary rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]">
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
    </div>
  );
}
