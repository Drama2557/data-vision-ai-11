import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Search, Filter, UserPlus, Mail, Building2, X, Calendar, DollarSign } from "lucide-react";
import { customers } from "@/lib/mock-data";

export const Route = createFileRoute("/customers")({
  head: () => ({ meta: [{ title: "Customers — DataVision AI" }, { name: "description", content: "Customer database with search, filters, and detailed profiles." }] }),
  component: Customers,
});

const planColors: Record<string, string> = {
  Enterprise: "bg-primary/10 text-primary",
  Growth: "bg-chart-3/10 text-success",
  Starter: "bg-secondary text-secondary-foreground",
};
const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Trial: "bg-warning/10 text-warning",
  Churned: "bg-destructive/10 text-destructive",
};

function Customers() {
  const [selected, setSelected] = useState<typeof customers[number] | null>(null);
  const [query, setQuery] = useState("");
  const [plan, setPlan] = useState("All");

  const filtered = customers.filter((c) =>
    (plan === "All" || c.plan === plan) &&
    (c.name.toLowerCase().includes(query.toLowerCase()) || c.contact.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <DashboardLayout
      title="Customers"
      subtitle={`${customers.length.toLocaleString()} accounts · ${customers.filter(c => c.status === "Active").length} active`}
      actions={
        <button className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md">
          <UserPlus className="h-4 w-4" /> Add customer
        </button>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
        {[
          { label: "Total MRR", value: "$38,940", sub: "+12% MoM" },
          { label: "Active accounts", value: "8", sub: "of 10" },
          { label: "New this month", value: "2", sub: "Vertex, Pixel Forge" },
          { label: "At-risk", value: "1", sub: "Beacon Logistics" },
        ].map((s) => (
          <div key={s.label} className="glass-card rounded-2xl p-5">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-semibold mt-1">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className={`glass-card rounded-2xl overflow-hidden ${selected ? "lg:col-span-2" : "lg:col-span-3"}`}>
          <div className="p-5 border-b border-border/60 flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 flex-1 min-w-[200px]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search customers..." className="bg-transparent text-sm outline-none flex-1" />
            </div>
            <select value={plan} onChange={(e) => setPlan(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
              <option>All</option><option>Enterprise</option><option>Growth</option><option>Starter</option>
            </select>
            <button className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm">
              <Filter className="h-4 w-4" /> Filters
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50">
                <tr className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">Plan</th>
                  <th className="px-5 py-3">MRR</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id} onClick={() => setSelected(c)} className={`border-t border-border/60 cursor-pointer transition ${selected?.id === c.id ? "bg-primary/5" : "hover:bg-accent/30"}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                          {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                        </div>
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.contact}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${planColors[c.plan]}`}>{c.plan}</span></td>
                    <td className="px-5 py-4 font-medium">${c.mrr.toLocaleString()}</td>
                    <td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[c.status]}`}>{c.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selected && (
          <div className="glass-card rounded-2xl p-6 h-fit lg:sticky lg:top-24">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-lg font-semibold shadow-md">
                  {selected.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="font-semibold">{selected.name}</h3>
                  <p className="text-xs text-muted-foreground">{selected.id}</p>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="h-8 w-8 rounded-lg hover:bg-accent flex items-center justify-center">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <Row icon={Building2} label="Contact" value={selected.contact} />
              <Row icon={Mail} label="Email" value={selected.email} />
              <Row icon={DollarSign} label="MRR" value={`$${selected.mrr.toLocaleString()}`} />
              <Row icon={Calendar} label="Joined" value={selected.joined} />
            </div>

            <div className="mt-5 pt-5 border-t border-border/60 grid grid-cols-3 gap-3 text-center">
              <Stat label="Sessions" value="284" />
              <Stat label="Tickets" value="3" />
              <Stat label="NPS" value="68" />
            </div>

            <div className="mt-5 flex gap-2">
              <button className="flex-1 rounded-lg bg-gradient-primary px-3 py-2 text-sm font-medium text-primary-foreground">Open profile</button>
              <button className="rounded-lg border border-border px-3 py-2 text-sm">Email</button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 text-muted-foreground mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium truncate">{value}</p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
