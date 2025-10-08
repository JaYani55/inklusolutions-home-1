import { ProductData } from '@/types/product';
import * as supabaseProductService from '@/lib/supabase-product-service';
import { inklusionsführerschein } from './products/inklusionsführerschein';
import { vielfaltSichtbarMachen } from './products/vielfalt-sichtbar-machen';
import { inclusiveRecruitingPlatform } from './products/inclusive-recruiting-platform';
import { disabilityAwarenessSession } from './products/disability-awareness-session';
import { BarrierenErkennenUndAbbauen } from './products/mc-barrieren-erkennen-und-abbauen';
import { Behinderungsarten} from './products/mc-behinderungsarten';
import { Bewerbungsgespraeche} from './products/mc-bewerbungsgespraeche';
import { Foerdermittel} from './products/mc-foerdermittel';
import { InklusiveWebseite} from './products/mc-inklusive-webseite';
import { Onboarding} from './products/mc-onboarding';
import { StellenausschreibungJobcarving} from './products/mc-stellenausschreibung-jobcarving';
import { Vernetzung} from './products/mc-vernetzung';

// Zentrale lokale Produktdatenbank - hier werden alle Produkte registriert
const productDatabase: Record<string, ProductData> = {
  'inklusionsführerschein': inklusionsführerschein,
  'inklusionsfuehrerschein': inklusionsführerschein, // URL-freundliche Variante mit "ue"
  'inklusionsf%C3%BChrerschein': inklusionsführerschein, // URL-kodierte Variante (ü = %C3%BC)
  'produkt-inklusionsführerschein': inklusionsführerschein, // Fallback für alte Links
  'produkt-inklusionsfuehrerschein': inklusionsführerschein, // URL-freundlicher Fallback
  'produkt-vielfalt-sichtbar-machen': vielfaltSichtbarMachen,
  'inclusive-recruiting-platform': inclusiveRecruitingPlatform, // CORRECTED: Key now matches the slug
  'disability-awareness-session': disabilityAwarenessSession,
  'barrieren-erkennen-und-abbauen': BarrierenErkennenUndAbbauen,
  'behinderungsarten': Behinderungsarten,
  'bewerbungsgespraeche': Bewerbungsgespraeche,
  'foerdermittel': Foerdermittel,
  'inklusive-webseite': InklusiveWebseite,
  'onboarding': Onboarding,
  'stellenausschreibung-jobcarving': StellenausschreibungJobcarving,
  'vernetzung': Vernetzung,
};

/**
 * Service-Klasse für Produktdaten-Management
 * Bietet zentrale Funktionen für den Zugriff auf Produktdaten.
 * Priorisiert lokale Dateien und nutzt Supabase als Fallback.
 */
export class ProductService {
  /**
   * Holt ein einzelnes Produkt anhand des Slugs.
   * Prüft zuerst die lokale Datenbank und dann Supabase.
   */
  static async getProductBySlug(slug: string): Promise<ProductData | null> {
    const localProduct = this.getLocalProductBySlug(slug);
    if (localProduct) {
      return localProduct;
    }
    // Fallback to Supabase if not found locally
    return await supabaseProductService.getPublishedProductBySlug(slug);
  }

  /**
   * Private Methode zum Abrufen eines Produkts aus der lokalen Datenbank.
   * Behandelt Umlaute, URL-kodierte Varianten und Aliase.
   */
  private static getLocalProductBySlug(slug: string): ProductData | null {
    // Zuerst direkt probieren
    if (productDatabase[slug]) {
      return productDatabase[slug];
    }
    
    // Falls nicht gefunden, URL dekodieren und nochmal probieren
    try {
      const decodedSlug = decodeURIComponent(slug);
      if (productDatabase[decodedSlug]) {
        return productDatabase[decodedSlug];
      }
    } catch {
      // URL dekodierung fehlgeschlagen, ignorieren
    }
    
    // Falls immer noch nicht gefunden, Umlaut-Varianten probieren
    const umlautMappings: Record<string, string> = {
      'ue': 'ü', 'ae': 'ä', 'oe': 'ö', 'ss': 'ß'
    };
    
    let normalizedSlug = slug;
    Object.entries(umlautMappings).forEach(([encoded, umlaut]) => {
      normalizedSlug = normalizedSlug.replace(new RegExp(encoded, 'g'), umlaut);
    });
    
    if (productDatabase[normalizedSlug]) {
      return productDatabase[normalizedSlug];
    }
    
    // Umgekehrt: Umlaute zu URL-freundlichen Zeichen
    let urlFriendlySlug = slug;
    Object.entries(umlautMappings).forEach(([encoded, umlaut]) => {
      urlFriendlySlug = urlFriendlySlug.replace(new RegExp(umlaut, 'g'), encoded);
    });
    
    return productDatabase[urlFriendlySlug] || null;
  }

  /**
   * Holt alle Produkt-Slugs (für Sitemap, Static Generation etc.)
   * Kombiniert Slugs aus der lokalen Datenbank und Supabase.
   */
  static async getAllSlugs(): Promise<string[]> {
    const localSlugs = this.getAllLocalSlugs();
    const supabaseSlugs = (await supabaseProductService.getPublishedProductSlugs()).map(s => s.slug);
    
    // Kombinieren und Duplikate entfernen
    const allSlugs = new Set([...localSlugs, ...supabaseSlugs]);
    
    return Array.from(allSlugs);
  }

  /**
   * Holt alle eindeutigen Slugs aus der lokalen Produktdatenbank.
   */
  static getAllLocalSlugs(): string[] {
    // Verwendet ein Set, um sicherzustellen, dass jedes Produkt nur einmal gezählt wird,
    // auch wenn es unter mehreren Aliassen in productDatabase existiert.
    const uniqueProducts = new Set(Object.values(productDatabase));
    return Array.from(uniqueProducts).map(p => p.slug);
  }

  /**
   * Prüft, ob ein Produkt mit dem gegebenen Slug existiert (lokal oder in Supabase).
   */
  static async productExists(slug: string): Promise<boolean> {
    const product = await this.getProductBySlug(slug);
    return product !== null;
  }

  /**
   * Holt Produkte nach Kategorie (nur aus lokaler DB).
   * Hinweis: Diese Funktion durchsucht derzeit nur die lokale Datenbank.
   */
  static getProductsByCategory(category: string): ProductData[] {
    const uniqueProducts = new Set(Object.values(productDatabase));
    return Array.from(uniqueProducts).filter(
      product => product.subtitle?.toLowerCase().includes(category.toLowerCase())
    );
  }
}

// Export für direkten Zugriff auf die Datenbank (falls nötig)
export { productDatabase };
