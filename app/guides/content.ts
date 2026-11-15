// Answer-first guides written by the Bizgenix AI team.
// Rules: general, verifiable guidance only. No prices that change, no client names or
// results that are not in app/case-studies/content.ts, no claims about Bizgenix products
// beyond app/products/content.ts. Keep `answer` to two or three sentences: it is the
// passage search engines and AI assistants are most likely to quote.

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  answer: string;
  date: string;
  updated: string;
  tags: string[];
  minutes: number;
  html: string;
  faqs: [string, string][];
  next: { eyebrow: string; title: string; text: string; primary: { label: string; href: string }; secondary: { label: string; href: string } };
};

export const guides: Guide[] = [
  {
    slug: 'mis-report-in-tally',
    title: 'MIS Report in Tally: Format, Reports to Use and What to Read',
    h1: 'MIS report in Tally: the format, the reports to use and what an owner should read',
    description: 'What an MIS report is, which TallyPrime reports go into it, a simple monthly format for business owners, and the settings that must be on before the numbers can be trusted.',
    answer: 'An MIS report is a short monthly summary of the numbers a business owner uses to decide: profit, cash, receivables, payables, stock and expenses. Tally has no single report called “MIS”. You build it from reports Tally already has, mainly Profit & Loss, Balance Sheet, Cash Flow, Ratio Analysis, Outstandings and Stock Summary, and then compare them with last month and last year.',
    date: '2026-11-15',
    updated: '2026-11-15',
    tags: ['Tally', 'MIS Reporting', 'Business Intelligence'],
    minutes: 6,
    html: `
<h2>What an MIS report is</h2>
<p>MIS stands for Management Information System. An MIS report is prepared for the people who run the business, not for a tax office or an auditor. There is no legal format. A good one answers a few questions quickly: are we making money, where is the cash, who owes us, whom do we owe, what is lying in stock, and what changed since last month.</p>
<p>Statutory accounts look back at a full year. An MIS report looks at a month or a week, so that a problem is seen while there is still time to act on it.</p>

<h2>Which Tally reports go into an MIS report</h2>
<p>TallyPrime already holds most of what an owner needs. These are the reports to pull, and where to find them from the Gateway of Tally.</p>
<div class="tableWrap"><table>
<thead><tr><th>Question</th><th>Tally report</th><th>Where it is</th></tr></thead>
<tbody>
<tr><td>Did we make a profit?</td><td>Profit &amp; Loss A/c</td><td>Gateway of Tally → Profit &amp; Loss A/c</td></tr>
<tr><td>What do we own and owe?</td><td>Balance Sheet</td><td>Gateway of Tally → Balance Sheet</td></tr>
<tr><td>Where did the cash go?</td><td>Cash Flow and Funds Flow</td><td>Display More Reports → Cash Flow / Funds Flow</td></tr>
<tr><td>Who owes us, and for how long?</td><td>Bills Receivable with ageing</td><td>Display More Reports → Statements of Accounts → Outstandings → Receivables</td></tr>
<tr><td>Whom do we owe?</td><td>Bills Payable with ageing</td><td>Display More Reports → Statements of Accounts → Outstandings → Payables</td></tr>
<tr><td>What is in stock?</td><td>Stock Summary</td><td>Gateway of Tally → Stock Summary</td></tr>
<tr><td>Are the basics healthy?</td><td>Ratio Analysis</td><td>Gateway of Tally → Ratio Analysis</td></tr>
<tr><td>Which branch or department earns?</td><td>Cost Centre reports</td><td>Display More Reports → Statements of Accounts → Cost Centres</td></tr>
</tbody></table></div>
<p>Three keys do most of the work inside these reports. <strong>Alt+C</strong> adds a column so you can place another period next to the current one. <strong>Alt+N</strong> adds columns automatically, for example month by month. <strong>F6</strong> inside the outstanding reports switches to the age-wise view. <strong>Alt+E</strong> exports the report to Excel or PDF.</p>

<h2>A simple monthly MIS format for an owner</h2>
<p>Keep the pack to what will be read. One page per item is enough.</p>
<ol>
<li><strong>Profit summary.</strong> Sales, gross profit and net profit for the month, next to last month and the same month last year.</li>
<li><strong>Cash position.</strong> Opening balance, money in, money out, closing balance, and the bank and cash balances today.</li>
<li><strong>Receivables ageing.</strong> Total outstanding split into 0–30, 31–60, 61–90 and over 90 days, with the ten largest overdue customers.</li>
<li><strong>Payables ageing.</strong> The same split for suppliers, with what falls due in the next 30 days.</li>
<li><strong>Stock.</strong> Closing stock value, and items that have not moved in 90 days.</li>
<li><strong>Sales detail.</strong> Top customers and top products for the month.</li>
<li><strong>Expenses.</strong> Each main expense head against last month, and against budget if you keep one in Tally.</li>
<li><strong>Dues to the government.</strong> GST and TDS payable, and the due dates.</li>
<li><strong>Five ratios.</strong> Gross profit %, net profit %, current ratio, receivable days and stock turnover, all of which Ratio Analysis shows.</li>
</ol>

<h2>Settings that must be on first</h2>
<p>An MIS report is only as good as the entries behind it. Check these before trusting the numbers.</p>
<ul>
<li><strong>Bill-wise details</strong> must be enabled for customer and supplier ledgers. Without it, Tally cannot show which invoice is unpaid or how old it is.</li>
<li><strong>Credit periods</strong> should be entered on invoices, so that “overdue” means something.</li>
<li><strong>Cost centres</strong> must be enabled and used on entries if you want profit by branch, department or project.</li>
<li><strong>Stock items and godowns</strong> must be maintained in Tally if you want a stock page.</li>
<li><strong>Books must be up to date.</strong> A report run on the 5th from books entered till the 20th of last month misleads more than it helps.</li>
</ul>

<h2>Where the manual method strains</h2>
<p>Tally shows each report correctly on screen. The effort is in the assembly: someone opens eight reports, exports each one, pastes them into a workbook, formats it and sends it. That takes time every month, it depends on one person, and it usually arrives after the decisions it was meant to inform. It also shows numbers without saying what to do about them.</p>
<p>That is the point at which businesses move from an exported workbook to a dashboard that reads the Tally data directly.</p>

<h2>What to read first</h2>
<p>If you read only three things each month, read these: the receivables over 90 days, the cash closing balance against next month’s payables, and gross profit % against last month. Most unpleasant surprises show up in one of the three.</p>
`,
    faqs: [
      ['Does Tally have a built-in MIS report?', 'No single report in TallyPrime is called MIS. Profit & Loss, Balance Sheet, Cash Flow, Funds Flow, Ratio Analysis, Outstandings, Stock Summary and Cost Centre reports together make up an MIS report. You compare periods with Alt+C or Alt+N and export with Alt+E.'],
      ['How do I get a receivables ageing report in Tally?', 'Open Display More Reports → Statements of Accounts → Outstandings → Receivables, then press F6 for the age-wise view and set the ageing periods, for example 0–30, 31–60, 61–90 and over 90 days. Bill-wise details must be enabled on the customer ledgers.'],
      ['How often should an MIS report be prepared?', 'Monthly is the usual minimum. Cash, receivables and overdue payables are worth checking weekly, because those are the items where a delay of a few weeks costs money.'],
      ['Can an MIS report be exported from Tally to Excel?', 'Yes. Open the report and press Alt+E, choose Export, and select Excel or PDF as the format. Each report is exported separately, so a full pack means several exports.'],
    ],
    next: { eyebrow: 'GROWTH INTELLIGENCE', title: 'Want this view without the monthly exports?', text: 'Growth Intelligence is our business analytics software for Tally. It turns Tally data into answers on cash, receivables, payables and stock, with the next action for each.', primary: { label: 'Request a demo', href: '/contact?intent=product&product=growth-intelligence#contact-form' }, secondary: { label: 'See Growth Intelligence', href: '/products/growth-intelligence' } },
  },
  {
    slug: 'virtual-cfo',
    title: 'Virtual CFO: What It Is, What It Does and When Software Helps',
    h1: 'Virtual CFO: what it is, what it does, and when software does part of the job',
    description: 'A plain guide to virtual CFO services for Indian businesses: what the role covers, how it differs from an accountant, who needs one, and which parts software can take over.',
    answer: 'A virtual CFO is an experienced finance professional or firm that does the work of a chief financial officer for a business on a part-time, outsourced basis. The work is management-facing: reporting, cash-flow planning, budgets, margins, funding and financial controls. It suits businesses that have outgrown bookkeeping-only support but do not need, or cannot justify, a full-time CFO.',
    date: '2026-11-15',
    updated: '2026-11-15',
    tags: ['Virtual CFO', 'Finance', 'Business Intelligence'],
    minutes: 5,
    html: `
<h2>What a virtual CFO does</h2>
<p>The word “virtual” describes how the person works, not what they do. A virtual CFO is not on your payroll and is not in the office every day, but the responsibilities are those of a finance head.</p>
<ul>
<li><strong>Management reporting.</strong> A monthly MIS pack: profit, cash, receivables, payables and stock, with what changed and why.</li>
<li><strong>Cash-flow planning.</strong> A forecast of money in and out over the next weeks and months, so that a shortfall is seen before it arrives.</li>
<li><strong>Budgets and targets.</strong> An annual budget, and a monthly comparison of actual figures against it.</li>
<li><strong>Working capital.</strong> Credit terms, collection discipline, supplier terms and stock levels.</li>
<li><strong>Margins and pricing.</strong> Which products, customers or branches make money after all costs.</li>
<li><strong>Funding.</strong> Preparing numbers for a bank or investor and managing those relationships.</li>
<li><strong>Controls and systems.</strong> Who can approve what, how entries are checked, and which software the finance team uses.</li>
<li><strong>Compliance oversight.</strong> Making sure GST, TDS, audit and filings are handled on time, usually by coordinating with the accountant or auditor rather than doing the filings.</li>
</ul>

<h2>Virtual CFO, accountant and full-time CFO compared</h2>
<div class="tableWrap"><table>
<thead><tr><th></th><th>Accountant or tax consultant</th><th>Virtual CFO</th><th>Full-time CFO</th></tr></thead>
<tbody>
<tr><td>Main question</td><td>Are the books and filings correct?</td><td>What should we do with these numbers?</td><td>The same, with full ownership of the finance function</td></tr>
<tr><td>Looks at</td><td>The past</td><td>The past and the next few quarters</td><td>The past, the future and the team</td></tr>
<tr><td>Time given</td><td>As filings require</td><td>A few days a month</td><td>Full time</td></tr>
<tr><td>Typical output</td><td>Returns, audit, financial statements</td><td>MIS, forecasts, reviews with the owner</td><td>All of it, plus leading the finance team</td></tr>
</tbody></table></div>
<p>The roles work together. A virtual CFO depends on clean books, and clean books are still the accountant’s work.</p>

<h2>Who needs one</h2>
<p>A virtual CFO is worth considering when several of these are true.</p>
<ul>
<li>Sales are growing but cash feels tight.</li>
<li>The owner sees final numbers weeks after the month ends, or only at year end.</li>
<li>A bank loan, investor or large expansion is coming up.</li>
<li>There are several branches, products or companies, and nobody is sure which ones earn.</li>
<li>The accounts team records entries well but nobody reviews what the entries mean.</li>
</ul>

<h2>How engagements usually work</h2>
<p>Most virtual CFO work is a monthly retainer with a fixed scope: a set number of review meetings, the MIS pack and agreed projects. Some firms also work per project, for example a funding round or a costing exercise. Fees depend on the size of the business, the number of entities, the state of the books and how much time is needed, so ask for the scope in writing and compare proposals on scope, not on the monthly figure alone.</p>
<p>Before you sign, ask who will actually attend the reviews, what you will receive each month and by which date, and what the accountant must provide for that to happen.</p>

<h2>What software can do, and what it cannot</h2>
<p>Part of a finance head’s month is repetitive: pulling data from Tally, preparing the same reports, chasing the same overdue customers and noticing the same warning signs. Software does this part well, every day instead of once a month.</p>
<div class="tableWrap"><table>
<thead><tr><th>Software handles well</th><th>Still needs a person</th></tr></thead>
<tbody>
<tr><td>Daily view of cash, receivables, payables and stock</td><td>Deciding between two uses of limited cash</td></tr>
<tr><td>Ageing, overdue lists and reminders</td><td>Negotiating with a bank, investor or large customer</td></tr>
<tr><td>Comparing this month with earlier periods</td><td>Judging whether a change is a problem or a plan</td></tr>
<tr><td>Flagging unusual movements</td><td>Tax structuring and legal decisions</td></tr>
</tbody></table></div>
<p>Many businesses use both: software for the daily view, and a finance professional for the review and the decisions. If the main gap is that you cannot see your numbers in time, start with the software. If you can see them but do not know what to do, you need the person.</p>
`,
    faqs: [
      ['What is the difference between a virtual CFO and a CA?', 'A chartered accountant in practice usually handles accounts, audit and tax filings. A virtual CFO uses those accounts to help run the business: monthly reporting, cash-flow forecasts, budgets, margins and funding. Many virtual CFOs are chartered accountants, but the work is management-facing rather than compliance-facing.'],
      ['Does a small business need a virtual CFO?', 'Not always. A business with simple operations and steady cash may only need good bookkeeping and a monthly MIS report. A virtual CFO becomes useful when growth, borrowing, several branches or tight cash make financial decisions harder than the owner can handle alone.'],
      ['How much do virtual CFO services cost in India?', 'There is no standard rate. Fees depend on the size of the business, the number of companies, the condition of the books and the hours agreed. Ask each firm for a written scope and compare what you receive each month, not only the fee.'],
      ['Can software replace a virtual CFO?', 'Software can replace the repetitive part: collecting data, preparing reports, tracking overdue payments and flagging changes. It does not replace judgement on funding, negotiations, tax structure or strategy. The two are commonly used together.'],
    ],
    next: { eyebrow: 'GROWTH INTELLIGENCE', title: 'See your Tally numbers every day, not once a month', text: 'Growth Intelligence is software, not a virtual CFO service. It turns Tally data into answers on cash, receivables, payables and stock, with the next action for each.', primary: { label: 'Request a demo', href: '/contact?intent=product&product=growth-intelligence#contact-form' }, secondary: { label: 'See Growth Intelligence', href: '/products/growth-intelligence' } },
  },
  {
    slug: 'whatsapp-automation-for-business',
    title: 'WhatsApp Automation for Business: What You Can Automate',
    h1: 'WhatsApp automation for business: what you can automate and what it takes',
    description: 'What WhatsApp automation means for an Indian business, the difference between the WhatsApp Business app and the API, the rules on templates and consent, and how to start.',
    answer: 'WhatsApp automation means sending and answering routine business messages on WhatsApp without someone typing each one: enquiry replies, order and dispatch updates, payment reminders, appointment reminders and follow-ups. Small volumes can be handled with the free WhatsApp Business app. Anything connected to your CRM, billing or Tally data needs the WhatsApp Business Platform, also called the API, where Meta approves message templates and customers must have agreed to receive messages.',
    date: '2026-11-15',
    updated: '2026-11-15',
    tags: ['WhatsApp Automation', 'AI Automation', 'Customer Communication'],
    minutes: 6,
    html: `
<h2>What businesses automate on WhatsApp</h2>
<ul>
<li><strong>Enquiry replies.</strong> An instant first answer, a few qualifying questions, and a handover to the right salesperson.</li>
<li><strong>Order and dispatch updates.</strong> Order confirmed, goods dispatched, transport details, delivery done.</li>
<li><strong>Payment reminders.</strong> Invoice shared on the due date, a reminder when it is overdue, a thank-you when it is paid.</li>
<li><strong>Appointments.</strong> Booking confirmation, a reminder the day before, and rescheduling.</li>
<li><strong>Follow-ups.</strong> Quotation follow-up, feedback after delivery, renewal and service reminders.</li>
<li><strong>Internal alerts.</strong> A daily summary or a task reminder sent to your own team.</li>
<li><strong>Campaigns.</strong> Offers and announcements to customers who have agreed to receive them.</li>
</ul>

<h2>Two ways to do it: the app and the API</h2>
<div class="tableWrap"><table>
<thead><tr><th></th><th>WhatsApp Business app</th><th>WhatsApp Business Platform (API)</th></tr></thead>
<tbody>
<tr><td>Best for</td><td>An owner or a small team answering by hand</td><td>Messages triggered by your software, at volume</td></tr>
<tr><td>Automation</td><td>Greeting message, away message, quick replies, labels, catalogue</td><td>Chatbots, workflows and messages sent by your CRM, ERP or billing system</td></tr>
<tr><td>Starting a conversation</td><td>You type and send</td><td>Only with a template that Meta has approved</td></tr>
<tr><td>Team use</td><td>One phone and a few linked devices</td><td>Many agents through a shared inbox</td></tr>
<tr><td>Cost</td><td>Free</td><td>Meta charges for template messages, and the provider you use adds its own fee</td></tr>
</tbody></table></div>
<p>The API has no app of its own. You use it through software: Meta’s own Cloud API if you have developers, or a solution provider that gives you an inbox, a chatbot builder and integrations.</p>

<h2>The rules that shape what you can send</h2>
<ul>
<li><strong>Consent.</strong> A customer must have opted in to receive messages from your business on WhatsApp. Buying a list and messaging it is against WhatsApp’s policy.</li>
<li><strong>Templates.</strong> To message a customer first, you must use a template approved by Meta. Templates fall into categories such as marketing, utility and authentication.</li>
<li><strong>The 24-hour window.</strong> When a customer messages you, you can reply freely for 24 hours. After that you need a template again.</li>
<li><strong>Charges.</strong> Meta charges per delivered template message. The rate depends on the category and the customer’s country, and Meta revises it, so check the current rate card before you budget.</li>
<li><strong>Quality.</strong> If many people block or report your number, your quality rating falls and your daily sending limit is reduced.</li>
</ul>
<p>Unofficial bulk-sending tools that work by controlling the ordinary WhatsApp app break these rules. The usual result is a banned number, which for many businesses is the number every customer has saved.</p>

<h2>What you need before you start</h2>
<ol>
<li>A Meta business account, and business verification if you want higher sending limits.</li>
<li>A phone number for the API. A number already used on the WhatsApp app has to be moved, so decide this early.</li>
<li>A display name that matches your business.</li>
<li>A record of customer consent: where and when each customer agreed.</li>
<li>The source of the data. A dispatch update needs dispatch data; a payment reminder needs the invoice and due date from your accounting system.</li>
</ol>

<h2>How to start without wasting money</h2>
<p>Choose one message that is sent many times a week and always looks the same. Payment reminders and dispatch updates are common first choices because the data already exists and the customer wants the message. Write the template, get it approved, connect the data, and run it for a month. Measure one thing: replies, payments received or calls avoided. Add the second workflow only after the first one runs without supervision.</p>
<p>Keep a person in the loop. Every automated flow needs a clear way for the customer to reach a human, and someone who reads the replies.</p>
`,
    faqs: [
      ['Is WhatsApp automation legal in India?', 'Yes, when it is done through WhatsApp’s official products and with customer consent. Businesses must use the WhatsApp Business app or the WhatsApp Business Platform, send business-initiated messages through approved templates, and message only people who have opted in.'],
      ['What is the difference between WhatsApp Business and the WhatsApp Business API?', 'WhatsApp Business is a free phone app for small teams, with greeting messages, quick replies and labels. The WhatsApp Business Platform, or API, has no app. It connects WhatsApp to your software so that messages can be sent automatically and handled by many agents, and Meta charges for template messages.'],
      ['Can I send bulk messages on WhatsApp?', 'Only to customers who have opted in, through the WhatsApp Business Platform, using approved templates. Sending bulk messages to purchased lists or through unofficial tools breaks WhatsApp’s policies and can get the number banned.'],
      ['Which business message should I automate first?', 'Start with a high-volume message that always follows the same pattern and that customers want to receive, such as a payment reminder, an order confirmation or a dispatch update. Run one workflow for a month before adding another.'],
    ],
    next: { eyebrow: 'BIZCHAT', title: 'Want WhatsApp connected to your own data?', text: 'BizChat is our WhatsApp automation product for customer communication, lead follow-ups, reminders, support conversations and internal notifications, connected to your business workflows.', primary: { label: 'Discuss your workflow', href: '/contact?intent=product&product=bizchat#contact-form' }, secondary: { label: 'See BizChat', href: '/products/bizchat' } },
  },
];
