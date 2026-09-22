import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study e Risultati dei Nostri Clienti",
  description:
    "Scopri i risultati ottenuti da NF Media Lab con siti web, software gestionali, SEO e social media per aziende del Nord Italia.",
  keywords: [
    "case study agenzia web",
    "portfolio siti web",
    "risultati digital marketing",
    "casi studio successo PMI",
    "esempi progetti web Treviso",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "NF Media Lab | Case Study e Risultati",
    description:
      "Progetti digitali concreti con crescita di contatti, traffico ed efficienza operativa.",
    url: "/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
