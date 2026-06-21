"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Mail, MapPin, Check } from "lucide-react";
import styles from "./page.module.css";
import { trackEvent } from "@/lib/analytics";

const PROJECT_CATEGORIES = [
  "Sviluppo Software",
  "Sviluppo Web",
  "AI & Automazione",
  "Realtà Virtuale (VR/AR)",
  "Social Media"
];

export default function Contatti() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [selectedCategory, setSelectedCategory] = useState(PROJECT_CATEGORIES[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const } 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Costruiamo il messaggio combinato contenente la categoria del progetto e il numero di telefono
    const combinedMessage = `
[Categoria Progetto]: ${selectedCategory}
[Numero di Telefono]: ${formData.phone || "Non fornito"}

[Dettagli Progetto]:
${formData.message}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: combinedMessage
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Errore nell'invio del messaggio");
      }

      setFormData({ name: "", email: "", phone: "", message: "" });
      trackEvent("generate_lead", {
        lead_source: "contact_form",
        service: selectedCategory,
      });
      
      // Reindirizzamento alla pagina di ringraziamento (Grazie)
      router.push("/contatti/grazie");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <motion.h1 
          className={styles.title}
          {...fadeIn}
        >
          Contatti
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Seleziona le opzioni del tuo progetto e prenota una consulenza strategica.
        </motion.p>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Dettagli di Contatto */}
            <motion.div 
              className={styles.contactInfo}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>Avvia il tuo Progetto</h2>
              <p className={styles.desc}>
                Compila il configuratore a fianco. Abbiamo strutturato il form per comprendere rapidamente la natura del tuo business ed elaborare una risposta su misura nelle prossime ore.
              </p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <MapPin size={18} className={styles.infoIcon} />
                  </div>
                  <div>
                    <h4>Headquarter</h4>
                    <p>Treviso, Veneto, Italia</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Mail size={18} className={styles.infoIcon} />
                  </div>
                  <div>
                    <h4>Nuove Richieste</h4>
                    <p>info@nfmedia.it</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Mail size={18} className={styles.infoIcon} />
                  </div>
                  <div>
                    <h4>Supporto Clienti</h4>
                    <p>supporto@nfmedia.it</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Configurator Form Interattivo Premium */}
            <motion.div 
              className={styles.contactForm}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.formGlowOrb} />
              
              <form onSubmit={handleSubmit}>
                <motion.div 
                  className={styles.formFields}
                  variants={formContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Step 1: Dati Anagrafici */}
                  <motion.div className={styles.formSectionTitle} variants={formItemVariants}>
                    <span className={styles.stepNum}>01</span> Informazioni di Contatto
                  </motion.div>

                  <div className={styles.inputRow3Col}>
                    <motion.div className={styles.inputGroup} variants={formItemVariants}>
                      <label htmlFor="name">Azienda o Referente</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Es. Mario Rossi Srl" 
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    
                    <motion.div className={styles.inputGroup} variants={formItemVariants}>
                      <label htmlFor="email">Indirizzo Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="email@azienda.it" 
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>

                    <motion.div className={styles.inputGroup} variants={formItemVariants}>
                      <label htmlFor="phone">Numero di Telefono</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Es. +39 333 1234567" 
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </div>

                  {/* Step 2: Categoria Progetto (Pill Selectors) */}
                  <motion.div className={styles.formSectionTitle} variants={formItemVariants}>
                    <span className={styles.stepNum}>02</span> Categoria del Progetto
                  </motion.div>
                  
                  <motion.div className={styles.pillGrid} variants={formItemVariants}>
                    {PROJECT_CATEGORIES.map((category) => {
                      const isSelected = selectedCategory === category;
                      return (
                        <button
                          key={category}
                          type="button"
                          className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ""}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {isSelected && <Check size={12} className={styles.pillCheck} />}
                          <span>{category}</span>
                        </button>
                      );
                    })}
                  </motion.div>

                  {/* Step 3: Messaggio */}
                  <motion.div className={styles.formSectionTitle} variants={formItemVariants}>
                    <span className={styles.stepNum}>03</span> Descrizione Progetto
                  </motion.div>

                  <motion.div className={styles.inputGroup} variants={formItemVariants}>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Raccontaci brevemente i tuoi obiettivi, le criticità attuali o le idee per il tuo nuovo software." 
                      className={styles.input}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </motion.div>

                  {error && (
                    <motion.div className={styles.errorMessage} variants={formItemVariants}>
                      ⚠️ {error}
                    </motion.div>
                  )}
                  
                  {/* Bottone di invio */}
                  <motion.div className={styles.submitContainer} variants={formItemVariants}>
                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                      {loading ? (
                        <span>Invio in corso...</span>
                      ) : (
                        <span className={styles.submitBtnContent}>
                          Invia Progetto
                          <Send size={14} className={styles.sendIcon} />
                        </span>
                      )}
                    </button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
