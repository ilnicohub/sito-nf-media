export type Region = {
  slug: string;
  name: string;
  shortDescription: string;
  title: string;
  intro: string;
  contextTitle: string;
  context: string[];
  cities: string[];
  sectors: Array<{ title: string; description: string }>;
  priorities: Array<{ title: string; description: string }>;
  faq: Array<{ question: string; answer: string }>;
};

export const regions: Region[] = [
  {
    slug: "veneto",
    name: "Veneto",
    shortDescription: "Il territorio in cui siamo radicati, da Vedelago e Treviso alle principali province venete.",
    title: "Soluzioni digitali per aziende del Veneto",
    intro: "Dalla sede di Vedelago, in provincia di Treviso, affianchiamo imprese venete che vogliono trasformare sito, software, dati e marketing in strumenti concreti di crescita.",
    contextTitle: "Digitale costruito per il tessuto imprenditoriale veneto",
    context: [
      "Il Veneto unisce distretti manifatturieri, imprese esportatrici, servizi, commercio e turismo. Realtà molto diverse condividono però la stessa necessità: comunicare il proprio valore, rendere efficienti i processi e acquisire opportunità in mercati sempre più competitivi.",
      "Lavorare dal territorio ci permette di comprendere dinamiche, tempi decisionali e ambizioni delle PMI locali. Partiamo dagli obiettivi aziendali e progettiamo ecosistemi digitali misurabili, senza separare tecnologia, comunicazione e acquisizione clienti.",
    ],
    cities: ["Belluno", "Padova", "Rovigo", "Treviso", "Vedelago", "Venezia", "Verona", "Vicenza"],
    sectors: [
      { title: "Manifattura e industria", description: "Siti B2B, cataloghi, piattaforme e sistemi digitali capaci di valorizzare competenze tecniche e reti commerciali." },
      { title: "Turismo e servizi", description: "Esperienze digitali chiare, strategie di acquisizione e strumenti per trasformare interesse e ricerche in prenotazioni o contatti." },
      { title: "Retail e imprese locali", description: "Presenza locale, campagne, contenuti e automazioni per aumentare visibilità, fidelizzazione e valore del cliente." },
    ],
    priorities: [
      { title: "Posizionamento", description: "Rendere riconoscibile l'azienda e differenziarla in mercati locali, nazionali o internazionali." },
      { title: "Acquisizione", description: "Collegare SEO, advertising, contenuti e conversioni a obiettivi commerciali verificabili." },
      { title: "Efficienza", description: "Integrare software e automazioni nei processi che rallentano vendite, operations e assistenza." },
    ],
    faq: [
      { question: "Dove ha sede NF Media Lab?", answer: "La sede di NF Media Lab è a Vedelago, in provincia di Treviso. Collaboriamo con aziende in tutte le province del Veneto attraverso incontri in presenza e un processo operativo digitale." },
      { question: "Lavorate anche con aziende fuori Treviso?", answer: "Sì. Seguiamo progetti in tutto il Veneto e nel Nord Italia, organizzando il lavoro in base alle esigenze del cliente e alla complessità del progetto." },
      { question: "Quali servizi offrite alle PMI venete?", answer: "Sviluppo siti e piattaforme, software gestionali, SEO, advertising, social media, brand identity, analytics e sistemi di tracciamento." },
    ],
  },
  {
    slug: "friuli-venezia-giulia",
    name: "Friuli-Venezia Giulia",
    shortDescription: "Strategia, tecnologia e acquisizione per imprese tra Pordenone, Udine, Gorizia e Trieste.",
    title: "Partner digitale per aziende del Friuli-Venezia Giulia",
    intro: "Supportiamo PMI e organizzazioni friulane con siti, software e strategie di crescita progettati per mercati locali e internazionali.",
    contextTitle: "Tecnologia e comunicazione per un territorio aperto ai mercati",
    context: [
      "Il Friuli-Venezia Giulia concentra competenze industriali, logistiche, artigianali e scientifiche in un territorio naturalmente orientato agli scambi. Per molte imprese la presenza digitale deve parlare contemporaneamente a clienti locali, reti B2B e mercati esteri.",
      "Costruiamo sistemi che rendono più chiara l'offerta, facilitano il lavoro commerciale e permettono di misurare l'origine delle opportunità, con un processo coordinato dalla nostra sede di Vedelago, in provincia di Treviso.",
    ],
    cities: ["Gorizia", "Monfalcone", "Pordenone", "Sacile", "Trieste", "Udine"],
    sectors: [
      { title: "Industria e filiere B2B", description: "Architetture informative, contenuti tecnici e strumenti commerciali per cicli di vendita complessi." },
      { title: "Logistica e servizi", description: "Piattaforme e automazioni per rendere più accessibili informazioni, richieste e processi operativi." },
      { title: "Imprese orientate all'export", description: "Presenza digitale scalabile, contenuti strutturati e tracking per sostenere mercati e interlocutori differenti." },
    ],
    priorities: [
      { title: "Chiarezza commerciale", description: "Trasformare competenze tecniche in un'offerta comprensibile e convincente per il cliente." },
      { title: "Scalabilità", description: "Progettare siti e software pronti a evolvere con nuovi mercati, lingue e processi." },
      { title: "Misurazione", description: "Capire quali attività generano contatti qualificati e supportano realmente la rete vendita." },
    ],
    faq: [
      { question: "Operate direttamente in Friuli-Venezia Giulia?", answer: "Sì. Seguiamo aziende della regione dalla sede di Vedelago, in provincia di Treviso, combinando incontri pianificati e collaborazione digitale continuativa." },
      { question: "Realizzate progetti B2B e multilingua?", answer: "Sì. Strutturiamo piattaforme e contenuti pensando a cicli commerciali B2B, mercati internazionali e successive evoluzioni multilingua." },
      { question: "È possibile partire da un audit del sistema attuale?", answer: "Sì. Possiamo analizzare sito, tracciamento, acquisizione e processi prima di definire priorità e investimento." },
    ],
  },
  {
    slug: "trentino-alto-adige",
    name: "Trentino-Alto Adige",
    shortDescription: "Esperienze digitali e sistemi misurabili per turismo, servizi e imprese del territorio alpino.",
    title: "Strategia digitale per aziende del Trentino-Alto Adige",
    intro: "Progettiamo esperienze web, acquisizione e soluzioni software per realtà che competono attraverso qualità, territorio e organizzazione.",
    contextTitle: "Esperienze digitali all'altezza di un'offerta ad alto valore",
    context: [
      "In Trentino-Alto Adige reputazione, qualità del servizio e capacità organizzativa sono centrali. Turismo, ospitalità, agroalimentare, servizi e imprese tecniche devono comunicare con pubblici esigenti e spesso multilingua.",
      "Il nostro approccio collega identità, performance e dati: il sito diventa parte di un percorso che accompagna l'utente, riduce le frizioni e rende misurabili richieste, prenotazioni o opportunità commerciali.",
    ],
    cities: ["Bolzano", "Bressanone", "Brunico", "Merano", "Rovereto", "Trento"],
    sectors: [
      { title: "Turismo e ospitalità", description: "Percorsi digitali orientati alla fiducia, alla scoperta dell'offerta e alla conversione diretta." },
      { title: "Agroalimentare e territorio", description: "Identità, storytelling e piattaforme capaci di sostenere valore percepito e distribuzione." },
      { title: "Servizi e imprese tecniche", description: "Comunicazione chiara, lead generation e strumenti digitali per offerte specialistiche." },
    ],
    priorities: [
      { title: "Esperienza utente", description: "Ridurre passaggi e incertezze tra interesse, valutazione e richiesta." },
      { title: "Reputazione", description: "Trasmettere qualità attraverso design, contenuti, prove e coerenza del brand." },
      { title: "Mercati multilingua", description: "Preparare architetture e contenuti a pubblici con lingue ed esigenze differenti." },
    ],
    faq: [
      { question: "Lavorate con strutture turistiche?", answer: "Sì. Possiamo intervenire su esperienza web, contenuti, tracking e campagne, integrandoci con gli strumenti di prenotazione già utilizzati." },
      { question: "Gestite progetti multilingua?", answer: "Progettiamo architetture predisposte per contenuti e percorsi multilingua, definendo priorità in base ai mercati serviti." },
      { question: "Come gestite la distanza dalla sede?", answer: "Il progetto viene coordinato digitalmente, con workshop e incontri pianificati quando utili alle fasi strategiche o di presentazione." },
    ],
  },
  {
    slug: "lombardia",
    name: "Lombardia",
    shortDescription: "Ecosistemi digitali per aziende che operano in mercati competitivi e ad alta velocità.",
    title: "Soluzioni digitali per aziende della Lombardia",
    intro: "Affianchiamo imprese lombarde che cercano un partner agile per piattaforme web, software, dati e acquisizione commerciale.",
    contextTitle: "Performance e differenziazione nei mercati più competitivi",
    context: [
      "La Lombardia concentra aziende, servizi professionali, industria e innovazione in mercati densi di alternative. In questo contesto essere presenti non basta: il valore deve essere immediatamente comprensibile e il sistema digitale deve sostenere vendite e operations.",
      "Lavoriamo come partner specializzato, con processi chiari, responsabilità definite e misurazione continua. È un modello adatto alle aziende che cercano competenze verticali senza aggiungere complessità organizzativa.",
    ],
    cities: ["Bergamo", "Brescia", "Como", "Mantova", "Milano", "Monza", "Varese"],
    sectors: [
      { title: "Servizi professionali", description: "Posizionamento, autorevolezza e percorsi di acquisizione per offerte ad alto valore." },
      { title: "Industria e tecnologia", description: "Siti B2B, prodotti digitali e integrazioni costruiti per processi e stakeholder complessi." },
      { title: "Brand e realtà in crescita", description: "Design system, contenuti e infrastrutture capaci di sostenere evoluzione e nuovi canali." },
    ],
    priorities: [
      { title: "Differenziazione", description: "Rendere evidente perché scegliere l'azienda rispetto a concorrenti numerosi e qualificati." },
      { title: "Velocità operativa", description: "Ridurre tempi e passaggi con processi digitali, automazioni e integrazioni." },
      { title: "Performance commerciale", description: "Collegare investimento, canali e conversioni a KPI condivisi con marketing e vendite." },
    ],
    faq: [
      { question: "Seguite aziende di Milano e della Lombardia dalla sede di Vedelago?", answer: "Sì. Il nostro processo è progettato per collaborazioni interregionali, con momenti strategici condivisi e gestione operativa digitale." },
      { question: "Potete collaborare con team marketing interni?", answer: "Sì. Possiamo lavorare come partner specialistico insieme a marketing, commerciale, IT e fornitori già presenti." },
      { question: "Lavorate su piattaforme esistenti?", answer: "Valutiamo architettura, performance e vincoli del sistema esistente prima di proporre ottimizzazione, integrazione o riprogettazione." },
    ],
  },
  {
    slug: "emilia-romagna",
    name: "Emilia-Romagna",
    shortDescription: "Digitale, software e crescita per distretti produttivi e imprese orientate all'innovazione.",
    title: "Progetti digitali per aziende dell'Emilia-Romagna",
    intro: "Sviluppiamo strumenti digitali per imprese emiliano-romagnole che vogliono migliorare presenza commerciale, processi e capacità di misurazione.",
    contextTitle: "Innovazione concreta per imprese e distretti produttivi",
    context: [
      "L'Emilia-Romagna combina manifattura avanzata, filiere agroalimentari, servizi e competenze tecniche. Sono contesti in cui innovare significa spesso integrare comunicazione, dati e processi senza perdere concretezza operativa.",
      "Traduciamo obiettivi aziendali in piattaforme, automazioni e strategie di acquisizione. Ogni progetto parte da una fase di analisi e viene organizzato attorno a risultati, responsabilità e priorità verificabili.",
    ],
    cities: ["Bologna", "Ferrara", "Modena", "Parma", "Piacenza", "Ravenna", "Reggio Emilia"],
    sectors: [
      { title: "Meccanica e manifattura", description: "Presenza B2B, strumenti commerciali e software per valorizzare prodotti, competenze e rete vendita." },
      { title: "Food e agroindustria", description: "Brand, contenuti e piattaforme per raccontare qualità, filiera e capacità produttiva." },
      { title: "Servizi e innovazione", description: "Acquisizione, automazione e analisi per organizzazioni che vogliono crescere in modo misurabile." },
    ],
    priorities: [
      { title: "Integrazione", description: "Collegare sito, strumenti commerciali e processi senza creare nuovi silos." },
      { title: "Valore tecnico", description: "Rendere comprensibili competenze, metodo e vantaggi anche a interlocutori non specialistici." },
      { title: "Crescita misurabile", description: "Costruire sistemi in cui traffico, richieste e opportunità possano essere letti insieme." },
    ],
    faq: [
      { question: "Operate con aziende dell'Emilia-Romagna?", answer: "Sì. Seguiamo progetti nel Nord Italia dalla sede di Vedelago, in provincia di Treviso, con un modello di collaborazione adatto anche a team distribuiti." },
      { question: "Sviluppate software e integrazioni su misura?", answer: "Sì. Analizziamo processi, utenti e sistemi coinvolti prima di progettare gestionali, applicazioni e integrazioni." },
      { question: "È possibile unire sito, SEO e tracciamento?", answer: "Sì. È il nostro approccio preferito quando l'obiettivo è generare opportunità e attribuire correttamente i risultati ai diversi canali." },
    ],
  },
];

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
