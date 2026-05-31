import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, FileBarChart, Users, Sparkles, Settings, LogOut } from "lucide-react";
import { Logo } from "./Logo";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Reports", url: "/reports", icon: FileBarChart },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "AI Assistant", url: "/assistant", icon: Sparkles },
  { title: "Settings", url: "/settings", icon: Settings },
] as const;

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-sidebar-border bg-sidebar/80 backdrop-blur-xl">
      <div className="p-5 border-b border-sidebar-border">
        <Logo />
      </div>
      <nav className="flex-1 p-3 space-y-1">
        <p className="px-3 pt-2 pb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Workspace</p>
        {items.map((item) => {
          const active = pathname === item.url || (item.url !== "/dashboard" && pathname.startsWith(item.url));
          return (
            <Link
              key={item.url}
              to={item.url}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                active
                  ? "bg-gradient-primary text-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <item.icon className={`h-4 w-4 ${active ? "" : "text-muted-foreground group-hover:text-primary"}`} />
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-sidebar-border">
        <div className="glass-card rounded-xl p-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">AM</div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">Alex Morgan</p>
              <p className="text-xs text-muted-foreground truncate">alex@datavision.ai</p>
            </div>
          </div>
        </div>
        <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent">
          <LogOut className="h-4 w-4" /> Sign out
        </Link>
      </div>
    </aside>
  );
}
