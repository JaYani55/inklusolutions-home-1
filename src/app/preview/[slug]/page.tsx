import { notFound } from 'next/navigation';
import * as supabaseProductService from '@/lib/supabase-product-service';
import ProductPageContent from '@/components/productcomponents/ProductPageContent';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/shared/Footer';

// This forces the page to be server-side rendered (SSR) on every request,
// ensuring the latest draft content is always fetched.
export const dynamic = 'force-dynamic';

export default async function PreviewProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await supabaseProductService.getDraftProductBySlug(slug);

  // If no draft product is found for the given slug, render the 404 page.
  if (!product) {
    notFound();
  }

  return (
    <>
      <div style={{ 
        backgroundColor: '#ffc107', 
        color: 'black', 
        textAlign: 'center', 
        padding: '1rem', 
        fontWeight: 'bold',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        DRAFT PREVIEW MODE
      </div>
      <Navigation />
      <ProductPageContent product={product} />
      <Footer />
    </>
  );
}