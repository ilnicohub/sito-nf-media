const fs = require('fs');
const path = 'src/app/layout.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'default: "NF Media Lab | Agenzia di Comunicazione Digitale",',
  'default: "NF Media Lab | Agenzia Web a Vedelago e Treviso",'
);

content = content.replace(
  'description:\n    "Agenzia di comunicazione e innovazione digitale con sede a Vedelago (Treviso): realizziamo siti web, software su misura, SEO e strategie orientate alla crescita.",',
  'description:\n    "Agenzia digitale con sede a Vedelago, in provincia di Treviso: siti web, software, SEO, Google Ads e social media orientati alla crescita.",'
);

fs.writeFileSync(path, content);
