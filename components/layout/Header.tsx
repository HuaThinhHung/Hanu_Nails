"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/nav";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-line bg-cream/86 backdrop-blur-xl"
            : "border-transparent bg-soft-white/70 backdrop-blur-sm"
        )}
      >
        <div
          className={cn(
            "mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center px-5 transition-all duration-500 md:px-12 lg:px-16",
            scrolled ? "h-16" : "h-[76px]"
          )}
        >
          <Logo size="md" />

          <nav className="hidden justify-center lg:flex">
            <div className="flex items-center gap-10">
              {mainNav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "link-underline text-[10px] font-medium uppercase tracking-[0.24em] transition-colors duration-300",
                      isActive ? "text-ink is-active" : "text-charcoal/62 hover:text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="flex items-center justify-end gap-4">
            <Link
              href="/booking"
              className="hidden border-b border-ink pb-1 text-[10px] font-medium uppercase tracking-[0.24em] text-ink transition-colors hover:text-dark-brown md:inline-flex"
            >
              Đặt lịch
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <Menu size={21} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
