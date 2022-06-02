/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(gltf)$/,
      use: [
        {
          loader: "gltf-webpack-loader"
        }
      ]
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.dns = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }

    // Important: return the modified config
    return config;
  },
  images: {
    domains: ['placeimg.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig;
