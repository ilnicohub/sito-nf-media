import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servizi/realizzazione-siti-web-treviso",
        destination: "/servizi/realizzazione-siti-web-nord-italia",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
