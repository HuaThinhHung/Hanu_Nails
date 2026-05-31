/**
 * Button Component
 * Reusable button with variants: filled, outlined, ghost
 */

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "font-sans font-medium transition-all duration-200 rounded";

    const variantStyles = {
      filled:
        "bg-black text-white hover:bg-opacity-80 active:scale-95 border border-black",
      outlined:
        "border-2 border-black text-black hover:bg-black hover:text-white active:scale-95",
      ghost:
        "text-black underline hover:no-underline active:scale-95 border-b border-black",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
