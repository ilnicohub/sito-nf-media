import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/posts";
import { regions } from "@/data/regions";

const siteUrl = "https://www.nfmedialab.it";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/servizi`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servizi/realizzazione-siti-web-nord-italia`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servizi/sviluppo-gestionali-su-misura`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servizi/seo-e-performance-marketing`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servizi/brand-identity-e-comunicazione`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/servizi/social-media-management`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/servizi/data-analytics-e-tracking`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/case-studies`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudies.map((caseStudy) => ({
      url: `${siteUrl}/case-studies/${caseStudy.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    {
      url: `${siteUrl}/chi-siamo`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contatti`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/metodo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/dove-operiamo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...regions.map((region) => ({
      url: `${siteUrl}/dove-operiamo/${region.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
