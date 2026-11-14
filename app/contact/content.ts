export const email = 'info@bizgenix.ai';
export const phone = '+91 87806 71906';
export const queryTypes = ['Custom AI Solution', 'AI Product Demo', 'Corporate AI Training', 'Individual AI Learning', 'Other Enquiry'];
export const productNames = ['Growth Intelligence', 'Bizgenix AI CRM', 'Voice AI', 'BizChat', 'ScaleOS', 'Help me choose'];
export const intentTypes: Record<string, string> = { custom: queryTypes[0], product: queryTypes[1], training: queryTypes[2], learning: queryTypes[3] };
export const productSlugs: Record<string, string> = { 'growth-intelligence': productNames[0], 'ai-crm': productNames[1], 'voice-ai': productNames[2], bizchat: productNames[3], scaleos: productNames[4] };
export function enquiryPrompt(query: string) {
  if (query === 'AI Product Demo') return 'Which business problem should the demo cover? Include your current tools, approximate team size and target start date.';
  if (query === 'Corporate AI Training') return 'Which departments need training? Include participant count, current AI experience, preferred delivery mode and dates.';
  if (query === 'Individual AI Learning') return 'What do you want to learn, and which course or upcoming cohort interests you?';
  return 'Describe one workflow you want to improve, the tools or data involved, who will use it and your target timeline.';
}
export function enquirySteps(query: string) {
  return [
    { title: 'Review your brief', description: 'Our team reviews your business need and any details you share.' },
    { title: query === 'Corporate AI Training' ? 'Discuss the programme' : query === 'AI Product Demo' ? 'Arrange a relevant demo' : 'Discuss fit and scope', description: query === 'Corporate AI Training' ? 'We discuss participants, practical tasks, delivery format and dates.' : query === 'AI Product Demo' ? 'We discuss product fit, required integrations and what to demonstrate.' : 'We clarify the workflow, requirements and a suitable next step.' },
    { title: 'Agree the next step', description: 'Scope, commercials and timing are agreed before paid work begins.' },
  ];
}
