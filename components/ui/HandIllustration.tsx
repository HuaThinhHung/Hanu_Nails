"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "front" | "side";
};

/**
 * SVG hand illustration — placeholder cho 3D scene.
 * Stylized minimal hand với 5 ngón và nail glossy.
 * Sau này được thay bằng <LivingHandScene /> (R3F).
 */
export function HandIllustration({ className, variant = "front" }: Props) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <svg
        viewBox="0 0 600 800"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Skin gradient */}
          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5e3cf" />
            <stop offset="40%" stopColor="#e8cdb1" />
            <stop offset="100%" stopColor="#c39d7c" />
          </linearGradient>
          <linearGradient id="skinGradDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d9b896" />
            <stop offset="100%" stopColor="#9e7a5d" />
          </linearGradient>

          {/* Pearl nail */}
          <linearGradient id="nailPearl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#efe6d8" />
            <stop offset="100%" stopColor="#d8c8b4" />
          </linearGradient>

          {/* Inner shadow filter */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>

          {/* Background blur */}
          <radialGradient id="bgGlow" cx="50%" cy="55%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft glow background */}
        <rect width="600" height="800" fill="url(#bgGlow)" />

        {variant === "front" ? <HandFront /> : <HandSide />}
      </svg>
    </div>
  );
}

function HandFront() {
  return (
    <g>
      {/* Wrist */}
      <path
        d="M 220 780 Q 220 720 230 660 L 370 660 Q 380 720 380 780 Z"
        fill="url(#skinGrad)"
        opacity="0.92"
      />

      {/* Palm */}
      <path
        d="M 200 660 Q 195 580 210 500 Q 230 430 270 410 Q 300 405 330 410 Q 370 430 390 500 Q 405 580 400 660 Z"
        fill="url(#skinGrad)"
      />

      {/* Thumb */}
      <g transform="rotate(-22 195 480)">
        <ellipse cx="185" cy="450" rx="34" ry="100" fill="url(#skinGrad)" />
        <ellipse cx="185" cy="360" rx="26" ry="38" fill="url(#nailPearl)" />
      </g>

      {/* Index finger */}
      <g>
        <rect x="232" y="200" width="48" height="240" rx="24" fill="url(#skinGrad)" />
        <ellipse cx="256" cy="200" rx="22" ry="38" fill="url(#nailPearl)" />
        {/* Nail highlight */}
        <ellipse cx="252" cy="190" rx="6" ry="14" fill="#fff" opacity="0.7" />
      </g>

      {/* Middle finger - tallest */}
      <g>
        <rect x="280" y="160" width="48" height="280" rx="24" fill="url(#skinGrad)" />
        <ellipse cx="304" cy="160" rx="22" ry="40" fill="url(#nailPearl)" />
        <ellipse cx="300" cy="150" rx="6" ry="15" fill="#fff" opacity="0.7" />
      </g>

      {/* Ring finger */}
      <g>
        <rect x="328" y="185" width="48" height="255" rx="24" fill="url(#skinGrad)" />
        <ellipse cx="352" cy="185" rx="22" ry="38" fill="url(#nailPearl)" />
        <ellipse cx="348" cy="175" rx="6" ry="14" fill="#fff" opacity="0.7" />
      </g>

      {/* Pinky */}
      <g>
        <rect x="378" y="240" width="42" height="200" rx="21" fill="url(#skinGrad)" />
        <ellipse cx="399" cy="240" rx="19" ry="32" fill="url(#nailPearl)" />
        <ellipse cx="395" cy="232" rx="5" ry="11" fill="#fff" opacity="0.7" />
      </g>

      {/* Subtle shading on palm */}
      <path
        d="M 200 660 Q 195 580 210 500 Q 230 430 270 410 L 270 660 Z"
        fill="url(#skinGradDark)"
        opacity="0.18"
      />
    </g>
  );
}

function HandSide() {
  return (
    <g>
      <path
        d="M 180 760 Q 175 680 190 600 Q 210 530 250 500 Q 280 490 310 500 Q 350 530 370 600 Q 385 680 380 760 Z"
        fill="url(#skinGrad)"
      />
      {/* Fingers stacked */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x={230 + i * 35}
            y={220 + i * 8}
            width="40"
            height={240 - i * 12}
            rx="20"
            fill="url(#skinGrad)"
          />
          <ellipse
            cx={250 + i * 35}
            cy={220 + i * 8}
            rx="18"
            ry="32"
            fill="url(#nailPearl)"
          />
        </g>
      ))}
    </g>
  );
}
