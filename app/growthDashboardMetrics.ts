// Metric locations in the supplied 1600 × 788 dashboard screenshot.
// Dates, fiscal years, and version identifiers are labels, not count-up totals.
export const dashboardMetrics = [
  { label: 'Decisions needing attention', value: 3, x: 364, y: 114, width: 28, height: 42, fontSize: 40, background: '#FFFFFF', font: 'Arial, sans-serif' },
  { label: 'Verified vouchers', value: 51083, x: 419, y: 276, width: 29, height: 11, fontSize: 8, color: '#FFFFFF', background: '#000000', font: 'Arial, sans-serif' },
  { label: 'Grounded decisions', value: 3, x: 1127, y: 276, width: 6, height: 11, fontSize: 8, color: '#FFFFFF', background: '#000000', font: 'Arial, sans-serif' },
  { label: 'Revenue', value: 13.10, decimals: 2, prefix: '₹', suffix: ' Cr', x: 378, y: 381, width: 178, height: 27, fontSize: 22 },
  { label: 'Receivables', value: 6.95, decimals: 2, prefix: '₹', suffix: ' Cr', x: 593, y: 381, width: 178, height: 27, fontSize: 22 },
  { label: 'Overdue receivables', value: 6.19, decimals: 2, prefix: '₹', suffix: ' Cr', x: 808, y: 381, width: 178, height: 27, fontSize: 22, color: '#5AAA6C' },
  { label: 'Payables', value: 1.67, decimals: 2, prefix: '₹', suffix: ' Cr', x: 1022, y: 381, width: 178, height: 27, fontSize: 22 },
  { label: 'Overdue payables', value: 1.59, decimals: 2, prefix: '₹', suffix: ' Cr', x: 1236, y: 381, width: 178, height: 27, fontSize: 22, color: '#5AAA6C' },
  { label: 'Bank balance', value: 93.80, decimals: 2, prefix: '₹', suffix: ' L', x: 378, y: 496, width: 178, height: 27, fontSize: 22 },
  { label: 'Cash in hand', value: 3.28, decimals: 2, prefix: '₹', suffix: ' L', x: 593, y: 496, width: 178, height: 27, fontSize: 22 },
  { label: 'Closing stock', value: 49.01, decimals: 2, prefix: '₹', suffix: ' L', x: 808, y: 496, width: 178, height: 27, fontSize: 22 },
  { label: 'Customers', value: 307, x: 1022, y: 496, width: 178, height: 27, fontSize: 22 },
  { label: 'Products', value: 35, x: 1236, y: 496, width: 178, height: 27, fontSize: 22 },
  { label: 'Performance period revenue', value: 13.10, decimals: 2, prefix: '₹', suffix: ' Cr', x: 385, y: 628, width: 170, height: 30, fontSize: 26 },
  { label: 'Performance period invoices', value: 766, x: 487, y: 668, width: 17, height: 11, fontSize: 8, font: 'Arial, sans-serif', weight: 400 },
  { label: 'Sales evidence invoices', value: 766, x: 988, y: 652, width: 17, height: 11, fontSize: 8, font: 'Arial, sans-serif', weight: 400 },
  { label: 'Previous financial year revenue', value: 27.09, decimals: 2, prefix: '₹', suffix: ' Cr', x: 385, y: 727, width: 100, height: 14, fontSize: 11 },
  { label: 'All-time revenue', value: 121.66, decimals: 2, prefix: '₹', suffix: ' Cr', x: 648, y: 727, width: 110, height: 14, fontSize: 11 },
];

export function formatDashboardMetric(metric: (typeof dashboardMetrics)[number], progress: number) {
  const decimals = metric.decimals ?? 0;
  const factor = 10 ** decimals;
  const amount = Math.round(metric.value * Math.max(0, Math.min(progress, 1)) * factor) / factor;
  return `${metric.prefix ?? ''}${amount.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${metric.suffix ?? ''}`;
}
