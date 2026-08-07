"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import CircuitPeakMark from "./CircuitPeakMark";
import { NAV_LINKS } from "@/lib/site-data";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-offwhite/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <CircuitPeakMark className="w-7 h-7" />
          <span className="font-display font-bold text-navy tracking-tight text-lg">MOUNTZENITH</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-slate">
          {NAV_LINKS.map((l) => (
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
            {NAV_LINKS.map((l) => (
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
  );
}
