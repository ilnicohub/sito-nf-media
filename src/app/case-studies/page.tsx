"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  const cases = [
    {
      client: "Symblux S.R.L. (Industriale)",
      sector: "Industria e manifattura",
      title: "Miglioramento Comunicazione digitale e presenza online",
      image: "/case-studies/symblux.webp",
      services: ["Web design", "SEO", "Content strategy"],
      metrics: [
        { value: "+40%", label: "Contatti tramite sito Web" },
        { value: "+25%", label: "Traffico organico" }
      ],
      problem: "Symblux, azienda leader nel settore industriale, aveva un sito web obsoleto e non performante che non riusciva a generare contatti qualificati. La comunicazione digitale era frammentata e inefficace, con un posizionamento SEO praticamente inesistente.",
      solution: "Abbiamo progettato e sviluppato un nuovo sito web moderno, responsive e ottimizzato SEO. Abbiamo implementato una strategia di content marketing focalizzata su case studies e blog post tecnici, oltre a ottimizzare la struttura del sito per migliorare l'indicizzazione sui motori di ricerca."
    },
    {
      client: "FC Calvi Noale (Sportivo)",
      sector: "Sport e community",
      title: "Gestione Social Media e Content Creation",
      image: "/case-studies/fccalvinoale.webp",
      services: ["Social strategy", "Video content", "Advertising"],
      metrics: [
        { value: "900k+", label: "Visualizzazioni mensili" },
        { value: "+300%", label: "Engagement sui social" }
      ],
      problem: "Il club sportivo aveva una presenza sui social media praticamente inesistente, con contenuti poco coinvolgenti e una strategia di comunicazione assente. Questo limitava la crescita della fanbase e l'engagement dei tifosi.",
      solution: "Abbiamo creato una strategia di social media marketing completa, con contenuti originali e coinvolgenti (video highlights, interviste, dietro le quinte). Abbiamo gestito le campagne pubblicitarie sui social per aumentare la visibilità e l'engagement, portando a una crescita esponenziale della fanbase online."
    },
    {
      client: "Euroline S.R.L. (Industriale)",
      sector: "Software e processi",
      title: "Sviluppo gestionale ERP su misura",
      image: "/case-studies/euroline.webp",
      services: ["ERP custom", "Automazione", "Integrazioni"],
      metrics: [
        { value: "-40%", label: "Tempi operativi" },
        { value: "+30%", label: "Efficienza dei processi" }
      ],
      problem: "Euroline, azienda di produzione industriale, utilizzava processi gestionali obsoleti e frammentati che causavano inefficienze operative e difficoltà nella gestione dei dati. Non esisteva un sistema centralizzato per monitorare le operazioni quotidiane.",
      solution: "Abbiamo sviluppato un sistema ERP su misura per le esigenze specifiche di Euroline, integrando moduli per la gestione degli ordini, l'inventario, la contabilità e il CRM. Il nuovo sistema ha centralizzato tutte le operazioni, migliorando significativamente l'efficienza e riducendo i tempi operativi."
    },
    {
      client: "Salone Tamara&Vanessa S.N.C. (Beauty)",
      sector: "Beauty e servizi",
      title: "Miglioramento presenza online e lead generation",
      image: "/case-studies/tamaraevanessa.webp",
      services: ["Sito web", "Lead generation", "Advertising"],
      metrics: [
        { value: "+150%", label: "Richieste di preventivo" },
        { value: "+200%", label: "Visite al sito" }
      ],
      problem: "Il salone di bellezza aveva un sito web datato e non ottimizzato, con una presenza online debole che non riusciva a generare contatti qualificati. La strategia di marketing digitale era praticamente inesistente.",
      solution: "Abbiamo progettato un nuovo sito web moderno e ottimizzato per la conversione. Abbiamo implementato una strategia di marketing digitale focalizzata su campagne pubblicitarie sui social media e Google Ads, oltre a ottimizzare il sito per i motori di ricerca."
    }
  ];

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

      <section className={styles.container}>
        {cases.map((c, idx) => (
          <motion.article
            key={c.client}
            className={`${styles.caseStudy} ${idx % 2 !== 0 ? styles.caseStudyReverse : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.caseVisual}>
              <div className={styles.visualTopline}>
                <span>Case study</span>
                <span>{String(idx + 1).padStart(2, "0")}</span>
              </div>

              <div className={styles.visualStage}>
                <div className={styles.imageFrame}>
                  <Image
                    src={c.image}
                    alt={`Cover del progetto ${c.client}`}
                    className={styles.caseImage}
                    width={600}
                    height={1200}
                    sizes="(max-width: 991px) 72vw, 360px"
                  />
                </div>

                <div className={styles.visualCaption}>
                  <p>{c.sector}</p>
                  <div className={styles.serviceTags}>
                    {c.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.caseContent}>
              <div className={styles.caseHeader}>
                <p className={styles.clientName}>{c.client}</p>
                <h2 className={styles.caseTitle}>{c.title}</h2>
                <div className={styles.metrics}>
                  {c.metrics.map((m, i) => (
                    <div key={i} className={styles.metricItem}>
                      <h4>{m.value}</h4>
                      <p>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.caseBody}>
                <h3>La Sfida</h3>
                <p>{c.problem}</p>
                
                <h3>La Soluzione Ingegneristica</h3>
                <p>{c.solution}</p>
              </div>
            </div>
          </motion.article>
        ))}

        <div className={styles.cta}>
          <h2>Valutiamo il prossimo progetto</h2>
          <p>Condividi obiettivi, criticità e priorità della tua azienda.</p>
          <Link href="/contatti" className="primaryBtn">
            Richiedi un confronto
          </Link>
        </div>
      </section>
    </div>
  );
}
