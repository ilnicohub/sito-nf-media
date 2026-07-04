"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { CaseStudyDetail as CaseStudyDetailType } from "@/data/caseStudies";
import styles from "./CaseStudyDetail.module.css";

type CaseStudyDetailProps = {
  caseStudy: CaseStudyDetailType;
};

function MetricDonut({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const angle = Math.round((value / 100) * 360);

  return (
    <div className={styles.donutWrap}>
      <div
        className={styles.donut}
        style={{
          background: `conic-gradient(var(--accent-primary) 0deg ${angle}deg, rgba(255, 255, 255, 0.08) ${angle}deg 360deg)`,
        }}
        aria-hidden="true"
      >
        <span>{value}%</span>
      </div>
      <p>{label}</p>
    </div>
  );
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    about: caseStudy.sector,
    creator: {
      "@type": "Organization",
      name: "NF Media Lab",
      url: "https://www.nfmedialab.it",
    },
    client: {
      "@type": "Organization",
      name: caseStudy.client,
    },
    url: `https://www.nfmedialab.it/case-studies/${caseStudy.slug}`,
  };

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/case-studies" className={styles.backLink}>
            <ArrowLeft size={17} aria-hidden="true" />
            Torna ai case study
          </Link>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {caseStudy.sector}
            </motion.p>
            <h1>{caseStudy.title}</h1>
            <p className={styles.intro}>{caseStudy.heroIntro}</p>
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <Link href="/contatti" className="primaryBtn">
                Parla con un consulente
              </Link>
              <Link href="/case-studies" className="secondaryBtn">
                Altri progetti
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...fadeUp}>
            <p className={styles.eyebrow}>Risultati</p>
            <h2>Indicatori chiave del progetto</h2>
            <p>
              Le metriche aiutano a leggere l&apos;impatto del lavoro: non come
              numeri isolati, ma come segnali di una presenza digitale più
              chiara, misurabile e orientata agli obiettivi.
            </p>
          </motion.div>

          <div className={styles.cardGrid}>
            {caseStudy.metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className={styles.metricTop}>
                  <MetricDonut value={metric.chartValue} label={metric.chartLabel} />
                  <p className={styles.metricValue}>{metric.value}</p>
                </div>
                <div className={styles.metricText}>
                  <h2>{metric.label}</h2>
                  <p>{metric.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <motion.div {...fadeUp}>
              <p className={styles.eyebrow}>Contesto</p>
              <h2>Da dove siamo partiti</h2>
              <p className={styles.lead}>{caseStudy.problem}</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <p className={styles.eyebrow}>Direzione</p>
              <h2>Cosa abbiamo costruito</h2>
              <p className={styles.lead}>{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...fadeUp}>
            <p className={styles.eyebrow}>Lavoro svolto</p>
            <h2>Interventi concreti, non attività isolate</h2>
            <p>{caseStudy.overview}</p>
          </motion.div>

          <div className={styles.workGrid}>
            {caseStudy.workDone.map((item, index) => (
              <motion.article
                key={item.title}
                className={styles.workCard}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.detailGrid}>
            <motion.div {...fadeUp}>
              <p className={styles.eyebrow}>Impatto</p>
              <h2>Risultati letti dentro il lavoro reale</h2>
              <div className={styles.impactList}>
                {caseStudy.impact.map((item) => (
                  <div key={item.title} className={styles.impactItem}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside className={styles.sidePanel} {...fadeUp}>
              <p className={styles.eyebrow}>Asset e attività</p>
              <div className={styles.stackList}>
                {caseStudy.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.relatedBlock}>
                <h3>Servizi collegati</h3>
                {caseStudy.relatedServices.map((service) => (
                  <Link key={service.href} href={service.href}>
                    {service.label}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div className={styles.ctaContent} {...fadeUp}>
            <div>
              <p className={styles.eyebrow}>Prossimo passo</p>
              <h2>Un progetto simile può partire anche dalla tua azienda</h2>
              <p>{caseStudy.nextStep}</p>
            </div>
            <Link href="/contatti" className="primaryBtn">
              Richiedi un confronto
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
