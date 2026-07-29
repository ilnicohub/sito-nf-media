"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CookieBanner.module.css";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("nf_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = async () => {
    localStorage.setItem("nf_cookie_consent", "true");
    setIsVisible(false);

    // Save consent to DB anonymously
    try {
      await fetch("/api/cookie-consent", {
        method: "POST",
      });
    } catch (e) {
      console.error("Error saving consent", e);
    }
  };

  const handleDecline = () => {
    localStorage.setItem("nf_cookie_consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.cookieBanner}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.cookieContent}>
            <div className={styles.cookieText}>
              <h4>Rispettiamo la tua privacy</h4>
              <p>
                Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito web, per l'analisi del traffico e per le nostre strategie di marketing. 
                Puoi leggere i dettagli nella nostra <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
            <div className={styles.cookieActions}>
              <button onClick={handleDecline} className={styles.declineBtn}>Rifiuta</button>
              <button onClick={handleAccept} className={styles.acceptBtn}>Accetta Tutti</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
