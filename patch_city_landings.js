const fs = require('fs');
const path = 'src/data/cityLandings.ts';
let content = fs.readFileSync(path, 'utf8');

// For each city landing, we modify title, description, and intro to include the synonyms.

content = content.replace(
  'title: "Agenzia digitale per aziende e realtà di Noale",',
  'title: "Agenzia Digitale, Web Agency e Comunicazione a Noale",'
);
content = content.replace(
  'description:\n      "Strategia digitale, siti web, social media, advertising e soluzioni software per aziende e organizzazioni di Noale e del territorio veneziano.",',
  'description:\n      "Cerchi una web agency o un\'agenzia di comunicazione a Noale? Strategia digitale, siti web, social media e advertising per aziende del territorio.",'
);
content = content.replace(
  'intro:\n      "Operiamo concretamente a Noale e affianchiamo imprese, attività e organizzazioni che vogliono trasformare comunicazione, tecnologia e contenuti in risultati misurabili.",',
  'intro:\n      "Come web agency e agenzia di comunicazione attiva a Noale, affianchiamo imprese e organizzazioni che vogliono trasformare tecnologia e contenuti in risultati misurabili.",'
);

content = content.replace(
  'title: "Agenzia digitale per aziende di Castelfranco Veneto",',
  'title: "Agenzia Digitale, Web Agency e Comunicazione a Castelfranco Veneto",'
);
content = content.replace(
  'description:\n      "Siti web, software gestionali, SEO, advertising e comunicazione per aziende di Castelfranco Veneto e della Castellana.",',
  'description:\n      "La tua web agency e agenzia di comunicazione a Castelfranco Veneto. Siti web, software gestionali, SEO e advertising per aziende della Castellana.",'
);
content = content.replace(
  'intro:\n      "Dalla vicina sede di Vedelago supportiamo aziende di Castelfranco Veneto con progetti digitali costruiti per semplificare processi, comunicare competenze e generare opportunità.",',
  'intro:\n      "Operando come web agency e agenzia di comunicazione dalla vicina sede di Vedelago, supportiamo le aziende di Castelfranco Veneto con progetti digitali per generare opportunità.",'
);

content = content.replace(
  'title: "Agenzia digitale a Treviso per progetti misurabili",',
  'title: "Agenzia Digitale, Web Agency e Comunicazione a Treviso",'
);
content = content.replace(
  'description:\n      "Agenzia digitale in provincia di Treviso per siti web, SEO, social media, software su misura, advertising, analytics e soluzioni AI.",',
  'description:\n      "Web agency e agenzia di comunicazione in provincia di Treviso per siti web, SEO, social media, software su misura, advertising e soluzioni AI.",'
);
content = content.replace(
  'intro:\n      "Dalla sede di Vedelago affianchiamo aziende di Treviso e provincia con strategia, tecnologia e comunicazione coordinate intorno a obiettivi commerciali e operativi.",',
  'intro:\n      "Dalla nostra sede di Vedelago operiamo come web agency e agenzia di comunicazione per aziende di Treviso, unendo tecnologia e strategia ai tuoi obiettivi commerciali.",'
);

content = content.replace(
  'title: "Agenzia digitale per aziende di Venezia e provincia",',
  'title: "Agenzia Digitale, Web Agency e Comunicazione a Venezia",'
);
content = content.replace(
  'description:\n      "Strategia digitale, siti web, advertising, contenuti e lead generation per aziende di Venezia, Jesolo, del litorale e della provincia.",',
  'description:\n      "Cerchi una web agency o agenzia di comunicazione a Venezia? Strategia digitale, siti web e lead generation per aziende del litorale e della provincia.",'
);

content = content.replace(
  'title: "Agenzia digitale per aziende e attività di Padova",',
  'title: "Agenzia Digitale, Web Agency e Comunicazione a Padova",'
);
content = content.replace(
  'description:\n      "Siti web, marketing, lead generation, social media e soluzioni digitali per aziende, servizi e attività locali di Padova e provincia.",',
  'description:\n      "La tua web agency e agenzia di comunicazione a Padova. Siti web, marketing, lead generation e social media per aziende, servizi e attività locali.",'
);

content = content.replace(
  'title: "Partner digitale per aziende di Pordenone",',
  'title: "Agenzia Digitale, Web Agency e Comunicazione a Pordenone",'
);
content = content.replace(
  'description:\n      "Siti web, software, SEO, advertising, analytics e intelligenza artificiale per aziende di Pordenone e del Friuli occidentale.",',
  'description:\n      "Web agency e agenzia di comunicazione per aziende di Pordenone. Siti web, software, SEO, advertising e intelligenza artificiale nel Friuli occidentale.",'
);

content = content.replace(
  'title: "Agenzia digitale per aziende di Udine",',
  'title: "Agenzia Digitale, Web Agency e Comunicazione a Udine",'
);
content = content.replace(
  'description:\n      "Strategia digitale, siti web, SEO, comunicazione, software e automazioni per aziende di Udine e del territorio friulano.",',
  'description:\n      "La tua web agency e agenzia di comunicazione a Udine. Siti web, SEO, software e automazioni per imprese orientate al risultato nel territorio friulano.",'
);


fs.writeFileSync(path, content);
