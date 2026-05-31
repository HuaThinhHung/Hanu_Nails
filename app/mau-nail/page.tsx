import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NailWorksGrid } from "@/components/nails/NailWorksGrid";

export const metadata: Metadata = {
  title: "Mẫu Nail Và Tác Phẩm Thật",
  description:
    "Bộ sưu tập mẫu nail và các tác phẩm nail HANU đã làm thật: nude, chrome, marble, đính đá, cô dâu và custom art.",
};

export default function MauNailPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="hanu-eyebrow">Bộ sưu tập và tác phẩm thật</p>
            <h1 className="hanu-heading mt-6 text-[56px] md:text-[92px]">
              Mẫu nail
              <br />
              HANU
            </h1>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="hanu-copy">
              Một nơi để khách xem mẫu tham khảo, tác phẩm chụp thật, lọc theo
              phong cách và đặt lịch nhanh với mẫu đã chọn.
            </p>
            <Link href="/booking" className="hanu-button hanu-button-primary mt-7">
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
