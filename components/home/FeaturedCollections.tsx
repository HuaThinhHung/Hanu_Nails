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
            <p className="hanu-eyebrow">Bộ sưu tập mẫu</p>
            <h2 className="hanu-heading mt-7 text-[50px] md:text-[74px]">
              Chọn theo
              <br />
              phong cách
            </h2>
            <div className="mt-8 h-px w-20 bg-dark-brown/55" />
            <p className="hanu-copy mt-8 max-w-[360px]">
              Mỗi bộ sưu tập gom các mẫu cùng mood để khách dễ chọn: nude, chrome,
              marble, cô dâu hoặc custom theo ảnh riêng.
            </p>
            <Link href="/collections" className="hanu-text-link mt-10">
              Xem bộ sưu tập
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
                          <p className="hanu-heading text-[46px] text-brown-dark/70">
                            {collection.number}
                          </p>
                          <ArrowUpRight
                            size={20}
                            strokeWidth={1.7}
                            className="text-dark-brown transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                        <h3 className="hanu-heading mt-8 text-[36px]">
                          {collection.title}
                        </h3>
                        <p className="mt-3 text-[13px] font-extrabold uppercase tracking-[0.1em] text-dark-brown">
                          {collection.mood}
                        </p>
                        <p className="mt-5 line-clamp-3 text-[15px] font-medium leading-[1.75] text-charcoal/70">
                          {collection.description}
                        </p>
                        <div className="mt-auto flex items-end justify-between pt-8">
                          <div className="flex gap-1.5">
                            {collection.colors.slice(0, 4).map((color) => (
                              <span
                                key={color.name}
                                className="h-3.5 w-3.5 rounded-full border border-charcoal/10"
                                style={{ background: color.hex }}
                              />
                            ))}
                          </div>
                          <p className="hanu-heading text-[25px]">{collection.priceFrom}</p>
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
