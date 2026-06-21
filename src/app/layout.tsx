import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const siteUrl = "https://nfmedialab.it";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NF Media Lab | Agenzia Web, Software e Marketing a Treviso",
    template: "%s | NF Media Lab",
  },
  description:
    "Agenzia digitale a Treviso per sviluppo software, siti web, SEO, Google Ads e social media. Trasformiamo il digitale in contatti e crescita misurabile.",
  applicationName: "NF Media Lab",
  authors: [{ name: "NF Media Lab", url: siteUrl }],
  creator: "NF Media Lab",
  publisher: "NF Media Lab",
  category: "technology",
  other: {
    "msapplication-TileColor": "#030303",
    "msapplication-TileImage": "/mstile-150x150.png",
  },
  keywords: [
    "agenzia web Treviso",
    "agenzia marketing Treviso",
    "sviluppo software Treviso",
    "realizzazione siti web Treviso",
    "SEO Treviso",
    "gestione social media Treviso",
    "Google Ads Treviso",
    "web agency Veneto",
  ],
  alternates: {
    canonical: "/",
    languages: { "it-IT": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "NF Media Lab | Agenzia Web, Software e Marketing a Treviso",
    description:
      "Sviluppo software, siti web e strategie di acquisizione clienti per aziende del Nord Italia.",
    url: siteUrl,
    siteName: "NF MEDIA LAB",
    locale: "it_IT",
    images: [
      {
        url: "/og-default.svg",
        alt: "NF Media Lab — Sviluppo Software, Web Design e Marketing",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NF Media Lab | Agenzia Web, Software e Marketing a Treviso",
    description:
      "Sviluppo software, siti web e strategie di acquisizione clienti per aziende del Nord Italia.",
    images: ["/og-default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: "NF Media Lab",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/og-default.svg`,
    description:
      "Agenzia digitale di Treviso specializzata in sviluppo software, siti web, SEO, advertising e social media.",
    email: "info@nfmedia.it",
    telephone: "+393427404958",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Treviso",
      addressRegion: "Veneto",
      addressCountry: "IT",
    },
    areaServed: [
      "Treviso",
      "Venezia",
      "Padova",
      "Vicenza",
      "Verona",
      "Milano",
      "Torino",
      "Bologna",
      "Udine",
    ],
    knowsAbout: [
      "Sviluppo software",
      "Realizzazione siti web",
      "SEO",
      "Google Ads",
      "Social media marketing",
      "Intelligenza artificiale",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+393427404958",
      email: "info@nfmedia.it",
      contactType: "sales",
      availableLanguage: ["Italian"],
      areaServed: "IT",
    },
  };

  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <Footer />
        <BackToTop />
        <CookieBanner />
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
        />
      </body>
    </html>
  );
}
