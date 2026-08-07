"use client";

import { useRef, useState, useEffect, useSyncExternalStore } from "react";

function subscribeToReducedMotion(callback) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeToReducedMotion, getReducedMotionSnapshot, getReducedMotionServerSnapshot);
}

export default function AppMockup({ variant, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const revealed = visible || reducedMotion;

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
            <g
              key={x}
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(14px)",
                transition: reducedMotion
                  ? "none"
                  : `opacity 0.5s ease-out ${i * 0.12}s, transform 0.5s ease-out ${i * 0.12}s`,
              }}
            >
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
          {[
            { y: 44, w: 230, h: 12, o: 0.4 },
            { y: 64, w: 200, h: 8, o: 0.3 },
            { y: 80, w: 210, h: 8, o: 0.3 },
            { y: 96, w: 180, h: 8, o: 0.3 },
          ].map((r, i) => (
            <rect
              key={r.y}
              x="20"
              y={r.y}
              width={r.w}
              height={r.h}
              rx="2"
              fill="#64748B"
              style={{
                opacity: revealed ? r.o : 0,
                transform: revealed ? "translateX(0)" : "translateX(-10px)",
                transition: reducedMotion
                  ? "none"
                  : `opacity 0.45s ease-out ${i * 0.08}s, transform 0.45s ease-out ${i * 0.08}s`,
              }}
            />
          ))}
          <g
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateX(0)" : "translateX(16px)",
              transition: reducedMotion ? "none" : "opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s",
            }}
          >
            <rect x="270" y="44" width="110" height="150" rx="6" fill="#ffffff" stroke="#2DD4BF" strokeWidth="2" />
            <rect x="284" y="58" width="82" height="8" rx="2" fill="#14213D" opacity="0.6" />
            <rect x="284" y="74" width="82" height="6" rx="2" fill="#64748B" opacity="0.4" />
            <rect x="284" y="86" width="60" height="6" rx="2" fill="#64748B" opacity="0.4" />
            <rect x="284" y="170" width="82" height="16" rx="4" fill="#2DD4BF" />
          </g>
        </g>
      )}

      {variant === "dashboard" && (
        <g>
          {[20, 140, 260].map((x, i) => (
            <g
              key={x}
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(10px)",
                transition: reducedMotion
                  ? "none"
                  : `opacity 0.45s ease-out ${i * 0.1}s, transform 0.45s ease-out ${i * 0.1}s`,
              }}
            >
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
              style={{
                transformOrigin: `${20 + i * 50 + 15}px 200px`,
                transform: revealed ? "scaleY(1)" : "scaleY(0)",
                transition: reducedMotion ? "none" : `transform 0.6s ease-out ${0.2 + i * 0.06}s`,
              }}
            />
          ))}
        </g>
      )}

      {variant === "calendar" && (
        <g>
          {Array.from({ length: 21 }).map((_, i) => {
            const cx = 20 + (i % 7) * 22;
            const cy = 44 + Math.floor(i / 7) * 22;
            return (
              <rect
                key={i}
                x={cx}
                y={cy}
                width="18"
                height="18"
                rx="3"
                fill={i === 9 ? "#2DD4BF" : "#ffffff"}
                stroke="#E2E8F0"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "scale(1)" : "scale(0.6)",
                  transformOrigin: `${cx + 9}px ${cy + 9}px`,
                  transition: reducedMotion
                    ? "none"
                    : `opacity 0.3s ease-out ${i * 0.02}s, transform 0.3s ease-out ${i * 0.02}s`,
                }}
              />
            );
          })}
          {[140, 168, 196].map((y, i) => (
            <g
              key={y}
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateX(0)" : "translateX(-14px)",
                transition: reducedMotion
                  ? "none"
                  : `opacity 0.4s ease-out ${0.45 + i * 0.1}s, transform 0.4s ease-out ${0.45 + i * 0.1}s`,
              }}
            >
              <circle cx="30" cy={y + 8} r="8" fill="#14213D" opacity="0.15" />
              <rect x="46" y={y} width="200" height="8" rx="2" fill="#64748B" opacity="0.35" />
              <rect x="330" y={y} width="50" height="16" rx="8" fill="#F2B705" opacity="0.25" />
            </g>
          ))}
        </g>
      )}

      {variant === "table" && (
        <g>
          <rect
            x="20"
            y="44"
            width="360"
            height="16"
            rx="2"
            fill="#14213D"
            opacity="0.08"
            style={{
              opacity: revealed ? 0.08 : 0,
              transition: reducedMotion ? "none" : "opacity 0.4s ease-out",
            }}
          />
          {[70, 100, 130, 160, 190].map((y, i) => (
            <g
              key={y}
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateX(0)" : "translateX(-16px)",
                transition: reducedMotion
                  ? "none"
                  : `opacity 0.4s ease-out ${0.15 + i * 0.08}s, transform 0.4s ease-out ${0.15 + i * 0.08}s`,
              }}
            >
              <rect x="20" y={y} width="180" height="8" rx="2" fill="#64748B" opacity="0.3" />
              <rect x="220" y={y - 3} width="60" height="14" rx="7" fill={i % 2 === 0 ? "#2DD4BF" : "#F2B705"} opacity="0.25" />
              <rect x="300" y={y} width="60" height="8" rx="2" fill="#64748B" opacity="0.2" />
            </g>
          ))}
        </g>
      )}

      {variant === "marketing" && (
        <g>
          <g
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(-10px)",
              transition: reducedMotion ? "none" : "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <rect x="20" y="44" width="360" height="66" rx="4" fill="#14213D" opacity="0.08" />
            <rect x="32" y="58" width="170" height="14" rx="2" fill="#14213D" opacity="0.75" />
            <rect x="32" y="78" width="130" height="8" rx="2" fill="#64748B" opacity="0.4" />
            <rect x="32" y="94" width="86" height="14" rx="4" fill="#F2B705" />
          </g>
          {[20, 150, 280].map((x, i) => (
            <g
              key={x}
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(16px)",
                transition: reducedMotion
                  ? "none"
                  : `opacity 0.45s ease-out ${0.25 + i * 0.1}s, transform 0.45s ease-out ${0.25 + i * 0.1}s`,
              }}
            >
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
              width: revealed ? 230 : 0,
              transition: reducedMotion ? "none" : "width 1.3s ease-out 0.3s",
            }}
          />
        </g>
      )}
    </svg>
  );
}
