import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "App Terms of Service | Wadhwa Institute IB",
  description:
    "Terms of service for the Wadhwa Institute IB mobile app: eligibility, account rules, use of study material, acceptable use, and governing law.",
  alternates: { canonical: "/terms" },
};

// Terms for the MOBILE APP specifically (the website's own terms are part of
// /privacy-policy). Referenced from inside the app: Profile → Terms of Service.
const sections = [
  {
    title: "1. Acceptance of These Terms",
    content:
      "These Terms of Service govern your use of the Wadhwa Institute IB mobile application (the “App”). By downloading, signing in to, or using the App you agree to these Terms. If you do not agree, please do not use the App.",
  },
  {
    title: "2. Eligibility & Accounts",
    content:
      "The App is provided for students enrolled with Wadhwa Institute. Access requires signing in with a valid phone number, verified by a one-time SMS code. You are responsible for maintaining control of the phone number and device used to access your account, and for all activity that occurs under it. Accounts are personal and must not be shared or transferred.",
  },
  {
    title: "3. Study Material & Intellectual Property",
    content:
      "All notes, PDFs, and other content made available in the App are the property of Wadhwa Institute or its licensors and are provided solely for your personal, non-commercial study. You may not copy, reproduce, redistribute, resell, publish, or publicly share the material, in whole or in part, without prior written permission. Downloaded material remains subject to these restrictions.",
  },
  {
    title: "4. Acceptable Use",
    content:
      "You agree not to: attempt to gain unauthorised access to the App, its accounts, or its servers; interfere with or disrupt the service; reverse engineer or circumvent any security or access control; use automated means to extract content; or use the App for any unlawful purpose. We may suspend or terminate access for breach of these Terms.",
  },
  {
    title: "5. Deleting Your Account",
    content:
      "You may delete your account and associated data at any time from within the App: open Profile and tap “Delete Account”. Deletion is permanent. How we handle your data is described in the App Privacy Policy.",
  },
  {
    title: "6. Availability & Changes to the Service",
    content:
      "We aim to keep the App available and up to date but do not guarantee uninterrupted or error-free operation. Content and features may be added, modified, or withdrawn at any time, including where required to comply with law or to protect the integrity of our material.",
  },
  {
    title: "7. Disclaimer & No Guarantee of Results",
    content:
      "The App and its content are provided for educational purposes on an “as-is” basis. While we strive for accuracy, we do not warrant that the material is complete or error-free, and we do not guarantee any specific academic outcome, grade, or score. Individual results depend on each student’s effort, starting level, and exam session.",
  },
  {
    title: "8. Fees & Enrolment",
    content:
      "Access to the App is provided as part of enrolment with Wadhwa Institute. Fees, refunds, and cancellations are governed by the enrolment agreement applicable to your programme, which prevails over these Terms. The App itself does not sell content or process payments.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable law, Wadhwa Institute shall not be liable for any indirect, incidental, or consequential loss arising from your use of, or inability to use, the App. Nothing in these Terms limits any liability that cannot be limited under applicable law.",
  },
  {
    title: "10. Governing Law & Jurisdiction",
    content:
      "These Terms are governed by the laws of India. Any dispute arising in connection with the App or these Terms shall be subject to the exclusive jurisdiction of the competent courts at Gurugram, Haryana, India.",
  },
  {
    title: "11. Changes to These Terms",
    content:
      "We may update these Terms from time to time. The latest version will always be available on this page, and continued use of the App after an update constitutes acceptance of the revised Terms.",
  },
];

export default function AppTermsPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, right: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">App legal</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            App Terms of Service
          </h1>
          <p className="max-w-3xl text-[13px] leading-8 text-[var(--white-dim)]">
            The terms that govern your use of the Wadhwa Institute IB mobile app,
            including account rules and permitted use of our study material.
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
        <p className="eyebrow">12. Contact</p>
        <p className="mt-3 max-w-3xl text-[13px] leading-7 text-[var(--white-dim)]">
          Questions about these Terms? Contact Wadhwa Institute, Gurugram, Haryana, India:
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
          <Link href="/privacy" className="text-[var(--green)]">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
