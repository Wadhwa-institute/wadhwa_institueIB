export type Subject = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  difficulty: string;
  topics: { title: string; detail: string }[];
  benefits: string[];
};

export const subjects: Subject[] = [
  {
    slug: "english",
    name: "English",
    description:
      "Build confidence in literary analysis, language skills, and exam technique with guidance designed for IB learners.",
    shortDescription: "Literature, Language & Literature, and English B pathways",
    difficulty: "Intermediate",
    topics: [
      {
        title: "Close reading & textual analysis",
        detail:
          "Annotate unseen prose and poetry with purpose — identifying tone, diction, and structure to build a confident Paper 1 analysis.",
      },
      {
        title: "Essay writing & argumentation",
        detail:
          "Shape a clear thesis and develop balanced, evidence-led arguments with strong topic sentences and smooth transitions.",
      },
      {
        title: "Paper 1 and Paper 2 strategy",
        detail:
          "Plan and time both papers — guided analysis for Paper 1 and comparative essays for Paper 2 under exam conditions.",
      },
      {
        title: "Internal assessment support",
        detail:
          "Choose a focused extract, craft a line of inquiry, and rehearse the individual oral with examiner-style feedback.",
      },
    ],
    benefits: [
      "Structured writing workshops",
      "Live doubt-clearing clinics",
      "Exam-aligned revision plans",
    ],
  },
  {
    slug: "french",
    name: "French",
    description:
      "Strengthen oral fluency, comprehension, and writing through immersive, confidence-building lessons tailored to IB expectations.",
    shortDescription: "IB French B and advanced communication foundations",
    difficulty: "Beginner to Advanced",
    topics: [
      {
        title: "Oral fluency and pronunciation",
        detail:
          "Daily speaking drills and pronunciation coaching to build natural rhythm and confidence for the individual oral.",
      },
      {
        title: "Reading comprehension drills",
        detail:
          "Decode authentic French texts quickly using context clues, connectors, and targeted vocabulary building.",
      },
      {
        title: "Essay and email writing",
        detail:
          "Master text types — emails, blogs, and articles — with the register, format, and connectors examiners reward.",
      },
      {
        title: "Mock speaking exams",
        detail:
          "Full individual-oral simulations on a visual stimulus, with feedback on fluency, accuracy, and interaction.",
      },
    ],
    benefits: [
      "Confidence-first speaking practice",
      "Weekly vocabulary challenges",
      "Mock oral boards with feedback",
    ],
  },
  {
    slug: "business-management",
    name: "IB Business Management",
    description:
      "Make business concepts practical and memorable with case-based teaching, strategy frameworks, and performance-focused revision.",
    shortDescription: "Strategy, marketing, operations, and business ethics",
    difficulty: "Advanced",
    topics: [
      {
        title: "Marketing strategy & analysis",
        detail:
          "Apply the marketing mix, market research, and positioning to real cases with structured, evaluative answers.",
      },
      {
        title: "Finance, operations & leadership",
        detail:
          "Work through ratio analysis, investment appraisal, and operations decisions with clear method and interpretation.",
      },
      {
        title: "Paper 1 case study handling",
        detail:
          "Pre-read the case study, anticipate likely questions, and structure high-mark responses to the pre-released material.",
      },
      {
        title: "Exam-ready revision packs",
        detail:
          "Condense each unit into model answers, command-term drills, and timed practice for Papers 1 and 2.",
      },
    ],
    benefits: [
      "Case study speed drills",
      "Real-world examples for every topic",
      "Structured revision with model answers",
    ],
  },
  {
    slug: "economics",
    name: "IB Economics",
    description:
      "Master diagrams, evaluation technique, and data interpretation to gain confidence in both theory and application-based questions.",
    shortDescription: "Microeconomics, macroeconomics, and global economy themes",
    difficulty: "Advanced",
    topics: [
      {
        title: "Demand, supply & market equilibrium",
        detail:
          "Draw accurate diagrams and explain market mechanisms, elasticity, and welfare with precise labelling.",
      },
      {
        title: "Macroeconomics and policy analysis",
        detail:
          "Link fiscal, monetary, and supply-side policies to real-world outcomes with evaluation and trade-offs.",
      },
      {
        title: "Data-based essay writing",
        detail:
          "Tackle Paper 1 essays and Paper 2 data response with diagrams, definitions, and structured evaluation.",
      },
      {
        title: "Revision workshops and past papers",
        detail:
          "Timed past-paper practice with mark-scheme alignment and feedback on command terms.",
      },
    ],
    benefits: [
      "Diagram mastery sessions",
      "Evaluation-heavy coaching",
      "Timed model answer practice",
    ],
  },
  {
    slug: "mathematics",
    name: "IB Mathematics",
    description:
      "Develop exam resilience with step-by-step problem solving, targeted practice, and high-impact revision routines.",
    shortDescription: "Algebra, calculus, statistics, and exam technique",
    difficulty: "Advanced",
    topics: [
      {
        title: "Functions, algebra & modeling",
        detail:
          "Build fluency with functions and algebraic technique, then apply them to real modelling problems.",
      },
      {
        title: "Calculus and applications",
        detail:
          "Differentiation and integration from first principles through to applied optimisation and kinematics.",
      },
      {
        title: "Statistics and probability",
        detail:
          "Distributions, hypothesis testing, and the GDC skills needed for accurate, efficient answers.",
      },
      {
        title: "Exam technique & timed drills",
        detail:
          "Method marks, clear working, and timed Paper 1 and Paper 2 practice to avoid careless loss.",
      },
    ],
    benefits: [
      "Formula-first revision tracks",
      "Practice-heavy problem solving",
      "Confidence-building mock exams",
    ],
  },
];

export const metrics = [
  { value: "1:1", label: "Mentor-led attention" },
  { value: "5", label: "IB subjects taught" },
  { value: "7", label: "Perfect scores achieved" },
  { value: "Free", label: "First consultation" },
];

export const features = [
  {
    title: "Mentor-led teaching",
    copy: "Learn from IB-focused mentors using examiner-aligned methods and feedback.",
  },
  {
    title: "Personalised learning paths",
    copy: "Guided revision and support tuned to each learner's pace and target grade.",
  },
  {
    title: "Mobile-first app access",
    copy: "Unlock notes, videos, and offline revision directly from the app.",
  },
  {
    title: "Responsive doubt resolution",
    copy: "Stay supported with prompt, mentor-led answers to your questions.",
  },
  {
    title: "Curated notes & resources",
    copy: "Access focused resources prepared by subject specialists across every programme.",
  },
  {
    title: "Progress tracking",
    copy: "Follow clear milestones, question practice, and steady improvement over time.",
  },
];

export type Review = {
  studentName: string;
  subject: string;
  score: string;
  quote: string;
};

export const reviews: Review[] = [
  {
    studentName: "Aryan Mehta",
    subject: "IB Economics HL",
    score: "7",
    quote:
      "I went from a predicted 5 to a final 7 in Economics. The way they break down Paper 3 calculations and essay structure is unlike anything I found elsewhere.",
  },
  {
    studentName: "Priya Sharma",
    subject: "IB Business Management HL",
    score: "7",
    quote:
      "Wadhwa Institute saved my IA. My Business IA went from a draft with no direction to a polished 7-scoring piece. The mentoring is genuinely exceptional.",
  },
  {
    studentName: "Kabir Thakur",
    subject: "IB French SL",
    score: "6",
    quote:
      "My French oral was my biggest fear. Three months of structured practice and I walked into the individual oral feeling completely prepared.",
  },
  {
    studentName: "Neha Gupta",
    subject: "IB Mathematics AA HL",
    score: "7",
    quote:
      "The GDC techniques and past paper strategies transformed my approach. I finally understood how to structure a 7-level response in Math.",
  },
  {
    studentName: "Ananya Reddy",
    subject: "IB English HL",
    score: "7",
    quote:
      "My Paper 2 comparative essays used to fall apart under time pressure. The structured frameworks and feedback here got me to a confident 7.",
  },
  {
    studentName: "Vivaan Kapoor",
    subject: "IB Mathematics AI HL",
    score: "6",
    quote:
      "The Exploration felt impossible until my mentor broke it down step by step. I submitted a piece I was genuinely proud of and jumped two grades.",
  },
  {
    studentName: "Saanvi Nair",
    subject: "IB Economics SL",
    score: "7",
    quote:
      "Diagrams and evaluation finally clicked. The way they teach you to plan a 15-marker in minutes is something I use in every exam now.",
  },
  {
    studentName: "Arjun Malhotra",
    subject: "IB Business Management SL",
    score: "6",
    quote:
      "The case study drills and IA mentoring were brilliant. I walked into Paper 1 knowing exactly how to apply the tools — no more guessing.",
  },
];

/**
 * Single source of truth for image assets. Each asset has a real target path
 * and an SVG fallback that shows until the real file is added to `public/assets/`.
 * Drop these files in to go live (no code change needed):
 *   /assets/logo.png · /assets/result-1.jpg · /assets/result-2.jpg
 */
export const siteAssets = {
  logo: "/assets/logo.jpg",
  logoFallback: "/assets/logo.svg",
  result1: "/assets/result-1.jpg",
  result1Fallback: "/assets/result-1.svg",
  result2: "/assets/result-2.jpg",
  result2Fallback: "/assets/result-2.svg",
};

// Canonical site URL used for metadata, canonicals, sitemap, robots, and JSON-LD.
// Resolution order:
//   1. NEXT_PUBLIC_SITE_URL  — set this to the real custom domain when you have one
//   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's production domain (auto, build-time)
//   3. fallback placeholder
// This guarantees canonicals point at the actual live deployment so Google can
// index it, even before a custom domain is connected.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;
  return "https://wadhwainstitute.in";
}

export const siteUrl = resolveSiteUrl();

export const siteContact = {
  email: "bhavyawadhwa97@gmail.com",
  phone: "+91 8010436968",
  phoneHref: "+918010436968",
  address: "A1/29, HUDA, Sushant Lok II, Sector 55, Gurugram, Haryana 122011",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122011",
  addressCountry: "IN",
  mapsUrl: "https://maps.app.goo.gl/ewvzpggCAMQfC1Nj7",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "App", href: "/app" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/privacy-policy" },
];
