interface LogoProps {
  /** "dark" = gradient bg for light surfaces (default), "glass" = frosted for dark surfaces */
  variant?: "dark" | "glass";
  showWordmark?: boolean;
  className?: string;
}

/** Loop mark SVG — 300° clockwise arc with arrowhead + AI node dot */
function LoopMark({ variant }: { variant: "dark" | "glass" }) {
  const stroke = "white";
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px]">
      {/* 300° clockwise arc: top → right → bottom → left → upper-left */}
      <path
        d="M20 8 A12 12 0 1 1 10 14"
        stroke={stroke}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Arrowhead at arc end — points in direction of travel (upward) */}
      <path
        d="M7 17 L10 14 L13 17"
        stroke={stroke}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* AI node — filled circle at arc origin */}
      <circle cx="20" cy="8" r="2.8" fill={stroke} />
    </svg>
  );
}

export default function Logo({ variant = "dark", showWordmark = true, className = "" }: LogoProps) {
  const containerBg =
    variant === "glass"
      ? "bg-white/10 border border-white/10 backdrop-blur-xl"
      : "bg-gradient-to-br from-[#5E5CE6] to-[#A259FF]";

  const wordLoops = variant === "glass" ? "text-white/70" : "text-[#1D1D1F]";
  const wordAI    = variant === "glass" ? "text-white"    : "text-[#5E5CE6]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon container */}
      <div
        className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 ${containerBg}`}
      >
        <LoopMark variant={variant} />
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <span className="text-xl font-bold tracking-tight leading-none">
          <span className={wordLoops}>Loops</span>
          <span className={wordAI}>AI</span>
        </span>
      )}
    </div>
  );
}
