import type { Metadata } from "next";
import Link from "next/link";
import { siteContact, siteUrl, subjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "IB Coaching in Gurugram",
  description:
    "Premium IB coaching in Gurugram (Sector 55) — mentor-led tuition for IB English, French, Business Management, Economics, and Mathematics, online and in-person. Book a free consultation.",
  alternates: { canonical: "/ib-coaching-gurugram" },
  openGraph: {
    title: "IB Coaching in Gurugram | Wadhwa Institute",
    description:
      "Mentor-led IB tuition in Gurugram across English, French, Business Management, Economics, and Mathematics — online and in-person.",
    url: "/ib-coaching-gurugram",
  },
};

const areas = [
  "Sector 55",
  "Sushant Lok",
  "DLF Phase 1–5",
  "Golf Course Road",
  "Sohna Road",
  "South City",
  "Cyber City",
  "Palam Vihar",
  "Nirvana Country",
  "Delhi NCR",
];

const reasons = [
  {
    title: "Mentor-led, not mass batches",
    copy: "Small groups and one-on-one attention so your essays, IAs, and past papers actually get feedback.",
  },
  {
    title: "IB subject specialists",
    copy: "Tutors focused on the IB syllabus, command terms, and mark schemes — not generalists.",
  },
  {
    title: "IA & Extended Essay support",
    copy: "Structured, examiner-aligned guidance from topic selection to final draft, within academic-integrity rules.",
  },
  {
    title: "Online & in-person",
    copy: "Attend at our Gurugram centre or join live online classes from anywhere in India.",
  },
];

const faqs = [
  {
    q: "Where in Gurugram is Wadhwa Institute located?",
    a: "We are at A1/29, HUDA, Sushant Lok II, Sector 55, Gurugram, Haryana 122011, and we also teach students online across India.",
  },
  {
    q: "Which IB subjects do you coach in Gurugram?",
    a: "IB English, French, Business Management, Economics, and Mathematics (AA and AI), at both SL and HL.",
  },
  {
    q: "Do you offer one-on-one IB tuition?",
    a: "Yes — we offer one-on-one and small-group IB coaching, both in-person in Gurugram and live online.",
  },
  {
    q: "Can you help before final exams or with a retake?",
    a: "Yes. We run targeted revision, past-paper practice, and exam strategy to help students improve their grade, including retakes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "IB Coaching in Gurugram",
      serviceType: "IB Diploma Programme tuition and coaching",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "City", name: "Gurugram" },
      url: `${siteUrl}/ib-coaching-gurugram`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "IB Coaching in Gurugram",
          item: `${siteUrl}/ib-coaching-gurugram`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function GurugramLandingPage() {
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
          <p className="eyebrow">IB coaching · Gurugram</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] uppercase leading-[0.95] text-[var(--white)]">
            IB Coaching in Gurugram
          </h1>
          <p className="font-serif-italic text-2xl text-[var(--green)]">
            Mentor-led tuition that moves you toward a perfect 7
          </p>
          <p className="max-w-2xl text-[14px] leading-8 text-[var(--white-dim)]">
            Wadhwa Institute is a premium IB coaching centre in Sector 55, Gurugram,
            offering focused tuition in IB English, French, Business Management,
            Economics, and Mathematics — online and in-person. Whether you need help
            with an IA, the Extended Essay, or scoring a 7 in the final exams, we
            build a plan around you.
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
      </section>

      {/* SUBJECTS */}
      <section className="reveal space-y-6">
        <div className="space-y-3">
          <p className="eyebrow">Subjects we coach</p>
          <h2 className="font-display text-5xl uppercase text-[var(--white)] sm:text-6xl">
            IB tuition across five subjects
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
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

      {/* WHY US */}
      <section className="reveal space-y-6">
        <p className="eyebrow">Why families across Gurugram choose us</p>
        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="lift-card rounded-[24px] p-6">
              <p className="text-lg font-medium text-[var(--white)]">{reason.title}</p>
              <p className="mt-2 text-[13px] leading-7 text-[var(--white-dim)]">{reason.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="reveal rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-3)] px-6 py-10 sm:px-10">
        <p className="eyebrow">Areas we serve</p>
        <h2 className="font-display mt-3 text-4xl uppercase text-[var(--white)] sm:text-5xl">
          Across Gurugram &amp; Delhi NCR
        </h2>
        <p className="mt-3 max-w-2xl text-[13px] leading-7 text-[var(--white-dim)]">
          In-person at our Sector 55 centre and online for students everywhere.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[var(--white-faint)] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[var(--white-dim)]"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal space-y-6">
        <p className="eyebrow">Frequently asked</p>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="lift-card rounded-[24px] p-6">
              <h3 className="text-base font-semibold text-[var(--white)]">{item.q}</h3>
              <p className="mt-2 text-[13px] leading-7 text-[var(--white-dim)]">{item.a}</p>
            </div>
          ))}
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
