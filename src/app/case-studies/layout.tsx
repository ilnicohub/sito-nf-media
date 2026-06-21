import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study e Risultati dei Nostri Clienti",
  description:
    "Scopri i risultati ottenuti da NF Media Lab con siti web, software gestionali, SEO e social media per aziende del Nord Italia.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Study e Risultati | NF Media Lab",
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
