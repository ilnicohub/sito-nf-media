"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/data/posts";
import styles from "./page.module.css";

export default function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href={`/blog/${post.slug}`} className={styles.imageLink}>
            <div className={styles.imageWrapper}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.categoryBadge}>{post.category}</div>
            </div>
          </Link>
          <div className={styles.content}>
            <div className={styles.meta}>
              <span>{post.date}</span><span className={styles.dot}>•</span><span>{post.readTime} di lettura</span>
            </div>
            <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
            <p className={styles.intro}>{post.intro}</p>
            <Link href={`/blog/${post.slug}`} className={styles.readMore}>Leggi l&apos;articolo</Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
