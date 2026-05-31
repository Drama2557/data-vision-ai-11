export const revenueData = [
  { month: "Jan", revenue: 42000, profit: 12000, expenses: 30000 },
  { month: "Feb", revenue: 48000, profit: 15000, expenses: 33000 },
  { month: "Mar", revenue: 55000, profit: 18500, expenses: 36500 },
  { month: "Apr", revenue: 62000, profit: 22000, expenses: 40000 },
  { month: "May", revenue: 71000, profit: 27000, expenses: 44000 },
  { month: "Jun", revenue: 84000, profit: 33000, expenses: 51000 },
  { month: "Jul", revenue: 92000, profit: 38000, expenses: 54000 },
  { month: "Aug", revenue: 105000, profit: 44000, expenses: 61000 },
  { month: "Sep", revenue: 118000, profit: 51000, expenses: 67000 },
  { month: "Oct", revenue: 132000, profit: 59000, expenses: 73000 },
  { month: "Nov", revenue: 145000, profit: 65000, expenses: 80000 },
  { month: "Dec", revenue: 162000, profit: 74000, expenses: 88000 },
];

export const salesChannelData = [
  { name: "Direct", value: 38, color: "var(--color-chart-1)" },
  { name: "Organic", value: 27, color: "var(--color-chart-2)" },
  { name: "Paid Ads", value: 18, color: "var(--color-chart-3)" },
  { name: "Referral", value: 11, color: "var(--color-chart-4)" },
  { name: "Social", value: 6, color: "var(--color-chart-5)" },
];

export const campaignData = [
  { name: "Q4 Launch", clicks: 12400, conversions: 842, ctr: 6.8, spend: 18500 },
  { name: "Retargeting", clicks: 8200, conversions: 614, ctr: 7.5, spend: 9200 },
  { name: "Brand Push", clicks: 21800, conversions: 1102, ctr: 5.1, spend: 24300 },
  { name: "Enterprise", clicks: 4300, conversions: 287, ctr: 6.7, spend: 14100 },
  { name: "Webinar", clicks: 6900, conversions: 521, ctr: 7.6, spend: 5400 },
];

export const trafficData = Array.from({ length: 14 }, (_, i) => ({
  day: `${i + 1}`,
  visitors: 3200 + Math.round(Math.sin(i / 2) * 800 + i * 120),
  signups: 180 + Math.round(Math.cos(i / 2) * 40 + i * 8),
}));

export const customers = [
  { id: "CUS-10847", name: "Acme Corporation", contact: "Sarah Chen", email: "sarah@acme.io", plan: "Enterprise", mrr: 4800, status: "Active", joined: "2024-03-12" },
  { id: "CUS-10848", name: "Linear Studios", contact: "Marcus Webb", email: "m.webb@linear.studio", plan: "Growth", mrr: 1200, status: "Active", joined: "2024-04-08" },
  { id: "CUS-10849", name: "Northwind Labs", contact: "Priya Anand", email: "priya@northwind.ai", plan: "Enterprise", mrr: 6200, status: "Active", joined: "2024-01-22" },
  { id: "CUS-10850", name: "Vertex Ventures", contact: "James O'Connor", email: "james@vertex.vc", plan: "Growth", mrr: 1800, status: "Trial", joined: "2024-11-02" },
  { id: "CUS-10851", name: "Orbit Health", contact: "Dr. Lena Park", email: "lena@orbit.health", plan: "Enterprise", mrr: 5400, status: "Active", joined: "2024-02-19" },
  { id: "CUS-10852", name: "Pixel Forge", contact: "Tomás Rivera", email: "tomas@pixelforge.co", plan: "Starter", mrr: 290, status: "Active", joined: "2024-09-30" },
  { id: "CUS-10853", name: "Halcyon Finance", contact: "Aisha Bello", email: "aisha@halcyon.fi", plan: "Enterprise", mrr: 7200, status: "Active", joined: "2023-12-04" },
  { id: "CUS-10854", name: "Beacon Logistics", contact: "Rui Tanaka", email: "rui@beacon.co", plan: "Growth", mrr: 1450, status: "Churned", joined: "2024-05-17" },
  { id: "CUS-10855", name: "Stellar AI", contact: "Eva Mikhailov", email: "eva@stellar.ai", plan: "Growth", mrr: 2100, status: "Active", joined: "2024-07-21" },
  { id: "CUS-10856", name: "Atlas Robotics", contact: "Noah Kim", email: "noah@atlas-robotics.com", plan: "Enterprise", mrr: 8600, status: "Active", joined: "2024-02-08" },
];

export const aiInsights = [
  { type: "growth", title: "Revenue is trending 23% above forecast", body: "Enterprise tier expansion is accelerating. Consider increasing AE capacity in EMEA.", confidence: 0.94 },
  { type: "warning", title: "Churn risk detected in 4 mid-market accounts", body: "Engagement on Acme, Vertex, and 2 others dropped >40% WoW. Recommend CSM outreach.", confidence: 0.87 },
  { type: "opportunity", title: "Paid Ads CAC down 18% this week", body: "Retargeting campaign outperforms; reallocate $8k from Brand Push to scale.", confidence: 0.81 },
];

export const notifications = [
  { id: 1, title: "New Enterprise deal closed", desc: "Halcyon Finance signed a $86,400 ARR contract", time: "2m ago", type: "success" },
  { id: 2, title: "Campaign Q4 Launch ended", desc: "842 conversions · 6.8% CTR · ROAS 4.2x", time: "1h ago", type: "info" },
  { id: 3, title: "Churn risk: Beacon Logistics", desc: "Engagement down 62% — review needed", time: "3h ago", type: "warning" },
  { id: 4, title: "Weekly report ready", desc: "Your executive summary is available", time: "Yesterday", type: "info" },
];
