import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: { absolute: "Brand Identity e Comunicazione | NF Media Lab" },
  description:
    "Brand identity, direzione creativa e comunicazione per costruire un’identità riconoscibile, autorevole e coerente su ogni canale.",
  alternates: { canonical: "/servizi/brand-identity-e-comunicazione" },
  openGraph: {
    title: "Brand Identity e Comunicazione | NF Media Lab",
    description:
      "Strategia di marca, identità visiva e contenuti per comunicare valore in modo chiaro e distintivo.",
    url: "/servizi/brand-identity-e-comunicazione",
  },
};

export default function BrandIdentityComunicazione() {
  return (
    <ServiceLanding
      eyebrow="Identità e posizionamento"
      title="Brand identity e comunicazione per aziende che vogliono essere riconoscibili"
      intro="Definiamo posizionamento, identità visiva e linguaggio del brand per costruire una presenza coerente, credibile e capace di distinguersi nel mercato."
      benefits={[
        {
          title: "Strategia di marca",
          icon: "brand",
          description:
            "Posizionamento, valori, pubblico e differenziazione diventano una piattaforma chiara per tutte le attività.",
        },
        {
          title: "Identità visiva",
          icon: "palette",
          description:
            "Logo, colori, tipografia e sistema grafico progettati per essere riconoscibili e utilizzabili nel tempo.",
        },
        {
          title: "Copywriting",
          icon: "pen",
          description:
            "Messaggi e contenuti traducono il valore dell’azienda in un linguaggio preciso, concreto e coerente.",
        },
        {
          title: "Direzione creativa",
          icon: "messageText",
          description:
            "Coordiniamo applicazioni digitali, materiali commerciali e campagne mantenendo una voce unitaria.",
        },
      ]}
      process={[
        {
          title: "Analisi del brand",
          description:
            "Studiamo azienda, mercato, competitor, percezione attuale e obiettivi di posizionamento.",
        },
        {
          title: "Piattaforma strategica",
          description:
            "Definiamo promessa, personalità, tono di voce e principi che guidano identità e comunicazione.",
        },
        {
          title: "Sistema visivo e verbale",
          description:
            "Progettiamo gli elementi grafici e il linguaggio da applicare sui diversi touchpoint.",
        },
        {
          title: "Linee guida e applicazioni",
          description:
            "Consegniamo regole operative e materiali pronti per mantenere coerenza nel tempo.",
        },
      ]}
      idealFor={[
        "Riposizionare un’azienda cresciuta più velocemente della propria immagine",
        "Lanciare un nuovo marchio o una nuova linea di servizi",
        "Rendere coerenti sito, social e materiali commerciali",
        "Comunicare con maggiore autorevolezza a clienti e partner",
      ]}
      faq={[
        {
          question: "Come collegate identità visiva e posizionamento commerciale?",
          answer:
            "L’identità nasce da pubblico, proposta di valore, differenziazione e contesto competitivo. Le scelte visive e verbali devono rendere questi elementi riconoscibili, non limitarsi a un esercizio estetico.",
        },
        {
          question: "Come tutelate la riconoscibilità durante un rebranding?",
          answer:
            "Mappiamo gli elementi già riconosciuti dal mercato e decidiamo quali conservare, evolvere o sostituire. Il passaggio viene pianificato sui diversi touchpoint per evitare discontinuità.",
        },
        {
          question: "Quali strumenti consegnate per mantenere coerenza nel tempo?",
          answer:
            "Consegniamo linee guida, asset e template concordati. Possiamo inoltre affiancare team e fornitori nell’applicazione del sistema su sito, social, presentazioni e materiali commerciali.",
        },
      ]}
    />
  );
}
