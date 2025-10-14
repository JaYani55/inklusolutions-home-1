import { createClient } from '@supabase/supabase-js';
import { ProductData } from '@/types/product';

// Ensure you have NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Type for the raw 'content' JSONB from Supabase
type ProductContent = Omit<ProductData, 'id' | 'slug' | 'name'>;

// Type for the raw product data fetched from Supabase
interface SupabaseProduct {
  id: string;
  slug: string;
  name: string;
  content: ProductContent;
}

/**
 * Transforms raw product data from Supabase into the ProductData type.
 * It merges the 'content' JSONB field with top-level fields like id, slug, and name.
 * It NO LONGER converts icon strings.
 * @param data - The raw data object from a Supabase query.
 * @returns The transformed product data, or null if input is invalid.
 */
function transformProductData(data: SupabaseProduct | null): ProductData | null {
  if (!data || !data.content) {
    console.error('Invalid product data received from Supabase:', data);
    return null;
  }

  // Just combine the data. No icon transformation happens here.
  const product: ProductData = {
    ...data.content,
    id: data.id,
    slug: data.slug,
    name: data.name,
  };

  return product;
}

/**
 * Fetches all slugs for published products.
 * Used for generating static paths (e.g., in getStaticPaths).
 * @returns An array of objects, each containing a product slug.
 */
export async function getPublishedProductSlugs(): Promise<{ slug: string }[]> {
  const { data, error } = await supabase
    .from('products')
    .select('slug')
    .eq('is_draft', false);

  if (error) {
    console.error('Error fetching published product slugs:', error.message);
    return [];
  }
  return data || [];
}

/**
 * Fetches a single published product by its slug.
 * @param slug - The slug of the product to fetch.
 * @returns A promise that resolves to the ProductData or null if not found or an error occurs.
 */
export async function getPublishedProductBySlug(slug: string): Promise<ProductData | null> {
  const { data, error } = await supabase
    .from('products')
    .select('id, slug, name, content')
    .eq('slug', slug)
    .eq('is_draft', false)
    .single<SupabaseProduct>();

  if (error) {
    // .single() throws an error if no rows are found, which is expected.
    if (error.code !== 'PGRST116') {
        console.error(`Error fetching published product by slug "${slug}":`, error.message);
    }
    return null;
  }
  return transformProductData(data);
}

/**
 * Fetches a single draft product by its slug.
 * This can be used for previewing content.
 * @param slug - The slug of the draft product to fetch.
 * @returns A promise that resolves to the ProductData or null if not found or an error occurs.
 */
export async function getDraftProductBySlug(slug: string): Promise<ProductData | null> {
  const { data, error } = await supabase
    .from('products')
    .select('id, slug, name, content')
    .eq('slug', slug)
    .eq('is_draft', true)
    .single<SupabaseProduct>();

  if (error) {
    if (error.code !== 'PGRST116') {
        console.error(`Error fetching draft product by slug "${slug}":`, error.message);
    }
    return null;
  }
  return transformProductData(data);
}