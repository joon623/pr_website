/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
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
    ];
  },
};

module.exports = nextConfig;
