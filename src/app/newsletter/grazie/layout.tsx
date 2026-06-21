import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iscrizione confermata",
  robots: { index: false, follow: false },
};

export default function GrazieNewsletterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
