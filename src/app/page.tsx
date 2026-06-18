"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, RefreshCw, Code2, Share2, Settings, TrendingUp, Bot, Sparkles, Eye, Network } from "lucide-react";
import styles from "./page.module.css";
import Hero3D from "@/components/3d/Hero3D";
import HeadsetVRScene from "@/components/3d/HeadsetVRScene"

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


      {/*VR/AR Section*/}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.vrHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Realtà Virtuale e Aumentata</h2>
            <p>
              Esplora nuove dimensioni digitali con le nostre soluzioni VR/AR. Dalla progettazione di esperienze immersive alla loro integrazione con il tuo ecosistema digitale, portiamo la tua azienda nel futuro dell'interazione digitale.
            </p>
          </motion.div>
        <HeadsetVRScene />
          <div className={styles.aiGrid}>
            <motion.div 
              className={styles.aiCard}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.aiIcon}><Eye size={32} strokeWidth={1.5} /></div>
              <h3 className={styles.aiTitle}>Esperienze Immersive</h3>
              <p className={styles.aiText}>Crea ambienti virtuali coinvolgenti per presentazioni di prodotto, showroom digitali e formazione interattiva.</p>
            </motion.div>
            <motion.div 
              className={styles.aiCard}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.aiIcon}><Network size={32} strokeWidth={1.5} /></div>
              <h3 className={styles.aiTitle}>Integrazione Ecosistema</h3>
              <p className={styles.aiText}>Collega le esperienze VR/AR al tuo sito web, e-commerce o app per un'esperienza utente fluida e coinvolgente.</p>
            </motion.div>
          </div>
        </div>
      </section>

{/* AVIVX — Flagship Product Redesign */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div 
            className={`${styles.card} ${styles.avivxCardRedesigned}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div className={styles.avivxRedesignContent}>
              <div className={styles.avivxBadgeRedesign}>
                <Sparkles size={14} /> SaaS Proprietario
              </div>
              <h2 className={styles.avivxTitleRedesign}>Ti presentiamo <em>AVIVX</em></h2>
              <p className={styles.avivxDescRedesign}>
                Il gestionale definitivo per saloni di parrucchieri e centri estetici. Intelligenza artificiale, automazione e analisi avanzate per semplificare la vita agli imprenditori.
              </p>
              
              <div className={styles.avivxRedesignKpis}>
                <div className={styles.avivxKpiBlock}>
                  <strong>+38%</strong>
                  <span>Clienti fidelizzati</span>
                </div>
                <div className={styles.avivxKpiBlock}>
                  <strong>-60%</strong>
                  <span>Tempo gestione</span>
                </div>
                <div className={styles.avivxKpiBlock}>
                  <strong>+25%</strong>
                  <span>Ricavi medi</span>
                </div>
              </div>
              
              <a href="https://www.avivxgestionale.it/" target="_blank" rel="noopener noreferrer" className="primaryBtn">
                Scopri la Piattaforma
              </a>
            </div>
            <div className={styles.avivxRedesignVisual}>
              <img src="/avivx-dashboard.png" alt="AVIVX Dashboard" className={styles.avivxImageRedesign} loading="lazy" />
            </div>
          </motion.div>
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
      <section className={styles.territorySection}>
        {/* Decorative dot grid background */}
        <div className={styles.territoryDotGrid} aria-hidden="true">
          {Array.from({ length: 120 }).map((_, i) => (
            <span key={i} className={styles.dot} />
          ))}
        </div>

        <div className={styles.container}>
          {/* Header */}
          <motion.div
            className={styles.territoryHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.territoryEyebrow}>Dove operiamo</span>
            <h2 className={styles.territoryTitle}>
              Radicati a Treviso.<br />
              Attivi in tutto il Nord Italia.
            </h2>
            <p className={styles.territoryDesc}>
              Il nostro Headquarter è a Treviso. Progettiamo strategie digitali e infrastrutture tecnologiche per aziende leader da Venezia a Milano, da Torino a Bologna, con standard qualitativi di eccellenza.
            </p>
          </motion.div>

          {/* KPI Row */}
          <motion.div
            className={styles.territoryKpiRow}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { value: "+150%", label: "Media incremento ROI", sub: "sui progetti attivi" },
              { value: "100%", label: "Codice proprietario", sub: "nessuna dipendenza esterna" },
              { value: "7+", label: "Aziende partner", sub: "nel Nord Italia" },
              { value: "48h", label: "Tempo di risposta", sub: "garantito per ogni cliente" },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className={styles.territoryKpiCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.territoryKpiValue}>{kpi.value}</span>
                <span className={styles.territoryKpiLabel}>{kpi.label}</span>
                <span className={styles.territoryKpiSub}>{kpi.sub}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Cities text */}
          <motion.p
            className={styles.territoryCitiesText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Treviso · Venezia · Padova · Vicenza · Verona · Milano · Torino · Bologna · Udine
          </motion.p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.newsletterBox}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Vuoi scalare il tuo business?</h2>
              <p className={styles.newsletterDesc}>
                Ricevi insight, strategie digitali e casi studio direttamente nella tua casella di posta. Nessun trucco, solo alto valore.
              </p>
            </div>
            <form 
              className={styles.newsletterForm}
              onSubmit={async (e) => {
                e.preventDefault();
                const btn = (e.target as any).querySelector('button');
                btn.disabled = true;
                btn.innerText = 'Iscrizione...';
                
                const email = (e.target as any).email.value;
                try {
                  await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                      name: 'Iscritto Newsletter', 
                      email: email, 
                      service: 'Iscrizione Newsletter', 
                      message: 'Un nuovo utente si è appena iscritto alla newsletter dalla Homepage.' 
                    })
                  });
                  alert("Grazie per esserti iscritto! A presto con i nostri contenuti.");
                  (e.target as any).reset();
                } catch (err) {
                  alert("C'è stato un errore. Riprova più tardi.");
                } finally {
                  btn.disabled = false;
                  btn.innerText = 'Iscriviti Ora';
                }
              }}
            >
              <input 
                type="email" 
                name="email" 
                placeholder="La tua migliore email" 
                className={styles.newsletterInput} 
                required 
              />
              <button type="submit" className="primaryBtn">
                Iscriviti Ora
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
