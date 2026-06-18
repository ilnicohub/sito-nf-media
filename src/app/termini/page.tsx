"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function TerminiCondizioni() {
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
          <h1 className={styles.title}>Termini e Condizioni</h1>
          <p className={styles.subtitle}>
            I termini e le condizioni che regolano l'utilizzo del nostro sito e dei nostri servizi.
          </p>
        </div>
      </motion.section>

      <motion.section className={styles.content} {...fadeIn}>
        <div className={styles.container}>
          <h2>1. Accettazione dei Termini</h2>
          <p>
            Accedendo e utilizzando il sito web di NF MEDIA LAB, accetti di essere vincolato da questi Termini e Condizioni. Se non accetti questi termini, ti preghiamo di non utilizzare il sito.
          </p>

          <h2>2. Licenza d'Uso</h2>
          <p>
            NF MEDIA LAB ti concede una licenza limitata, non esclusiva e revocabile per accedere e utilizzare il sito esclusivamente per scopi legali e in conformità con questi termini. Non è consentito:
          </p>
          <ul>
            <li>Riprodurre, duplicare o copiare contenuti senza autorizzazione</li>
            <li>Vendere, locare o affittare il sito o i suoi servizi</li>
            <li>Utilizzare il sito per scopi illegali o non autorizzati</li>
            <li>Accedere a sistemi informatici in modo non autorizzato</li>
            <li>Trasmettere virus o malware</li>
          </ul>

          <h2>3. Proprietà Intellettuale</h2>
          <p>
            Tutti i contenuti del sito, inclusi testi, grafica, loghi, immagini e software, sono proprietà di NF MEDIA LAB o dei suoi fornitori e sono protetti dalle leggi sul diritto d'autore. L'utilizzo non autorizzato di tali contenuti è vietato.
          </p>

          <h2>4. Limitazione di Responsabilità</h2>
          <p>
            NF MEDIA LAB non è responsabile per:
          </p>
          <ul>
            <li>Danni accidentali, indiretti o consequenziali derivanti dall'utilizzo del sito</li>
            <li>Perdita di dati o interruzioni del servizio</li>
            <li>Contenuti di terze parti linkati dal sito</li>
            <li>Qualsiasi uso improprio dei servizi</li>
          </ul>
          <p>
            In nessun caso la nostra responsabilità supererà il prezzo pagato per il servizio.
          </p>

          <h2>5. Disclaimer</h2>
          <p>
            Il sito e i suoi contenuti sono forniti "così come sono" senza alcuna garanzia esplicita o implicita. NF MEDIA LAB non garantisce che:
          </p>
          <ul>
            <li>Il sito sia sempre disponibile e funzionante</li>
            <li>I contenuti siano accurati, completi o aggiornati</li>
            <li>Il sito sia privo di errori o virus</li>
          </ul>

          <h2>6. Servizi Professionali</h2>
          <p>
            I servizi offerti da NF MEDIA LAB (sviluppo software, web design, marketing, ecc.) sono forniti secondo l'accordo contrattuale specifico. Le condizioni generali di questi Termini sono integrate dai contratti di servizio individuali.
          </p>

          <h2>7. Modifiche ai Servizi</h2>
          <p>
            NF MEDIA LAB si riserva il diritto di modificare, sospendere o interrompere i servizi in qualsiasi momento, con preavviso quando possibile. Non saremo responsabili per qualsiasi modifica o interruzione.
          </p>

          <h2>8. Pagamenti e Fatturazione</h2>
          <p>
            Per i servizi a pagamento:
          </p>
          <ul>
            <li>Il pagamento è dovuto come specificato nel contratto</li>
            <li>Le tariffe sono esclusive di imposte e oneri applicabili</li>
            <li>I rimborsi sono soggetti alla politica di rimborso specificata nel contratto</li>
            <li>NF MEDIA LAB si riserva il diritto di sospendere i servizi per mancato pagamento</li>
          </ul>

          <h2>9. Dati Personali e Privacy</h2>
          <p>
            Il trattamento dei tuoi dati personali è disciplinato dalla nostra Privacy Policy. Consultando il nostro sito, accetti il trattamento dei tuoi dati secondo i termini della Privacy Policy.
          </p>

          <h2>10. Link a Siti Esterni</h2>
          <p>
            Il sito può contenere link a siti web esterni. NF MEDIA LAB non è responsabile per il contenuto, l'accuratezza o la pratica di privacy di siti esterni. L'accesso a siti esterni è a tuo rischio.
          </p>

          <h2>11. Indennizzo</h2>
          <p>
            Accetti di indennizzare e proteggere NF MEDIA LAB da qualsiasi reclamo, danno, perdita o spesa (inclusi gli onorari legali) derivanti dalla tua violazione di questi Termini o dall'utilizzo del sito.
          </p>

          <h2>12. Legge Applicabile</h2>
          <p>
            Questi Termini e Condizioni sono disciplinati dalle leggi della Repubblica Italiana e dalle norme dell'Unione Europea, in particolare il GDPR. Ogni controversia sarà sottoposta alla competenza esclusiva dei tribunali di Treviso, Italia.
          </p>

          <h2>13. Contatti per Questioni Legali</h2>
          <p>
            Per qualsiasi questione legale o controversia relativa a questi Termini, contatta:
          </p>
          <p>
            <strong>Email:</strong> info@nfmedia.it<br />
            <strong>Indirizzo:</strong> Treviso, Veneto, Italia
          </p>

          <h2>14. Modifiche ai Termini</h2>
          <p>
            NF MEDIA LAB si riserva il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione. L'utilizzo continuato del sito dopo le modifiche costituisce accettazione dei nuovi termini.
          </p>

          <p className={styles.lastUpdate}>
            <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
