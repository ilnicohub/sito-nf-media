import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: { absolute: "Data Analytics e Tracking | NF Media Lab" },
  description:
    "Data analytics, tracking delle conversioni e dashboard per misurare marketing, lead e performance aziendali con dati affidabili.",
  alternates: { canonical: "/servizi/data-analytics-e-tracking" },
  openGraph: {
    title: "Data Analytics e Tracking | NF Media Lab",
    description:
      "Tracciamento, dashboard e business intelligence per decisioni commerciali basate su dati verificabili.",
    url: "/servizi/data-analytics-e-tracking",
  },
};

export default function DataAnalyticsTracking() {
  return (
    <ServiceLanding
      eyebrow="Misurazione e business intelligence"
      title="Data analytics e tracking per capire cosa genera davvero risultati"
      intro="Progettiamo sistemi di misurazione che collegano traffico, campagne, moduli, lead e performance commerciali. L’obiettivo è rendere i dati comprensibili e utilizzabili nelle decisioni."
      benefits={[
        {
          title: "Tracking delle conversioni",
          icon: "waypoints",
          description:
            "Configuriamo eventi e obiettivi per misurare richieste, chiamate, acquisti e azioni rilevanti.",
        },
        {
          title: "Qualità del dato",
          icon: "databaseZap",
          description:
            "Verifichiamo fonti, duplicazioni e coerenza per ridurre decisioni basate su numeri incompleti.",
        },
        {
          title: "Dashboard operative",
          icon: "gauge",
          description:
            "Riuniamo gli indicatori importanti in viste comprensibili per marketing, vendite e direzione.",
        },
        {
          title: "Analisi delle performance",
          icon: "activity",
          description:
            "Interpretiamo trend, costi e conversioni per identificare inefficienze e opportunità di crescita.",
        },
      ]}
      process={[
        {
          title: "Mappatura delle fonti",
          description:
            "Censiamo sito, campagne, CRM, piattaforme e dati necessari alle decisioni.",
        },
        {
          title: "Piano di misurazione",
          description:
            "Definiamo eventi, conversioni, nomenclature, responsabilità e requisiti privacy.",
        },
        {
          title: "Implementazione e test",
          description:
            "Configuriamo gli strumenti e verifichiamo che ogni dato venga raccolto correttamente.",
        },
        {
          title: "Dashboard e lettura",
          description:
            "Costruiamo report utili e affianchiamo il team nell’interpretazione degli indicatori.",
        },
      ]}
      idealFor={[
        "Capire quali canali generano lead e vendite",
        "Correggere configurazioni Analytics incomplete o incoerenti",
        "Collegare marketing e risultati commerciali",
        "Ridurre report manuali e fogli dati frammentati",
      ]}
      faq={[
        {
          question: "Come garantite che i dati raccolti siano affidabili e utilizzabili?",
          answer:
            "Partiamo da un piano di misurazione, adottiamo nomenclature coerenti e testiamo eventi e conversioni. Documentiamo inoltre fonti, limiti e responsabilità dei dati.",
        },
        {
          question: "Come collegate dati marketing, CRM e risultati commerciali?",
          answer:
            "Verifichiamo identificatori, API e processi di aggiornamento. L’obiettivo è seguire il lead oltre il modulo, distinguendo richieste generiche, opportunità qualificate e clienti acquisiti.",
        },
        {
          question: "Come gestite consenso, privacy e tracciamento delle conversioni?",
          answer:
            "Configuriamo gli strumenti in coerenza con le scelte di consenso e minimizziamo i dati raccolti. Gli aspetti legali specifici restano da validare con il consulente privacy dell’azienda.",
        },
      ]}
    />
  );
}
