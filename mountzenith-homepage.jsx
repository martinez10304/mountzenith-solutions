import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";


function CircuitPeakMark({ className = "", animate = false }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points="80,320 190,140 300,320" fill="#14213D" />
      <path
        d="M60,260 H150 L180,220 H350"
        stroke="#2DD4BF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className={animate ? "circuit-draw" : ""}
      />
      <circle cx="60" cy="260" r="9" fill="#2DD4BF" />
      <circle cx="350" cy="260" r="9" fill="#2DD4BF" />
      <circle cx="190" cy="122" r="14" fill="#F2B705" />
    </svg>
  );
}

function AppMockup({ variant, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 400 240" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#F8FAFC" />
      <rect width="400" height="28" fill="#14213D" />
      <circle cx="16" cy="14" r="4" fill="#2DD4BF" />
      <circle cx="30" cy="14" r="4" fill="#F2B705" />
      <circle cx="44" cy="14" r="4" fill="#64748B" />

      {variant === "kanban" && (
        <g>
          {[20, 110, 200, 290].map((x, i) => (
            <g key={x}>
              <rect x={x} y={44} width="80" height="10" rx="2" fill="#14213D" opacity="0.7" />
              <rect x={x} y={62} width="80" height="34" rx="4" fill="#ffffff" stroke="#E2E8F0" />
              <rect x={x} y={104} width="80" height="34" rx="4" fill="#ffffff" stroke="#E2E8F0" />
              {i < 2 && <rect x={x} y={62} width="4" height="34" fill="#2DD4BF" />}
            </g>
          ))}
        </g>
      )}

      {variant === "sidepanel" && (
        <g>
          <rect x="20" y="44" width="230" height="12" rx="2" fill="#64748B" opacity="0.4" />
          <rect x="20" y="64" width="200" height="8" rx="2" fill="#64748B" opacity="0.3" />
          <rect x="20" y="80" width="210" height="8" rx="2" fill="#64748B" opacity="0.3" />
          <rect x="20" y="96" width="180" height="8" rx="2" fill="#64748B" opacity="0.3" />
          <rect x="270" y="44" width="110" height="150" rx="6" fill="#ffffff" stroke="#2DD4BF" strokeWidth="2" />
          <rect x="284" y="58" width="82" height="8" rx="2" fill="#14213D" opacity="0.6" />
          <rect x="284" y="74" width="82" height="6" rx="2" fill="#64748B" opacity="0.4" />
          <rect x="284" y="86" width="60" height="6" rx="2" fill="#64748B" opacity="0.4" />
          <rect x="284" y="170" width="82" height="16" rx="4" fill="#2DD4BF" />
        </g>
      )}

      {variant === "dashboard" && (
        <g>
          {[20, 140, 260].map((x) => (
            <g key={x}>
              <rect x={x} y="44" width="100" height="40" rx="4" fill="#14213D" opacity="0.06" />
              <rect x={x + 10} y="52" width="50" height="8" rx="2" fill="#64748B" opacity="0.4" />
              <rect x={x + 10} y="66" width="30" height="12" rx="2" fill="#14213D" opacity="0.7" />
            </g>
          ))}
          {[30, 50, 25, 60, 40, 70, 45].map((h, i) => (
            <rect
              key={i}
              x={20 + i * 50}
              y={200 - h}
              width="30"
              height={h}
              rx="2"
              fill={i === 5 ? "#F2B705" : "#2DD4BF"}
              opacity={i === 5 ? 1 : 0.6}
            />
          ))}
        </g>
      )}

      {variant === "calendar" && (
        <g>
          {Array.from({ length: 21 }).map((_, i) => (
            <rect key={i} x={20 + (i % 7) * 22} y={44 + Math.floor(i / 7) * 22} width="18" height="18" rx="3" fill={i === 9 ? "#2DD4BF" : "#ffffff"} stroke="#E2E8F0" />
          ))}
          {[140, 168, 196].map((y) => (
            <g key={y}>
              <circle cx="30" cy={y + 8} r="8" fill="#14213D" opacity="0.15" />
              <rect x="46" y={y} width="200" height="8" rx="2" fill="#64748B" opacity="0.35" />
              <rect x="330" y={y} width="50" height="16" rx="8" fill="#F2B705" opacity="0.25" />
            </g>
          ))}
        </g>
      )}

      {variant === "table" && (
        <g>
          <rect x="20" y="44" width="360" height="16" rx="2" fill="#14213D" opacity="0.08" />
          {[70, 100, 130, 160, 190].map((y, i) => (
            <g key={y}>
              <rect x="20" y={y} width="180" height="8" rx="2" fill="#64748B" opacity="0.3" />
              <rect x="220" y={y - 3} width="60" height="14" rx="7" fill={i % 2 === 0 ? "#2DD4BF" : "#F2B705"} opacity="0.25" />
              <rect x="300" y={y} width="60" height="8" rx="2" fill="#64748B" opacity="0.2" />
            </g>
          ))}
        </g>
      )}

      {variant === "marketing" && (
        <g>
          <rect x="20" y="44" width="360" height="66" rx="4" fill="#14213D" opacity="0.08" />
          <rect x="32" y="58" width="170" height="14" rx="2" fill="#14213D" opacity="0.75" />
          <rect x="32" y="78" width="130" height="8" rx="2" fill="#64748B" opacity="0.4" />
          <rect x="32" y="94" width="86" height="14" rx="4" fill="#F2B705" />
          {[20, 150, 280].map((x) => (
            <g key={x}>
              <rect x={x} y="126" width="110" height="72" rx="4" fill="#ffffff" stroke="#E2E8F0" />
              <circle cx={x + 20} cy="146" r="8" fill="#2DD4BF" opacity="0.5" />
              <rect x={x + 12} y="164" width="86" height="6" rx="2" fill="#64748B" opacity="0.3" />
              <rect x={x + 12} y="176" width="60" height="6" rx="2" fill="#64748B" opacity="0.2" />
            </g>
          ))}
        </g>
      )}

      {variant === "game" && (
        <g>
          <rect x="0" y="28" width="400" height="212" fill="#0B1220" />
          {["#F2B705", "#14213D", "#14213D", "#14213D", "#14213D", "#14213D"].map((fill, i) => (
            <rect key={i} x={20 + i * 58} y="40" width="50" height="16" rx="4" fill={fill} stroke="#2DD4BF" strokeOpacity="0.3" />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x={20 + (i % 4) * 90} y={70 + Math.floor(i / 4) * 34} width="80" height="26" rx="3" fill="#14213D" stroke="#2DD4BF" strokeOpacity="0.25" />
          ))}
          <rect x="20" y="204" width="360" height="10" rx="5" fill="#1E293B" />
          <rect
            x="20"
            y="204"
            height="10"
            rx="5"
            fill="#F2B705"
            style={{
              width: visible ? 230 : 0,
              transition: "width 1.3s ease-out 0.3s",
            }}
          />
        </g>
      )}
    </svg>
  );
}

const SERVICES = [
  { tag: "WEB", title: "Web Applications", desc: "Custom web apps designed around how your team actually operates, not stretched to fit a generic template." },
  { tag: "SITE", title: "Website Design & Development", desc: "Marketing sites, giving/CMS platforms, and portfolio sites, designed and built from scratch and styled to match your brand." },
  { tag: "DATA", title: "Database Design", desc: "Schemas and reporting structures that stay accurate as your data grows, not just on the day they ship." },
  { tag: "AUTO", title: "Automation", desc: "Connect the tools you already use so status updates, handoffs, and notifications happen without anyone having to remember to do them." },
  { tag: "CRM", title: "CRM Systems", desc: "Dynamics 365, Dataverse, and legacy CRM platforms configured, reported on, and kept usable for the people working in them every day." },
  { tag: "BI", title: "Data Analytics & Visualization", desc: "Turn scattered spreadsheets and CRM exports into dashboards, charts, and reports your team actually checks, not ones that go stale after the kickoff meeting." },
];

const PROCESS = [
  { n: "01", title: "Discovery", desc: "Understand the actual problem, and who has to live with the solution every day." },
  { n: "02", title: "Design", desc: "Map the data, the flows, and the interface before a line of production code gets written." },
  { n: "03", title: "Build", desc: "Iterative development, with working versions you can react to early and often." },
  { n: "04", title: "QA", desc: "Tested against real scenarios your team runs into, not just the happy path." },
  { n: "05", title: "Launch & Handoff", desc: "Deployed, documented, and set up so your team can run it without me in the room." },
];

const INDEPENDENT_BUILDS = [
  { title: "Quest Tracker", status: "BUILT", variant: "kanban", category: "Web App", desc: "A gamified job-search tracker: scans postings by keyword, tracks applications through every stage, and shows funnel and response-rate analytics.", tags: ["Next.js", "Adzuna API", "Dashboard"] },
  { title: "CodeDash", status: "BUILT", variant: "dashboard", category: "Tool", link: "https://codedash-demo.streamlit.app/", desc: "A usage dashboard that tracks Claude Code and chat token consumption across projects, broken down by sub-agent, so you can see exactly where a week's usage went.", tags: ["Python", "Streamlit", "PostgreSQL"] },
  { title: "Waitlist Scheduler", status: "BUILT", variant: "calendar", category: "Web App", client: "Behavioral Health Specialist", link: "https://waitlist-scheduler.vercel.app/", desc: "A client scheduling waitlist app with board and calendar views. Tracks availability and session cadence, and flags when a client's longer-interval booking window opens.", tags: ["Next.js", "Supabase"] },
  { title: "Online Giving Tracker", status: "BUILT", variant: "table", category: "Web App", desc: "A campaign tracker for online giving site setups. Replaces a scattered ticketing system with a clear view of every campaign's status, type, and assignee.", tags: ["Campaign Tracking"] },
  { title: "Force Camp", status: "BUILT", variant: "game", category: "Game", client: "Salesforce Users", link: "https://forcecamp.pages.dev/", desc: "Gamified prep for the Salesforce Certified Platform Administrator exam: a Jeopardy-style board, rapid fire rounds, flashcards, survival mode, boss rush, daily challenges, and a full blueprint-weighted mock exam, across 152 scenario questions.", tags: ["React", "Vite", "Convex"] },
  { title: "S & G General Contractors", status: "BUILT", variant: "marketing", category: "Website", client: "Commercial & Residential Contractor", link: "https://sggeneralcontractors.netlify.app/", desc: "A marketing and lead-generation site for a Houston-based commercial and residential general contractor, built to showcase services and past work and give new leads a clear path to reach out.", tags: ["Website", "Netlify"] },
];

const CLIENT_WORK = [
  { title: "Nonprofit CRM Reporting", desc: "Built contact, membership, and contribution reports directly against a Dynamics 365 / Dataverse CRM for a national nonprofit network, including multi-year retention comparisons.", tags: ["Dynamics 365", "Dataverse", "SQL"] },
  { title: "Donor Outreach Automation", desc: "Designed a Power Automate workflow that generates a full outreach task sequence and stamps campaign status automatically, replacing a manual, easy-to-miss process.", tags: ["Power Automate", "CRM Automation"] },
  { title: "Multi-Affiliate Contribution Reporting", desc: "Standardized SQL Server reporting across several regional nonprofit affiliates, reconciling inconsistent source-of-fund classifications into one reliable report.", tags: ["SQL Server", "Reporting"] },
  { title: "Giving Platform Front-End Work", desc: "Ongoing front-end development across multiple CMS-based giving platforms: layout fixes, form validation, email templates, and cross-client browser fixes.", tags: ["HTML/CSS/JS", "CMS"] },
];

const CAREER = [
  { title: "Software Engineer", org: "Boeing · NASA" },
  { title: "Sr. Business Intelligence Engineer", org: "American Cancer Society · United Way" },
  { title: "Solutions Architect", org: "MountZenith Solutions" },
];

export default function ZenitharmSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [buildFilter, setBuildFilter] = useState("All");
  const careerRef = useRef(null);
  const [careerVisible, setCareerVisible] = useState(false);

  useEffect(() => {
    const el = careerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCareerVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#career", label: "Career" },
    { href: "#process", label: "Process" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="font-body bg-offwhite text-ink min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        html { scroll-behavior: smooth; }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'IBM Plex Sans', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .text-navy { color: #14213D; } .bg-navy { background-color: #14213D; }
        .text-teal { color: #2DD4BF; } .bg-teal { background-color: #2DD4BF; }
        .text-gold { color: #F2B705; } .bg-gold { background-color: #F2B705; }
        .text-slate { color: #64748B; } .text-ink { color: #1E293B; }
        .bg-offwhite { background-color: #F8FAFC; }
        .border-navy { border-color: #14213D; } .border-teal { border-color: #2DD4BF; }
        .bg-teal-dark:hover { background-color: #22B8A6; }
        @keyframes draw { from { stroke-dashoffset: 260; } to { stroke-dashoffset: 0; } }
        .circuit-draw { stroke-dasharray: 260; stroke-dashoffset: 260; animation: draw 1.3s ease-out 0.4s forwards; }
        @keyframes growX { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes growY { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .trace-line-h { transform-origin: left; animation: growX 1s ease-out forwards; }
        .trace-line-v { transform-origin: top; animation: growY 1s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .circuit-draw { animation: none; stroke-dashoffset: 0; }
          .trace-line-h, .trace-line-v { animation: none; transform: scale(1); }
        }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-30 bg-offwhite/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <CircuitPeakMark className="w-7 h-7" />
            <span className="font-display font-bold text-navy tracking-tight text-lg">MOUNTZENITH</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-slate">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-teal rounded">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 bg-navy text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-teal"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
          <button
            className="md:hidden text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-offwhite">
            <div className="px-6 py-4 flex flex-col gap-4 font-mono text-sm">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-slate hover:text-navy">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-teal font-medium">
                Start a project →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs text-teal tracking-widest mb-4">MOUNTZENITH SOLUTIONS</p>
          <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl leading-tight tracking-tight">
            Practical systems for teams that can't afford downtime.
          </h1>
          <p className="text-slate text-lg mt-6 leading-relaxed">
            Automation, CRM, and web applications built end to end, from the first sketch to the system your team still trusts a year later.
          </p>
          <div className="flex flex-wrap gap-2 mt-8 font-mono text-xs text-navy">
            {["WEB APPS", "WEBSITES", "DATABASES", "AUTOMATION"].map((t) => (
              <span key={t} className="border border-navy/20 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 bg-teal text-navy font-semibold px-6 py-3 rounded-md bg-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-navy">
              Start a project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#process" className="inline-flex items-center gap-2 text-navy font-medium px-6 py-3 rounded-md border border-navy/20 hover:border-navy transition-colors focus-visible:outline-2 focus-visible:outline-teal">
              See how it works
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <CircuitPeakMark className="w-56 h-56 md:w-72 md:h-72" animate />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-teal tracking-widest mb-3">SERVICES</p>
          <h2 className="font-display font-bold text-navy text-3xl mb-12">What I build</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.tag} className="group border border-slate-200 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-0.5 bg-teal w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <span className="font-mono text-xs text-teal">[{s.tag}]</span>
                <h3 className="font-display font-bold text-navy text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-teal tracking-widest mb-3">WORK</p>
          <h2 className="font-display font-bold text-navy text-3xl mb-4">Selected work</h2>
          <p className="text-slate mb-12 max-w-2xl">A mix of independent builds you can try, and systems work delivered for clients under employer engagements.</p>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="font-mono text-sm text-navy tracking-wide">PROJECTS</h3>
            <div className="flex flex-wrap gap-2">
              {["All", ...new Set(INDEPENDENT_BUILDS.map((p) => p.category))].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setBuildFilter(cat)}
                  className={`font-mono text-xs rounded-full px-3 py-1 border transition-colors focus-visible:outline-2 focus-visible:outline-teal ${
                    buildFilter === cat ? "bg-navy text-white border-navy" : "text-slate border-slate-300 hover:border-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {INDEPENDENT_BUILDS.filter((p) => buildFilter === "All" || p.category === buildFilter).map((p) => {
              const CardTag = p.link ? "a" : "div";
              const cardProps = p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <CardTag key={p.title} {...cardProps} className="group border border-slate-200 rounded-lg overflow-hidden relative block">
                  <div className="absolute top-0 left-0 h-0.5 bg-teal w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />
                  <AppMockup variant={p.variant} className="w-full h-36 border-b border-slate-200" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2 gap-3">
                      <h4 className="font-display font-bold text-navy text-lg flex items-center gap-1.5">
                        {p.title}
                        {p.link && <ExternalLink className="w-3.5 h-3.5 text-slate opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </h4>
                      <span className="font-mono text-xs text-teal border border-teal rounded-full px-2 py-0.5 shrink-0">{p.status}</span>
                    </div>
                    {p.client && <p className="font-mono text-xs text-slate/70 mb-2">Delivered for: {p.client}</p>}
                    <p className="text-slate text-sm leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="font-mono text-xs text-navy/60 border border-navy/15 rounded px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                </CardTag>
              );
            })}
          </div>

          <h3 className="font-mono text-sm text-navy mb-6 tracking-wide">SYSTEMS &amp; CLIENT WORK</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {CLIENT_WORK.map((p) => (
              <div key={p.title} className="border border-slate-200 rounded-lg p-6">
                <h4 className="font-display font-bold text-navy text-lg mb-2">{p.title}</h4>
                <p className="text-slate text-sm leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-xs text-navy/60 border border-navy/15 rounded px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-teal tracking-widest mb-3">PROCESS</p>
        <h2 className="font-display font-bold text-navy text-3xl mb-12">How a project runs</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {PROCESS.map((p) => (
            <div key={p.n} className="border-t-2 border-navy pt-4">
              <span className="font-mono text-2xl text-gold">{p.n}</span>
              <h3 className="font-display font-bold text-navy mt-2 mb-2">{p.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-xs text-teal tracking-widest mb-3">ABOUT</p>
          <h2 className="font-display font-bold text-navy text-3xl mb-6">A one-person practice</h2>
          <p className="text-slate text-lg leading-relaxed">
            MountZenith Solutions is built on systems work in aerospace and nonprofit operations, environments where a broken report or a stuck workflow blocks real people, not just a dashboard metric. Every project runs the same way: understand how the operation actually works first, then build something that keeps working long after the handoff.
          </p>
        </div>
      </section>

      {/* CAREER */}
      <section id="career" ref={careerRef} className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono text-xs text-teal tracking-widest mb-3">CAREER</p>
        <h2 className="font-display font-bold text-navy text-3xl mb-12">The path so far</h2>

        <div className="md:hidden">
          {CAREER.map((c, i) => (
            <div key={c.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-5 h-5 rounded-full border-2 shrink-0"
                  style={{
                    borderColor: i === CAREER.length - 1 ? "#F2B705" : "#14213D",
                    backgroundColor: i === CAREER.length - 1 ? "#F2B705" : "#ffffff",
                  }}
                />
                {i < CAREER.length - 1 && (
                  <div className="w-1 bg-slate-200 relative overflow-hidden my-1" style={{ minHeight: "56px" }}>
                    <div
                      className={`absolute inset-0 bg-teal ${careerVisible ? "trace-line-v" : ""}`}
                      style={{
                        transform: careerVisible ? undefined : "scaleY(0)",
                        transformOrigin: "top",
                        animationDelay: `${0.3 + i * 0.4}s`,
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-display font-bold text-navy text-base leading-snug">{c.title}</h3>
                <p className="font-mono text-xs text-slate mt-1">{c.org}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex md:items-start">
          {CAREER.map((c, i) => (
            <React.Fragment key={c.title}>
              <div className="flex flex-col items-center text-center w-48 shrink-0">
                <div
                  className="w-5 h-5 rounded-full border-2 shrink-0"
                  style={{
                    borderColor: i === CAREER.length - 1 ? "#F2B705" : "#14213D",
                    backgroundColor: i === CAREER.length - 1 ? "#F2B705" : "#ffffff",
                  }}
                />
                <div className="mt-4">
                  <h3 className="font-display font-bold text-navy text-base leading-snug">{c.title}</h3>
                  <p className="font-mono text-xs text-slate mt-1">{c.org}</p>
                </div>
              </div>
              {i < CAREER.length - 1 && (
                <div className="flex-1 h-1 bg-slate-200 relative overflow-hidden mt-2.5">
                  <div
                    className={`absolute inset-0 bg-teal ${careerVisible ? "trace-line-h" : ""}`}
                    style={{
                      transform: careerVisible ? undefined : "scaleX(0)",
                      transformOrigin: "left",
                      animationDelay: `${0.3 + i * 0.4}s`,
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-navy py-20">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-mono text-xs text-teal tracking-widest mb-3">START A PROJECT</p>
          <h2 className="font-display font-bold text-white text-3xl mb-8">Tell me what's slow, stuck, or missing.</h2>

          {sent ? (
            <div className="bg-white/10 border border-teal rounded-lg p-6 text-white">
              Message received. I'll follow up shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs text-white/70 block mb-2">NAME</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-white/70 block mb-2">EMAIL</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-teal"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-white/70 block mb-2">WHAT YOU NEED</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-teal"
                  placeholder="A quick description of the problem"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-teal text-navy font-semibold px-6 py-3 rounded-md bg-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                Send <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <CircuitPeakMark className="w-5 h-5" />
          <span className="font-mono text-xs text-slate">© 2026 MountZenith Solutions · Christopher Martinez, CEO</span>
        </div>
        <nav className="flex gap-6 font-mono text-xs text-slate">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-navy transition-colors">{l.label}</a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
