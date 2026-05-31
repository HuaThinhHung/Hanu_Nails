"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MoodboardImage } from "@/components/ui/MoodboardImage";
import { courses } from "@/data/courses";

export function AcademyPreview() {
  return (
    <section className="relative border-y border-line bg-soft-white py-24 md:py-36">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/5] border border-line">
              <MoodboardImage
                crop="workspace"
                alt="Không gian học nail tại HANU Academy"
                className="h-full w-full"
              />
            </div>
            <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.28em] text-dark-brown">
              HANU Academy
            </p>
            <h2 className="mt-5 font-display text-[46px] font-light leading-[1.08] tracking-[0.08em] text-ink md:text-[66px]">
              TRAIN
              <br />
              YOUR HANDS.
              <br />
              SHAPE
              <br />
              YOUR TASTE.
            </h2>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-line border-y border-line">
              {courses.map((course, index) => (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/academy/${course.id}`}
                    className="group grid gap-6 py-8 md:grid-cols-[90px_1fr_auto] md:items-start"
                  >
                    <p className="font-display text-[44px] italic leading-none text-brown-dark/70">
                      {course.number}
                    </p>
                    <div>
                      <h3 className="font-display text-[34px] font-light leading-none text-ink">
                        {course.title}
                      </h3>
                      <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-dark-brown">
                        {course.duration} · {course.level}
                      </p>
                      <p className="mt-5 max-w-[560px] text-[14px] font-light leading-[1.75] text-charcoal/70">
                        {course.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                      className="text-dark-brown transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </motion.article>
              ))}
            </div>

            <Link
              href="/academy"
              className="mt-10 inline-flex border-b border-ink pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
            >
              Explore courses
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
