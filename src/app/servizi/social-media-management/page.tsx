import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: { absolute: "Social Media Management | NF Media Lab" },
  description:
    "Gestione social media, content strategy, video e community management per costruire autorevolezza e generare opportunità commerciali.",
  alternates: { canonical: "/servizi/social-media-management" },
  openGraph: {
    title: "Social Media Management | NF Media Lab",
    description:
      "Strategia, contenuti e gestione dei canali social collegati agli obiettivi reali dell’azienda.",
    url: "/servizi/social-media-management",
  },
};

export default function SocialMediaManagement() {
  return (
    <ServiceLanding
      eyebrow="Strategia e contenuti social"
      title="Social media management con una strategia editoriale orientata al business"
      intro="Gestiamo i canali social come parte del sistema commerciale e reputazionale dell’azienda: strategia, produzione dei contenuti, pubblicazione e analisi lavorano verso obiettivi condivisi."
      benefits={[
        {
          title: "Strategia editoriale",
          icon: "calendar",
          description:
            "Pilastri, format, calendario e messaggi vengono definiti in funzione di pubblico e obiettivi aziendali.",
        },
        {
          title: "Produzione contenuti",
          icon: "clapperboard",
          description:
            "Visual, video e copy sono progettati per il linguaggio specifico di ogni piattaforma.",
        },
        {
          title: "Community management",
          icon: "messages",
          description:
            "Interazioni e messaggi vengono gestiti con tempi, tono e criteri coerenti con il brand.",
        },
        {
          title: "Crescita qualificata",
          icon: "users",
          description:
            "Valutiamo attenzione, autorevolezza, traffico e opportunità generate, non soltanto metriche superficiali.",
        },
      ]}
      process={[
        {
          title: "Audit dei canali",
          description:
            "Analizziamo presenza attuale, pubblico, competitor, contenuti e risultati disponibili.",
        },
        {
          title: "Piano editoriale",
          description:
            "Definiamo rubriche, frequenza, formati, responsabilità e criteri di approvazione.",
        },
        {
          title: "Produzione e gestione",
          description:
            "Creiamo, pubblichiamo e coordiniamo i contenuti mantenendo continuità e qualità.",
        },
        {
          title: "Analisi e sviluppo",
          description:
            "I dati mensili guidano l’evoluzione dei format e l’integrazione con campagne e sito.",
        },
      ]}
      idealFor={[
        "Costruire una presenza social professionale e continuativa",
        "Trasformare competenze aziendali in contenuti autorevoli",
        "Coordinare organico, advertising e attività commerciali",
        "Produrre video e format senza gravare sul team interno",
      ]}
      faq={[
        {
          question: "Come scegliete piattaforme, format e frequenza editoriale?",
          answer:
            "La scelta deriva da pubblico, ciclo di vendita, risorse disponibili e obiettivi. Evitiamo di presidiare canali o frequenze che non possono essere sostenuti con qualità.",
        },
        {
          question: "Come organizzate approvazioni e responsabilità con il team interno?",
          answer:
            "Definiamo referenti, calendario, tempi di revisione e criteri di escalation. Il processo garantisce controllo sul brand senza trasformare ogni pubblicazione in un collo di bottiglia.",
        },
        {
          question: "Come collegate i contenuti social agli obiettivi commerciali?",
          answer:
            "Ogni rubrica ha una funzione: reputazione, educazione, domanda, traffico o conversione. Analizziamo il contributo dei contenuti nel percorso complessivo, non solo visualizzazioni e follower.",
        },
      ]}
    />
  );
}
