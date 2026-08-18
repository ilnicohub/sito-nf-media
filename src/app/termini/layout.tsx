import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description: "Termini e condizioni di utilizzo del sito di NF Media Lab.",
  alternates: { canonical: "/termini" },
  robots: { index: false, follow: true },
};

export default function TerminiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
