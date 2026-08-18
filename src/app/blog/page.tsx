import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";
import { posts } from "@/data/posts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogHeader from "./BlogHeader";
import BlogGrid from "./BlogGrid";

const postsPerPage = 6;

type Props = { searchParams: Promise<{ page?: string | string[] }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const requestedPage = Number((await searchParams).page ?? "1");
  const currentPage = Number.isInteger(requestedPage) && requestedPage > 1 ? requestedPage : 1;
  const canonical = currentPage === 1 ? "/blog" : `/blog?page=${currentPage}`;

  return {
    title: currentPage === 1 ? "Blog: SEO, Web e Marketing" : `Blog: SEO, Web e Marketing — Pagina ${currentPage}`,
    description: "Guide pratiche su SEO, siti web, software e marketing digitale per trasformare la visibilità online in richieste commerciali.",
    alternates: { canonical },
    openGraph: {
      title: currentPage === 1 ? "Blog NF Media Lab" : `Blog NF Media Lab — Pagina ${currentPage}`,
      description: "Strategie e guide per aumentare visibilità, traffico qualificato e conversioni.",
      url: canonical,
      type: "website",
    },
  };
}

export default async function BlogIndex({ searchParams }: Props) {
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const requestedPage = Number((await searchParams).page ?? "1");
  const currentPage = Number.isInteger(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;
  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const pageHref = (page: number) => (page === 1 ? "/blog" : `/blog?page=${page}`);

  return (
    <div className={styles.main}>
      <BlogHeader />

      <section className={styles.container}>
        <BlogGrid posts={currentPosts} />

        {totalPages > 1 && (
          <nav className={styles.pagination} aria-label="Paginazione del blog">
            {currentPage > 1 ? <Link className={styles.pageButton} href={pageHref(currentPage - 1)}><ArrowLeft size={18} /> Precedente</Link> : <span className={`${styles.pageButton} ${styles.disabled}`}><ArrowLeft size={18} /> Precedente</span>}
            <span className={styles.pageInfo}>Pagina {currentPage} di {totalPages}</span>
            {currentPage < totalPages ? <Link className={styles.pageButton} href={pageHref(currentPage + 1)}>Successiva <ArrowRight size={18} /></Link> : <span className={`${styles.pageButton} ${styles.disabled}`}>Successiva <ArrowRight size={18} /></span>}
          </nav>
        )}
      </section>
    </div>
  );
}
