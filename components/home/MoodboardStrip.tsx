"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

const palette = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Gray", hex: "#E6E6E6" },
  { name: "Beige", hex: "#F2EDE9" },
  { name: "Brown", hex: "#CDBBAF" },
  { name: "Dark Brown", hex: "#7A685A" },
];

const textures = [
  { crop: "silk", label: "Silk" },
  { crop: "marble", label: "Marble" },
  { crop: "pampas", label: "Pampas" },
  { crop: "studio", label: "Studio" },
] as const;

export function MoodboardStrip() {
  return (
    <section id="moodboard" className="border-y border-line bg-cream">
      <Container size="wide" className="py-0">
        <div className="grid border-x border-line lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-line p-8 md:p-12 lg:col-span-4 lg:border-b-0 lg:border-r"
          >
            <p className="text-center font-display text-[42px] font-light tracking-[0.2em] text-ink md:text-[58px]">
              HANU
            </p>
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.48em] text-ink">
              Nails
            </p>
            <div className="mx-auto my-8 h-px w-20 bg-dark-brown/50" />
            <p className="text-center text-[10px] uppercase tracking-[0.28em] text-dark-brown">
              White · Gray · Beige · Brown
            </p>

            <div className="mt-12 grid grid-cols-5 gap-2">
              {palette.map((color) => (
                <div key={color.name}>
                  <div className="aspect-square border border-line" style={{ background: color.hex }} />
                  <p className="mt-3 text-center text-[8px] uppercase tracking-[0.18em] text-charcoal/70">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:col-span-5">
            {textures.map((texture) => (
              <div key={texture.label} className="relative aspect-[4/3] border-b border-r border-line last:border-r-0 lg:border-b-0">
                <MoodboardImage
                  crop={texture.crop}
                  alt={`${texture.label} texture in HANU moodboard`}
                  className="h-full w-full"
                />
                <span className="absolute bottom-4 left-4 bg-soft-white/80 px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-ink backdrop-blur">
                  {texture.label}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[300px] flex-col items-center justify-center p-10 text-center lg:col-span-3 lg:border-l"
          >
            <p className="font-display text-[42px] leading-[1.35] tracking-[0.18em] text-ink">
              ART
              <br />
              BEYOND
              <br />
              BEAUTY
            </p>
            <div className="my-8 h-20 w-px bg-dark-brown/45" />
            <p className="text-[10px] uppercase tracking-[0.28em] text-dark-brown">
              Moodboard / 2026
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
