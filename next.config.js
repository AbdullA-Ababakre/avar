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

    // Important: return the modified config
    return config;
  },
}

module.exports = nextConfig;
