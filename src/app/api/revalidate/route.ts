import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Add edge runtime configuration for Cloudflare Pages
export const runtime = 'nodejs'; // Use Node.js runtime instead of Edge
export const dynamic = 'force-dynamic'; // Ensure no static optimization

/**
 * Defines the expected structure of the Supabase webhook payload.
 * We only need the slug from the 'record' object.
 */
interface WebhookPayload {
  record?: {
    slug?: string;
  };
}

/**
 * GET endpoint for testing environment variable availability
 */
export async function GET() {
  return NextResponse.json({
    hasToken: !!process.env.REVALIDATION_TOKEN,
    tokenLength: process.env.REVALIDATION_TOKEN?.length || 0,
    tokenPreview: process.env.REVALIDATION_TOKEN 
      ? `${process.env.REVALIDATION_TOKEN.substring(0, 4)}...` 
      : 'not set',
    message: 'Revalidation API is active (authentication temporarily disabled)',
    runtime: 'nodejs',
  });
}

/**
 * API route to handle on-demand revalidation.
 * 
 * ⚠️ WARNING: Authentication is currently disabled for testing.
 * TODO: Re-enable token authentication once environment variables are working on Cloudflare Pages.
 */
export async function POST(request: NextRequest) {
  console.log('🔄 Revalidation request received');

  // Parse the request body to get the slug
  try {
    const body = await request.json() as WebhookPayload;
    const slug = body.record?.slug;

    if (!slug) {
      console.error('❌ No slug provided in request');
      return NextResponse.json({ 
        message: 'Slug is required in the webhook payload' 
      }, { status: 400 });
    }

    console.log(`🔄 Revalidating path: /products/${slug}`);
    
    // Trigger the revalidation for the specific product path
    await revalidatePath(`/products/${slug}`);
    
    console.log(`✅ Successfully revalidated path: /products/${slug}`);
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(), 
      slug: slug,
      warning: 'Authentication is currently disabled'
    });

  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('❌ Error during revalidation:', errorMessage);
    return NextResponse.json({ 
      message: `Error revalidating: ${errorMessage}` 
    }, { status: 500 });
  }
}