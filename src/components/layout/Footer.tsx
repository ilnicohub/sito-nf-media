import Link from "next/link";
import styles from "./Footer.module.css";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              NF MEDIA
            </Link>
            <p className={styles.description}>
              L'agenzia tech ultra-professionale. Sviluppiamo soluzioni digitali di altissimo livello nel Nord Italia.
            </p>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.title}>Servizi</h4>
            <Link href="/servizi#sviluppo" className={styles.link}>Sviluppo Software</Link>
            <Link href="/servizi#web" className={styles.link}>Creazione Siti Web</Link>
            <Link href="/servizi#marketing" className={styles.link}>Marketing Digitale</Link>
            <Link href="/servizi#social" className={styles.link}>Social Media</Link>
            <Link href="/servizi#comunicazione" className={styles.link}>Comunicazione</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.title}>Legale</h4>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/cookie" className={styles.link}>Cookie Policy</Link>
            <Link href="/termini" className={styles.link}>Termini e Condizioni</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.title}>Contatti</h4>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.icon} />
              <span>Treviso, Veneto</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.icon} />
              <span>info@nfmedia.it</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.icon} />
              <span>+39 0422 123456</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} NF MEDIA AGENCY. P.IVA 01234567890</p>
          <p>Treviso, Italia</p>
        </div>
      </div>
    </footer>
  );
}
