"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import AppMockup from "./AppMockup";
import { INDEPENDENT_BUILDS, CLIENT_WORK } from "@/lib/site-data";
import { useInView, usePrefersReducedMotion } from "@/lib/hooks";

export default function Work() {
  const [buildFilter, setBuildFilter] = useState("All");
  const [clientWorkRef, clientWorkInView] = useInView({ threshold: 0.2 });
  const reducedMotion = usePrefersReducedMotion();
  const clientWorkRevealed = clientWorkInView || reducedMotion;

  return (
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
        <div ref={clientWorkRef} className="grid sm:grid-cols-2 gap-6">
          {CLIENT_WORK.map((p, i) => (
            <div
              key={p.title}
              className="group border border-slate-200 rounded-lg p-6 relative overflow-hidden"
              style={{
                opacity: clientWorkRevealed ? 1 : 0,
                transform: clientWorkRevealed ? "translateY(0)" : "translateY(16px)",
                transition: reducedMotion
                  ? "none"
                  : `opacity 0.5s ease-out ${i * 0.1}s, transform 0.5s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="absolute top-0 left-0 h-0.5 bg-teal w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
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
  );
}
