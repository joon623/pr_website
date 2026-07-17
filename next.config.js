/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 100],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control", value: "public, max-age=300, stale-while-revalidate=60"
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
