import type { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { Search, Bell } from "lucide-react";

export function DashboardLayout({ children, title, subtitle, actions }: { children: ReactNode; title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gradient-subtle">
      <div className="pointer-events-none fixed inset-0 bg-gradient-mesh opacity-70" />
      <AppSidebar />
      <main className="relative flex-1 min-w-0">
        <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="flex items-center gap-4 px-6 py-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-semibold tracking-tight truncate">{title}</h1>
              {subtitle && <p className="text-sm text-muted-foreground truncate">{subtitle}</p>}
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-3 py-2 w-72 focus-within:border-primary/50 focus-within:shadow-[0_0_0_3px_oklch(0.76_0.22_210_/_0.1)] transition-all">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input placeholder="Search anything..." className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground" />
              <kbd className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 bg-background/50">⌘K</kbd>
            </div>
            <button className="relative h-9 w-9 rounded-xl border border-border bg-card/60 backdrop-blur flex items-center justify-center hover:border-primary/40 hover:bg-accent transition-all">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-background shadow-[0_0_6px_oklch(0.62_0.22_25)]" />
            </button>
            {actions}
          </div>
        </header>
        <div className="relative p-6 max-w-[1600px] mx-auto">{children}</div>
      </main>
    </div>
  );
}
