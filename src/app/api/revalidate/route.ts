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
 * API route to handle on-demand revalidation.
 * This endpoint should be secured and triggered by a webhook (e.g., from Supabase)
 * when content is updated.
 */
export async function POST(request: NextRequest) {
  // 1. Verify the authorization token
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.REVALIDATION_TOKEN}`) {
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
    console.log(`Revalidated path: /products/${slug}`);
    
    return NextResponse.json({ revalidated: true, now: Date.now(), slug: slug });

  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error during revalidation:', errorMessage);
    return NextResponse.json({ message: `Error revalidating: ${errorMessage}` }, { status: 500 });
  }
}