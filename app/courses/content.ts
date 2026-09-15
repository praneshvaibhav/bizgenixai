// Course content supplied in Bizgenix_Courses_Page_Content_Detailed.pdf.
export const enquire = (topic: string) => `https://wa.me/918780671906?text=${encodeURIComponent(`Hi Bizgenix, I'd like to know more about ${topic}. Please share the details and next steps.`)}`;
export const communityUrl = enquire('joining the Bizgenix AI learning community');
export const corporateUrl = enquire('a customized corporate AI training program for our team');

export const courses = [
  { id: 'ai-foundations', title: 'AI Foundations for Everyone', level: 'Beginner', category: 'Foundations', image: "/courses/ai-foundations.webp", imageAlt: "Participants at a Bizgenix AI learning workshop in Surat", imagePosition: "50% 50%", outcome: 'Understand AI concepts, tools, opportunities and responsible use without requiring a technical background.' },
  { id: 'prompt-engineering', title: 'ChatGPT and Prompt Engineering Masterclass', level: 'Beginner to Intermediate', category: 'Prompt engineering', image: "/courses/prompt-engineering.webp", imageAlt: "Phone displaying OpenAI beside a laptop with the ChatGPT interface", imagePosition: "50% 50%", outcome: 'Learn structured prompts for business writing, research, marketing, analysis and productivity.' },
  { id: 'n8n-automation', title: 'AI Automation with n8n', level: 'Intermediate', category: 'Automation', image: "/courses/n8n-automation.webp", imageAlt: "Developer working with application code across two office monitors", imagePosition: "50% 50%", outcome: 'Build workflows that connect applications, move data, trigger actions and automate repetitive business processes.' },
  { id: 'voice-agents', title: 'AI Voice Agents', level: 'Intermediate', category: 'Voice AI', image: "/courses/voice-agents.webp", imageAlt: "Customer support professional speaking through a headset while working on a laptop", imagePosition: "50% 50%", outcome: 'Understand and build multilingual voice systems for qualification, support, follow-up, booking and customer engagement.' },
  { id: 'whatsapp-automation', title: 'WhatsApp AI Automation', level: 'Intermediate', category: 'Customer communication', image: "/courses/whatsapp-automation.webp", imageAlt: "Person holding a smartphone displaying WhatsApp Messenger", imagePosition: "50% 50%", outcome: 'Automate lead nurturing, customer support, reminders, notifications and team workflows through WhatsApp.' },
  { id: 'business-leaders', title: 'AI for Business Leaders', level: 'Executive', category: 'Leadership & strategy', image: "/courses/business-leaders.webp", imageAlt: "Business team collaborating around a table with laptops", imagePosition: "50% 35%", outcome: 'A strategic program focused on AI adoption, use-case selection, implementation planning, governance and ROI.' },
  { id: 'sales-marketing', title: 'AI for Sales and Marketing', level: 'Beginner to Intermediate', category: 'Sales & marketing', image: "/courses/sales-marketing.webp", imageAlt: "Person reviewing a marketing analytics dashboard on a laptop", imagePosition: "50% 50%", outcome: 'Use AI for lead generation, campaign planning, content, follow-ups, analysis and customer communication.' },
  { id: 'finance-operations', title: 'AI for Finance and Operations', level: 'Intermediate', category: 'Finance & operations', image: "/courses/finance-operations.webp", imageAlt: "Person using a calculator to review printed financial charts and reports", imagePosition: "50% 50%", outcome: 'Apply AI to reporting, reconciliation, receivables, operational visibility and management decision-making.' },
] as const;

export const learningPaths = [
  { name: 'AI for Business Owners', audience: 'Founders · Entrepreneurs · CEOs', description: 'Identify AI opportunities, automate operations and build a clear AI roadmap.', topics: ['AI strategy for business', 'Process automation', 'AI for sales and customer service', 'AI ROI and implementation planning'], href: '#featured-courses' },
  { name: 'AI for Professionals', audience: 'Working professionals', description: 'Improve productivity, decision-making and service delivery using AI tools.', topics: ['Prompt engineering', 'AI productivity systems', 'Research and reporting', 'Role-specific AI workflows'], href: '#featured-courses' },
  { name: 'AI for Students', audience: 'Students · Fresh graduates', description: 'Get practical exposure to AI tools, automation and business applications.', topics: ['AI foundations', 'Portfolio projects', 'Automation basics', 'Career-ready AI skills'], href: '#featured-courses' },
  { name: 'Corporate AI Training', audience: 'Organizations · Teams', description: 'Upskill teams, create responsible AI practices and improve company-wide productivity.', topics: ['Department-specific training', 'Live use cases', 'Custom workshops', 'Post-training implementation guidance'], href: '#corporate-training' },
];

export const learningOutcomes = [
  ['AI Fundamentals', 'Understand AI, generative AI, machine learning, large language models and the role of AI in modern business.'],
  ['Prompt Engineering', 'Learn structured prompting methods for research, writing, strategy, analysis, marketing, sales and business operations.'],
  ['AI Productivity', 'Reduce repetitive work in emails, reports, presentations, research, meetings, documentation and planning.'],
  ['Business Automation', 'Create workflows that connect apps, process data, send notifications and perform routine tasks.'],
  ['AI Agents', 'Understand how intelligent assistants handle lead qualification, support, follow-ups, appointment booking and internal operations.'],
  ['Voice and WhatsApp AI', 'Explore multilingual voice agents, WhatsApp automation and customer communication systems.'],
  ['Business Intelligence', 'Turn business data into insights using analytics, dashboards, reports and AI-assisted decision support.'],
  ['AI Strategy and ROI', 'Identify the right AI opportunities, prioritise implementation and track measurable business outcomes.'],
];

export const whyLearn = [
  'Learn from real business use cases rather than isolated tool demonstrations.',
  'Understand how AI can improve productivity, revenue, customer experience and decision-making.',
  'Work with practical prompts, workflows, templates and automation frameworks.',
  'Build confidence to apply AI independently after completing the program.',
  'Learn from implementation experience across multiple industries.',
];
export const experience = [
  ['Flexible learning formats', 'Live and recorded learning, depending on the program.'],
  ['Hands-on implementation', 'Activities and real business implementation exercises.'],
  ['Resources you can reuse', 'Templates, prompts, checklists and workflow frameworks.'],
  ['Examples from your industry', 'Sales, finance, manufacturing, marketing, HR and customer service.'],
  ['Learn by doing', 'Assignments and practical projects to apply every module.'],
  ['Community access', 'Peer learning, updates and discussions.'],
  ['Completion certificates', 'Certificates for eligible programs.'],
  ['Evolving curriculum', 'Periodic updates as AI tools and market needs evolve.'],
];
export const learningJourney = [
  ['Choose your learning path', 'Select a course based on your role, experience and desired outcome.'],
  ['Learn the fundamentals', 'Build clarity on the tools, concepts and business opportunities.'],
  ['Apply through projects', 'Use live exercises, templates and assignments to build practical confidence.'],
  ['Implement in real work', 'Apply your learning to your business, role, academic project or team workflow.'],
  ['Continue with community', 'Stay connected with the Bizgenix learning community and new AI updates.'],
];
export const corporateTopics = [
  'AI awareness sessions for leadership teams.',
  'Role-based training for sales, marketing, HR, finance, operations and support.',
  'Department-specific prompt libraries and automation opportunities.',
  'Responsible AI, privacy and governance guidance.',
  'Custom examples based on your company’s workflows and industry.',
  'Post-training implementation roadmap and consulting support.',
];
export const audiences = ['Business owners', 'Founders', 'Executives', 'Managers', 'Chartered accountants', 'Lawyers', 'Doctors', 'Consultants', 'Sales professionals', 'Marketing professionals', 'HR teams', 'Finance teams', 'Students', 'Freelancers'];
export const academyReasons = [
  ['Implementation-Led Learning', 'Courses are informed by real AI implementation work, not only academic theory.'],
  ['Business-Focused Curriculum', 'Every module connects AI capabilities with business results.'],
  ['India-Relevant Use Cases', 'Examples reflect the tools, languages and workflows commonly used by Indian organizations.'],
  ['Practical Resources', 'Receive templates and frameworks you can reuse after the course.'],
  ['Continuously Updated', 'Programs evolve as new AI models, tools and automation platforms emerge.'],
  ['Community and Expert Access', 'Become part of an ecosystem focused on practical AI adoption.'],
];
export const courseFaqs = [
  ['Do I need coding knowledge?', 'No. Beginner courses are designed for non-technical learners. Technical prerequisites are mentioned for advanced programs.'],
  ['Are the courses theoretical or practical?', 'The learning is implementation-focused and includes demonstrations, exercises, templates, case studies and projects.'],
  ['Will I receive a certificate?', 'Eligible programs include a course completion certificate.'],
  ['Are the courses online or offline?', 'Programs may be online, offline or hybrid depending on the course and schedule.'],
  ['Can companies request customized training?', 'Yes. Bizgenix creates customized corporate programs based on industry, departments and business priorities.'],
  ['Will the course content remain updated?', 'Programs are reviewed regularly to reflect changes in AI tools, automation platforms and market practices.'],
  ['Can I join as a complete beginner?', 'Yes. Several programs start with fundamentals and do not assume prior AI experience.'],
  ['Is support available after the course?', 'Support options depend on the course and may include community access, resources, updates or consulting.'],
];
