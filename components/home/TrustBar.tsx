import { CalendarCheck, Image, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  {
    icon: Image,
    title: "Xem mẫu rõ",
    text: "Mẫu tham khảo và tác phẩm thật được tách riêng để khách chọn nhanh.",
  },
  {
    icon: Sparkles,
    title: "Tư vấn theo tay",
    text: "Màu, độ dài, form móng và chi tiết có thể chỉnh theo tay thật.",
  },
  {
    icon: ShieldCheck,
    title: "Quy trình sạch",
    text: "Tập trung vào vệ sinh dụng cụ, thao tác kỹ và trải nghiệm thoải mái.",
  },
  {
    icon: CalendarCheck,
    title: "Đặt lịch nhanh",
    text: "Khách gửi mẫu, ngày giờ mong muốn và kênh liên hệ trong một form.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-cream">
      <Container size="wide">
        <div className="grid divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="p-6 md:p-7">
                <Icon size={24} strokeWidth={1.6} className="text-dark-brown" />
                <h3 className="mt-5 text-[14px] font-extrabold uppercase tracking-[0.1em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.7] text-charcoal/70">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
