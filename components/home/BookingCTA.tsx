"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Begin your experience
            </p>
            <h2 className="mt-7 font-display text-[48px] font-light leading-[1.08] tracking-[0.08em] text-ink md:text-[76px]">
              BOOK
              <br />
              YOUR
              <br />
              APPOINTMENT
            </h2>
            <p className="mt-8 max-w-[390px] text-[14px] font-light leading-[1.9] text-charcoal/70">
              Gửi trước mẫu yêu thích, ngày giờ và phong cách bạn muốn. HANU sẽ
              tư vấn collection, thời lượng và mức giá phù hợp trước khi đến studio.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex justify-center border border-ink px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Booking
              </Link>
              <a
                href="https://zalo.me"
                className="inline-flex justify-center border-b border-ink px-1 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
              >
                Contact Zalo
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
