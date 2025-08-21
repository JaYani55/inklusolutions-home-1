// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { ProductService } from '@/data/productService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.inklusolutions.de'; // Ersetze mit deiner tatsächlichen Domain!

  // Statische Seiten
  const staticPages = [
    { url: baseUrl, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 1.0, },
    { url: `${baseUrl}/products`, lastModified: new Date().toISOString(), changeFrequency: 'daily' as const, priority: 0.8, },
    { url: `${baseUrl}/impressum`, lastModified: new Date().toISOString(), changeFrequency: 'yearly' as const, priority: 0.5, },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date().toISOString(), changeFrequency: 'yearly' as const, priority: 0.5, },
  ];

  // Dynamische Produktseiten - jetzt über den ProductService
  const productSlugs = ProductService.getAllSlugs();
  const productPages = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date().toISOString(), // Oder das tatsächliche Änderungsdatum des Produkts
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}