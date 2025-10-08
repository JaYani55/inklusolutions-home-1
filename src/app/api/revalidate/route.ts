import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

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

  // ⚠️ TEMPORARY: Authentication disabled
  // TODO: Uncomment this section once REVALIDATION_TOKEN is available
  /*
  const authHeader = request.headers.get('authorization');
  const expectedAuth = `Bearer ${process.env.REVALIDATION_TOKEN}`;
  
  console.log('Auth check:', {
    hasAuthHeader: !!authHeader,
    hasToken: !!process.env.REVALIDATION_TOKEN,
  });

  if (!process.env.REVALIDATION_TOKEN) {
    console.error('❌ REVALIDATION_TOKEN not configured');
    return NextResponse.json({ 
      message: 'Server configuration error: REVALIDATION_TOKEN not set' 
    }, { status: 500 });
  }

  if (authHeader !== expectedAuth) {
    console.error('❌ Authorization failed');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  */

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