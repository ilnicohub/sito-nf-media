import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Il Nostro Metodo | NF Media Lab",
  },
  description:
    "Scopri come lavoriamo. Dalla prima call esplorativa all'accesso esclusivo alla piattaforma NF Media Lab Partners per monitorare lo stato dei lavori.",
  alternates: { canonical: "/metodo" },
  openGraph: {
    title: "Il Nostro Metodo | NF Media Lab",
    description:
      "Trasparenza, qualità e controllo costante in ogni progetto digitale.",
    url: "/metodo",
  },
};

export default function Metodo() {
  return (
    <ServiceLanding
      eyebrow="Il Nostro Metodo"
      title="Ingegneria, Metodo ed Esclusività"
      intro="Non lavoriamo con tutti, e non facciamo cose a caso. Accettiamo un numero limitato di progetti per garantire una dedizione assoluta. Abbiamo ingegnerizzato un flusso di lavoro esclusivo che ti garantisce la massima chiarezza e risultati concreti, dalla prima chiacchierata alla consegna finale."
      benefits={[
        {
          title: "Qualità Enterprise",
          icon: "target",
          description:
            "Ogni riga di codice e ogni design è curato nei minimi dettagli. Non usiamo soluzioni pre-confezionate: creiamo ecosistemi su misura di livello enterprise.",
        },
        {
          title: "Trasparenza e Controllo",
          icon: "activity",
          description:
            "Niente zone d'ombra. Saprai sempre a che punto è il tuo progetto, chi ci sta lavorando e le prossime scadenze in totale tranquillità.",
        },
        {
          title: "Partnership Esclusiva",
          icon: "users",
          description:
            "Lavoriamo a stretto contatto con te come un vero reparto IT interno. Selezioniamo i progetti per garantire il 100% delle nostre energie e massimizzare il tuo ROI.",
        },
        {
          title: "Piattaforma Riservata",
          icon: "shield",
          description:
            "Ti diamo accesso alla nostra piattaforma esclusiva: un cruscotto operativo privato per monitorare l'avanzamento dei lavori, dove nulla viene lasciato al caso.",
        },
      ]}
      process={[
        {
          title: "Meeting di conoscenza",
          description:
            "Partiamo da una call esplorativa iniziale. Analizziamo insieme le tue esigenze aziendali, i tuoi obiettivi a breve e lungo termine (che si tratti del lancio di un nuovo gestionale, di un restyling web o dell'apertura di nuovi canali social) e capiamo se siamo il partner giusto per te.",
        },
        {
          title: "Proposte d'intervento",
          description:
            "Sviluppiamo una strategia personalizzata. Delineiamo le tecnologie da impiegare, i piani editoriali se si tratta di content creation e social media management, le tempistiche di massima e i passaggi chiave necessari per raggiungere i risultati.",
        },
        {
          title: "Preventivo e Timeline",
          description:
            "Nessuna sorpresa. Ti presentiamo un prospetto economico chiaro, dettagliato in ogni singola voce (dallo sviluppo tecnico alla gestione mensile delle campagne advertising e social), accompagnato da tempistiche estremamente precise.",
        },
        {
          title: "NF Media Lab Partners",
          description:
            "Dopo l'accettazione formale, riceverai l'accesso esclusivo alla nostra piattaforma dedicata. Potrai monitorare lo stato di avanzamento dei lavori tecnici, l'approvazione dei contenuti social e le performance delle campagne quotidianamente: saprai sempre cosa stiamo facendo.",
        },
      ]}
    />
  );
}
