import type { Metadata } from "next";
import TerritoryHub from "./TerritoryHub";

export const metadata: Metadata = {
  title: "Dove operiamo: Treviso e Nord Italia",
  description: "NF Media Lab affianca aziende in Veneto, Friuli-Venezia Giulia, Trentino-Alto Adige, Lombardia ed Emilia-Romagna.",
  alternates: { canonical: "/dove-operiamo" },
};

export default function DoveOperiamoPage() {
  return <TerritoryHub />;
}
