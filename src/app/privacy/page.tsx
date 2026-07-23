import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "App Privacy Policy | Wadhwa Institute IB",
  description:
    "Privacy policy for the Wadhwa Institute IB mobile app: what data the app collects (phone number, study activity), how it is used and stored, and how to delete your account.",
  alternates: { canonical: "/privacy" },
};

// Covers the MOBILE APP specifically (the website's own policy lives at
// /privacy-policy). Apple requires an app-specific, publicly reachable privacy
// policy that names the data the app collects and how users delete it.
const sections = [
  {
    title: "1. Scope",
    content:
      "This Privacy Policy applies to the Wadhwa Institute IB mobile application (the “App”). It explains what personal data the App collects, why, and how you can remove it. Wadhwa Institute acts as a “Data Fiduciary” under India’s Digital Personal Data Protection Act, 2023. For the website, see our main Privacy Policy, Terms & Legal page.",
  },
  {
    title: "2. Information the App Collects",
    content:
      "Phone number — used to sign you in via a one-time SMS code (OTP) and to identify your account. Display name — if you choose to provide one, shown on your profile. Study activity — the time you spend reading notes, which notes you have opened, your daily study streak, and how many notes you have downloaded. The App does not collect your location, contacts, photos, camera data, or advertising identifiers.",
  },
  {
    title: "3. How We Use It",
    content:
      "To authenticate you and keep you signed in; to display your own progress on your profile; and to allow authorised institute staff to view study activity so they can support enrolled students. We do not use your data for advertising, profiling, or automated decision-making, and we do not use third-party ad or tracking SDKs.",
  },
  {
    title: "4. Consent & Legal Basis",
    content:
      "By creating an account and signing in you provide free, specific, informed, and unambiguous consent to the processing described here. You may withdraw consent at any time by deleting your account in the App (see Section 7) or by contacting us. Withdrawal does not affect processing carried out before withdrawal.",
  },
  {
    title: "5. Children's & Students' Data",
    content:
      "Many of our learners are under 18. In line with Section 9 of the DPDP Act, we obtain verifiable consent from a parent or lawful guardian before processing a child’s personal data. The App does not carry out behavioural tracking, profiling, or targeted advertising directed at children. If you believe a minor’s data has been provided without appropriate consent, contact us and we will remove it.",
  },
  {
    title: "6. Storage, Security & Sharing",
    content:
      "Data is stored using Google Firebase (Authentication and Cloud Firestore) and transmitted over encrypted HTTPS connections. Study material (PDFs) is served from our own website. We do not sell your personal data. We share it only with the infrastructure providers required to operate the App, under contractual confidentiality and security obligations, or where required by law.",
  },
  {
    title: "7. Deleting Your Account & Data",
    content:
      "You can permanently delete your account at any time from within the App: open Profile and tap “Delete Account”. This removes your profile, saved bookmarks, download history, and study records from our systems. You may also email us using the details below to request deletion, and we will action it within the timelines prescribed under the DPDP Rules, 2025.",
  },
  {
    title: "8. Data Retention",
    content:
      "We retain your data only while your account is active or as needed to provide the service and meet legal obligations. Once you delete your account, the associated data is removed; residual copies in routine backups are overwritten in the ordinary backup cycle.",
  },
  {
    title: "9. Your Rights as a Data Principal",
    content:
      "Subject to applicable law you may request access to a summary of the personal data we hold about you, correction of inaccurate data, erasure of data no longer required, and grievance redressal. Contact the Grievance Officer using the details below. If you are not satisfied with our response, you may escalate to the Data Protection Board of India.",
  },
  {
    title: "10. Changes to This Policy",
    content:
      "We may update this Policy to reflect changes in the App or in applicable law. The latest version will always be available on this page, and material changes will be highlighted where appropriate.",
  },
];

export default function AppPrivacyPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, right: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">App legal</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            App Privacy Policy
          </h1>
          <p className="max-w-3xl text-[13px] leading-8 text-[var(--white-dim)]">
            How the Wadhwa Institute IB mobile app collects, uses, and protects your
            data &mdash; aligned with India&rsquo;s Digital Personal Data Protection
            Act, 2023 and the DPDP Rules, 2025.
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--white-dim)]">
            Last updated: 12 July 2026
          </p>
        </div>
      </section>

      <section className="space-y-4">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] px-6 py-6"
          >
            <h2 className="text-lg font-semibold text-[var(--white)]">{section.title}</h2>
            <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">{section.content}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[24px] border border-[var(--green)] bg-[var(--green-faint)] px-6 py-7 sm:px-8">
        <p className="eyebrow">11. Contact &amp; Grievance Officer</p>
        <p className="mt-3 max-w-3xl text-[13px] leading-7 text-[var(--white-dim)]">
          For any privacy, data protection, or deletion request relating to the App,
          contact the Grievance Officer, Wadhwa Institute, Gurugram, Haryana, India:
        </p>
        <div className="mt-4 flex flex-col gap-2 text-[14px]">
          <a href={`mailto:${siteContact.email}`} className="text-[var(--green)]">
            {siteContact.email}
          </a>
          <a href={`tel:${siteContact.phoneHref}`} className="text-[var(--green)]">
            {siteContact.phone}
          </a>
        </div>
        <p className="mt-5 text-[13px] leading-7 text-[var(--white-dim)]">
          See also the App&rsquo;s{" "}
          <Link href="/terms" className="text-[var(--green)]">
            Terms of Service
          </Link>{" "}
          and our website&rsquo;s{" "}
          <Link href="/privacy-policy" className="text-[var(--green)]">
            Privacy Policy, Terms &amp; Legal
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
