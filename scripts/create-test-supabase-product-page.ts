// scripts/create-test-supabase-product-page.ts
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { disabilityAwarenessSession } from '../src/data/products/disability-awareness-session';
import { ProductData } from '../src/types/product';

// Load environment variables from .env.local file
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Supabase URL or Service Role Key is not defined in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

/**
 * Main function to create and publish a test product.
 */
async function main() {
  console.log('🚀 Starting test product creation script...');

  // DEBUG: Log the arguments to see what the script is receiving
  console.log('🔍 Debugging process.argv:', process.argv);

  // Determine publishing mode from command-line arguments.
  // `process.argv` contains all parts of the command, e.g., ['node', 'tsx', 'script.ts', '--live']
  // We just need to check if '--live' is present anywhere in the arguments.
  const isLive = process.argv.includes('--live');
  const status = isLive ? 'published' : 'draft';

  console.log(`📦 Publishing mode: ${status.toUpperCase()}`);

  // 1. Create a unique copy of the product data
  const timestamp = new Date().getTime();
  const newSlug = `test-product-${timestamp}`;
  
  // Separate content from top-level fields
  const { id, slug, name, ...content } = disabilityAwarenessSession;

  const newProductData = {
    name: `Test Product ${timestamp}`,
    slug: newSlug,
    content: {
      ...content,
      subtitle: `This is a test product generated at ${new Date().toISOString()}`,
    },
    status: status,
  };

  console.log(`📝 Creating new product with slug: "${newSlug}"`);

  // 2. Insert the new product into the 'products' table
  const { data: newProduct, error: insertError } = await supabase
    .from('products')
    .insert(newProductData)
    .select('id, slug, status, is_draft')
    .single();

  if (insertError) {
    console.error('❌ Error inserting new product:', insertError.message);
    return;
  }

  console.log('✅ Product inserted successfully:', { 
    id: newProduct.id, 
    slug: newProduct.slug,
    status: newProduct.status,
    is_draft: newProduct.is_draft 
  });

  // 3. Insert into 'product_slugs' to sync the primary slug via trigger
  const { error: slugError } = await supabase
    .from('product_slugs')
    .insert({
      product_id: newProduct.id,
      slug: newProduct.slug,
      is_primary: true,
    });

  if (slugError) {
    console.error('❌ Error inserting into product_slugs:', slugError.message);
    // Optional: Clean up the created product if the slug insertion fails
    await supabase.from('products').delete().eq('id', newProduct.id);
    console.log('🗑️ Cleaned up product due to slug insertion failure.');
    return;
  }

  console.log('✅ Primary slug synchronized successfully.');

  // 4. Log the URLs for previewing or viewing the live page
  if (isLive) {
    console.log(`\n🎉 Product published live!`);
    console.log(`🔗 Live URL: /products/${newSlug}`);
    console.log('ℹ️  Note: You may need to trigger a revalidation for the page to appear immediately.');
  } else {
    console.log(`\n✨ Product created as a draft!`);
    console.log(`🔗 Preview URL: /preview/${newSlug}`);
  }
  
  console.log('\n✅ Script finished successfully.');
}

main().catch((err) => {
  console.error('❌ An unexpected error occurred:', err);
  process.exit(1);
});
