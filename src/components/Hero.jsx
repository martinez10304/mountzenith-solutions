import { ArrowRight } from "lucide-react";
import CircuitPeakMark from "./CircuitPeakMark";

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="font-mono text-sm text-teal tracking-widest mb-4">ARC 47 SOLUTIONS</p>
        <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
          Practical systems for teams that can&apos;t afford downtime.
        </h1>
        <p className="text-slate text-xl mt-6 leading-relaxed">
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
  );
}
