import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NailWorksGrid } from "@/components/nails/NailWorksGrid";

export const metadata: Metadata = {
  title: "Mẫu Nail Đã Làm",
  description:
    "Các tác phẩm nail HANU đã làm và chụp thật: nude, chrome, marble, đính đá, cô dâu và custom art.",
};

export default function MauNailPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Tác phẩm đã làm
            </p>
            <h1 className="mt-6 font-display text-[56px] font-light leading-[1.02] tracking-[0.08em] text-ink md:text-[92px]">
              MẪU NAIL
              <br />
              CHỤP THẬT
            </h1>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[15px] font-light leading-[1.85] text-charcoal/70">
              Đây là nơi đăng các bộ nail vợ Hưng làm thật. Khách có thể lọc theo
              phong cách, xem mẫu và bấm hỏi nhanh hoặc đặt lịch.
            </p>
            <Link
              href="/booking"
              className="mt-7 inline-flex border border-ink px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Đặt lịch ngay
            </Link>
          </div>
        </div>
      </Container>

      <Container size="wide" className="pb-24 md:pb-36">
        <NailWorksGrid />
      </Container>
    </div>
  );
}
