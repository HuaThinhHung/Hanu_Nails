import Image from "next/image";
import { cn } from "@/lib/utils";

type MoodboardCrop =
  | "hand"
  | "hero-hand"
  | "studio"
  | "nails"
  | "marble"
  | "silk"
  | "pampas"
  | "palette"
  | "workspace";

type Props = {
  crop?: MoodboardCrop;
  className?: string;
  priority?: boolean;
  alt?: string;
};

const cropPosition: Record<MoodboardCrop, string> = {
  hand: "47% 18%",
  "hero-hand": "52% 58%",
  studio: "90% 15%",
  nails: "91% 92%",
  marble: "68% 34%",
  silk: "61% 37%",
  pampas: "79% 92%",
  palette: "14% 32%",
  workspace: "12% 91%",
};

export function MoodboardImage({
  crop = "hand",
  className,
  priority = false,
  alt = "HANU Nails moodboard visual",
}: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-beige", className)}>
      <Image
        src="/Hanu.png"
        alt={alt}
        fill
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition: cropPosition[crop] }}
      />
    </div>
  );
}
