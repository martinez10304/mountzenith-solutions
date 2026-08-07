import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 56,
          backgroundColor: "#F8FAFC",
        }}
      >
        <svg width="220" height="220" viewBox="0 0 400 400">
          <polygon points="80,320 190,140 300,320" fill="#14213D" />
          <path
            d="M60,260 H150 L180,220 H350"
            stroke="#2DD4BF"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="60" cy="260" r="12" fill="#2DD4BF" />
          <circle cx="350" cy="260" r="12" fill="#2DD4BF" />
          <circle cx="190" cy="122" r="18" fill="#F2B705" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ fontSize: 28, color: "#2DD4BF", letterSpacing: 4, marginBottom: 16 }}>
            ARC 47 SOLUTIONS
          </div>
          <div style={{ fontSize: 52, fontWeight: 700, color: "#14213D", lineHeight: 1.15 }}>
            Practical systems for teams that can&apos;t afford downtime.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
