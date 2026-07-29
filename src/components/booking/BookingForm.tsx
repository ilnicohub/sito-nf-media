"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import styles from "./BookingForm.module.css";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  selectedDate: Date;
  selectedTime: string;
  onSuccess: (data: any) => void;
}

export default function BookingForm({ selectedDate, selectedTime, onSuccess }: BookingFormProps) {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    notes: "",
    botCheck: "" // Honeypot field
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Honeypot check
    if (formData.botCheck) {
      // It's a bot. Just fake a success.
      setLoading(false);
      router.push("/contatti/grazie");
      return;
    }

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toLocaleDateString('it-IT'),
          time: selectedTime
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Errore durante la prenotazione");
      }

      onSuccess({
        ...formData,
        date: selectedDate,
        time: selectedTime
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  };

  const formattedDate = new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(selectedDate);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.summary}>
        <h4>Riepilogo Prenotazione</h4>
        <p><strong>Data:</strong> <span style={{textTransform: 'capitalize'}}>{formattedDate}</span></p>
        <p><strong>Ora:</strong> {selectedTime}</p>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="name">Nome e Cognome *</label>
        <input 
          type="text" 
          id="name" 
          required 
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          placeholder="Es. Mario Rossi"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email *</label>
        <input 
          type="email" 
          id="email" 
          required 
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          placeholder="mario.rossi@azienda.it"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="company">Azienda *</label>
          <input 
            type="text" 
            id="company" 
            required
            value={formData.company}
            onChange={handleChange}
            className={styles.input}
            placeholder="Nome azienda"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="role">Ruolo *</label>
          <input 
            type="text" 
            id="role" 
            required
            value={formData.role}
            onChange={handleChange}
            className={styles.input}
            placeholder="Es. CEO, Marketing Manager"
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="notes">Raccontaci il tuo progetto *</label>
        <textarea 
          id="notes" 
          required
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className={styles.input}
          placeholder="Di cosa vorresti parlare durante la call?"
        />
      </div>

      {/* Honeypot */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="botCheck">Non compilare questo campo se sei umano</label>
        <input 
          type="text" 
          id="botCheck" 
          value={formData.botCheck}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Conferma in corso..." : (
          <>
            Conferma Prenotazione
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
