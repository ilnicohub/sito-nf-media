import type { Metadata } from "next";
import ServiceLanding from "@/components/services/ServiceLanding";

export const metadata: Metadata = {
  title: {
    absolute:
      "NF Media Lab | Comunicazione Sportiva per Società e Club",
  },
  description:
    "Agenzia di comunicazione sportiva per società di calcio, basket, pallavolo e sport in generale. Siti web, social media, contenuti e strategie per nuove iscrizioni, sponsor e visibilità del club.",
  keywords: ["comunicazione sportiva", "agenzia comunicazione sportiva", "marketing sportivo", "comunicazione società sportive", "social media club sportivi", "sito web società sportiva", "agenzia marketing sportivo", "comunicazione digitale sport"],
  alternates: { canonical: "/servizi/comunicazione-sportiva" },
  openGraph: {
    title:
      "NF Media Lab | Comunicazione Sportiva per Società e Club",
    description:
      "Gestiamo la comunicazione digitale di società sportive: siti web, social media, contenuti e campagne per far crescere il club dentro e fuori dal campo.",
    url: "/servizi/comunicazione-sportiva",
  },
};

export default function ComunicazioneSportiva() {
  return (
    <ServiceLanding
      eyebrow="Sport, club e community"
      title="Comunicazione sportiva per società che vogliono crescere dentro e fuori dal campo"
      intro="Siamo un'agenzia di comunicazione specializzata nel mondo sportivo. Affianchiamo società di calcio, basket, pallavolo e di ogni disciplina nella costruzione di una presenza digitale professionale: siti web, gestione social media, creazione contenuti, campagne e strategie per attrarre nuovi tesserati, coinvolgere i tifosi e valorizzare gli sponsor."
      benefits={[
        {
          title: "Social media per società sportive",
          icon: "clapperboard",
          description:
            "Strategia editoriale, creazione contenuti e gestione dei canali social del club. Raccontiamo partite, persone e community con un linguaggio che genera appartenenza e visibilità per gli sponsor.",
        },
        {
          title: "Siti web per club e associazioni",
          icon: "layout",
          description:
            "Progettiamo siti web per società sportive che siano punti di riferimento per tifosi, famiglie, tesserati e partner commerciali: news, squadre, risultati e contatti sempre aggiornati.",
        },
        {
          title: "Contenuti e produzioni sportive",
          icon: "megaphone",
          description:
            "Shooting, video, grafiche matchday, campagne di lancio divise e format ricorrenti. Ogni contenuto è pensato per rafforzare l'identità del club e aumentare l'engagement della community.",
        },
        {
          title: "Strategia per iscrizioni e sponsor",
          icon: "target",
          description:
            "Colleghiamo la comunicazione sportiva a obiettivi concreti: campagne per nuove iscrizioni al settore giovanile, pacchetti sponsor più appetibili e maggiore visibilità per i partner del club.",
        },
      ]}
      process={[
        {
          title: "Analisi del club e del territorio",
          description:
            "Studiamo la società sportiva, il bacino di riferimento, i competitor locali, i canali attivi e le risorse disponibili per definire una strategia realistica e sostenibile.",
        },
        {
          title: "Piano di comunicazione sportiva",
          description:
            "Definiamo palinsesto social, format, sito web, campagne stagionali e obiettivi misurabili: crescita community, nuove iscrizioni, coinvolgimento sponsor.",
        },
        {
          title: "Produzione e gestione operativa",
          description:
            "Creiamo contenuti, gestiamo i canali, pubblichiamo news e aggiornamenti, coordiniamo shooting e produzioni video durante la stagione sportiva.",
        },
        {
          title: "Report e sviluppo",
          description:
            "Misuriamo risultati, visualizzazioni, crescita e opportunità generate. I dati guidano l'evoluzione della strategia di comunicazione del club.",
        },
      ]}
      idealFor={[
        "Dare alla tua società sportiva una comunicazione professionale e riconoscibile",
        "Costruire una presenza social strutturata che racconti il club tutto l'anno",
        "Attrarre nuovi tesserati e iscrizioni attraverso contenuti e campagne mirate",
        "Valorizzare i tuoi sponsor con visibilità concreta e dati misurabili",
        "Avere un sito web del club sempre aggiornato e utile per tifosi, famiglie e partner",
      ]}
      faq={[
        {
          question:
            "Lavorate solo con società di calcio o anche con altri sport?",
          answer:
            "Lavoriamo con società sportive di ogni disciplina: calcio, basket, pallavolo, nuoto, rugby e sport individuali. Il metodo si adatta al contesto, al pubblico e alle dinamiche specifiche di ogni sport.",
        },
        {
          question:
            "Seguite solo club della vostra zona o lavorate in tutta Italia?",
          answer:
            "Operiamo in tutta Italia. La gestione social, la creazione contenuti e la strategia di comunicazione sportiva funzionano perfettamente anche da remoto, con shooting e produzioni organizzate sul territorio del club quando necessario.",
        },
        {
          question:
            "Cosa intendete per comunicazione sportiva orientata ai risultati?",
          answer:
            "Significa collegare ogni attività a obiettivi concreti: nuove iscrizioni al settore giovanile, maggiore visibilità per gli sponsor, crescita della community e aumento dell'engagement. Non ci limitiamo a pubblicare post, ma costruiamo un sistema che produce valore per la società.",
        },
        {
          question:
            "Avete esperienza concreta con società sportive?",
          answer:
            "Sì. Gestiamo la comunicazione di FC Calvi Noale (Serie D), con risultati documentati: più di 10 milioni di visualizzazioni all'anno, campagne territoriali con shooting nel centro città e un sito web ufficiale completamente riprogettato. I nostri case study sono pubblici e verificabili.",
        },
        {
          question:
            "Quanto costa la comunicazione sportiva per una società?",
          answer:
            "Dipende dal perimetro: solo social media, sito web incluso, produzioni video, campagne sponsor. Partiamo sempre da un confronto per capire obiettivi e risorse, e proponiamo un piano sostenibile per la società.",
        },
      ]}
      primaryCtaLabel="Parla con un consulente"
      finalCtaTitle="La tua società sportiva merita una comunicazione professionale"
      finalCtaText="Raccontaci il tuo club, i tuoi obiettivi e le sfide che stai affrontando. Ti restituiamo una prima valutazione gratuita su come possiamo far crescere la tua società dentro e fuori dal campo."
      finalCtaLabel="Richiedi un confronto gratuito"
    />
  );
}
