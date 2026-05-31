"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type Props = LinkProps | ButtonProps;

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-cream border-charcoal hover:bg-ink hover:border-ink",
  outline:
    "bg-transparent text-charcoal border-charcoal hover:bg-charcoal hover:text-cream",
  ghost:
    "bg-transparent text-charcoal border-transparent hover:bg-charcoal/5",
  dark:
    "bg-cream text-charcoal border-cream hover:bg-transparent hover:text-cream",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-3.5 text-[12px]",
  lg: "px-9 py-4 text-[13px]",
};

export function LuxuryButton(props: Props) {
  const {
    variant = "outline",
    size = "md",
    withArrow = false,
    className,
    children,
  } = props;

  const baseClasses = cn(
    "group inline-flex items-center gap-3 rounded-full border font-body font-medium uppercase",
    "tracking-[0.18em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span className="leading-none">{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          size={14}
          strokeWidth={1.5}
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn(baseClasses, props.disabled && "opacity-40 cursor-not-allowed")}
    >
      {content}
    </button>
  );
}
