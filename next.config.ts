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

  // Ensure proper handling of external packages on the server runtime
  serverExternalPackages: ['@supabase/supabase-js'],

  // Generate a standalone output for Cloudflare compatibility
  output: 'standalone',
};

export default nextConfig;

// Added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
