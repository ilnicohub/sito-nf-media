import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRegion, regions } from "@/data/regions";
import RegionContent from "./RegionContent";

type Props = { params: Promise<{ region: string }> };

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegion(slug);
  if (!region) return { title: "Territorio non trovato" };
  return {
    title: region.title,
    description: region.intro,
    alternates: { canonical: `/dove-operiamo/${region.slug}` },
    openGraph: { title: region.title, description: region.intro, url: `/dove-operiamo/${region.slug}` },
  };
}

export default async function RegionPage({ params }: Props) {
  const { region: slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();
  const url = `https://www.nfmedialab.it/dove-operiamo/${region.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url,
      name: region.title,
      description: region.intro,
      isPartOf: { "@id": "https://www.nfmedialab.it/#website" },
      about: { "@id": "https://www.nfmedialab.it/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nfmedialab.it" },
        { "@type": "ListItem", position: 2, name: "Dove operiamo", item: "https://www.nfmedialab.it/dove-operiamo" },
        { "@type": "ListItem", position: 3, name: region.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: region.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><RegionContent region={region} /></>;
}
