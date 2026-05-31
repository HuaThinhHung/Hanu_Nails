import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Thư viện mẫu nail HANU Nails: chrome, cat eye, French, crystal, marble và custom art.",
};

export default function GalleryPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="py-24 md:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Hall of Art</Eyebrow>
          <h1 className="mt-6 font-display text-[58px] font-light leading-[0.98] tracking-tight text-ink md:text-[104px]">
            Gallery for
            <br />
            <span className="italic text-dark-brown">your next set.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[16px] font-light leading-[1.8] text-charcoal/70">
            Lọc nhanh theo phong cách để chọn mood phù hợp trước khi đặt lịch.
            Mỗi mẫu có thể được điều chỉnh theo màu da, độ dài móng và dịp sử dụng.
          </p>
        </div>
      </Container>

      <Container size="wide" className="pb-24 md:pb-36">
        <GalleryGrid />
      </Container>
    </div>
  );
}
