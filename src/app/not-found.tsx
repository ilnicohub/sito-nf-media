"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import styles from "./not-found.module.css";
import { MouseEvent } from "react";

export default function NotFound() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Motion values for the compass
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rotate the compass based on mouse position relative to the center of the screen
  const rotateX = useTransform(mouseY, [-500, 500], [45, -45]);
  const rotateY = useTransform(mouseX, [-500, 500], [-45, 45]);
  // Add a slight tilt/swing based on mouse X for the needle effect
  const rotateZ = useTransform(mouseX, [-500, 500], [-30, 30]);

  const handleMouseMove = (e: MouseEvent) => {
    // Calculate distance from center
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <motion.div className={styles.content} {...fadeUp}>
        <motion.div 
          className={styles.iconWrapper}
          style={{
            rotateX,
            rotateY,
            rotateZ
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <Compass className={styles.icon} size={64} strokeWidth={1.5} />
        </motion.div>
        
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Pagina non trovata</h2>
        <p className={styles.description}>
          La pagina che stai cercando sembra non esistere più, è stata spostata,
          oppure l&apos;indirizzo è sbagliato. Nessun problema, possiamo
          ripartire da qui.
        </p>
        
        <div className={styles.actions}>
          <Link href="/" className="primaryBtn">
            Torna alla Home
          </Link>
          <Link href="/servizi" className="secondaryBtn">
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", width: "100%" }}>
              Scopri i Servizi <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
