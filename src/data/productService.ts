import { ProductData } from '@/types/product';
import { inklusionsfuehrerschein } from './products/inklusionsfuehrerschein';
import { vielfaltSichtbarMachen } from './products/vielfalt-sichtbar-machen';
import { inclusiveRecruitingPlatform } from './products/inclusive-recruiting-platform';
import { disabilityAwarenessSession } from './products/disability-awareness-session';

// Zentrale Produktdatenbank - hier werden alle Produkte registriert
const productDatabase: Record<string, ProductData> = {
  'produkt-inklusionsfuehrerschein': inklusionsfuehrerschein,
  'produkt-vielfalt-sichtbar-machen': vielfaltSichtbarMachen,
  'produkt-inclusive-recruiting-platform': inclusiveRecruitingPlatform,
  'disability-awareness-session': disabilityAwarenessSession,
  // Weitere Produkte können hier einfach hinzugefügt werden:
  // 'neues-produkt-slug': neuesProdukt,
};

/**
 * Service-Klasse für Produktdaten-Management
 * Bietet zentrale Funktionen für den Zugriff auf Produktdaten
 */
export class ProductService {
  /**
   * Holt ein einzelnes Produkt anhand des Slugs
   */
  static getProductBySlug(slug: string): ProductData | null {
    return productDatabase[slug] || null;
  }

  /**
   * Holt alle verfügbaren Produkte
   */
  static getAllProducts(): ProductData[] {
    return Object.values(productDatabase);
  }

  /**
   * Holt alle Produkt-Slugs (für Sitemap, Static Generation etc.)
   */
  static getAllSlugs(): string[] {
    return Object.keys(productDatabase);
  }

  /**
   * Prüft, ob ein Produkt mit dem gegebenen Slug existiert
   */
  static productExists(slug: string): boolean {
    return slug in productDatabase;
  }

  /**
   * Holt Produkte nach Kategorie (falls später implementiert)
   */
  static getProductsByCategory(category: string): ProductData[] {
    return Object.values(productDatabase).filter(
      product => product.subtitle?.toLowerCase().includes(category.toLowerCase())
    );
  }
}

// Export für direkten Zugriff auf die Datenbank (falls nötig)
export { productDatabase };
