"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Handshake, Workflow } from "lucide-react";
import { regions } from "@/data/regions";
import styles from "./page.module.css";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
};

const collaboration = [
  {
    icon: Building2,
    title: "Una sede reale",
    text: "NF Media Lab ha sede a Vedelago, in provincia di Treviso. È da qui che coordiniamo strategia, design, sviluppo e attività di crescita.",
  },
  {
    icon: Handshake,
    title: "Confronto diretto",
    text: "Organizziamo incontri in presenza quando sono utili al progetto e manteniamo un referente chiaro durante tutto il lavoro.",
  },
  {
    icon: Workflow,
    title: "Processo condiviso",
    text: "Attività, decisioni e risultati vengono gestiti con strumenti digitali, scadenze definite e avanzamenti verificabili.",
  },
];

export default function TerritoryHub() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.p className={styles.eyebrow} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Dove operiamo
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Radicati a Vedelago, Treviso.<br />Operativi nel Nord Italia.
        </motion.h1>
        <motion.p className={styles.heroIntro} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Affianchiamo aziende di territori diversi con un metodo che combina confronto diretto, competenze specialistiche e continuità operativa.
        </motion.p>
      </section>

      <section className={styles.statementSection}>
        <div className={styles.container}>
          <motion.div className={styles.editorialIntro} {...reveal}>
            <p className={styles.eyebrow}>Il nostro approccio</p>
            <p>La vicinanza non è una lista di città. È la capacità di comprendere l’azienda, essere presenti nei momenti decisivi e portare avanti il progetto con responsabilità.</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}>
            <p className={styles.eyebrow}>Territori principali</p>
            <h2>Aree in cui operiamo</h2>
            <p>La nostra sede è a Vedelago, in provincia di Treviso. Le regioni seguenti rappresentano le aree in cui proponiamo e gestiamo i nostri servizi, anche attraverso collaborazioni a distanza.</p>
          </motion.div>

          <div className={styles.territoryList}>
            {regions.map((region, index) => (
              <motion.article
                key={region.slug}
                className={styles.territoryRow}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <span className={styles.territoryNumber}>0{index + 1}</span>
                <div className={styles.territoryName}>
                  <h2>{region.name}</h2>
                  <div className={styles.territoryCities}>{region.cities.slice(0, 4).map((city) => <span key={city}>{city}</span>)}</div>
                </div>
                <p>{region.shortDescription}</p>
                <Link href={`/dove-operiamo/${region.slug}`} aria-label={`Scopri come operiamo in ${region.name}`}>
                  Approfondisci <ArrowUpRight size={18} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}>
            <p className={styles.eyebrow}>Collaborazione</p>
            <h2>Un metodo pensato per lavorare bene, anche a distanza</h2>
          </motion.div>
          <div className={styles.modelGrid}>
            {collaboration.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} className={styles.modelCard} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.62, delay: index * 0.08 }}>
                  <Icon size={28} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div className={styles.ctaBox} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div><p className={styles.eyebrow}>Parliamo del progetto</p><h2>Prima gli obiettivi. Poi la distanza.</h2><p>Valutiamo ogni collaborazione in base alle esigenze dell’azienda e alle competenze necessarie.</p></div>
            <Link href="/contatti" className="primaryBtn">Richiedi un confronto</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
