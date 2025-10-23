// src/types/content.d.ts (oder direkt in product.d.ts, wenn nur dort verwendet)

// Union-Typ für alle möglichen Block-Typen
export type ContentBlock = TextBlock | ImageBlock | QuoteBlock | ListBlock | VideoBlock;

export interface BaseBlock {
  id: string; // Eindeutiger Identifier für diesen Block (z.B. UUID oder Index)
  type: string; // Der Typ des Blocks (z.B. 'text', 'image', 'quote', 'list', 'video')
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: string; // Der Textinhalt des Paragraphen
  format?: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'bold' | 'italic'; // Optional: Formatierung
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string; // URL des Bildes
  alt: string; // Alternativtext für Barrierefreiheit
  caption?: string; // Optional: Bildunterschrift
  width?: number; // Optional: Breite für Optimierung
  height?: number; // Optional: Höhe für Optimierung
}

export interface QuoteBlock extends BaseBlock {
  type: 'quote';
  text: string; // Der Text des Zitats
  author?: string; // Optional: Autor des Zitats
  source?: string; // Optional: Quelle des Zitats
}

export interface ListBlock extends BaseBlock {
  type: 'list';
  style: 'ordered' | 'unordered'; // Typ der Liste
  items: string[]; // Array von Listenelementen
}

export interface VideoBlock extends BaseBlock {
  type: 'video';
  src: string; // URL des Videos (YouTube, Vimeo embed URL o.ä.)
  provider: 'youtube' | 'vimeo' | 'other'; // Anbieter
  caption?: string; // Optional: Videountertitel
}

// Beispiel für erweiterte FAQItem-Struktur
export interface FAQItem {
  question: string;
  answer: ContentBlock[]; // Antwort ist jetzt ein Array von ContentBlöcken
}

// ... (Rest der ProductData, wo immer du flexible Inhalte brauchst)
export interface ProductData {
  // ... andere Felder ...
  faq: FAQItem[];
  features: Array<{
    title: string;
    description: string; // Wenn auch hier Flexibilität gewünscht, dann description: ContentBlock[];
    image?: string;
    reverse?: boolean;
    // content?: ContentBlock[]; // Zusätzliches Feld für flexiblen Inhalt
  }>;
}