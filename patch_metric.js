const fs = require('fs');
const path = 'src/data/caseStudies.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /value: "-40%",\s*label: "Frequenza di rimbalzo",\s*detail: "Gli utenti rimangono più a lungo sul sito esplorando le news e i team, grazie a percorsi di navigazione chiari e contenuti ben strutturati.",/,
  'value: "+50%",\n        label: "Tempo sul sito",\n        detail: "L’organizzazione chiara e accessibile dei contenuti porta gli utenti a trattenersi più a lungo a leggere news e approfondimenti.",'
);

fs.writeFileSync(path, content);
console.log("Replaced");
