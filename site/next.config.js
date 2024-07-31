/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Multisoft Registry',
    description: 'Multisoft registery',
    icon: '/img/logo.svg',
    listUrl: 'https://mhdnabil.github.io/kasmtech-registy/',
    contactUrl: 'https://github.com/mhdnabil/kasmtech-registy/issues',
  },
  reactStrictMode: false,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
