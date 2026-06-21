import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenzia Digitale a Treviso",
  description:
    "Conosci NF Media Lab, agenzia digitale a Treviso che unisce strategia, sviluppo software, web design e marketing orientato ai risultati.",
  alternates: { canonical: "/chi-siamo" },
  openGraph: {
    title: "Agenzia Digitale a Treviso | NF Media Lab",
    description:
      "Tecnologia, design e marketing per costruire crescita digitale misurabile.",
    url: "/chi-siamo",
  },
};

export default function ChiSiamoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
