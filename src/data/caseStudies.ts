export type CaseStudyMetric = {
  value: string;
  label: string;
  detail: string;
  chartLabel: string;
  chartValue: number;
};

export type CaseStudyDetail = {
  slug: string;
  client: string;
  shortClient: string;
  sector: string;
  title: string;
  listingTitle: string;
  image: string;
  services: string[];
  metrics: CaseStudyMetric[];
  problem: string;
  solution: string;
  heroIntro: string;
  overview: string;
  workDone: Array<{ title: string; description: string }>;
  impact: Array<{ title: string; description: string }>;
  stack: string[];
  relatedServices: Array<{ label: string; href: string }>;
  nextStep: string;
};

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "italsample-redesign-campagne",
    client: "Italsample S.R.L.",
    shortClient: "Italsample",
    sector: "Campionari ed editoria tessile",
    title: "Restyling web e strategie di acquisizione per leader storico nella progettazione campionari",
    listingTitle: "Evoluzione digitale per eccellenza manifatturiera",
    image: "/case-studies/italsample.webp",
    services: ["Web design", "Campagne advertising", "Content creation"],
    metrics: [
      {
        value: "+45%",
        label: "Traffico in 30 giorni",
        detail: "Incremento rapido delle sessioni web grazie all'ottimizzazione e all'avvio di campagne mirate.",
        chartLabel: "Crescita traffico",
        chartValue: 45,
      },
      {
        value: "+20%",
        label: "Qualità dei lead",
        detail: "Miglioramento del conversion rate nei primi 30 giorni dal lancio del nuovo ecosistema digitale.",
        chartLabel: "Conversion Rate",
        chartValue: 20,
      },
    ],
    problem:
      "Con oltre 40 anni di esperienza, Italsample trasforma ogni campionario in un vero progetto di design che fonde estetica, artigianalità e tecnologia. Tuttavia, la loro struttura digitale non rifletteva più questa storica eccellenza e non era ottimizzata per la lead generation. Il sito necessitava di un restyling profondo per valorizzare il loro metodo progettuale, mentre l'advertising richiedeva una spinta strategica per attrarre traffico qualificato.",
    solution:
      "In un solo mese abbiamo avviato un restyling completo dell'esperienza web, supportato dalla creazione di contenuti visivi dedicati. Parallelamente, abbiamo strutturato campagne di acquisizione per massimizzare subito le prestazioni e iniziare a raccogliere risultati tangibili sin dalle prime settimane.",
    heroIntro:
      "Un progetto digitale costruito per esaltare oltre 40 anni di eccellenza nella progettazione e confezionamento di campionari, unendo il restyling web all'ottimizzazione immediata delle campagne.",
    overview:
      "Lavorare con una realtà storica richiede di trasmettere immediatamente l'altissimo valore dei loro prodotti. Abbiamo riorganizzato la presentazione aziendale online per riflettere il loro metodo rigoroso, migliorato i flussi di navigazione e indirizzato nuovo traffico tramite campagne studiate ad hoc, ottenendo riscontri eccellenti in soli 30 giorni.",
    workDone: [
      {
        title: "Redesign dell'esperienza web",
        description:
          "Abbiamo modernizzato il sito, rendendolo più chiaro, veloce e orientato all'acquisizione contatti.",
      },
      {
        title: "Ottimizzazione campagne e advertising",
        description:
          "Sono state lanciate nuove campagne con messaggi più mirati per aumentare la pertinenza del traffico in entrata.",
      },
      {
        title: "Creazione contenuti digitali",
        description:
          "Abbiamo prodotto asset visivi per migliorare la presentazione dei servizi e dare forza alle pagine chiave del sito.",
      },
    ],
    impact: [
      {
        title: "Crescita immediata del traffico",
        description:
          "L'ottimizzazione SEO di base e le campagne hanno portato a un aumento sensibile delle visite nel primo mese.",
      },
      {
        title: "Immagine più moderna e professionale",
        description:
          "Il restyling ha allineato il valore percepito sul web all'effettiva qualità artigianale dell'azienda.",
      },
      {
        title: "Maggiori opportunità commerciali",
        description:
          "Flussi di contatto semplificati hanno permesso di iniziare ad acquisire lead di maggiore qualità.",
      },
    ],
    stack: ["Sito web", "Campagne Adv", "UI/UX Design", "Content strategy", "Analytics"],
    relatedServices: [
      { label: "Realizzazione siti web", href: "/servizi/realizzazione-siti-web-nord-italia" },
      { label: "SEO e performance marketing", href: "/servizi/seo-e-performance-marketing" },
      { label: "Brand identity e comunicazione", href: "/servizi/brand-identity-e-comunicazione" },
    ],
    nextStep:
      "Desideri rinnovare il tuo sito e ottenere risultati concreti in tempi rapidi? Possiamo valutare insieme la strategia più adatta al tuo settore.",
  },
  {
    slug: "symblux-comunicazione-digitale",
    client: "Symblux S.R.L.",
    shortClient: "Symblux",
    sector: "Industria e manifattura",
    title: "Comunicazione digitale e presenza online per azienda industriale",
    listingTitle: "Miglioramento Comunicazione digitale e presenza online",
    image: "/case-studies/symblux.webp",
    services: ["Web design", "SEO", "Content strategy"],
    metrics: [
      {
        value: "+40%",
        label: "Contatti tramite sito Web",
        detail: "Crescita delle richieste arrivate dal canale web dopo il riordino della struttura e dei contenuti.",
        chartLabel: "Contatti web",
        chartValue: 40,
      },
      {
        value: "+25%",
        label: "Traffico organico",
        detail: "Incremento delle visite provenienti da ricerca organica sulle pagine più rilevanti.",
        chartLabel: "Traffico SEO",
        chartValue: 25,
      },
    ],
    problem:
      "Symblux aveva bisogno di una presenza digitale più credibile e ordinata. Il sito non raccontava in modo chiaro il valore tecnico dell'azienda, la comunicazione era frammentata e le pagine non aiutavano abbastanza l'utente a capire servizi, competenze e motivi per contattare l'azienda.",
    solution:
      "Abbiamo ripensato struttura, contenuti e percorsi di navigazione, lavorando su un sito più chiaro, più leggibile e più orientato al contatto. La parte SEO è stata integrata nella costruzione delle pagine, non aggiunta a posteriori.",
    heroIntro:
      "Un progetto di comunicazione digitale pensato per rendere più chiara la proposta di valore di un'azienda industriale e trasformare il sito in uno strumento più utile al processo commerciale.",
    overview:
      "Il lavoro non si è limitato al restyling grafico. Abbiamo riorganizzato le informazioni, dato più peso ai contenuti tecnici e costruito un percorso più lineare per chi arriva sul sito da ricerca, referral o contatti commerciali.",
    workDone: [
      {
        title: "Architettura dei contenuti",
        description:
          "Abbiamo ridefinito la gerarchia delle informazioni per rendere più immediata la comprensione dei servizi e delle competenze aziendali.",
      },
      {
        title: "Restyling dell'esperienza web",
        description:
          "Il sito è stato ripensato con un'interfaccia più pulita, sezioni più leggibili e call to action più coerenti con il percorso dell'utente.",
      },
      {
        title: "Ottimizzazione SEO di base",
        description:
          "Titoli, testi, struttura delle pagine e contenuti sono stati lavorati per aumentare la pertinenza sulle ricerche collegate al settore.",
      },
    ],
    impact: [
      {
        title: "Maggiore chiarezza commerciale",
        description:
          "Le pagine spiegano meglio cosa fa l'azienda e riducono la distanza tra interesse iniziale e richiesta di contatto.",
      },
      {
        title: "Presenza digitale più autorevole",
        description:
          "Il sito comunica meglio competenza, ordine e solidità: aspetti fondamentali per un'azienda B2B.",
      },
      {
        title: "Base SEO più sostenibile",
        description:
          "La struttura rende più semplice far crescere nuovi contenuti e pagine tecniche nel tempo.",
      },
    ],
    stack: ["Sito aziendale", "UX writing", "SEO on-page", "Content strategy", "Tracking contatti"],
    relatedServices: [
      { label: "Realizzazione siti web", href: "/servizi/realizzazione-siti-web-nord-italia" },
      { label: "SEO e performance marketing", href: "/servizi/seo-e-performance-marketing" },
      { label: "Brand identity e comunicazione", href: "/servizi/brand-identity-e-comunicazione" },
    ],
    nextStep:
      "Vuoi rendere più chiara e credibile la presenza online della tua azienda? Possiamo partire da una valutazione del sito attuale e dei punti che oggi frenano i contatti.",
  },
  {
    slug: "fc-calvi-noale-social-media",
    client: "FC Calvi Noale",
    shortClient: "FC Calvi Noale",
    sector: "Sport e community",
    title: "Social media e contenuti digitali per una società sportiva",
    listingTitle: "Gestione Social Media e Content Creation",
    image: "/case-studies/fccalvinoale.webp",
    services: ["Social strategy", "Video content", "Advertising"],
    metrics: [
      {
        value: "900k+",
        label: "Visualizzazioni mensili",
        detail: "Copertura mensile ottenuta grazie a contenuti più continui, riconoscibili e coerenti con il pubblico.",
        chartLabel: "Reach video",
        chartValue: 90,
      },
      {
        value: "+300%",
        label: "Engagement sui social",
        detail: "Aumento delle interazioni sulle pubblicazioni e dei segnali di partecipazione della community.",
        chartLabel: "Engagement",
        chartValue: 75,
      },
    ],
    problem:
      "La società aveva una presenza social discontinua e poco strutturata. Mancava una linea editoriale riconoscibile, i contenuti non valorizzavano abbastanza squadra, community e sponsor, e la comunicazione non riusciva a trasformare gli eventi sportivi in racconto digitale.",
    solution:
      "Abbiamo costruito una strategia social basata su continuità, contenuti video, storytelling e format riconoscibili. L'obiettivo era rendere i canali vivi, utili per la community e interessanti anche per sponsor e partner.",
    heroIntro:
      "Un progetto social pensato per trasformare partite, persone e momenti della società in contenuti capaci di generare attenzione, partecipazione e riconoscibilità.",
    overview:
      "Nel mondo sportivo il contenuto non è solo estetica: serve ritmo, presenza, tempestività e capacità di raccontare la community. Il lavoro ha unito pianificazione editoriale, produzione contenuti e gestione dei canali.",
    workDone: [
      {
        title: "Strategia editoriale",
        description:
          "Abbiamo definito rubriche, tono di voce, frequenza e priorità dei contenuti per rendere la comunicazione più riconoscibile.",
      },
      {
        title: "Produzione video e contenuti matchday",
        description:
          "Highlights, backstage, momenti partita e contenuti verticali sono stati organizzati per aumentare attenzione e coinvolgimento.",
      },
      {
        title: "Gestione e ottimizzazione dei canali",
        description:
          "La pubblicazione è stata coordinata per mantenere continuità, migliorare le performance e valorizzare eventi, squadra e sponsor.",
      },
    ],
    impact: [
      {
        title: "Community più attiva",
        description:
          "Contenuti più frequenti e riconoscibili hanno aumentato le interazioni e la partecipazione del pubblico.",
      },
      {
        title: "Maggiore valore per sponsor e partner",
        description:
          "Una presenza social più forte rende più interessante l'ecosistema digitale della società.",
      },
      {
        title: "Identità sportiva più chiara",
        description:
          "Il club comunica con più continuità e dà più peso ai momenti che costruiscono appartenenza.",
      },
    ],
    stack: ["Social strategy", "Reel e video verticali", "Content creation", "Advertising", "Community management"],
    relatedServices: [
      { label: "Social media management", href: "/servizi/social-media-management" },
      { label: "Brand identity e comunicazione", href: "/servizi/brand-identity-e-comunicazione" },
      { label: "Data analytics e tracking", href: "/servizi/data-analytics-e-tracking" },
    ],
    nextStep:
      "Se vuoi trasformare i canali social della tua realtà in uno strumento più riconoscibile e costante, possiamo costruire una linea editoriale adatta al tuo pubblico.",
  },
  {
    slug: "euroline-gestionale-su-misura",
    client: "Euroline S.R.L.",
    shortClient: "Euroline",
    sector: "Software e processi",
    title: "Gestionale ERP su misura per processi aziendali più efficienti",
    listingTitle: "Sviluppo gestionale ERP su misura",
    image: "/case-studies/euroline.webp",
    services: ["ERP custom", "Automazione", "Integrazioni"],
    metrics: [
      {
        value: "-40%",
        label: "Tempi operativi",
        detail: "Riduzione dei tempi nelle attività ripetitive e nei passaggi gestionali più critici.",
        chartLabel: "Tempi ridotti",
        chartValue: 40,
      },
      {
        value: "+30%",
        label: "Efficienza dei processi",
        detail: "Miglioramento della gestione dei dati e della continuità tra reparti e attività operative.",
        chartLabel: "Efficienza",
        chartValue: 30,
      },
    ],
    problem:
      "Euroline gestiva attività operative e dati aziendali con strumenti frammentati. Questo rendeva più difficile controllare informazioni, responsabilità e avanzamento dei processi, aumentando il rischio di errori e rallentamenti.",
    solution:
      "Abbiamo sviluppato un gestionale su misura, progettato intorno ai flussi reali dell'azienda. La piattaforma ha centralizzato dati, ordini, attività e informazioni operative in un ambiente più ordinato e controllabile.",
    heroIntro:
      "Un progetto software costruito per ridurre complessità operativa, centralizzare le informazioni e rendere più controllabili i processi aziendali.",
    overview:
      "Il valore del gestionale non sta solo nelle funzionalità, ma nel modo in cui aderisce al lavoro quotidiano dell'azienda. Per questo il progetto è partito dall'analisi dei flussi esistenti e dai punti in cui si generavano ritardi o duplicazioni.",
    workDone: [
      {
        title: "Analisi dei flussi operativi",
        description:
          "Abbiamo mappato attività, dati e passaggi tra reparti per individuare dove il sistema doveva semplificare davvero il lavoro.",
      },
      {
        title: "Sviluppo del gestionale custom",
        description:
          "La piattaforma è stata progettata su misura, con moduli dedicati alla gestione operativa e alla consultazione dei dati aziendali.",
      },
      {
        title: "Centralizzazione e automazioni",
        description:
          "Abbiamo ridotto passaggi manuali e frammentazione, rendendo più immediato il controllo delle informazioni.",
      },
    ],
    impact: [
      {
        title: "Meno attività ripetitive",
        description:
          "Il sistema riduce operazioni manuali e duplicazioni, liberando tempo operativo.",
      },
      {
        title: "Dati più ordinati",
        description:
          "Le informazioni sono più facili da consultare, aggiornare e usare nelle decisioni quotidiane.",
      },
      {
        title: "Processi più controllabili",
        description:
          "Il gestionale rende più chiaro lo stato delle attività e migliora il coordinamento interno.",
      },
    ],
    stack: ["ERP custom", "Database", "Automazioni", "Dashboard operative", "Integrazioni"],
    relatedServices: [
      { label: "Sviluppo gestionali su misura", href: "/servizi/sviluppo-gestionali-su-misura" },
      { label: "Data analytics e tracking", href: "/servizi/data-analytics-e-tracking" },
      { label: "Realizzazione siti web", href: "/servizi/realizzazione-siti-web-nord-italia" },
    ],
    nextStep:
      "Se oggi usi troppi file, strumenti separati o passaggi manuali, possiamo capire quali processi avrebbe senso centralizzare in un gestionale su misura.",
  },
  {
    slug: "salone-tamara-vanessa-lead-generation",
    client: "Salone Tamara&Vanessa S.N.C.",
    shortClient: "Tamara&Vanessa",
    sector: "Beauty e servizi",
    title: "Presenza online e lead generation per attività beauty",
    listingTitle: "Miglioramento presenza online e lead generation",
    image: "/case-studies/tamaraevanessa.webp",
    services: ["Sito web", "Lead generation", "Advertising"],
    metrics: [
      {
        value: "+150%",
        label: "Richieste di preventivo",
        detail: "Aumento delle richieste arrivate tramite canali digitali e percorsi di contatto più chiari.",
        chartLabel: "Richieste",
        chartValue: 70,
      },
      {
        value: "+200%",
        label: "Visite al sito",
        detail: "Crescita del traffico grazie a una presenza più curata e ad attività di promozione più mirate.",
        chartLabel: "Visite sito",
        chartValue: 82,
      },
    ],
    problem:
      "Il salone aveva una presenza online debole e poco orientata al contatto. Il sito non valorizzava abbastanza servizi, immagine e possibilità di richiesta, mentre le attività promozionali non erano coordinate in un percorso chiaro.",
    solution:
      "Abbiamo lavorato su sito, comunicazione e campagne per rendere più semplice scoprire i servizi, capire il valore dell'attività e inviare una richiesta. Il progetto ha collegato immagine, contenuti e acquisizione contatti.",
    heroIntro:
      "Un intervento digitale pensato per rendere più visibile l'attività, valorizzare i servizi e aumentare le richieste provenienti dal web.",
    overview:
      "Per un'attività locale il digitale deve fare due cose: trasmettere fiducia e rendere facile il contatto. Il progetto ha lavorato su entrambe, evitando una comunicazione solo estetica e puntando su chiarezza, continuità e conversione.",
    workDone: [
      {
        title: "Sito più chiaro e orientato al contatto",
        description:
          "Abbiamo riorganizzato servizi, contenuti e call to action per ridurre i passaggi tra interesse e richiesta.",
      },
      {
        title: "Comunicazione visiva più coerente",
        description:
          "La presenza digitale è stata resa più riconoscibile e adatta al posizionamento del salone.",
      },
      {
        title: "Campagne per richieste qualificate",
        description:
          "Le attività promozionali sono state collegate a obiettivi concreti: visite, richieste e contatti.",
      },
    ],
    impact: [
      {
        title: "Più richieste dal digitale",
        description:
          "I canali online sono diventati più utili per generare contatti e opportunità commerciali.",
      },
      {
        title: "Esperienza più semplice",
        description:
          "L'utente trova più facilmente informazioni, servizi e modalità di contatto.",
      },
      {
        title: "Immagine più professionale",
        description:
          "La comunicazione trasmette più fiducia e valorizza meglio il lavoro dell'attività.",
      },
    ],
    stack: ["Sito web", "Landing page", "Advertising", "Lead generation", "Tracking richieste"],
    relatedServices: [
      { label: "Realizzazione siti web", href: "/servizi/realizzazione-siti-web-nord-italia" },
      { label: "SEO e performance marketing", href: "/servizi/seo-e-performance-marketing" },
      { label: "Social media management", href: "/servizi/social-media-management" },
    ],
    nextStep:
      "Se vuoi rendere sito, social e campagne più utili alla raccolta di richieste, possiamo partire da un'analisi del percorso attuale.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
