import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  size?: "md" | "lg" | "xl";
};

const titleSize = {
  md: "text-[40px] md:text-[56px] leading-[1.05]",
  lg: "text-[48px] md:text-[72px] leading-[1.02]",
  xl: "text-[56px] md:text-[96px] leading-[0.98]",
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  size = "lg",
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-[640px]",
        align === "center" && "mx-auto text-center items-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display font-light text-ink",
          titleSize[size]
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-[16px] md:text-[17px] leading-[1.7] text-charcoal/70 font-light max-w-[520px]">
          {description}
        </p>
      )}
    </div>
  );
}
