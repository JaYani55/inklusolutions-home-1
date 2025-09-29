import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
  // Note: linting will run during `next build`. Previously `ignoreDuringBuilds` was enabled.
  // Keep default behavior (do not ignore ESLint errors during builds).
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nesonoyxwsgodyilmrlq.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
