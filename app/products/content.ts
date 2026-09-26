// Product copy supplied in Bizgenix_Products_Page_Content_Detailed.pdf.
const productCatalog = [
  {
    id: 'voice-ai', name: 'Voice AI', initial: 'V', category: 'CUSTOMER CONVERSATIONS',
    summary: 'Automate customer calls and conversations.',
    bestFor: 'Sales, support, follow-ups and bookings',
    headline: 'Natural AI conversations. Real business action.',
    description: 'Voice AI helps businesses manage large volumes of inbound and outbound calls without depending entirely on manual calling teams. It can speak with customers, understand responses, capture required information and trigger the next business action.',
    capabilities: ['Inbound and outbound AI calling', 'Multilingual conversations, including English, Hindi and Hinglish', 'Lead qualification and customer information capture', 'Appointment, demo and site-visit booking', 'Follow-up calls and payment reminders', 'Call summaries, outcomes and lead-status updates', 'CRM, ERP, calendar and business-system integrations', 'Custom scripts, business rules and escalation flows'],
    useCases: ['Real estate lead qualification and site-visit scheduling', 'ERP or software demo booking', 'Customer support and request classification', 'Payment and cheque reminder calls', 'Healthcare appointment confirmations', 'Education enquiry follow-ups'],
    benefits: ['Respond to more customers without proportionally increasing headcount', 'Maintain consistent scripts and customer experience', 'Reduce missed follow-ups and delayed callbacks', 'Capture structured data from every conversation', 'Operate across languages and time windows'],
    workflow: ['Customer enquiry received', 'AI conversation & understanding', 'Lead qualification', 'Booking & CRM update', 'Follow-up via WhatsApp / Email'],
    action: 'Schedule a Live Demo',
  },
  {
    id: 'bizchat', name: 'BizChat', initial: 'B', category: 'WHATSAPP AUTOMATION',
    summary: 'Connect WhatsApp communication with business workflows.',
    bestFor: 'Lead nurturing, support, alerts and reminders',
    headline: 'Every conversation moves your business forward.',
    description: 'BizChat helps organizations automate customer communication, lead follow-ups, reminders, support conversations and internal notifications through WhatsApp. It connects messaging with business workflows so every conversation can lead to a tracked action.',
    capabilities: ['Automated lead responses and qualification', 'Template-based and conversational WhatsApp journeys', 'Customer support and FAQ handling', 'Payment, appointment and document reminders', 'Broadcast and campaign workflows', 'Team assignment and escalation', 'CRM and spreadsheet integrations', 'Conversation history, lead data and status tracking'],
    useCases: ['Lead nurturing after ads, events or website enquiries', 'Order updates and customer notifications', 'Payment collection reminders', 'Document collection and onboarding', 'Employee or manager alerts', 'Customer feedback and post-service follow-ups'],
    benefits: ['Engage customers on a channel they already use', 'Reduce repetitive manual messaging', 'Improve response speed and lead consistency', 'Connect customer conversations with internal systems', 'Create measurable communication workflows'],
    workflow: ['WhatsApp enquiry', 'Automated response', 'Team assignment', 'Tracked follow-up'],
    action: 'Discuss Your WhatsApp Workflow',
  },
  {
    id: 'scaleos', name: 'ScaleOS', initial: 'S', category: 'BUSINESS OPERATIONS',
    summary: 'Bring tasks, teams and processes into one connected system.',
    bestFor: 'Tasks, processes, approvals and execution',
    headline: 'One connected system. Clearer execution.',
    description: 'ScaleOS is designed to help growing organizations bring tasks, people, processes, approvals and operational visibility into one connected system. It reduces scattered communication and gives management a clearer view of what is happening across teams.',
    capabilities: ['Task and project management', 'Role-based dashboards and visibility', 'Process stages and workflow tracking', 'Approvals, reminders and escalations', 'Employee and team coordination', 'Management reports and operational summaries', 'WhatsApp notifications and status alerts', 'Custom modules for company-specific workflows'],
    useCases: ['Project execution and delivery tracking', 'Employee task assignment and follow-up', 'Client onboarding and stage management', 'Purchase, approval and operational workflows', 'Daily, weekly and monthly management reviews', 'Multi-team coordination for growing businesses'],
    benefits: ['Create one source of truth for operations', 'Reduce dependence on spreadsheets and scattered chats', 'Improve accountability across teams', 'Identify delays and bottlenecks earlier', 'Standardize processes as the business grows'],
    workflow: ['Assign ownership', 'Track the process', 'Review & approve', 'Management visibility'],
    action: 'Request a Workflow Assessment',
  },
  {
    id: 'growth-intelligence', name: 'Growth Intelligence', initial: 'G', category: 'BUSINESS ANALYTICS',
    summary: 'Turn business and accounting data into decision-ready insights.',
    bestFor: 'Business owners, finance teams and management',
    headline: 'See where growth and cash are stuck.',
    description: 'Growth Intelligence transforms business, accounting and operational data into clear management insights. It helps owners and decision-makers understand cash movement, receivables, payables, inventory, sales trends and areas requiring immediate attention.',
    capabilities: ['Business and financial analytics dashboards', 'Receivables and overdue tracking', 'Payables and cash-flow visibility', 'Sales, purchase and inventory analysis', 'Tally data integration through a secure connector', 'Company-wise and period-wise performance views', 'Exception alerts and management insights', 'Decision-ready reports for owners and finance teams'],
    useCases: ['Identify where cash is blocked', 'Track overdue customer payments', 'Compare sales and operational performance', 'Monitor inventory and closing stock trends', 'Review finance and business health in one place', 'Create management summaries without manual reporting'],
    benefits: ['Convert raw accounting data into understandable insights', 'Reduce dependence on manually prepared reports', 'Improve cash-flow and receivable follow-up decisions', 'Give business owners faster visibility', 'Support data-driven management reviews'],
    workflow: ['Tally & business data', 'Secure connector', 'Business insights', 'Better-informed decisions'],
    action: 'Book an Analytics Demo',
  },
  {
    id: 'crm', name: 'CRM', initial: 'C', category: 'CUSTOMER RELATIONSHIPS',
    summary: 'Manage leads, follow-ups and customer relationships in one place.',
    bestFor: 'Sales pipelines, lead tracking and customer management',
    headline: 'Every lead visible. Every follow-up on time.',
    description: 'Bizgenix CRM gives sales and customer-facing teams one connected workspace for enquiries, lead stages, follow-ups, ownership and customer history. It helps businesses respond consistently and move opportunities forward with better visibility.',
    capabilities: ['Central lead and customer database', 'Custom sales pipelines and lead stages', 'Follow-up tasks, reminders and ownership', 'Customer interaction and activity history', 'Team dashboards and performance visibility', 'Lead-source and conversion reporting', 'Role-based access and workflow controls', 'Integration-ready business workflows'],
    useCases: ['Website and campaign lead management', 'Sales pipeline and opportunity tracking', 'Dealer, channel and partner follow-ups', 'Customer onboarding and relationship management', 'Team assignment and escalation', 'Management review of lead conversion'],
    benefits: ['Create one source of truth for every lead', 'Reduce missed and delayed follow-ups', 'Improve sales-team accountability', 'Understand pipeline health in real time', 'Build consistent customer journeys'],
    workflow: ['Capture the lead', 'Assign ownership', 'Track every follow-up', 'Convert & grow'],
    action: 'Open Bizgenix CRM',
    externalUrl: 'https://crm.bizgenix.ai/',
  },
] as const;

const productOrder = ['growth-intelligence', 'crm', 'scaleos', 'voice-ai', 'bizchat'] as const;
export const products = productOrder.map(id => productCatalog.find(product => product.id === id)!);

export const functions = [
  ['Sales & lead management', 'Voice AI + BizChat', 'Faster response, qualification and follow-up', 'voice-ai'],
  ['Customer support', 'Voice AI + BizChat', 'Automated first-level support and escalation', 'bizchat'],
  ['Operations & delivery', 'ScaleOS', 'Clear tasks, ownership, stages and accountability', 'scaleos'],
  ['Finance & management', 'Growth Intelligence', 'Receivables, cash flow and business insights', 'growth-intelligence'],
  ['Cross-department automation', 'ScaleOS + Integrations', 'Connected processes and automated reporting', 'scaleos'],
  ['Multi departments', 'Custom Solution', 'Integrate each department into a central platform', 'custom-solutions'],
] as const;

export const industries = [
  ['Manufacturing & Textile', 'Production coordination, inventory, payment follow-up, business analytics and team workflows.'],
  ['Real Estate', 'Lead qualification, project enquiries, site visits, CRM follow-ups and customer communication.'],
  ['Healthcare', 'Appointments, reminders, enquiry handling and patient communication.'],
  ['Education', 'Admissions, learner communication, course enquiries and follow-up workflows.'],
  ['Retail & Hospitality', 'Customer engagement, support, order or booking updates and operational coordination.'],
  ['Finance & Professional Services', 'Client onboarding, document reminders, task management, receivables and reporting.'],
  ['Construction & Logistics', 'Project tasks, field coordination, approvals, updates and management reporting.'],
] as const;

export const reasons = [
  ['Built around business outcomes', 'Each product begins with a business problem and a measurable result.'],
  ['Configurable for your business', 'Workflows, fields, rules, scripts and reports can be adapted to your organization.'],
  ['Integration-ready', 'Connect with CRM, ERP, Tally, WhatsApp, calendars, spreadsheets and existing systems.'],
  ['India-first experience', 'Built around Indian communication patterns, languages and operating workflows.'],
  ['End-to-end support', 'From discovery and configuration to integration, deployment, training and optimization.'],
  ['Proof before a large commitment', 'Where suitable, evaluate a prototype or scoped proof before full implementation.'],
] as const;

export const journey = [
  ['Discover', 'Understand your business problem, users, systems and desired outcomes.'],
  ['Map', 'Document workflows, data sources, rules and bottlenecks.'],
  ['Configure or prototype', 'Prepare the product setup, scripts, dashboards or workflow prototype.'],
  ['Integrate', 'Connect the required business systems and data sources.'],
  ['Deploy', 'Launch with appropriate user roles and controls.'],
  ['Train', 'Help your teams use the product and the new operating process.'],
  ['Optimize', 'Review adoption, outcomes and opportunities for improvement.'],
] as const;

export const faqs = [
  ['Are Bizgenix products ready-made or custom-built?', 'They are productized platforms that can be configured and integrated according to business requirements. Some organizations may also need custom modules.'],
  ['Can the products connect with our existing software?', 'Yes. Integration depends on the software, available APIs, database access and workflow requirements.'],
  ['Does Growth Intelligence connect with Tally?', 'It is designed to support Tally-based analytics through a secure connector and server-side data synchronization setup.'],
  ['Can Voice AI work in Indian languages?', 'Voice experiences can be designed for English, Hindi, Hinglish and selected Indian-language requirements depending on the use case and selected speech technology.'],
  ['Can BizChat automate WhatsApp follow-ups?', 'Yes. It can support structured reminders, lead journeys, customer updates and workflow-triggered messages, subject to the WhatsApp account and template setup.'],
  ['Is ScaleOS suitable for multiple teams?', 'Yes. It can support role-based users, departments, projects, stages, approvals and management visibility.'],
  ['How long does implementation take?', 'Timeline depends on the product, integrations, data readiness and amount of customization. A scoped implementation plan is prepared after discovery.'],
  ['Do you provide training and support?', 'Yes. Product onboarding, user training and ongoing support can be included in the engagement.'],
  ['Can we start with one department?', 'Yes. Many businesses begin with a focused use case or one department and expand after proving value.'],
  ['Is our data secure?', 'Security controls are planned based on the deployment model, integrations, user roles and sensitivity of the business data.'],
] as const;
