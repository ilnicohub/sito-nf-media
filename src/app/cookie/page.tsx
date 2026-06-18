"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function CookiePolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className={styles.main}>
      <motion.section className={styles.header} {...fadeIn}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cookie Policy</h1>
          <p className={styles.subtitle}>
            Informazioni sulla gestione dei cookie e delle tecnologie di tracciamento sul nostro sito.
          </p>
        </div>
      </motion.section>

      <motion.section className={styles.content} {...fadeIn}>
        <div className={styles.container}>
          <h2>1. Che Cosa Sono i Cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti web memorizzano sul tuo dispositivo (computer, tablet, smartphone). Vengono utilizzati per ricordare le tue preferenze e migliorare l'esperienza di navigazione.
          </p>

          <h2>2. Tipologie di Cookie Utilizzati</h2>
          <p>
            Sul nostro sito utilizziamo i seguenti tipi di cookie:
          </p>
          <ul>
            <li><strong>Cookie Tecnici:</strong> necessari al funzionamento del sito (sessione, autenticazione)</li>
            <li><strong>Cookie Analitici:</strong> per analizzare come gli utenti interagiscono con il sito (Google Analytics)</li>
            <li><strong>Cookie di Marketing:</strong> per tracciare il comportamento degli utenti a fini pubblicitari</li>
            <li><strong>Cookie di Terze Parti:</strong> cookie di provider esterni per servizi specifici</li>
          </ul>

          <h2>3. Cookie Tecnici (Sempre Attivi)</h2>
          <p>
            I cookie tecnici sono essenziali per il funzionamento del sito e non richiedono consenso. Includono:
          </p>
          <ul>
            <li>Cookie di sessione per mantenere la connessione</li>
            <li>Cookie di sicurezza</li>
            <li>Cookie per ricordare le preferenze di base</li>
          </ul>

          <h2>4. Cookie Analitici e di Marketing</h2>
          <p>
            Utilizziamo Google Analytics e altri strumenti per raccogliere dati aggregati sull'utilizzo del sito. Questi cookie vengono installati solo con il tuo consenso esplicito. Puoi gestire le tue preferenze tramite il banner informativo al primo accesso.
          </p>

          <h2>5. Gestione e Disabilitazione dei Cookie</h2>
          <p>
            Puoi gestire i cookie in diversi modi:
          </p>
          <ul>
            <li><strong>Tramite il banner della privacy:</strong> seleziona le preferenze al primo accesso o ripristinale in qualsiasi momento</li>
            <li><strong>Tramite le impostazioni del browser:</strong> la maggior parte dei browser consente di bloccare i cookie</li>
            <li><strong>Opt-out Google Analytics:</strong> scarica l'estensione browser Google Analytics Opt-Out</li>
          </ul>
          <p>
            <strong>Nota:</strong> disabilitare i cookie tecnici potrebbe compromettere il funzionamento del sito.
          </p>

          <h2>6. Durata dei Cookie</h2>
          <p>
            La durata dei cookie varia a seconda del tipo:
          </p>
          <ul>
            <li><strong>Cookie di sessione:</strong> eliminati al termine della navigazione</li>
            <li><strong>Cookie persistenti:</strong> rimangono fino a 12 mesi</li>
            <li><strong>Cookie analitici:</strong> solitamente 26 mesi</li>
          </ul>

          <h2>7. Provider di Terze Parti</h2>
          <p>
            Utilizziamo i seguenti servizi di terze parti:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> per l'analisi del traffico</li>
            <li><strong>Meta Pixel:</strong> per il tracciamento delle conversioni</li>
            <li><strong>Servizi di hosting:</strong> per il funzionamento tecnico del sito</li>
          </ul>
          <p>
            Consulta le relative privacy policy per ulteriori informazioni su come questi provider trattano i dati.
          </p>

          <h2>8. Consenso ai Cookie</h2>
          <p>
            Al primo accesso al sito, ti presenteremo un banner che ti chiede di acconsentire ai cookie non tecnici. Puoi:
          </p>
          <ul>
            <li>Accettare tutti i cookie</li>
            <li>Personalizzare le tue preferenze</li>
            <li>Rifiutare cookie non tecnici</li>
          </ul>

          <h2>9. Modifiche a Questa Cookie Policy</h2>
          <p>
            Ci riserviamo il diritto di aggiornare questa Cookie Policy in qualsiasi momento per riflettere cambiamenti nella normativa o nelle nostre pratiche.
          </p>

          <p className={styles.lastUpdate}>
            <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
