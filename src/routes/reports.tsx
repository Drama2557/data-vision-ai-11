import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Download, FileText, Calendar, Filter, FileSpreadsheet, FileBarChart } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueData } from "@/lib/mock-data";

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [{ title: "Reports — DataVision AI" }, { name: "description", content: "Business reports with flexible filters and export options." }] }),
  component: Reports,
});

const reports = [
  { name: "Executive Summary — November", type: "Executive", date: "Nov 30, 2026", size: "2.4 MB", status: "Ready" },
  { name: "Revenue Breakdown — Q4", type: "Finance", date: "Nov 28, 2026", size: "1.8 MB", status: "Ready" },
  { name: "Marketing ROI Analysis", type: "Marketing", date: "Nov 25, 2026", size: "3.1 MB", status: "Ready" },
  { name: "Customer Cohort Analysis", type: "Customer", date: "Nov 22, 2026", size: "4.2 MB", status: "Ready" },
  { name: "Sales Pipeline Forecast", type: "Sales", date: "Nov 20, 2026", size: "1.5 MB", status: "Processing" },
  { name: "Churn Risk Report", type: "Customer", date: "Nov 15, 2026", size: "980 KB", status: "Ready" },
  { name: "Product Usage Insights", type: "Product", date: "Nov 12, 2026", size: "2.7 MB", status: "Ready" },
];

function Reports() {
  return (
    <DashboardLayout
      title="Reports"
      subtitle="Generate, schedule, and export your business reports"
      actions={
        <button className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md">
          <FileBarChart className="h-4 w-4" /> New report
        </button>
      }
    >
      <div className="glass-card rounded-2xl p-5 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Nov 1 — Nov 30, 2026</span>
          </div>
          <select className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <option>All categories</option><option>Finance</option><option>Marketing</option><option>Sales</option><option>Customer</option>
          </select>
          <select className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <option>All regions</option><option>North America</option><option>EMEA</option><option>APAC</option>
          </select>
          <button className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm">
            <Filter className="h-4 w-4" /> More filters
          </button>
          <div className="ml-auto flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm hover:bg-accent">
              <FileSpreadsheet className="h-4 w-4" /> Excel
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm hover:bg-accent">
              <FileText className="h-4 w-4" /> PDF
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-3 py-2 text-sm">
              <Download className="h-4 w-4" /> Export all
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <div className="xl:col-span-2 glass-card rounded-2xl p-6">
          <h3 className="font-semibold mb-1">Monthly performance breakdown</h3>
          <p className="text-xs text-muted-foreground mb-4">Revenue vs. expenses vs. profit</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="revenue" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expenses" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="profit" fill="var(--color-chart-3)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Quick stats</h3>
          {[
            { label: "Total revenue (YTD)", value: "$1,116,000" },
            { label: "Total profit (YTD)", value: "$458,500" },
            { label: "Avg. monthly growth", value: "+13.2%" },
            { label: "Reports generated", value: "184" },
            { label: "Scheduled exports", value: "23" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between py-3 border-b border-border/60 last:border-0">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className="text-sm font-semibold">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-border/60">
          <h3 className="font-semibold">Recent reports</h3>
          <p className="text-xs text-muted-foreground">Generated automatically from your data</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50">
              <tr className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Size</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.name} className="border-t border-border/60 hover:bg-accent/30">
                  <td className="px-5 py-4 font-medium flex items-center gap-3"><FileText className="h-4 w-4 text-primary" /> {r.name}</td>
                  <td className="px-5 py-4"><span className="inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs font-medium">{r.type}</span></td>
                  <td className="px-5 py-4 text-muted-foreground">{r.date}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.size}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${r.status === "Ready" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{r.status}</span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                      <Download className="h-3.5 w-3.5" /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
