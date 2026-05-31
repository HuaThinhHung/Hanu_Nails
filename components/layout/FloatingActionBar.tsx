import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";

export function FloatingActionBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 flex gap-2 border border-line bg-cream/94 p-2 shadow-[0_18px_60px_rgba(17,17,17,0.12)] backdrop-blur md:hidden">
      <Link
        href="/booking"
        className="flex min-h-11 flex-1 items-center justify-center gap-2 bg-ink px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream"
      >
        <CalendarDays size={15} strokeWidth={1.5} />
        Đặt lịch
      </Link>
      <a
        href="https://zalo.me"
        className="flex min-h-11 flex-1 items-center justify-center gap-2 border border-line bg-soft-white px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink"
      >
        <MessageCircle size={15} strokeWidth={1.5} />
        Zalo
      </a>
    </div>
  );
}
