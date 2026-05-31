import type { Metadata } from "next";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Đặt lịch tư vấn và làm nail tại HANU Nails Studio. Chọn dịch vụ, ngày giờ và kênh liên hệ.",
};

export default function BookingPage() {
  return (
    <div className="bg-cream">
      <Container size="wide" className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <Eyebrow>Book Appointment</Eyebrow>
          <h1 className="mt-6 font-display text-[58px] font-light leading-[0.98] tracking-tight text-ink md:text-[96px]">
            Begin your
            <br />
            <span className="italic text-dark-brown">nail experience.</span>
          </h1>
          <p className="mt-8 text-[16px] font-light leading-[1.8] text-charcoal/70">
            Gửi trước phong cách, ngày giờ và nhu cầu của bạn. HANU sẽ xác nhận
            lịch, thời lượng và mức giá dự kiến trước khi đến studio.
          </p>

          <div className="mt-10 space-y-5 border-t border-line pt-8">
            <Info icon={Phone} title="Hotline" text="0909.123.456" />
            <Info icon={MapPin} title="Studio" text="123 Lê Lợi, Quận 1, TP.HCM" />
            <Info icon={Sparkles} title="Giờ mở cửa" text="09:00 - 21:00 hằng ngày" />
          </div>
        </div>

        <div className="md:col-span-7">
          <BookingForm />
        </div>
      </Container>
    </div>
  );
}

function Info({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-soft-white">
        <Icon size={17} strokeWidth={1.5} className="text-dark-brown" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.24em] text-dark-brown">
          {title}
        </p>
        <p className="mt-1 text-[14px] text-charcoal/72">{text}</p>
      </div>
    </div>
  );
}
