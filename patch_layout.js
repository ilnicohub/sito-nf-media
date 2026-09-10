const fs = require('fs');
const path = 'src/app/layout.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'default: "NF Media Lab | Agenzia Web a Vedelago e Treviso",',
  'default: "NF Media Lab | Agenzia Digitale, Web Agency e Comunicazione",'
);

content = content.replace(
  'description:\n    "Agenzia digitale con sede a Vedelago, in provincia di Treviso: siti web, software, SEO, Google Ads e social media orientati alla crescita.",',
  'description:\n    "Web agency, agenzia digitale e di comunicazione a Vedelago (Treviso): realizziamo siti web, software su misura, SEO, Google Ads e social media orientati alla crescita.",'
);

fs.writeFileSync(path, content);
