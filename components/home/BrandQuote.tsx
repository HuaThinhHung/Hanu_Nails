"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function BrandQuote() {
  return (
    <section className="relative overflow-hidden bg-soft-white py-24 md:py-36">
      <Container size="narrow" className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto font-display text-[48px] font-light leading-[1.25] tracking-[0.18em] text-ink md:text-[74px]"
        >
          ART
          <br />
          BEYOND
          <br />
          BEAUTY
        </motion.p>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto my-10 h-24 w-px origin-top bg-dark-brown/45"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[560px] text-[16px] font-light leading-[1.95] text-charcoal/70"
        >
          HANU không chỉ là nơi làm đẹp. Mỗi bộ nail được xem như một tác phẩm
          nhỏ, được hoàn thiện bằng đôi tay, định hình bằng cảm xúc và sống cùng
          bạn qua từng khoảnh khắc.
        </motion.p>

        <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
          HANU Nails
        </p>
      </Container>
    </section>
  );
}
