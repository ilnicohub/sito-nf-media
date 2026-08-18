"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function BlogHeader() {
  return (
    <section className={styles.header}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Insights &amp; Blog
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
  );
}
