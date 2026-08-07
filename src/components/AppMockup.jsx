"use client";

import { useRef, useState, useEffect } from "react";

export default function AppMockup({ variant, className = "" }) {
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
