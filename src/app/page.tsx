"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, RefreshCw, Code2, Share2, Settings, TrendingUp, Bot, Sparkles} from "lucide-react";
import styles from "./page.module.css";
import Hero3D from "@/components/3d/Hero3D";

export default function Home() {
  const services = [
    {
      title: "Realizzazione Siti Web",
      desc: "Siti corporate, e-commerce e portfolio professionali. Design moderno, responsive e ottimizzato per le conversioni.",
      icon: <Globe size={32} strokeWidth={1.5} />,
    },
    {
      title: "Restyling Siti Web",
      desc: "Modernizziamo il tuo sito esistente. Miglioriamo UX, performance, design e SEO per risultati concreti.",
      icon: <RefreshCw size={32} strokeWidth={1.5} />,
    },
    {
      title: "Sviluppo Web App",
      desc: "Applicazioni web custom e progressive. Soluzioni scalabili per automazione e gestione dei processi aziendali.",
      icon: <Code2 size={32} strokeWidth={1.5} />,
    },
    {
      title: "Gestionali su Misura",
      desc: "ERP e software gestionale personalizzato. Architetture robuste per gestione inventario, fatturazione, CRM e molto altro.",
      icon: <Settings size={32} strokeWidth={1.5} />,
    },
    {
      title: "Gestione Social Media",
      desc: "Strategie social complete. Content planning, community management e campagne mirate sui canali aziendali.",
      icon: <Share2 size={32} strokeWidth={1.5} />,
    }, 
    {
      title: "SEO & Growth Marketing",
      desc: "Posizionamento organico e campagne di acquisizione. Ottimizziamo la tua presenza online per massimizzare il ROI.",
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
    }
  ];

  const logos = ["FC CALVI NOALE", "SALONE TAMARA&VANESSA S.N.C.", "CABO STAMPI S.R.L.", "ITALSAMPLE S.R.L.","SYMBLUX S.R.L." ,"EUROLINE S.R.L.", "ALUPRO S.P.A."];
  // Duplicate for seamless infinite scroll
  const marqueeLogos = [...logos, ...logos];

  const testimonials = [
    {
      quote: "Marketing e sito web completamente rinnovati. In soli 3 mesi abbiamo visto un aumento del 150% nelle richieste di preventivo. Consigliatissimi.",
      author: "Alessandro B.",
      role: "CEO, Cabo Stampi S.R.L.",
      initial: "A"
    },
    {
      quote: "Campagne Marketing e gestione social che hanno portato a un incremento del 200% del traffico organico. Il team è super professionale e sempre disponibile.",
      author: "Lorenzo S.",
      role: "CEO, Euroline S.R.L.",
      initial: "L"
    }, 
    {
      quote: "Il nuovo sito web ha completamente trasformato la nostra presenza online. Design moderno, performance top e un aumento del 120% nelle conversioni.",
      author: "Asja M.",
      role: "Marketing Manager, Symblux S.R.L.",
      initial: "A"
    }, 
    {
      quote: "Sviluppo gestionale su misura che ha rivoluzionato i nostri processi interni. L'efficienza è aumentata del 30% e abbiamo ridotto gli errori del 50%.",
      author: "Anna C.",
      role: "Salone Tamara&Vanessa S.N.C.",
      initial: "A"
    }
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Hero3D />
        
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Ingegneria <span className="text-gradient">Digitale</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Realizziamo siti web, gestionali e strategie di comunicazione per aziende che vogliono scalare nel digitale con soluzioni concrete e risultati misurabili.
          </motion.p>
          
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/contatti" className="primaryBtn">
              Richiedi Consulenza
            </Link>
            <Link href="/case-studies" className="secondaryBtn">
              Vedi i Progetti
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Logo Ticker (Social Proof) */}
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

      {/* Services Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Competenze
          </motion.h2>
          <p className={styles.sectionDesc}>
            Offriamo soluzioni end-to-end. Dallo sviluppo dell'architettura alla scalabilità del mercato.
          </p>

          <div className={styles.servicesGrid}>
            {services.map((srv, idx) => (
              <motion.div 
                key={idx}
                className={styles.serviceCard}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={styles.serviceIcon}>{srv.icon}</div>
                <h3 className={styles.serviceTitle}>{srv.title}</h3>
                <p className={styles.serviceText}>{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*Intelligenza Artificiale Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Intelligenza Artificiale
          </motion.h2>
          <p className={styles.sectionDesc}>
            Sfruttiamo l'AI per potenziare le tue strategie digitali. Dall'automazione dei processi alla personalizzazione avanzata, portiamo la tua azienda nel futuro.
          </p>

          <div className={styles.aiGrid}>
            <motion.div 
              className={styles.aiCard}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay:  0.1 }}
            >
              <div className={styles.aiIcon}><Bot size={32} strokeWidth={1.5} /></div>
              <h3 className={styles.aiTitle}>Automazione Intelligente</h3>
              <p className={styles.aiText}>Riduci i costi operativi e aumenta l'efficienza con soluzioni di automazione basate su AI.</p>
            </motion.div>
            <motion.div 
              className={styles.aiCard}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay:  0.2 }}
            >
              <div className={styles.aiIcon}><Sparkles size={32} strokeWidth={1.5} /></div>
              <h3 className={styles.aiTitle}>Personalizzazione Avanzata</h3>
              <p className={styles.aiText}>Offri esperienze su misura ai tuoi clienti con strategie di personalizzazione basate su AI.</p>
            </motion.div>
          </div>
        </div>
      </section>

{/* AVIVX */}
<section className={styles.avivxSection}>
  <div className={styles.container}>

    <motion.div
      className={styles.avivxHeader}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className={styles.avivxEyebrow}>Il nostro prodotto di punta</span>
      <h2 className={styles.avivxTitle}>
        Ti presentiamo <em>AVIVX</em>
      </h2>
      <p className={styles.avivxDesc}>
        Il gestionale su misura progettato specificamente per saloni di
        parrucchieri e centri estetici. Tutto ciò che serve per gestire il
        tuo salone, in un'unica piattaforma.
      </p>
    </motion.div>

    <div className={styles.avivxSplit}>

      {/* Testo + features */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <ul className={styles.avivxFeaturesList}>
          {[
            {
              label: "Appuntamenti intelligenti",
              desc: "Calendario visivo con promemoria automatici via SMS ed email.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              label: "Inventario & riordino",
              desc: "Controllo scorte in tempo reale con soglie di alert personalizzabili.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              ),
            },
            {
              label: "Fatturazione semplificata",
              desc: "Emetti documenti fiscali e accedi a report dettagliati in pochi click.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              label: "CRM integrato",
              desc: "Profilo cliente completo, storico trattamenti e campagne fedeltà.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((f, i) => (
            <motion.li
              key={f.label}
              className={styles.avivxFeatureItem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={styles.avivxFeatureIcon}>{f.icon}</span>
              <div>
                <strong className={styles.avivxFeatureLabel}>{f.label}</strong>
                <p className={styles.avivxFeatureDesc}>{f.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className={styles.avivxCta}>
          <a href="https://www.avivxgestionale.it/" className={styles.avivxCtaPrimary}>
            Scopri AVIVX
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="https://www.avivxgestionale.it/#contatto" className={styles.avivxCtaSecondary}>
            Richiedi una demo
          </a>
        </div>
      </motion.div>

      {/* Screenshots */}
      <motion.div
        className={styles.avivxScreenshotsCol}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.avivxScreenshotMain}>
          <div className={styles.avivxBrowserBar}>
            <span className={styles.avivxDot} />
            <span className={styles.avivxDot} />
            <span className={styles.avivxDot} />
            <span className={styles.avivxUrlBar}>avivx.app/dashboard</span>
          </div>
          <img
            src="/avivx-dashboard.png"
            alt="AVIVX — Dashboard principale"
            className={styles.avivxScreenshot}
            width={760}
            height={480}
          />
        </div>

        <div className={styles.avivxScreenshotFloat}>
          <img
            src="/avivx-calendar.png"
            alt="AVIVX — Calendario appuntamenti"
            className={styles.avivxScreenshot}
            width={340}
            height={220}
          />
        </div>

        <div className={styles.avivxStatBadge}>
          <span className={styles.avivxStatNumber}>+38%</span>
          <span className={styles.avivxStatLabel}>clienti fidelizzati</span>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/*3D Interactive Section*/}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Esperienza Interattiva
          </motion.h2>
          <p className={styles.sectionDesc}>
            Esplora il nostro processo creativo attraverso un modello 3D interattivo. Scopri come trasformiamo le idee in soluzioni digitali concrete.
          </p>
          <div className={styles.interactive3D}>
            <Hero3D />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dicono di Noi
          </motion.h2>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((test, i) => (
              <motion.div 
                key={i} 
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <p className={styles.quote}>"{test.quote}"</p>
                <div className={styles.author}>
                  <div className={styles.authorAvatar}>{test.initial}</div>
                  <div className={styles.authorInfo}>
                    <h4>{test.author}</h4>
                    <p>{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO / Territory Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.territoryContent}>
            <motion.div 
              className={styles.territoryText}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Operatività nel Nord Italia</h2>
              <p>
                Il nostro Headquarter è a Treviso. Progettiamo e sviluppiamo da qui l'infrastruttura tecnologica e le campagne marketing per aziende leader in tutto il Nord Italia, garantendo standard qualitativi assoluti.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.territoryStats}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.statItem}>
                <h4>150%</h4>
                <p>Media Incremento ROI</p>
              </div>
              <div className={styles.statItem}>
                <h4>100%</h4>
                <p>Codice Proprietario</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
