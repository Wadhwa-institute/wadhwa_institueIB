export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readMins: number;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-score-7-in-ib-economics",
    title: "How to Score a 7 in IB Economics",
    description:
      "A practical, exam-tested guide to scoring a 7 in IB Economics — diagrams, evaluation, Paper 1/2/3 strategy, and IA tips from Wadhwa Institute, Gurugram.",
    date: "2026-06-10",
    readMins: 7,
    intro:
      "A 7 in IB Economics is not about memorising the textbook — it is about applying a small set of skills under time pressure. Across hundreds of hours of IB Economics coaching in Gurugram, the students who reach the top band tend to do the same handful of things consistently. Here is exactly what they are.",
    sections: [
      {
        heading: "1. Master diagrams before anything else",
        paragraphs: [
          "Every high-scoring Economics answer is anchored by accurate, fully labelled diagrams. Examiners reward correct axes, curve labels, equilibrium points, and clearly shaded areas — and they do it quickly.",
          "Practise drawing each core diagram from memory in under 90 seconds: demand and supply, elasticity, externalities, market failure, AD/AS, and the money market. If you can draw it cleanly without thinking, you free up time to write evaluation.",
        ],
        bullets: [
          "Always title the diagram and label both axes with units",
          "Show the change (shift or movement) with arrows and a new equilibrium",
          "Reference the diagram explicitly in your written answer",
        ],
      },
      {
        heading: "2. Evaluation is where 5s become 7s",
        paragraphs: [
          "Most students lose marks not on theory but on evaluation. A 7-level answer weighs short vs long run, considers stakeholders, questions assumptions, and ends with a justified judgement.",
          "Use a repeatable structure for every 15-mark question so you never freeze: define, explain with a diagram, apply to the context, then evaluate from at least two angles before concluding.",
        ],
      },
      {
        heading: "3. Treat Paper 3 (HL) as a calculation drill",
        paragraphs: [
          "HL Paper 3 is the most improvable paper because it is predictable. The same calculation types appear every session — elasticity, taxes and subsidies, the money multiplier, terms of trade, and welfare areas.",
          "Build a personal formula sheet, then do timed past-paper calculations until the method is automatic. Show every step: method marks are awarded even when the final number is wrong.",
        ],
      },
      {
        heading: "4. Plan the Internal Assessment early",
        paragraphs: [
          "The IA is 20% of your grade and entirely within your control. Pick three commentaries from recent, local news articles, each on a different part of the syllabus, and apply a clear diagram and economic concept to each.",
          "Start early, keep within the word count, and link explicitly to the key concept. A focused, well-evaluated commentary scores far higher than a broad, descriptive one.",
        ],
      },
      {
        heading: "5. Practise under exam conditions",
        paragraphs: [
          "Knowing the content is not the same as performing on the day. Timed past papers with mark-scheme feedback are the single fastest way to raise your grade, because they train pacing, structure, and command-term awareness.",
          "At Wadhwa Institute we run timed drills with examiner-style feedback so students walk into the exam having already done it a dozen times. If you want a structured plan toward a 7, book a free consultation.",
        ],
      },
    ],
  },
  {
    slug: "best-ib-coaching-in-gurugram",
    title: "How to Choose the Best IB Coaching in Gurugram",
    description:
      "A parent's and student's guide to choosing the best IB coaching in Gurugram — what actually matters in IB tuition, and the questions to ask before you enrol.",
    date: "2026-06-14",
    readMins: 6,
    intro:
      "Gurugram has no shortage of IB tuition options, but the quality varies enormously. Whether you are looking for IB coaching in Sector 55, online IB classes, or a tutor for a specific subject, here is how to tell genuinely good IB coaching apart from the rest.",
    sections: [
      {
        heading: "Look for subject specialists, not generalists",
        paragraphs: [
          "The IB is unlike any other board — Paper structures, command terms, and the Internal Assessment all demand subject-specific expertise. A great IB Economics mentor and a great IB Mathematics mentor are rarely the same person.",
          "Ask whether your tutor focuses on a specific IB subject and understands the current syllabus and mark schemes, rather than teaching every subject to every board.",
        ],
      },
      {
        heading: "Prioritise mentoring over large batches",
        paragraphs: [
          "IB success depends on feedback — on essays, IAs, and past papers. That is hard to deliver in a crowded classroom. Small groups or one-on-one mentoring let a tutor actually read your work and tell you how to improve it.",
        ],
        bullets: [
          "How many students are in a batch?",
          "Will my essays and IA drafts get individual feedback?",
          "Can I get doubt support between classes?",
        ],
      },
      {
        heading: "Ask about IA and Extended Essay support",
        paragraphs: [
          "Internal Assessments and the Extended Essay carry significant weight and are where many students lose easy marks. Strong IB coaching guides you through choosing a focused topic, structuring the work, and refining drafts — without crossing academic-integrity lines.",
        ],
      },
      {
        heading: "Online or in-person — both can work",
        paragraphs: [
          "The best format is the one you will attend consistently. In-person coaching in Gurugram suits students who want structure and focus; live online classes suit busy schedules and students outside the immediate area. What matters is the quality of teaching and feedback, not the medium.",
        ],
      },
      {
        heading: "Judge by approach, not just past results",
        paragraphs: [
          "Results matter, but ask how they are achieved. Good coaching teaches a repeatable method — how to plan an essay, structure evaluation, and manage exam time — so the improvement is yours to keep.",
          "Wadhwa Institute offers mentor-led IB coaching in Gurugram across English, French, Business Management, Economics, and Mathematics, online and in-person. Book a free consultation to map your subjects and target grades.",
        ],
      },
    ],
  },
];
