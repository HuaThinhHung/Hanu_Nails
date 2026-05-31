import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NailWorkCard } from "@/components/nails/NailWorkCard";
import { nailWorks } from "@/data/nailWorks";

export function LatestNailWorks() {
  const works = nailWorks.slice(0, 6);

  return (
    <section className="bg-cream py-20 md:py-28">
      <Container size="wide">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Tác phẩm chụp thật
            </p>
            <h2 className="mt-5 font-display text-[48px] font-light leading-[1.05] tracking-[0.08em] text-ink md:text-[72px]">
              MẪU NAIL
              <br />
              MỚI LÀM
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[14px] font-light leading-[1.85] text-charcoal/70">
              Khu này dùng để đăng các bộ nail vợ Hưng làm thật và chụp lên. Khách
              xem mẫu, hỏi nhanh qua Zalo hoặc đặt lịch theo mẫu đã chọn.
            </p>
            <Link
              href="/mau-nail"
              className="mt-6 inline-flex border-b border-ink pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
            >
              Xem tất cả mẫu
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <NailWorkCard key={work.id} work={work} priority={index < 2} />
          ))}
        </div>
      </Container>
    </section>
  );
}
