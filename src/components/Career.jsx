"use client";

import React, { useRef, useState, useEffect } from "react";
import { CAREER } from "@/lib/site-data";

export default function Career() {
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

  return (
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
  );
}
