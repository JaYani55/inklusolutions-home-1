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
    // Cloudflare has its own image optimization, but Next.js Image component should work
    // Only set unoptimized: true if you have image loading issues
    // unoptimized: false, // Keep Next.js optimization
  },

  // Ensure proper handling of external packages on the server
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },

  // Optional: Add output mode for better Cloudflare compatibility
  // output: 'standalone', // Uncomment if you have deployment issues

  // Optional: Optimize webpack for Cloudflare
  webpack: (config, { isServer }) => {
    // Ensure external packages are handled correctly
    if (isServer) {
      config.externals = config.externals || [];
      // Add any problematic packages here if needed
    }
    return config;
  },
};

export default nextConfig;

// Added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
