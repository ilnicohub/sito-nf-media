"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingForm from "@/components/booking/BookingForm";
import styles from "./page.module.css";
import { availabilityConfig } from "@/config/availability";
import { ArrowLeft, CalendarDays, CheckCircle2, Mail, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function PrenotaPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const [bookedSlots, setBookedSlots] = useState<{date: string, time: string}[]>([]);

  useEffect(() => {
    fetch('/api/availability')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBookedSlots(data.booked);
        }
      })
      .catch(err => console.error("Error fetching availability", err));
  }, []);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleSuccess = (data: any) => {
    setBookingData(data);
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getCalendarLink = () => {
    if (!bookingData) return "#";
    
    const dateObj = new Date(bookingData.date);
    const pad = (n: number) => n.toString().padStart(2, "0");
    const formattedDate = `${dateObj.getFullYear()}-${pad(dateObj.getMonth() + 1)}-${pad(dateObj.getDate())}`;
    
    const encodedTime = encodeURIComponent(bookingData.time);
    return `/api/calendar?date=${formattedDate}&time=${encodedTime}`;
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className={styles.main}>
      {!isSuccess && (
        <header className={styles.header}>
          <motion.h1 
            className={styles.title}
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            Prenota una Video Call
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Scegli il giorno e l'orario che preferisci. Analizzeremo i tuoi obiettivi e capiremo insieme come strutturare la tua presenza digitale per ottenere risultati concreti.
          </motion.p>
        </header>
      )}

      <section className={styles.bookingSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.bookingCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {isSuccess ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.successContent}>
                  <div className={styles.successIconWrapper}>
                    <CheckCircle2 size={32} className={styles.successIcon} />
                  </div>
                  <h2>Prenotazione Confermata!</h2>
                  <p className={styles.successDesc}>
                    La tua video call con NF Media Lab è stata programmata con successo per il{" "}
                    <strong>{bookingData.date instanceof Date ? bookingData.date.toLocaleDateString('it-IT') : new Date(bookingData.date).toLocaleDateString('it-IT')}</strong> alle <strong>{bookingData.time}</strong>.
                  </p>
                  
                  <div className={styles.successInfoBox}>
                    <Mail size={20} className={styles.infoBoxIcon} />
                    <span>
                      Ti abbiamo inviato un'email di conferma all'indirizzo <strong>{bookingData.email}</strong>.
                    </span>
                  </div>

                  <p className={styles.successSubtext}>
                    <strong>Come annullare?</strong> Se hai bisogno di spostare o annullare l'appuntamento, ti preghiamo di farlo con almeno 24h di anticipo contattando il nostro team all'email: info@nfmedialab.it.
                  </p>

                  <div className={styles.successActions}>
                    <Link href="/" className={styles.homeBtn}>
                      Torna alla Home
                    </Link>
                    <a href={getCalendarLink()} download className={styles.calendarBtnSuccess}>
                      <Calendar size={18} /> Aggiungi al Calendario
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className={styles.grid}>
                <div className={styles.leftCol}>
                  <h2 className={styles.stepTitle}>
                    <span className={styles.stepNum}>01</span> Scegli la data
                  </h2>
                  <BookingCalendar onSelectDate={handleDateSelect} selectedDate={selectedDate} />
                </div>

                <div className={styles.rightCol}>
                  <AnimatePresence mode="wait">
                    {!selectedDate ? (
                      <motion.div 
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.placeholderState}
                      >
                        <CalendarDays size={48} strokeWidth={1} />
                        <p>Seleziona una data sul calendario per vedere gli orari disponibili.</p>
                      </motion.div>
                    ) : !selectedTime ? (
                      <motion.div 
                        key="time-slots"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className={styles.stepTitle}>
                          <span className={styles.stepNum}>02</span> Scegli l'orario
                        </h2>
                        <div className={styles.timeGrid}>
                        {availabilityConfig.timeSlots
                          .filter(time => !bookedSlots.some(s => s.date === selectedDate?.toLocaleDateString('it-IT') && s.time === time))
                          .map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={styles.timeBtn}
                          >
                            {time}
                          </button>
                        ))}
                        {availabilityConfig.timeSlots.filter(time => !bookedSlots.some(s => s.date === selectedDate?.toLocaleDateString('it-IT') && s.time === time)).length === 0 && (
                          <p style={{ color: 'var(--text-muted)' }}>Tutti gli orari sono prenotati per questo giorno.</p>
                        )}
                      </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="booking-form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{ height: "100%", display: "flex", flexDirection: "column" }}
                      >
                        <div className={styles.formHeader}>
                          <h2 className={styles.stepTitle}>
                            <span className={styles.stepNum}>03</span> Inserisci i tuoi dati
                          </h2>
                          <button 
                            onClick={() => setSelectedTime(null)} 
                            className={styles.backBtn}
                          >
                            <ArrowLeft size={14} /> Cambia orario
                          </button>
                        </div>
                        <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} onSuccess={handleSuccess} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
