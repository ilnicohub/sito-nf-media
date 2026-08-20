import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: {
    absolute: "Intelligenza Artificiale per Aziende | NF Media Lab",
  },
  description:
    "Analisi di fattibilità, automazioni e soluzioni AI integrate nei processi aziendali per ridurre attività manuali, valorizzare dati e migliorare l'efficienza.",
  alternates: {
    canonical: "/servizi/intelligenza-artificiale-per-aziende",
  },
  openGraph: {
    title: "Intelligenza Artificiale per Aziende | NF Media Lab",
    description:
      "Valutiamo e integriamo soluzioni AI nei processi aziendali solo quando producono un vantaggio concreto, controllabile e misurabile.",
    url: "/servizi/intelligenza-artificiale-per-aziende",
  },
};

export default function IntelligenzaArtificialePerAziende() {
  return (
    <ServiceLanding
      eyebrow="Soluzioni AI e automazione aziendale"
      title="Intelligenza artificiale per aziende: prima la fattibilità, poi l’integrazione"
      intro="Analizziamo processi, dati, strumenti e obiettivi per capire dove l’IA può produrre un beneficio concreto. Se un’automazione tradizionale è più semplice ed efficace, te lo diciamo prima di avviare il progetto."
      primaryCtaLabel="Richiedi una valutazione di fattibilità"
      benefits={[
        {
          title: "Assistenti aziendali",
          icon: "messages",
          description:
            "Rendiamo più semplice consultare documenti, procedure, manuali e conoscenza interna, rispettando ruoli e permessi.",
        },
        {
          title: "Elaborazione documentale",
          icon: "databaseZap",
          description:
            "Classifichiamo, estraiamo e organizziamo informazioni da documenti, richieste e archivi per ridurre le attività manuali.",
        },
        {
          title: "Assistenza clienti",
          icon: "messageText",
          description:
            "Progettiamo strumenti di supporto capaci di velocizzare le risposte e trasferire i casi sensibili alle persone competenti.",
        },
        {
          title: "Vendite e marketing",
          icon: "target",
          description:
            "Supportiamo qualificazione, preparazione dei contenuti e analisi delle opportunità mantenendo controllo umano e coerenza del brand.",
        },
        {
          title: "Analisi e reporting",
          icon: "analytics",
          description:
            "Trasformiamo dati dispersi in sintesi e indicatori utili, con fonti verificabili e criteri condivisi con l’azienda.",
        },
        {
          title: "Automazioni integrate",
          icon: "gitBranch",
          description:
            "Colleghiamo l’IA a CRM, gestionali, email, database e software esistenti per creare flussi realmente utilizzabili.",
        },
      ]}
      process={[
        {
          title: "Confronto preliminare",
          description:
            "Partiamo dal problema, dagli obiettivi e dalle attività che oggi assorbono tempo o rallentano il lavoro.",
        },
        {
          title: "Analisi di processi e dati",
          description:
            "Verifichiamo qualità e disponibilità delle informazioni, strumenti esistenti, vincoli operativi e requisiti di sicurezza.",
        },
        {
          title: "Valutazione della soluzione",
          description:
            "Confrontiamo IA, automazione tradizionale, integrazione e software su misura per scegliere l’approccio più sostenibile.",
        },
        {
          title: "Prototipo controllato",
          description:
            "Quando utile, testiamo il caso d’uso su un perimetro definito prima di estendere investimento e complessità.",
        },
        {
          title: "Integrazione operativa",
          description:
            "Inseriamo la soluzione nei flussi reali, definendo accessi, responsabilità, controlli e gestione delle eccezioni.",
        },
        {
          title: "Monitoraggio ed evoluzione",
          description:
            "Misuriamo utilizzo, qualità e impatto per correggere il sistema e mantenerlo coerente con i processi aziendali.",
        },
      ]}
      idealFor={[
        "Ridurre attività ripetitive ad alto assorbimento di tempo",
        "Rendere documenti e informazioni interne più accessibili",
        "Integrare l’IA con CRM, gestionali e strumenti esistenti",
        "Validare un caso d’uso prima di un investimento più ampio",
        "Mantenere sicurezza, controllo e supervisione umana",
      ]}
      faq={[
        {
          question: "Come verificate se l’intelligenza artificiale serve davvero?",
          answer:
            "Analizziamo il problema, i dati disponibili e il risultato atteso, poi confrontiamo l’IA con automazioni tradizionali, integrazioni o software su misura. Proponiamo l’IA solo quando offre un vantaggio concreto rispetto alle alternative.",
        },
        {
          question: "È possibile integrare l’IA nei software che utilizziamo già?",
          answer:
            "Spesso sì. Valutiamo API, database, CRM, gestionali, email e strumenti interni, verificando prima compatibilità tecnica, permessi, qualità dei dati e continuità operativa.",
        },
        {
          question: "Servono molti dati per iniziare?",
          answer:
            "Dipende dal caso d’uso. Alcuni progetti sfruttano documenti e conoscenza già disponibili, altri richiedono dati strutturati e affidabili. La verifica iniziale serve anche a stabilire se il patrimonio informativo è sufficiente.",
        },
        {
          question: "Come vengono gestite privacy e sicurezza?",
          answer:
            "Definiamo minimizzazione dei dati, accessi, ruoli, fornitori, conservazione, registri e supervisione in base al progetto. Le decisioni sensibili non vengono delegate automaticamente senza controlli adeguati.",
        },
        {
          question: "Quanto costa e quanto tempo richiede un progetto AI?",
          answer:
            "Costi e tempi dipendono da dati, integrazioni, rischio e perimetro. Dopo l’analisi di fattibilità proponiamo fasi verificabili, partendo quando opportuno da un prototipo limitato.",
        },
        {
          question: "L’IA sostituisce le persone?",
          answer:
            "Il nostro obiettivo è ridurre lavoro ripetitivo e rendere più rapide le attività informative. Responsabilità, valutazioni e decisioni importanti restano affidate alle persone, con ruoli definiti.",
        },
      ]}
      finalCtaTitle="Verifichiamo se il progetto è davvero fattibile"
      finalCtaText="Raccontaci il processo che vuoi migliorare. Analizziamo obiettivi, dati, vincoli e alternative per indicarti un primo percorso realistico."
      finalCtaLabel="Richiedi la valutazione iniziale"
    />
  );
}
