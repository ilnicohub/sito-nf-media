import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Realizzazione Siti Web nel Nord Italia | NF Media Lab",
  },
  description:
    "Realizzazione siti web per aziende del Nord Italia: piattaforme veloci, autorevoli e progettate per generare contatti commerciali qualificati.",
  alternates: { canonical: "/servizi/realizzazione-siti-web-nord-italia" },
  openGraph: {
    title: "Realizzazione Siti Web nel Nord Italia | NF Media Lab",
    description:
      "Siti web professionali e orientati alla lead generation per aziende del Nord Italia.",
    url: "/servizi/realizzazione-siti-web-nord-italia",
  },
};

export default function RealizzazioneSitiWebNordItalia() {
  return (
    <ServiceLanding
      eyebrow="Web agency per il Nord Italia"
      title="Realizzazione siti web per aziende del Nord Italia"
      intro="Dalla sede di Treviso affianchiamo aziende in Veneto, Lombardia, Piemonte, Emilia-Romagna e Friuli-Venezia Giulia con siti su misura progettati per comunicare autorevolezza e generare opportunità commerciali."
      benefits={[
        {
          title: "Design su misura",
          icon: "layout",
          description:
            "Un’identità digitale coerente con il tuo brand, senza template generici o soluzioni tutte uguali.",
        },
        {
          title: "SEO tecnica e locale",
          icon: "search",
          description:
            "Struttura e contenuti preparati per intercettare ricerche rilevanti nelle aree geografiche e nei mercati realmente serviti.",
        },
        {
          title: "Velocità e Core Web Vitals",
          icon: "gauge",
          description:
            "Codice moderno, immagini ottimizzate e attenzione alle metriche che influenzano esperienza e visibilità.",
        },
        {
          title: "Lead generation",
          icon: "target",
          description:
            "Call to action e moduli progettati per trasformare il traffico in richieste commerciali misurabili.",
        },
      ]}
      process={[
        {
          title: "Analisi e strategia",
          description:
            "Studiamo obiettivi, clienti ideali, competitor e ricerche che possono generare opportunità.",
        },
        {
          title: "Architettura e contenuti",
          description:
            "Definiamo pagine, percorsi di navigazione e messaggi orientati alle intenzioni degli utenti.",
        },
        {
          title: "Design e sviluppo",
          description:
            "Realizziamo un’esperienza responsive, accessibile e veloce su ogni dispositivo.",
        },
        {
          title: "Misurazione e crescita",
          description:
            "Configuriamo analytics e conversioni per capire quali attività producono contatti reali.",
        },
      ]}
      idealFor={[
        "Rinnovare un sito datato che non rappresenta più l’azienda",
        "Essere trovato su Google da nuovi potenziali clienti",
        "Presentare servizi complessi in modo semplice e credibile",
        "Ottenere più richieste di preventivo dal traffico online",
      ]}
      faq={[
        {
          question: "Come definite architettura, contenuti e priorità del nuovo sito?",
          answer:
            "Partiamo da obiettivi commerciali, pubblico, offerta, competitor e dati disponibili. Da questa analisi derivano struttura delle pagine, messaggi, priorità SEO e percorsi di conversione.",
        },
        {
          question: "Quali responsabilità restano al cliente durante il progetto?",
          answer:
            "Il cliente nomina un referente, valida le scelte strategiche e mette a disposizione informazioni tecniche e commerciali. Possiamo gestire internamente copywriting, design, sviluppo e coordinamento.",
        },
        {
          question: "Come viene misurato il contributo del sito alla generazione di opportunità?",
          answer:
            "Configuriamo eventi, moduli e conversioni per collegare le azioni degli utenti alle richieste commerciali. Quando possibile integriamo questi dati con CRM e processi di vendita.",
        },
      ]}
    />
  );
}
