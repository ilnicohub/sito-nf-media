import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull’utilizzo dei cookie nel sito di NF Media Lab.",
  alternates: { canonical: "/cookie" },
  robots: { index: false, follow: true },
};

export default function CookieLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
