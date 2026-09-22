import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti e Consulenza Digitale",
  description:
    "Parlaci del tuo progetto. Richiedi una consulenza per software, siti web, SEO, advertising, social media e automazione AI.",
  keywords: [
    "contatti NF Media Lab",
    "richiesta preventivo sito web",
    "consulenza digitale Treviso",
    "preventivo software gestionale",
    "contatta agenzia web",
  ],
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: "NF Media Lab | Richiedi una Consulenza Digitale",
    description:
      "Raccontaci i tuoi obiettivi e ricevi una proposta su misura per far crescere la tua azienda.",
    url: "/contatti",
  },
};

export default function ContattiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
