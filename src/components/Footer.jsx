import CircuitPeakMark from "./CircuitPeakMark";
import { NAV_LINKS } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <CircuitPeakMark className="w-5 h-5" />
        <span className="font-mono text-xs text-slate">© 2026 MountZenith Solutions · Christopher Martinez, CEO</span>
      </div>
      <nav className="flex gap-6 font-mono text-xs text-slate">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-navy transition-colors">{l.label}</a>
        ))}
      </nav>
    </footer>
  );
}
