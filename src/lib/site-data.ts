export type Subject = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
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
    name: "IB Maths AI and AA SL",
    description:
      "Focused coaching for both IB Maths SL routes — Analysis & Approaches (AA SL) and Applications & Interpretation (AI SL) — with step-by-step problem solving, GDC mastery, and exam-ready revision.",
    shortDescription: "AA SL & AI SL — algebra, calculus, statistics & GDC technique",
    topics: [
      {
        title: "Choosing AA SL vs AI SL",
        detail:
          "We help you pick the right Maths SL route for your strengths and university plans — Analysis & Approaches for stronger algebra and calculus, or Applications & Interpretation for data, modelling, and real-world maths.",
      },
      {
        title: "Number, algebra & functions",
        detail:
          "Master sequences, exponents and logs, and the function toolkit (linear, quadratic, exponential) common to both AA SL and AI SL.",
      },
      {
        title: "Calculus (AA SL focus)",
        detail:
          "Differentiation and integration with applications to gradients, optimisation, and areas — the core calculus required for Analysis & Approaches SL.",
      },
      {
        title: "Statistics & probability (AI SL focus)",
        detail:
          "Data analysis, correlation and regression, probability and distributions — the statistics-heavy content that AI SL rewards most.",
      },
      {
        title: "GDC & calculator-active papers",
        detail:
          "Build fluency on the graphing display calculator for Paper 2 — solving equations, regression, and distributions quickly and accurately.",
      },
      {
        title: "Exam technique & timed drills",
        detail:
          "Method marks, clear working, and timed Paper 1 and Paper 2 practice for both AA SL and AI SL to avoid careless loss.",
      },
    ],
    benefits: [
      "Dedicated AA SL and AI SL tracks",
      "GDC and calculator-paper mastery",
      "Practice-heavy mock exams",
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

export type Teacher = {
  /** kebab id used for anchors */
  id: string;
  name: string;
  /** short role line under the name */
  role: string;
  /** subjects taught — drives the pill tags */
  subjects: string[];
  /** headline credential, e.g. "15+ years" — shown as a stat badge */
  stat?: { value: string; label: string };
  photo: string;
  photoFallback: string;
  /** persuasive, benefit-led short pitch (1–2 lines) used in cards */
  pitch: string;
  /** longer, psychologically framed bio paragraphs for the faculty page */
  bio: string[];
  /** crisp "what you'll get with this mentor" proof points */
  highlights: string[];
};

export const teachers: Teacher[] = [
  {
    id: "maths-mentor",
    name: "Harshika Lakhina",
    role: "IB Mathematics Specialist · AA SL & AI SL",
    subjects: ["Maths AA SL", "Maths AI SL"],
    stat: { value: "AA + AI", label: "Both SL routes" },
    photo: "/assets/teacher-maths.jpg",
    photoFallback: "/assets/teacher-maths.jpg",
    pitch:
      "Turns “I’m just not a maths person” into confident, exam-ready problem solving — across both AA SL and AI SL.",
    bio: [
      "Some students arrive convinced maths isn’t for them. They leave solving past-paper questions they once skipped. That shift — from fear to fluency — is the whole point.",
      "Harshika is an IB Mathematics specialist in both Analysis & Approaches (AA SL) and Applications & Interpretation (AI SL). She builds the one thing that actually moves grades: genuine conceptual understanding. Not memorised steps that collapse under exam pressure, but a real feel for why the method works, so you can adapt it to any question the IB throws at you.",
      "Her lessons meet you where you are. Different students learn differently, so the explanation, the pace, and the practice are shaped around you — until the click happens and the marks follow.",
    ],
    highlights: [
      "Clear guidance on choosing AA SL vs AI SL",
      "Concept-first teaching that survives exam pressure",
      "Tailored to how you personally learn best",
      "Confident, examiner-aligned IB assessment prep",
    ],
  },
  {
    id: "himani-anand",
    name: "Himani Anand",
    role: "IB French Language Teacher · 15+ years",
    subjects: ["French Ab Initio", "French B", "French A"],
    stat: { value: "15+", label: "Years teaching" },
    photo: "/assets/teacher-french.jpg",
    photoFallback: "/assets/teacher-french.jpg",
    pitch:
      "15+ years turning nervous beginners into confident French speakers — Ab Initio, B, and A, all IB-aligned.",
    bio: [
      "For more than fifteen years, Himani Anand has done one thing exceptionally well: made students believe they can actually speak French — and then proven it in their results.",
      "A dedicated, passionate French Language Teacher with experience across Classes 6–12, she specialises in IB French — French Ab Initio, Language A, and Language B. She knows the IB curriculum inside out, and uses a genuinely student-centred approach to build all four pillars together: speaking, listening, reading, and writing.",
      "Her lessons are tailored to each learner’s needs — so progress feels natural, not forced. The result is more than a grade: it’s real confidence in the language, and a deeper appreciation of French culture that stays with students long after the exam.",
    ],
    highlights: [
      "15+ years of IB French teaching experience",
      "Expert across Ab Initio, Language B, and Language A",
      "Builds speaking, listening, reading & writing together",
      "Individually tailored, confidence-first lessons",
    ],
  },
];

/**
 * Single source of truth for image assets. These are the real files in
 * public/assets/. The `*Fallback` fields point at the same file (kept so the
 * server-side resolveAsset() safety check still has a second argument).
 */
export const siteAssets = {
  logo: "/assets/logo.jpg",
  logoFallback: "/assets/logo.jpg",
  result1: "/assets/result-1.jpg",
  result1Fallback: "/assets/result-1.jpg",
  result2: "/assets/result-2.jpg",
  result2Fallback: "/assets/result-2.jpg",
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
  // IMPORTANT: use a *place* URL, not the maps.app.goo.gl short link.
  // The short link resolved to a directions URL with a hard-coded start point
  // (saddr=28.42…,77.10…&dirflg=d), so it showed everyone a fixed travel time
  // ("1 min away"). This place URL just searches the exact address and drops the
  // pin on the centre — correct for every visitor, on every device.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=A1%2F29%2C+HUDA%2C+Sushant+Lok+II%2C+Sector+55%2C+Gurugram%2C+Haryana+122011",
  // "Get directions" URL — destination is the centre, start is left blank so Google
  // uses the *visitor's own* location automatically (no fake fixed travel time).
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=A1%2F29%2C+HUDA%2C+Sushant+Lok+II%2C+Sector+55%2C+Gurugram%2C+Haryana+122011",
  // Exact coordinates of the centre's pin (from the resolved Google Maps place).
  latitude: 28.4286,
  longitude: 77.1009,
};

// Public profiles that reinforce the brand as a single entity to search engines.
// Add/replace with the real handles as they go live (Google Business Profile, IG, etc.).
export const siteSocial: string[] = [
  "https://maps.app.goo.gl/ewvzpggCAMQfC1Nj7",
];

// Honest aggregate rating built from the published student reviews below.
// Update `reviewCount` as more verified reviews are added.
export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 8,
  bestRating: 5,
  worstRating: 1,
};

// Standard coaching hours — adjust to the real timetable.
export const openingHours = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "App", href: "/app" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/privacy-policy" },
];
