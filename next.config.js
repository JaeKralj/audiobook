/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
  },
  resolve: {
    alias: {
      "aws-crt": path.resolve(__dirname, "node_modules/aws-crt"),
    },
  },
};

module.exports = nextConfig;
