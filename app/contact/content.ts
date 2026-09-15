// Page copy adapted from Bizgenix_Contact_Us_Page_Content_Detailed.pdf.
// Contact channels are reused from the site's existing ContactSection.
export const email = 'info@bizgenix.ai';
export const phone = '+91 82008 58674';
export const whatsappUrl = (message: string) => `https://wa.me/918780671906?text=${encodeURIComponent(message)}`;
export const strategyUrl = whatsappUrl("Hi Bizgenix, I'd like to book an AI strategy session for my business.");

export const enquiryOptions = [
  { value: 'AI Strategy Session', title: 'Book an AI Strategy Session', copy: 'Discuss your business challenges, existing systems and AI opportunities with our team.', audience: 'Business owners, founders & decision-makers', symbol: '↗' },
  { value: 'Product Demo', title: 'Request a Product Demo', copy: 'See how Voice AI, BizChat, ScaleOS or Growth Intelligence can work for your business.', audience: 'Teams evaluating a Bizgenix product', symbol: '▷' },
  { value: 'Custom Solution', title: 'Discuss a Custom Solution', copy: 'Share your need for a custom AI application, CRM, ERP, analytics platform, automation or integration.', audience: 'Businesses with unique workflows', symbol: '⌘' },
  { value: 'Training', title: 'Corporate AI Training', copy: 'Request a customized AI workshop or training program for your leadership team or employees.', audience: 'Companies & professional organizations', symbol: '✦' },
  { value: 'Partnership', title: 'Partnership or Collaboration', copy: 'Connect with Bizgenix for technology, channel, event, community or strategic partnerships.', audience: 'Partners, associations & institutions', symbol: '↔' },
  { value: 'Support', title: 'Existing Client Support', copy: 'Reach the team for product, implementation, account or technical assistance.', audience: 'Current Bizgenix clients', symbol: '◎' },
] as const;
export const nextSteps = [
  ['Requirement Review', 'Our team reviews the information you shared and identifies the most relevant product, solution specialist or training team.'],
  ['Initial Conversation', 'We connect with you to clarify the business problem, users, existing systems, priorities and expected outcome.'],
  ['Discovery or Demo', 'Depending on the enquiry, we arrange a product demonstration, business discovery session or process discussion.'],
  ['Recommended Next Step', 'You receive a practical recommendation such as a product setup, proof of concept, solution blueprint, automation roadmap or training proposal.'],
  ['Proposal and Implementation', 'Once scope and commercials are agreed, the project moves into design, development, configuration, integration or delivery.'],
] as const;
export const preparation = [
  'The business process or department you want to improve.',
  'The main problem, delay, leakage or manual work involved.',
  'Who currently performs the process and how often it happens.',
  'The software, spreadsheets, WhatsApp groups or accounting tools currently used.',
  'The number of users, locations or customers involved.',
  'The outcome you expect, such as faster response, lower manual effort, better visibility or higher conversion.',
  'Any timeline, compliance or integration constraints.',
];
export const reasons = [
  ['Business-First Consultation', 'We focus on the operational problem and desired outcome before recommending technology.'],
  ['Product and Custom Expertise', 'Our team can evaluate whether a Bizgenix product, custom solution or hybrid approach is most suitable.'],
  ['India-First Implementation', 'We understand WhatsApp, Tally, multilingual communication and the realities of Indian business workflows.'],
  ['End-to-End Capability', 'Strategy, software development, AI, automation, analytics, integration, deployment and training can be handled together.'],
  ['Scalable Solutions', 'We design systems that can grow across users, teams, locations, workflows and business volumes.'],
  ['Practical Next Steps', 'You receive an implementation-oriented recommendation instead of a generic technology pitch.'],
] as const;
export const faqs = [
  ['Which type of enquiry should I select?', 'Choose the option closest to your current requirement. Our team can redirect the enquiry internally if another category is more suitable.'],
  ['Do you provide a free consultation?', 'Bizgenix may offer an initial strategy or discovery conversation to understand the requirement. The format and duration depend on the enquiry.'],
  ['Can I request a demo of a specific product?', 'Yes. Choose Request a Product Demo to contact us on WhatsApp, and mention Voice AI, BizChat, ScaleOS or Growth Intelligence.'],
  ['What if I am not sure which solution I need?', 'Describe the business challenge and current process. Our team will help determine whether a product, automation or custom solution is appropriate.'],
  ['Can Bizgenix work with our existing software?', 'Yes, subject to technical feasibility and available APIs, database access or integration methods.'],
  ['Do you work with businesses outside your city?', 'Yes. Discovery, demos, development and support can be handled remotely, while selected engagements may also include on-site sessions.'],
  ['Can we start with a small pilot?', 'Yes. A focused proof of concept or first-phase implementation may be recommended where it helps validate value and reduce risk.'],
  ['Do you offer corporate AI workshops?', 'Yes. Bizgenix can create role-based or department-specific AI training for organizations and professional communities.'],
  ['How soon will the team respond?', 'We will review your enquiry and contact you as soon as possible during business hours.'],
  ['Where should existing clients request technical support?', 'Use your existing project communication channel, or select Existing Client Support here and share the product or project you need help with. Please do not include passwords or access credentials.'],
] as const;
