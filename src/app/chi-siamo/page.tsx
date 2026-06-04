"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import { Target, Zap, ShieldCheck, Search, PenTool, Terminal, LineChart, TrendingUp } from "lucide-react";
import InteractiveSatelliteMap from "@/components/map/InteractiveSatelliteMap";

export default function ChiSiamo() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const methodSteps = [
    {
      icon: <Search size={32} />,
      title: "1. Discovery & Audit",
      desc: "Analizziamo i tuoi dati, i competitor e le inefficienze attuali. Definiamo i KPI (Key Performance Indicators) prima di scrivere una singola riga di codice."
    },
    {
      icon: <PenTool size={32} />,
      title: "2. Architettura & Design",
      desc: "Progettiamo l'infrastruttura software e la User Experience (UX). Un design system su misura che garantisce coerenza e massima scalabilità."
    },
    {
      icon: <Terminal size={32} />,
      title: "3. Sviluppo & Engineering",
      desc: "Scriviamo codice pulito, testato e documentato utilizzando gli stack più performanti (React, Next.js, Node). Nessuna scorciatoia, solo standard enterprise."
    },
    {
      icon: <LineChart size={32} />,
      title: "4. Growth & Ottimizzazione",
      desc: "Il lancio è solo l'inizio. Monitoriamo le conversioni, ottimizziamo i flussi e gestiamo campagne di marketing per massimizzare il tuo R.O.I."
    }
  ];

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          L'Agenzia
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Uniamo ingegneria del software e design di altissimo livello per creare esperienze digitali che convertono.
        </motion.p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <motion.div className={styles.grid} {...fadeIn}>
            <div className={styles.textBlock}>
              <h2>La Nostra Storia</h2>
              <p>Nati nella provincia di Treviso, abbiamo costruito la nostra realtà attorno a un'idea semplice: la tecnologia deve portare risultati. Non ci limitiamo a scrivere codice. Creiamo ecosistemi progettati per scalare e dominare i mercati digitali.</p>
              <p>Oggi collaboriamo con decine di aziende in tutto il Nord Italia, aiutandole a superare le sfide della trasformazione digitale con soluzioni di livello enterprise e processi strutturati.</p>
            </div>
            <div className={styles.imageBlock}>
              <InteractiveSatelliteMap />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuova Sezione Metodologia (B2B Expansion) */}
      <section className={styles.methodSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.methodHeader}
            {...fadeIn}
          >
            <h2>Il Metodo NF Media</h2>
            <p>Un processo ingegneristico testato per minimizzare i rischi e garantire il successo del tuo progetto IT.</p>
          </motion.div>

          <div className={styles.methodGrid}>
            {methodSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                className={styles.methodCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <div className={styles.methodIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.h2 className={styles.valuesTitle} {...fadeIn}>I Nostri Valori</motion.h2>
          <div className={styles.valuesGrid}>
            <motion.div className={styles.valueCard} {...fadeIn} transition={{ delay: 0.1 }}>
              <Target size={32} className={styles.icon} />
              <h3>Risultati Misurabili</h3>
              <p>Ogni nostra azione è orientata al ROI. L'estetica è sempre e solo al servizio della conversione aziendale.</p>
            </motion.div>
            <motion.div className={styles.valueCard} {...fadeIn} transition={{ delay: 0.2 }}>
              <Zap size={32} className={styles.icon} />
              <h3>Innovazione</h3>
              <p>Utilizziamo gli stack tecnologici più moderni e performanti per garantirti un vantaggio competitivo reale sui concorrenti.</p>
            </motion.div>
            <motion.div className={styles.valueCard} {...fadeIn} transition={{ delay: 0.3 }}>
              <ShieldCheck size={32} className={styles.icon} />
              <h3>Affidabilità</h3>
              <p>Codice pulito, comunicazioni trasparenti e scadenze rispettate. Siamo il partner tecnologico di cui puoi fidarti a occhi chiusi.</p>
            </motion.div>
            <motion.div className={styles.valueCard} {...fadeIn} transition={{ delay: 0.4 }}>
              <TrendingUp size={32} className={styles.icon} />
              <h3>Scalabilità</h3>
              <p>Le nostre architetture crescono con la tua azienda. Soluzioni pensate oggi che funzionano perfettamente anche quando raddoppierai i tuoi numeri.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
