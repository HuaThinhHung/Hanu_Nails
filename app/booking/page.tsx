import type { Metadata } from "next";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Đặt Lịch",
  description:
    "Đặt lịch làm nail tại HANU Nails. Gửi mẫu yêu thích, ngày giờ mong muốn và kênh liên hệ để tiệm tư vấn trước.",
};

type BookingPageProps = {
  searchParams: Promise<{
    mau?: string | string[];
  }>;
};

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;
  const initialReference = Array.isArray(params.mau)
    ? params.mau[0] ?? ""
    : params.mau ?? "";

  return (
    <div className="bg-cream">
      <Container size="wide" className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="hanu-eyebrow">Đặt lịch</p>
          <h1 className="hanu-heading mt-6 text-[58px] md:text-[96px]">
            Gửi mẫu
            <br />
            tiệm tư vấn
          </h1>
          <p className="hanu-copy mt-8">
            Điền thông tin đặt lịch, mẫu muốn làm và khung giờ mong muốn. HANU sẽ
            liên hệ lại để xác nhận lịch, thời lượng và mức giá dự kiến.
          </p>

          <div className="mt-10 space-y-5 border-t border-line pt-8">
            <Info icon={Phone} title="Hotline" text="0909.123.456" />
            <Info icon={MapPin} title="Studio" text="TP.HCM" />
            <Info icon={Sparkles} title="Giờ mở cửa" text="09:00 - 21:00 hằng ngày" />
          </div>
        </div>

        <div className="md:col-span-7">
          <BookingForm initialReference={initialReference} />
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
        <Icon size={18} strokeWidth={1.7} className="text-dark-brown" />
      </div>
      <div>
        <p className="hanu-eyebrow">{title}</p>
        <p className="mt-1 text-[16px] font-semibold text-charcoal/72">{text}</p>
      </div>
    </div>
  );
}
