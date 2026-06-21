"use client";

import { useSyncExternalStore } from "react";
import styles from "./CookieBanner.module.css";

const CONSENT_KEY = "nf_cookie_consent";
const CONSENT_EVENT = "nf-cookie-consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(CONSENT_KEY) === null;
}

export default function CookieBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false);

  function acceptAll() {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
      window.dispatchEvent(new Event(CONSENT_EVENT));
    } catch {}
  }

  function rejectAll() {
    try {
      localStorage.setItem(CONSENT_KEY, "rejected");
      window.dispatchEvent(new Event(CONSENT_EVENT));
    } catch {}
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite">
      <div className={styles.content}>
        <div className={styles.text}>
          <strong>Usiamo cookie per migliorare la tua esperienza</strong>
          <p>
            Utilizziamo cookie tecnici e, previo consenso, cookie per analytics e
            miglioramento dei servizi. Puoi accettare o rifiutare l&apos;uso di cookie
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
