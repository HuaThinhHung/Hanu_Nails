import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hanunails.com"),
  title: {
    default: "HANU Nails — Luxury Nail Art Studio & Academy",
    template: "%s · HANU Nails",
  },
  description:
    "HANU Nails là nail art studio & academy theo phong cách luxury, hiện đại — chuyên thiết kế nail nghệ thuật, đặt lịch làm nail và đào tạo học viên nail.",
  keywords: [
    "hanu nails",
    "nail art studio",
    "nail luxury",
    "mẫu nail đẹp",
    "đặt lịch làm nail",
    "khóa học nail",
    "học nail",
    "nail academy",
    "nail design",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://hanunails.com",
    title: "HANU Nails — Luxury Nail Art Studio & Academy",
    description: "Where Nails Become Art — Nail art studio & academy.",
    siteName: "HANU Nails",
  },
  twitter: {
    card: "summary_large_image",
    title: "HANU Nails — Luxury Nail Art Studio & Academy",
    description: "Where Nails Become Art.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-cream text-ink antialiased">
        <Header />
        <main id="top" className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
