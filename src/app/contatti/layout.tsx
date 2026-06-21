import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti e Consulenza Digitale",
  description:
    "Parlaci del tuo progetto. Richiedi una consulenza per software, siti web, SEO, advertising, social media e automazione AI.",
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: "Richiedi una Consulenza Digitale | NF Media Lab",
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
