/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.pokemon.com"
      },
      {
        protocol: "https",
        hostname: "img.pokemondb.net"
      }
    ]
  }
}
