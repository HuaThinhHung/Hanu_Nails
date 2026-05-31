"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, CalendarDays, Images } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroLivingHand() {
  return (
    <section id="home-hero" className="relative overflow-hidden bg-soft-white">
      <Container
        size="wide"
        className="relative grid min-h-[calc(100svh-76px)] grid-cols-1 items-center gap-10 py-12 md:py-16 lg:grid-cols-12"
      >
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-line md:inset-x-12 lg:inset-x-16" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px bg-line/70 lg:block" />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="z-10 lg:col-span-4"
        >
          <p className="hanu-eyebrow">HANU Nails Studio</p>

          <h1 className="hanu-heading mt-8 text-[58px] md:text-[78px] lg:text-[96px]">
            Nail đẹp
            <br />
            dễ chọn
            <br />
            dễ đặt lịch
          </h1>

          <div className="mt-8 h-px w-20 bg-dark-brown" />

          <p className="hanu-copy mt-8 max-w-[390px]">
            Website để khách xem bộ sưu tập mẫu nail, tác phẩm chụp thật của tiệm
            và gửi lịch hẹn nhanh theo mẫu đã chọn.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/mau-nail" className="hanu-button hanu-button-primary gap-2">
              <Images size={17} strokeWidth={1.7} />
              Xem mẫu nail
            </Link>
            <Link href="/booking" className="hanu-button hanu-button-secondary gap-2">
              <CalendarDays size={17} strokeWidth={1.7} />
              Đặt lịch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.25, delay: 0.15, ease }}
          className="relative z-0 h-[420px] overflow-hidden border border-line bg-beige md:h-[560px] lg:col-span-6 lg:col-start-6 lg:h-[620px]"
        >
          <MoodboardImage
            crop="hero-hand"
            priority
            alt="Bàn tay với mẫu nail tone nude chrome của HANU Nails"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-soft-white/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 border border-line bg-cream/88 p-4 backdrop-blur">
            <p className="hanu-eyebrow">Moodboard chính</p>
            <p className="mt-2 text-[15px] font-semibold leading-relaxed text-charcoal/76">
              White / Gray / Beige / Brown - tối giản, mềm, tập trung vào hình ảnh nail.
            </p>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="hidden lg:col-span-2 lg:block"
        >
          <div className="border-l border-line pl-8">
            <p className="hanu-heading text-[30px]">
              Mẫu
              <br />
              thật
              <br />
              đặt lịch
            </p>
            <div className="my-8 h-24 w-px bg-dark-brown/45" />
            <p className="hanu-eyebrow">3 luồng chính</p>
          </div>
        </motion.aside>

        <div className="absolute bottom-8 right-6 hidden text-[13px] font-semibold text-charcoal/55 lg:block">
          01
        </div>

        <a
          href="#mau-nail-moi"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-dark-brown md:flex"
          aria-label="Xem mẫu nail mới"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.12em]">Xem tiếp</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} strokeWidth={1.7} />
          </motion.span>
        </a>
      </Container>
    </section>
  );
}
