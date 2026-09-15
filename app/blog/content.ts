// Source: Bizgenix_Blog_Page_Content_Detailed.pdf. The brief supplies previews,
// not published article bodies, dates, popularity data or downloadable resources.
export const contactUrl = (subject: string) => `https://wa.me/918780671906?text=${encodeURIComponent(`Hi Bizgenix, I'd like to discuss ${subject}.`)}`;

export const categories = [
  ['AI Strategy', 'Guides for identifying AI opportunities, planning adoption, estimating ROI and creating an implementation roadmap.'],
  ['AI Automation', 'Practical ideas for automating repetitive workflows across sales, finance, HR, operations and customer service.'],
  ['AI Agents', 'Articles on conversational agents, autonomous workflows, lead qualification, support and task execution.'],
  ['Voice AI', 'Use cases, implementation guides and best practices for multilingual AI calling and customer conversations.'],
  ['WhatsApp Automation', 'Lead nurturing, reminders, support workflows, messaging strategy and WhatsApp-based business automation.'],
  ['Business Intelligence', 'Insights on analytics, dashboards, Tally data, management reporting, receivables, cash flow and decision-making.'],
  ['Industry AI', 'AI use cases for manufacturing, textile, real estate, healthcare, education, retail, finance, hospitality and other industries.'],
  ['AI Tools and Productivity', 'Practical reviews, workflows, prompts and systems for professionals and business teams.'],
  ['Case Studies', 'Real implementation stories showing the problem, solution, process and measurable result.'],
  ['Events and Community', 'Updates, learning highlights and practical takeaways from Bizgenix workshops and community programs.'],
] as const;

export type Insight = { slug: string; title: string; category: string; summary: string; industry: string; type: 'Article' | 'Guide'; tags: string[]; art: 'strategy' | 'automation' | 'voice' | 'whatsapp' | 'analytics' | 'industry'; };
export const insights: Insight[] = [
  { slug: 'find-the-right-ai-opportunity', title: 'How to Find the Right AI Opportunity in Your Business', category: 'AI Strategy', summary: 'Most businesses do not need to automate everything. They need to identify the process where time, revenue, visibility or customer experience is being lost. This guide explains how to find high-impact AI opportunities, prioritize use cases and begin with a focused proof of concept.', industry: 'All industries', type: 'Guide', tags: ['AI for Business Owners', 'AI Agents'], art: 'strategy' },
  { slug: 'business-processes-to-automate-with-ai', title: '7 Business Processes You Can Automate with AI', category: 'AI Automation', summary: 'Discover practical workflows across sales, finance, HR and operations that can be automated to save time and improve consistency.', industry: 'All industries', type: 'Article', tags: ['Sales Automation', 'Finance Automation', 'AI Agents'], art: 'automation' },
  { slug: 'ai-voice-agents-indian-businesses', title: 'AI Voice Agents for Indian Businesses: Complete Guide', category: 'Voice AI', summary: 'Explore Voice AI use cases, implementation guides and best practices for multilingual AI calling and customer conversations.', industry: 'All industries', type: 'Guide', tags: ['Voice AI', 'AI for Real Estate', 'AI for Healthcare'], art: 'voice' },
  { slug: 'whatsapp-ai-lead-follow-up', title: 'How WhatsApp AI Can Improve Lead Follow-Up', category: 'WhatsApp Automation', summary: 'Explore lead nurturing, reminders, support workflows and WhatsApp-based business automation for better follow-up.', industry: 'All industries', type: 'Article', tags: ['WhatsApp Automation', 'Sales Automation', 'AI for Real Estate'], art: 'whatsapp' },
  { slug: 'what-is-growth-intelligence', title: 'What Is Growth Intelligence and Why Does It Matter?', category: 'Business Intelligence', summary: 'Explore business analytics, management reporting, receivables and cash flow insights that support better decisions.', industry: 'Finance and Accounting', type: 'Article', tags: ['AI for Business Owners', 'Finance Automation'], art: 'analytics' },
  { slug: 'ai-for-manufacturing', title: 'AI for Manufacturing: Practical Use Cases', category: 'Industry AI', summary: 'Explore AI for production planning, inventory, quality, maintenance and reporting.', industry: 'Manufacturing', type: 'Article', tags: ['AI for Manufacturing', 'AI Automation'], art: 'industry' },
  { slug: 'calculate-roi-for-ai', title: 'How to Calculate ROI Before Building an AI Solution', category: 'AI Strategy', summary: 'Explore AI opportunity assessment, adoption planning and return on investment before deciding what to build.', industry: 'All industries', type: 'Guide', tags: ['AI for Business Owners', 'Finance Automation'], art: 'strategy' },
  { slug: 'tally-analytics-accounting-insights', title: 'Tally Analytics: Turning Accounting Data into Insights', category: 'Business Intelligence', summary: 'Explore how Tally data, dashboards and management reporting can support receivables, cash flow and business decisions.', industry: 'Finance and Accounting', type: 'Article', tags: ['Tally Analytics', 'Finance Automation'], art: 'analytics' },
  { slug: 'custom-ai-vs-ready-made-software', title: 'Custom AI vs Ready-Made Software: What Should You Choose?', category: 'AI Strategy', summary: 'Explore implementation decisions and solution choices that connect AI technology with your business problems and desired outcomes.', industry: 'All industries', type: 'Guide', tags: ['AI for Business Owners', 'AI Agents'], art: 'automation' },
];

export const topics = ['AI for Business Owners', 'Prompt Engineering', 'AI Agents', 'Voice AI', 'WhatsApp Automation', 'Sales Automation', 'Finance Automation', 'Tally Analytics', 'AI for Manufacturing', 'AI for Real Estate', 'AI for Healthcare', 'Corporate AI Training'];
export const industries = [
  ['Manufacturing', 'AI for production planning, inventory, quality, maintenance and reporting.'],
  ['Textile', 'AI for fabric tracking, production visibility, receivables and customer workflows.'],
  ['Real Estate', 'AI for lead qualification, site visits, CRM follow-ups and customer communication.'],
  ['Healthcare', 'AI for appointments, patient communication, billing and operational efficiency.'],
  ['Education', 'AI for learning, admissions, student support and administration.'],
  ['Retail and E-commerce', 'AI for support, recommendations, inventory, engagement and reporting.'],
  ['Finance and Accounting', 'AI for receivables, analytics, reconciliation and decision support.'],
  ['Professional Services', 'AI for client onboarding, document workflows, research and productivity.'],
] as const;
export const resources = ['AI Readiness Checklist for Businesses', 'AI Automation Opportunity Worksheet', 'Guide to Implementing Voice AI', 'WhatsApp Automation Planning Template', 'AI ROI Calculator or assessment', 'Industry-specific AI use-case guide', 'Business Intelligence dashboard checklist', 'Corporate AI training brochure'];
export const faqs = [
  ['What topics does the Bizgenix Blog cover?', 'The Blog covers AI strategy, automation, AI agents, Voice AI, WhatsApp automation, analytics, industry applications, business productivity, case studies and events.'],
  ['Who is the content designed for?', 'The content is designed for business owners, founders, professionals, corporate teams, students and anyone interested in practical AI implementation.'],
  ['Is the content technical?', 'Most articles are business-friendly and practical. Technical articles will clearly mention the expected knowledge level.'],
  ['How often will new articles be published?', 'New articles and guides are being prepared. Check the blog for new insights as they become available.'],
  ['Can I receive new articles by email?', 'You can request selected articles, resources, event updates and product insights using the AI updates form below.'],
  ['Can I suggest a topic?', 'Yes. Contact the Bizgenix team with a specific business problem you would like us to cover.'],
  ['Do you publish guest articles?', 'Guest contributions can be considered selectively when they match Bizgenix quality, experience and relevance standards.'],
  ['Can I discuss an article with the Bizgenix team?', 'Yes. Get in touch for a strategy session, product demo or a discussion about a solution for your business.'],
] as const;
