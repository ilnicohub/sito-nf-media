export type CityProof = {
  client: string;
  title: string;
  description: string;
  metric?: string;
  href?: string;
};

export type CityLanding = {
  slug: string;
  name: string;
  footerLabel: string;
  regionSlug: "veneto" | "friuli-venezia-giulia";
  regionName: string;
  title: string;
  description: string;
  intro: string;
  contextTitle: string;
  context: string[];
  map: {
    latitude: number;
    longitude: number;
    label: string;
    description: string;
  };
  sectors: Array<{ title: string; description: string }>;
  priorities: Array<{ title: string; description: string }>;
  nearbyAreas: string[];
  proofs?: CityProof[];
  faq: Array<{ question: string; answer: string }>;
};

export const cityLandings: CityLanding[] = [
  {
    slug: "noale",
    name: "Noale",
    footerLabel: "Noale e Miranese",
    regionSlug: "veneto",
    regionName: "Veneto",
    title: "Agenzia Digitale, Web Agency e Comunicazione a Noale",
    description:
      "Cerchi una web agency o un'agenzia di comunicazione a Noale? Strategia digitale, siti web, social media e advertising per aziende del territorio.",
    intro:
      "Come web agency e agenzia di comunicazione attiva a Noale, affianchiamo imprese e organizzazioni che vogliono trasformare tecnologia e contenuti in risultati misurabili.",
    contextTitle: "Un partner digitale che conosce Noale e il suo territorio",
    context: [
      "Lavorare a Noale significa conoscere da vicino il rapporto tra attività locali, comunità, associazioni e imprese che operano anche oltre i confini cittadini. La presenza digitale deve essere credibile sul territorio e, allo stesso tempo, pronta a raggiungere pubblici più ampi.",
      "Partiamo dall’obiettivo reale: aumentare richieste, valorizzare un progetto, costruire una community o rendere più efficiente un processo. Sito, social, campagne, software e dati vengono coordinati in un percorso unico, senza attività scollegate.",
    ],
    map: { latitude: 45.5532852, longitude: 12.0724393, label: "Noale e Miranese", description: "Il territorio in cui comunità, attività locali e imprese costruiscono relazioni che continuano anche online." },
    sectors: [
      { title: "Sport e community", description: "Strategia editoriale, contenuti e campagne capaci di rafforzare appartenenza, pubblico e valore per gli sponsor." },
      { title: "Attività e servizi locali", description: "Siti, presenza locale e acquisizione per rendere più semplice farsi trovare, capire e contattare." },
      { title: "PMI e organizzazioni", description: "Comunicazione, piattaforme e automazioni progettate intorno a processi e obiettivi concreti." },
    ],
    priorities: [
      { title: "Radicamento", description: "Raccontare il legame con Noale senza limitare la capacità del brand di crescere oltre il territorio." },
      { title: "Continuità", description: "Costruire una presenza digitale riconoscibile e costante, non una sequenza di iniziative isolate." },
      { title: "Conversione", description: "Collegare attenzione, contenuti e campagne a richieste, vendite o opportunità misurabili." },
    ],
    nearbyAreas: ["Camposampiero", "Martellago", "Mirano", "Salzano", "Scorzè", "Trebaseleghe"],
    proofs: [
      {
        client: "FC Calvi Noale",
        title: "Social media e contenuti per una società di Serie D",
        description: "Una strategia continuativa che ha trasformato partite, persone e community in un racconto digitale riconoscibile.",
        metric: "1,5 milioni di visualizzazioni in 30 giorni",
        href: "/case-studies/fc-calvi-noale-social-media",
      },
      {
        client: "FC Calvi Noale",
        title: "Campagna territoriale per il lancio delle nuove divise",
        description: "Concept, shooting nel centro di Noale e distribuzione social per collegare club, città, tifosi e partner.",
        metric: "Oltre 50.000 visualizzazioni nella prima settimana",
        href: "/case-studies/fc-calvi-noale-campagna-nuove-divise",
      },
    ],
    faq: [
      { question: "Operate realmente a Noale?", answer: "Sì. Noale è uno dei territori in cui lavoriamo direttamente e nel quale abbiamo sviluppato progetti continuativi di comunicazione, contenuti e campagne." },
      { question: "Seguite anche attività locali oltre alle aziende?", answer: "Sì. Il metodo viene adattato a imprese, attività, associazioni e realtà sportive, partendo sempre da obiettivi, pubblico e risorse disponibili." },
      { question: "Possiamo incontrarci di persona?", answer: "Sì. Per i progetti a Noale possiamo organizzare incontri sul territorio e affiancarli a un processo digitale strutturato per revisioni, materiali e avanzamento." },
    ],
  },
  {
    slug: "castelfranco-veneto",
    name: "Castelfranco Veneto",
    footerLabel: "Castelfranco Veneto e Castellana",
    regionSlug: "veneto",
    regionName: "Veneto",
    title: "Agenzia Digitale, Web Agency e Comunicazione a Castelfranco Veneto",
    description:
      "La tua web agency e agenzia di comunicazione a Castelfranco Veneto. Siti web, software gestionali, SEO e advertising per aziende della Castellana.",
    intro:
      "Operando come web agency e agenzia di comunicazione dalla vicina sede di Vedelago, supportiamo le aziende di Castelfranco Veneto con progetti digitali per generare opportunità.",
    contextTitle: "Digitale e processi per le imprese della Castellana",
    context: [
      "Castelfranco Veneto è un riferimento naturale per imprese, servizi e attività della Castellana. In questo contesto il digitale deve saper sostenere sia la relazione con il territorio sia processi commerciali e operativi che coinvolgono clienti, reparti e mercati differenti.",
      "La prossimità della nostra sede rende semplice alternare incontri e lavoro digitale. Analizziamo il sistema esistente e coordiniamo sviluppo, comunicazione e misurazione, evitando soluzioni standard che obbligano l’azienda ad adattarsi allo strumento.",
    ],
    map: { latitude: 45.6711389, longitude: 11.92625, label: "Castelfranco Veneto e Castellana", description: "Un sistema produttivo e commerciale connesso tra centro storico, distretti e comuni della Castellana." },
    sectors: [
      { title: "Industria e manifattura", description: "Siti B2B, cataloghi, gestionali e integrazioni per rendere più chiari offerta e flussi operativi." },
      { title: "Commercio e servizi", description: "Presenza locale, campagne e percorsi di contatto costruiti per trasformare visibilità in richieste." },
      { title: "PMI in evoluzione", description: "Software, dati e automazioni per superare file frammentati e attività manuali non più sostenibili." },
    ],
    priorities: [
      { title: "Efficienza", description: "Ridurre passaggi ripetitivi e centralizzare le informazioni che oggi rallentano il lavoro." },
      { title: "Chiarezza commerciale", description: "Tradurre competenze e servizi in una proposta comprensibile per clienti e partner." },
      { title: "Scalabilità", description: "Costruire strumenti che possano evolvere insieme a utenti, reparti e nuovi obiettivi." },
    ],
    nearbyAreas: ["Altivole", "Castello di Godego", "Loria", "Resana", "Riese Pio X", "Vedelago"],
    proofs: [
      {
        client: "Euroline S.R.L.",
        title: "Gestionale ERP sviluppato sui processi reali dell’azienda",
        description: "Una piattaforma su misura per centralizzare dati e attività, riducendo frammentazione e passaggi manuali.",
        metric: "-40% nei tempi operativi",
        href: "/case-studies/euroline-gestionale-su-misura",
      },
    ],
    faq: [
      { question: "Quanto dista NF Media Lab da Castelfranco Veneto?", answer: "La nostra sede è a Vedelago, a pochi chilometri da Castelfranco Veneto. Possiamo quindi organizzare facilmente incontri in presenza quando utili al progetto." },
      { question: "Realizzate software gestionali per aziende della zona?", answer: "Sì. Partiamo dalla mappatura dei flussi aziendali e sviluppiamo gestionali, integrazioni e automazioni quando gli strumenti standard non risolvono adeguatamente il problema." },
      { question: "Possiamo partire dal rifacimento del sito?", answer: "Sì. Analizziamo sito, contenuti, posizionamento e tracciamento per definire se serve un restyling o una riprogettazione più ampia." },
    ],
  },
  {
    slug: "treviso",
    name: "Treviso",
    footerLabel: "Treviso e provincia",
    regionSlug: "veneto",
    regionName: "Veneto",
    title: "Agenzia Digitale, Web Agency e Comunicazione a Treviso",
    description:
      "Web agency e agenzia di comunicazione in provincia di Treviso per siti web, SEO, social media, software su misura, advertising e soluzioni AI.",
    intro:
      "Dalla nostra sede di Vedelago operiamo come web agency e agenzia di comunicazione per aziende di Treviso, unendo tecnologia e strategia ai tuoi obiettivi commerciali.",
    contextTitle: "Un’agenzia digitale radicata nella provincia di Treviso",
    context: [
      "Essere presenti in provincia di Treviso ci permette di lavorare vicino a imprenditori e team, comprendere rapidamente processi e priorità e organizzare incontri nei momenti che richiedono confronto diretto.",
      "Non separiamo il sito dalla strategia, le campagne dal tracciamento o il software dai flussi aziendali. Costruiamo un sistema coerente, scegliendo soltanto le competenze necessarie per produrre un miglioramento concreto.",
    ],
    map: { latitude: 45.6658505, longitude: 12.2455414, label: "Treviso e provincia", description: "Un territorio connesso di imprese, servizi e distretti produttivi nel quale lavoriamo dalla nostra sede di Vedelago." },
    sectors: [
      { title: "PMI e industria B2B", description: "Presenza digitale, contenuti tecnici e strumenti commerciali per valorizzare competenze e generare lead." },
      { title: "Servizi e professionisti", description: "Posizionamento, autorevolezza e percorsi di conversione per richieste più chiare e qualificate." },
      { title: "Retail e attività locali", description: "SEO locale, campagne e contenuti per raggiungere persone realmente interessate nel territorio." },
    ],
    priorities: [
      { title: "Posizionamento", description: "Distinguere l’azienda dai concorrenti attraverso messaggi, prove e contenuti pertinenti." },
      { title: "Acquisizione", description: "Misurare quali ricerche, campagne e contenuti generano contatti utili al business." },
      { title: "Integrazione", description: "Collegare sito, CRM, gestionali, dati e automazioni evitando strumenti isolati." },
    ],
    nearbyAreas: ["Castelfranco Veneto", "Conegliano", "Mogliano Veneto", "Montebelluna", "Paese", "Vedelago"],
    faq: [
      { question: "Dove ha sede NF Media Lab?", answer: "NF Media Lab ha sede a Vedelago, in provincia di Treviso, e segue aziende del territorio con incontri in presenza e collaborazione digitale continuativa." },
      { question: "Siete una web agency o un’agenzia di comunicazione?", answer: "Uniamo strategia, design, sviluppo, SEO, advertising, social media, software e dati. Il perimetro viene definito in base al problema da risolvere, non a un pacchetto standard." },
      { question: "Come iniziate un nuovo progetto?", answer: "Partiamo da un confronto su obiettivi, situazione attuale e vincoli. Solo dopo definiamo priorità, soluzione, tempi e criteri con cui misurare il risultato." },
    ],
  },
  {
    slug: "venezia",
    name: "Venezia",
    footerLabel: "Venezia e provincia",
    regionSlug: "veneto",
    regionName: "Veneto",
    title: "Agenzia Digitale, Web Agency e Comunicazione a Venezia",
    description:
      "Cerchi una web agency o agenzia di comunicazione a Venezia? Strategia digitale, siti web e lead generation per aziende del litorale e della provincia.",
    intro:
      "Come web agency e agenzia di comunicazione per Venezia, Jesolo e provincia, creiamo progetti digitali capaci di valorizzare le tue competenze e generare relazioni commerciali.",
    contextTitle: "Comunicazione e tecnologia per il territorio veneziano",
    context: [
      "Venezia e la sua provincia riuniscono manifattura, servizi, turismo, commercio e realtà con una forte identità territoriale. Da Mestre a Jesolo e alle località del litorale, la presenza digitale deve adattarsi a pubblici, stagionalità e cicli di vendita molto diversi, senza perdere chiarezza e riconoscibilità.",
      "Costruiamo siti, campagne, contenuti e sistemi di misurazione partendo dal valore reale dell’organizzazione. I progetti sviluppati nel territorio ci permettono di collegare strategia, produzione e acquisizione a risultati osservabili.",
    ],
    map: { latitude: 45.4371908, longitude: 12.3345898, label: "Venezia, laguna e litorale", description: "Dalla città alla terraferma, fino a Jesolo e alla costa: identità e mercati differenti dentro lo stesso territorio." },
    sectors: [
      { title: "Manifattura e B2B", description: "Siti e campagne per presentare lavorazioni, metodo e competenze a buyer e interlocutori professionali." },
      { title: "Turismo, mare e ospitalità", description: "Siti, contenuti e acquisizione per strutture e servizi di Jesolo e del litorale, orientati a fiducia, richieste e prenotazioni." },
      { title: "Sport e territorio", description: "Contenuti e campagne capaci di attivare community, sponsor e relazioni locali." },
    ],
    priorities: [
      { title: "Valore percepito", description: "Allineare qualità della presenza digitale e qualità effettiva dell’offerta aziendale." },
      { title: "Pubblici differenti", description: "Organizzare messaggi e percorsi per clienti locali, nazionali o internazionali." },
      { title: "Risultati", description: "Collegare restyling, campagne e contenuti a traffico qualificato e opportunità commerciali." },
    ],
    nearbyAreas: ["Dolo", "Jesolo", "Mestre", "Mirano", "Noale", "Portogruaro", "San Donà di Piave"],
    proofs: [
      {
        client: "Italsample S.R.L.",
        title: "Restyling web e acquisizione per un’eccellenza manifatturiera",
        description: "Un nuovo ecosistema digitale per valorizzare oltre quarant’anni di esperienza nella progettazione e produzione di campionari.",
        metric: "+45% di traffico nei primi 30 giorni",
        href: "/case-studies/italsample-redesign-campagne",
      },
    ],
    faq: [
      { question: "Lavorate con aziende di Venezia e provincia?", answer: "Sì. Seguiamo progetti nel territorio veneziano combinando incontri pianificati e un processo digitale strutturato dalla nostra sede in provincia di Treviso." },
      { question: "Seguite attività di Jesolo e del litorale veneziano?", answer: "Sì. Possiamo affiancare strutture ricettive, servizi, attività commerciali e imprese del territorio con siti web, contenuti, social media, campagne e sistemi di misurazione adatti anche a domanda stagionale e pubblico turistico." },
      { question: "Realizzate siti e campagne per aziende B2B?", answer: "Sì. Progettiamo architettura, contenuti, esperienza e acquisizione considerando cicli commerciali complessi e interlocutori professionali." },
      { question: "Seguite anche produzione di contenuti?", answer: "Sì. Quando il progetto lo richiede coordiniamo direzione creativa, shooting, contenuti digitali e distribuzione sui canali più pertinenti." },
    ],
  },
  {
    slug: "padova",
    name: "Padova",
    footerLabel: "Padova e provincia",
    regionSlug: "veneto",
    regionName: "Veneto",
    title: "Agenzia Digitale, Web Agency e Comunicazione a Padova",
    description:
      "La tua web agency e agenzia di comunicazione a Padova. Siti web, marketing, lead generation e social media per aziende, servizi e attività locali.",
    intro:
      "Siamo una web agency e agenzia di comunicazione attiva a Padova, specializzata nell'aiutare imprese e attività locali ad acquisire richieste attraverso siti web e campagne.",
    contextTitle: "Strategie digitali adattate a imprese e attività padovane",
    context: [
      "A Padova convivono imprese strutturate, servizi professionali, attività locali e realtà orientate a mercati più ampi. Per questo non esiste una strategia digitale unica: una realtà B2B e un’attività rivolta al consumatore richiedono messaggi, canali e percorsi di conversione differenti.",
      "Analizziamo come arrivano oggi clienti e richieste, quali elementi generano fiducia e dove si interrompe il percorso. Da questa base coordiniamo sito, campagne, contenuti e tracking, mantenendo visibili risultati e priorità.",
    ],
    map: { latitude: 45.4077172, longitude: 11.8734455, label: "Padova e provincia", description: "Un polo articolato di industria, servizi, professionisti e attività rivolte al pubblico, collegato a mercati regionali e nazionali." },
    sectors: [
      { title: "Industria e aziende B2B", description: "Siti, contenuti e campagne capaci di rendere comprensibile un’offerta tecnica e sostenere la rete commerciale." },
      { title: "Beauty e attività locali", description: "Immagine, presenza locale e lead generation per trasformare attenzione in prenotazioni e richieste." },
      { title: "Servizi professionali", description: "Autorevolezza, posizionamento e percorsi di contatto adatti a decisioni basate sulla fiducia." },
    ],
    priorities: [
      { title: "Fiducia", description: "Rendere immediatamente comprensibili qualità, competenze e motivi per scegliere l’attività." },
      { title: "Lead generation", description: "Ridurre la distanza tra interesse e richiesta attraverso pagine e campagne coerenti." },
      { title: "Misurazione", description: "Tracciare moduli e azioni importanti per capire cosa produce opportunità reali." },
    ],
    nearbyAreas: ["Abano Terme", "Camposampiero", "Cittadella", "Limena", "Selvazzano Dentro", "Vigonza"],
    proofs: [
      {
        client: "Cabo Stampi S.R.L.",
        title: "Sito e marketing riprogettati per aumentare le opportunità",
        description: "Un intervento coordinato sulla presenza digitale e sull’acquisizione, costruito intorno agli obiettivi commerciali dell’azienda.",
        metric: "+60% nelle richieste di preventivo in tre mesi",
      },
      {
        client: "Salone Tamara&Vanessa S.N.C.",
        title: "Presenza online e lead generation per un’attività beauty",
        description: "Sito, comunicazione e campagne collegati in un percorso più semplice tra scoperta dei servizi e richiesta.",
        metric: "+150% nelle richieste digitali",
        href: "/case-studies/salone-tamara-vanessa-lead-generation",
      },
      {
        client: "Symblux S.R.L.",
        title: "Comunicazione digitale e presenza online per un’azienda industriale",
        description: "Un progetto su struttura, contenuti, UX e SEO per rendere più chiara l’offerta tecnica e più utile il sito al processo commerciale.",
        metric: "+40% di contatti tramite il sito",
        href: "/case-studies/symblux-comunicazione-digitale",
      },
    ],
    faq: [
      { question: "Lavorate con aziende e attività di Padova?", answer: "Sì. Seguiamo sia imprese B2B sia attività rivolte al pubblico, adattando strategia, linguaggio e canali al processo di scelta del cliente." },
      { question: "Potete gestire insieme sito e campagne?", answer: "Sì. Collegare pagine, messaggi, campagne e tracciamento permette di evitare dispersioni e comprendere meglio da dove arrivano le richieste." },
      { question: "Come misurate la lead generation?", answer: "Configuriamo gli eventi pertinenti, come invii dei moduli e altre azioni di contatto, e analizziamo qualità e provenienza delle opportunità nel rispetto del consenso." },
    ],
  },
  {
    slug: "pordenone",
    name: "Pordenone",
    footerLabel: "Pordenone e Friuli occidentale",
    regionSlug: "friuli-venezia-giulia",
    regionName: "Friuli-Venezia Giulia",
    title: "Agenzia Digitale, Web Agency e Comunicazione a Pordenone",
    description:
      "Web agency e agenzia di comunicazione per aziende di Pordenone. Siti web, software, SEO, advertising e intelligenza artificiale nel Friuli occidentale.",
    intro:
      "Operiamo come web agency e agenzia di comunicazione per le aziende di Pordenone unendo tecnologia, comunicazione e acquisizione per rendere più efficienti i processi.",
    contextTitle: "Progetti digitali per imprese di Pordenone e del Friuli occidentale",
    context: [
      "Le aziende di Pordenone che operano in filiere B2B o mercati più ampi hanno bisogno di strumenti digitali capaci di comunicare competenze tecniche, supportare il commerciale e adattarsi all’evoluzione dei processi.",
      "Lavoriamo dalla sede di Vedelago attraverso incontri pianificati e collaborazione digitale continuativa. Prima di proporre uno strumento analizziamo obiettivi, sistema esistente e vincoli, così da definire un investimento sostenibile e verificabile.",
    ],
    map: { latitude: 45.9562503, longitude: 12.6597197, label: "Pordenone e Friuli occidentale", description: "Un territorio produttivo nel quale industria, filiere B2B e servizi richiedono strumenti digitali concreti e misurabili." },
    sectors: [
      { title: "Industria e filiere B2B", description: "Siti tecnici, cataloghi e contenuti per presentare valore, competenze e capacità produttiva." },
      { title: "Software e processi", description: "Gestionali, integrazioni e automazioni per centralizzare dati e ridurre attività ripetitive." },
      { title: "Servizi e commercio", description: "SEO, campagne e percorsi di conversione per generare visibilità e richieste pertinenti." },
    ],
    priorities: [
      { title: "Chiarezza", description: "Organizzare un’offerta complessa in contenuti comprensibili per clienti e partner." },
      { title: "Efficienza", description: "Individuare processi manuali o frammentati che possono essere integrati o automatizzati." },
      { title: "Misurazione", description: "Collegare investimenti digitali a indicatori e azioni realmente utili al business." },
    ],
    nearbyAreas: ["Azzano Decimo", "Brugnera", "Cordenons", "Porcia", "Sacile", "San Vito al Tagliamento"],
    faq: [
      { question: "Seguite aziende con sede a Pordenone?", answer: "Sì. Organizziamo il progetto attraverso incontri pianificati e collaborazione digitale, con un referente diretto dalla nostra sede di Vedelago." },
      { question: "Lavorate su progetti B2B e software aziendali?", answer: "Sì. Possiamo intervenire su presenza commerciale, piattaforme, gestionali, integrazioni e automazioni partendo dai processi reali dell’impresa." },
      { question: "È possibile iniziare con un audit?", answer: "Sì. Possiamo analizzare sito, acquisizione, dati o processi prima di definire priorità, fattibilità e investimento." },
    ],
  },
  {
    slug: "udine",
    name: "Udine",
    footerLabel: "Udine e territorio friulano",
    regionSlug: "friuli-venezia-giulia",
    regionName: "Friuli-Venezia Giulia",
    title: "Agenzia Digitale, Web Agency e Comunicazione a Udine",
    description:
      "La tua web agency e agenzia di comunicazione a Udine. Siti web, SEO, software e automazioni per imprese orientate al risultato nel territorio friulano.",
    intro:
      "In qualità di web agency e agenzia di comunicazione, supportiamo le aziende di Udine nell'acquisire opportunità online e costruire strumenti digitali adatti a ogni mercato.",
    contextTitle: "Strategia e tecnologia per imprese del territorio udinese",
    context: [
      "Per un’azienda di Udine la presenza digitale può dover sostenere contemporaneamente relazioni locali, cicli commerciali B2B e mercati esterni. Questo richiede una struttura chiara, contenuti credibili e strumenti capaci di evolvere nel tempo.",
      "Coordiniamo strategia, design, sviluppo e dati senza imporre pacchetti predefiniti. Il progetto viene gestito dalla sede di Vedelago con incontri pianificati nelle fasi in cui il confronto diretto produce valore.",
    ],
    map: { latitude: 46.0634632, longitude: 13.2358377, label: "Udine e territorio friulano", description: "Un sistema economico aperto a industria, servizi ed export, con relazioni che attraversano il territorio e i mercati esteri." },
    sectors: [
      { title: "Imprese orientate all’export", description: "Architetture informative e piattaforme predisposte per mercati, lingue e interlocutori differenti." },
      { title: "Industria e servizi B2B", description: "Contenuti tecnici, lead generation e strumenti digitali per processi commerciali complessi." },
      { title: "Attività e professionisti", description: "Posizionamento locale, autorevolezza e percorsi di contatto costruiti intorno alla fiducia." },
    ],
    priorities: [
      { title: "Autorevolezza", description: "Dimostrare competenze attraverso struttura, contenuti, progetti e prove concrete." },
      { title: "Scalabilità", description: "Preparare sito e piattaforme a nuovi servizi, mercati e integrazioni." },
      { title: "Acquisizione", description: "Coordinare SEO, campagne e conversioni per generare opportunità qualificate." },
    ],
    nearbyAreas: ["Campoformido", "Cividale del Friuli", "Codroipo", "Palmanova", "Tavagnacco", "Tolmezzo"],
    faq: [
      { question: "Come lavorate con aziende di Udine?", answer: "Alterniamo incontri pianificati e collaborazione digitale, mantenendo fasi, responsabilità e decisioni documentate durante tutto il progetto." },
      { question: "Realizzate piattaforme multilingua?", answer: "Sì. Possiamo progettare struttura, contenuti e tecnologia per successive evoluzioni multilingua, definendo priorità in base ai mercati serviti." },
      { question: "Vi occupate anche di intelligenza artificiale?", answer: "Sì. Valutiamo casi d’uso, dati, integrazioni e alternative prima di sviluppare soluzioni AI o automazioni per i processi aziendali." },
    ],
  },
];

export function getCityLanding(regionSlug: string, citySlug: string) {
  return cityLandings.find(
    (city) => city.regionSlug === regionSlug && city.slug === citySlug,
  );
}

export function getCityLandingByName(regionSlug: string, cityName: string) {
  return cityLandings.find(
    (city) => city.regionSlug === regionSlug && city.name === cityName,
  );
}

export function getCityUrl(city: CityLanding) {
  return `/dove-operiamo/${city.regionSlug}/${city.slug}`;
}
