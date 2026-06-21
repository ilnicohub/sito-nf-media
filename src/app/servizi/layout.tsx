import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sviluppo Software, Siti Web, SEO e Marketing",
  description:
    "Servizi digitali a Treviso: software gestionali, siti web ad alte prestazioni, SEO, Google Ads, social media e automazioni AI.",
  alternates: { canonical: "/servizi" },
  openGraph: {
    title: "Sviluppo Software, Siti Web, SEO e Marketing | NF Media Lab",
    description:
      "Soluzioni digitali su misura per generare contatti, automatizzare processi e far crescere la tua azienda.",
    url: "/servizi",
  },
};

export default function ServiziLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
