"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  const logos = [
    "FC CALVI NOALE",
    "SALONE TAMARA&VANESSA S.N.C.",
    "CABO STAMPI S.R.L.",
    "ITALSAMPLE S.R.L.",
    "SYMBLUX S.R.L.",
    "EUROLINE S.R.L.",
    "ALUPRO S.P.A.",
  ];
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          I Nostri Progetti
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Non parliamo per concetti astratti. Parliamo attraverso l&apos;impatto reale che il nostro software e le nostre strategie generano per i clienti.
        </motion.p>
      </section>

      <section className={styles.tickerSection}>
        <p className={styles.tickerTitle}>Scelti dalle migliori aziende del Nord Italia</p>
        <div className={styles.tickerContainer}>
          <div className={styles.tickerTrack}>
            {marqueeLogos.map((logo, index) => (
              <div key={index} className={styles.tickerItem}>{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.container}>
        {caseStudies.map((c, idx) => (
          <motion.article
            key={c.client}
            className={`${styles.caseStudy} ${idx % 2 !== 0 ? styles.caseStudyReverse : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className={styles.caseVisual}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -34 : 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className={styles.visualTopline}>
                <span>Case study</span>
                <span>{String(idx + 1).padStart(2, "0")}</span>
              </div>

              <div className={styles.visualStage}>
                <motion.div
                  className={styles.imageFrame}
                  initial={{ opacity: 0, scale: 0.92, rotate: idx % 2 === 0 ? -4 : 4 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: idx % 2 === 0 ? -1.5 : 1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.2 }}
                >
                  <Image
                    src={c.image}
                    alt={`Cover del progetto ${c.client}`}
                    className={styles.caseImage}
                    width={600}
                    height={1200}
                    sizes="(max-width: 991px) 72vw, 360px"
                  />
                </motion.div>

                <div className={styles.visualCaption}>
                  <p>{c.sector}</p>
                  <div className={styles.serviceTags}>
                    {c.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className={styles.caseContent}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 34 : -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              <div className={styles.caseHeader}>
                <p className={styles.clientName}>{c.client}</p>
                <h2 className={styles.caseTitle}>{c.listingTitle}</h2>
                <div className={styles.metrics}>
                  {c.metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      className={styles.metricItem}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.28 + i * 0.1 }}
                    >
                      <p className={styles.metricValue}>{m.value}</p>
                      <p>{m.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                className={styles.caseBody}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.34 }}
              >
                <h3>La Sfida</h3>
                <p>{c.problem}</p>
                
                <h3>La Soluzione Ingegneristica</h3>
                <p>{c.solution}</p>
                <Link
                  href={`/case-studies/${c.slug}`}
                  className={styles.caseLink}
                >
                  Leggi il case study
                </Link>
              </motion.div>
            </motion.div>
          </motion.article>
        ))}

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Valutiamo il prossimo progetto</h2>
          <p>Condividi obiettivi, criticità e priorità della tua azienda.</p>
          <Link href="/contatti" className="primaryBtn">
            Richiedi un confronto
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
