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
  Enterprise: "bg-primary/12 text-primary border border-primary/25",
  Growth: "bg-success/12 text-success border border-success/20",
  Starter: "bg-secondary/80 text-secondary-foreground border border-border/60",
};
const statusColors: Record<string, string> = {
  Active: "bg-success/12 text-success border border-success/20",
  Trial: "bg-warning/12 text-warning border border-warning/20",
  Churned: "bg-destructive/12 text-destructive border border-destructive/20",
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
        <button className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 hover:shadow-glow transition-all">
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
          <div key={s.label} className="glass-card rounded-2xl p-5 card-hover">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-semibold mt-1">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className={`glass-card rounded-2xl overflow-hidden ${selected ? "lg:col-span-2" : "lg:col-span-3"}`}>
          <div className="p-5 border-b border-border/50 flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 flex-1 min-w-[200px] focus-within:border-primary/50 transition-all">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search customers..." className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground" />
            </div>
            <select value={plan} onChange={(e) => setPlan(e.target.value)} className="rounded-xl border border-border bg-card/60 px-3 py-2 text-sm outline-none hover:border-primary/30 transition-all">
              <option>All</option><option>Enterprise</option><option>Growth</option><option>Starter</option>
            </select>
            <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 text-sm hover:border-primary/30 hover:bg-accent transition-all">
              <Filter className="h-4 w-4 text-muted-foreground" /> Filters
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40">
                <tr className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">Plan</th>
                  <th className="px-5 py-3">MRR</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id} onClick={() => setSelected(c)} className={`border-t border-border/40 cursor-pointer transition-all ${selected?.id === c.id ? "bg-primary/8 border-primary/20" : "hover:bg-accent/25"}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-semibold shadow-sm shadow-primary/20 shrink-0">
                          {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                        </div>
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.contact}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${planColors[c.plan]}`}>{c.plan}</span></td>
                    <td className="px-5 py-4 font-semibold">${c.mrr.toLocaleString()}</td>
                    <td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[c.status]}`}>{c.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selected && (
          <div className="glass-card rounded-2xl p-6 h-fit lg:sticky lg:top-24 border-glow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-lg font-semibold shadow-md shadow-primary/25">
                  {selected.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="font-semibold">{selected.name}</h3>
                  <p className="text-xs text-muted-foreground">{selected.id}</p>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="h-8 w-8 rounded-lg border border-border hover:border-primary/40 hover:bg-accent flex items-center justify-center transition-all">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <Row icon={Building2} label="Contact" value={selected.contact} />
              <Row icon={Mail} label="Email" value={selected.email} />
              <Row icon={DollarSign} label="MRR" value={`$${selected.mrr.toLocaleString()}`} />
              <Row icon={Calendar} label="Joined" value={selected.joined} />
            </div>

            <div className="mt-5 pt-5 border-t border-border/50 grid grid-cols-3 gap-3 text-center">
              <Stat label="Sessions" value="284" />
              <Stat label="Tickets" value="3" />
              <Stat label="NPS" value="68" />
            </div>

            <div className="mt-5 flex gap-2">
              <button className="flex-1 rounded-xl bg-gradient-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 hover:shadow-glow transition-all">Open profile</button>
              <button className="rounded-xl border border-border px-3 py-2.5 text-sm hover:border-primary/40 hover:bg-accent transition-all">Email</button>
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
      <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium truncate">{value}</p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary/50 border border-border/50 py-3">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
