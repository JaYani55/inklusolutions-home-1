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
 * Remove this in production or secure it properly
 */
export async function GET() {
  return NextResponse.json({
    hasToken: !!process.env.REVALIDATION_TOKEN,
    tokenLength: process.env.REVALIDATION_TOKEN?.length || 0,
    // DO NOT return the actual token value
    tokenPreview: process.env.REVALIDATION_TOKEN 
      ? `${process.env.REVALIDATION_TOKEN.substring(0, 4)}...` 
      : 'not set',
  });
}

/**
 * API route to handle on-demand revalidation.
 * This endpoint should be secured and triggered by a webhook (e.g., from Supabase)
 * when content is updated.
 */
export async function POST(request: NextRequest) {
  // Log environment variable presence (NOT the actual value for security)
  console.log('Environment check:', {
    hasToken: !!process.env.REVALIDATION_TOKEN,
    tokenLength: process.env.REVALIDATION_TOKEN?.length || 0,
  });

  // 1. Verify the authorization token
  const authHeader = request.headers.get('authorization');
  const expectedAuth = `Bearer ${process.env.REVALIDATION_TOKEN}`;
  
  // Log authorization check (without exposing actual tokens)
  console.log('Auth check:', {
    hasAuthHeader: !!authHeader,
    authHeaderFormat: authHeader?.startsWith('Bearer ') ? 'Valid format' : 'Invalid format',
    lengthMatch: authHeader?.length === expectedAuth.length,
  });

  if (authHeader !== expectedAuth) {
    console.error('Authorization failed');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // 2. Parse the request body to get the slug
  try {
    // Cast the JSON body to our expected payload type
    const body = await request.json() as WebhookPayload;
    
    // The Supabase webhook payload for an INSERT or UPDATE has the new data in `record`
    const slug = body.record?.slug;

    if (!slug) {
      return NextResponse.json({ message: 'Slug is required in the webhook payload' }, { status: 400 });
    }

    // 3. Trigger the revalidation for the specific product path
    await revalidatePath(`/products/${slug}`);
    console.log(`✅ Successfully revalidated path: /products/${slug}`);
    
    return NextResponse.json({ revalidated: true, now: Date.now(), slug: slug });

  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error during revalidation:', errorMessage);
    return NextResponse.json({ message: `Error revalidating: ${errorMessage}` }, { status: 500 });
  }
}