import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "@/data/posts";
import { caseStudies } from "@/data/caseStudies";
import type { Metadata } from "next";

const siteUrl = "https://www.nfmedialab.it";
const serviceByCategory: Record<string, { label: string; href: string }> = {
  SEO: { label: "SEO e performance marketing", href: "/servizi/seo-e-performance-marketing" },
  "SEO & GEO": { label: "SEO e performance marketing", href: "/servizi/seo-e-performance-marketing" },
  "Sviluppo Web": { label: "Realizzazione siti web", href: "/servizi/realizzazione-siti-web-nord-italia" },
  "Social Media": { label: "Social media management", href: "/servizi/social-media-management" },
  Software: { label: "Sviluppo gestionali su misura", href: "/servizi/sviluppo-gestionali-su-misura" },
  Digitalizzazione: { label: "Sviluppo gestionali su misura", href: "/servizi/sviluppo-gestionali-su-misura" },
  "Marketing Automation": { label: "Data analytics e tracking", href: "/servizi/data-analytics-e-tracking" },
  "Digital Strategy": { label: "SEO e performance marketing", href: "/servizi/seo-e-performance-marketing" },
};

function toIsoDate(date: string) {
  const months: Record<string, string> = {
    Gennaio: "01", Febbraio: "02", Marzo: "03", Aprile: "04", Maggio: "05", Giugno: "06",
    Luglio: "07", Agosto: "08", Settembre: "09", Ottobre: "10", Novembre: "11", Dicembre: "12",
  };
  const [day, month, year] = date.split(" ");
  return `${year}-${months[month]}-${day.padStart(2, "0")}`;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Post non trovato" };
  }

  return {
    title: post.title,
    description: post.intro,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.intro,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: toIsoDate(post.date),
      images: [post.image],
    },
  };
}

export function generateStaticParams() {
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const relatedService = serviceByCategory[post.category] ?? serviceByCategory["Digital Strategy"];
  const relatedCaseStudy = caseStudies.find((study) =>
    study.relatedServices.some((service) => service.href === relatedService.href),
  ) ?? caseStudies[0];
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.intro,
    image: `${siteUrl}${post.image}`,
    datePublished: toIsoDate(post.date),
    dateModified: toIsoDate(post.date),
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: { "@type": "Organization", name: "NF Media Lab", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "NF Media Lab",
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.png` },
    },
  };

  return (
    <article className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>
            ← Torna al Blog
          </Link>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} di lettura</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
      </header>

      <div className={styles.heroImageContainer}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className={styles.image}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.intro}>{post.intro}</p>
          
          {post.content.map((block, idx) => {
            switch (block.type) {
              case "h2":
                return <h2 key={idx} dangerouslySetInnerHTML={{ __html: block.value }} />;
              case "h3":
                return <h3 key={idx} dangerouslySetInnerHTML={{ __html: block.value }} />;
              case "p":
                return <p key={idx} dangerouslySetInnerHTML={{ __html: block.value }} />;
              case "image":
                return (
                  <figure key={idx} className={styles.inlineFigure}>
                    <Image
                      src={block.value}
                      alt={block.alt || "Immagine dell'articolo"}
                      width={800}
                      height={500}
                      className={styles.inlineImage}
                    />
                    {block.alt && <figcaption>{block.alt}</figcaption>}
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>

      <section className={styles.related} aria-labelledby="related-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>Approfondisci</p>
          <h2 id="related-title">Risorse collegate</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className={styles.relatedCard}>
                <span>{relatedPost.category}</span>
                <strong>{relatedPost.title}</strong>
              </Link>
            ))}
            <Link href={relatedService.href} className={styles.relatedCard}>
              <span>Servizio</span>
              <strong>{relatedService.label}</strong>
            </Link>
            <Link href={`/case-studies/${relatedCaseStudy.slug}`} className={styles.relatedCard}>
              <span>Case study</span>
              <strong>{relatedCaseStudy.listingTitle}</strong>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div>
              <p className={styles.eyebrow}>Prossimo passo</p>
              <h2>Un progetto simile può partire anche dalla tua azienda</h2>
              <p>Vuoi capire se questa strategia è adatta al tuo settore? Analizziamo insieme la tua situazione attuale e i risultati concreti che potresti ottenere.</p>
            </div>
            <Link href="/contatti" className="primaryBtn">
              Richiedi un confronto
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
