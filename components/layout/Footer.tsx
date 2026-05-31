import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/data/nav";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-line bg-cream">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo size="lg" />
            <p className="mt-6 max-w-[320px] text-[14px] leading-[1.8] text-charcoal/68">
              HANU Nails là nơi lưu lại các bộ nail đẹp, tác phẩm làm thủ công và
              giúp khách đặt lịch nhanh theo mẫu yêu thích.
            </p>
            <div className="mt-6 space-y-1.5 text-[13px] text-charcoal/65">
              <p>TP.HCM</p>
              <p>hello@hanunails.com</p>
              <p>0909.123.456</p>
            </div>
          </div>

          <FooterCol title="HANU" links={footerNav.studio} />
          <FooterCol title="Xem mẫu" links={footerNav.services} />
          <FooterCol title="Kết nối" links={footerNav.connect} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-[12px] text-charcoal/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} HANU Nails. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="link-underline">
              Bảo mật
            </Link>
            <Link href="/terms" className="link-underline">
              Điều khoản
            </Link>
            <a
              href="#top"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              Lên đầu trang
              <ArrowUp size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-5 md:col-span-2">
      <p className="eyebrow text-dark-brown">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {isExternal(link.href) ? (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-[13.5px] text-charcoal/75 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[13.5px] text-charcoal/75 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}
