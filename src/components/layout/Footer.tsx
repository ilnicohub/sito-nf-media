import Link from "next/link";
import styles from "./Footer.module.css";
import { MapPin, Mail, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="18"
        rx="5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="18"
        x="3"
        y="3"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link href="/" className={styles.logo} aria-label="NF Media Lab - Home">
              <BrandLogo />
            </Link>
            <p className={styles.description}>
              Laboratorio digitale d&apos;eccellenza. Progettiamo e sviluppiamo soluzioni tecnologiche su misura per far crescere il tuo business.
            </p>
          </div>
          
          <div className={styles.col}>
            <h2 className={styles.title}>Servizi</h2>
            <Link href="/servizi/sviluppo-gestionali-su-misura" className={styles.link}>Sviluppo Software</Link>
            <Link href="/servizi/realizzazione-siti-web-nord-italia" className={styles.link}>Creazione Siti Web</Link>
            <Link href="/servizi/seo-e-performance-marketing" className={styles.link}>SEO e Advertising</Link>
            <Link href="/servizi/social-media-management" className={styles.link}>Social Media</Link>
            <Link href="/servizi/brand-identity-e-comunicazione" className={styles.link}>Brand Identity</Link>
          </div>

          <div className={styles.col}>
            <h2 className={styles.title}>Legale</h2>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/cookie" className={styles.link}>Cookie Policy</Link>
            <Link href="/termini" className={styles.link}>Termini e Condizioni</Link>
          </div>

          <div className={styles.col}>
            <h2 className={styles.title}>Contatti</h2>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.icon} />
              <span>Treviso, Veneto</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.icon} />
              <a href="mailto:info@nfmedialab.it">info@nfmedialab.it</a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.icon} />
              <a href="tel:+393427404958">+39 3427404958</a>
            </div>
            <div className={styles.contactItem}>
              <InstagramIcon />
              <a
                href="https://www.instagram.com/nfmedialab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profilo Instagram NF Media Lab"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} NF MEDIA LAB. C.F. FBRNCL01C07C111A</p>
          <p>Treviso, Italia</p>
        </div>
      </div>
    </footer>
  );
}
