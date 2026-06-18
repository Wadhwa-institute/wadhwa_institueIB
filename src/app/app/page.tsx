import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Download the Wadhwa Institute app to unlock premium IB notes, video lessons, and offline revision with progress tracking.",
  alternates: { canonical: "/app" },
};

const stepList = [
  "Sign up on the website and verify your email address.",
  "Download the app and sign in with the same account.",
  "Verify enrollment and unlock premium content for 30 days.",
  "Study offline with notes, videos, and progress tracking.",
];

const featureList = [
  "Offline mode with encrypted local caching",
  "Push notifications for new video releases",
  "Bookmarking and note-taking tools",
  "Performance analytics and revision reminders",
];

export default function AppPage() {
  return (
    <div className="space-y-12 pb-12">
      <section className="relative grid gap-10 overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, bottom: -90, right: -50 }} />
        <div className="relative space-y-5">
          <p className="eyebrow">App download &amp; unlock</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-6xl">
            Download the app, unlock premium learning
          </h1>
          <p className="max-w-2xl text-[13px] leading-8 text-[var(--white-dim)]">
            Designed for students and parents, the app combines downloadable
            content, progress insights, and secure access to premium resources.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="btn-primary rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Get notified at launch
            </Link>
            <span className="inline-flex items-center rounded-full border border-[var(--white-faint)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[var(--white-dim)]">
              iOS &amp; Android — coming soon
            </span>
          </div>
        </div>

        <div className="relative rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <p className="label">What you unlock</p>
          <div className="mt-5 grid gap-3">
            {featureList.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-[var(--white-faint)] bg-[var(--black-4)] px-4 py-3 text-[13px] text-[var(--white-dim)]"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <p className="eyebrow">Verification flow</p>
          <div className="mt-5 space-y-4">
            {stepList.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--green)] text-sm font-semibold text-[var(--green)]">
                  {index + 1}
                </span>
                <p className="text-[13px] leading-7 text-[var(--white-dim)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] p-6">
          <p className="label">Free vs premium</p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-[var(--green)] bg-[var(--green-faint)] px-4 py-4">
              <p className="font-semibold text-[var(--white)]">Free tier</p>
              <p className="mt-2 text-[13px] text-[var(--white-dim)]">
                One sample video and PDF preview per subject.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--white-faint)] bg-[var(--black-4)] px-4 py-4">
              <p className="font-semibold text-[var(--white)]">Premium tier</p>
              <p className="mt-2 text-[13px] text-[var(--white-dim)]">
                Full video library, high-value notes, and progress analytics unlocked via the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-7 sm:px-8">
        <p className="eyebrow">Need help getting set up?</p>
        <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">
          Reach us at{" "}
          <a href={`mailto:${siteContact.email}`} className="text-[var(--green)]">
            {siteContact.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${siteContact.phoneHref}`} className="text-[var(--green)]">
            {siteContact.phone}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
