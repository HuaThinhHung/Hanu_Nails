"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { pricing } from "@/data/pricing";

export function PricingPreview() {
  return (
    <section className="relative bg-cream py-24 md:py-36">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              Price
            </p>
            <h2 className="mt-6 font-display text-[50px] font-light leading-[1.02] tracking-[0.1em] text-ink md:text-[72px]">
              CLEAR
              <br />
              PRICING
            </h2>
            <p className="mt-8 max-w-[340px] text-[14px] font-light leading-[1.9] text-charcoal/70">
              Giá hiển thị theo nhóm dịch vụ để khách dễ chọn trước khi được artist
              tư vấn chi tiết theo mẫu, độ dài móng và chất liệu.
            </p>
            <Link
              href="/pricing"
              className="mt-10 inline-flex border-b border-ink pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
            >
              View full pricing
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {pricing.map((category, index) => (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-6 py-8 md:grid-cols-12 md:items-start"
                >
                  <div className="md:col-span-5">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-dark-brown">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-[38px] font-light leading-none text-ink">
                      {category.title}
                    </h3>
                    <p className="mt-4 text-[13px] font-light leading-[1.75] text-charcoal/65">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-3 md:col-span-7">
                    {category.items.slice(0, 3).map((item) => (
                      <div key={item.name} className="flex items-baseline justify-between gap-5 border-b border-line/70 pb-3 last:border-b-0">
                        <p className="text-[14px] text-ink">{item.name}</p>
                        <p className="font-display text-[25px] leading-none text-ink">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
