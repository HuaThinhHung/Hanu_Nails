"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/nav";
import { MoodboardImage } from "@/components/ui/MoodboardImage";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-soft-white"
        >
          <div className="pointer-events-none absolute inset-y-20 right-0 hidden w-[42%] opacity-20 md:block">
            <MoodboardImage crop="hand" className="h-full w-full" alt="HANU Nails hand visual" />
          </div>

          <div className="relative flex h-full flex-col">
            <div className="flex h-20 items-center justify-between border-b border-line px-6">
              <Logo size="sm" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="p-2 -mr-2"
              >
                <X size={22} strokeWidth={1.4} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-5">
                {mainNav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.12 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="font-display text-[44px] font-light leading-none tracking-[0.08em] text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5 border-t border-line px-8 pb-10 pt-6"
            >
              <Link
                href="/booking"
                onClick={onClose}
                className="flex justify-center border border-ink px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink"
              >
                Booking
              </Link>
              <div className="flex items-center justify-center gap-5 text-[10px] uppercase tracking-[0.22em] text-dark-brown">
                <a href="https://zalo.me" className="link-underline">Zalo</a>
                <span className="opacity-30">/</span>
                <a href="https://instagram.com" className="link-underline">Instagram</a>
                <span className="opacity-30">/</span>
                <a href="https://tiktok.com" className="link-underline">TikTok</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
