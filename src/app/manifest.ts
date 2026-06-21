import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NF Media Lab",
    short_name: "NF Media",
    description:
      "Agenzia digitale per sviluppo software, siti web e marketing a Treviso.",
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#030303",
    icons: [
      {
        src: "/nf-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
