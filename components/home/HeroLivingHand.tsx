"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroLivingHand() {
  return (
    <section id="home-hero" className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-soft-white">
      <Container size="wide" className="relative grid min-h-[calc(100svh-76px)] grid-cols-1 items-center gap-10 py-12 md:py-16 lg:grid-cols-12">
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-line md:inset-x-12 lg:inset-x-16" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px bg-line/70 lg:block" />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="z-10 lg:col-span-4"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
            Nail art studio
          </p>

          <h1 className="mt-10 font-display text-[58px] font-light leading-[1.02] tracking-[0.08em] text-ink md:text-[76px] lg:text-[88px]">
            TÁC
            <br />
            PHẨM
            <br />
            NAIL
          </h1>

          <div className="mt-8 h-px w-20 bg-dark-brown" />

          <p className="mt-8 max-w-[300px] text-[13px] leading-[1.9] text-charcoal/68">
            Nơi khách xem bộ sưu tập mẫu nail, các tác phẩm chụp thật và đặt lịch
            làm mẫu yêu thích một cách nhanh nhất.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/collections"
              className="border border-ink px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
                Xem bộ sưu tập
            </Link>
            <Link
              href="/booking"
              className="link-underline text-[10px] font-semibold uppercase tracking-[0.24em] text-dark-brown"
            >
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
            alt="Bàn tay với nail tone nâu chrome trong moodboard HANU Nails"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-soft-white/55 via-transparent to-transparent" />
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="hidden lg:col-span-2 lg:block"
        >
          <div className="border-l border-line pl-8">
            <p className="font-display text-[28px] leading-[1.35] tracking-[0.18em] text-ink">
              NAIL
              <br />
              ART
              <br />
              STUDIO
            </p>
            <div className="my-8 h-24 w-px bg-dark-brown/45" />
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Xem mẫu · Đặt lịch
            </p>
          </div>
        </motion.aside>

        <div className="absolute bottom-8 right-6 hidden text-[12px] text-charcoal/55 lg:block">
          01
        </div>

        <a
          href="#moodboard"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-dark-brown md:flex"
          aria-label="Scroll to moodboard"
        >
          <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} strokeWidth={1.4} />
          </motion.span>
        </a>
      </Container>
    </section>
  );
}
