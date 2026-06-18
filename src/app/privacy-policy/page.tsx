import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Legal | Wadhwa Institute IB",
  description:
    "Privacy policy, terms, refund, and contact information for Wadhwa Institute IB.",
};

const legalSections = [
  {
    title: "1. Privacy Policy",
    content:
      "Wadhwa Institute IB collects only the information necessary to respond to inquiries, provide learning resources, and improve the website experience. This may include your name, email address, phone number, and the details you share in contact or enquiry forms.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Information collected through this website is used to communicate about courses, answer questions, process enquiries, improve website performance, and send relevant updates only where you have opted in.",
  },
  {
    title: "3. Cookies and Analytics",
    content:
      "The website may use essential cookies for performance and analytics. We do not use cookies to track or profile users beyond standard website analytics needed to improve service quality and user experience.",
  },
  {
    title: "4. Data Sharing and Retention",
    content:
      "We do not sell personal information. We may share information only with trusted service providers who support the website, communications, or customer support, under confidentiality obligations. Personal information is retained only as long as required for the purpose it was collected.",
  },
  {
    title: "5. Security",
    content:
      "Wadhwa Institute IB uses reasonable technical and organizational safeguards to protect user information. Although no system can guarantee absolute security, we take appropriate measures to reduce the risk of unauthorized access, disclosure, or misuse.",
  },
  {
    title: "6. Your Rights",
    content:
      "Users may request access to, correction of, or deletion of their personal information by contacting the institute. We will respond in accordance with applicable data protection requirements.",
  },
  {
    title: "7. Children’s Privacy",
    content:
      "This website is intended for students, parents, and educators. If a parent or guardian believes a minor’s information was collected unintentionally, they should contact us immediately for review and correction.",
  },
  {
    title: "8. Terms and Conditions",
    content:
      "By using this website, you agree to access the content for informational purposes only. The website and its materials are provided as-is, and Wadhwa Institute IB does not guarantee uninterrupted access, the accuracy of every statement, or the outcome of any educational program.",
  },
  {
    title: "9. Refund and Cancellation Policy",
    content:
      "Refunds and cancellations are handled separately for each program, product, or service agreement. Where a specific service or program is purchased, the applicable terms in the enrollment agreement or purchase confirmation will prevail. For general enquiries, please contact the institute directly.",
  },
  {
    title: "10. Governing Law",
    content:
      "These terms are governed by the applicable laws of India, without regard to conflict of law principles. Any disputes will be resolved in the competent courts having jurisdiction in India.",
  },
  {
    title: "11. Contact Information",
    content:
      "For privacy, legal, or grievance-related queries, please contact support@wadhwainstitueib.in. We will acknowledge your request and provide a response in a reasonable time.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_35%),linear-gradient(135deg,_#0a1122,_#020617_58%,_#07111f)] px-6 py-10 sm:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Legal and privacy</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Privacy Policy & Legal Information
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-200">
            This page consolidates the legal information for Wadhwa Institute IB, including privacy practices, terms of use, refund guidance, and contact details.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        {legalSections.map((section) => (
          <article
            key={section.title}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5"
          >
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-200">{section.content}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[24px] border border-emerald-400/30 bg-emerald-500/10 px-5 py-5 sm:px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-50">Important note</p>
        <p className="mt-3 text-sm leading-7 text-slate-100">
          If you are enrolling in a course, the specific enrollment agreement and program terms will apply in addition to the general legal information on this page.
        </p>
      </section>
    </div>
  );
}
