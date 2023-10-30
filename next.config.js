/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/vn",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
