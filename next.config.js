/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["covers.openlibrary.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
