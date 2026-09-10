const fs = require('fs');
const path = 'src/components/services/ServiceLanding.tsx';
let content = fs.readFileSync(path, 'utf8');

const newJsonLdLogic = `
  const siteUrl = "https://www.nfmedialab.it";
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: intro,
    provider: {
      "@type": "Organization",
      name: "NF Media Lab",
      url: siteUrl
    }
  };

  const faqJsonLd = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  const jsonLdArray = faqJsonLd ? [serviceJsonLd, faqJsonLd] : [serviceJsonLd];
`;

content = content.replace(
  /const faqJsonLd = faq && faq\.length > 0 \? \{[\s\S]*?\} : null;/g,
  newJsonLdLogic
);

content = content.replace(
  /dangerouslySetInnerHTML=\{\{\s*__html: JSON\.stringify\(faqJsonLd\)\.replace\(\/<\/g, "\\\\u003c"\),\s*\}\}/g,
  'dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray).replace(/</g, "\\\\u003c") }}'
);

content = content.replace(
  /\{faqJsonLd && \(/g,
  '{jsonLdArray && ('
);

fs.writeFileSync(path, content);
