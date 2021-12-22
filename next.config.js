const path = require('path')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  serverRuntimeConfig: {
    //   USER_TOKEN_KEY: process.env.USER_TOKEN_KEY,
    //   PLATFORM_KEY: process.env.PLATFORM_KEY,
    //   ANONYMOUS_KEY: process.env.ANONYMOUS_KEY,
    //   USER_INFO_KEY: process.env.USER_INFO_KEY
  },
  publicRuntimeConfig: {
    NODE_ENV_SERVICE: process.env.NODE_ENV_SERVICE
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      {
        source: '/home/account',
        destination: '/home/account/profile',
        permanent: true
      },
      {
        source: '/detail',
        destination: '/home',
        permanent: true
      }
    ]
  }
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
