import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { pricing } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Bảng giá dịch vụ HANU Nails: nail care, gel design, chrome, cat eye, crystal, bridal và custom art.",
};

const notes = [
  "Giá có thể thay đổi theo độ dài móng, số lượng đá và độ phức tạp của mẫu.",
  "Artist sẽ xác nhận quote cuối cùng trước khi bắt đầu làm.",
  "Khách nên gửi ảnh tham khảo trước để được tư vấn palette và thời lượng phù hợp.",
];

const faqs = [
  {
    question: "Giá trên website đã là giá cuối chưa?",
    answer:
      "Đây là giá tham khảo theo nhóm dịch vụ. Artist sẽ xác nhận giá cuối sau khi xem mẫu, độ dài móng và chi tiết cần thực hiện.",
  },
  {
    question: "Custom art cần đặt trước bao lâu?",
    answer:
      "Nên gửi mẫu trước ít nhất 24 giờ để HANU chuẩn bị màu, đá, charm và thời lượng phù hợp.",
  },
  {
    question: "Một buổi làm nail mất bao lâu?",
    answer:
      "Nail care thường khoảng 45-60 phút. Gel design từ 90 phút. Luxury art hoặc bridal set có thể cần 2-3 giờ tùy độ phức tạp.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mt-6 font-display text-[58px] font-light leading-[0.98] tracking-tight text-ink md:text-[104px]">
              Clear pricing,
              <br />
              <span className="italic text-dark-brown">calm decisions.</span>
            </h1>
          </div>
          <div className="space-y-4 md:col-span-4 md:col-start-9">
            {notes.map((note) => (
              <p key={note} className="flex gap-3 text-[14px] leading-[1.75] text-charcoal/70">
                <Check size={15} strokeWidth={1.5} className="mt-1 shrink-0 text-dark-brown" />
                {note}
              </p>
            ))}
          </div>
        </div>
      </Container>

      <Container size="wide" className="pb-24 md:pb-36">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((category) => (
            <section key={category.id} id={category.id} className="bg-soft-white p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-dark-brown">
                {category.id}
              </p>
              <h2 className="mt-4 font-display text-[40px] leading-none text-ink">
                {category.title}
              </h2>
              <p className="mt-4 min-h-[76px] text-[14px] font-light leading-[1.75] text-charcoal/70">
                {category.description}
              </p>
              <div className="mt-8 divide-y divide-line border-y border-line">
                {category.items.map((item) => (
                  <div key={item.name} className="py-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[15px] font-medium text-ink">{item.name}</h3>
                      <p className="shrink-0 font-display text-[24px] leading-none text-ink">
                        {item.price}
                      </p>
                    </div>
                    {item.note && (
                      <p className="mt-2 text-[13px] font-light leading-relaxed text-charcoal/60">
                        {item.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-ink p-8 text-cream md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-brown">Custom quote</p>
            <h2 className="mt-3 font-display text-[34px] leading-none">
              Có mẫu riêng? HANU tư vấn trước khi đặt lịch.
            </h2>
          </div>
          <LuxuryButton href="/booking" variant="dark" size="md" withArrow>
            Gửi mẫu tư vấn
          </LuxuryButton>
        </div>

        <section id="faq" className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-display text-[44px] font-light leading-none text-ink">
              Pricing notes
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line md:col-span-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[28px] leading-tight text-ink">
                  {faq.question}
                  <span className="text-[28px] leading-none text-dark-brown transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] font-light leading-[1.8] text-charcoal/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
