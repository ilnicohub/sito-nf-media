import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prenota una Consulenza Digitale",
  description: "Prenota una video call con NF Media Lab per confrontarti su siti web, software, SEO, advertising e social media.",
  alternates: { canonical: "/prenota" },
  openGraph: {
    title: "Prenota una Consulenza Digitale | NF Media Lab",
    description: "Scegli giorno e orario per un primo confronto sul tuo progetto digitale.",
    url: "/prenota",
  },
};

export default function PrenotaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
