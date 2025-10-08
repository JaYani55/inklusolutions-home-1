/**
 * Manual Revalidation Script
 * 
 * This script allows you to manually trigger the revalidation of a specific product page
 * on your production site. Useful for testing the revalidation API or forcing a cache update.
 * 
 * Usage:
 *   npm run revalidate <slug>
 *   
 * Example:
 *   npm run revalidate disability-awareness-session
 */

import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const PRODUCTION_URL = 'https://inklusolutions.de';
const REVALIDATION_ENDPOINT = `${PRODUCTION_URL}/api/revalidate`;

interface RevalidationResponse {
  revalidated?: boolean;
  now?: number;
  slug?: string;
  message?: string;
}

/**
 * Triggers revalidation for a specific product slug
 */
async function revalidateProduct(slug: string): Promise<void> {
  const token = process.env.REVALIDATION_TOKEN;

  if (!token) {
    console.error('❌ Error: REVALIDATION_TOKEN not found in environment variables');
    console.error('   Make sure you have a .env.local file with REVALIDATION_TOKEN defined');
    process.exit(1);
  }

  console.log('🚀 Triggering revalidation...');
  console.log(`   URL: ${REVALIDATION_ENDPOINT}`);
  console.log(`   Slug: ${slug}`);
  console.log('');

  try {
    const response = await fetch(REVALIDATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        record: {
          slug: slug,
        },
      }),
    });

    const data: RevalidationResponse = await response.json();

    if (!response.ok) {
      console.error(`❌ Revalidation failed with status ${response.status}`);
      console.error(`   Message: ${data.message || 'Unknown error'}`);
      
      if (response.status === 401) {
        console.error('   → Check that your REVALIDATION_TOKEN matches the one deployed on production');
      }
      
      process.exit(1);
    }

    console.log('✅ Revalidation successful!');
    console.log(`   Revalidated: ${data.revalidated}`);
    console.log(`   Timestamp: ${data.now ? new Date(data.now).toISOString() : 'N/A'}`);
    console.log(`   Slug: ${data.slug}`);
    console.log('');
    console.log(`🌐 Updated page: ${PRODUCTION_URL}/products/${slug}`);

  } catch (error) {
    console.error('❌ Network error during revalidation:');
    if (error instanceof Error) {
      console.error(`   ${error.message}`);
    } else {
      console.error(`   ${String(error)}`);
    }
    process.exit(1);
  }
}

/**
 * Main execution
 */
async function main() {
  const slug = process.argv[2];

  if (!slug) {
    console.error('❌ Error: Product slug is required');
    console.error('');
    console.error('Usage:');
    console.error('  npm run revalidate <slug>');
    console.error('');
    console.error('Example:');
    console.error('  npm run revalidate disability-awareness-session');
    console.error('  npm run revalidate inklusionsführerschein');
    console.error('');
    console.error('Available products:');
    console.error('  - disability-awareness-session');
    console.error('  - inclusive-recruiting-platform');
    console.error('  - inklusionsführerschein');
    console.error('  - barrieren-erkennen-und-abbauen');
    console.error('  - behinderungsarten');
    console.error('  - bewerbungsgespraeche');
    console.error('  - foerdermittel');
    console.error('  - inklusive-webseite');
    console.error('  - onboarding');
    console.error('  - stellenausschreibung-jobcarving');
    console.error('  - vernetzung');
    console.error('  - vielfalt-sichtbar-machen');
    process.exit(1);
  }

  await revalidateProduct(slug);
}

// Run the script
main();