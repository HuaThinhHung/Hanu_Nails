import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function Divider({ className, orientation = "horizontal" }: Props) {
  return (
    <span
      aria-hidden
      className={cn(
        "block bg-line",
        orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
        className
      )}
    />
  );
}
