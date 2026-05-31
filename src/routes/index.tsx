import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Sparkles, BarChart3, Brain, Zap, Shield, Globe, Check, ArrowRight, Star, TrendingUp, Users, DollarSign, Twitter, Linkedin, Github } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { revenueData, salesChannelData } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataVision AI — AI-powered business analytics platform" },
      { name: "description", content: "DataVision AI helps companies monitor revenue, marketing, sales, and customers with real-time AI insights and beautiful dashboards." },
      { property: "og:title", content: "DataVision AI — Business analytics, reimagined" },
      { property: "og:description", content: "The AI analytics platform modern teams use to grow revenue faster." },
    ],
  }),
  component: Landing,
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#analytics" className="hover:text-foreground transition">Platform</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="hidden sm:inline text-sm font-medium text-muted-foreground hover:text-foreground">Sign in</Link>
          <Link to="/dashboard" className="inline-flex items-center gap-1 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md hover:shadow-glow transition-all">
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Introducing DataVision AI 3.0 — now with autonomous insights
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight">
          Business analytics, <span className="text-gradient">reimagined by AI</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          The intelligent analytics platform modern teams use to monitor revenue, marketing, sales, and customers — and act on insights before competitors notice.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-glow transition">
            Start free 14-day trial <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#analytics" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-6 py-3 text-sm font-medium hover:bg-accent backdrop-blur">
            See live demo
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">No credit card required · SOC 2 Type II · GDPR compliant</p>

        <div className="mt-16 relative">
          <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <DashboardPreview />
        </div>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Trusted by 4,200+ data-driven teams</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-lg font-semibold text-muted-foreground/60">
            <span>Acme</span><span>Linear</span><span>Northwind</span><span>Vertex</span><span>Stellar</span><span>Halcyon</span><span>Atlas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-5xl glass-card rounded-2xl p-4 md:p-6 shadow-elegant">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 text-xs text-muted-foreground">datavision.ai/dashboard</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MiniStat label="Revenue" value="$1.42M" delta="+23.4%" />
        <MiniStat label="Customers" value="8,492" delta="+12.1%" />
        <MiniStat label="Conversion" value="4.8%" delta="+0.6%" />
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-2 glass-card rounded-xl p-4 h-64 text-left">
          <p className="text-sm font-medium mb-1">Revenue trend</p>
          <p className="text-xs text-muted-foreground mb-3">Last 12 months · Forecast +18%</p>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="rv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#rv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card rounded-xl p-4 h-64 text-left">
          <p className="text-sm font-medium mb-1">Top channels</p>
          <p className="text-xs text-muted-foreground mb-3">By contribution</p>
          <ResponsiveContainer width="100%" height="78%">
            <BarChart data={salesChannelData}>
              <Bar dataKey="value" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="glass-card rounded-xl p-4 text-left">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
      <p className="text-xs text-success mt-1">{delta} vs last period</p>
    </div>
  );
}

const features = [
  { icon: Brain, title: "Autonomous AI insights", desc: "Our AI surfaces anomalies, opportunities and risks across your data — before you even ask." },
  { icon: BarChart3, title: "Unified analytics", desc: "Revenue, marketing, sales, customers — all your business signals in one beautiful workspace." },
  { icon: Zap, title: "Real-time data", desc: "Live event streams from your stack: CRM, billing, ads, product, support. Always fresh." },
  { icon: Shield, title: "Enterprise-grade security", desc: "SOC 2 Type II, GDPR, HIPAA-ready. SSO, RBAC, row-level permissions out of the box." },
  { icon: Globe, title: "Global by design", desc: "Multi-currency, multi-region, multi-language. Built for teams operating across continents." },
  { icon: Sparkles, title: "Natural language queries", desc: "Ask in plain English. Get charts, segments, and forecasts in seconds — no SQL required." },
];

function Features() {
  return (
    <section id="features" className="relative py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-medium text-primary mb-3">Platform</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Everything your business needs to grow</h2>
        <p className="mt-4 text-muted-foreground">One platform replacing six tools. Built for revenue teams, loved by analysts.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div key={f.title} className="glass-card rounded-2xl p-6 hover:shadow-elegant transition-all hover:-translate-y-1">
            <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-md mb-4">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const kpis = [
  { icon: DollarSign, label: "Avg revenue lift", value: "+34%", desc: "after 90 days" },
  { icon: TrendingUp, label: "Time saved on reporting", value: "12h", desc: "per analyst per week" },
  { icon: Users, label: "Customer retention", value: "+18%", desc: "vs industry average" },
  { icon: Zap, label: "Insights delivered", value: "8.2M+", desc: "in the last 30 days" },
];

function KpiPreview() {
  return (
    <section id="analytics" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-medium text-primary mb-3">By the numbers</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Results that compound, week over week</h2>
          <p className="mt-4 text-muted-foreground">Teams running on DataVision AI consistently outperform their forecasts. Here's what our customers report after switching.</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {kpis.map((k) => (
              <div key={k.label} className="glass-card rounded-2xl p-5">
                <k.icon className="h-5 w-5 text-primary mb-3" />
                <p className="text-3xl font-semibold">{k.value}</p>
                <p className="text-sm mt-1">{k.label}</p>
                <p className="text-xs text-muted-foreground">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium">ARR growth</p>
              <p className="text-2xl font-semibold mt-1">$8.4M <span className="text-sm text-success font-medium">+42.1%</span></p>
            </div>
            <div className="text-xs text-muted-foreground">Last 12 months</div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
              <Line type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="profit" stroke="var(--color-chart-3)" strokeWidth={2} strokeDasharray="4 4" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { quote: "DataVision AI replaced four BI tools in our stack. Our exec team now reads the same numbers, and decisions are 3x faster.", name: "Sarah Chen", role: "VP Operations, Acme", initials: "SC" },
  { quote: "The AI insights flagged a churn pattern we'd have missed for weeks. It paid for itself in one quarter.", name: "Marcus Webb", role: "Head of Growth, Linear Studios", initials: "MW" },
  { quote: "We onboarded in a day. Our analysts love the natural-language layer — non-technical PMs finally self-serve.", name: "Priya Anand", role: "CTO, Northwind Labs", initials: "PA" },
];

function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-medium text-primary mb-3">Loved by operators</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">The platform behind ambitious teams</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-2xl p-6">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <p className="text-sm leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">{t.initials}</div>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const plans = [
  { name: "Starter", price: "$49", desc: "For small teams getting started.", features: ["Up to 5 users", "10 dashboards", "Daily data sync", "Email support", "Core integrations"], cta: "Start free", featured: false },
  { name: "Growth", price: "$199", desc: "For scaling revenue teams.", features: ["Up to 25 users", "Unlimited dashboards", "Real-time data sync", "AI insights & alerts", "All integrations", "Priority support"], cta: "Start free trial", featured: true },
  { name: "Enterprise", price: "Custom", desc: "For organizations with scale.", features: ["Unlimited users", "Custom data models", "Dedicated CSM", "SSO, SCIM, audit logs", "SLA & private cloud", "24/7 phone support"], cta: "Contact sales", featured: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-medium text-primary mb-3">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Simple plans that scale with you</h2>
        <p className="mt-4 text-muted-foreground">Start free. Upgrade when you're ready. Cancel anytime.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-2xl p-6 transition-all ${p.featured ? "bg-gradient-primary text-primary-foreground shadow-elegant scale-105" : "glass-card"}`}>
            {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background text-primary text-xs font-semibold px-3 py-1 shadow">Most popular</span>}
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className={`text-sm mt-1 ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
            <div className="mt-5">
              <span className="text-4xl font-semibold">{p.price}</span>
              {p.price !== "Custom" && <span className={`text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/month</span>}
            </div>
            <ul className="mt-6 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-primary-foreground" : "text-primary"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/dashboard" className={`mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${p.featured ? "bg-background text-primary hover:bg-background/90" : "bg-foreground text-background hover:opacity-90"}`}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  { q: "How long does setup take?", a: "Most teams are live within a day. We have native integrations with 200+ data sources, including Salesforce, HubSpot, Stripe, Shopify, Google Analytics, and your data warehouse." },
  { q: "Is my data secure?", a: "Yes. We're SOC 2 Type II certified, GDPR and HIPAA compliant. Data is encrypted in transit and at rest. We support SSO, SCIM, RBAC, and row-level security." },
  { q: "Can I try it before buying?", a: "Yes — every plan includes a 14-day free trial. No credit card required. You'll have full access to AI insights, real-time data, and unlimited dashboards." },
  { q: "Do you support custom data models?", a: "On Growth and Enterprise plans, yes. Build semantic models, custom metrics, and reusable segments your whole org can rely on." },
  { q: "What integrations are available?", a: "200+ native connectors plus REST API, webhooks, and direct warehouse connections (Snowflake, BigQuery, Redshift, Databricks, Postgres)." },
];

function FAQ() {
  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary mb-3">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Questions, answered</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="glass-card rounded-2xl p-5 group">
            <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
              {f.q}
              <span className="ml-4 h-6 w-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-primary-foreground shadow-elegant">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Ready to see DataVision in action?</h2>
            <p className="mt-4 text-primary-foreground/85">Book a 20-minute walkthrough with our team. We'll show you the platform on your own data.</p>
          </div>
          <form className="space-y-3 glass rounded-2xl p-5 text-foreground">
            <input placeholder="Work email" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" />
            <input placeholder="Company" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" />
            <textarea placeholder="What are you hoping to solve?" rows={3} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm" />
            <button type="button" className="w-full rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-md hover:shadow-glow transition">
              Request a demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">The AI-powered analytics platform helping modern companies grow faster.</p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent"><Github className="h-4 w-4" /></a>
          </div>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
          { title: "Company", links: ["About", "Customers", "Careers", "Press"] },
          { title: "Resources", links: ["Docs", "Blog", "Security", "Status"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold mb-3">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((l) => <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2026 DataVision AI, Inc. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <KpiPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
