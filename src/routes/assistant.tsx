import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Sparkles, Send, TrendingUp, AlertTriangle, Target, Lightbulb, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/assistant")({
  head: () => ({ meta: [{ title: "AI Assistant — DataVision AI" }, { name: "description", content: "Chat with your data. Get instant insights, forecasts, and recommendations." }] }),
  component: Assistant,
});

type Msg = { role: "user" | "ai"; content: string };

const initialMessages: Msg[] = [
  { role: "ai", content: "Hi Alex 👋 I've analyzed your latest data. Revenue is up 23% MoM, driven by Enterprise expansion. Ask me anything about your business." },
];

const suggestions = [
  "Why did revenue spike in November?",
  "Which customers are at risk of churning?",
  "Forecast next quarter's MRR",
  "Compare campaign ROI by channel",
];

const recommendations = [
  { icon: TrendingUp, title: "Scale paid retargeting", desc: "Your retargeting CAC dropped 18%. Reallocate $8k from Brand Push to capture growth." },
  { icon: AlertTriangle, title: "Outreach to Beacon Logistics", desc: "Engagement dropped 62% WoW. CSM intervention can prevent $17.4k ARR churn." },
  { icon: Target, title: "Expand into EMEA", desc: "European traffic up 41% but conversion 30% below NA. Localize pricing page." },
  { icon: Lightbulb, title: "Upsell 4 Growth accounts", desc: "Stellar, Pixel Forge, Linear, and Orbit show Enterprise-level usage." },
];

function Assistant() {
  const [messages, setMessages] = useState<Msg[]>(initialMessages);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { role: "user", content: text },
      { role: "ai", content: generateResponse(text) },
    ]);
    setInput("");
  };

  return (
    <DashboardLayout title="AI Assistant" subtitle="Your always-on business analyst, powered by DataVision AI">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-[calc(100vh-180px)]">
        <div className="xl:col-span-2 glass-card rounded-2xl flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-border/60">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">DataVision Assistant</p>
              <p className="text-xs text-success flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Online · Trained on your data</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`h-8 w-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-semibold ${m.role === "ai" ? "bg-gradient-primary text-primary-foreground" : "bg-secondary"}`}>
                  {m.role === "ai" ? <Sparkles className="h-4 w-4" /> : "AM"}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === "ai" ? "bg-secondary/60 border border-border/60" : "bg-gradient-primary text-primary-foreground"}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border/60">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)} className="text-xs rounded-full border border-border bg-background/60 px-3 py-1.5 hover:bg-accent transition">
                  {s}
                </button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 items-end glass rounded-2xl p-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
                placeholder="Ask anything about your business..."
                rows={1}
                className="flex-1 bg-transparent text-sm outline-none px-2 py-2 resize-none max-h-32"
              />
              <button type="submit" className="h-9 w-9 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-md hover:shadow-glow transition">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-4 overflow-y-auto">
          <div className="glass-card rounded-2xl p-5">
            <h3 className="font-semibold flex items-center gap-2 mb-1"><Lightbulb className="h-4 w-4 text-primary" /> Recommended actions</h3>
            <p className="text-xs text-muted-foreground mb-4">AI-prioritized this week</p>
            <div className="space-y-3">
              {recommendations.map((r, i) => (
                <div key={i} className="rounded-xl border border-border/60 p-3 hover:border-primary/40 transition">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0"><r.icon className="h-4 w-4" /></div>
                    <div>
                      <p className="text-sm font-medium">{r.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <h3 className="font-semibold flex items-center gap-2 mb-3"><BarChart3 className="h-4 w-4 text-primary" /> Data sources</h3>
            <div className="space-y-2 text-sm">
              {["Stripe · Live", "HubSpot · Live", "Google Analytics · Live", "Snowflake · Synced 2m ago", "Intercom · Live"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" /> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function generateResponse(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes("revenue") || lower.includes("spike")) {
    return "November's $162k revenue (+12% MoM) was driven by two Enterprise expansions (Halcyon +$28k ARR, Atlas +$19k ARR) and a 34% lift in retargeting conversions. Your blended ARPU is now $1,247 vs. $1,108 in October.";
  }
  if (lower.includes("churn") || lower.includes("risk")) {
    return "I'm flagging 4 at-risk accounts: Beacon Logistics (engagement -62%), Vertex Ventures (login frequency -41%), Pixel Forge (feature usage -38%), and one trial expiring in 5 days. Total ARR at risk: $54,720.";
  }
  if (lower.includes("forecast") || lower.includes("mrr")) {
    return "Forecasting Q1 2027 MRR at $215k–$232k (87% confidence), assuming current growth trajectory and 4% monthly net retention. Largest variable is Enterprise pipeline conversion (currently 28%).";
  }
  if (lower.includes("campaign") || lower.includes("roi") || lower.includes("channel")) {
    return "Retargeting has the best ROAS (7.5x) followed by Webinar (6.4x). Brand Push ROAS dropped to 2.1x — I'd recommend pausing it and reallocating budget. Want me to draft a media plan?";
  }
  return "Based on your current data, here's what I see: revenue is healthy, retention is improving, and there are 3 specific actions I'd prioritize this week. Want me to break them down by team?";
}
