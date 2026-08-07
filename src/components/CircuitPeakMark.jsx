export default function CircuitPeakMark({ className = "", animate = false }) {
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
