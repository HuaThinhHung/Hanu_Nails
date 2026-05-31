"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      7000
    );
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative py-24 md:py-36 bg-cream">
      <Container size="narrow">
        <div className="text-center mb-12">
          <Eyebrow className="justify-center" withMark={false}>
            — Voices —
          </Eyebrow>
        </div>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="font-display italic text-[28px] md:text-[44px] leading-[1.25] text-ink max-w-[760px] mx-auto">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-10 flex flex-col items-center gap-1">
              <p className="font-display text-[20px] text-ink">{current.name}</p>
              <p className="text-[11px] uppercase tracking-[0.28em] text-dark-brown">
                {current.role}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-dark-brown" : "w-1.5 bg-charcoal/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
