import type { Metadata } from "next";
import TerritoryHub from "./TerritoryHub";

export const metadata: Metadata = {
  title: "Dove operiamo: Treviso e Nord Italia",
  description: "NF Media Lab affianca aziende in Veneto, Friuli-Venezia Giulia, Trentino-Alto Adige, Lombardia ed Emilia-Romagna.",
  keywords: [
    "web agency Nord Italia",
    "agenzia web Veneto",
    "agenzia digitale Treviso",
    "agenzia web Friuli",
    "agenzia web Lombardia",
    "agenzia web Emilia-Romagna",
  ],
  alternates: { canonical: "/dove-operiamo" },
  openGraph: {
    title: "NF Media Lab | Dove operiamo: Treviso e Nord Italia",
    description: "Affianchiamo aziende in Veneto, Friuli-Venezia Giulia, Trentino, Lombardia ed Emilia-Romagna.",
    url: "/dove-operiamo",
  },
};

export default function DoveOperiamoPage() {
  return <TerritoryHub />;
}
