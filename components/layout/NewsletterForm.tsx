"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
    event.currentTarget.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-3 border-b border-cream/30 pb-3">
        <input
          type="email"
          name="email"
          required
          placeholder="email@yourdomain.com"
          className="flex-1 bg-transparent text-[15px] placeholder:text-cream/40 focus:outline-none"
        />
        <button
          type="submit"
          className="group inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-cream/90 transition-colors hover:text-cream"
        >
          Subscribe
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>
      <p className="mt-3 flex items-center gap-2 text-[11px] tracking-wide text-cream/40">
        {done && <Check size={12} strokeWidth={1.5} className="text-brown" />}
        {done ? "Đã ghi nhận email ở bản demo." : "Không spam. Hủy bất cứ lúc nào."}
      </p>
    </div>
  );
}
