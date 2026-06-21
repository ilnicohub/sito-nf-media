import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Richiesta ricevuta",
  robots: { index: false, follow: false },
};

export default function GrazieLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
