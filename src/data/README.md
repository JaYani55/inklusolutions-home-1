# Produktdaten-Management

## Überblick

Das Produktdaten-Management wurde nach Best Practices umstrukturiert, um Skalierbarkeit und Wartbarkeit zu gewährleisten.

## Struktur

```
src/
├── data/
│   ├── productService.ts          # Zentrale Service-Klasse
│   └── products/                  # Einzelne Produktdateien
│       ├── inklusionsführerschein.ts
│       ├── vielfalt-sichtbar-machen.ts
│       ├── inclusive-recruiting-platform.ts
│       └── ...                    # Weitere Produkte
├── types/
│   └── product.d.ts              # TypeScript-Interfaces
└── app/
    └── products/[slug]/page.tsx  # Produktseiten-Template
```

## Neues Produkt hinzufügen

### 1. Produktdatei erstellen

Erstelle eine neue Datei in `src/data/products/`:

```typescript
// src/data/products/mein-neues-produkt.ts
import { ProductData } from '@/types/product';
import { IconName } from 'lucide-react';

export const meinNeuesProdukt: ProductData = {
  id: '8',
  slug: 'mein-neues-produkt',
  name: 'Mein neues Produkt',
  subtitle: 'Kurze Beschreibung des Produkts',
  hero: {
    title: 'Titel für Hero-Bereich',
    description: 'Beschreibung für Hero-Bereich',
    image: '/pfad-zum-bild.jpg',
    stats: [
      { value: 'WERT', label: 'LABEL' }
    ]
  },
  features: [
    {
      title: 'Feature-Titel',
      description: 'Feature-Beschreibung',
      image: '/feature-bild.jpg',
      reverse: false // optional
    }
  ],
  cards: [
    {
      title: 'Karten-Titel',
      description: 'Kurze Beschreibung',
      icon: IconName, // von lucide-react
      image: '/karten-bild.jpg',
      items: ['Item 1', 'Item 2'],
      color: 'primary' // 'primary', 'secondary', 'accent'
    }
  ],
  faq: [
    {
      question: 'Frage?',
      answer: 'Antwort'
    }
  ],
  cta: {
    title: 'CTA-Titel',
    description: 'CTA-Beschreibung',
    primaryButton: 'Hauptbutton',
    secondaryButton: 'Zweitbutton'
  }
};
```

### 2. Produkt registrieren

Füge das neue Produkt in `src/data/productService.ts` hinzu:

```typescript
import { meinNeuesProdukt } from './products/mein-neues-produkt';

const productDatabase: Record<string, ProductData> = {
  // ... bestehende Produkte
  'mein-neues-produkt': meinNeuesProdukt,
};
```

### 3. Fertig!

Das neue Produkt ist jetzt automatisch verfügbar unter:
- `/products/mein-neues-produkt`
- In der Sitemap
- Über den ProductService

## ProductService API

### Methoden

- `ProductService.getProductBySlug(slug: string)` - Einzelnes Produkt abrufen
- `ProductService.getAllProducts()` - Alle Produkte abrufen
- `ProductService.getAllSlugs()` - Alle Slugs abrufen (für Sitemap)
- `ProductService.productExists(slug: string)` - Prüfen ob Produkt existiert
- `ProductService.getProductsByCategory(category: string)` - Produkte nach Kategorie

### Verwendung

```typescript
import { ProductService } from '@/data/productService';

// Einzelnes Produkt abrufen
const product = ProductService.getProductBySlug('produkt-slug');

// Alle Produkte für Übersichtsseite
const allProducts = ProductService.getAllProducts();

// Slugs für Static Generation
export async function generateStaticParams() {
  return ProductService.getAllSlugs().map((slug) => ({ slug }));
}
```

## Vorteile der neuen Struktur

✅ **Skalierbar**: Neue Produkte einfach hinzufügbar
✅ **Wartbar**: Separate Dateien pro Produkt
✅ **Type-Safe**: Vollständige TypeScript-Unterstützung
✅ **Zentral**: Ein Service für alle Produktdaten
✅ **Flexibel**: Einfache Erweiterung möglich
✅ **Clean**: Keine riesigen Dateien mehr

## Migration bestehender Produkte

Bestehende Produkte können schrittweise in das neue System migriert werden:

1. Produktdatei in `src/data/products/` erstellen
2. In `productService.ts` registrieren
3. Alte Daten aus `page.tsx` entfernen
