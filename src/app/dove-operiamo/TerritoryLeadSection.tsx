"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import styles from "./page.module.css";

type TerritoryLeadSectionProps = {
  locationName: string;
  locationSlug: string;
  sourceType: "regional" | "city";
};

export default function TerritoryLeadSection({
  locationName,
  locationSlug,
  sourceType,
}: TerritoryLeadSectionProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", botCheck: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (formData.botCheck) {
      router.push("/contatti/grazie");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          botCheck: formData.botCheck,
          message: `[Provenienza]: Pagina ${locationName}\n[Azienda]: ${formData.company}\n\n[Esigenza]:\n${formData.message}`,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Non siamo riusciti a inviare la richiesta.");

      trackEvent("generate_lead", {
        lead_source: `${sourceType}_inline_form`,
        location: locationName,
      });
      router.push("/contatti/grazie");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Non siamo riusciti a inviare la richiesta.");
      setLoading(false);
    }
  };

  return (
    <section className={styles.conversionSection} id="parliamone">
      <div className={`${styles.container} ${styles.conversionGrid}`}>
        <motion.div
          className={styles.conversionCopy}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Parliamone</p>
          <h2>Hai un obiettivo concreto? Partiamo da quello.</h2>
          <p>Descrivici in poche righe cosa vuoi migliorare. Leggiamo direttamente ogni richiesta e ti rispondiamo entro un giorno lavorativo con un primo riscontro.</p>
          <ul>
            <li><CheckCircle2 size={18} /> Nessun preventivo standard</li>
            <li><CheckCircle2 size={18} /> Primo confronto senza impegno</li>
            <li><CheckCircle2 size={18} /> Referente diretto dalla sede in provincia di Treviso</li>
          </ul>
        </motion.div>

        <motion.form
          className={styles.leadForm}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className={styles.formGlowOrb} aria-hidden="true" />
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor={`botCheck-${locationSlug}`}>Non compilare</label>
            <input id={`botCheck-${locationSlug}`} tabIndex={-1} autoComplete="off" value={formData.botCheck} onChange={(event) => setFormData({ ...formData, botCheck: event.target.value })} />
          </div>
          <div className={styles.formRow}>
            <label>Nome e cognome<input required autoComplete="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Come ti chiami" /></label>
            <label>Email aziendale<input required type="email" autoComplete="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="nome@azienda.it" /></label>
          </div>
          <label>Azienda<input required autoComplete="organization" value={formData.company} onChange={(event) => setFormData({ ...formData, company: event.target.value })} placeholder="Nome dell’azienda" /></label>
          <label>Di cosa hai bisogno?<textarea required rows={4} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Obiettivo, problema attuale o progetto da sviluppare" /></label>
          {error && <p className={styles.formError} role="alert">{error}</p>}
          <div className={styles.formFooter}>
            <p>Inviando accetti il trattamento dei dati secondo la <Link href="/privacy">privacy policy</Link>.</p>
            <button type="submit" className={styles.leadSubmit} disabled={loading}>{loading ? "Invio in corso…" : <>Invia richiesta <Send size={15} /></>}</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
