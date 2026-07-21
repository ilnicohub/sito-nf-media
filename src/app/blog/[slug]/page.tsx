import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "@/data/posts";
import type { Metadata } from "next";

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
    title: `${post.title} | Blog NF Media Lab`,
    description: post.intro,
    openGraph: {
      title: post.title,
      description: post.intro,
      type: "article",
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

  return (
    <article className={styles.main}>
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

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div>
              <p className={styles.eyebrow}>Prossimo passo</p>
              <h2>Un progetto simile può partire anche dalla tua azienda</h2>
              <p>Desideri rinnovare il tuo sito e ottenere risultati concreti in tempi rapidi? Possiamo valutare insieme la strategia più adatta al tuo settore.</p>
            </div>
            <Link href="/contatti" className={`primaryBtn ${styles.ctaBtn}`}>
              Richiedi un confronto
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

