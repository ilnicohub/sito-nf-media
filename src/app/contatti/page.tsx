"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./page.module.css";

export default function Contatti() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Errore nell'invio del messaggio");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message dopo 5 secondi
      setTimeout(() => setSuccess(false), 5000);
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
          Richiedi informazioni sui nostri servizi e prenota una consulenza strategica.
        </motion.p>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.grid}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className={styles.contactInfo}>
              <h2>Dettagli di Contatto</h2>
              <p className={styles.desc}>Siamo pronti ad ascoltare le tue idee e trasformarle in infrastrutture digitali di successo.</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <h4>Headquarter</h4>
                  <p>Provincia di Treviso, Veneto, Italia</p>
                </div>
                
                <div className={styles.infoItem}>
                  <h4>Nuove Richieste</h4>
                  <p>info@nfmedia.it</p>
                </div>
                
                <div className={styles.infoItem}>
                  <h4>Supporto Clienti</h4>
                  <p>supporto@nfmedia.it</p>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
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
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="email@azienda.it" 
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Descrizione del Progetto</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    placeholder="Come possiamo aiutarti a scalare il tuo business?" 
                    className={styles.input}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {error && (
                  <div className={styles.errorMessage}>
                    ⚠️ {error}
                  </div>
                )}

                {success && (
                  <div className={styles.successMessage}>
                    ✓ Messaggio inviato con successo! Ti contatteremo al più presto.
                  </div>
                )}
                
                <button type="submit" className="primaryBtn" disabled={loading}>
                  {loading ? "Invio in corso..." : "Invia Richiesta"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
