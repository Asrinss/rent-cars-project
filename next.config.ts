import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Statik export için gerekli
  images: {
    unoptimized: true, // GitHub Pages için image optimizasyonu kapat
  },
  basePath: "/rent-cars-project", // GitHub repo adıyla aynı olmalı!
  assetPrefix: "/rent-cars-project/",
};

export default nextConfig;
