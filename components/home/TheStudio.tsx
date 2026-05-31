"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

export function TheStudio() {
  return (
    <section className="relative bg-cream py-24 md:py-36">
      <Container size="wide">
        <div className="grid gap-0 border border-line bg-soft-white lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/3] border-b border-line lg:col-span-7 lg:border-b-0 lg:border-r"
          >
            <MoodboardImage
              crop="studio"
              alt="Không gian studio HANU Nails tone trắng be"
              className="h-full w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center p-8 md:p-12 lg:col-span-5"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Our Space
            </p>
            <h2 className="mt-7 font-display text-[42px] font-light leading-[1.18] tracking-[0.12em] text-ink md:text-[58px]">
              LUXURY
              <br />
              NAIL ART
              <br />
              STUDIO &
              <br />
              ACADEMY
            </h2>
            <p className="mt-8 max-w-[420px] text-[14px] font-light leading-[1.9] text-charcoal/70">
              HANU không chỉ là nơi làm đẹp, mà còn là nơi đôi tay được kể một
              câu chuyện thẩm mỹ riêng. Không gian được giữ tối giản để nail art
              trở thành trung tâm.
            </p>
            <Link
              href="/about"
              className="mt-10 inline-flex w-fit border-b border-ink pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
