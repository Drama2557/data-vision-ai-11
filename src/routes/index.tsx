import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Sparkles, BarChart3, Brain, Zap, Shield, Globe, Check, ArrowRight, Star, TrendingUp, Users, Twitter, Linkedin, Github } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataVision AI — Plateforme d'analyse d'entreprise alimentée par l'IA" },
      { name: "description", content: "DataVision AI aide les entreprises à suivre leurs revenus, leur marketing, leurs ventes et leurs clients grâce à des analyses IA en temps réel et des tableaux de bord élégants." },
      { property: "og:title", content: "DataVision AI — L'analyse d'entreprise réinventée" },
      { property: "og:description", content: "La plateforme d'analyse IA que les équipes modernes utilisent pour accélérer leur croissance." },
    ],
  }),
  component: Landing,
});

/* ─── Navigation ─────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors duration-200">Accueil</a>
          <a href="#platform" className="hover:text-foreground transition-colors duration-200">Plate-forme</a>
          <a href="#pricing" className="hover:text-foreground transition-colors duration-200">Tarification</a>
          <a href="#faq" className="hover:text-foreground transition-colors duration-200">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="hidden sm:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Se connecter</Link>
          <Link to="/dashboard" className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-glow transition-all duration-200">
            Commencer <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero: premium glass mockup (unchanged) ─────────────────── */
function HeroPremiumVisual() {
  const kpis = [
    { label: "Chiffre d'affaires", value: "€12.45M", delta: "+24.8%", meta: "vs période précédente", spark: "M1 13 L7 11 L13 12 L19 8 L25 9 L31 5 L39 2" },
    { label: "Croissance", value: "+24.8%", deltaClass: "text-success", meta: "Performance globale", spark: "M1 12 L7 13 L13 9 L19 10 L25 6 L31 7 L39 3" },
    { label: "Clients", value: "78,345", delta: "+18.2%", meta: "Nouveaux clients", spark: "M1 14 L7 10 L13 11 L19 7 L25 8 L31 4 L39 2" },
    { label: "Panier moyen", value: "€158.6", delta: "+14.3%", meta: "Valeur moyenne", spark: "M1 11 L7 12 L13 8 L19 9 L25 6 L31 5 L39 3" },
    { label: "Taux de conversion", value: "3.24%", delta: "+8.7%", meta: "Performance globale", spark: "M1 13 L7 9 L13 10 L19 7 L25 8 L31 5 L39 4" },
    { label: "Score IA", value: "94", delta: "Excellent", meta: "Performance prédictive", spark: "M1 12 L7 8 L13 9 L19 7 L25 5 L31 4 L39 2" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-primary opacity-[0.10] blur-3xl rounded-[2rem] pointer-events-none" />
      <div className="relative glass-card rounded-2xl border-glow shadow-elegant overflow-hidden p-3 space-y-2.5">

        {/* announcement strip */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/[0.08] border border-primary/[0.16]">
          <Sparkles className="h-3 w-3 text-primary shrink-0" />
          <span className="text-[10px] text-primary font-medium leading-tight">Présentation de DataVision AI 3.0 — désormais dotée d'analyses autonomes</span>
          <ArrowRight className="h-3 w-3 text-primary ml-auto shrink-0" />
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg p-2 bg-card/55 border border-primary/[0.14] min-w-0">
              <div className="flex items-start justify-between gap-1">
                <p className="text-[8px] text-muted-foreground leading-tight truncate">{k.label}</p>
                <svg viewBox="0 0 40 16" className="w-6 h-3 shrink-0" fill="none" preserveAspectRatio="none">
                  <path d={k.spark} stroke="var(--color-primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
                </svg>
              </div>
              <p className={`text-[13px] font-bold mt-0.5 leading-tight truncate tabular-nums ${k.deltaClass ?? ""}`}>
                {k.value}
                {k.delta ? <span className="text-[8px] text-success font-bold ml-1 align-middle whitespace-nowrap">{k.delta}</span> : null}
              </p>
              <p className="text-[8px] text-muted-foreground mt-0.5 leading-tight truncate">{k.meta}</p>
            </div>
          ))}
        </div>

        {/* mid: revenue chart + AI insights */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-1.5">
          {/* revenue chart */}
          <div className="rounded-xl p-3 bg-card/50 border border-primary/[0.13] min-w-0 overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold truncate">Évolution du chiffre d'affaires</p>
                <p className="text-[18px] font-bold leading-tight mt-1">€12,450,000</p>
                <p className="text-[9px] text-success font-semibold">+24.8% vs période précédente</p>
              </div>
              <div className="flex items-center gap-1 h-5 px-2 rounded border border-border/50 bg-card/40">
                <span className="text-[8.5px] text-muted-foreground truncate">12 derniers mois</span>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex gap-1.5">
                {/* Y axis */}
                <div className="flex flex-col justify-between items-end text-[7px] text-muted-foreground tabular-nums shrink-0 w-[26px] h-[110px]">
                  <span>€15M</span><span>€10M</span><span>€5M</span><span>0</span>
                </div>
                {/* plot area */}
                <div className="relative flex-1 min-w-0">
                  <div className="absolute top-1 right-2 z-10 rounded-md px-1.5 py-1 bg-background/90 border border-primary/[0.22] text-[8px] leading-tight tabular-nums shadow-sm">
                    <b className="text-[9px]">Octobre 2024</b><br />€11,245,000<br /><span className="text-success">+29.5%</span>
                  </div>
                  <svg viewBox="0 0 300 120" className="w-full h-[110px] block" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M26 100 L48 92 L70 96 L92 82 L114 86 L136 70 L158 74 L180 56 L202 60 L224 40 L246 30 L268 22 L290 12" fill="none" stroke="var(--color-primary)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26 100 L48 92 L70 96 L92 82 L114 86 L136 70 L158 74 L180 56 L202 60 L224 40 L246 30 L268 22 L290 12 L290 118 L26 118 Z" fill="url(#heroGrad)" />
                    <g fill="var(--color-primary)">
                      <circle cx="48" cy="92" r="2" /><circle cx="92" cy="82" r="2" /><circle cx="136" cy="70" r="2" /><circle cx="180" cy="56" r="2" /><circle cx="224" cy="40" r="2.6" /><circle cx="268" cy="22" r="2" /><circle cx="290" cy="12" r="2.6" />
                    </g>
                  </svg>
                </div>
              </div>
              {/* month axis (aligned under plot area) */}
              <div className="flex justify-between text-[7px] text-muted-foreground mt-1 pl-[32px]">
                <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span><span>Juil</span><span>Août</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Déc</span>
              </div>
            </div>
          </div>

          {/* AI insights — réseau d'intelligence IA */}
          <div className="relative rounded-xl p-3 bg-card/50 border border-primary/[0.13] overflow-hidden min-w-0">
            {/* enterprise AI intelligence network (right side) */}
            <div className="absolute top-2 right-0 w-[46%] h-[64%] pointer-events-none">
              <div className="absolute inset-3 bg-primary/[0.12] blur-2xl rounded-full" />
              <svg viewBox="0 0 120 160" className="relative w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet">
                <g stroke="var(--color-primary)" strokeOpacity="0.35" strokeWidth="0.8" strokeLinecap="round">
                  <line x1="60" y1="48" x2="22" y2="30" /><line x1="60" y1="48" x2="80" y2="32" /><line x1="60" y1="48" x2="98" y2="26" /><line x1="60" y1="48" x2="42" y2="60" /><line x1="60" y1="48" x2="72" y2="80" /><line x1="60" y1="48" x2="34" y2="104" />
                  <line x1="34" y1="104" x2="14" y2="74" /><line x1="34" y1="104" x2="42" y2="60" /><line x1="34" y1="104" x2="72" y2="80" /><line x1="34" y1="104" x2="26" y2="140" /><line x1="34" y1="104" x2="88" y2="118" />
                  <line x1="88" y1="118" x2="72" y2="80" /><line x1="88" y1="118" x2="106" y2="102" /><line x1="88" y1="118" x2="62" y2="152" /><line x1="88" y1="118" x2="96" y2="150" /><line x1="88" y1="118" x2="112" y2="66" />
                  <line x1="98" y1="26" x2="112" y2="66" /><line x1="72" y1="80" x2="106" y2="102" /><line x1="26" y1="140" x2="62" y2="152" /><line x1="80" y1="32" x2="98" y2="26" />
                </g>
                {/* small nodes */}
                <g fill="var(--color-primary)" fillOpacity="0.7">
                  <circle cx="22" cy="30" r="1.6" /><circle cx="112" cy="66" r="1.6" /><circle cx="14" cy="74" r="1.6" /><circle cx="106" cy="102" r="1.6" /><circle cx="62" cy="152" r="1.6" /><circle cx="96" cy="150" r="1.6" /><circle cx="42" cy="60" r="1.6" /><circle cx="80" cy="32" r="1.6" />
                </g>
                {/* glowing hubs */}
                <g fill="var(--color-primary)" style={{ filter: "drop-shadow(0 0 2.5px var(--color-primary))" }}>
                  <circle cx="60" cy="48" r="3.4" /><circle cx="34" cy="104" r="3.2" /><circle cx="88" cy="118" r="3.2" />
                </g>
                {/* data signals (pulsing) */}
                <g fill="var(--color-primary-glow)" className="animate-pulse">
                  <circle cx="98" cy="26" r="2.2" /><circle cx="72" cy="80" r="2.4" /><circle cx="26" cy="140" r="2.2" />
                </g>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-primary shrink-0" />
                <p className="text-[10px] font-semibold text-primary">Insights IA</p>
              </div>
              <p className="text-[8.5px] text-muted-foreground mt-0.5">Recommandations intelligentes</p>

              <p className="text-[9px] text-muted-foreground mt-2 max-w-[56%] leading-tight">L'IA a détecté 3 opportunités à fort potentiel</p>
              <div className="mt-1.5 space-y-1.5 pr-[42%]">
                {[
                  { t: "Augmenter le budget marketing", s: "+32% de croissance potentielle" },
                  { t: "Optimiser les prix produits", s: "+18% de marge potentielle" },
                  { t: "Cibler le segment Entreprise", s: "+45% de valeur client" },
                ].map((it, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="h-4 w-4 rounded mt-px shrink-0 bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <Sparkles className="h-2.5 w-2.5 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold leading-tight">{it.t}</p>
                      <p className="text-[8px] text-success leading-tight">{it.s}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <div className="flex items-baseline justify-between gap-1 text-[8.5px]">
                  <span className="text-muted-foreground">Confiance IA</span>
                  <span className="text-primary font-bold whitespace-nowrap">94% · Très élevée</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden mt-1">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: "94%" }} />
                </div>
              </div>
              <div className="mt-2 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center px-2 overflow-hidden">
                <span className="text-[9px] text-primary font-semibold truncate w-full text-center">Voir toutes les recommandations</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom: 4 analytics panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
          {/* channel donut */}
          <div className="rounded-xl p-3 bg-card/50 border border-primary/[0.13] min-w-0 overflow-hidden">
            <p className="text-[10px] font-semibold truncate">Performance par canal</p>
            <p className="text-[8.5px] text-muted-foreground truncate">Revenus</p>
            <div className="flex items-center gap-2.5 mt-2">
              {/* donut — conic-gradient ring (reliable) */}
              <div className="relative h-14 w-14 shrink-0">
                <div
                  className="h-full w-full rounded-full"
                  style={{ background: "conic-gradient(var(--color-primary) 0 45%, var(--color-chart-2) 45% 74%, var(--color-success) 74% 94%, var(--color-muted-foreground) 94% 100%)" }}
                />
                <div className="absolute inset-[24%] rounded-full bg-card flex flex-col items-center justify-center leading-none">
                  <span className="text-[5.5px] text-muted-foreground">Total</span>
                  <span className="text-[8.5px] font-bold tabular-nums mt-px">€12.4M</span>
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5">
                {[
                  { c: "var(--color-primary)", n: "Marketing Digital", p: "45%", a: "€5.6M" },
                  { c: "var(--color-chart-2)", n: "Direct", p: "29%", a: "€3.6M" },
                  { c: "var(--color-success)", n: "Partenariats", p: "20%", a: "€2.5M" },
                  { c: "var(--color-muted-foreground)", n: "Autres", p: "10%", a: "€1.2M" },
                ].map((l) => (
                  <div key={l.n} className="flex items-center gap-1 text-[8px] leading-none">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: l.c }} />
                    <span className="flex-1 truncate">{l.n}</span>
                    <span className="font-semibold tabular-nums shrink-0">{l.p}</span>
                    <span className="text-muted-foreground tabular-nums shrink-0 w-[26px] text-right">{l.a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* forecast */}
          <div className="rounded-xl p-3 bg-card/50 border border-primary/[0.13] min-w-0 overflow-hidden">
            <p className="text-[10px] font-semibold truncate">Prévisions IA</p>
            <p className="text-[8.5px] text-muted-foreground truncate">Prédiction à 3 mois</p>
            <p className="text-[16px] font-bold mt-1 leading-tight tabular-nums">€15.2M<span className="text-[9px] text-success font-bold ml-1 align-middle whitespace-nowrap">+22.1%</span></p>
            <p className="text-[8px] text-success font-semibold">+221% croissance prévue</p>
            <svg viewBox="0 0 150 60" className="w-full h-[54px] mt-1" preserveAspectRatio="none">
              <path d="M6 50 L30 44 L54 46 L78 34 L102 24 L126 14 L144 6" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 52 L30 50 L54 48 L78 42 L102 38 L126 30 L144 26" fill="none" stroke="var(--color-chart-2)" strokeWidth="1.6" strokeDasharray="3 3" strokeLinecap="round" />
            </svg>
            <div className="flex gap-3 text-[7.5px] text-muted-foreground">
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-primary)" }} />Réel</span>
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-chart-2)" }} />Prédiction IA</span>
            </div>
          </div>

          {/* segments */}
          <div className="rounded-xl p-3 bg-card/50 border border-primary/[0.13] min-w-0 overflow-hidden">
            <p className="text-[10px] font-semibold truncate">Analyse des segments</p>
            <p className="text-[8.5px] text-muted-foreground truncate">Performance par segment client</p>
            <div className="mt-1.5 space-y-1.5">
              {[
                { n: "Entreprise", v: "€6.2M", w: "90%", d: "+22.5%" },
                { n: "PME", v: "€4.1M", w: "62%", d: "+19.2%" },
                { n: "Startups", v: "€1.8M", w: "38%", d: "+35.7%" },
                { n: "Particuliers", v: "€0.4M", w: "18%", d: "+12.3%" },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-1 text-[8px]">
                  <span className="w-[42px] shrink-0 truncate">{s.n}</span>
                  <span className="shrink-0 text-right tabular-nums text-muted-foreground">{s.v}</span>
                  <span className="flex-1 min-w-[12px] h-1.5 rounded-full bg-secondary overflow-hidden"><span className="block h-full bg-gradient-primary rounded-full" style={{ width: s.w }} /></span>
                  <span className="shrink-0 text-success font-semibold text-right tabular-nums">{s.d}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center px-2 overflow-hidden">
              <span className="text-[9px] text-primary font-semibold truncate w-full text-center">Voir tous les segments</span>
            </div>
          </div>

          {/* alerts */}
          <div className="rounded-xl p-3 bg-card/50 border border-primary/[0.13] min-w-0 overflow-hidden">
            <p className="text-[10px] font-semibold truncate">Alertes intelligentes</p>
            <p className="text-[8.5px] text-muted-foreground truncate">Notifications IA en temps réel</p>
            <div className="mt-1.5 space-y-1.5">
              {[
                { c: "var(--color-success)", t: "Pic de demande détecté", s: "+45% vs normale", x: "Il y a 5 min" },
                { c: "var(--color-warning)", t: "Anomalie de prix", s: "Produit ABC-123", x: "Il y a 15 min" },
                { c: "var(--color-primary)", t: "Opportunité de vente", s: "Segment Entreprise", x: "Il y a 30 min" },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <span className="h-[7px] w-[7px] rounded-full mt-1 shrink-0" style={{ background: a.c, boxShadow: `0 0 6px ${a.c}` }} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <p className="text-[9px] font-semibold leading-tight truncate">{a.t}</p>
                      <span className="ml-auto text-[7px] text-muted-foreground whitespace-nowrap shrink-0">{a.x}</span>
                    </div>
                    <p className="text-[7.5px] text-muted-foreground leading-tight truncate">{a.s}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center px-2 overflow-hidden">
              <span className="text-[9px] text-primary font-semibold truncate w-full text-center">Voir toutes les alertes</span>
            </div>
          </div>
        </div>

        {/* status bar */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-2 border-t border-border/40 text-[8.5px]">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground whitespace-nowrap"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse shrink-0" />Système IA <b className="text-foreground font-semibold">Opérationnel</b></span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground whitespace-nowrap"><span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />Données <b className="text-foreground font-semibold">Synchronisées</b></span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground whitespace-nowrap">Précision prédictive <b className="text-foreground font-semibold">94.2%</b></span>
          <span className="ml-auto inline-flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-muted-foreground whitespace-nowrap">Traitement <b className="text-foreground font-semibold">2.4M événements</b></span>
            <span className="text-muted-foreground whitespace-nowrap">Mise à jour <b className="text-foreground font-semibold">il y a 30 s</b></span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-start">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-primary/[0.12] blur-3xl rounded-full pointer-events-none" />
      <div className="relative w-full max-w-7xl mx-auto px-6 pt-10 lg:pt-14 pb-16">
        <div className="grid lg:grid-cols-[0.85fr_1.2fr] gap-10 xl:gap-14 items-start">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-7">
              <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
              Présentation de DataVision AI 3.0 — désormais dotée d'analyses autonomes
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-semibold tracking-tight leading-[1.08]">
              L'analyse de données d'entreprise{" "}
              <span className="text-gradient">réinventée par l'IA</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
              La plateforme d'analyse intelligente que les équipes modernes utilisent pour suivre les revenus, le marketing, les ventes et les clients, et pour agir sur les informations avant que les concurrents ne les remarquent.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-200">
                Démarrez un essai gratuit de 14 jours <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#analytics" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-accent hover:border-primary/30 transition-all duration-200">
                Voir la démo en direct
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                { icon: Shield, text: "Aucune carte de crédit requise" },
                { icon: Shield, text: "Certification Sécurité" },
                { icon: Shield, text: "Données 100% cryptées" },
                { icon: Globe, text: "Conforme au RGPD" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <item.icon className="h-3.5 w-3.5 text-primary/50 shrink-0" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <HeroPremiumVisual />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/25">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/50 mb-5 text-center">
            La confiance de plus de 4 200 équipes pilotées par les données
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-base font-semibold text-muted-foreground/35">
            <span>Acme</span><span>Linear</span><span>Northwind</span><span>Vertex</span><span>Stellar</span><span>Halcyon</span><span>Atlas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Platform Section ───────────────────────────────────────── */

const platformModules = [
  {
    icon: TrendingUp,
    title: "Intelligence des revenus",
    desc: "Suivez votre ARR, MRR et expansion avec des prévisions pilotées par l'IA.",
  },
  {
    icon: Users,
    title: "Intelligence client",
    desc: "Segmentez, scorez et anticipez le churn sur toute votre base clients.",
  },
  {
    icon: BarChart3,
    title: "Intelligence marketing",
    desc: "Mesurez le ROI, l'attribution et la performance par canal en temps réel.",
  },
  {
    icon: Brain,
    title: "IA prédictive",
    desc: "Des modèles ML qui détectent risques et opportunités automatiquement.",
  },
  {
    icon: Zap,
    title: "Alertes intelligentes",
    desc: "Notifications proactives dès que vos KPIs s'écartent de vos objectifs.",
  },
  {
    icon: Sparkles,
    title: "Insights autonomes",
    desc: "L'IA génère des analyses hebdomadaires, anomalies et recommandations stratégiques.",
  },
];

/* « Unified OS Viewport » — vitrine portrait immersive (distincte des autres sections) */
const pfDock = [TrendingUp, Users, BarChart3, Brain, Zap, Sparkles];

function PlatformVisual() {
  return (
    <div className="pf-stage relative mx-auto w-full max-w-[440px]">
      <style>{`
        .pf-stage { isolation: isolate; }

        /* Faisceau de lumière vertical (signature glow — différent des halos radiaux ailleurs) */
        .pf-beam {
          position: absolute;
          top: -8%;
          left: 50%;
          width: 58%;
          height: 116%;
          transform: translateX(-50%);
          z-index: -2;
          pointer-events: none;
          filter: blur(42px);
          background: linear-gradient(to bottom,
            transparent,
            oklch(0.5 0.27 258 / 0.32) 38%,
            oklch(0.76 0.22 210 / 0.26) 60%,
            transparent);
          animation: pf-beam 7s ease-in-out infinite;
        }
        /* Pool de lumière au sol */
        .pf-pool {
          position: absolute;
          bottom: -7%;
          left: 50%;
          width: 80%;
          height: 26%;
          transform: translateX(-50%);
          z-index: -2;
          pointer-events: none;
          filter: blur(46px);
          border-radius: 9999px;
          background: radial-gradient(ellipse at center, oklch(0.76 0.22 210 / 0.28), transparent 70%);
        }

        /* Particules flottantes */
        .pf-particles { position: absolute; inset: -4% -2%; z-index: -1; pointer-events: none; }
        .pf-particle {
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 9999px;
          background: oklch(0.84 0.18 208);
          box-shadow: 0 0 8px oklch(0.76 0.22 210 / 0.9);
          opacity: 0.5;
          animation: pf-drift 9s ease-in-out infinite;
        }
        .pf-p1  { top: 8%;  left: 6%;  animation-duration: 8s;  animation-delay: 0s;   }
        .pf-p2  { top: 22%; left: 92%; animation-duration: 11s; animation-delay: .8s;  }
        .pf-p3  { top: 40%; left: 3%;  animation-duration: 9.5s;animation-delay: 1.6s; width:2px;height:2px;}
        .pf-p4  { top: 64%; left: 95%; animation-duration: 10s; animation-delay: .4s;  }
        .pf-p5  { top: 80%; left: 10%; animation-duration: 12s; animation-delay: 2.1s; }
        .pf-p6  { top: 90%; left: 80%; animation-duration: 8.5s;animation-delay: 1.2s; width:2px;height:2px;}
        .pf-p7  { top: 14%; left: 50%; animation-duration: 13s; animation-delay: .2s;  width:2px;height:2px;}
        .pf-p8  { top: 52%; left: 88%; animation-duration: 9s;  animation-delay: 2.6s; }
        .pf-p9  { top: 34%; left: 96%; animation-duration: 11.5s;animation-delay:1.9s; width:2px;height:2px;}
        .pf-p10 { top: 72%; left: 2%;  animation-duration: 10.5s;animation-delay:.6s;  }
        .pf-p11 { top: 6%;  left: 78%; animation-duration: 12.5s;animation-delay:3s;   width:2px;height:2px;}
        .pf-p12 { top: 46%; left: 7%;  animation-duration: 9.8s; animation-delay:1.1s; }

        /* Cadre OS portrait */
        .pf-frame {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          border-radius: 1.6rem;
          overflow: hidden;
          padding: 0;
          box-shadow:
            0 40px 120px -40px oklch(0.5 0.27 258 / 0.7),
            inset 0 1px 0 oklch(0.76 0.22 210 / 0.18);
        }
        /* Sheen holographique + fines scanlines */
        .pf-sheen {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background:
            linear-gradient(135deg, oklch(0.76 0.22 210 / 0.10), transparent 42%),
            repeating-linear-gradient(0deg, transparent 0 3px, oklch(0.76 0.22 210 / 0.025) 3px 4px);
        }

        /* Menubar OS */
        .pf-chrome {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 0.85rem;
          border-bottom: 1px solid oklch(0.76 0.22 210 / 0.16);
          background: oklch(0.13 0.045 254 / 0.6);
        }
        .pf-dot { width: 8px; height: 8px; border-radius: 9999px; }

        .pf-screen { position: relative; padding: 0.7rem 0.7rem 0.5rem; }
        .pf-screen img {
          filter: drop-shadow(0 14px 40px oklch(0.5 0.27 258 / 0.4));
        }

        /* Dock d'OS (icônes décoratives — meuble le stage, renforce la métaphore) */
        .pf-dock {
          display: flex;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.25rem 0.7rem 0.7rem;
        }
        .pf-dock-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.1rem; height: 2.1rem;
          border-radius: 0.7rem;
          color: var(--color-primary);
          background: oklch(0.76 0.22 210 / 0.08);
          border: 1px solid oklch(0.76 0.22 210 / 0.2);
          transition: transform .2s ease, background .2s ease;
        }
        .pf-dock-chip:hover { transform: translateY(-3px); background: oklch(0.76 0.22 210 / 0.16); }

        /* Status bar OS */
        .pf-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.85rem;
          font-size: 0.625rem;
          color: var(--color-muted-foreground);
          border-top: 1px solid oklch(0.76 0.22 210 / 0.14);
          background: oklch(0.13 0.045 254 / 0.6);
        }

        /* Chips flottantes — profondeur en couches */
        .pf-chip {
          position: absolute;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.7rem;
          border-radius: 9999px;
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--color-foreground);
          background: oklch(0.16 0.05 254 / 0.82);
          border: 1px solid oklch(0.76 0.22 210 / 0.3);
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 30px -10px oklch(0.5 0.27 258 / 0.6);
          animation: pf-floaty 6s ease-in-out infinite;
        }
        .pf-chip svg { color: var(--color-primary); }
        .pf-chip-tr { top: 12%; right: -1.4rem; }
        .pf-chip-bl { bottom: 16%; left: -1.6rem; animation-delay: 1.5s; }

        @keyframes pf-beam {
          0%, 100% { opacity: 0.55; transform: translateX(-50%) scaleY(1); }
          50%      { opacity: 0.9;  transform: translateX(-50%) scaleY(1.05); }
        }
        @keyframes pf-drift {
          0%, 100% { transform: translateY(0); opacity: 0.25; }
          50%      { transform: translateY(-14px); opacity: 0.75; }
        }
        @keyframes pf-floaty {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }

        @media (max-width: 520px) {
          .pf-chip { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-beam, .pf-particle, .pf-chip, .pf-pulse { animation: none !important; }
          .pf-particle { opacity: 0.5; }
        }
      `}</style>

      <div className="pf-beam" aria-hidden="true" />
      <div className="pf-pool" aria-hidden="true" />
      <div className="pf-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`pf-particle pf-p${i + 1}`} />
        ))}
      </div>

      <div className="pf-frame glass-card border-glow">
        <div className="pf-sheen" aria-hidden="true" />

        {/* Menubar OS */}
        <div className="pf-chrome">
          <span className="pf-dot" style={{ background: "oklch(0.76 0.22 210 / 0.9)" }} />
          <span className="pf-dot" style={{ background: "oklch(0.76 0.22 210 / 0.55)" }} />
          <span className="pf-dot" style={{ background: "oklch(0.76 0.22 210 / 0.3)" }} />
          <span className="text-[0.6875rem] font-semibold tracking-wide ml-1">DataVision OS</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[0.625rem] text-primary font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-primary dot-glow pf-pulse animate-pulse" />
            En direct
          </span>
        </div>

        {/* Image Mockup2 entière (non rognée) */}
        <div className="pf-screen">
          <img
            src="/Mockup2.jpg?v=2"
            alt="Plateforme DataVision : ordinateur portable affichant un tableau de bord analytique et des cartes d'analyse holographiques pilotées par l'IA"
            loading="lazy"
            className="block w-full h-auto rounded-xl select-none pointer-events-none"
          />
        </div>

        {/* Dock d'OS (décoratif) */}
        <div className="pf-dock">
          {pfDock.map((Icon, i) => (
            <span key={i} className="pf-dock-chip">
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>

        {/* Status bar OS */}
        <div className="pf-status">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse pf-pulse" />
            Système unifié
          </span>
          <span className="ml-auto text-muted-foreground">6 modules · 1 plateforme</span>
        </div>
      </div>

      {/* Chips flottantes — profondeur */}
      <div className="pf-chip pf-chip-tr">
        <Sparkles className="h-3.5 w-3.5" /> Insights IA
      </div>
      <div className="pf-chip pf-chip-bl">
        <Shield className="h-3.5 w-3.5" /> SOC 2 · RGPD
      </div>
    </div>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-center">

          {/* ── Left: visuel Mockup2 (image réelle) — image first on mobile, left on desktop ── */}
          <div className="relative">
            <PlatformVisual />
          </div>

          {/* ── Right: content ── */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.07] px-4 py-1.5 text-xs font-semibold text-primary mb-7 uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              Plateforme alimentée par l'IA
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-semibold tracking-tight leading-[1.08]">
              La plateforme qui transforme les{" "}
              <span className="text-gradient">données en décisions.</span>
            </h2>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Connectez vos revenus, clients, marketing et opérations dans un système unique alimenté par l'intelligence artificielle.
            </p>

            {/* 6 module cards — 2×3 grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {platformModules.map((mod) => (
                <div key={mod.title} className="glass-card rounded-2xl p-4 card-hover flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20 shrink-0">
                    <mod.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight">{mod.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* status strip — comme l'aperçu Claude Design */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse shrink-0" />
                Système IA <b className="text-foreground font-semibold">Opérationnel</b>
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                Mise à jour <b className="text-foreground font-semibold">il y a 30 s</b>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Features: "AI Operating System Showcase" ───────────────── */
const capabilities = [
  { n: "01", title: "Perspectives de l'IA autonome", desc: "Notre IA détecte anomalies, opportunités et risques dans vos données — avant même que vous ne le demandiez.", row: "top" as const },
  { n: "02", title: "Analyse unifiée", desc: "Revenus, marketing, ventes, clients : tous vos signaux métier réunis dans un espace de travail unique.", row: "top" as const },
  { n: "03", title: "Données en temps réel", desc: "Flux d'événements en direct depuis votre stack : CRM, facturation, publicité, produit, support. Toujours à jour.", row: "top" as const },
  { n: "04", title: "Sécurité de niveau entreprise", desc: "SOC 2 Type II, RGPD, conforme HIPAA. SSO, RBAC et permissions au niveau des lignes, prêts à l'emploi.", row: "bottom" as const },
  { n: "05", title: "Global par conception", desc: "Multidevise, multirégion, multilingue. Conçu pour les équipes opérant sur plusieurs continents.", row: "bottom" as const },
  { n: "06", title: "Requêtes en langage naturel", desc: "Posez vos questions en langage naturel. Graphiques, segments et prévisions en quelques secondes — sans SQL.", row: "bottom" as const },
];

function CapabilityBlock({ n, title, desc, row }: { n: string; title: string; desc: string; row: "top" | "bottom" }) {
  const nodePos = row === "top" ? "-bottom-1" : "-top-1";
  const linePos = row === "top" ? "-bottom-[1.95rem] bg-gradient-to-b" : "-top-[1.95rem] bg-gradient-to-t";
  return (
    <div className="relative glass-card rounded-2xl p-6 card-hover">
      {/* connector line + node toward the AI Core (desktop only) */}
      <span className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-px h-7 from-primary/60 to-transparent ${linePos}`} />
      <span className={`hidden lg:block absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary shadow-glow ${nodePos}`} />
      <span className="block text-[0.6875rem] font-bold tracking-[0.12em] text-primary/70 mb-3">{n}</span>
      <h3 className="font-semibold text-base mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{desc}</p>
    </div>
  );
}

function Features() {
  const top = capabilities.filter((c) => c.row === "top");
  const bottom = capabilities.filter((c) => c.row === "bottom");

  return (
    <section id="features" className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Système d'exploitation IA</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Tout ce dont votre entreprise a besoin pour <span className="text-gradient">croître</span>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">Un cœur d'intelligence unifié qui connecte chaque capacité — une seule plateforme à la place de six outils.</p>
      </div>

      {/* Showcase: top row — center visual — bottom row */}
      <div className="relative z-10 flex flex-col items-center gap-9">

        {/* TOP capability row */}
        <div className="order-2 lg:order-1 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
          {top.map((c) => (
            <CapabilityBlock key={c.n} n={c.n} title={c.title} desc={c.desc} row="top" />
          ))}
        </div>

        {/* CENTER — Mockup3 AI Core visual (focal point) */}
        <div className="order-1 lg:order-2 relative w-full max-w-4xl flex justify-center py-2">
          <div className="absolute -inset-x-4 -inset-y-8 bg-primary/[0.13] blur-3xl rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-chart-2/[0.18] blur-3xl rounded-full pointer-events-none" />
          <img
            src="/Mockup3.jpg"
            alt="AI Core — moteur d'intelligence unifié connectant toutes les capacités de la plateforme DataVision"
            loading="lazy"
            className="relative w-full h-auto rounded-3xl border-glow select-none pointer-events-none"
            style={{ filter: "drop-shadow(0 24px 70px oklch(0.5 0.27 258 / 0.45))" }}
          />
        </div>

        {/* BOTTOM capability row */}
        <div className="order-3 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
          {bottom.map((c) => (
            <CapabilityBlock key={c.n} n={c.n} title={c.title} desc={c.desc} row="bottom" />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── « En chiffres » : vitrine cinématique (image-héros) ─────── */
function KpiPreview() {
  return (
    <section id="analytics" className="ec-section relative py-24 md:py-32 max-w-7xl mx-auto px-6 overflow-hidden">
      <style>{`
        .ec-grid {
          display: grid;
          grid-template-columns: 24% 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .ec-showcase {
          position: relative;
          margin-right: -4rem;
        }
        .ec-halo {
          position: absolute;
          inset: -14% -8%;
          z-index: -1;
          pointer-events: none;
          filter: blur(60px);
          background: radial-gradient(60% 60% at 58% 42%,
            oklch(0.5 0.27 258 / 0.5),
            oklch(0.76 0.22 210 / 0.18) 45%,
            transparent 72%);
        }
        .ec-perspective { perspective: 2200px; }
        .ec-frame {
          position: relative;
          overflow: hidden;
          border-radius: 1.4rem;
          border: 1px solid oklch(0.76 0.22 210 / 0.3);
          transform-origin: 60% 50%;
          transform: rotateY(-7deg) rotateX(2.4deg) scale(1.02);
          box-shadow:
            0 60px 140px -30px oklch(0.38 0.22 258 / 0.75),
            inset 0 1px 0 oklch(0.76 0.22 210 / 0.25);
          transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ec-frame:hover { transform: rotateY(-4.5deg) rotateX(1.6deg) scale(1.03); }
        .ec-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(135deg, oklch(0.76 0.22 210 / 0.18), transparent 42%),
            linear-gradient(to bottom, transparent 55%, oklch(0.05 0.03 258 / 0.55));
        }
        .ec-img { display: block; width: 100%; height: auto; }
        .ec-reflection {
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          width: 100%;
          height: auto;
          margin-top: 0.4rem;
          transform: scaleY(-1);
          opacity: 0.28;
          pointer-events: none;
          border-radius: 1.4rem;
          -webkit-mask-image: linear-gradient(to bottom, black, transparent 62%);
          mask-image: linear-gradient(to bottom, black, transparent 62%);
        }
        .ec-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(70px);
          z-index: 0;
          pointer-events: none;
        }
        .ec-orb-1 { top: -6rem; right: 18%; width: 26rem; height: 26rem; background: oklch(0.5 0.27 258 / 0.16); }
        .ec-orb-2 { bottom: -8rem; right: -4rem; width: 24rem; height: 24rem; background: oklch(0.76 0.22 210 / 0.14); }
        .ec-orb-3 { top: 30%; left: -6rem; width: 20rem; height: 20rem; background: oklch(0.7 0.2 290 / 0.12); }

        @media (max-width: 980px) {
          .ec-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .ec-showcase { margin-right: 0; }
          .ec-perspective { perspective: none; }
          .ec-frame { transform: none; }
          .ec-frame:hover { transform: none; }
          .ec-reflection { display: none; }
          .ec-orb-1 { right: -4rem; width: 18rem; height: 18rem; }
          .ec-orb-2 { width: 16rem; height: 16rem; }
          .ec-orb-3 { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ec-frame, .ec-frame:hover { transition: none; }
          .ec-pulse { animation: none; }
        }
      `}</style>

      {/* Orbes de lumière ambiants */}
      <div className="ec-orb ec-orb-1" />
      <div className="ec-orb ec-orb-2" />
      <div className="ec-orb ec-orb-3" />

      <div className="ec-grid relative z-10">

        {/* GAUCHE — intro minimale */}
        <div className="ec-intro">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.07] px-3 py-1 text-[0.6875rem] font-semibold text-primary uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary dot-glow ec-pulse animate-pulse" />
            En chiffres
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            Des résultats qui se cumulent,{" "}
            <span className="text-gradient">semaine après semaine</span>.
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            Des décisions pilotées par l'IA, à l'échelle de toute l'entreprise.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary dot-glow ec-pulse animate-pulse" />
            <span className="text-xs text-muted-foreground tracking-wide">Command Center en direct</span>
          </div>
        </div>

        {/* DROITE — image-héros */}
        <div className="ec-showcase">
          <div className="ec-halo" />
          <div className="ec-perspective">
            <div className="ec-frame glass-card border-glow">
              <img
                src="/Mockup4.jpg"
                alt="DataVision AI — AI Executive Command Center : salle de pilotage avec mur d'intelligence holographique en temps réel"
                loading="lazy"
                className="ec-img select-none"
              />
            </div>
          </div>
          <img
            src="/Mockup4.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="ec-reflection select-none"
          />
        </div>

      </div>
    </section>
  );
}

/* ─── Témoignages ────────────────────────────────────────────── */
const testimonials = [
  { quote: "DataVision AI a remplacé quatre outils de BI dans notre stack. Notre comité de direction lit désormais les mêmes chiffres, et les décisions sont 3× plus rapides.", name: "Sarah Chen", role: "VP Opérations, Acme", initials: "SC" },
  { quote: "Les analyses de l'IA ont repéré un schéma de churn que nous aurions manqué pendant des semaines. La plateforme s'est rentabilisée en un trimestre.", name: "Marcus Webb", role: "Responsable Croissance, Linear Studios", initials: "MW" },
  { quote: "Nous avons été opérationnels en une journée. Nos analystes adorent la couche en langage naturel — les chefs de produit non techniques sont enfin autonomes.", name: "Priya Anand", role: "Directrice technique, Northwind Labs", initials: "PA" },
];

function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Plébiscité par les opérationnels</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">La plateforme des équipes ambitieuses</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-2xl p-6 card-hover">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">«&nbsp;{t.quote}&nbsp;»</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shadow-md shadow-primary/25">{t.initials}</div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Tarification ───────────────────────────────────────────── */
const plans = [
  { name: "Essentiel", price: "49 €", desc: "Pour les petites équipes qui débutent.", features: ["Jusqu'à 5 utilisateurs", "10 tableaux de bord", "Synchronisation quotidienne des données", "Support par e-mail", "Intégrations essentielles"], cta: "Commencer gratuitement", featured: false },
  { name: "Croissance", price: "199 €", desc: "Pour les équipes en pleine croissance.", features: ["Jusqu'à 25 utilisateurs", "Tableaux de bord illimités", "Synchronisation des données en temps réel", "Analyses et alertes IA", "Toutes les intégrations", "Support prioritaire"], cta: "Démarrer l'essai gratuit", featured: true },
  { name: "Entreprise", price: "Sur mesure", desc: "Pour les organisations à grande échelle.", features: ["Utilisateurs illimités", "Modèles de données personnalisés", "CSM dédié", "SSO, SCIM, journaux d'audit", "SLA et cloud privé", "Support téléphonique 24/7"], cta: "Contacter l'équipe commerciale", featured: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Tarification</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Des forfaits simples qui évoluent avec vous</h2>
        <p className="mt-4 text-muted-foreground">Commencez gratuitement. Évoluez quand vous êtes prêt. Annulez à tout moment.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-2xl p-6 transition-all ${p.featured ? "bg-gradient-primary text-primary-foreground shadow-elegant shadow-primary/30 scale-105 border border-primary/30" : "glass-card card-hover"}`}>
            {p.featured && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-card text-primary text-xs font-bold px-4 py-1 border border-primary/30 shadow-md">Le plus populaire</span>}
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className={`text-sm mt-1 ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
            <div className="mt-5">
              <span className="text-4xl font-semibold">{p.price}</span>
              {p.price !== "Sur mesure" && <span className={`text-sm ml-1 ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/mois</span>}
            </div>
            <ul className="mt-6 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-primary-foreground" : "text-primary"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/dashboard" className={`mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${p.featured ? "bg-card text-primary hover:bg-card/90 shadow-sm" : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50"}`}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────── */
const faqs = [
  { q: "Combien de temps prend la configuration ?", a: "La plupart des équipes sont opérationnelles en une journée. Nous proposons des intégrations natives avec plus de 200 sources de données, dont Salesforce, HubSpot, Stripe, Shopify, Google Analytics et votre entrepôt de données." },
  { q: "Mes données sont-elles sécurisées ?", a: "Oui. Nous sommes certifiés SOC 2 Type II, conformes au RGPD et à la norme HIPAA. Les données sont chiffrées en transit et au repos. Nous prenons en charge le SSO, SCIM, RBAC et la sécurité au niveau des lignes." },
  { q: "Puis-je l'essayer avant d'acheter ?", a: "Oui — chaque forfait inclut un essai gratuit de 14 jours. Aucune carte de crédit requise. Vous aurez un accès complet aux analyses IA, aux données en temps réel et aux tableaux de bord illimités." },
  { q: "Prenez-vous en charge les modèles de données personnalisés ?", a: "Sur les forfaits Croissance et Entreprise, oui. Créez des modèles sémantiques, des métriques personnalisées et des segments réutilisables sur lesquels toute votre organisation peut s'appuyer." },
  { q: "Quelles intégrations sont disponibles ?", a: "Plus de 200 connecteurs natifs, ainsi qu'une API REST, des webhooks et des connexions directes aux entrepôts de données (Snowflake, BigQuery, Redshift, Databricks, Postgres)." },
];

function FAQ() {
  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Vos questions, nos réponses</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="glass-card rounded-2xl p-5 group">
            <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
              {f.q}
              <span className="ml-4 h-6 w-6 rounded-full bg-accent/80 border border-border text-muted-foreground flex items-center justify-center text-sm group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-primary-foreground shadow-elegant">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Prêt à voir DataVision en action ?</h2>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">Réservez une démonstration de 20 minutes avec notre équipe. Nous vous présenterons la plateforme sur vos propres données.</p>
          </div>
          <form className="space-y-3 glass rounded-2xl p-5 text-foreground">
            <input placeholder="E-mail professionnel" className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_oklch(0.76_0.22_210_/_0.12)] transition-all placeholder:text-muted-foreground" />
            <input placeholder="Entreprise" className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_oklch(0.76_0.22_210_/_0.12)] transition-all placeholder:text-muted-foreground" />
            <textarea placeholder="Quel problème souhaitez-vous résoudre ?" rows={3} className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_oklch(0.76_0.22_210_/_0.12)] transition-all resize-none placeholder:text-muted-foreground" />
            <button type="button" className="w-full rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-glow transition-all">
              Demander une démo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">La plateforme d'analyse alimentée par l'IA qui aide les entreprises modernes à croître plus vite.</p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="h-9 w-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all"><Github className="h-4 w-4" /></a>
          </div>
        </div>
        {[
          { title: "Produit", links: ["Fonctionnalités", "Tarification", "Intégrations", "Notes de version"] },
          { title: "Entreprise", links: ["À propos", "Clients", "Carrières", "Presse"] },
          { title: "Ressources", links: ["Documentation", "Blog", "Sécurité", "État du service"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold mb-4">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((l) => <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="neon-line" />
      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2026 DataVision AI, Inc. Tous droits réservés.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">Conditions</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Root ───────────────────────────────────────────────────── */
function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <PlatformSection />
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
