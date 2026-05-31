import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NailWorkCard } from "@/components/nails/NailWorkCard";
import { nailWorks } from "@/data/nailWorks";

export function LatestNailWorks() {
  const works = nailWorks.slice(0, 6);
  const realCount = nailWorks.filter((work) => work.source === "real").length;
  const collectionCount = nailWorks.filter((work) => work.source === "collection").length;

  return (
    <section id="mau-nail-moi" className="bg-cream py-20 md:py-28">
      <Container size="wide">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="hanu-eyebrow">Mẫu nail mới</p>
            <h2 className="hanu-heading mt-5 text-[48px] md:text-[74px]">
              Chọn mẫu
              <br />
              trước khi đặt lịch
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="hanu-copy">
              Khu này gom cả mẫu tham khảo và tác phẩm thật. Khách xem nhanh, bấm
              chi tiết hoặc đặt lịch theo đúng mẫu đã chọn.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[14px] font-bold text-charcoal/72">
              <span className="border border-line bg-soft-white px-3 py-1">
                {collectionCount} mẫu tham khảo
              </span>
              <span className="border border-line bg-soft-white px-3 py-1">
                {realCount} tác phẩm thật
              </span>
            </div>
            <Link href="/mau-nail" className="hanu-text-link mt-7">
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
