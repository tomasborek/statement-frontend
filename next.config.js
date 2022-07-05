/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
