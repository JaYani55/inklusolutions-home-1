# Guide for Building an External Product Page Builder

This document provides the technical specifications for building an external content management service (the "Builder") to create and publish product pages for the Inklusolutions website.

The Builder will interact directly with the project's Supabase database and its Next.js revalidation API.

## 1. Core Concepts & Workflow

The system uses a "draft then publish" workflow. A key aspect is the separation of the main product data from its URL slugs. A product is created first, and then its primary slug is associated with it.

1.  **Draft Creation**: The Builder first creates a product record in the `products` table with a `draft` status. It then immediately creates an associated record in the `product_slugs` table to set the URL. This makes the page available for preview.
2.  **Preview**: The content creator uses a preview link (`/preview/{slug}`) to review the page.
3.  **Publishing**: The Builder updates the product's status to `published`. A database trigger handles the rest.
4.  **Revalidation**: Immediately after publishing, the Builder **must** call the revalidation API to make the content live.

---

## 2. Supabase Database Interaction

The Builder will interact with two tables: `products` and `product_slugs`. Database triggers automate synchronization between them.

**Authentication:** All requests to the Supabase API must include the following headers:
-   `apikey: {SUPABASE_ANON_KEY}`
-   `Authorization: Bearer {SUPABASE_SERVICE_ROLE_KEY}`
-   `Content-Type: application/json`

### Action: Creating a New Draft (Two-Step Process)

Creating a new product requires two consecutive API calls.

**Step 1: Create the Product Record**

Send a `POST` request to the `products` table. The `slug` field here can be a placeholder, as it will be overwritten by a trigger in the next step.

-   **Endpoint**: `POST {SUPABASE_URL}/rest/v1/products`
-   **Headers**: Use standard auth headers + `Prefer: return=representation`
-   **Request Body**:

    ```json
    {
      "name": "My New Awesome Product",
      "status": "draft",
      "content": {
        "subtitle": "A subtitle for the new product.",
        "hero": { ... },
        // ... all other fields from the ProductData structure
      }
    }
    ```

The response will contain the `id` of the newly created product. This `id` is required for Step 2.

**Step 2: Set the Primary Slug**

Using the `id` from Step 1, send a `POST` request to the `product_slugs` table. This sets the product's URL and makes it the primary one. A database trigger will automatically copy this slug to the `products.slug` field.

-   **Endpoint**: `POST {SUPABASE_URL}/rest/v1/product_slugs`
-   **Headers**: Use standard auth headers.
-   **Request Body**:

    ```json
    {
      "product_id": "the-uuid-from-step-1",
      "slug": "my-new-awesome-product-url",
      "is_primary": true
    }
    ```

After this step, the draft is created and can be previewed at `/preview/my-new-awesome-product-url`.

### Action: Publishing a Draft

To publish, update the existing product record. You only need to change the `status`. A database trigger will automatically update the `is_draft` boolean field.

-   **Endpoint**: `PATCH {SUPABASE_URL}/rest/v1/products?id=eq.{the-product-id}`
-   **Headers**: Use standard auth headers.
-   **Request Body**:

    ```json
    {
      "status": "published",
      "published_at": "2025-10-13T12:00:00Z"
    }
    ```

---

## 3. Product Content Data Structure

The `content` field in the `products` table is a `jsonb` column. It must contain a JSON object that matches the structure below.

### Example `content` JSON Object:

```json
{
  "subtitle": "This is a test product generated at 2025-10-13T11:14:03.837Z",
  "trainer-module": true,
  "hero": {
    "title": "Disability Awareness Session",
    "description": "Ein halbtägiger, interaktiver Sensibilisierungsworkshop...",
    "image": "/diverse-professionals.jpg",
    "stats": [
      { "value": "4 STUNDEN", "label": "INKL. PAUSEN" },
      { "value": "15-40", "label": "TEILNEHMENDE" },
      { "value": "INHOUSE", "label": "& PRÄSENZ" }
    ]
  },
  "features": [
    {
      "title": "Authentische Begegnung auf Augenhöhe",
      "description": "Kein abstrakter Vortrag, sondern gelebte Erfahrung...",
      "reverse": false
    },
    {
      "title": "Umfassende Sensibilisierung",
      "description": "Von sichtbaren und unsichtbaren Behinderungen...",
      "reverse": true
    }
  ],
  "cards": [
    {
      "title": "Format & Ablauf",
      "description": "Workshop-Details",
      "icon": "Clock",
      "color": "primary",
      "items": [
        "Begrüßung und Einstieg...",
        "Filmimpuls \"The Interviewer\"...",
        "Kleingruppenübungen und Rollenspiele"
      ]
    }
  ],
  "faq": [
    {
      "question": "Ist die Session auch für kleinere Teams geeignet?",
      "answer": "Ja, wir passen Inhalte und Methoden flexibel an die Teamgröße an."
    }
  ],
  "cta": {
    "title": "BEREIT FÜR MEHR AWARENESS IM TEAM?",
    "description": "Buchen Sie jetzt die Disability Awareness Session...",
    "primaryButton": "Session buchen"
  }
}
```

---

## 4. Revalidation API Interaction

After successfully publishing a product (Section 2, Action: Publishing), the Builder **must** make a `POST` request to the live website's revalidation endpoint. This clears the server-side cache.

-   **Endpoint**: `POST https://inklusolutions.de/api/revalidate`
-   **Headers**:
    -   `Content-Type: application/json`
    -   `Authorization: Bearer {REVALIDATION_TOKEN}` (if configured on the API)
-   **Request Body**:

    ```json
    {
      "record": {
        "slug": "my-new-awesome-product-url"
      }
    }
    ```

A successful response will be a JSON object with `revalidated: true`.

---

## 5. Implementation Flow for the Builder UI

### "Save as Draft" Button Logic

1.  Gather all data from the form fields.
2.  Construct the `content` JSON object.
3.  Send the **first `POST` request** to the `products` table (Section 2, Step 1).
4.  On success, extract the `id` from the response.
5.  Send the **second `POST` request** to the `product_slugs` table using the `id` and the desired `slug` (Section 2, Step 2).
6.  Store the `id` and `slug` in the Builder's state.
7.  Display a preview link: `https://inklusolutions.de/preview/{slug}`.
8.  Enable the "Publish" button.

### "Publish" Button Logic

1.  Retrieve the stored `id` and `slug` of the draft product.
2.  Send a `PATCH` request to `.../rest/v1/products?id=eq.{id}` with `status: 'published'` (Section 2, Publishing).
3.  **If the `PATCH` request is successful**:
    a. Immediately send a `POST` request to `https://inklusolutions.de/api/revalidate` with the product's `slug` (Section 4).
    b. On success, notify the user that the product is live.
    c. Provide the final public URL: `https://inklusolutions.de/products/{slug}`.
4.  If any request fails, inform the user and advise them to try again.
