const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Ensure chunks are properly generated
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