/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  turbopack: {},

  // assetPrefix मत use करो जब तक subfolder deploy नहीं कर रहे
};

export default nextConfig;