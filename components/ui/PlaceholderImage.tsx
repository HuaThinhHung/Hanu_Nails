"use client";

import { cn } from "@/lib/utils";

type Tone =
  | "pearl"
  | "chrome"
  | "crystal"
  | "sakura"
  | "nude"
  | "marble"
  | "studio"
  | "hand";

type Props = {
  tone?: Tone;
  seed?: string | number;
  className?: string;
  rounded?: boolean;
  label?: string;
  showLabel?: boolean;
};

const tonePalette: Record<Tone, { from: string; via: string; to: string; accent: string }> = {
  pearl:   { from: "#f4efe6", via: "#e8e0d2", to: "#d8d0bf", accent: "#9f8a75" },
  chrome:  { from: "#e6e3dc", via: "#cfc8be", to: "#a8a39a", accent: "#7a685a" },
  crystal: { from: "#fbf6ee", via: "#ece4d2", to: "#e6d8c2", accent: "#c8a875" },
  sakura:  { from: "#f7ebe1", via: "#f0d8c8", to: "#e0bfa8", accent: "#a86b58" },
  nude:    { from: "#efe2d0", via: "#d8c2a8", to: "#b89a78", accent: "#7a5c46" },
  marble:  { from: "#e8d8c2", via: "#a8856a", to: "#5a4332", accent: "#c9a875" },
  studio:  { from: "#f0ebe2", via: "#dfd6c8", to: "#beb2a0", accent: "#7a685a" },
  hand:    { from: "#f4e8d8", via: "#e0c8ae", to: "#b89880", accent: "#7a5c46" },
};

function hashSeed(seed?: string | number): number {
  if (!seed) return 17;
  const str = String(seed);
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) & 0xffff;
  return h;
}

export function PlaceholderImage({
  tone = "pearl",
  seed,
  className,
  rounded = false,
  label,
  showLabel = false,
}: Props) {
  const palette = tonePalette[tone];
  const h = hashSeed(seed ?? tone);
  const angle = (h % 60) + 110;
  const x1 = (h % 80) + 10;
  const y1 = ((h * 3) % 80) + 10;
  const x2 = ((h * 7) % 80) + 10;
  const y2 = ((h * 11) % 80) + 10;
  const rotate = (h % 16) - 8;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cream",
        rounded && "rounded-sm",
        className
      )}
      aria-label={label}
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${angle}deg, ${palette.from} 0%, ${palette.via} 55%, ${palette.to} 100%)`,
        }}
      />

      {/* Soft glow spot 1 */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "60%",
          height: "60%",
          left: `${x1}%`,
          top: `${y1}%`,
          background: palette.from,
          opacity: 0.55,
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        }}
      />
      {/* Soft glow spot 2 */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "55%",
          height: "55%",
          left: `${x2}%`,
          top: `${y2}%`,
          background: palette.accent,
          opacity: 0.22,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Specular sheen line */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${angle + 60}deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Label */}
      {showLabel && label && (
        <div className="absolute inset-0 flex items-end p-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink/60 font-medium">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
