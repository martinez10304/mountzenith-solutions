"use client";

import { useInView, usePrefersReducedMotion } from "@/lib/hooks";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const reducedMotion = usePrefersReducedMotion();
  const revealed = inView || reducedMotion;

  return (
    <section id="about" className="bg-white border-y border-slate-200 py-20">
      <div
        ref={ref}
        className="max-w-3xl mx-auto px-6"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(16px)",
          transition: reducedMotion ? "none" : "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <p className="font-mono text-xs text-teal tracking-widest mb-3">ABOUT</p>
        <h2 className="font-display font-bold text-navy text-3xl mb-6">A senior systems practice</h2>
        <p className="text-slate text-lg leading-relaxed">
          ARC 47 Solutions is built on systems work in aerospace and nonprofit operations, environments where a broken report or a stuck workflow blocks real people, not just a dashboard metric. Every project runs the same way: understand how the operation actually works first, then build something that keeps working long after the handoff.
        </p>
      </div>
    </section>
  );
}
