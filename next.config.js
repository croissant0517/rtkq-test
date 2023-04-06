/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "images.unsplash.com"],
  },
  transpilePackages: [
    "@douyinfe/semi-ui",
    "@douyinfe/semi-icons",
    "@douyinfe/semi-illustrations",
  ],
};

module.exports = nextConfig;
