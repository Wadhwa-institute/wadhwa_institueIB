// High-intent SEO landing pages. Each page targets a specific search phrase that
// real parents/students type into Google (subject + location, "near me", board
// comparisons, etc.). One page per money keyword — this is what lets the site
// rank for terms beyond the brand name.
//
// Rendered by src/app/[landing]/page.tsx via generateStaticParams, so every page
// is fully static and individually indexable with its own title, description,
// canonical, H1, FAQ, and Service + FAQPage + BreadcrumbList JSON-LD.

export type LandingFaq = { q: string; a: string };

export type Landing = {
  slug: string;
  /** <title> and primary search target */
  metaTitle: string;
  metaDescription: string;
  /** On-page H1 (kept close to the search phrase) */
  h1: string;
  /** Italic green sub-headline */
  tagline: string;
  /** Intro paragraph(s) */
  intro: string[];
  /** "What you get" bullet highlights */
  highlights: { title: string; copy: string }[];
  faqs: LandingFaq[];
  /** Slugs of course pages to surface as related links */
  relatedSubjects?: string[];
  /** Service.serviceType for JSON-LD */
  serviceType: string;
};

const AREAS =
  "Sector 55, Sushant Lok, DLF Phases 1–5, Golf Course Road, Sohna Road, South City, Cyber City and across Delhi NCR";

export const landings: Landing[] = [
  {
    slug: "ib-coaching-gurgaon",
    metaTitle: "IB Coaching in Gurgaon — IB Tuition Classes",
    metaDescription:
      "Looking for IB coaching in Gurgaon? Wadhwa Institute offers mentor-led IB tuition in English, French, Business Management, Economics & Maths (AA/AI) — online & in-person. Free consultation.",
    h1: "IB Coaching in Gurgaon",
    tagline: "Mentor-led IB tuition that moves you toward a perfect 7",
    intro: [
      "Wadhwa Institute is a premium IB coaching centre serving Gurgaon (Gurugram) from Sector 55. We coach the full IB Diploma — English, French, Business Management, Economics, and Maths (AA & AI) — at both SL and HL, online and in-person.",
      "Whether you are starting Year 1, polishing an Internal Assessment, or pushing for a 7 before final exams, we build a focused plan around your subjects and target grades.",
    ],
    highlights: [
      { title: "Small groups & 1-on-1", copy: "Real feedback on your essays, IAs, and past papers — not a crowded batch." },
      { title: "IB specialists", copy: "Tutors who live inside the IB syllabus, command terms, and mark schemes." },
      { title: "Online & in-person", copy: "Attend in Gurgaon or join live online from anywhere in India." },
      { title: "IA & EE support", copy: "Examiner-aligned guidance within academic-integrity rules." },
    ],
    faqs: [
      { q: "Do you offer IB coaching across Gurgaon?", a: `Yes. We teach in-person at our Sector 55 centre and online for students across ${AREAS}.` },
      { q: "Which IB subjects do you teach in Gurgaon?", a: "IB English, French, Business Management, Economics, and Maths (AA and AI), at SL and HL." },
      { q: "Is online IB tuition as effective as in-person?", a: "Yes — our online classes are live and interactive, with the same materials, feedback, and past-paper drills as in-person sessions." },
    ],
    relatedSubjects: ["economics", "business-management", "mathematics"],
    serviceType: "IB Diploma Programme tuition and coaching in Gurgaon",
  },
  {
    slug: "ib-economics-tuition-gurugram",
    metaTitle: "IB Economics Tutor in Gurugram (SL & HL)",
    metaDescription:
      "Top-rated IB Economics tuition in Gurugram. Master diagrams, evaluation, Paper 1/2/3 and the IA with an IB Economics specialist at Wadhwa Institute. SL & HL, online & in-person.",
    h1: "IB Economics Tutor in Gurugram",
    tagline: "Diagrams, evaluation, and Paper 3 — mastered",
    intro: [
      "Wadhwa Institute offers specialist IB Economics tuition in Gurugram for SL and HL students. Our students consistently lift their grades by mastering the small set of skills examiners actually reward: clean diagrams, structured evaluation, and confident Paper 3 calculations.",
      "We coach the full course — microeconomics, macroeconomics, the global economy — plus the Internal Assessment commentaries that are worth 20–30% of your grade.",
    ],
    highlights: [
      { title: "Diagram mastery", copy: "Draw every core diagram cleanly from memory, then reference it in your answer." },
      { title: "Evaluation frameworks", copy: "A repeatable structure that turns 5-level answers into 7s." },
      { title: "Paper 3 (HL) drills", copy: "Predictable calculation types practised until the method is automatic." },
      { title: "IA mentoring", copy: "Three sharp commentaries on recent news, each scoring in the top band." },
    ],
    faqs: [
      { q: "Do you teach both SL and HL Economics?", a: "Yes — we coach IB Economics at both Standard and Higher Level, including HL Paper 3." },
      { q: "Can you help with the Economics IA?", a: "Yes. We mentor the full IA process — article selection, diagram and concept application, evaluation, and staying within the word count." },
      { q: "How quickly can grades improve?", a: "Many students see a clear lift within a term once diagrams and evaluation become automatic, though results depend on starting point and effort." },
    ],
    relatedSubjects: ["economics"],
    serviceType: "IB Economics tuition (SL and HL)",
  },
  {
    slug: "ib-business-management-tuition-gurugram",
    metaTitle: "IB Business Management Tutor in Gurugram",
    metaDescription:
      "Expert IB Business Management tuition in Gurugram. Case-study technique, the tools, and a top-scoring IA with a specialist tutor at Wadhwa Institute. SL & HL, online & in-person.",
    h1: "IB Business Management Tutor in Gurugram",
    tagline: "Case studies, the tools, and a 7-scoring IA",
    intro: [
      "Wadhwa Institute provides focused IB Business Management tuition in Gurugram for SL and HL. We drill the analytical tools, the pre-released case study, and the structured application examiners look for.",
      "Our IA mentoring is a particular strength — we take a vague idea and shape it into a focused, evidence-backed research project that scores in the top band.",
    ],
    highlights: [
      { title: "Tool fluency", copy: "SWOT, Ansoff, BCG, financial ratios — applied to context, not just defined." },
      { title: "Case-study drills", copy: "Timed practice on the pre-released statement so Paper 1 holds no surprises." },
      { title: "Application & evaluation", copy: "The structured judgement that separates a 5 from a 7." },
      { title: "IA from idea to final draft", copy: "A focused research question, real data, and clear analysis." },
    ],
    faqs: [
      { q: "Do you cover the pre-released case study?", a: "Yes — we run dedicated sessions on the current case study with timed Paper 1 practice." },
      { q: "Can you help with the Business Management IA?", a: "Yes. We mentor the full IA — research question, secondary/primary data, tool selection, analysis, and evaluation." },
      { q: "SL or HL?", a: "We teach both, including the HL extension topics and HL Paper 3 stimulus-based question." },
    ],
    relatedSubjects: ["business-management"],
    serviceType: "IB Business Management tuition (SL and HL)",
  },
  {
    slug: "ib-maths-tuition-gurugram",
    metaTitle: "IB Maths Tutor in Gurugram — AA & AI (SL/HL)",
    metaDescription:
      "IB Maths tuition in Gurugram for Analysis & Approaches (AA) and Applications & Interpretation (AI), SL & HL. GDC mastery, calculus, statistics, and exam technique at Wadhwa Institute.",
    h1: "IB Maths Tutor in Gurugram (AA & AI)",
    tagline: "AA or AI, SL or HL — clear method, fewer careless marks",
    intro: [
      "Wadhwa Institute offers IB Maths tuition in Gurugram across both routes — Analysis & Approaches (AA) and Applications & Interpretation (AI) — at SL and HL. We start by helping you confirm the right course for your strengths and university plans.",
      "From there it is method, GDC fluency, and timed past-paper practice: the three things that reliably move Maths grades.",
    ],
    highlights: [
      { title: "AA vs AI guidance", copy: "Pick the route that fits your strengths and degree plans with confidence." },
      { title: "GDC mastery", copy: "Solve, regress, and analyse distributions fast on calculator-active papers." },
      { title: "Method marks", copy: "Clear working that banks marks even when the final number slips." },
      { title: "Timed drills", copy: "Paper 1 and Paper 2 practice under exam conditions." },
    ],
    faqs: [
      { q: "Do you teach both AA and AI?", a: "Yes — we coach IB Maths Analysis & Approaches (AA) and Applications & Interpretation (AI), at SL and HL." },
      { q: "I'm not sure whether to take AA or AI — can you help?", a: "Yes. We advise on AA vs AI based on your strengths and intended university course before and early in the programme." },
      { q: "Can you help with the Maths Exploration (IA)?", a: "Yes — we mentor the Exploration from topic choice to final write-up, within academic-integrity rules." },
    ],
    relatedSubjects: ["mathematics"],
    serviceType: "IB Mathematics tuition — AA and AI (SL and HL)",
  },
  {
    slug: "ib-tutor-near-me",
    metaTitle: "IB Tutor Near Me — Gurugram & Delhi NCR",
    metaDescription:
      "Searching for an IB tutor near me? Wadhwa Institute offers mentor-led IB coaching in Gurugram and live online across Delhi NCR — English, French, Business, Economics & Maths.",
    h1: "Looking for an IB Tutor Near You?",
    tagline: "In-person in Gurugram, online everywhere",
    intro: [
      "If you are searching for an IB tutor near you, Wadhwa Institute coaches the full IB Diploma in person at our Sector 55, Gurugram centre and live online across Delhi NCR and India.",
      "We match you with a subject specialist for English, French, Business Management, Economics, or Maths (AA/AI) — and build a plan around your subjects, level, and target grades.",
    ],
    highlights: [
      { title: "Close to home", copy: `In-person at Sector 55, convenient for ${AREAS}.` },
      { title: "Or fully online", copy: "Live, interactive classes if a centre isn't nearby." },
      { title: "Subject specialists", copy: "The right mentor for each subject, not a one-size-fits-all tutor." },
      { title: "Flexible scheduling", copy: "Sessions that fit around school and other commitments." },
    ],
    faqs: [
      { q: "Where is your IB centre located?", a: "A1/29, HUDA, Sushant Lok II, Sector 55, Gurugram, Haryana 122011." },
      { q: "What if there's no centre near me?", a: "We teach live online across India, with the same materials and feedback as in-person classes." },
      { q: "How do I get started?", a: "Book a free consultation — tell us your subjects and target grades and we'll map a plan within one working day." },
    ],
    relatedSubjects: ["economics", "business-management", "mathematics", "english", "french"],
    serviceType: "IB Diploma Programme tuition near Gurugram and Delhi NCR",
  },
  {
    slug: "ib-online-tuition-india",
    metaTitle: "IB Online Tuition in India — Live IB Classes",
    metaDescription:
      "Live, interactive IB online tuition across India from Wadhwa Institute. Expert IB tutors for English, French, Business Management, Economics & Maths (AA/AI). SL & HL. Free consultation.",
    h1: "IB Online Tuition Across India",
    tagline: "Same mentors, same results — from anywhere",
    intro: [
      "Wadhwa Institute delivers live IB online tuition to students across India. Our online classes are fully interactive — shared whiteboards, marked work, past-paper drills, and the same subject specialists who teach at our Gurugram centre.",
      "We coach the full IB Diploma — English, French, Business Management, Economics, and Maths (AA & AI) — at SL and HL.",
    ],
    highlights: [
      { title: "Live, not recorded", copy: "Real-time teaching with questions answered as they come up." },
      { title: "Marked work", copy: "Essays, IAs, and past papers returned with detailed feedback." },
      { title: "Anywhere in India", copy: "Delhi, Mumbai, Bangalore, Hyderabad — or abroad." },
      { title: "Flexible timings", copy: "Slots that work around your school timetable." },
    ],
    faqs: [
      { q: "Are the online classes live or recorded?", a: "Live and interactive — you can ask questions and get feedback in real time." },
      { q: "Which subjects are available online?", a: "All five — English, French, Business Management, Economics, and Maths (AA/AI), at SL and HL." },
      { q: "What do I need to join?", a: "A laptop or tablet, a stable internet connection, and your IB materials. We handle the rest." },
    ],
    relatedSubjects: ["economics", "business-management", "mathematics", "english", "french"],
    serviceType: "Online IB Diploma Programme tuition across India",
  },
];

export function getLanding(slug: string): Landing | undefined {
  return landings.find((l) => l.slug === slug);
}
