"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { CityLanding } from "@/data/cityLandings";
import { cityLandings, getCityUrl } from "@/data/cityLandings";
import { territoryCapabilities } from "@/data/territoryCapabilities";
import { trackEvent } from "@/lib/analytics";
import InteractiveSatelliteMap from "@/components/map/InteractiveSatelliteMap";
import TerritoryLeadSection from "../../TerritoryLeadSection";
import styles from "../../page.module.css";

export default function CityContent({ city }: { city: CityLanding }) {
  const siblingCities = cityLandings.filter(
    (candidate) => candidate.regionSlug === city.regionSlug && candidate.slug !== city.slug,
  );

  const trackCta = (position: string, destination: string) => {
    trackEvent("select_content", {
      content_type: "city_cta",
      item_id: `${city.regionSlug}_${city.slug}_${position}`,
      city: city.name,
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
        <motion.p className={styles.eyebrow} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Dove operiamo · {city.regionName} · {city.name}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          {city.title}
        </motion.h1>
        <motion.p className={styles.heroIntro} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          {city.intro}
        </motion.p>
        <motion.div className={styles.heroActions} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.65 }}>
          <Link href="#parliamone" className="primaryBtn" onClick={() => trackCta("hero", "inline_form")}>Raccontaci il progetto</Link>
          <Link href="/case-studies" className="secondaryBtn" onClick={() => trackCta("hero", "case_studies")}>Guarda i case study</Link>
        </motion.div>
      </section>

      <TerritoryLeadSection locationName={city.name} locationSlug={`${city.regionSlug}-${city.slug}`} sourceType="city" />

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <motion.div {...reveal}>
              <p className={styles.eyebrow}>Territorio e obiettivi</p>
              <h2>{city.contextTitle}</h2>
            </motion.div>
            <motion.div className={styles.longText} {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
              {city.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </motion.div>
          </div>
          <motion.div className={styles.territoryMap} {...reveal}>
            <div className={styles.territoryMapIntro}>
              <div><p className={styles.eyebrow}>Coordinate reali</p><h3>{city.map.label}</h3></div>
              <p>{city.map.description}</p>
            </div>
            <div className={styles.territoryMapViewport}>
              <InteractiveSatelliteMap key={city.slug} latitude={city.map.latitude} longitude={city.map.longitude} beaconName="AREA DI RIFERIMENTO" beaconCity={city.name} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}>
            <p className={styles.eyebrow}>Ambiti</p>
            <h2>Dove il digitale può creare valore per le realtà di {city.name}</h2>
          </motion.div>
          <div className={styles.infoGrid}>
            {city.sectors.map((sector, index) => (
              <motion.article key={sector.title} className={styles.infoCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }}>
                <span>0{index + 1}</span>
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}>
            <p className={styles.eyebrow}>Servizi e competenze</p>
            <h2>Cosa possiamo fare per la tua azienda a {city.name}</h2>
            <p>{city.proofs && city.proofs.length > 0 ? "I case study territoriali dimostrano esperienze specifiche; il tuo progetto può però coinvolgere tutte le nostre competenze, coordinate in base all’obiettivo." : "Analizziamo il tuo obiettivo e coordiniamo soltanto le competenze necessarie, dalla strategia allo sviluppo fino alla misurazione dei risultati."}</p>
          </motion.div>
          <div className={styles.infoGrid}>
            {territoryCapabilities.map((capability, index) => {
              const dynamicTitles: Record<string, string> = {
                "/servizi/realizzazione-siti-web-nord-italia": `Realizzazione siti web a ${city.name}`,
                "/servizi/sviluppo-gestionali-su-misura": `Software e gestionali a ${city.name}`,
                "/servizi/seo-e-performance-marketing": `SEO e posizionamento Google a ${city.name}`,
                "/servizi/social-media-management": `Gestione social media a ${city.name}`,
                "/servizi/brand-identity-e-comunicazione": `Agenzia di comunicazione a ${city.name}`,
                "/servizi": `AI e automazione aziendale a ${city.name}`,
              };
              const headingTitle = dynamicTitles[capability.href] || `${capability.title} a ${city.name}`;

              return (
                <motion.article key={capability.title} className={styles.infoCard} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.06 }}>
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

      {city.proofs && city.proofs.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <motion.div className={styles.sectionHeading} {...reveal}>
              <p className={styles.eyebrow}>Esperienza nel territorio</p>
              <h2>Progetti reali, non una presenza dichiarata</h2>
              <p>Esperienze collegate a {city.name} e alla sua area, con attività e risultati verificabili.</p>
            </motion.div>
            <div className={styles.regionGrid}>
              {city.proofs.map((proof, index) => (
                <motion.article key={`${proof.client}-${proof.title}`} className={styles.regionCard} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.08 }}>
                  <span className={styles.proofClient}>{proof.client}</span>
                  <h2>{proof.title}</h2>
                  <p>{proof.description}</p>
                  {proof.metric && <strong className={styles.proofMetric}>{proof.metric}</strong>}
                  {proof.href && <Link href={proof.href} className={styles.cardLink}>Approfondisci il case study <ArrowRight size={18} /></Link>}
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}>
            <p className={styles.eyebrow}>Metodo</p>
            <h2>Come affrontiamo i progetti a {city.name}</h2>
          </motion.div>
          <div className={styles.priorityGrid}>
            {city.priorities.map((priority, index) => (
              <motion.article key={priority.title} className={styles.priority} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.08 }}>
                <CheckCircle2 size={22} />
                <div><h3>{priority.title}</h3><p>{priority.description}</p></div>
              </motion.article>
            ))}
          </div>
          <motion.div className={styles.cities} {...reveal}>
            <p className={styles.eyebrow}>Aree vicine servite</p>
            <div>{city.nearbyAreas.map((area) => <span key={area}>{area}</span>)}</div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}>
            <p className={styles.eyebrow}>Territorio</p>
            <h2>Esplora le aree collegate</h2>
          </motion.div>
          <div className={styles.serviceLinks}>
            <Link href={`/dove-operiamo/${city.regionSlug}`}>{city.regionName} <ArrowRight size={18} /></Link>
            {siblingCities.map((sibling) => <Link href={getCityUrl(sibling)} key={sibling.slug}>{sibling.name} <ArrowRight size={18} /></Link>)}
          </div>
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...reveal}><p className={styles.eyebrow}>FAQ</p><h2>Domande frequenti</h2></motion.div>
          <div className={styles.faqList}>
            {city.faq.map((item, index) => <motion.article key={item.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: index * 0.06 }}><h3>{item.question}</h3><p>{item.answer}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div className={styles.ctaBox} {...reveal}>
            <div><p className={styles.eyebrow}>Prossimo passo</p><h2>Valutiamo il tuo progetto a {city.name}</h2><p>Partiamo da obiettivi, situazione attuale e opportunità concrete. Senza formule preconfezionate.</p></div>
            <Link href="#parliamone" className="primaryBtn" onClick={() => trackCta("footer", "inline_form")}>Richiedi un confronto</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
