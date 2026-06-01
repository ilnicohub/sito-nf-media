import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NF MEDIA AGENCY | Sviluppo Software e Web Design",
  description: "Agenzia di Treviso specializzata in Sviluppo Software, Web Design Premium e Strategie Digitali nel Nord Italia.",
  keywords: ["Agenzia Marketing Treviso", "Sviluppo Software Nord Italia", "Creazione Siti Web Treviso"],
  openGraph: {
    title: "NF MEDIA AGENCY | Sviluppo Software e Web Design",
    description: "Agenzia di Treviso specializzata in Sviluppo Software, Web Design Premium e Strategie Digitali nel Nord Italia.",
    url: "https://nfmediaagency.it",
    siteName: "NF MEDIA AGENCY",
    images: [
      {
        url: "/og-default.svg",
        alt: "NF MEDIA AGENCY — Sviluppo Software e Web Design",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NF MEDIA AGENCY | Sviluppo Software e Web Design",
    description: "Agenzia di Treviso specializzata in Sviluppo Software, Web Design Premium e Strategie Digitali nel Nord Italia.",
    images: ["/og-default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
