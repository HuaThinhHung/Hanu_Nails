import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Liên hệ HANU Nails qua hotline, email, Zalo hoặc đặt lịch tư vấn tại studio TP.HCM.",
};

const contacts = [
  { icon: Phone, title: "Hotline", text: "0909.123.456" },
  { icon: Mail, title: "Email", text: "hello@hanunails.com" },
  { icon: MapPin, title: "Studio", text: "123 Lê Lợi, Quận 1, TP.HCM" },
];

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-display text-[58px] font-light leading-[0.98] tracking-tight text-ink md:text-[96px]">
            Let HANU
            <br />
            <span className="italic text-dark-brown">prepare first.</span>
          </h1>
          <p className="mt-8 text-[16px] font-light leading-[1.8] text-charcoal/70">
            Gửi nhu cầu, ảnh tham khảo hoặc câu hỏi về khóa học. Team HANU sẽ phản hồi
            qua kênh bạn chọn.
          </p>

          <div className="mt-10 grid gap-px bg-line">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-soft-white p-5">
                  <Icon size={18} strokeWidth={1.5} className="mt-1 text-dark-brown" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-dark-brown">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[14px] text-charcoal/72">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-7">
          <BookingForm />
        </div>
      </Container>
    </div>
  );
}
