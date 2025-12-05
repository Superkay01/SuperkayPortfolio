import type { NextConfig } from "next";
import nextI18NextConfig from "./i18n.config.js";

const nextConfig: NextConfig = {
  ...nextI18NextConfig,
  reactStrictMode: true,
};

export default nextConfig;
