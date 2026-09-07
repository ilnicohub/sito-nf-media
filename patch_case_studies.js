const fs = require('fs');
const path = 'src/data/caseStudies.ts';
let content = fs.readFileSync(path, 'utf8');

const newCaseStudy = `
  {
    slug: "fc-calvi-noale-nuovo-sito-web",
    client: "F.C. Calvi Noale S.S.D. a r.l.",
    shortClient: "FC Calvi Noale",
    sector: "Sport e calcio",
    title: "Il nuovo sito web ufficiale di FC Calvi Noale",
    listingTitle: "Un nuovo ecosistema digitale per FC Calvi Noale",
    image: "/case-studies/fc-calvi-noale.webp",
    services: [
      "Sito web",
      "Web design",
      "UX/UI Design",
      "SEO"
    ],
    metrics: [
      {
        value: "100%",
        label: "Nuova piattaforma digitale",
        detail: "Un sito web completamente riprogettato da zero per rappresentare la società e raccogliere in un unico spazio tutte le informazioni e i contenuti del club.",
        chartLabel: "Nuovo sito",
        chartValue: 100,
      },
      {
        value: "360°",
        label: "Comunicazione del club",
        detail: "Una piattaforma pensata per raccontare la Prima Squadra, il Settore Giovanile, le news, la storia, i valori e tutte le principali attività della società.",
        chartLabel: "Contenuti",
        chartValue: 90,
      },
      {
        value: "100%",
        label: "Responsive",
        detail: "Un'esperienza progettata per offrire una navigazione efficace e immediata da desktop, tablet e smartphone.",
        chartLabel: "Mobile",
        chartValue: 100,
      },
    ],
    problem:
      "FC Calvi Noale aveva la necessità di rinnovare completamente la propria presenza web e dotarsi di un sito ufficiale più moderno, funzionale e coerente con l'immagine della società. Il precedente portale non valorizzava pienamente la comunicazione del club e non offriva una struttura sufficientemente efficace per organizzare tutte le informazioni legate alla Prima Squadra, al Settore Giovanile, alle attività societarie e alla comunicazione quotidiana.",
    solution:
      "Abbiamo progettato e sviluppato da zero il nuovo sito web ufficiale di FC Calvi Noale, trasformandolo in un vero hub digitale della società. Il progetto ha coinvolto struttura, design, esperienza utente, organizzazione dei contenuti e ottimizzazione per i motori di ricerca, fornendo una piattaforma capace di comunicare l'identità del club e rendere le informazioni facilmente accessibili.",
    heroIntro:
      "Un nuovo sito web ufficiale progettato per dare a FC Calvi Noale una presenza digitale moderna, riconoscibile e all'altezza del percorso della società.",
    overview:
      "Per una società calcistica il sito ufficiale rappresenta molto più di una semplice vetrina. È il punto di riferimento digitale attraverso cui tifosi, appassionati, tesserati, famiglie e addetti ai lavori possono conoscere il club, seguire le attività e trovare le informazioni di cui hanno bisogno. Abbiamo creato un ecosistema digitale ordinato e intuitivo, capace di raccontare <a href=\\"https://www.calvinoale.it\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"text-decoration: underline; color: inherit;\\">FC Calvi Noale</a> dentro e fuori dal campo.",
    workDone: [
      {
        title: "Progettazione ecosistema e web design",
        description:
          "Abbiamo definito una nuova architettura del sito organizzando le aree della società, con un design moderno, sportivo e coerente con l'identità del club, dando maggiore importanza alle immagini e ai contenuti.",
      },
      {
        title: "Struttura editoriale e ottimizzazione SEO",
        description:
          "Abbiamo creato una struttura pensata per ospitare comunicazioni ufficiali e news, tenendo conto dei principali aspetti SEO per garantire una crescita organica futura.",
      },
      {
        title: "Esperienza multi-dispositivo fluida",
        description:
          "Ogni sezione è stata progettata pensando al percorso dell'utente, garantendo una navigazione efficace e immediata da desktop, tablet e smartphone.",
      },
    ],
    impact: [
      {
        title: "Tutte le informazioni in un unico punto",
        description:
          "News, Prima Squadra, Settore Giovanile, storia, valori e attività del club trovano spazio all'interno di un unico ecosistema digitale moderno.",
      },
      {
        title: "Un'esperienza più semplice per gli utenti",
        description:
          "La nuova organizzazione dei contenuti permette a tifosi, famiglie, tesserati e partner di trovare più facilmente ciò che stanno cercando.",
      },
      {
        title: "Una base digitale per il futuro",
        description:
          "Il sito diventa parte integrante della strategia di comunicazione della società, offrendo un'infrastruttura flessibile sulla quale continuare a costruire la presenza online del club.",
      },
    ],
    stack: [
      "WordPress",
      "Elementor",
      "Web design",
      "UX/UI Design",
      "Responsive design",
      "SEO",
      "Gestione contenuti"
    ],
    relatedServices: [
      {
        label: "Realizzazione siti web",
        href: "/servizi/realizzazione-siti-web-nord-italia"
      },
      {
        label: "SEO e performance marketing",
        href: "/servizi/seo-e-performance-marketing"
      },
      {
        label: "Social media management",
        href: "/servizi/social-media-management"
      }
    ],
    nextStep:
      "Anche la tua azienda ha bisogno di un sito web più moderno, professionale e realmente utile alla tua attività? Possiamo analizzare la tua presenza digitale e progettare una soluzione costruita intorno ai tuoi obiettivi.",
  },
];`;

content = content.replace('  },\n];', '  },' + newCaseStudy);
fs.writeFileSync(path, content);
