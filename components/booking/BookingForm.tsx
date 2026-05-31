"use client";

import { useState } from "react";
import { CalendarDays, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

const services = [
  "Chọn theo mẫu nail có sẵn",
  "Làm mẫu chụp thật trên website",
  "Custom theo ảnh khách gửi",
  "Nail cô dâu / đi tiệc",
  "Tư vấn khác",
];

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-cream p-6 md:p-8">
      {sent && (
        <div className="mb-6 flex items-start gap-3 bg-soft-white p-4 text-[14px] text-charcoal/75">
          <CheckCircle2 size={18} strokeWidth={1.5} className="mt-1 text-dark-brown" />
          <p>
            HANU đã ghi nhận yêu cầu đặt lịch. Ở bản chính thức, thông tin này sẽ
            được gửi về Zalo, email hoặc Google Sheets để tiệm xác nhận lịch.
          </p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Họ tên">
          <input name="name" required placeholder="Tên của bạn" className={inputClass} />
        </Field>
        <Field label="Số điện thoại">
          <input
            name="phone"
            required
            inputMode="tel"
            placeholder="090..."
            className={inputClass}
          />
        </Field>
        <Field label="Bạn muốn làm gì?">
          <select name="service" required className={inputClass}>
            <option value="">Chọn nhu cầu</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Ngày mong muốn">
          <div className="relative">
            <CalendarDays
              size={16}
              strokeWidth={1.5}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark-brown"
            />
            <input name="date" required type="date" className={inputClass} />
          </div>
        </Field>
        <Field label="Khung giờ">
          <div className="relative">
            <Clock
              size={16}
              strokeWidth={1.5}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark-brown"
            />
            <select name="time" required className={inputClass}>
              <option value="">Chọn giờ</option>
              <option>09:00 - 11:00</option>
              <option>11:00 - 13:00</option>
              <option>13:00 - 15:00</option>
              <option>15:00 - 17:00</option>
              <option>17:00 - 19:00</option>
              <option>19:00 - 21:00</option>
            </select>
          </div>
        </Field>
        <Field label="Kênh tiệm liên hệ lại">
          <select name="contactChannel" required className={inputClass}>
            <option>Zalo</option>
            <option>Điện thoại</option>
            <option>Email</option>
            <option>Instagram</option>
          </select>
        </Field>
      </div>

      <Field label="Mẫu muốn làm / link ảnh tham khảo" className="mt-5">
        <input
          name="reference"
          placeholder="Ví dụ: Pearl chrome ánh ngọc hoặc link ảnh"
          className={inputClass}
        />
      </Field>

      <Field label="Ghi chú thêm" className="mt-5">
        <textarea
          name="note"
          rows={5}
          placeholder="Màu yêu thích, dịp sử dụng, độ dài móng, yêu cầu riêng..."
          className={inputClass}
        />
      </Field>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <LuxuryButton type="submit" variant="primary" size="md" withArrow>
          Gửi yêu cầu đặt lịch
        </LuxuryButton>
        <a
          href="https://zalo.me"
          className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-dark-brown hover:text-ink"
        >
          <MessageCircle size={15} strokeWidth={1.5} />
          Chat Zalo
        </a>
      </div>
    </form>
  );
}

const inputClass =
  "min-h-12 w-full border border-line bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-charcoal/40 focus:border-dark-brown";

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-dark-brown">
        {label}
      </span>
      {children}
    </label>
  );
}
