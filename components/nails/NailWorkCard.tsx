import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { NailWork } from "@/data/nailWorks";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

type Props = {
  work: NailWork;
  priority?: boolean;
};

export function NailWorkCard({ work, priority = false }: Props) {
  const zaloText = encodeURIComponent(`Chào HANU, tôi muốn hỏi mẫu nail: ${work.title}`);

  return (
    <article className="group overflow-hidden border border-line bg-soft-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          />
        ) : (
          <MoodboardImage
            crop={work.moodboardCrop}
            alt={work.title}
            priority={priority}
            className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          />
        )}
        {work.isFeatured && (
          <span className="absolute left-4 top-4 bg-cream px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink">
            Mẫu mới
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[28px] font-light leading-none text-ink">
              {work.title}
            </h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-dark-brown">
              {work.tags.join(" / ")}
            </p>
          </div>
          <p className="shrink-0 font-display text-[24px] leading-none text-ink">
            {work.priceFrom}
          </p>
        </div>
        <p className="mt-4 text-[13px] font-light leading-[1.75] text-charcoal/68">
          {work.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <Link
            href="/booking"
            className="border-b border-ink pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink"
          >
            Đặt lịch mẫu này
          </Link>
          <a
            href={`https://zalo.me?text=${zaloText}`}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-brown"
          >
            <MessageCircle size={14} strokeWidth={1.5} />
            Hỏi mẫu
          </a>
        </div>
      </div>
    </article>
  );
}
