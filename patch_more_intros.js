const fs = require('fs');
const path = 'src/data/cityLandings.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'intro:\n      "Affianchiamo aziende e organizzazioni di Venezia, Jesolo e del territorio provinciale con progetti digitali capaci di valorizzare competenze, identità e relazioni commerciali.",',
  'intro:\n      "Come web agency e agenzia di comunicazione per Venezia, Jesolo e provincia, creiamo progetti digitali capaci di valorizzare le tue competenze e generare relazioni commerciali.",'
);

content = content.replace(
  'intro:\n      "Supportiamo imprese e attività di Padova nel costruire una presenza digitale più credibile, acquisire richieste e coordinare sito, contenuti, campagne e misurazione.",',
  'intro:\n      "Siamo una web agency e agenzia di comunicazione attiva a Padova, specializzata nell\'aiutare imprese e attività locali ad acquisire richieste attraverso siti web e campagne.",'
);

content = content.replace(
  'intro:\n      "Affianchiamo aziende di Pordenone con tecnologia, comunicazione e acquisizione coordinate per rendere più chiara l’offerta e più efficienti i processi.",',
  'intro:\n      "Operiamo come web agency e agenzia di comunicazione per le aziende di Pordenone unendo tecnologia, comunicazione e acquisizione per rendere più efficienti i processi.",'
);

content = content.replace(
  'intro:\n      "Supportiamo aziende di Udine nel rendere più riconoscibile la propria offerta, acquisire opportunità e costruire strumenti digitali adatti a processi e mercati differenti.",',
  'intro:\n      "In qualità di web agency e agenzia di comunicazione, supportiamo le aziende di Udine nell\'acquisire opportunità online e costruire strumenti digitali adatti a ogni mercato.",'
);

fs.writeFileSync(path, content);
