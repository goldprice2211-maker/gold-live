import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/is-gold-a-safe-investment-during-inflation",
        destination: "/blog/gold-inflation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
