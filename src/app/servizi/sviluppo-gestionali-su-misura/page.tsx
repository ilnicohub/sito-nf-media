import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Sviluppo Gestionali su Misura | NF Media Lab",
  },
  description:
    "Sviluppo di software gestionali, CRM ed ERP su misura per automatizzare processi, centralizzare dati e ridurre attività manuali.",
  alternates: { canonical: "/servizi/sviluppo-gestionali-su-misura" },
  openGraph: {
    title: "Sviluppo Gestionali su Misura | NF Media Lab",
    description:
      "Software gestionale personalizzato per processi aziendali più semplici, integrati e misurabili.",
    url: "/servizi/sviluppo-gestionali-su-misura",
  },
};

export default function SviluppoGestionaliSuMisura() {
  return (
    <ServiceLanding
      eyebrow="Software aziendale personalizzato"
      title="Sviluppo gestionali su misura per eliminare inefficienze e lavoro ripetitivo"
      intro="Realizziamo gestionali, CRM ed ERP modellati sui processi reali della tua azienda. Centralizziamo informazioni, automatizziamo operazioni e costruiamo strumenti che crescono insieme al business."
      benefits={[
        {
          title: "Processi centralizzati",
          icon: "database",
          description:
            "Dati, clienti, ordini e attività riuniti in un unico ambiente accessibile e controllato.",
        },
        {
          title: "Automazioni operative",
          icon: "gitBranch",
          description:
            "Riduciamo inserimenti manuali, passaggi ripetitivi ed errori con flussi progettati sul tuo lavoro.",
        },
        {
          title: "Integrazioni",
          icon: "blocks",
          description:
            "Colleghiamo il gestionale a e-commerce, sistemi contabili, API, email e strumenti già utilizzati.",
        },
        {
          title: "Scalabilità e controllo",
          icon: "shield",
          description:
            "Permessi, dashboard e architettura evolvono con utenti, reparti e nuove esigenze aziendali.",
        },
      ]}
      process={[
        {
          title: "Mappatura dei processi",
          description:
            "Analizziamo come lavora oggi l’azienda, dove si creano rallentamenti e quali dati devono dialogare.",
        },
        {
          title: "Progettazione funzionale",
          description:
            "Definiamo ruoli, moduli, automazioni e priorità prima di iniziare lo sviluppo.",
        },
        {
          title: "Sviluppo progressivo",
          description:
            "Rilasciamo il software per fasi verificabili, raccogliendo feedback dagli utilizzatori reali.",
        },
        {
          title: "Formazione ed evoluzione",
          description:
            "Supportiamo l’adozione del sistema e pianifichiamo miglioramenti sulla base dei dati d’uso.",
        },
      ]}
      idealFor={[
        "Sostituire fogli Excel e strumenti scollegati",
        "Digitalizzare procedure interne specifiche",
        "Avere dati aziendali affidabili e aggiornati",
        "Integrare reparti, sedi o software differenti",
      ]}
      faq={[
        {
          question: "Come verificate che un software su misura sia realmente necessario?",
          answer:
            "Durante l’analisi confrontiamo processi, costi delle inefficienze e alternative già disponibili. Proponiamo uno sviluppo custom solo quando integrazioni o prodotti standard non risolvono adeguatamente il problema.",
        },
        {
          question: "Come gestite continuità operativa, sicurezza e proprietà del software?",
          answer:
            "Definiamo ambienti, accessi, backup, ruoli e procedure di rilascio in base al rischio. Architettura, proprietà del codice e condizioni di manutenzione vengono chiarite nella proposta.",
        },
        {
          question: "Come controllate tempi, costi e variazioni di perimetro?",
          answer:
            "Il progetto viene suddiviso in fasi, requisiti e priorità verificabili. Eventuali variazioni vengono valutate per impatto prima di essere approvate, evitando estensioni implicite del perimetro.",
        },
      ]}
    />
  );
}
