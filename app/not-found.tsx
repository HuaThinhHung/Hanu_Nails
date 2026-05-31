import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

export default function NotFound() {
  return (
    <div className="bg-cream">
      <Container size="narrow" className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-[84px] italic leading-none text-brown-dark/60">
          404
        </p>
        <h1 className="mt-6 font-display text-[48px] font-light leading-tight text-ink md:text-[72px]">
          Trang này chưa có trong collection.
        </h1>
        <p className="mt-5 max-w-xl text-[15px] font-light leading-[1.8] text-charcoal/70">
          Có thể đường dẫn đã đổi hoặc mẫu bạn tìm chưa được HANU xuất bản.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <LuxuryButton href="/" variant="primary" size="md" withArrow>
            Về trang chủ
          </LuxuryButton>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Collections
          </Link>
        </div>
      </Container>
    </div>
  );
}
