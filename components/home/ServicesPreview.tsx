"use client";

import { motion } from "framer-motion";
import { Brush, Gem, GraduationCap, Hand } from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Nail Design",
    subtitle: "Thiết kế nail nghệ thuật",
    icon: Brush,
  },
  {
    title: "Nail Care",
    subtitle: "Chăm sóc móng",
    icon: Hand,
  },
  {
    title: "Nail Training",
    subtitle: "Đào tạo học viên",
    icon: GraduationCap,
  },
  {
    title: "Custom Design",
    subtitle: "Thiết kế theo yêu cầu",
    icon: Gem,
  },
];

export function ServicesPreview() {
  return (
    <section className="relative border-y border-line bg-soft-white py-24 md:py-32">
      <Container size="wide">
        <div className="mb-14 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
            Our Services
          </p>
          <h2 className="mt-6 font-display text-[46px] font-light tracking-[0.12em] text-ink md:text-[64px]">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid border border-line bg-cream md:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex min-h-[230px] flex-col items-center justify-center border-b border-line p-8 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-soft-white transition-colors group-hover:bg-beige">
                  <Icon size={24} strokeWidth={1.15} className="text-dark-brown" />
                </div>
                <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[13px] font-light text-charcoal/60">
                  {service.subtitle}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
