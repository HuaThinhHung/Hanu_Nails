"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";
import { galleryItems } from "@/data/gallery";

const crops = ["nails", "hand", "marble", "silk", "pampas", "hero-hand"] as const;

export function HallOfArtPreview() {
  return (
    <section className="relative bg-soft-white py-24 md:py-36">
      <Container size="wide">
        <div className="mb-14 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Hall of Art
            </p>
            <h2 className="mt-6 font-display text-[50px] font-light leading-[1.02] tracking-[0.1em] text-ink md:text-[76px]">
              WHERE
              <br />
              NAILS BECOME ART
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[14px] font-light leading-[1.85] text-charcoal/70">
              Một gallery gọn như moodboard: chrome, marble, crystal và các mẫu
              custom được chọn để khách tìm mood trước khi đặt lịch.
            </p>
            <Link
              href="/gallery"
              className="mt-7 inline-flex border-b border-ink pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
            >
              Enter gallery
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-line md:grid-cols-6">
          {galleryItems.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative border-b border-r border-line ${
                index === 0 || index === 5 ? "aspect-[3/4] md:col-span-2 md:row-span-2" : "aspect-square md:col-span-2"
              }`}
            >
              <Link href={`/gallery#${item.id}`} className="absolute inset-0">
                <MoodboardImage
                  crop={crops[index % crops.length]}
                  alt={item.title}
                  className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-cream/75">
                    {item.category[0]}
                  </p>
                  <h3 className="mt-1 font-display text-[28px] leading-none text-cream">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
