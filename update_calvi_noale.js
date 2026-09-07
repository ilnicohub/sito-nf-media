const fs = require('fs');
const path = 'src/data/caseStudies.ts';
let content = fs.readFileSync(path, 'utf8');

// The replacement logic: since this is near the end, we can parse or just do a regex replace for the whole object.
// But it's easier to just find the block and replace it. 
// I'll do a string replacement of the specific case study.

const oldBlockRegex = /\{\s*slug:\s*"fc-calvi-noale-nuovo-sito-web"[\s\S]*?(?=\}\s*\])/m;

const newBlock = `{
    slug: "fc-calvi-noale-nuovo-sito-web",
    client: "F.C. Calvi Noale S.S.D. a r.l.",
    shortClient: "FC Calvi Noale",
    sector: "Sport e calcio · Noale, Venezia",
    title: "Il nuovo sito web ufficiale di FC Calvi Noale | Agenzia Digitale a Noale",
    listingTitle: "Un ecosistema digitale su misura per FC Calvi Noale",
    image: "/case-studies/fc-calvi-noale.webp",
    services: [
      "Sito web",
      "Web design",
      "UX/UI Design",
      "SEO"
    ],
    metrics: [
      {
        value: "-40%",
        label: "Frequenza di rimbalzo",
        detail: "Gli utenti rimangono più a lungo sul sito esplorando le news e i team, grazie a percorsi di navigazione chiari e contenuti ben strutturati.",
        chartLabel: "Coinvolgimento",
        chartValue: 60,
      },
      {
        value: "+45%",
        label: "Pagine per sessione",
        detail: "L'interfaccia intuitiva e l'architettura dell'informazione portano i tifosi a consultare molte più informazioni rispetto al vecchio portale.",
        chartLabel: "Navigazione",
        chartValue: 45,
      },
      {
        value: "100%",
        label: "Responsive Design",
        detail: "Un'esperienza progettata per offrire una navigazione efficace e immediata da desktop, tablet e smartphone.",
        chartLabel: "Mobile",
        chartValue: 100,
      },
    ],
    problem:
      "FC Calvi Noale aveva la necessità di rinnovare completamente la propria presenza web e dotarsi di un sito ufficiale più moderno e coerente con l'immagine della società. Il precedente portale non valorizzava pienamente il club e non offriva una struttura efficace per organizzare la Prima Squadra, il Settore Giovanile e le news. Cercavano un'agenzia di comunicazione a Noale capace di comprendere la realtà sportiva locale e trasformarla in un progetto digitale solido.",
    solution:
      "Come agenzia digitale radicata nel territorio, abbiamo progettato e sviluppato da zero il nuovo sito web di FC Calvi Noale. Il progetto ha coinvolto struttura, design, esperienza utente e ottimizzazione SEO, costruendo una piattaforma che non è solo una vetrina, ma un hub digitale capace di comunicare l'identità del club, rendere le informazioni accessibili a tutti i tifosi e sostenere la crescita della società negli anni a venire.",
    heroIntro:
      "Un nuovo sito web ufficiale progettato per dare a FC Calvi Noale una presenza digitale moderna e riconoscibile. Sviluppato dalla nostra agenzia di comunicazione a Noale, su misura per il territorio e lo sport.",
    overview:
      "Per una società calcistica il sito ufficiale è il punto di riferimento attraverso cui tifosi, famiglie e addetti ai lavori possono seguire le attività. Come agenzia di comunicazione e digitale operativa a Noale, abbiamo lavorato a un ecosistema ordinato e intuitivo, capace di raccontare <a href=\\"https://www.calvinoale.it\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>FC Calvi Noale</strong></a> dentro e fuori dal campo e di posizionarsi correttamente sui motori di ricerca.",
    workDone: [
      {
        title: "Progettazione ecosistema e web design",
        description:
          "Abbiamo definito una nuova architettura organizzando le aree della società, con un design moderno, sportivo e coerente con l'identità del club, dando maggiore importanza a immagini e contenuti.",
      },
      {
        title: "Struttura editoriale e ottimizzazione SEO",
        description:
          "Abbiamo creato una struttura per ospitare comunicazioni ufficiali e news, ottimizzando i parametri tecnici e le parole chiave strategiche (come 'agenzia digitale Noale') per garantire una forte visibilità organica.",
      },
      {
        title: "Esperienza multi-dispositivo fluida",
        description:
          "Ogni sezione è stata progettata pensando al percorso dell'utente, garantendo una navigazione efficace e istantanea da desktop, tablet e smartphone, dove si concentra la maggior parte del traffico.",
      },
    ],
    impact: [
      {
        title: "Tutte le informazioni in un unico punto",
        description:
          "News, Prima Squadra, Settore Giovanile, storia, valori e attività del club trovano finalmente spazio all'interno di un unico ecosistema digitale moderno.",
      },
      {
        title: "Un'esperienza più semplice per gli utenti",
        description:
          "La nuova organizzazione dei contenuti permette a tifosi, famiglie, tesserati e partner di navigare facilmente e trovare subito ciò che stanno cercando.",
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
      "SEO locale",
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
        label: "Brand identity e comunicazione",
        href: "/servizi/brand-identity-e-comunicazione"
      }
    ],
    nextStep:
      "Cerchi un'agenzia di comunicazione a Noale o nel Nord Italia per rinnovare il tuo sito web? Possiamo analizzare la tua presenza digitale e progettare una soluzione costruita intorno ai tuoi veri obiettivi.",
  }`;

if (oldBlockRegex.test(content)) {
  content = content.replace(oldBlockRegex, newBlock);
  fs.writeFileSync(path, content);
  console.log("Success");
} else {
  console.log("Regex not found");
}
