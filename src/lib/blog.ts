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
  {
    slug: "ib-maths-aa-vs-ai-which-to-choose",
    title: "IB Maths AA vs AI: Which Should You Choose?",
    description:
      "IB Mathematics AA or AI, SL or HL? A clear guide to choosing the right IB Maths course for your university plans and strengths, from Wadhwa Institute.",
    date: "2026-06-16",
    readMins: 6,
    intro:
      "Choosing between IB Mathematics: Analysis & Approaches (AA) and Applications & Interpretation (AI) — and between SL and HL — is one of the most important decisions IB students make. Pick wrong and you risk a lower grade or a closed university door. Here is how to choose with confidence.",
    sections: [
      {
        heading: "AA vs AI — the core difference",
        paragraphs: [
          "AA is the more abstract, algebraic course, with a strong focus on calculus, proof, and pure mathematics. AI is more applied and data-driven, with statistics, modelling, and real-world contexts at its centre.",
          "Neither is universally 'harder' — they reward different strengths. AA suits students who enjoy manipulating equations and abstract reasoning; AI suits students who prefer interpreting data and applying maths to real problems.",
        ],
      },
      {
        heading: "Let your university course decide first",
        paragraphs: [
          "Before personal preference, check your target degree. Engineering, physics, mathematics, computer science, and many economics programmes typically expect (or strongly prefer) AA HL. Always confirm requirements on the university's website.",
          "If you are heading toward business, social sciences, design, or life sciences, AI can be a strong, well-aligned choice — and a higher grade in the right course beats a struggling one in the wrong course.",
        ],
      },
      {
        heading: "SL vs HL — be honest about workload",
        paragraphs: [
          "HL Maths is one of the most demanding IB subjects and needs consistent weekly practice. If maths is not central to your degree, a confident 7 at SL is usually better than a stressed 5 at HL.",
        ],
        bullets: [
          "Does my degree require HL Maths?",
          "How much weekly time can I realistically give it?",
          "Do I enjoy the topics in this course, or just tolerate them?",
        ],
      },
      {
        heading: "How coaching helps either way",
        paragraphs: [
          "Whichever path you choose, the skills that lift a grade are the same: fluent technique, clean working for method marks, GDC mastery, and timed exam practice. A specialist mentor can also help you scope a strong Exploration (IA).",
          "At Wadhwa Institute we coach both AA and AI at SL and HL — book a free consultation and we'll help you choose and then aim for a 7.",
        ],
      },
    ],
  },
  {
    slug: "ib-extended-essay-guide",
    title: "A Simple Guide to the IB Extended Essay",
    description:
      "How to plan, research, and write a strong IB Extended Essay (EE) — choosing a subject, framing a research question, and avoiding common mistakes.",
    date: "2026-06-17",
    readMins: 6,
    intro:
      "The Extended Essay is a 4,000-word independent research project and a core part of the IB Diploma. Done well, it can be one of the most rewarding pieces of work you produce — and it contributes to your core points. Here is a simple roadmap.",
    sections: [
      {
        heading: "Choose a subject you actually enjoy",
        paragraphs: [
          "You will spend months with this topic, so pick a subject and area you find genuinely interesting and where you can access reliable sources. Strong EEs are usually narrow and deep rather than broad and shallow.",
        ],
      },
      {
        heading: "Get the research question right",
        paragraphs: [
          "The single biggest predictor of a strong EE is a focused, answerable research question. It should be specific, analytical (not merely descriptive), and realistic to investigate within 4,000 words.",
          "Test your question by asking whether it invites analysis and evaluation — if it can be answered with a simple fact, narrow it further.",
        ],
      },
      {
        heading: "Plan structure and manage your time",
        paragraphs: [
          "Work backwards from your school deadlines and build in time for drafts and reflection sessions with your supervisor. A clear structure — introduction, methodology where relevant, analysis, and conclusion — keeps you within the word count.",
        ],
        bullets: [
          "Start early; the best EEs are not written the week before",
          "Keep a running bibliography from day one",
          "Use your supervisor meetings — they feed the reflection marks",
        ],
      },
      {
        heading: "Avoid the common pitfalls",
        paragraphs: [
          "The most frequent issues are a vague research question, description instead of analysis, weak source evaluation, and poor referencing. Each is fixable with early feedback.",
          "Wadhwa Institute mentors guide students through topic selection, research questions, and drafts — within academic-integrity rules. Reach out for a free consultation if you'd like structured EE support.",
        ],
      },
    ],
  },
  {
    slug: "ib-business-management-ia-top-marks",
    title: "IB Business Management IA: How to Score Top Marks",
    description:
      "A step-by-step guide to the IB Business Management Internal Assessment — choosing a real business issue, applying tools, and scoring in the top band.",
    date: "2026-06-18",
    readMins: 6,
    intro:
      "The IB Business Management IA rewards real analysis of a real organisation. Many students lose marks by being too descriptive or choosing a question they cannot properly research. Here is how to build an IA that lands in the top band.",
    sections: [
      {
        heading: "Pick a real, researchable business issue",
        paragraphs: [
          "Choose an actual organisation and a current decision or problem it faces — ideally one where you can gather genuine supporting documents. A focused issue beats a broad 'how can company X improve' question every time.",
        ],
      },
      {
        heading: "Frame a sharp research question",
        paragraphs: [
          "Your research question should be forward-looking and decision-oriented, allowing you to apply business tools and reach a justified recommendation. Phrase it so it can be answered with analysis, not just a description of the company.",
        ],
      },
      {
        heading: "Apply tools with purpose",
        paragraphs: [
          "Select a few relevant tools — such as SWOT, financial ratios, investment appraisal, or decision trees — and apply them directly to your evidence. Examiners reward integrated analysis that leads somewhere, not tools used in isolation.",
        ],
        bullets: [
          "Use supporting documents as genuine evidence, not decoration",
          "Show calculations and interpret what they mean",
          "End with a clear, justified recommendation",
        ],
      },
      {
        heading: "Evaluate and conclude",
        paragraphs: [
          "Top-band IAs weigh limitations, consider stakeholders, and reach a balanced judgement. Keep within the word count and make sure every section serves the research question.",
          "Wadhwa Institute mentors students through Business Management IAs from topic to final draft with examiner-aligned feedback. Book a free consultation to get started.",
        ],
      },
    ],
  },
  {
    slug: "ib-french-individual-oral-tips",
    title: "How to Prepare for the IB French Individual Oral",
    description:
      "Practical tips to prepare for the IB French B Individual Oral — describing the stimulus, structuring your response, and building fluency and confidence.",
    date: "2026-06-19",
    readMins: 5,
    intro:
      "For many students the IB French Individual Oral is the most nerve-wracking part of the course. The good news: it is highly preparable. With the right structure and consistent practice, you can walk in calm and confident.",
    sections: [
      {
        heading: "Understand exactly what's assessed",
        paragraphs: [
          "The oral assesses your ability to describe a visual stimulus, link it to the target culture, and then hold a natural conversation. You are marked on language, message, and interaction — not on having a 'perfect' opinion.",
        ],
      },
      {
        heading: "Build a flexible description framework",
        paragraphs: [
          "Practise a reusable structure for the stimulus: describe what you see, infer the context and message, and connect it to a theme and the French-speaking world. A framework means you never freeze, whatever image appears.",
        ],
        bullets: [
          "Learn connectors and opinion phrases until they're automatic",
          "Prepare vocabulary across all five themes",
          "Practise speaking aloud daily, even for a few minutes",
        ],
      },
      {
        heading: "Train the conversation, not just the monologue",
        paragraphs: [
          "Students often over-prepare the description and under-prepare the discussion. Rehearse answering follow-up questions and developing your answers with reasons and examples, so the conversation flows.",
        ],
      },
      {
        heading: "Simulate the real thing",
        paragraphs: [
          "Mock orals under timed conditions, with feedback on fluency and accuracy, are the fastest way to build confidence. At Wadhwa Institute we run full individual-oral simulations — book a free consultation to practise with a mentor.",
        ],
      },
    ],
  },
  {
    slug: "ib-vs-cbse-which-board-is-right",
    title: "IB vs CBSE: Which Board Is Right for Your Child?",
    description:
      "IB or CBSE? A balanced comparison of curriculum, assessment, university outcomes, and workload to help Gurugram parents choose the right board.",
    date: "2026-06-09",
    readMins: 7,
    intro:
      "Choosing between the IB Diploma and CBSE is one of the biggest decisions a parent makes. Both can lead to excellent universities — they simply suit different learners. Here is a balanced, jargon-free comparison.",
    sections: [
      {
        heading: "Teaching and learning style",
        paragraphs: [
          "The IB emphasises inquiry, critical thinking, research, and application — students write essays, conduct investigations, and connect subjects. CBSE is more structured and content-focused, with a strong emphasis on core concepts and board exams.",
          "Neither is 'better' — a curious, self-driven student often thrives in the IB, while a student who prefers clear structure and defined syllabi may prefer CBSE.",
        ],
      },
      {
        heading: "Assessment",
        paragraphs: [
          "IB blends final exams with continuous internal assessment (IAs), the Extended Essay, and TOK, so consistent effort across two years matters. CBSE places more weight on year-end board examinations.",
        ],
      },
      {
        heading: "University outcomes",
        paragraphs: [
          "Both boards are accepted widely in India and abroad. The IB is particularly well-recognised by international universities and develops research and writing skills that help in undergraduate study. CBSE aligns neatly with many Indian entrance exams.",
        ],
        bullets: [
          "Planning to study abroad? The IB's global recognition is a strong fit.",
          "Targeting Indian entrance exams? CBSE's structure aligns well.",
          "Either way, strong subject grades matter most.",
        ],
      },
      {
        heading: "Workload and support",
        paragraphs: [
          "The IB is demanding, especially at Higher Level — time management and good mentoring make a real difference. Many Gurugram families choose specialist IB coaching to stay on top of IAs, the EE, and exam technique.",
          "Wadhwa Institute supports IB students across English, French, Business Management, Economics, and Mathematics. Book a free consultation if you'd like help mapping the right path.",
        ],
      },
    ],
  },
  {
    slug: "ib-grading-system-explained",
    title: "How the IB Grading System Works (1–7 Explained)",
    description:
      "Understand the IB grading scale, the 45-point total, core points from TOK and the Extended Essay, and what you need to pass the IB Diploma.",
    date: "2026-06-11",
    readMins: 5,
    intro:
      "The IB scoring system confuses many students and parents at first. Here is a clear breakdown of how the points add up and what the numbers actually mean.",
    sections: [
      {
        heading: "Each subject is graded 1 to 7",
        paragraphs: [
          "You take six subjects, each graded from 1 (lowest) to 7 (highest). A 7 represents top-band performance. Three or four subjects are taken at Higher Level (HL) and the rest at Standard Level (SL).",
        ],
      },
      {
        heading: "The 45-point total",
        paragraphs: [
          "Six subjects give a maximum of 42 points. The final 3 'core' points come from Theory of Knowledge (TOK) and the Extended Essay (EE) combined, making the maximum total 45.",
          "A score around the high-30s is strong; 40+ is excellent and competitive for top universities.",
        ],
      },
      {
        heading: "Passing the Diploma",
        paragraphs: [
          "To earn the full Diploma you must meet a minimum points total and satisfy specific conditions across HL/SL subjects, TOK, the EE, and CAS. Your school will confirm the exact requirements for your cohort.",
        ],
        bullets: [
          "Don't neglect TOK and the EE — those core points are easy to underestimate",
          "A balanced profile across subjects is safer than relying on one strong score",
        ],
      },
      {
        heading: "How to push toward a 7",
        paragraphs: [
          "Top scores come from mastering command terms, exam technique, and the internal assessments — not just content. Targeted practice and feedback are the fastest route up the scale.",
          "Wadhwa Institute coaches students toward their target grades with structured revision and examiner-aligned feedback. Reach out for a free consultation.",
        ],
      },
    ],
  },
  {
    slug: "ib-tok-essay-guide",
    title: "IB TOK Essay: How to Get a Good Grade",
    description:
      "A clear guide to the IB Theory of Knowledge (TOK) essay — choosing a title, using knowledge questions, real-life examples, and balanced argument.",
    date: "2026-06-13",
    readMins: 6,
    intro:
      "The TOK essay rewards clear, balanced thinking about how we know what we know. It feels abstract at first, but a few principles make it very manageable.",
    sections: [
      {
        heading: "Choose your prescribed title carefully",
        paragraphs: [
          "You answer one of the prescribed titles set by the IB. Pick the one where you can explore at least two areas of knowledge with strong, contrasting real-life examples — not just the title that sounds easiest.",
        ],
      },
      {
        heading: "Build the essay around knowledge questions",
        paragraphs: [
          "A strong TOK essay analyses how knowledge is produced and justified, not the topic itself. Keep returning to knowledge questions and compare perspectives across areas of knowledge.",
        ],
      },
      {
        heading: "Use precise, real examples",
        paragraphs: [
          "Vague, generic examples weaken TOK essays. Use specific, well-chosen real-life situations and explain exactly how each one illuminates your argument.",
        ],
        bullets: [
          "Two contrasting areas of knowledge work better than one",
          "Always weigh counterclaims — balance scores well",
          "Link every example back to a knowledge question",
        ],
      },
      {
        heading: "Plan, then refine",
        paragraphs: [
          "Outline your claims, counterclaims, and examples before writing, and leave time to refine clarity. TOK marks reward a coherent, evaluative line of argument.",
          "Wadhwa Institute helps students structure and sharpen TOK essays. Book a free consultation for guidance.",
        ],
      },
    ],
  },
  {
    slug: "time-management-tips-for-ib-students",
    title: "Top Time-Management Tips for IB Students",
    description:
      "Beat IB stress with practical time-management strategies — balancing IAs, the EE, CAS, and exam prep without burning out.",
    date: "2026-06-15",
    readMins: 5,
    intro:
      "The IB workload is real, but it is manageable with a system. These are the habits that consistently separate calm, high-scoring students from overwhelmed ones.",
    sections: [
      {
        heading: "Work backwards from deadlines",
        paragraphs: [
          "Put every IA, EE milestone, and internal deadline into one calendar at the start of the term, then schedule backwards. Surprises cause most IB stress, and a single shared calendar removes them.",
        ],
      },
      {
        heading: "Protect time for the big-ticket tasks",
        paragraphs: [
          "IAs and the Extended Essay carry serious weight but are easy to postpone. Block regular, protected time for them early — small, steady progress beats last-minute panic.",
        ],
        bullets: [
          "Batch similar tasks together to reduce switching",
          "Use short, focused study blocks with breaks",
          "Review past-paper questions weekly, not only before exams",
        ],
      },
      {
        heading: "Don't let CAS slip",
        paragraphs: [
          "CAS is easy to forget until it becomes a scramble. Log activities and reflections as you go so it never threatens your Diploma.",
        ],
      },
      {
        heading: "Ask for help early",
        paragraphs: [
          "The students who cope best reach out before small gaps become big ones. A mentor can help you prioritise and keep momentum across all six subjects.",
          "Wadhwa Institute offers structured support and accountability for IB students. Book a free consultation to build a plan that fits your schedule.",
        ],
      },
    ],
  },
];
