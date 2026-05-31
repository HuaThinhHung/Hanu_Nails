import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  withMark?: boolean;
};

export function Eyebrow({ children, className, withMark = true }: Props) {
  return (
    <p
      className={cn(
        "eyebrow inline-flex items-center gap-3 text-dark-brown",
        className
      )}
    >
      {withMark && (
        <span
          aria-hidden
          className="inline-block h-px w-8 bg-current opacity-70"
        />
      )}
      {children}
    </p>
  );
}
