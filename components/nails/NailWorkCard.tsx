"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Eye, Images, MessageCircle } from "lucide-react";
import { nailSourceLabels, type NailWork } from "@/data/nailWorks";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

type Props = {
  work: NailWork;
  priority?: boolean;
  onPreview?: (work: NailWork) => void;
};

export function NailWorkCard({ work, priority = false, onPreview }: Props) {
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
          <span className="absolute left-4 top-4 bg-cream px-3 py-1 text-[12px] font-extrabold uppercase tracking-[0.1em] text-ink">
            Mẫu mới
          </span>
        )}
        <span className="absolute bottom-4 left-4 bg-ink px-3 py-1 text-[12px] font-extrabold uppercase tracking-[0.1em] text-cream">
          {nailSourceLabels[work.source]}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="hanu-heading text-[28px]">{work.title}</h3>
            <p className="mt-2 text-[13px] font-extrabold uppercase tracking-[0.1em] text-dark-brown">
              {work.tags.join(" / ")}
            </p>
          </div>
          <p className="hanu-heading shrink-0 text-[24px]">{work.priceFrom}</p>
        </div>

        <p className="mt-4 text-[15px] font-medium leading-[1.75] text-charcoal/70">
          {work.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-[13px] font-bold text-charcoal/66">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} strokeWidth={1.7} />
            {work.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Images size={14} strokeWidth={1.7} />
            {work.angleCount} góc ảnh
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {onPreview && (
              <button
                type="button"
                onClick={() => onPreview(work)}
                className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] font-extrabold uppercase tracking-[0.1em] text-ink"
              >
                <Eye size={15} strokeWidth={1.7} />
                Xem
              </button>
            )}
            <Link
              href={`/booking?mau=${encodeURIComponent(work.title)}`}
              className="border-b border-ink pb-1 text-[13px] font-extrabold uppercase tracking-[0.1em] text-ink"
            >
              Đặt lịch
            </Link>
          </div>
          <a
            href={`https://zalo.me?text=${zaloText}`}
            className="inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.1em] text-dark-brown"
          >
            <MessageCircle size={15} strokeWidth={1.7} />
            Hỏi mẫu
          </a>
        </div>
      </div>
    </article>
  );
}
