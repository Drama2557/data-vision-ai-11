import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function KpiCard({ label, value, delta, icon: Icon, trend = "up", sub }: { label: string; value: string; delta: string; icon: LucideIcon; trend?: "up" | "down"; sub?: string }) {
  const positive = trend === "up";
  return (
    <div className="glass-card rounded-2xl p-5 card-hover cursor-default">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-md shadow-primary/25">
          <Icon className="h-5 w-5" />
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
          positive
            ? "bg-success/15 text-success border border-success/20"
            : "bg-destructive/15 text-destructive border border-destructive/20"
        }`}>
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {delta}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight">{value}</p>
        {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
      </div>
    </div>
  );
}
