import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityLandings, getCityLanding, getCityUrl } from "@/data/cityLandings";
import CityContent from "./CityContent";

type Props = { params: Promise<{ region: string; city: string }> };

export function generateStaticParams() {
  return cityLandings.map((city) => ({ region: city.regionSlug, city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, city: citySlug } = await params;
  const city = getCityLanding(region, citySlug);
  if (!city) return { title: "Area non trovata" };
  const url = getCityUrl(city);

  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: url },
    openGraph: { title: city.title, description: city.description, url },
  };
}

export default async function CityPage({ params }: Props) {
  const { region, city: citySlug } = await params;
  const city = getCityLanding(region, citySlug);
  if (!city) notFound();

  const siteUrl = "https://www.nfmedialab.it";
  const cityUrl = `${siteUrl}${getCityUrl(city)}`;
  const regionUrl = `${siteUrl}/dove-operiamo/${city.regionSlug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": cityUrl,
      name: city.title,
      description: city.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      spatialCoverage: { "@type": "City", name: city.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Dove operiamo", item: `${siteUrl}/dove-operiamo` },
        { "@type": "ListItem", position: 3, name: city.regionName, item: regionUrl },
        { "@type": "ListItem", position: 4, name: city.name, item: cityUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><CityContent city={city} /></>;
}
