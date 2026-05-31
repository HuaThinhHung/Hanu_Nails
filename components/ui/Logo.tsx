import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { wordmark: "text-[20px]", sub: "text-[7px] tracking-[0.45em]" },
  md: { wordmark: "text-[28px]", sub: "text-[8px] tracking-[0.45em]" },
  lg: { wordmark: "text-[40px]", sub: "text-[10px] tracking-[0.5em]" },
};

export function Logo({ className, variant = "dark", size = "md" }: Props) {
  const s = sizes[size];
  const color = variant === "light" ? "text-cream" : "text-ink";

  return (
    <Link href="/" className={cn("inline-flex flex-col items-start leading-none", color, className)}>
      <span
        className={cn(
          "font-display font-light tracking-[0.18em]",
          s.wordmark
        )}
      >
        HANU
      </span>
      <span
        className={cn(
          "mt-1 font-body font-medium uppercase opacity-70",
          s.sub
        )}
      >
        Nails
      </span>
    </Link>
  );
}
