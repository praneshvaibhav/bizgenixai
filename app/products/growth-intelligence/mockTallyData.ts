import { DebtorItem, InventoryItem, CashFlowWeek, AIQueryOption, PricingPlan } from '../types';

export const mockDashboardMetrics = {
  companyName: "Apex Synthetics & Polymers Ltd",
  tallyVersion: "TallyPrime 4.1 Gold",
  lastSync: "2 minutes ago",
  syncStatus: "Live & Synced",
  totalReceivables: 69500000, // ₹6.95 Cr
  overdueReceivables: 61900000, // ₹6.19 Cr
  totalPayables: 16700000, // ₹1.67 Cr
  overduePayables: 4280000, // ₹42.8 L
  cashAndBankBalance: 9708000, // ₹97.08 L
  projectedRunwayDays: 19,
  dsoAverage: 54, // days sales outstanding
  dsoTarget: 40,
};

export const mockDebtors: DebtorItem[] = [
  {
    id: "deb-01",
    name: "Krystal Tex-Fab Pvt Ltd",
    gstin: "24AAACK1234F1Z8",
    city: "Surat, Gujarat",
    outstanding: 2840000,
    overdueDays: 78,
    agingBucket: "61-90",
    contactPerson: "Mahesh Agarwal",
    phone: "+91 98251 44321",
    creditLimit: 2000000,
    lastPaymentDate: "2026-07-29",
    riskStatus: "critical"
  },
  {
    id: "deb-02",
    name: "Maruti Polyblend Processors",
    gstin: "27AABCM8942E1ZS",
    city: "Bhiwandi, Maharashtra",
    outstanding: 1980000,
    overdueDays: 64,
    agingBucket: "61-90",
    contactPerson: "Dhiren Chitalia",
    phone: "+91 98190 23112",
    creditLimit: 1500000,
    lastPaymentDate: "2026-08-12",
    riskStatus: "critical"
  },
  {
    id: "deb-03",
    name: "Navkar Printpack LLP",
    gstin: "24AACCN5512B1ZX",
    city: "Ahmedabad, Gujarat",
    outstanding: 1420000,
    overdueDays: 92,
    agingBucket: "90+",
    contactPerson: "Hemant Shah",
    phone: "+91 98791 88901",
    creditLimit: 1200000,
    lastPaymentDate: "2026-07-15",
    riskStatus: "critical"
  },
  {
    id: "deb-04",
    name: "Omkar Polychem Industries",
    gstin: "08AABCO3409M1ZA",
    city: "Jaipur, Rajasthan",
    outstanding: 1850000,
    overdueDays: 42,
    agingBucket: "31-60",
    contactPerson: "Vikram Rathore",
    phone: "+91 94140 19283",
    creditLimit: 2500000,
    lastPaymentDate: "2026-09-02",
    riskStatus: "moderate"
  },
  {
    id: "deb-05",
    name: "Siddheshwar Yarn Distributors",
    gstin: "27AAGCS7712C1ZZ",
    city: "Ichalkaranji, Maharashtra",
    outstanding: 760000,
    overdueDays: 18,
    agingBucket: "0-30",
    contactPerson: "Sanjay Patil",
    phone: "+91 98220 54129",
    creditLimit: 1000000,
    lastPaymentDate: "2026-09-28",
    riskStatus: "healthy"
  }
];

export const mockAgingBuckets = [
  { bucket: "0 - 30 Days", amount: 7600000, count: 24, percent: 11, color: "bg-emerald-500" },
  { bucket: "31 - 60 Days", amount: 18400000, count: 18, percent: 26, color: "bg-teal-500" },
  { bucket: "61 - 90 Days", amount: 24500000, count: 14, percent: 35, color: "bg-amber-500" },
  { bucket: "90+ Days (High Risk)", amount: 19000000, count: 9, percent: 28, color: "bg-rose-500" },
];

export const mockCashFlowWeeks: CashFlowWeek[] = [
  { week: "Week 1 (Oct 16 - 22)", expectedInflow: 4850000, expectedOutflow: 3820000, netCashFlow: 1030000, closingBalance: 10738000 },
  { week: "Week 2 (Oct 23 - 29)", expectedInflow: 3120000, expectedOutflow: 5400000, netCashFlow: -2280000, closingBalance: 8458000 },
  { week: "Week 3 (Oct 30 - Nov 5)", expectedInflow: 5900000, expectedOutflow: 4100000, netCashFlow: 1800000, closingBalance: 10258000 },
  { week: "Week 4 (Nov 6 - 12)", expectedInflow: 2600000, expectedOutflow: 3200000, netCashFlow: -600000, closingBalance: 9658000 },
];

export const mockDeadInventory: InventoryItem[] = [
  {
    id: "inv-01",
    itemName: "Poly Ester Microfilament 75D/72F Raw White",
    category: "Polyester Yarn",
    godown: "Surat Central Godown - Bay 4",
    quantity: 4200,
    unit: "Kg",
    valueLocked: 3820000,
    daysIdle: 134,
    status: "Dead Stock"
  },
  {
    id: "inv-02",
    itemName: "Masterbatch Carbon Black MB-900 High Dispersion",
    category: "Polymer Additives",
    godown: "Bhiwandi Logistic Hub - Rack B",
    quantity: 1850,
    unit: "Kg",
    valueLocked: 2450000,
    daysIdle: 110,
    status: "Dead Stock"
  },
  {
    id: "inv-03",
    itemName: "High Density Polyethylene HD5301 Granules",
    category: "Raw Polymers",
    godown: "Ahmedabad Sanand Unit",
    quantity: 3600,
    unit: "Kg",
    valueLocked: 2160000,
    daysIdle: 85,
    status: "Slow Moving"
  }
];

export const mockAIQueries: AIQueryOption[] = [
  {
    id: "q1",
    query: "Which 5 customers owe over ₹5 Lakhs past 45 days?",
    summary: "Found 5 debtor accounts crossing the ₹5 Lakhs threshold and exceeding 45 days aging. Total exposure is ₹80.9 Lakhs.",
    explanation: "These accounts are currently holding 11.6% of your working capital. Automated WhatsApp reminders with itemized invoice copies have not been dispatched in the last 14 days for 3 of them.",
    tableData: {
      headers: ["Customer Name", "Total Due", "Aging (Days)", "Credit Limit", "Status"],
      rows: [
        ["Krystal Tex-Fab Pvt Ltd", "₹28,40,000", "78 days", "₹20,00,000", "Critical (Over Limit)"],
        ["Maruti Polyblend Processors", "₹19,80,000", "64 days", "₹15,00,000", "Critical (Over Limit)"],
        ["Navkar Printpack LLP", "₹14,20,000", "92 days", "₹12,00,000", "High Risk (90+ Days)"],
        ["Omkar Polychem Industries", "₹18,50,000", "52 days", "₹25,00,000", "Follow-up Due"],
        ["Shree Hari Synthetics", "₹7,20,000", "48 days", "₹10,00,000", "Grace Period Ended"]
      ]
    },
    actionLabel: "Send Batch WhatsApp Reminders with Ledgers",
    actionPayload: {
      recipient: "Krystal Tex-Fab Pvt Ltd (Mahesh Agarwal)",
      amount: "₹28,40,000",
      billRef: "INV-2026/0419, INV-2026/0488",
      phone: "+91 98251 44321"
    }
  },
  {
    id: "q2",
    query: "What is our projected cash balance by next Friday?",
    summary: "Projected bank & cash balance by next Friday (Oct 24) is ₹84.58 Lakhs after factoring planned GST and vendor payouts.",
    explanation: "Cash balance will drop by ₹12.5 Lakhs due to statutory GST challan payment (₹18.4L) and raw material supplier clearance (₹35.6L). Inflow of ₹41.5L expected from 6 committed debtor accounts.",
    tableData: {
      headers: ["Date", "Description / Head", "Type", "Amount", "Projected Bank Bal"],
      rows: [
        ["Oct 17, 2026", "Opening Combined Bank Balance", "Opening", "—", "₹97,08,000"],
        ["Oct 19, 2026", "Receivables from Krystal & Omkar", "Expected Inflow", "+ ₹24,00,000", "₹1,21,08,000"],
        ["Oct 20, 2026", "Monthly GST Return Payout", "Tax Outflow", "- ₹18,40,000", "₹1,02,68,000"],
        ["Oct 22, 2026", "Raw Material Supplier Payout (IOCL)", "Payable Outflow", "- ₹35,60,000", "₹67,08,000"],
        ["Oct 24, 2026", "Cheque Clearance (4 Party Ledgers)", "Expected Inflow", "+ ₹17,50,000", "₹84,58,000"]
      ]
    },
    actionLabel: "View 30-Day Liquidity Forecast & Buffer Actions",
    actionPayload: {
      recipient: "Finance Controller & MD",
      amount: "₹84,58,000",
      billRef: "CASHFLOW-FORECAST-OCT26",
      phone: "+91 98200 11223"
    }
  },
  {
    id: "q3",
    query: "Show me non-moving textile fabric inventory across Surat godowns.",
    summary: "Identified 3 dead SKU batches in Surat godowns idle for >90 days, locking up ₹84.3 Lakhs in working capital.",
    explanation: "Carrying cost is approximately ₹92,000/month. Releasing this inventory at a 4% commercial discount will inject ₹80.9L directly into your primary operating account.",
    tableData: {
      headers: ["Item Code & Description", "Warehouse Location", "Idle Days", "Qty (Kg)", "Locked Capital"],
      rows: [
        ["POLY-75D/72F Microfilament RW", "Surat Godown #4", "134 days", "4,200", "₹38,20,000"],
        ["SPUN-POLY-30S Grey Cone", "Surat Ring Road Unit", "104 days", "3,100", "₹24,50,000"],
        ["TEXT-DOBBY 58-inch Greige", "Surat GIDC Bay A", "96 days", "8,400 Mtrs", "₹21,60,000"]
      ]
    },
    actionLabel: "Export Liquidation Sheet to Sales Head",
    actionPayload: {
      recipient: "Surat Sales Head (Pravin Solanki)",
      amount: "₹84,30,000",
      billRef: "INVENTORY-LIQUIDATION-SURAT",
      phone: "+91 98240 99887"
    }
  }
];

export const mockPricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Growth Starter",
    description: "Ideal for single-company Indian manufacturers & traders needing real-time debtor tracking & WhatsApp follow-ups.",
    monthlyPrice: 2999,
    annualPrice: 2499,
    turnoverLimit: "Up to ₹15 Cr Turnover",
    tallyCompanies: "1 Tally Company (Single GSTIN)",
    features: [
      "5MB On-Premise Tally Read-Only Connector",
      "Executive Mobile & Web Dashboard",
      "Receivables Aging Buckets (0-90+ days)",
      "Automated WhatsApp Ledger Dispatches (300/mo)",
      "Daily Automatic Tally Sync",
      "Bank & Cash Balance Monitor",
      "Standard WhatsApp & Email Support"
    ]
  },
  {
    id: "pro",
    name: "Virtual CFO Pro",
    badge: "Most Popular",
    recommended: true,
    description: "The complete financial intelligence suite with Cash Flow forecasting, Ask GI AI assistant, and automated collection rules.",
    monthlyPrice: 5999,
    annualPrice: 4999,
    turnoverLimit: "Up to ₹60 Cr Turnover",
    tallyCompanies: "Up to 3 Tally Companies / Branches",
    features: [
      "Everything in Starter, plus:",
      "Ask GI Generative AI Natural Language Querying",
      "4-Week Rolling Cash Flow Runway Forecast",
      "Smart Collection Engine with Payment Links & UPI",
      "Dead Stock & Inventory Velocity Analysis",
      "15-Minute Near Real-Time Tally Sync",
      "Role-Based Access (Hide margins from sales reps)",
      "Virtual CFO Weekly Strategy Briefs via WhatsApp",
      "Dedicated Relationship Manager"
    ]
  },
  {
    id: "enterprise",
    name: "Group Enterprise",
    description: "Designed for conglomerates, multi-branch firms, and group entities managing complex inter-company ledgers.",
    monthlyPrice: 11999,
    annualPrice: 9999,
    turnoverLimit: "₹60 Cr - ₹500 Cr+ Turnover",
    tallyCompanies: "Unlimited Tally Companies & Multi-GSTIN",
    features: [
      "Everything in Pro, plus:",
      "Consolidated Multi-Branch & Group Balance Sheets",
      "Inter-Company Reconciliation Automation",
      "Custom Working Capital Triggers & Approval Flows",
      "Custom ERP Connectors (SAP / Busy hybrid support)",
      "Quarterly Onsite Virtual CFO Review",
      "Enterprise SLA with 99.9% Uptime Guarantee",
      "Strict Local Data Governance with Custom Audit Logs"
    ]
  }
];

export const mockFaqs = [
  {
    question: "Will installing the connector slow down our Tally or corrupt accounting data?",
    answer: "No. The Bizgenix connector is a lightweight 5MB service that uses Tally's standard, read-only XML/ODBC interface. It never writes back, modifies, or deletes any vouchers, ledgers, or transactions. Your Tally data remains 100% intact and untouched."
  },
  {
    question: "Do our accountants need technical coding or database expertise?",
    answer: "Zero technical skills needed. Setup takes under 15 minutes: download the connector installer, enter your secure Bizgenix token, and select your Tally company. Your live executive dashboard and WhatsApp triggers activate automatically."
  },
  {
    question: "Can our sales executives see customer outstandings without viewing company profit margins?",
    answer: "Yes, absolutely. Our granular Role-Based Access Control (RBAC) allows you to restrict sales personnel to only view the accounts they manage, while completely masking gross margins, purchase ledger rates, and bank balances."
  },
  {
    question: "How do automated WhatsApp payment follow-ups work?",
    answer: "You define the rules (for example: send a friendly reminder on Day 30, a formal statement on Day 45, and an escalation notice on Day 60). Bizgenix drafts the personalized WhatsApp message with the itemized bill reference, outstanding balance, and your bank NEFT/UPI details. You can review and approve with one click or set full autopilot."
  },
  {
    question: "Where is our financial data stored, and who has access to it?",
    answer: "All data transmission uses 256-bit TLS bank-grade encryption. We adhere strictly to Indian data privacy regulations and never monetize or share your financial records with third parties. Multi-factor authentication protects all user accounts."
  }
];
