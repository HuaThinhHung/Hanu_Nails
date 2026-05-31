"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

export function Hand360Banner() {
  const [angle, setAngle] = useState(18);

  const crop = useMemo(() => {
    if (angle < 90) return "hero-hand";
    if (angle < 180) return "hand";
    if (angle < 270) return "nails";
    return "hero-hand";
  }, [angle]);

  return (
    <section className="bg-soft-white">
      <Container size="wide" className="py-8 md:py-12">
        <div className="grid overflow-hidden border border-line bg-cream lg:grid-cols-12">
          <div className="flex flex-col justify-center p-7 md:p-10 lg:col-span-4">
            <p className="hanu-eyebrow">Xem nhiều góc</p>
            <h2 className="hanu-heading mt-5 text-[42px] md:text-[60px]">
              Xoay tay
              <br />
              xem form móng
            </h2>
            <p className="hanu-copy mt-6 max-w-[380px]">
              Mô phỏng cách khách xem form tay và hiệu ứng móng trước khi đặt lịch.
              Khi có ảnh thật nhiều góc, khu này sẽ trở thành viewer 360 hoàn chỉnh.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/mau-nail" className="hanu-button hanu-button-secondary">
                Xem mẫu nail
              </Link>
              <Link href="/booking" className="hanu-text-link items-center px-1 py-3">
                Đặt lịch
              </Link>
            </div>
          </div>

          <div className="relative min-h-[460px] border-t border-line bg-soft-white lg:col-span-8 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 flex items-center justify-center perspective-[1200px]">
              <div
                className="relative h-[78%] w-[80%] max-w-[720px] overflow-hidden border border-line bg-beige transition-transform duration-300"
                style={{
                  transform: `rotateY(${angle - 180}deg) rotateX(${Math.sin((angle * Math.PI) / 180) * 3}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <MoodboardImage
                  crop={crop}
                  alt="Bàn tay nail có thể xoay nhiều góc"
                  className="h-full w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-soft-white/35 via-transparent to-soft-white/20" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 border border-line bg-cream/90 p-4 backdrop-blur md:left-auto md:w-[430px]">
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="hand-angle"
                  className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.1em] text-dark-brown"
                >
                  <RotateCcw size={16} strokeWidth={1.7} />
                  Góc {angle} độ
                </label>
                <button
                  type="button"
                  onClick={() => setAngle(18)}
                  className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-ink"
                >
                  Reset
                </button>
              </div>
              <input
                id="hand-angle"
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(event) => setAngle(Number(event.target.value))}
                className="mt-4 w-full accent-[#7A685A]"
                aria-label="Xoay bàn tay nhiều góc"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
