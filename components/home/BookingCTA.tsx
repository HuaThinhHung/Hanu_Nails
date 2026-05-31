"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

export function BookingCTA() {
  return (
    <section className="relative bg-soft-white py-24 md:py-32">
      <Container size="wide">
        <div className="grid border border-line bg-cream lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center p-8 md:p-12 lg:col-span-5"
          >
            <p className="hanu-eyebrow">Đặt lịch làm nail</p>
            <h2 className="hanu-heading mt-7 text-[48px] md:text-[78px]">
              Gửi mẫu
              <br />
              tiệm tư vấn
              <br />
              trước
            </h2>
            <p className="hanu-copy mt-8 max-w-[460px]">
              Khách gửi mẫu yêu thích, ngày giờ mong muốn và ghi chú về màu hoặc
              độ dài móng. HANU liên hệ lại để xác nhận lịch và giá dự kiến.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/booking" className="hanu-button hanu-button-primary gap-2">
                <CalendarDays size={17} strokeWidth={1.7} />
                Đặt lịch
              </Link>
              <a href="https://zalo.me" className="hanu-button hanu-button-secondary gap-2">
                <MessageCircle size={17} strokeWidth={1.7} />
                Chat Zalo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] border-t border-line lg:col-span-7 lg:border-l lg:border-t-0"
          >
            <MoodboardImage
              crop="nails"
              alt="Close-up nail art của HANU Nails"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
