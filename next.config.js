/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/r7qebhzvs/dev_connect/**",
      },
    ],
  },
};

module.exports = nextConfig;
