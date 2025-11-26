import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL)
  : null;

const remotePatterns: RemotePattern[] = [
  {
    protocol: "http",
    hostname: "127.0.0.1",
  },
  {
    protocol: "http",
    hostname: "localhost",
  },
];

if (apiUrl) {
  const protocol = apiUrl.protocol.replace(":", "") as "http" | "https";

  remotePatterns.push({
    protocol,
    hostname: apiUrl.hostname,
  });
}

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
