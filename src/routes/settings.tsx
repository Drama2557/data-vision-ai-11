import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { User, Shield, Users, CreditCard, Mail, Globe, Smartphone, KeyRound, Check } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — DataVision AI" }, { name: "description", content: "Manage your profile, security, team, and billing." }] }),
  component: Settings,
});

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Shield },
  { id: "team", label: "Team", icon: Users },
  { id: "billing", label: "Billing", icon: CreditCard },
] as const;

function Settings() {
  const [tab, setTab] = useState<typeof tabs[number]["id"]>("profile");

  return (
    <DashboardLayout title="Settings" subtitle="Manage your account, workspace, and billing">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        <nav className="space-y-1 lg:sticky lg:top-24 h-fit">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${tab === t.id ? "bg-gradient-primary text-primary-foreground shadow-md" : "hover:bg-accent text-muted-foreground"}`}>
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </nav>

        <div>
          {tab === "profile" && <ProfileTab />}
          {tab === "security" && <SecurityTab />}
          {tab === "team" && <TeamTab />}
          {tab === "billing" && <BillingTab />}
        </div>
      </div>
    </DashboardLayout>
  );
}

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="glass-card rounded-2xl p-6 mb-4">
      <div className="mb-5">
        <h3 className="font-semibold">{title}</h3>
        {desc && <p className="text-sm text-muted-foreground mt-1">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";

function ProfileTab() {
  return (
    <>
      <Section title="Personal information" desc="Update your account details and profile">
        <div className="flex items-center gap-5 mb-6 pb-6 border-b border-border/60">
          <div className="h-20 w-20 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-semibold shadow-elegant">AM</div>
          <div>
            <button className="rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium mr-2">Upload new</button>
            <button className="rounded-lg border border-border px-4 py-2 text-sm">Remove</button>
            <p className="text-xs text-muted-foreground mt-2">JPG, PNG or GIF. Max 2MB.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Full name"><input className={inputCls} defaultValue="Alex Morgan" /></Field>
          <Field label="Job title"><input className={inputCls} defaultValue="VP of Analytics" /></Field>
          <Field label="Email"><input className={inputCls} type="email" defaultValue="alex@datavision.ai" /></Field>
          <Field label="Phone"><input className={inputCls} defaultValue="+1 (415) 555-0142" /></Field>
          <Field label="Timezone">
            <select className={inputCls} defaultValue="PST">
              <option>PST (UTC-8)</option><option>EST (UTC-5)</option><option>UTC</option><option>CET (UTC+1)</option>
            </select>
          </Field>
          <Field label="Language">
            <select className={inputCls}><option>English (US)</option><option>French</option><option>German</option><option>Japanese</option></select>
          </Field>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button className="rounded-lg border border-border px-4 py-2 text-sm">Cancel</button>
          <button className="rounded-lg bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-md">Save changes</button>
        </div>
      </Section>

      <Section title="Notifications" desc="Choose how we contact you">
        {[
          { icon: Mail, label: "Email notifications", desc: "Weekly summaries and critical alerts" },
          { icon: Smartphone, label: "Push notifications", desc: "Real-time alerts on mobile" },
          { icon: Globe, label: "Product updates", desc: "New features and improvements" },
        ].map((n, i) => (
          <div key={n.label} className={`flex items-center justify-between py-4 ${i > 0 ? "border-t border-border/60" : ""}`}>
            <div className="flex items-start gap-3">
              <n.icon className="h-4 w-4 text-muted-foreground mt-1" />
              <div>
                <p className="text-sm font-medium">{n.label}</p>
                <p className="text-xs text-muted-foreground">{n.desc}</p>
              </div>
            </div>
            <Toggle defaultOn={i < 2} />
          </div>
        ))}
      </Section>
    </>
  );
}

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)} className={`relative h-6 w-11 rounded-full transition ${on ? "bg-gradient-primary" : "bg-secondary"}`}>
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

function SecurityTab() {
  return (
    <>
      <Section title="Password" desc="Change your password regularly to keep your account secure">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Current password"><input className={inputCls} type="password" placeholder="••••••••" /></Field>
          <div />
          <Field label="New password"><input className={inputCls} type="password" /></Field>
          <Field label="Confirm new password"><input className={inputCls} type="password" /></Field>
        </div>
        <div className="flex justify-end mt-6">
          <button className="rounded-lg bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-md">Update password</button>
        </div>
      </Section>

      <Section title="Two-factor authentication" desc="Add an extra layer of security to your account">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-success/10 text-success flex items-center justify-center"><KeyRound className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-medium">Authenticator app</p>
              <p className="text-xs text-muted-foreground">Enabled · Last used 2 hours ago</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/10 text-success px-3 py-1 text-xs font-medium"><Check className="h-3 w-3" /> Active</span>
        </div>
      </Section>

      <Section title="Active sessions" desc="Devices currently signed in to your account">
        {[
          { device: "MacBook Pro · Chrome", loc: "San Francisco, CA", current: true },
          { device: "iPhone 16 · Safari", loc: "San Francisco, CA", current: false },
          { device: "Windows · Edge", loc: "New York, NY · 2 days ago", current: false },
        ].map((s, i) => (
          <div key={i} className={`flex items-center justify-between py-3 ${i > 0 ? "border-t border-border/60" : ""}`}>
            <div>
              <p className="text-sm font-medium">{s.device} {s.current && <span className="text-xs text-primary font-medium ml-2">· This device</span>}</p>
              <p className="text-xs text-muted-foreground">{s.loc}</p>
            </div>
            {!s.current && <button className="text-xs text-destructive font-medium hover:underline">Sign out</button>}
          </div>
        ))}
      </Section>
    </>
  );
}

function TeamTab() {
  const team = [
    { name: "Alex Morgan", email: "alex@datavision.ai", role: "Owner", avatar: "AM" },
    { name: "Jordan Lee", email: "jordan@datavision.ai", role: "Admin", avatar: "JL" },
    { name: "Sam Patel", email: "sam@datavision.ai", role: "Editor", avatar: "SP" },
    { name: "Riley Chen", email: "riley@datavision.ai", role: "Viewer", avatar: "RC" },
    { name: "Morgan Davis", email: "morgan@datavision.ai", role: "Editor", avatar: "MD" },
  ];
  return (
    <Section title="Team members" desc="Manage who has access to your workspace">
      <div className="flex justify-end mb-4">
        <button className="rounded-lg bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-md">Invite member</button>
      </div>
      {team.map((m, i) => (
        <div key={m.email} className={`flex items-center justify-between py-3 ${i > 0 ? "border-t border-border/60" : ""}`}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">{m.avatar}</div>
            <div>
              <p className="text-sm font-medium">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.email}</p>
            </div>
          </div>
          <select className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs" defaultValue={m.role}>
            <option>Owner</option><option>Admin</option><option>Editor</option><option>Viewer</option>
          </select>
        </div>
      ))}
    </Section>
  );
}

function BillingTab() {
  return (
    <>
      <Section title="Current plan">
        <div className="flex items-center justify-between p-5 rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
          <div>
            <p className="text-sm opacity-80">You're on</p>
            <p className="text-2xl font-semibold mt-1">Growth · $199/month</p>
            <p className="text-sm opacity-80 mt-1">Renews on Dec 15, 2026</p>
          </div>
          <button className="rounded-lg bg-background text-primary px-4 py-2 text-sm font-medium hover:bg-background/90">Upgrade plan</button>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-5">
          {[{ l: "Users", v: "5 of 25" }, { l: "Dashboards", v: "Unlimited" }, { l: "Data syncs / day", v: "8,420" }].map((x) => (
            <div key={x.l} className="rounded-xl border border-border/60 p-4">
              <p className="text-xs text-muted-foreground">{x.l}</p>
              <p className="text-lg font-semibold mt-1">{x.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Payment method">
        <div className="flex items-center justify-between rounded-xl border border-border/60 p-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-14 rounded-lg bg-gradient-to-br from-foreground to-foreground/70 text-background flex items-center justify-center text-xs font-bold">VISA</div>
            <div>
              <p className="text-sm font-medium">Visa ending in 4242</p>
              <p className="text-xs text-muted-foreground">Expires 09/28</p>
            </div>
          </div>
          <button className="text-xs text-primary font-medium hover:underline">Update</button>
        </div>
      </Section>

      <Section title="Billing history">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <th className="py-2">Date</th><th className="py-2">Description</th><th className="py-2">Amount</th><th className="py-2 text-right">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {[
              { d: "Nov 15, 2026", desc: "Growth plan — monthly", a: "$199.00" },
              { d: "Oct 15, 2026", desc: "Growth plan — monthly", a: "$199.00" },
              { d: "Sep 15, 2026", desc: "Growth plan — monthly", a: "$199.00" },
              { d: "Aug 15, 2026", desc: "Starter → Growth (prorated)", a: "$74.50" },
            ].map((r) => (
              <tr key={r.d} className="border-t border-border/60">
                <td className="py-3 text-muted-foreground">{r.d}</td>
                <td className="py-3 font-medium">{r.desc}</td>
                <td className="py-3">{r.a}</td>
                <td className="py-3 text-right"><a className="text-xs text-primary font-medium hover:underline" href="#">Download</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );
}
