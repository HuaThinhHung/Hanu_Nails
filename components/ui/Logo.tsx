import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: {
    wordmark: 24,
    sub: 9,
    wordSpacing: "0.16em",
    subSpacing: "0.34em",
  },
  md: {
    wordmark: 32,
    sub: 10,
    wordSpacing: "0.16em",
    subSpacing: "0.36em",
  },
  lg: {
    wordmark: 44,
    sub: 12,
    wordSpacing: "0.18em",
    subSpacing: "0.38em",
  },
};

export function Logo({ className, variant = "dark", size = "md" }: Props) {
  const s = sizes[size];
  const color = variant === "light" ? "text-cream" : "text-ink";

  return (
    <Link href="/" className={cn("inline-flex flex-col items-center leading-none", color, className)}>
      <span
        className="font-body font-semibold"
        style={{
          fontSize: `${s.wordmark}px`,
          letterSpacing: s.wordSpacing,
          lineHeight: 0.9,
        }}
      >
        HANU
      </span>
      <span
        className="mt-1 font-body font-bold uppercase opacity-70"
        style={{
          fontSize: `${s.sub}px`,
          letterSpacing: s.subSpacing,
          lineHeight: 1,
        }}
      >
        Nails
      </span>
    </Link>
  );
}
