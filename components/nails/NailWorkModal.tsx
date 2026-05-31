"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { nailSourceLabels, type NailWork } from "@/data/nailWorks";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

type Props = {
  work: NailWork | null;
  onClose: () => void;
};

export function NailWorkModal({ work, onClose }: Props) {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-ink/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Đóng modal"
        onClick={onClose}
      />
      <div className="relative mx-auto grid max-h-[92vh] max-w-[1040px] overflow-auto border border-line bg-cream lg:grid-cols-2">
        <div className="relative min-h-[420px] bg-beige">
          <MoodboardImage crop={work.moodboardCrop} alt={work.title} className="h-full w-full" priority />
        </div>

        <div className="p-7 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="hanu-eyebrow">{nailSourceLabels[work.source]}</p>
              <h2 className="hanu-heading mt-4 text-[44px]">{work.title}</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-soft-white"
              aria-label="Đóng"
            >
              <X size={20} strokeWidth={1.7} />
            </button>
          </div>

          <p className="hanu-copy mt-6">{work.description}</p>

          <div className="mt-8 grid gap-4 border-y border-line py-6 sm:grid-cols-2">
            <Info label="Giá từ" value={work.priceFrom} large />
            <Info label="Thời gian" value={work.duration} />
            <Info label="Chất liệu" value={work.finish} />
            <Info label="Góc ảnh" value={`${work.angleCount} góc`} />
          </div>

          <div className="mt-8">
            <p className="hanu-eyebrow">Phong cách</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line bg-soft-white px-3 py-1 text-[13px] font-bold text-charcoal/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3 text-[16px] font-medium leading-[1.8] text-charcoal/72">
            <p>
              Khách có thể gửi mẫu này cho tiệm để làm theo, chỉnh màu, đổi độ dài
              hoặc đổi chi tiết theo form tay thật.
            </p>
            <p>
              Khi đặt lịch, tên mẫu sẽ được đưa sẵn vào form để HANU chuẩn bị tư vấn trước.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={`/booking?mau=${encodeURIComponent(work.title)}`} className="hanu-button hanu-button-primary">
              Đặt lịch mẫu này
            </Link>
            <a
              href={`https://zalo.me?text=${encodeURIComponent(`Chào HANU, tôi muốn hỏi mẫu nail: ${work.title}`)}`}
              className="hanu-button hanu-button-secondary"
            >
              Hỏi qua Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value, large = false }: { label: string; value: string; large?: boolean }) {
  return (
    <div>
      <p className="hanu-eyebrow">{label}</p>
      <p className={`mt-2 leading-none text-ink ${large ? "hanu-heading text-[34px]" : "text-[16px] font-bold"}`}>
        {value}
      </p>
    </div>
  );
}
