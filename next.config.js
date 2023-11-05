/** @type { import('next').NextConfig } */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    loader: "default",
    domains: ["localhost"]
  }
}

module.exports = nextConfig
