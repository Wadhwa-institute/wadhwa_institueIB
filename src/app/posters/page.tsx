import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shareable Posters",
  description:
    "Download ready-to-share Wadhwa Institute posters for WhatsApp, Instagram, and parent groups.",
  robots: { index: false, follow: false },
};

const posters = [
  {
    title: "IB Coaching Promo",
    note: "“Score your perfect 7”. Great for any group or status.",
    src: "/assets/posters/promo.png",
    file: "wadhwa-institute-promo.png",
  },
  {
    title: "Excellence Quote",
    note: "“Excellence must be chased, scores and good fortune will follow.”",
    src: "/assets/posters/quote.png",
    file: "wadhwa-institute-quote.png",
  },
  {
    title: "IB Maths Mentor",
    note: "Maths specialist across AA SL and AI SL.",
    src: "/assets/posters/maths-mentor.png",
    file: "wadhwa-institute-maths-mentor.png",
  },
  {
    title: "Himani Anand, IB French",
    note: "French teacher with 15+ years of experience.",
    src: "/assets/posters/himani-anand.png",
    file: "wadhwa-institute-himani-anand.png",
  },
];

export default function PostersPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="reveal relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, right: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">For sharing</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            Shareable posters
          </h1>
          <p className="max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
            Ready-made posters (4:5, perfect for WhatsApp &amp; Instagram). On a phone,
            <strong> tap and hold</strong> an image to save it, or use the download button.
            Then share to your groups and status.
          </p>
        </div>
      </section>

      <section className="reveal grid gap-6 md:grid-cols-3">
        {posters.map((p) => (
          <div key={p.src} className="lift-card flex flex-col gap-4 rounded-[24px] p-5">
            <div className="overflow-hidden rounded-[16px] border border-[var(--white-faint)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.title} className="block w-full" loading="lazy" />
            </div>
            <div className="space-y-1">
              <p className="text-base font-medium text-[var(--white)]">{p.title}</p>
              <p className="text-[12px] leading-6 text-[var(--white-dim)]">{p.note}</p>
            </div>
            <a
              href={p.src}
              download={p.file}
              className="btn-primary mt-auto inline-flex justify-center rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Download poster ↓
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
