export type Topic = {
  name: string;
  videoCount: number;
  noteCount: number;
};

export type Subject = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  accent: string;
  difficulty: string;
  passRate: number;
  enrolledCount: number;
  faculty: string[];
  topics: Topic[];
  benefits: string[];
};

export const subjects: Subject[] = [
  {
    slug: "english",
    name: "English",
    description:
      "Build confidence in literary analysis, language skills, and exam technique with guidance designed for IB learners.",
    shortDescription: "Literature, Language & Literature, and English B pathways",
    accent: "from-emerald-500 to-emerald-300",
    difficulty: "Intermediate",
    passRate: 92,
    enrolledCount: 240,
    faculty: [
      "Aisha Patel — M.A. English Literature, Cambridge University",
      "Rohan Mehta — IB English Examiner, 8 years of coaching",
    ],
    topics: [
      { name: "Close reading & textual analysis", videoCount: 9, noteCount: 12 },
      { name: "Essay writing & argumentation", videoCount: 7, noteCount: 10 },
      { name: "Paper 1 and Paper 2 strategy", videoCount: 6, noteCount: 8 },
      { name: "Internal assessment support", videoCount: 5, noteCount: 7 },
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
    accent: "from-sky-500 to-cyan-300",
    difficulty: "Beginner to Advanced",
    passRate: 89,
    enrolledCount: 180,
    faculty: [
      "Mélanie Laurent — DELF-certified language coach",
      "Kavya Pillai — IB French mentor with 7 years experience",
    ],
    topics: [
      { name: "Oral fluency and pronunciation", videoCount: 8, noteCount: 9 },
      { name: "Reading comprehension drills", videoCount: 6, noteCount: 7 },
      { name: "Essay and email writing", videoCount: 5, noteCount: 6 },
      { name: "Mock speaking exams", videoCount: 4, noteCount: 5 },
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
    accent: "from-amber-500 to-yellow-300",
    difficulty: "Advanced",
    passRate: 94,
    enrolledCount: 215,
    faculty: [
      "Ishaan Verma — MBA candidate, strategic management specialist",
      "Nina Rao — IB Business Management mentor with case analysis expertise",
    ],
    topics: [
      { name: "Marketing strategy & analysis", videoCount: 8, noteCount: 11 },
      { name: "Finance, operations & leadership", videoCount: 7, noteCount: 9 },
      { name: "Paper 1 case study handling", videoCount: 6, noteCount: 8 },
      { name: "Exam-ready revision packs", videoCount: 5, noteCount: 7 },
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
    accent: "from-violet-500 to-fuchsia-300",
    difficulty: "Advanced",
    passRate: 91,
    enrolledCount: 196,
    faculty: [
      "Arjun Kapoor — Economics faculty with IB exam expertise",
      "Dr. Kiran Menon — University tutor and mentor",
    ],
    topics: [
      { name: "Demand, supply & market equilibrium", videoCount: 7, noteCount: 9 },
      { name: "Macroeconomics and policy analysis", videoCount: 8, noteCount: 10 },
      { name: "Data-based essay writing", videoCount: 6, noteCount: 8 },
      { name: "Revision workshops and past papers", videoCount: 6, noteCount: 7 },
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
    accent: "from-rose-500 to-orange-300",
    difficulty: "Advanced",
    passRate: 90,
    enrolledCount: 202,
    faculty: [
      "Sahil Chawla — Math mentor and problem-solving coach",
      "Priya Desai — IB Mathematics specialist",
    ],
    topics: [
      { name: "Functions, algebra & modeling", videoCount: 9, noteCount: 12 },
      { name: "Calculus and applications", videoCount: 8, noteCount: 10 },
      { name: "Statistics and probability", videoCount: 7, noteCount: 9 },
      { name: "Exam technique & timed drills", videoCount: 6, noteCount: 7 },
    ],
    benefits: [
      "Formula-first revision tracks",
      "Practice-heavy problem solving",
      "Confidence-building mock exams",
    ],
  },
];

export const metrics = [
  { value: "Premium", label: "Learning experience" },
  { value: "95%", label: "IB pass rate" },
  { value: "99.9%", label: "Uptime guarantee" },
  { value: "15+", label: "Years of excellence" },
];

export const features = [
  {
    title: "Expert faculty",
    copy: "Learn from mentors trained in top universities and IB exam standards.",
  },
  {
    title: "Personalized learning paths",
    copy: "Progress tracking, guided revisions, and support for every pace of learner.",
  },
  {
    title: "Mobile-first app access",
    copy: "Unlock notes, videos, and offline revision directly from the app.",
  },
  {
    title: "24/7 doubt resolution",
    copy: "Stay supported through community learning and responsive mentor guidance.",
  },
  {
    title: "Comprehensive notes & video library",
    copy: "Access premium resources curated by subject specialists across all programs.",
  },
  {
    title: "Real-time performance analytics",
    copy: "Track improvement with clear milestones, question practice, and engagement insights.",
  },
];

const createStudentPortrait = (
  name: string,
  startColor: string,
  endColor: string,
) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="280" viewBox="0 0 320 280">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="320" height="280" rx="28" fill="url(#bg)" />
      <circle cx="160" cy="98" r="62" fill="#0f172a" opacity="0.16" />
      <path d="M96 230c18-48 54-70 64-70s46 22 64 70" fill="#0f172a" opacity="0.12" />
      <circle cx="160" cy="110" r="44" fill="#f8fafc" />
      <path d="M130 104c8-19 23-30 30-30 7 0 22 11 30 30" fill="#0f172a" opacity="0.88" />
      <path d="M128 130c7 12 23 18 32 18 9 0 25-6 32-18" fill="#0f172a" opacity="0.88" />
      <circle cx="143" cy="106" r="3.5" fill="#0f172a" />
      <circle cx="177" cy="106" r="3.5" fill="#0f172a" />
      <path d="M146 132c5 4 11 6 14 6 3 0 9-2 14-6" fill="none" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" />
      <text x="160" y="238" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#f8fafc">${name}</text>
    </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export type StudentResult = {
  name: string;
  subject: string;
  marks: string;
  grade: string;
  exam: string;
  image: string;
  note: string;
};

export const studentResults: StudentResult[] = [
  {
    name: "Aanya Shah",
    subject: "English",
    marks: "45/45",
    grade: "7",
    exam: "May 2026 Mock IA",
    image: createStudentPortrait("Aanya", "#22c55e", "#0f172a"),
    note: "Top scorer in literature and Paper 2 revision",
  },
  {
    name: "Kabir Menon",
    subject: "Economics",
    marks: "42/45",
    grade: "6",
    exam: "April 2026 Unit Test",
    image: createStudentPortrait("Kabir", "#8b5cf6", "#0f172a"),
    note: "Improved diagram-based answers and evaluation technique",
  },
  {
    name: "Nisha Verma",
    subject: "French",
    marks: "41/45",
    grade: "6",
    exam: "Oral Proficiency Check",
    image: createStudentPortrait("Nisha", "#38bdf8", "#0f172a"),
    note: "Consistent speaking practice and grammar confidence",
  },
  {
    name: "Arjun Khosla",
    subject: "Business Management",
    marks: "40/45",
    grade: "6",
    exam: "Case Study Assessment",
    image: createStudentPortrait("Arjun", "#f59e0b", "#0f172a"),
    note: "Strong case analysis and strategy framework application",
  },
  {
    name: "Priya Iyer",
    subject: "Mathematics",
    marks: "43/45",
    grade: "7",
    exam: "Calculator & Non-calculator Revision",
    image: createStudentPortrait("Priya", "#f43f5e", "#0f172a"),
    note: "Focused on timed problem-solving and accuracy",
  },
  {
    name: "Dev Gupta",
    subject: "English",
    marks: "39/45",
    grade: "5",
    exam: "Term-end Assessment",
    image: createStudentPortrait("Dev", "#14b8a6", "#0f172a"),
    note: "Made rapid progress with essay structure and feedback",
  },
];

export const reviews = [
  {
    studentName: "Anya G.",
    subject: "English",
    rating: 5,
    title: "My confidence jumped before the final exams",
    body:
      "The lessons made complex texts feel approachable and the feedback helped me improve faster than I expected.",
    resultScore: "45/45",
    verificationBadge: true,
    engagement: "Verified enrollment",
  },
  {
    studentName: "Rohit S.",
    subject: "Economics",
    rating: 5,
    title: "Diagram practice and evaluation drills made a huge difference",
    body:
      "The revision structure helped me improve my writing and retain theory without feeling overwhelmed.",
    resultScore: "42/45",
    verificationBadge: true,
    engagement: "+3 grade improvement",
  },
  {
    studentName: "Mira K.",
    subject: "Business Management",
    rating: 4.8,
    title: "Clear strategy guides and real-world case support",
    body:
      "The case study approach felt practical and taught me how to think like an IB student rather than just memorize.",
    resultScore: "40/45",
    verificationBadge: true,
    engagement: "High-achiever spotlight",
  },
  {
    studentName: "Sofia L.",
    subject: "French",
    rating: 5,
    title: "My speaking confidence improved within weeks",
    body:
      "The speaking sessions and revision packs made it easy to prepare for oral exams and stay consistent.",
    resultScore: "41/45",
    verificationBadge: true,
    engagement: "Verified enrollment",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "App", href: "/app" },
  { label: "Legal", href: "/privacy-policy" },
];
