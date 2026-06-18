import type { Metadata } from "next";
import { siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy, Terms & Legal | Wadhwa Institute",
  description:
    "Privacy policy, terms of use, refund policy, and grievance contact for Wadhwa Institute, aligned with India's DPDP Act 2023 and applicable consumer protection rules.",
  alternates: { canonical: "/privacy-policy" },
};

const legalSections = [
  {
    title: "1. Introduction & Scope",
    content:
      "This Privacy Policy and Terms of Use govern your use of the Wadhwa Institute website (the “Website”). By accessing or using the Website, you agree to these terms. Wadhwa Institute acts as a “Data Fiduciary” in respect of the personal data it collects, and processes such data in accordance with the Digital Personal Data Protection Act, 2023 (“DPDP Act”), the Digital Personal Data Protection Rules, 2025, the Information Technology Act, 2000, and other applicable Indian laws.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect only the personal data necessary to respond to enquiries and provide our coaching services. This may include your name, email address, phone number, the IB subjects you are interested in, your school or grade level, and any details you voluntarily share when contacting us by email, phone, or messaging. We do not knowingly collect more data than is required for the stated purpose.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "Personal data is used to respond to enquiries, schedule consultations, deliver and improve our coaching programmes, share relevant academic updates where you have opted in, and meet our legal and accounting obligations. We do not use your data for automated profiling or for any purpose incompatible with the purpose for which it was collected.",
  },
  {
    title: "4. Consent & Legal Basis (DPDP Act, 2023)",
    content:
      "Where processing is based on consent, we obtain free, specific, informed, unconditional, and unambiguous consent through a clear affirmative action, and you may withdraw it at any time by contacting us at the address below. Withdrawing consent will not affect the lawfulness of processing carried out before withdrawal. We may also process data for “legitimate uses” permitted under the DPDP Act, such as responding to a request you have made.",
  },
  {
    title: "5. Children's & Students' Data (Verifiable Parental Consent)",
    content:
      "Many of our learners are under 18 years of age. In line with Section 9 of the DPDP Act, we obtain verifiable consent from a parent or lawful guardian before processing the personal data of a child (a person under 18) or a person with a disability who has a lawful guardian. We do not undertake tracking, behavioural monitoring, or targeted advertising directed at children. If you believe a minor's data has been provided without appropriate consent, please contact us so we can correct or delete it.",
  },
  {
    title: "6. Cookies & Analytics",
    content:
      "The Website may use essential cookies and limited, privacy-respecting analytics to keep the site functioning and to understand aggregate usage. We do not use cookies to build advertising profiles. You can control or block cookies through your browser settings; essential cookies are required for the site to work correctly.",
  },
  {
    title: "7. Data Sharing & Processors",
    content:
      "We do not sell your personal data. We may share data only with trusted service providers (“Data Processors”) — such as hosting, communication, or payment providers — who process it on our behalf under contractual confidentiality and security obligations, and only to the extent necessary. We may also disclose data where required by law or by a competent authority.",
  },
  {
    title: "8. Data Retention",
    content:
      "We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, to provide our services, and to comply with legal, tax, and regulatory obligations. When data is no longer required, it is securely deleted or anonymised.",
  },
  {
    title: "9. Data Security",
    content:
      "We apply reasonable technical and organisational safeguards to protect personal data against unauthorised access, alteration, disclosure, or loss. While no method of transmission or storage is completely secure, we take appropriate measures to reduce risk and will notify the Data Protection Board and affected individuals of a personal data breach where required by law.",
  },
  {
    title: "10. Your Rights as a Data Principal",
    content:
      "Subject to applicable law, you have the right to access a summary of the personal data we hold about you, request correction or completion of inaccurate data, request erasure of data no longer required, nominate another individual to exercise your rights in the event of death or incapacity, and grievance redressal. You may exercise these rights by contacting us using the details in Section 14.",
  },
  {
    title: "11. Grievance Redressal & Data Protection Contact",
    content:
      "If you have any concern or complaint regarding your personal data, please contact our Grievance Officer at the email or phone number in Section 14. We will acknowledge and respond to your request within the timelines prescribed under the DPDP Rules, 2025 (and in any case within 90 days). If you are not satisfied with our response, you may escalate your complaint to the Data Protection Board of India.",
  },
  {
    title: "12. Use of Student Names, Photos & Testimonials",
    content:
      "Any student names, photographs, results, or testimonials displayed on this Website are published only with the prior written consent of the student (and, where the student is a minor, their parent or guardian), obtained after the declaration of their results. This is in line with the Central Consumer Protection Authority's Guidelines for Prevention of Misleading Advertisement in the Coaching Sector, 2024. Consent may be withdrawn at any time by contacting us.",
  },
  {
    title: "13. Terms of Use & Disclaimer",
    content:
      "The Website and its content are provided for general informational purposes on an “as-is” basis. While we strive for accuracy, we do not guarantee that the Website will be uninterrupted or error-free, nor do we guarantee any specific academic outcome, grade, or score. Individual results depend on each student's effort, starting level, and exam session. All content, branding, and materials on the Website are the property of Wadhwa Institute and may not be reproduced without permission.",
  },
  {
    title: "14. Fees, Refund & Cancellation",
    content:
      "Fees, refunds, and cancellations for any specific programme or service are governed by the enrolment agreement or purchase confirmation applicable to that programme, which will prevail over this Website. For any fee-related query, please contact us directly using the details below.",
  },
  {
    title: "15. Governing Law & Jurisdiction",
    content:
      "These terms are governed by the laws of India. Any dispute arising in connection with the Website or these terms shall be subject to the exclusive jurisdiction of the competent courts at Gurugram, Haryana, India.",
  },
  {
    title: "16. Changes to This Policy",
    content:
      "We may update this Policy from time to time to reflect changes in our practices or in applicable law. The latest version will always be available on this page, and material changes will be highlighted where appropriate.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-12 sm:px-10">
        <div className="grid-lines" />
        <div className="glow-orb" style={{ width: 300, height: 300, top: -90, right: -50 }} />
        <div className="relative space-y-4">
          <p className="eyebrow">Legal & privacy</p>
          <h1 className="font-display text-5xl uppercase text-[var(--white)] sm:text-7xl">
            Privacy Policy, Terms &amp; Legal
          </h1>
          <p className="max-w-3xl text-[13px] leading-8 text-[var(--white-dim)]">
            This page consolidates the legal information for Wadhwa Institute,
            aligned with India&rsquo;s Digital Personal Data Protection Act, 2023, the
            DPDP Rules, 2025, and applicable consumer-protection rules.
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--white-dim)]">
            Last updated: 18 June 2026
          </p>
        </div>
      </section>

      <section className="space-y-4">
        {legalSections.map((section) => (
          <article
            key={section.title}
            className="rounded-[24px] border border-[var(--white-faint)] bg-[var(--black-3)] px-6 py-6"
          >
            <h2 className="text-lg font-semibold text-[var(--white)]">{section.title}</h2>
            <p className="mt-3 text-[13px] leading-7 text-[var(--white-dim)]">{section.content}</p>
          </article>
        ))}
      </section>

      {/* Contact / Grievance Officer */}
      <section className="rounded-[24px] border border-[var(--green)] bg-[var(--green-faint)] px-6 py-7 sm:px-8">
        <p className="eyebrow">14. Contact & Grievance Officer</p>
        <p className="mt-3 max-w-3xl text-[13px] leading-7 text-[var(--white-dim)]">
          For any privacy, data protection, grievance, or legal query, please
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
      </section>
    </div>
  );
}
