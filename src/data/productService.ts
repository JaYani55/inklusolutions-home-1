import { ProductData } from '@/types/product';
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

// Zentrale Produktdatenbank - hier werden alle Produkte registriert
const productDatabase: Record<string, ProductData> = {
  'inklusionsführerschein': inklusionsführerschein,
  'inklusionsfuehrerschein': inklusionsführerschein, // URL-freundliche Variante mit "ue"
  'inklusionsf%C3%BChrerschein': inklusionsführerschein, // URL-kodierte Variante (ü = %C3%BC)
  'produkt-inklusionsführerschein': inklusionsführerschein, // Fallback für alte Links
  'produkt-inklusionsfuehrerschein': inklusionsführerschein, // URL-freundlicher Fallback
  'produkt-vielfalt-sichtbar-machen': vielfaltSichtbarMachen,
  'produkt-inclusive-recruiting-platform': inclusiveRecruitingPlatform,
  'disability-awareness-session': disabilityAwarenessSession,
  'barrieren-erkennen-und-abbauen': BarrierenErkennenUndAbbauen,
  'behinderungsarten': Behinderungsarten,
  'bewerbungsgespraeche': Bewerbungsgespraeche,
  'foerdermittel': Foerdermittel,
  'inklusive-webseite': InklusiveWebseite,
  'onboarding': Onboarding,
  'stellenausschreibung-jobcarving': StellenausschreibungJobcarving,
  'vernetzung': Vernetzung,

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
   * Behandelt sowohl Umlaute als auch URL-kodierte Varianten
   */
  static getProductBySlug(slug: string): ProductData | null {
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
      'ue': 'ü',
      'ae': 'ä',
      'oe': 'ö',
      'ss': 'ß'
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
