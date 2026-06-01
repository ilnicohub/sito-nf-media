"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("nf_cookie_consent");
    setConsent(stored);
    if (!stored) setVisible(true);
  }, []);

  function acceptAll() {
    localStorage.setItem("nf_cookie_consent", "accepted");
    setConsent("accepted");
    setVisible(false);
    // If analytics loader exists, call it
    // @ts-ignore
    if (typeof window?.loadAnalytics === "function") window.loadAnalytics();
  }

  function rejectAll() {
    localStorage.setItem("nf_cookie_consent", "rejected");
    setConsent("rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite">
      <div className={styles.content}>
        <div className={styles.text}>
          <strong>Usiamo cookie per migliorare la tua esperienza</strong>
          <p>
            Utilizziamo cookie tecnici e, previo consenso, cookie per analytics e
            miglioramento dei servizi. Puoi accettare o rifiutare l'uso di cookie
            non essenziali.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.reject} onClick={rejectAll}>Rifiuta</button>
          <button className={styles.accept} onClick={acceptAll}>Accetta tutti</button>
        </div>
      </div>
    </div>
  );
}
