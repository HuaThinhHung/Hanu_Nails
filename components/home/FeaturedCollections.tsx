"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";
import { collections } from "@/data/collections";

const crops = ["nails", "hand", "marble", "hero-hand", "silk"] as const;

export function FeaturedCollections() {
  return (
    <section className="relative bg-cream py-24 md:py-36">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Collections / 2026
            </p>
            <h2 className="mt-7 font-display text-[50px] font-light leading-[1.02] tracking-[0.08em] text-ink md:text-[72px]">
              NAIL
              <br />
              STORIES
            </h2>
            <div className="mt-8 h-px w-20 bg-dark-brown/55" />
            <p className="mt-8 max-w-[330px] text-[14px] font-light leading-[1.9] text-charcoal/70">
              5 collection kể 5 ngôn ngữ thẩm mỹ khác nhau: chrome, crystal,
              glass, nude và marble. Mỗi set được điều chỉnh theo dáng tay,
              tone da và dịp sử dụng.
            </p>
            <Link
              href="/collections"
              className="mt-10 inline-flex border-b border-ink pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
            >
              View all collections
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
            {collections.map((collection, index) => {
              const featured = index === 0;
              const crop = crops[index % crops.length];

              return (
                <motion.article
                  key={collection.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.85, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={featured ? "md:col-span-2" : ""}
                >
                  <Link href={`/collections/${collection.id}`} className="group block border border-line bg-soft-white">
                    <div className={featured ? "grid md:grid-cols-2" : ""}>
                      <div className={featured ? "aspect-[4/3] md:aspect-[4/5]" : "aspect-[4/5]"}>
                        <MoodboardImage
                          crop={crop}
                          alt={`${collection.title} visual`}
                          className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.035]"
                        />
                      </div>
                      <div className="flex min-h-[260px] flex-col p-7 md:p-9">
                        <div className="flex items-start justify-between gap-6">
                          <p className="font-display text-[54px] italic leading-none text-brown-dark/65">
                            {collection.number}
                          </p>
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.4}
                            className="text-dark-brown transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                        <h3 className="mt-8 font-display text-[38px] font-light leading-none text-ink">
                          {collection.title}
                        </h3>
                        <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-dark-brown">
                          {collection.mood}
                        </p>
                        <p className="mt-5 line-clamp-3 text-[14px] font-light leading-[1.75] text-charcoal/68">
                          {collection.description}
                        </p>
                        <div className="mt-auto flex items-end justify-between pt-8">
                          <div className="flex gap-1.5">
                            {collection.colors.slice(0, 4).map((color) => (
                              <span
                                key={color.name}
                                className="h-3 w-3 rounded-full border border-charcoal/10"
                                style={{ background: color.hex }}
                              />
                            ))}
                          </div>
                          <p className="font-display text-[25px] leading-none text-ink">
                            {collection.priceFrom}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
