import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NF Media Lab",
    short_name: "NF Media",
    description:
      "Agenzia digitale per sviluppo software, siti web e marketing a Treviso.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#030303",
    categories: ["business", "technology", "marketing"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
