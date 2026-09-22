// Public editions verified against the author's LinkedIn article metadata on 2026-09-17.
// Summaries are editorial descriptions; full articles remain linked at their source.
// LinkedIn's public archive is limited, so this is not a verified complete archive.
export type NewsletterArticle = { slug: string; title: string; category: string; summary: string; tags: string[]; sourceUrl: string; cover: string; publishedAt: string; author: string };

export const newsletterUrl = 'https://www.linkedin.com/newsletters/the-ceos-playbook-7236615376556445696';
export const categories = [
  [
    "AI Agents"
  ],
  [
    "AI Automation"
  ],
  [
    "AI Strategy"
  ],
  [
    "AI Tools and Productivity"
  ],
  [
    "Business Intelligence"
  ],
  [
    "Leadership and Growth"
  ]
] as const;
export const insights: NewsletterArticle[] = [
  {
    "slug": "sales-up-20-profit-down-what-should-your-ai-tell-you-do-umang-thakkar-nrz8c",
    "title": "Sales Are Up 20%. Profit Is Down. What Should Your AI Tell You to Do?",
    "category": "Business Intelligence",
    "summary": "Rising sales can hide shrinking margins. This edition explains how a structured decision card helps business owners examine the evidence, identify missing information, and choose a useful next action.",
    "tags": [
      "Business Analytics",
      "Decision Making"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/sales-up-20-profit-down-what-should-your-ai-tell-you-do-umang-thakkar-nrz8c",
    "cover": "/blog/newsletter/nrz8c.jpg",
    "publishedAt": "2026-09-12",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "most-valuable-ai-your-business-look-like-chatbot-umang-thakkar-4fepc",
    "title": "The most valuable AI in your business will not look like a chatbot.",
    "category": "AI Agents",
    "summary": "Explore the shift from asking a chatbot individual questions to delegating complete business workflows. A practical audit helps owners decide what requires their judgment, what needs approval, and what can be delegated.",
    "tags": [
      "AI Agents",
      "Workflow Automation"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/most-valuable-ai-your-business-look-like-chatbot-umang-thakkar-4fepc",
    "cover": "/blog/newsletter/4fepc.jpg",
    "publishedAt": "2026-08-29",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "developer-quoted-25000-app-we-built-live-class-one-umang-thakkar-umgye",
    "title": "“A developer quoted ₹25,000 for this app. We built it live, in class, in one afternoon.”",
    "category": "AI Tools and Productivity",
    "summary": "A garment-rental business becomes a practical lesson in building software with AI. The article explains why researching the problem, preparing a clear brief, and testing one feature at a time matter.",
    "tags": [
      "AI Tools",
      "Software Development"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/developer-quoted-25000-app-we-built-live-class-one-umang-thakkar-umgye",
    "cover": "/blog/newsletter/umgye.jpg",
    "publishedAt": "2026-08-01",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "saturday-six-one-line-story-model-tool-prompt-question-umang-thakkar-rj4we",
    "title": "THE SATURDAY SIX One line. One story. One model. One tool. One prompt. One question. Every Saturday",
    "category": "AI Tools and Productivity",
    "summary": "The Saturday Six brings together a business story, a model, a tool, and a practical prompt. This edition focuses on checking real outcomes and independently reviewing AI-generated work.",
    "tags": [
      "AI Tools",
      "Decision Making"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/saturday-six-one-line-story-model-tool-prompt-question-umang-thakkar-rj4we",
    "cover": "/blog/newsletter/rj4we.png",
    "publishedAt": "2026-07-25",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "i-asked-14-cr-surat-trader-show-me-his-customer-list-umang-thakkar-olz7e",
    "title": "I Asked a ₹14 Cr Surat Trader to Show Me His Customer List.",
    "category": "Business Intelligence",
    "summary": "Conflicting customer records can undermine an AI project before it starts. A Surat trader's example shows why cleaning and reconciling business information should come before buying another automation tool.",
    "tags": [
      "Business Analytics",
      "AI Readiness"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/i-asked-14-cr-surat-trader-show-me-his-customer-list-umang-thakkar-olz7e",
    "cover": "/blog/newsletter/olz7e.png",
    "publishedAt": "2026-07-11",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "he-texted-me-sir-paisa-waste-ho-gaya-umang-thakkar-tkh6c",
    "title": "He Texted Me \"Sir, Paisa Waste Ho Gaya\"",
    "category": "AI Automation",
    "summary": "Starting with a difficult judgment-heavy task can make a promising AI rollout disappointing. This article describes a staged approach that begins with repetitive work and builds confidence through measurable results.",
    "tags": [
      "Workflow Automation",
      "AI Readiness"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/he-texted-me-sir-paisa-waste-ho-gaya-umang-thakkar-tkh6c",
    "cover": "/blog/newsletter/tkh6c.jpg",
    "publishedAt": "2026-06-13",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "two-distributors-same-surat-market-umang-thakkar-cd4wc",
    "title": "Two Distributors in the Same Surat Market.",
    "category": "AI Strategy",
    "summary": "Two distributors provide the backdrop for a discussion of compounding improvements. The article examines how accumulated business context, team skills, and better workflows can shape the long-term value of AI adoption.",
    "tags": [
      "Business Growth",
      "AI Strategy"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/two-distributors-same-surat-market-umang-thakkar-cd4wc",
    "cover": "/blog/newsletter/cd4wc.jpg",
    "publishedAt": "2026-06-06",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "sir-ai-replace-us-conversation-every-indian-business-owner-thakkar-ql8zc",
    "title": "Will AI Replace Us? Helping Your Team Become AI Believers",
    "category": "Leadership and Growth",
    "summary": "AI adoption changes how people work, and teams need an honest conversation before the rollout. This edition explores how owners can address job concerns, explain changing responsibilities, and involve employees in implementation.",
    "tags": [
      "Team Leadership",
      "AI Readiness"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/sir-ai-replace-us-conversation-every-indian-business-owner-thakkar-ql8zc",
    "cover": "/blog/newsletter/ql8zc.jpg",
    "publishedAt": "2026-05-23",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "should-you-hire-new-employee-automate-role-5-v-test-saved-thakkar-xntmc",
    "title": "Should You Hire or Automate? The 5-V Test",
    "category": "AI Automation",
    "summary": "Before filling a new role, examine the work it contains. The article introduces a structured assessment for distinguishing suitable automation tasks from responsibilities that depend on human judgment and relationships.",
    "tags": [
      "Workflow Automation",
      "Team Leadership"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/should-you-hire-new-employee-automate-role-5-v-test-saved-thakkar-xntmc",
    "cover": "/blog/newsletter/xntmc.jpg",
    "publishedAt": "2026-05-16",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "4-things-ai-actually-does-inside-your-business-always-umang-thakkar-c8orc",
    "title": "What AI Can and Cannot Do Inside Your Business",
    "category": "AI Strategy",
    "summary": "A framework for understanding where AI helps and where human responsibility remains essential. The article contrasts suitable business tasks with ambiguous decisions, relationship-sensitive work, and other limits owners should recognize.",
    "tags": [
      "AI Strategy",
      "Decision Making"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/4-things-ai-actually-does-inside-your-business-always-umang-thakkar-c8orc",
    "cover": "/blog/newsletter/c8orc.jpg",
    "publishedAt": "2026-05-07",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "truth-most-ai-vendors-wont-tell-you-doesnt-transform-bad-thakkar-ogf3c",
    "title": "The Truth Most AI Vendors Won't Tell You: AI Doesn't Transform Bad Businesses. It Magnifies Them.",
    "category": "AI Strategy",
    "summary": "AI amplifies the processes and information a business already has. This edition examines why documented knowledge, reliable records, and clear decision rules form the foundation for a useful implementation.",
    "tags": [
      "AI Strategy",
      "AI Readiness"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/truth-most-ai-vendors-wont-tell-you-doesnt-transform-bad-thakkar-ogf3c",
    "cover": "/blog/newsletter/ogf3c.jpg",
    "publishedAt": "2026-04-25",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "i-set-up-ai-employees-200-businesses-umang-thakkar-wtoxc",
    "title": "I Set Up AI Employees for 200+ Businesses.",
    "category": "AI Agents",
    "summary": "An AI assistant needs business context, clear responsibilities, useful integrations, and ongoing supervision. This seven-step approach explains how to move beyond isolated chats toward a managed operational assistant.",
    "tags": [
      "AI Agents",
      "Team Leadership"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/i-set-up-ai-employees-200-businesses-umang-thakkar-wtoxc",
    "cover": "/blog/newsletter/wtoxc.jpg",
    "publishedAt": "2026-04-18",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "i-gave-52-indian-businesses-ai-employee-heres-what-actually-thakkar-qatqc",
    "title": "I Gave 52 Indian Businesses an AI Employee. Here's What Actually Happened.",
    "category": "AI Agents",
    "summary": "What changes when AI becomes part of daily operations? This edition discusses recurring work such as invoice processing, customer queries, and morning briefings, and the difference between experimentation and implementation.",
    "tags": [
      "AI Agents",
      "Workflow Automation"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/i-gave-52-indian-businesses-ai-employee-heres-what-actually-thakkar-qatqc",
    "cover": "/blog/newsletter/qatqc.jpg",
    "publishedAt": "2026-04-11",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "i-gave-claude-access-my-computer-now-runs-half-business-umang-thakkar-mmaaf",
    "title": "I Gave Claude Access to My Computer. It Now Runs Half My Business.",
    "category": "AI Tools and Productivity",
    "summary": "An account of using Claude Cowork for operational tasks across files, reports, and recurring business work. The article explores moving beyond email drafting toward assistants that help execute a defined workflow.",
    "tags": [
      "AI Tools",
      "Workflow Automation"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/i-gave-claude-access-my-computer-now-runs-half-business-umang-thakkar-mmaaf",
    "cover": "/blog/newsletter/mmaaf.png",
    "publishedAt": "2026-03-21",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "i-help-200-companies-use-ai-here-7-things-actually-work-umang-thakkar-z7frf",
    "title": "I Help 200+ Companies Use AI. Here Are the 7 Things That Actually Work.",
    "category": "AI Automation",
    "summary": "A collection of business-focused AI applications, including WhatsApp responses, reporting, content creation, and inventory insights. The emphasis is on choosing practical workflows and evaluating the value they create.",
    "tags": [
      "Workflow Automation",
      "Business Analytics"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/i-help-200-companies-use-ai-here-7-things-actually-work-umang-thakkar-z7frf",
    "cover": "/blog/newsletter/z7frf.png",
    "publishedAt": "2026-03-15",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "why-working-harder-scale-your-business-what-umang-thakkar-vmvxf",
    "title": "Why Working Harder Will Not Scale Your Business. (And what will.)",
    "category": "Leadership and Growth",
    "summary": "A business that depends on its owner for every decision becomes harder to manage as it grows. Explore how documented systems, delegation, and a sensible sequence of automation can reduce that dependency.",
    "tags": [
      "Business Growth",
      "Team Leadership"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/why-working-harder-scale-your-business-what-umang-thakkar-vmvxf",
    "cover": "/blog/newsletter/vmvxf.jpg",
    "publishedAt": "2026-03-08",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "why-most-business-owners-learning-ai-backwards-what-actually-thakkar-y3icf",
    "title": "Why Most Business Owners Are Learning AI Backwards (And What Actually Works)",
    "category": "AI Strategy",
    "summary": "Learning tools without a clear business problem can leave owners busy but stuck. This article argues for identifying a costly, repetitive challenge first, then learning the AI capabilities needed to address it.",
    "tags": [
      "AI Strategy",
      "AI Readiness"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/why-most-business-owners-learning-ai-backwards-what-actually-thakkar-y3icf",
    "cover": "/blog/newsletter/y3icf.png",
    "publishedAt": "2026-01-19",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "invisible-workforce-how-ai-agents-reshaping-small-business-thakkar-wmnhf",
    "title": "The Invisible Workforce: How AI Agents Are Reshaping Small Business",
    "category": "AI Agents",
    "summary": "AI agents can carry out connected tasks rather than only answer questions. This article explores their role in lead follow-up, customer support, and routine operations, with a gradual approach to adoption.",
    "tags": [
      "AI Agents",
      "Workflow Automation"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/invisible-workforce-how-ai-agents-reshaping-small-business-thakkar-wmnhf",
    "cover": "/blog/newsletter/wmnhf.png",
    "publishedAt": "2025-09-30",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "ai-business-scaling-blueprint-2025-second-edition-from-thakkar-a9pif",
    "title": "The AI Business Scaling Blueprint: 2025 Second Edition - From Operational Chaos to Profitable Growth in 42 Days\"",
    "category": "AI Strategy",
    "summary": "A phased roadmap for bringing AI into a growing business. The guide covers assessing processes, choosing tools, preparing the team, testing workflows, and measuring results before expanding the implementation.",
    "tags": [
      "AI Strategy",
      "Business Growth"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/ai-business-scaling-blueprint-2025-second-edition-from-thakkar-a9pif",
    "cover": "/blog/newsletter/a9pif.png",
    "publishedAt": "2025-07-13",
    "author": "Dr. CA Umang Ratani"
  },
  {
    "slug": "7-pillar-framework-helped-me-scale-100-businesses-without-thakkar-zhxif",
    "title": "The 7-Pillar Framework That Helped Me Scale 100+ Businesses (Without Breaking Them)",
    "category": "Leadership and Growth",
    "summary": "Scaling requires more than adding people and working longer hours. This framework brings together leadership, documented processes, financial understanding, team development, and customer-focused systems to support sustainable business growth.",
    "tags": [
      "Business Growth",
      "Team Leadership"
    ],
    "sourceUrl": "https://www.linkedin.com/pulse/7-pillar-framework-helped-me-scale-100-businesses-without-thakkar-zhxif",
    "cover": "/blog/newsletter/zhxif.png",
    "publishedAt": "2025-06-23",
    "author": "Dr. CA Umang Ratani"
  }
];
export const topics = [
  "AI Agents",
  "AI Readiness",
  "AI Strategy",
  "AI Tools",
  "Business Analytics",
  "Business Growth",
  "Decision Making",
  "Software Development",
  "Team Leadership",
  "Workflow Automation"
];
export const formatPublishDate = (date: string) => new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date));
