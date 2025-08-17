import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern JavaScript features
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion'],
  },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging-api.tadarab.com',
        port: '',
        pathname: '/rails/active_storage/**',
      },
      {
        protocol: 'https',
        hostname: 's3.me-south-1.amazonaws.com',
        port: '',
        pathname: '/tadarab2.0-bahrain/**',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable tree shaking and minification
      config.optimization.minimize = true;
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },

  // Enable compression
  compress: true,

  // Enable SWC minification
  swcMinify: true,
};

export default nextConfig;
