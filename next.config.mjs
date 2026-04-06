const nextConfig = {
  output: "export",
  // basePath: "/public_html",
  // assetPrefix: "/public_html/",
  images: {
    unoptimized: true,
  },
  // Turbopack config (Next.js 16+ default bundler)
  turbopack: {},
  // Webpack config for build compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
      };
    }
    return config;
  },
};

export default nextConfig;