// Core copy: Bizgenix_About_Page_Content_Detailed.pdf.
// Industry examples reuse the existing website's industry descriptions.
export const strategyUrl = 'https://wa.me/918780671906?text=' + encodeURIComponent("Hi Bizgenix, I'd like to book a free AI strategy session for my business.");
export const capabilities = [
  { title: 'In-House Products', headline: 'A focused product. A practical starting point.', description: 'Explore intelligent systems for customer conversations, operations and business visibility.', label: 'Explore our products', href: '/products', items: [
    ['Voice AI', '/products#voice-ai'], ['BizChat', '/products#bizchat'], ['ScaleOS', '/products#scaleos'], ['Growth Intelligence', '/products#growth-intelligence'],
  ] },
  { title: 'Custom AI Solutions', headline: 'Your workflows. Your intelligent system.', description: 'AI applications and enterprise technology designed around your business requirements.', label: 'Explore custom solutions', href: '/custom-solutions', items: [
    ['AI ERP & CRM Development', '/custom-solutions'], ['Enterprise AI Applications', '/custom-solutions'], ['AI Integrations', '/custom-solutions'], ['Business Intelligence Dashboards', '/custom-solutions'], ['AI Web & Mobile Applications', '/custom-solutions'],
  ] },
  { title: 'Business Automation', headline: 'Less repetitive work. More room to grow.', description: 'Connect everyday tools and automate the processes that slow your teams down.', label: 'Discuss your workflow', href: '/contact', items: [
    ['WhatsApp Automation', '/products#bizchat'], ['Sales & Lead Automation', '/contact'], ['HR & Finance Automation', '/contact'], ['Inventory & Workflow Automation', '/contact'], ['Reporting & Analytics Automation', '/products#growth-intelligence'],
  ] },
] as const;
export const industries = [
  { name: 'Manufacturing', image: 'manufacturing', description: 'Production planning, quality inspection, machine data, inventory and MIS automation.' },
  { name: 'Textile', image: 'textile', description: 'Fabric workflows, production tracking, payment recovery, order visibility and Tally integration.' },
  { name: 'Healthcare', image: 'healthcare', description: 'Appointment handling, patient communication, records, billing and operational reporting.' },
  { name: 'Real Estate', image: 'construction', description: 'Lead qualification, site-visit scheduling, CRM follow-ups and project workflows.' },
  { name: 'Education', image: 'education', description: 'Admissions, learning platforms, student support, course portals and reporting automation.' },
  { name: 'Retail & E-commerce', image: 'retail', description: 'Customer support, order workflows, inventory alerts, campaigns and sales analytics.' },
  { name: 'Finance', image: 'finance', description: 'Tally analytics, documentation, compliance and receivable tracking.' },
  { name: 'Hospitality', image: 'hospitality', description: 'Enquiry management, booking support, guest communication and review automation.' },
  { name: 'Construction', image: 'construction', description: 'Billing, project workflows, CRM follow-ups and operational visibility.' },
  { name: 'Logistics', image: null, description: 'Tailored AI solutions that match the unique operational challenges and business requirements of logistics organizations.' },
  { name: 'Professional Services', image: 'finance', description: 'Client servicing, documentation, compliance and receivable tracking.' },
] as const;
export const approach = [
  ['Business Discovery', 'Understand your business and goals.', 'Your business comes first.', 'The starting point is your process, your people and the outcomes you want to achieve.'],
  ['AI Opportunity Assessment', 'Identify automation opportunities.', 'Find the work worth improving.', 'Together, we identify operational bottlenecks and opportunities for intelligent systems to make a practical difference.'],
  ['Solution Design', 'Create the implementation roadmap.', 'Give the idea a clear direction.', 'Translate business requirements into a solution design and a practical plan for implementation.'],
  ['Development', 'Build scalable AI solutions.', 'Build around the way you work.', 'Bring AI, automation, analytics and enterprise technology together in a system designed for your business.'],
  ['Deployment', 'Integrate into existing systems.', 'Connect the solution to real work.', 'Put the solution into operation and integrate it with the tools and processes your teams use.'],
  ['Training & Optimization', 'Ensure adoption and continuous improvement.', 'Make progress part of every day.', 'Help people use the system with confidence, then continue improving it as your business grows.'],
] as const;
export const differentiators = ['Proof Before Payment', 'India-First AI Solutions', 'Enterprise-Grade Architecture', 'WhatsApp & Tally Native Integrations', 'Source Code Ownership', 'End-to-End Consulting, Development & Support', 'ROI-Focused Implementation'];
export const impact = [
  ['Increase operational efficiency', 'Make everyday processes work better.'],
  ['Automate repetitive work', 'Give teams more time for work that matters.'],
  ['Improve customer experience', 'Build more connected customer journeys.'],
  ['Recover revenue faster', 'Strengthen visibility into follow-ups and receivables.'],
  ['Gain real-time business visibility', 'Support decisions with clearer performance insights.'],
  ['Scale operations', 'Grow without proportionally increasing manpower.'],
] as const;
export const cities = [
  { name: 'Ahmedabad', image: 'ahmedabad', caption: 'AI learning and community connections in Ahmedabad.' },
  { name: 'Surat', image: 'surat', caption: 'Practical AI conversations with the business community in Surat.' },
  { name: 'Mumbai', image: 'mumbai', caption: 'Exploring AI adoption with professionals and business owners in Mumbai.' },
] as const;

// Director roles supplied by the user. Biographies summarized from:
// Hitesh_Mehra_Profile_BRAND.pdf (2026), supplied by the user.
// Archit: user's Google share resolves to M A A K & Associates; career details:
// https://thefinancestory.com/starting-a-chartered-accountant-practice-in-mid-20s-with-little-savings
export const directors = [
  {
    id: 'hitesh-mehra',
    name: 'Hitesh Mehra',
    focus: 'Finance leadership, strategic advisory & investment',
    paragraphs: [
      'Hitesh Mehra is a finance leader, strategic advisor and investor with over 28 years of experience across controlling, treasury, audit, financial planning and analysis, management reporting, and business-unit finance. His experience spans complex, multicultural organizations, combining financial discipline with a practical understanding of how businesses operate.',
      'He provides senior leadership and strategic direction to established organizations and supports startups from pre-launch through expansion. His advisory work covers business strategy, valuation, fundraising, deal structuring and investor readiness, alongside operational improvement and leadership development.',
      'As an investor, his interests include startups, manufacturing, artificial intelligence, drones and education. He works with founders on capital efficiency, financial planning and building businesses ready for their next stage of growth.',
    ],
    expertise: ['Financial strategy', 'Fundraising & valuation', 'Business growth', 'Operational improvement'],
  },
  {
    id: 'archit-shah',
    name: 'Archit Shah',
    focus: 'Chartered accountancy, corporate finance & business advisory',
    paragraphs: [
      'Archit Shah is a Chartered Accountant and Managing Partner at M A A K & Associates in Ahmedabad. He qualified as a Chartered Accountant in 2010 with All India Rank 3 in the CA Final examination and also pursued an MBA.',
      'He began his corporate career in the treasury department at Reliance Industries before establishing his own practice in 2012. M A A K & Associates was formed in 2013, bringing together complementary expertise to serve businesses in India and internationally.',
      'His professional journey combines corporate finance experience with building an advisory practice, developing client relationships and supporting businesses as they grow.',
    ],
    expertise: ['Corporate finance', 'Treasury', 'Business advisory', 'Practice leadership'],
  },
] as const;
