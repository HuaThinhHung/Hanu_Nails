import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionBar } from "@/components/layout/FloatingActionBar";

const hanuFont = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanu-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanunails.com"),
  title: {
    default: "HANU Nails - Mẫu nail đẹp, tác phẩm thật và đặt lịch",
    template: "%s · HANU Nails",
  },
  description:
    "HANU Nails giới thiệu bộ sưu tập mẫu nail, các tác phẩm nail chụp thật và form đặt lịch nhanh cho khách yêu thích nail art.",
  keywords: [
    "hanu nails",
    "nail art studio",
    "mẫu nail đẹp",
    "mẫu nail chụp thật",
    "bộ sưu tập nail",
    "đặt lịch làm nail",
    "nail cô dâu",
    "nail chrome",
    "nail marble",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://hanunails.com",
    title: "HANU Nails - Mẫu nail đẹp và đặt lịch",
    description: "Xem bộ sưu tập nail, tác phẩm chụp thật và đặt lịch làm nail.",
    siteName: "HANU Nails",
  },
  twitter: {
    card: "summary_large_image",
    title: "HANU Nails - Mẫu nail đẹp và đặt lịch",
    description: "Xem mẫu nail và đặt lịch nhanh.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "HANU Nails",
  url: "https://hanunails.com",
  telephone: "0909.123.456",
  address: {
    "@type": "PostalAddress",
    addressLocality: "TP.HCM",
    addressCountry: "VN",
  },
  openingHours: "Mo-Su 09:00-21:00",
  sameAs: ["https://instagram.com", "https://tiktok.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body className={`${hanuFont.variable} min-h-screen bg-cream text-ink antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main id="top" className="relative">{children}</main>
        <Footer />
        <FloatingActionBar />
      </body>
    </html>
  );
}
