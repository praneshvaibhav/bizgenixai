// Content and original system screenshots: Bizgenix AI Case Study Booklet, supplied by the user.
// Metrics retain their booklet scope; portfolio figures are separate from the 18 featured projects.
export type CaseStudy = { slug: string; client: string; title: string; category: string; industry: string; kind: 'Custom AI' | 'Automation'; sourcePage: number; summary: string; business: string; challenge: string[]; solution: string; steps: string[]; outcomes: string[]; metrics: [string, string][]; images: { src: string; width: number; height: number; caption: string }[] };
export const caseStudies: CaseStudy[] = [
  {
    "slug": "waffle-castle",
    "client": "Waffle Castle",
    "title": "Franchise operations control system",
    "category": "Retail & F&B",
    "industry": "Multi-location F&B franchise",
    "kind": "Custom AI",
    "sourcePage": 7,
    "summary": "A franchise control tower for store openings, department handoffs and ad-fund collection.",
    "business": "A fast-growing waffle QSR franchise with 120+ stores. Every new store passes through eight operational phases and three departments, supported by a shared advertising fund.",
    "challenge": [
      "Eight operational phases per store were tracked manually in spreadsheets.",
      "Department handoffs relied on phone calls and WhatsApp messages.",
      "Missed ad-fund payments created recurring revenue leakage."
    ],
    "solution": "A lifecycle Kanban tracks every store, automates department handoffs and runs an ad-fund escalation engine from D-6 to D+7. Role-based dashboards and an AI assistant help the team ask questions about live operations.",
    "steps": [
      "Receive franchise lead",
      "Move through Kanban phases",
      "Automate handoffs",
      "Track ad fund",
      "Surface AI insights"
    ],
    "outcomes": [
      "Leadership can see every store's stage, owner and checklist in one view.",
      "Department handoffs happen automatically, with SLA-tracked phases.",
      "Ad-fund defaulters escalate on schedule, making collection a repeatable process."
    ],
    "metrics": [
      [
        "95%",
        "Ad-fund compliance"
      ],
      [
        "25 hrs",
        "Saved per week"
      ],
      [
        "120+",
        "Stores supported"
      ],
      [
        "Faster",
        "Store openings"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-7-1.png",
        "width": 1184,
        "height": 609,
        "caption": "Franchise lifecycle Kanban — live store pipeline"
      },
      {
        "src": "/case-studies/page-7-2.png",
        "width": 1184,
        "height": 611,
        "caption": "Ad-fund dashboard and escalation ladder"
      }
    ]
  },
  {
    "slug": "una-homes",
    "client": "Una Homes",
    "title": "AI-powered RA bill verification",
    "category": "Real Estate",
    "industry": "Real estate & construction",
    "kind": "Custom AI",
    "sourcePage": 10,
    "summary": "AI document extraction and a 36-rule verification engine accelerate contractor bill approvals.",
    "business": "A real-estate developer whose contractors submit around 80 running-account bills each week. Each bill requires measurement checks, deductions and multi-layer approval.",
    "challenge": [
      "Manual verification took five to seven days per bill.",
      "Over-billing and missed deductions caused financial leakage.",
      "Weak audit trails made payment disputes difficult to resolve."
    ],
    "solution": "An AI verification engine extracts vendor and line-item data from uploaded documents. A 36-rule engine checks compliance, routes approvals and generates audit-ready Certificates of Payment.",
    "steps": [
      "Upload documents",
      "Extract bill data",
      "Run 36-rule checks",
      "Route approval",
      "Generate payment certificate"
    ],
    "outcomes": [
      "Bills that took a week can clear in under an hour.",
      "Over-billing is checked before payment, with every approval logged.",
      "Site engineers spend more time on site and less time verifying arithmetic."
    ],
    "metrics": [
      [
        "95%",
        "Faster processing"
      ],
      [
        "110 hrs",
        "Saved weekly"
      ],
      [
        "2–5%",
        "Leakage prevented"
      ],
      [
        "Full",
        "Audit traceability"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-10-1.png",
        "width": 1184,
        "height": 610,
        "caption": "Bill verification queue"
      },
      {
        "src": "/case-studies/page-10-2.png",
        "width": 1184,
        "height": 610,
        "caption": "Document upload and AI extraction"
      }
    ]
  },
  {
    "slug": "bhaskar-silk-mills",
    "client": "Bhaskar Silk Mills",
    "title": "One operating system, replacing 80+ spreadsheets",
    "category": "Manufacturing",
    "industry": "Textile manufacturing · Surat",
    "kind": "Custom AI",
    "sourcePage": 9,
    "summary": "Production, CRM, payments and automated follow-ups come together on one platform for 140 users.",
    "business": "A silk mill in Surat where 140 people manage production, sales and payment collection. The operation had outgrown its spreadsheet-based systems.",
    "challenge": [
      "More than 80 Google Sheets fragmented the operation.",
      "Phone and WhatsApp follow-ups lacked an audit trail.",
      "Payment collection and CRM were disconnected."
    ],
    "solution": "One platform combines sequential, time-based and conditional workflow automation with CRM, payment collection, WhatsApp notifications, dashboards and AI insights. The system supports Hindi and English.",
    "steps": [
      "Capture work",
      "Assign role-based tasks",
      "Automate follow-ups",
      "Track payments",
      "Analyze performance"
    ],
    "outcomes": [
      "The mill operates from a shared source of operational data.",
      "Payment collection follows an automated flow with a documented 91.3% recovery rate.",
      "Follow-ups are assigned, logged and auditable."
    ],
    "metrics": [
      [
        "80+",
        "Sheets replaced"
      ],
      [
        "91.3%",
        "Payment recovery"
      ],
      [
        "140",
        "Users in production"
      ],
      [
        "Zero",
        "Manual follow-ups"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-9-1.png",
        "width": 1184,
        "height": 610,
        "caption": "Payment collection flow — 487 instances"
      },
      {
        "src": "/case-studies/page-9-2.png",
        "width": 1184,
        "height": 610,
        "caption": "Flow engine across live operations"
      }
    ]
  },
  {
    "slug": "mahavir-traders",
    "client": "Mahavir Traders",
    "title": "RenewalOS — subscription renewal platform",
    "category": "Software & IT",
    "industry": "Engineering software reseller",
    "kind": "Custom AI",
    "sourcePage": 8,
    "summary": "Subscription renewal reminders, partner pipelines and revenue forecasts in a single workspace.",
    "business": "An authorised reseller of Bentley engineering software managing hundreds of annual renewals, with a channel network designed to scale to 200+ partners.",
    "challenge": [
      "Excel-based renewals led to missed deadlines and weak visibility.",
      "There was no tamper-proof history of client interactions.",
      "Partner access and revenue forecasting were difficult to manage at scale."
    ],
    "solution": "RenewalOS combines 90/60/30-day and overdue reminders, server-timestamped interaction logs, a renewal Kanban, partner-scoped access, WhatsApp automation and revenue forecasting. Encryption, role-based access and audit logs support accountability.",
    "steps": [
      "Import renewals",
      "Track dated buckets",
      "Log client interactions",
      "Move renewal pipeline",
      "Forecast revenue"
    ],
    "outcomes": [
      "Each renewal appears in a dated bucket.",
      "Partners see their own pipeline while the owner sees the full business.",
      "Interaction history and revenue forecasts come from recorded pipeline activity."
    ],
    "metrics": [
      [
        "98",
        "Subscriptions visible"
      ],
      [
        "68",
        "Overdue renewals surfaced"
      ],
      [
        "200+",
        "Partners servable"
      ],
      [
        "90/60/30",
        "Day reminder cadence"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-8-1.png",
        "width": 1400,
        "height": 663,
        "caption": "Renewal dashboard and dated buckets"
      },
      {
        "src": "/case-studies/page-8-2.png",
        "width": 1400,
        "height": 673,
        "caption": "Kanban pipeline from discussion to renewal"
      }
    ]
  },
  {
    "slug": "spectrum-dyes",
    "client": "Spectrum Dyes & Chemicals",
    "title": "A knowledge copilot with source-backed answers",
    "category": "Manufacturing",
    "industry": "Dyes & chemicals",
    "kind": "Custom AI",
    "sourcePage": 11,
    "summary": "Technical knowledge becomes a searchable, cited resource across 214 indexed documents.",
    "business": "A dyes and chemicals company with technical knowledge about formulations, fastness, compatibility and troubleshooting distributed across hundreds of documents.",
    "challenge": [
      "Knowledge was spread across PDF, Excel, Word and image files.",
      "Teams manually searched for answers customers needed immediately.",
      "New documents needed a controlled upload and refresh process."
    ],
    "solution": "A retrieval-augmented knowledge platform provides a client copilot and an admin portal. OCR, extraction, embeddings and vector search produce citation-grounded answers across four file formats and 13 live API endpoints.",
    "steps": [
      "Upload knowledge files",
      "Parse and run OCR",
      "Create search index",
      "Ask product questions",
      "Return cited answers"
    ],
    "outcomes": [
      "Teams can answer technical questions with supporting citations.",
      "Product sheets and SOPs pass through a controlled re-index workflow.",
      "Company knowledge becomes a searchable asset."
    ],
    "metrics": [
      [
        "214",
        "Documents indexed"
      ],
      [
        "4",
        "File formats handled"
      ],
      [
        "13",
        "Live API endpoints"
      ],
      [
        "2",
        "Portals delivered"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-11-1.png",
        "width": 1400,
        "height": 664,
        "caption": "Client-facing knowledge copilot"
      },
      {
        "src": "/case-studies/page-11-2.png",
        "width": 1400,
        "height": 665,
        "caption": "Admin upload panel for product sheets and SOPs"
      }
    ]
  },
  {
    "slug": "sanjay-jain-scaleos",
    "client": "Sanjay Jain",
    "title": "ScaleOS — one system for the whole business",
    "category": "Services",
    "industry": "Service & operations management",
    "kind": "Custom AI",
    "sourcePage": 12,
    "summary": "Tasks, sales, delivery, payments and people share a dashboard with automated WhatsApp updates.",
    "business": "A services business where sales, delivery, HR and operations lived in separate tools. The owner was the only connection between departments.",
    "challenge": [
      "Task assignments, overdue work and ownership were hard to see.",
      "Scattered leads and payments required manual status checks.",
      "Sales, delivery and HR lacked a shared view."
    ],
    "solution": "A ScaleOS deployment brings together tasks, CRM, delivery tracking, invoices, HRMS, team chat and an AI assistant. Checklists, follow-up reminders, payment alerts and WhatsApp notifications run automatically.",
    "steps": [
      "Capture lead or task",
      "Generate checklist",
      "Assign owner",
      "Send WhatsApp reminders",
      "Review live reports"
    ],
    "outcomes": [
      "One dashboard shows tasks, clients, payments and people.",
      "Assignments and approvals trigger real-time WhatsApp notifications.",
      "Management decisions use live MIS instead of outdated reports."
    ],
    "metrics": [
      [
        "48",
        "Task notifications automated"
      ],
      [
        "1",
        "Business-wide view"
      ],
      [
        "Auto",
        "Checklists and reminders"
      ],
      [
        "Live",
        "Management reports"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-12-1.png",
        "width": 1400,
        "height": 637,
        "caption": "Projects, employees and notifications dashboard"
      },
      {
        "src": "/case-studies/page-12-2.png",
        "width": 1400,
        "height": 541,
        "caption": "MIS snapshot with workload and overdue metrics"
      }
    ]
  },
  {
    "slug": "manoj-hirpara-ai-imagery",
    "client": "Manoj Hirpara",
    "title": "AI product imagery at catalog scale",
    "category": "Manufacturing",
    "industry": "Textile & e-commerce",
    "kind": "Custom AI",
    "sourcePage": 13,
    "summary": "Product photos become styled model imagery without studio scheduling or repeated shoots.",
    "business": "A saree and textile seller launching new designs frequently, each requiring model photography before it could be sold online.",
    "challenge": [
      "Sourcing models delayed product shoots.",
      "Studios, crews and post-production made updates expensive.",
      "Manual photography could not keep pace with launches."
    ],
    "solution": "The workflow takes a product photo and model-style selection, generates photorealistic imagery, upscales the output and delivers catalog-ready assets to Google Drive.",
    "steps": [
      "Submit product image",
      "Select model style",
      "Generate AI render",
      "Upscale output",
      "Deliver catalog assets"
    ],
    "outcomes": [
      "Fabric photos become model imagery in minutes.",
      "Catalog refreshes no longer depend on booking studios and models.",
      "Model styles can be adapted for different audiences and platforms."
    ],
    "metrics": [
      [
        "Minutes",
        "Instead of days"
      ],
      [
        "Lower",
        "Cost per catalog"
      ],
      [
        "On demand",
        "Product visuals"
      ],
      [
        "Flexible",
        "Model styles"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-13-1.png",
        "width": 1051,
        "height": 1400,
        "caption": "Input fabric detail"
      },
      {
        "src": "/case-studies/page-13-2.png",
        "width": 1049,
        "height": 1400,
        "caption": "AI-generated model render"
      },
      {
        "src": "/case-studies/page-13-3.png",
        "width": 1049,
        "height": 1400,
        "caption": "Styled catalog image"
      }
    ]
  },
  {
    "slug": "cheque-reminder-system",
    "client": "Dhaval Ukani",
    "title": "Automated cheque reminder system",
    "category": "Real Estate",
    "industry": "Architecture & construction",
    "kind": "Automation",
    "sourcePage": 14,
    "summary": "A central cheque tracker sends timely WhatsApp reminders before deposit dates.",
    "business": "A construction coordination professional managing post-dated cheques across multiple builder projects.",
    "challenge": [
      "Cheque deposit dates had no reliable reminder system.",
      "Insufficient balances created bounce risk and relationship friction.",
      "Cheque images and schedules were scattered."
    ],
    "solution": "Each cheque is digitised with its image and due date. A 30-day pre-deposit countdown drives scheduled WhatsApp reminders, delivery confirmation and automatic admin notifications.",
    "steps": [
      "Digitise cheque data",
      "Start 30-day tracking",
      "Send weekly reminders",
      "Confirm delivery",
      "Notify admin"
    ],
    "outcomes": [
      "Parties receive reminders in time to arrange funds.",
      "Cheque images and due dates live in an auditable dashboard.",
      "Automated messages replace manual reminder calls."
    ],
    "metrics": [
      [
        "Zero",
        "Manual follow-ups"
      ],
      [
        "30-day",
        "Pre-deposit countdown"
      ],
      [
        "12",
        "Schedules tracked"
      ],
      [
        "Instant",
        "WhatsApp alerts"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-14-1.png",
        "width": 1400,
        "height": 701,
        "caption": "Automated WhatsApp cheque reminder"
      },
      {
        "src": "/case-studies/page-14-2.png",
        "width": 1400,
        "height": 638,
        "caption": "Central cheque tracking dashboard"
      }
    ]
  },
  {
    "slug": "email-intelligence",
    "client": "Dhaval Ukani",
    "title": "Daily & weekly email intelligence",
    "category": "Real Estate",
    "industry": "Architecture & construction",
    "kind": "Automation",
    "sourcePage": 15,
    "summary": "Priority enquiries and quotations surface in scheduled, searchable email reports.",
    "business": "An architecture and construction practice with a busy inbox, where critical enquiries competed with newsletters, copied messages and other noise.",
    "challenge": [
      "Important quotations and enquiries were buried in the inbox.",
      "Priority communication was mixed with routine messages.",
      "There was no reliable reporting archive."
    ],
    "solution": "Daily and weekly n8n workflows extract emails, categorise relevant messages, generate PDF summaries and deliver organised reports automatically.",
    "steps": [
      "Trigger schedule",
      "Extract emails",
      "Filter and categorise",
      "Generate PDF",
      "Deliver summary"
    ],
    "outcomes": [
      "Daily digests surface priority enquiries.",
      "Weekly PDFs provide a searchable communication archive.",
      "Inbox review takes minutes instead of hours."
    ],
    "metrics": [
      [
        "Daily",
        "Priority digest"
      ],
      [
        "Weekly",
        "Consolidated report"
      ],
      [
        "PDF",
        "Searchable archive"
      ],
      [
        "Hours",
        "Inbox time saved"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-15-1.png",
        "width": 1400,
        "height": 558,
        "caption": "Email-to-sheet automation"
      },
      {
        "src": "/case-studies/page-15-2.png",
        "width": 1400,
        "height": 516,
        "caption": "Weekly summary workflow"
      }
    ]
  },
  {
    "slug": "kishor-pawar-task-visibility",
    "client": "Kishor Pawar",
    "title": "Task visibility with WhatsApp automation",
    "category": "Services",
    "industry": "Interior design",
    "kind": "Automation",
    "sourcePage": 16,
    "summary": "Named task owners, visible deadlines and WhatsApp summaries replace repeated chase-up calls.",
    "business": "An interior design firm coordinating multiple client projects and site teams, with assignments often discussed in meetings but lost afterwards.",
    "challenge": [
      "Managers could not clearly see pending and completed tasks.",
      "Gaps in ownership weakened accountability.",
      "Purchase-order team activity was invisible to the wider workflow."
    ],
    "solution": "A central task platform tracks assignments and status in real time, with WhatsApp updates, daily pending summaries and weekly reports.",
    "steps": [
      "Create task",
      "Assign owner",
      "Track status",
      "Send WhatsApp update",
      "Report progress"
    ],
    "outcomes": [
      "Managers see pending, ongoing and completed work together.",
      "Each task has an owner and visible deadline.",
      "Daily summaries replace manual follow-up cycles."
    ],
    "metrics": [
      [
        "200",
        "Automated notifications"
      ],
      [
        "39",
        "Pending tasks surfaced"
      ],
      [
        "6",
        "Employees tracked"
      ],
      [
        "Zero",
        "Manual follow-up cycles"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-16-1.png",
        "width": 1400,
        "height": 1345,
        "caption": "Manager dashboard — pending and completed work"
      },
      {
        "src": "/case-studies/page-16-2.png",
        "width": 1400,
        "height": 946,
        "caption": "Task list workspace"
      }
    ]
  },
  {
    "slug": "aavkar-valuation-workflow",
    "client": "Ravibhai · Aavkar",
    "title": "Property valuation workflow automation",
    "category": "Real Estate",
    "industry": "Architecture & property valuation",
    "kind": "Automation",
    "sourcePage": 17,
    "summary": "Bank requests flow from email into a tracker, with overdue flags and WhatsApp completion updates.",
    "business": "A property valuation practice serving banks. Assignments arrive by email, are dispatched to field engineers and must be tracked through completion.",
    "challenge": [
      "Valuation requests required manual processing.",
      "Customer data, assignments and overdue statuses needed sheet maintenance.",
      "WhatsApp completions had to be matched and removed manually."
    ],
    "solution": "The system extracts requests from email and adds customer details to a tracking sheet. Pending requests are marked old after one day, and detected WhatsApp completion messages automatically remove finished records.",
    "steps": [
      "Read valuation email",
      "Add customer to tracker",
      "Assign and tag status",
      "Detect completion message",
      "Remove completed record"
    ],
    "outcomes": [
      "Requests enter the tracker automatically.",
      "Overdue work flags itself after one day.",
      "Completion updates close records without manual sheet maintenance."
    ],
    "metrics": [
      [
        "Auto",
        "Email-to-sheet capture"
      ],
      [
        "1 day",
        "Overdue auto-tagging"
      ],
      [
        "Zero",
        "Manual deletion"
      ],
      [
        "Faster",
        "Request completion"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-17-1.png",
        "width": 1400,
        "height": 615,
        "caption": "Live customer tracking sheet"
      },
      {
        "src": "/case-studies/page-17-2.png",
        "width": 1400,
        "height": 640,
        "caption": "Overdue-status tagging workflow"
      }
    ]
  },
  {
    "slug": "sales-call-analysis",
    "client": "Chintan Shah",
    "title": "AI sales call analysis system",
    "category": "Services",
    "industry": "Sales operations",
    "kind": "Automation",
    "sourcePage": 18,
    "summary": "Every sales call is transcribed, scored against the script and added to an agent performance history.",
    "business": "A sales operation with daily call volumes, where managers needed to know whether agents followed approved scripts.",
    "challenge": [
      "Manual recording reviews were slow and inconsistent.",
      "Script adherence was difficult to verify per call.",
      "Reports and improvement history lacked a central home."
    ],
    "solution": "An AI pipeline transcribes calls, compares conversations with the approved script, scores compliance, generates shareable reports and records agent-level results in a central performance sheet.",
    "steps": [
      "Upload recording",
      "Transcribe audio",
      "Analyze script adherence",
      "Generate AI report",
      "Update performance sheet"
    ],
    "outcomes": [
      "Every call can be evaluated, not just sampled recordings.",
      "Agents receive specific improvement areas.",
      "Coaching is supported by a traceable performance history."
    ],
    "metrics": [
      [
        "100%",
        "Calls evaluated"
      ],
      [
        "Per call",
        "Agent compliance score"
      ],
      [
        "Central",
        "Performance history"
      ],
      [
        "Faster",
        "Feedback cycles"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-18-1.png",
        "width": 1400,
        "height": 587,
        "caption": "AI call report generation workflow"
      },
      {
        "src": "/case-studies/page-18-2.png",
        "width": 1400,
        "height": 598,
        "caption": "Central agent performance sheet"
      }
    ]
  },
  {
    "slug": "sj-sangath-interest-calculator",
    "client": "SJ Sangath",
    "title": "Delayed payment interest calculator",
    "category": "Real Estate",
    "industry": "Real estate & construction",
    "kind": "Custom AI",
    "sourcePage": 19,
    "summary": "Milestone-based balances, delayed interest and customer certificates are generated in one system.",
    "business": "A real-estate developer selling flats on milestone-based payment schedules, with delayed-payment calculations spread across Tally and Excel.",
    "challenge": [
      "Interest calculations were manual.",
      "Balances, delays and formulas required repeated verification.",
      "Preparing demand notices took hours and risked calculation errors."
    ],
    "solution": "A dedicated calculator combines customer and flat details with milestone schedules to calculate outstanding amounts, delayed days, interest, GST and settlement totals. It produces a customer-ready interest certificate.",
    "steps": [
      "Enter flat details",
      "Import milestones",
      "Calculate outstanding",
      "Compute delayed interest",
      "Generate certificate"
    ],
    "outcomes": [
      "Statements take minutes instead of an afternoon.",
      "A configured formula is applied consistently.",
      "Customers receive a clear, professional calculation certificate."
    ],
    "metrics": [
      [
        "Minutes",
        "Per notice"
      ],
      [
        "Auto",
        "Milestone calculations"
      ],
      [
        "PDF",
        "Customer-ready certificate"
      ],
      [
        "12%",
        "Configured interest rate"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-19-1.png",
        "width": 1400,
        "height": 687,
        "caption": "Interest calculator — customer and flat details"
      },
      {
        "src": "/case-studies/page-19-2.png",
        "width": 995,
        "height": 1400,
        "caption": "Generated customer interest certificate"
      }
    ]
  },
  {
    "slug": "stock-keeping-system",
    "client": "SK Lawangwala",
    "title": "Stock keeping sheet system",
    "category": "Manufacturing",
    "industry": "Textile manufacturing",
    "kind": "Automation",
    "sourcePage": 20,
    "summary": "Machine-level production capture and automatic totals make daily reporting a one-click task.",
    "business": "A textile manufacturer operating machines across factories, where production was recorded on paper and consolidated into spreadsheets each evening.",
    "challenge": [
      "Production was recorded manually at shift end.",
      "Remaining meters, totals and stock balances were calculated by hand.",
      "Daily reports were slow and difficult to search."
    ],
    "solution": "Operators enter machine-wise output in a central system. Remaining meters and totals are calculated automatically, with filters for dates, factories and machines and a formatted Excel export.",
    "steps": [
      "Enter production",
      "Store centrally",
      "Calculate remaining meters",
      "Summarise quality and machines",
      "Download Excel report"
    ],
    "outcomes": [
      "Production is captured at the machine.",
      "Balances and remaining meters calculate automatically.",
      "Searchable data supports a one-click daily report."
    ],
    "metrics": [
      [
        "46,221",
        "Meters tracked live"
      ],
      [
        "1 click",
        "Excel report"
      ],
      [
        "5",
        "Quality lines tracked"
      ],
      [
        "Central",
        "Production database"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-20-1.png",
        "width": 1400,
        "height": 1338,
        "caption": "Factory report dashboard and filters"
      },
      {
        "src": "/case-studies/page-20-2.png",
        "width": 1400,
        "height": 268,
        "caption": "Excel report with quality-wise totals"
      }
    ]
  },
  {
    "slug": "dispatch-ocr-follow-up",
    "client": "SK Lawangwala",
    "title": "Dispatch OCR & customer follow-up",
    "category": "Manufacturing",
    "industry": "Textile manufacturing",
    "kind": "Automation",
    "sourcePage": 21,
    "summary": "Dispatch photos become structured records, WhatsApp confirmations and tracked customer responses.",
    "business": "The mill's dispatch team shared parcel photos in WhatsApp groups, typed details manually and relied on memory for customer follow-ups.",
    "challenge": [
      "Dispatch photos had no central database.",
      "Employees manually transcribed customer details.",
      "Sample requirements and follow-ups stayed in conversations."
    ],
    "solution": "A monitored Drive folder passes dispatch images to AI OCR. Extracted details go into Sheets, WhatsApp confirmations collect sample requirements, and customer responses are written back to the dispatch record.",
    "steps": [
      "Upload dispatch image",
      "Extract data with OCR",
      "Create record",
      "Send WhatsApp follow-up",
      "Sync customer response"
    ],
    "outcomes": [
      "Dispatch records are created from images.",
      "Confirmations and follow-ups happen automatically.",
      "Customer responses remain linked to the original dispatch."
    ],
    "metrics": [
      [
        "OCR",
        "Dispatch extraction"
      ],
      [
        "Auto",
        "WhatsApp follow-up"
      ],
      [
        "Synced",
        "Customer responses"
      ],
      [
        "Central",
        "Dispatch database"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-21-1.png",
        "width": 1400,
        "height": 670,
        "caption": "Drive-to-OCR-to-Sheets workflow"
      },
      {
        "src": "/case-studies/page-21-2.png",
        "width": 1400,
        "height": 684,
        "caption": "WhatsApp follow-up automation"
      }
    ]
  },
  {
    "slug": "arihant-support-automation",
    "client": "Arihant Infotech",
    "title": "AI-powered support email automation",
    "category": "Software & IT",
    "industry": "IT services & software support",
    "kind": "Automation",
    "sourcePage": 22,
    "summary": "Support requests are logged, acknowledged and followed through to a resolution email automatically.",
    "business": "An IT services and software support company where incoming requests needed a person to acknowledge, log, track and confirm resolution.",
    "challenge": [
      "Support emails lacked instant acknowledgement and a stated timeline.",
      "Executives repeatedly drafted similar replies.",
      "Ticket status and communication history were slow to manage."
    ],
    "solution": "A monitored Gmail inbox logs tickets in Sheets. AI drafts acknowledgements with a 15-working-day resolution timeline, monitors status changes and sends confirmation when an issue is resolved.",
    "steps": [
      "Monitor inbox",
      "Log support ticket",
      "Send acknowledgement",
      "Track status",
      "Send resolution email"
    ],
    "outcomes": [
      "Customers receive prompt acknowledgement and a communicated timeline.",
      "Executives avoid repeatedly writing the same responses.",
      "A shared tracker connects ticket status with automated closure messages."
    ],
    "metrics": [
      [
        "Instant",
        "Acknowledgement"
      ],
      [
        "15 days",
        "Working-day timeline"
      ],
      [
        "Central",
        "Ticket tracker"
      ],
      [
        "Auto",
        "Resolution follow-up"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-22-1.png",
        "width": 1400,
        "height": 572,
        "caption": "Gmail, Sheets and AI acknowledgement workflow"
      },
      {
        "src": "/case-studies/page-22-2.png",
        "width": 1400,
        "height": 589,
        "caption": "Resolution email triggered by status change"
      }
    ]
  },
  {
    "slug": "kbp-interior",
    "client": "KBP Interior",
    "title": "Task management with WhatsApp automation",
    "category": "Services",
    "industry": "Interior design & execution",
    "kind": "Automation",
    "sourcePage": 23,
    "summary": "Project tasks, employee progress and overdue reminders are visible across designers and site teams.",
    "business": "An interior design and execution firm coordinating designers, site supervisors and vendors across parallel projects.",
    "challenge": [
      "Tasks were not assigned and tracked in a shared system.",
      "Completed and pending work lacked a clear overview.",
      "Manual follow-ups and unclear ownership delayed execution."
    ],
    "solution": "A project-focused task system provides employee dashboards, real-time assignments, progress tracking, overdue reminders, WhatsApp notifications, notification logs and scheduled reports.",
    "steps": [
      "Create project task",
      "Assign employee",
      "Send WhatsApp alert",
      "Track progress",
      "Review reports"
    ],
    "outcomes": [
      "Tasks have an owner, status and deadline.",
      "Site teams receive alerts as work is assigned.",
      "Live reports reveal overdue work before it delays projects."
    ],
    "metrics": [
      [
        "Real-time",
        "Task visibility"
      ],
      [
        "WhatsApp",
        "Alerts and reports"
      ],
      [
        "9",
        "Notifications logged"
      ],
      [
        "Clear",
        "Task ownership"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-23-1.png",
        "width": 1400,
        "height": 642,
        "caption": "Task dashboard with project metrics"
      },
      {
        "src": "/case-studies/page-23-2.png",
        "width": 1400,
        "height": 642,
        "caption": "WhatsApp notification logs and reports"
      }
    ]
  },
  {
    "slug": "just-roofing",
    "client": "Just Roofing Solutions",
    "title": "ERP operations & analytics system",
    "category": "Manufacturing",
    "industry": "Manufacturing & trading",
    "kind": "Custom AI",
    "sourcePage": 24,
    "summary": "Site reports, products, project controls and payment exposure come together in a live ERP dashboard.",
    "business": "A roofing manufacturer and trader managing field projects, measurements, labour and invoicing across fragmented spreadsheets.",
    "challenge": [
      "Daily calculations and reports were manual.",
      "Product information had no central database.",
      "Project performance and payments were scattered across sheets."
    ],
    "solution": "An ERP centralises products and inventory, automates calculations and provides area-wise analytics, inquiry-to-retention tracking, project controls, payment exposure and live business metrics.",
    "steps": [
      "Capture inquiry",
      "Manage products",
      "Track project controls",
      "Automate calculations",
      "View reports"
    ],
    "outcomes": [
      "One dashboard replaces multiple spreadsheets.",
      "Site reports include measurements, labour and schedule impact.",
      "Pending payments and retention receivables stay visible."
    ],
    "metrics": [
      [
        "Live",
        "Business metrics"
      ],
      [
        "Auto",
        "ERP reporting"
      ],
      [
        "Central",
        "Product database"
      ],
      [
        "₹25,000",
        "Pending payments visible"
      ]
    ],
    "images": [
      {
        "src": "/case-studies/page-24-1.png",
        "width": 1400,
        "height": 618,
        "caption": "Owner dashboard — payment exposure and retention"
      },
      {
        "src": "/case-studies/page-24-2.png",
        "width": 1400,
        "height": 639,
        "caption": "Daily site reports with measurements and labour"
      }
    ]
  }
];
export const filters = ['All', 'Retail & F&B', 'Real Estate', 'Manufacturing', 'Services', 'Software & IT', 'Automation', 'Custom AI'] as const;
export const portfolioStats = [['18', 'Client case studies'], ['20+', 'Industries served'], ['60+', 'Businesses served with AI'], ['110+', 'AI solutions & automations']] as const;
