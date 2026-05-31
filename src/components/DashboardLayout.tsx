import type { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { Search, Bell } from "lucide-react";

export function DashboardLayout({ children, title, subtitle, actions }: { children: ReactNode; title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gradient-subtle">
      <div className="pointer-events-none fixed inset-0 bg-gradient-mesh opacity-60" />
      <AppSidebar />
      <main className="relative flex-1 min-w-0">
        <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <div className="flex items-center gap-4 px-6 py-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-semibold tracking-tight truncate">{title}</h1>
              {subtitle && <p className="text-sm text-muted-foreground truncate">{subtitle}</p>}
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 w-72">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input placeholder="Search anything..." className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground" />
              <kbd className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">⌘K</kbd>
            </div>
            <button className="relative h-9 w-9 rounded-lg border border-border bg-background/60 flex items-center justify-center hover:bg-accent">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
            </button>
            {actions}
          </div>
        </header>
        <div className="relative p-6 max-w-[1600px] mx-auto">{children}</div>
      </main>
    </div>
  );
}
