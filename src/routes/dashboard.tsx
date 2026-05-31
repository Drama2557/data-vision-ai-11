import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { KpiCard } from "@/components/KpiCard";
import { DollarSign, Users, ShoppingCart, TrendingUp, Sparkles, AlertTriangle, Target, Bell, ChevronRight } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueData, salesChannelData, campaignData, trafficData, aiInsights, notifications } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — DataVision AI" }, { name: "description", content: "Real-time view of revenue, customers, marketing, and sales." }] }),
  component: Dashboard,
});

const tooltipStyle = { background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 };

function Dashboard() {
  return (
    <DashboardLayout title="Overview" subtitle="Welcome back, Alex — here's what's happening today">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard label="Monthly Revenue" value="$162,430" delta="+12.4%" icon={DollarSign} sub="vs. $144k last month" />
        <KpiCard label="Active Customers" value="8,492" delta="+8.1%" icon={Users} sub="312 new this month" />
        <KpiCard label="New Orders" value="2,184" delta="+18.7%" icon={ShoppingCart} sub="Avg. $74 per order" />
        <KpiCard label="Conversion Rate" value="4.82%" delta="-0.3%" icon={TrendingUp} trend="down" sub="From 5.12% last week" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className="xl:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Revenue analytics</h3>
              <p className="text-xs text-muted-foreground">Revenue vs. profit · Last 12 months</p>
            </div>
            <div className="flex gap-2">
              {["12M", "6M", "30D", "7D"].map((p, i) => (
                <button key={p} className={`text-xs px-3 py-1.5 rounded-lg ${i === 0 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-accent"}`}>{p}</button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="prf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-chart-3)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--color-chart-3)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#rev)" />
              <Area type="monotone" dataKey="profit" stroke="var(--color-chart-3)" strokeWidth={2} fill="url(#prf)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> AI insights</h3>
            <span className="text-xs text-primary font-medium">Live</span>
          </div>
          <p className="text-xs text-muted-foreground mb-4">Auto-generated from your data</p>
          <div className="space-y-3">
            {aiInsights.map((i, idx) => {
              const Icon = i.type === "warning" ? AlertTriangle : i.type === "opportunity" ? Target : TrendingUp;
              const color = i.type === "warning" ? "text-warning bg-warning/10" : i.type === "opportunity" ? "text-primary bg-primary/10" : "text-success bg-success/10";
              return (
                <div key={idx} className="rounded-xl border border-border/60 p-3 hover:border-primary/40 transition cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${color}`}><Icon className="h-4 w-4" /></div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{i.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{i.body}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-1 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-gradient-primary" style={{ width: `${i.confidence * 100}%` }} /></div>
                        <span className="text-[10px] text-muted-foreground">{Math.round(i.confidence * 100)}% conf.</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-semibold">Sales by channel</h3>
          <p className="text-xs text-muted-foreground mb-4">% contribution this month</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={salesChannelData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={3}>
                {salesChannelData.map((_, i) => <Cell key={i} fill={`var(--color-chart-${i + 1})`} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {salesChannelData.map((s, i) => (
              <div key={s.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: `var(--color-chart-${i + 1})` }} /> {s.name}</span>
                <span className="font-medium">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Marketing campaigns</h3>
              <p className="text-xs text-muted-foreground">Performance across active campaigns</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="clicks" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="conversions" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className="xl:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Customer acquisition</h3>
              <p className="text-xs text-muted-foreground">Visitors vs. signups · last 14 days</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="visitors" stroke="var(--color-primary)" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="signups" stroke="var(--color-chart-3)" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-semibold flex items-center gap-2"><Bell className="h-4 w-4" /> Notifications</h3>
          <p className="text-xs text-muted-foreground mb-4">Recent activity</p>
          <div className="space-y-2">
            {notifications.map((n) => {
              const colors: Record<string, string> = { success: "bg-success", warning: "bg-warning", info: "bg-primary" };
              return (
                <div key={n.id} className="flex gap-3 p-3 rounded-xl hover:bg-accent/50 transition cursor-pointer">
                  <span className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${colors[n.type]}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight">{n.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{n.desc}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{n.time}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
