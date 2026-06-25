import type { Metadata } from "next";
import { siteContact, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Wadhwa Institute, Gurugram — book a free IB coaching consultation by email or phone, or visit us in Sector 55.",
  alternates: { canonical: "/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      url: `${siteUrl}/contact`,
      name: "Contact Wadhwa Institute",
      about: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
      ],
    },
  ],
};

const methods = [
  {
    label: "Email us",
    value: siteContact.email,
    href: `mailto:${siteContact.email}`,
    external: false,
  },
  {
    label: "Call / WhatsApp",
    value: siteContact.phone,
    href: `tel:${siteContact.phoneHref}`,
    external: false,
  },
  {
    label: "Visit us",
    value: siteContact.address,
    href: siteContact.mapsUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 320, height: 320, top: -90, right: -60 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">Get in touch</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            Your perfect 7 starts here
          </h1>
          <p className="max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
            Book a free consultation to map your IB subjects, timelines, and target
            grades. Reach us by email or phone, or drop by our centre in Gurugram —
            we&rsquo;ll get back to you within one working day.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="reveal grid gap-5 md:grid-cols-3">
        {methods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            {...(method.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="lift-card flex flex-col justify-between gap-6 rounded-[24px] p-6"
          >
            <span className="label">{method.label}</span>
            <span className="flex items-center justify-between gap-4">
              <span className="text-[15px] leading-7 text-[var(--white)]">
                {method.value}
              </span>
              <span className="pulse-arrow text-[var(--green)]">→</span>
            </span>
          </a>
        ))}
      </section>

      {/* WHAT TO EXPECT */}
      <section className="reveal grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <p className="eyebrow">What happens next</p>
          <div className="mt-5 space-y-4">
            {[
              "Tell us your IB subjects, current grades, and target scores.",
              "We map a personalised plan and recommend the right mentors.",
              "Start with a free consultation — no obligation.",
            ].map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--green)] text-sm font-semibold text-[var(--green)]">
                  {index + 1}
                </span>
                <p className="text-[13px] leading-7 text-[var(--white-dim)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <div className="glow-orb" style={{ width: 220, height: 220, bottom: -70, right: -50 }} />
          <div className="relative space-y-3">
            <p className="eyebrow">Our centre</p>
            <p className="text-[15px] leading-8 text-[var(--white)]">{siteContact.address}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={siteContact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
              >
                View on Maps →
              </a>
              <a
                href={siteContact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
