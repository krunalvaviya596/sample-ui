interface MascotIllustrationProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function MascotIllustration({
  size = "lg",
  className = "",
}: MascotIllustrationProps) {
  const dimensions = {
    sm: { width: 140, height: 180 },
    md: { width: 200, height: 260 },
    lg: { width: 300, height: 380 },
  };

  const { width, height } = dimensions[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ground shadow */}
      <ellipse cx="100" cy="252" rx="55" ry="6" fill="rgba(0,0,0,0.12)" />

      {/* Left leg */}
      <rect x="66" y="178" width="14" height="42" rx="7" fill="#F5C88D" />
      {/* Right leg */}
      <rect x="120" y="178" width="14" height="42" rx="7" fill="#F5C88D" />

      {/* Left shoe */}
      <ellipse cx="73" cy="222" rx="17" ry="9" fill="#6D28D9" />
      {/* Right shoe */}
      <ellipse cx="127" cy="222" rx="17" ry="9" fill="#6D28D9" />

      {/* Left arm */}
      <rect
        x="14"
        y="100"
        width="13"
        height="45"
        rx="6.5"
        fill="#F5C88D"
        transform="rotate(-15, 20, 100)"
      />
      {/* Left hand */}
      <circle cx="17" cy="147" r="8" fill="#F5C88D" />

      {/* Right arm */}
      <rect
        x="173"
        y="72"
        width="13"
        height="48"
        rx="6.5"
        fill="#F5C88D"
        transform="rotate(20, 180, 72)"
      />

      {/* Body */}
      <rect x="36" y="58" width="128" height="124" rx="24" fill="#7C3AED" />
      {/* Body gradient overlay */}
      <rect
        x="36"
        y="58"
        width="128"
        height="124"
        rx="24"
        fill="url(#mascot-body-grad)"
      />

      {/* Handle bar */}
      <rect x="72" y="38" width="56" height="24" rx="12" fill="#6D28D9" />
      <rect x="86" y="32" width="28" height="10" rx="5" fill="#5B21B6" />

      {/* Eyes */}
      <circle cx="74" cy="102" r="20" fill="white" />
      <circle cx="126" cy="102" r="20" fill="white" />
      {/* Pupils */}
      <circle cx="78" cy="106" r="10" fill="#1E1B4B" />
      <circle cx="130" cy="106" r="10" fill="#1E1B4B" />
      {/* Eye shine */}
      <circle cx="82" cy="100" r="3.5" fill="white" />
      <circle cx="134" cy="100" r="3.5" fill="white" />

      {/* Mouth */}
      <path
        d="M 78 138 Q 100 156 122 138"
        stroke="#4C1D95"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Wrench symbol on body */}
      <g transform="translate(100, 157)" opacity="0.35">
        <path
          d="M -6 -6 L 6 6 M 6 -6 L -6 6"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Wrench in right hand */}
      <g transform="translate(192, 58) rotate(30)">
        <rect x="-3.5" y="-28" width="7" height="38" rx="3.5" fill="#94A3B8" />
        <circle
          cx="0"
          cy="-28"
          r="9"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="5"
        />
        <rect x="-3.5" y="5" width="7" height="8" rx="2" fill="#7C8A9A" />
      </g>

      {/* Gradient definitions */}
      <defs>
        <linearGradient
          id="mascot-body-grad"
          x1="36"
          y1="58"
          x2="164"
          y2="182"
        >
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
