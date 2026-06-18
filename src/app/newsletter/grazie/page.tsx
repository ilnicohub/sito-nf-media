"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import styles from "./grazie.module.css";

export default function Grazie() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <div className={styles.main}>
      <section className={styles.thanksSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.card}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glowing top line effect */}
            <div className={styles.glowLine} />

            {/* Checkmark icon with scale and opacity animations */}
            <motion.div className={styles.iconWrapper} variants={itemVariants}>
              <div className={styles.pulseGlow} />
              <CheckCircle2 size={64} className={styles.successIcon} strokeWidth={1.5} />
            </motion.div>

            <motion.h1 className={styles.title} variants={itemVariants}>
              Iscrizione Confermata!
            </motion.h1>

            <motion.p className={styles.text} variants={itemVariants}>
              Grazie per esserti unito alla nostra newsletter. Inizierai presto a ricevere i nostri contenuti, insight strategici e casi studio esclusivi.
            </motion.p>

            {/* SLA indicator */}
            <motion.div className={styles.slaBadge} variants={itemVariants}>
              <Mail size={16} className={styles.slaIcon} />
              <span>Controlla la tua casella di posta nei prossimi giorni.</span>
            </motion.div>

            {/* Unsubscribe notice */}
            <motion.p style={{ marginTop: '1.5rem', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }} variants={itemVariants}>
              <strong>Come disiscriversi?</strong> Potrai cancellarti in qualsiasi momento semplicemente rispondendo "Unsubscribe" a una delle nostre email, oppure contattandoci a <em>info@nfmedia.it</em>.
            </motion.p>

            {/* Action buttons */}
            <motion.div className={styles.actions} variants={itemVariants}>
              <Link href="/" className="primaryBtn">
                <span className={styles.btnContent}>
                  Torna alla Home
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
