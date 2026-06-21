import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: { absolute: "SEO e Performance Marketing | NF Media Lab" },
  description:
    "Strategie SEO, Google Ads e performance marketing per aumentare visibilità, acquisire contatti qualificati e misurare il ritorno degli investimenti.",
  alternates: { canonical: "/servizi/seo-e-performance-marketing" },
  openGraph: {
    title: "SEO e Performance Marketing | NF Media Lab",
    description:
      "Acquisizione organica e campagne advertising guidate da dati e obiettivi commerciali.",
    url: "/servizi/seo-e-performance-marketing",
  },
};

export default function SeoPerformanceMarketing() {
  return (
    <ServiceLanding
      eyebrow="Growth, SEO e advertising"
      title="SEO e performance marketing orientati all’acquisizione di nuovi clienti"
      intro="Costruiamo una strategia integrata tra posizionamento organico, campagne pubblicitarie e analisi dei dati per intercettare domanda reale e trasformarla in opportunità commerciali."
      benefits={[
        {
          title: "SEO strategica",
          icon: "search",
          description:
            "Analisi delle ricerche, architettura dei contenuti e ottimizzazione tecnica per presidiare le query più rilevanti.",
        },
        {
          title: "Campagne advertising",
          icon: "megaphone",
          description:
            "Google Ads e campagne social progettate per raggiungere segmenti precisi con messaggi coerenti.",
        },
        {
          title: "Conversion rate optimization",
          icon: "target",
          description:
            "Miglioriamo pagine, offerte e percorsi di conversione per ottenere più risultati dallo stesso traffico.",
        },
        {
          title: "Misurazione del ROI",
          icon: "analytics",
          description:
            "Dashboard e tracciamenti collegano investimenti, lead e risultati per decisioni basate su dati affidabili.",
        },
      ]}
      process={[
        {
          title: "Audit del mercato",
          description:
            "Analizziamo domanda, competitor, canali attivi e qualità dei dati disponibili.",
        },
        {
          title: "Piano di acquisizione",
          description:
            "Definiamo priorità SEO, campagne, landing page, budget e indicatori di performance.",
        },
        {
          title: "Attivazione",
          description:
            "Produciamo contenuti, configuriamo campagne e implementiamo il tracciamento delle conversioni.",
        },
        {
          title: "Ottimizzazione continua",
          description:
            "Riallochiamo risorse e budget sulla base di lead, costi di acquisizione e qualità commerciale.",
        },
      ]}
      idealFor={[
        "Generare richieste commerciali con continuità",
        "Migliorare il posizionamento organico su Google",
        "Ridurre sprechi nelle campagne pubblicitarie",
        "Misurare con precisione il ritorno delle attività marketing",
      ]}
      faq={[
        {
          question: "Come stabilite il mix corretto tra SEO, advertising e landing page?",
          answer:
            "Valutiamo domanda, competitività, urgenza commerciale, marginalità e qualità del sito. Il piano combina i canali solo quando ciascuno ha un ruolo misurabile nel percorso di acquisizione.",
        },
        {
          question: "Quali indicatori utilizzate per valutare la qualità dell’acquisizione?",
          answer:
            "Oltre a traffico e conversioni analizziamo costo per lead, tasso di qualificazione, opportunità commerciali e valore generato. Quando possibile colleghiamo campagne e CRM.",
        },
        {
          question: "Come vengono gestiti budget e riallocazioni durante l’attività?",
          answer:
            "Definiamo soglie e criteri decisionali in anticipo. Budget e priorità vengono riallocati sulla base dei dati, senza inseguire oscillazioni brevi o metriche prive di valore commerciale.",
        },
      ]}
    />
  );
}
