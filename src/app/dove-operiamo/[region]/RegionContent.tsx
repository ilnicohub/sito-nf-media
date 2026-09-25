"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Region } from "@/data/regions";
import { getCityLandingByName, getCityUrl } from "@/data/cityLandings";
import { territoryCapabilities } from "@/data/territoryCapabilities";
import { trackEvent } from "@/lib/analytics";
import TerritoryLeadSection from "../TerritoryLeadSection";
import styles from "../page.module.css";

export default function RegionContent({ region }: { region: Region }) {
  const trackCta = (position: string, destination: string) => {
    trackEvent("select_content", {
      content_type: "regional_cta",
      item_id: `${region.slug}_${position}`,
      region: region.name,
      destination,
    });
  };

  const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-70px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.p className={styles.eyebrow} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>Dove operiamo · {region.name}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{region.title}</motion.h1>
        <motion.p className={styles.heroIntro} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{region.intro}</motion.p>
        <motion.div className={styles.heroActions} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.65 }}>
          <Link href="#parliamone" className="primaryBtn" onClick={() => trackCta("hero", "inline_form")}>Raccontaci il progetto</Link><Link href="/case-studies" className="secondaryBtn" onClick={() => trackCta("hero", "case_studies")}>Guarda i case study</Link>
        </motion.div>
      </section>

      <TerritoryLeadSection locationName={region.name} locationSlug={region.slug} sourceType="regional" />

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.twoColumns}`}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className={styles.eyebrow}>Contesto</p><h2>{region.contextTitle}</h2>
          </motion.div>
          <motion.div className={styles.longText} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            {region.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </motion.div>
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}><p className={styles.eyebrow}>Imprese e mercati</p><h2>Ambiti in cui il digitale può creare valore</h2></motion.div>
          <div className={styles.infoGrid}>
            {region.sectors.map((sector, index) => <motion.article key={sector.title} className={styles.infoCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }}><span>0{index + 1}</span><h3>{sector.title}</h3><p>{sector.description}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}><p className={styles.eyebrow}>Priorità</p><h2>Come affrontiamo i progetti in {region.name}</h2></motion.div>
          <div className={styles.priorityGrid}>
            {region.priorities.map((priority, index) => <motion.article key={priority.title} className={styles.priority} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.08 }}><CheckCircle2 size={22} /><div><h3>{priority.title}</h3><p>{priority.description}</p></div></motion.article>)}
          </div>
          <motion.div className={styles.cities} {...reveal}><p className={styles.eyebrow}>Aree servite</p><div>{region.cities.map((city, index) => {
            const cityLanding = getCityLandingByName(region.slug, city);
            return <motion.span key={city} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -2, color: "#ffffff", borderColor: "rgba(59,130,246,0.55)", backgroundColor: "rgba(59,130,246,0.08)", transition: { duration: 0.2, delay: 0 } }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.055 }}>{cityLanding ? <Link href={getCityUrl(cityLanding)}>{city}</Link> : city}</motion.span>;
          })}</div></motion.div>
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}><p className={styles.eyebrow}>Competenze</p><h2>Un unico partner, più leve coordinate</h2></motion.div>
          <div className={styles.infoGrid}>
            {territoryCapabilities.map((capability, index) => {
              const dynamicTitles: Record<string, string> = {
                "/servizi/realizzazione-siti-web-nord-italia": `Realizzazione siti web in ${region.name}`,
                "/servizi/sviluppo-gestionali-su-misura": `Software e gestionali per aziende del ${region.name}`,
                "/servizi/seo-e-performance-marketing": `SEO e posizionamento Google in ${region.name}`,
                "/servizi/social-media-management": `Gestione social media in ${region.name}`,
                "/servizi/brand-identity-e-comunicazione": `Agenzia di comunicazione in ${region.name}`,
                "/servizi": `AI e automazione aziendale in ${region.name}`,
              };
              const headingTitle = dynamicTitles[capability.href] || `${capability.title} in ${region.name}`;

              return (
                <motion.article
                  key={capability.title}
                  className={styles.infoCard}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{headingTitle}</h3>
                  <p>{capability.description}</p>
                  <Link href={capability.href} className={styles.cardLink}>Approfondisci <ArrowRight size={18} /></Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}><p className={styles.eyebrow}>FAQ</p><h2>Domande frequenti</h2></motion.div>
          <div className={styles.faqList}>{region.faq.map((item, index) => <motion.article key={item.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: index * 0.06 }}><h3>{item.question}</h3><p>{item.answer}</p></motion.article>)}</div>
        </div>
      </section>

      <section className={styles.cta}><div className={styles.container}><motion.div className={styles.ctaBox} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}><div><p className={styles.eyebrow}>Prossimo passo</p><h2>Valutiamo il tuo progetto in {region.name}</h2><p>Partiamo da obiettivi, situazione attuale e opportunità concrete. Senza formule preconfezionate.</p></div><Link href="#parliamone" className="primaryBtn" onClick={() => trackCta("footer", "inline_form")}>Richiedi un confronto</Link></motion.div></div></section>
    </main>
  );
}
