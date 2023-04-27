/** @type {import('next').NextConfig} */
module.exports = {
  ignoreBuildErrors: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
    ],
  },
}
