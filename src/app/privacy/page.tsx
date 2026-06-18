"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles.main}>
      <motion.section className={styles.header} {...fadeIn}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            La tua privacy è importante per noi. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
          </p>
        </div>
      </motion.section>

      <motion.section className={styles.content} {...fadeIn}>
        <div className={styles.container}>
          <h2>1. Titolare del Trattamento</h2>
          <p>
            NF MEDIA LAB (di seguito "il Titolare"), nella persona di Fabrin Niccolò con C.F. FBRNCL01C07C111A, con sede in Treviso (TV), è responsabile del trattamento dei tuoi dati personali.
          </p>

          <h2>2. Tipologia di Dati Raccolti</h2>
          <p>
            Raccogliamo i seguenti tipi di dati personali:
          </p>
          <ul>
            <li><strong>Dati di Contatto:</strong> nome, email, numero di telefono, indirizzo</li>
            <li><strong>Dati di Navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate</li>
            <li><strong>Dati Tecnici:</strong> cookie, identificatori di sessione</li>
            <li><strong>Dati Forniti Volontariamente:</strong> informazioni inserite nei moduli di contatto o durante le consultazioni</li>
          </ul>

          <h2>3. Base Legale del Trattamento</h2>
          <p>
            Il trattamento dei tuoi dati avviene su base di:
          </p>
          <ul>
            <li>Consenso esplicito da te fornito</li>
            <li>Necessità di esecuzione di un contratto</li>
            <li>Adempimento di obblighi legali</li>
            <li>Legittimi interessi del Titolare (marketing e miglioramento dei servizi)</li>
          </ul>

          <h2>4. Finalità del Trattamento</h2>
          <p>
            I tuoi dati sono trattati per le seguenti finalità:
          </p>
          <ul>
            <li>Erogazione dei servizi richiesti</li>
            <li>Comunicazioni commerciali e marketing (solo con consenso)</li>
            <li>Adempimento di obblighi legali e fiscali</li>
            <li>Miglioramento della user experience sul sito</li>
            <li>Analitiche e ottimizzazione della performance</li>
          </ul>

          <h2>5. Durata della Conservazione</h2>
          <p>
            I dati personali sono conservati per il tempo necessario alle finalità per le quali sono stati raccolti, o per il periodo previsto dalla legge. Al termine, vengono eliminati o anonimizzati.
          </p>

          <h2>6. Diritti dell'Interessato</h2>
          <p>
            Ai sensi del GDPR, hai diritto a:
          </p>
          <ul>
            <li><strong>Diritto di accesso:</strong> ottenere conferma del trattamento e accesso ai tuoi dati</li>
            <li><strong>Diritto di rettifica:</strong> correggere dati inesatti</li>
            <li><strong>Diritto all'oblio:</strong> richiedere l'eliminazione dei tuoi dati</li>
            <li><strong>Diritto di limitazione:</strong> limitare il trattamento</li>
            <li><strong>Diritto di opposizione:</strong> opporsi al trattamento</li>
            <li><strong>Diritto di portabilità:</strong> ricevere i dati in formato strutturato</li>
          </ul>

          <h2>7. Contatti per Esercitare i Tuoi Diritti</h2>
          <p>
            Per esercitare uno qualsiasi dei diritti sopra elencati, contattaci a:
          </p>
          <p>
            <strong>Email:</strong> info@nfmedia.it<br />
            <strong>Indirizzo:</strong> Treviso, Veneto, Italia
          </p>

          <h2>8. Modifiche alla Privacy Policy</h2>
          <p>
            Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. Ti consigliamo di controllare periodicamente questa pagina per eventuali modifiche.
          </p>

          <p className={styles.lastUpdate}>
            <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
