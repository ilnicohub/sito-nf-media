"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, LayoutTemplate, Megaphone, Palette, Search, CheckCircle2 } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Servizi() {
  const services = [
    {
      id: "sviluppo",
      title: "Software Development",
      icon: <Code2 size={40} strokeWidth={1.5} />,
      desc: "Ingegnerizziamo architetture software scalabili e sicure. Sistemi gestionali (ERP/CRM), piattaforme cloud e applicazioni mobile costruite sui più alti standard di mercato.",
      features: ["Microservizi e Cloud Architecture", "iOS & Android Native", "API Development & Integration", "Automazione Processi"],
      href: "/servizi/sviluppo-gestionali-su-misura",
      linkLabel: "Approfondisci il servizio",
    },
    {
      id: "web",
      title: "Web Platforms",
      icon: <LayoutTemplate size={40} strokeWidth={1.5} />,
      desc: "Nessun template. Sviluppiamo piattaforme web ed e-commerce ad alte prestazioni focalizzate sulla user experience (UX) e sulla conversion rate optimization (CRO).",
      features: ["React & Next.js Ecosystem", "Performance Optimization (CWV)", "E-Commerce Headless", "Design System Custom"],
      href: "/servizi/realizzazione-siti-web-nord-italia",
      linkLabel: "Approfondisci il servizio",
    },
    {
      id: "marketing",
      title: "Growth & SEO",
      icon: <Search size={40} strokeWidth={1.5} />,
      desc: "Trasformiamo il traffico in fatturato. Posizionamento organico leader di settore (SEO) e campagne di acquisizione scalabili (PPC) per aziende ambiziose.",
      features: ["SEO Enterprise (Local & National)", "Google Ads & Social Ads", "Data Analytics & Tracking", "Marketing Automation"],
      href: "/servizi/seo-e-performance-marketing",
      linkLabel: "Approfondisci il servizio",
    },
    {
      id: "comunicazione",
      title: "Brand Identity",
      icon: <Palette size={40} strokeWidth={1.5} />,
      desc: "Costruiamo l'autorità del tuo marchio. Un'identità visiva e un copywriting incisivo per comunicare in modo inequivocabile il tuo valore differenziante.",
      features: ["Corporate Identity", "Copywriting Persuasivo", "Digital PR", "Direzione Creativa"],
      href: "/servizi/brand-identity-e-comunicazione",
      linkLabel: "Approfondisci il servizio",
    },
    {
      id: "social",
      title: "Social Media Management",
      icon: <Megaphone size={40} strokeWidth={1.5} />,
      desc: "Trasformiamo l'attenzione in fatturato. Non pubblichiamo post casuali, ma creiamo vere community e funnel di conversione attraverso contenuti nativi.",
      features: ["Content Creation", "Content Strategy", "Video Marketing", "Community Management", "Social Funnels"],
      href: "/servizi/social-media-management",
      linkLabel: "Approfondisci il servizio",
    },
    {
      id: "data",
      title: "Data Analytics",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      desc: "Senza dati si naviga alla cieca. Implementiamo dashboard e sistemi di tracciamento Server-Side per avere il polso esatto del tuo business.",
      features: ["Server-Side Tracking", "Data Visualization", "Conversion Rate Optimization", "Business Intelligence"],
      href: "/servizi/data-analytics-e-tracking",
      linkLabel: "Approfondisci il servizio",
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
          Servizi e Competenze
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Tutto ciò che serve per dominare il mercato digitale, con un approccio ingegneristico e orientato al risultato.
        </motion.p>
      </section>

      <section className={styles.servicesList}>
        <div className={styles.container}>
          {services.map((srv) => (
            <div key={srv.id} id={srv.id} className={styles.serviceRow}>
              <motion.div 
                className={styles.serviceContent}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={styles.iconWrapper}>{srv.icon}</div>
                <h2>{srv.title}</h2>
                <p className={styles.desc}>{srv.desc}</p>
                <ul className={styles.featureList}>
                  {srv.features.map((feat, i) => (
                    <li key={i}><CheckCircle2 size={16} className={styles.check} /> {feat}</li>
                  ))}
                </ul>
                {srv.href && (
                  <Link href={srv.href} className={styles.serviceLink}>
                    {srv.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </motion.div>
              <motion.div 
                className={styles.serviceVisual}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={styles.visualPlaceholder}>
                  {srv.title.toUpperCase()}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Inizia il Tuo Progetto</h2>
            <p>Prenota una consulenza strategica per analizzare le tue necessità.</p>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/contatti" className="primaryBtn">
                Parla con un Esperto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
