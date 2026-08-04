"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CookieBanner.module.css";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("nf_cookie_consent");
    const consentDate = localStorage.getItem("nf_cookie_date");
    const prefsStr = localStorage.getItem("nf_cookie_prefs");
    
    if (prefsStr) {
      try {
        setPreferences(JSON.parse(prefsStr));
      } catch(e) {}
    }
    
    const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;
    const isExpired = consentDate ? (Date.now() - parseInt(consentDate, 10) > SIX_MONTHS_MS) : false;
    
    if (!consent || isExpired) {
      setIsVisible(true);
    }
  }, []);

  const saveConsentToServer = async (consentType: string, prefs: any) => {
    try {
      await fetch("/api/cookie-consent", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ consentType, preferences: prefs })
      });
    } catch (e) {
      console.error("Error saving consent", e);
    }
  };

  const handleAcceptAll = async () => {
    const prefs = { analytics: true, marketing: true };
    localStorage.setItem("nf_cookie_consent", "all");
    localStorage.setItem("nf_cookie_prefs", JSON.stringify(prefs));
    localStorage.setItem("nf_cookie_date", Date.now().toString());
    setIsVisible(false);
    window.dispatchEvent(new Event("nf-cookie-consent"));
    await saveConsentToServer("all", prefs);
  };

  const handleDecline = async () => {
    const prefs = { analytics: false, marketing: false };
    localStorage.setItem("nf_cookie_consent", "none");
    localStorage.setItem("nf_cookie_prefs", JSON.stringify(prefs));
    localStorage.setItem("nf_cookie_date", Date.now().toString());
    setIsVisible(false);
    window.dispatchEvent(new Event("nf-cookie-consent"));
    await saveConsentToServer("none", prefs);
  };

  const handleSavePreferences = async () => {
    localStorage.setItem("nf_cookie_consent", "custom");
    localStorage.setItem("nf_cookie_prefs", JSON.stringify(preferences));
    localStorage.setItem("nf_cookie_date", Date.now().toString());
    setIsVisible(false);
    window.dispatchEvent(new Event("nf-cookie-consent"));
    await saveConsentToServer("custom", preferences);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
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
            {!showPreferences ? (
              <>
                <div className={styles.cookieText}>
                  <h4>Rispettiamo la tua privacy</h4>
                  <p>
                    Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito web, per l'analisi del traffico e per le nostre strategie di marketing. 
                    Puoi leggere i dettagli nella nostra <Link href="/privacy">Privacy Policy</Link> e <Link href="/cookie">Cookie Policy</Link>.
                  </p>
                </div>
                <div className={styles.cookieActions}>
                  <button onClick={() => setShowPreferences(true)} className={styles.declineBtn}>Preferenze</button>
                  <button onClick={handleDecline} className={styles.declineBtn}>Rifiuta</button>
                  <button onClick={handleAcceptAll} className={styles.acceptBtn}>Accetta Tutti</button>
                </div>
              </>
            ) : (
              <div className={styles.preferencesContent}>
                <h4>Preferenze Cookie</h4>
                <p className={styles.prefIntro}>Personalizza le tue preferenze sui cookie. I cookie strettamente necessari sono sempre attivati in quanto indispensabili per il funzionamento del sito.</p>
                
                <div className={styles.prefList}>
                  <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                      <strong>Strettamente Necessari</strong>
                      <span>Garantiscono le funzioni di base del sito. (Sempre attivi)</span>
                    </div>
                    <div className={`${styles.toggle} ${styles.toggleActive} ${styles.toggleDisabled}`}>
                      <div className={styles.toggleKnob}></div>
                    </div>
                  </div>
                  
                  <div className={styles.prefItem} onClick={() => togglePreference('analytics')}>
                    <div className={styles.prefInfo}>
                      <strong>Analitici</strong>
                      <span>Ci aiutano a capire come i visitatori interagiscono con il sito.</span>
                    </div>
                    <div className={`${styles.toggle} ${preferences.analytics ? styles.toggleActive : ''}`}>
                      <div className={styles.toggleKnob}></div>
                    </div>
                  </div>
                  
                  <div className={styles.prefItem} onClick={() => togglePreference('marketing')}>
                    <div className={styles.prefInfo}>
                      <strong>Marketing</strong>
                      <span>Utilizzati per tracciare i visitatori attraverso i siti web per mostrare annunci pertinenti.</span>
                    </div>
                    <div className={`${styles.toggle} ${preferences.marketing ? styles.toggleActive : ''}`}>
                      <div className={styles.toggleKnob}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.cookieActions} style={{marginTop: '1.5rem', width: '100%', justifyContent: 'space-between'}}>
                  <button onClick={() => setShowPreferences(false)} className={styles.declineBtn}>Indietro</button>
                  <button onClick={handleSavePreferences} className={styles.acceptBtn}>Salva Preferenze</button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    
    {!isVisible && (
      <button 
        className={styles.floatingCookieBtn} 
        onClick={() => {
          setIsVisible(true);
          setShowPreferences(true);
        }}
        aria-label="Gestisci Preferenze Cookie"
      >
        <Cookie size={22} />
      </button>
    )}
    </>
  );
}
