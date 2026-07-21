"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export default function BlogIndex() {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Insights & Blog
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Approfondimenti, strategie e visioni sul futuro del software, dell’intelligenza artificiale e del marketing digitale.
        </motion.p>
      </section>

      <section className={styles.container}>
        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                  <span>{post.date}</span>
                  <span className={styles.dot}>•</span>
                  <span>{post.readTime} di lettura</span>
                </div>
                <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                </Link>
                <p className={styles.intro}>{post.intro}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Leggi l'articolo
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
