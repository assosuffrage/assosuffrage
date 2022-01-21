module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/accueil',
          permanent: true,
        },
      ]
    },
  
}
