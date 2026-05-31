import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
  as?: keyof React.JSX.IntrinsicElements;
};

const sizes = {
  narrow: "max-w-[920px]",
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
};

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20",
        sizes[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
