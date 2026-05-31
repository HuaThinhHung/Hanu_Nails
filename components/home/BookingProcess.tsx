import Link from "next/link";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Chọn mẫu",
    text: "Khách xem bộ sưu tập hoặc tác phẩm thật, sau đó bấm vào mẫu muốn tư vấn.",
  },
  {
    number: "02",
    title: "Gửi lịch",
    text: "Điền số điện thoại, ngày giờ mong muốn và ghi chú về màu, form, dịp sử dụng.",
  },
  {
    number: "03",
    title: "Tiệm xác nhận",
    text: "HANU liên hệ lại để chốt mẫu, thời lượng, mức giá dự kiến và lịch làm.",
  },
];

export function BookingProcess() {
  return (
    <section className="bg-soft-white py-20 md:py-28">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="hanu-eyebrow">Quy trình</p>
            <h2 className="hanu-heading mt-5 text-[46px] md:text-[70px]">
              Đặt lịch
              <br />
              ít bước hơn
            </h2>
            <p className="hanu-copy mt-6 max-w-[380px]">
              Mục tiêu là khách không phải nhắn qua lại quá nhiều. Website gom mẫu,
              ghi chú và lịch mong muốn để tiệm chuẩn bị trước.
            </p>
            <Link href="/booking" className="hanu-text-link mt-8">
              Bắt đầu đặt lịch
            </Link>
          </div>

          <div className="grid gap-px bg-line md:grid-cols-3 lg:col-span-8">
            {steps.map((step) => (
              <article key={step.number} className="bg-cream p-7 md:min-h-[290px]">
                <p className="hanu-heading text-[50px] text-brown-dark/70">
                  {step.number}
                </p>
                <h3 className="hanu-heading mt-10 text-[32px]">{step.title}</h3>
                <p className="mt-5 text-[15px] font-medium leading-[1.8] text-charcoal/72">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
