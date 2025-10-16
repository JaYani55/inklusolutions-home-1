// src/types/product.d.ts
import { ContentBlock, BaseBlock } from "@/types/content";

export interface Product {
    id: string;
    slug: string; // Eindeutige URL-freundliche Kennung
    name: string;
    price?: number; // Preis ist optional, falls nicht jedes Produkt einen hat
    currency?: string; // Währung, z.B. "EUR", "USD"
    description: string; // Kurze Beschreibung
    longDescription?: string; // Detailliertere Beschreibung, oft als langer Text/HTML
    images?: { src: string; alt: string; }[]; // Array von Bild-Objekten
    features?: string[]; // Liste von Stichpunkten/Features
    specifications?: { key: string; value: string; }[]; // Technische Spezifikationen
    category?: string; // Produktkategorie
    brand?: string; // Marke des Produkts
    // Füge hier weitere Felder hinzu, die in JEDEM deiner Templates vorkommen könnten
    // oder die wichtig sind, um ALLE Templates später zu einem flexiblen zusammenzuführen
}

// Erweiterte Product-Datenstruktur für die Detail-Seiten
export interface ProductData {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    'trainer-module'?: boolean;
    hero: {
        title: string;
        description: ContentBlock[];
        image: string;
        stats?: Array<{
            value: string;
            label: string;
        }>;
    };
    features: Array<{
        title: string;
        description: ContentBlock[];
        image?: string; // Make image optional
        reverse?: boolean;
    }>;
    cards?: Array<{
        title: string;
        description: string;
        icon: string; // <-- CHANGE THIS: Was LucideIcon, now it's a string
        image?: string; // Make image optional
        items: string[];
        color: string;
    }>;
    faq: Array<{
        question: string;
        answer: ContentBlock[];
    }>;
    cta: {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton?: string;
    };
}

// Wenn du eine Mentor-Komponente hast, behalte dies bei oder füge es hier ein
export interface Mentor {
    id: number;
    name: string;
    image: string; // Pfad zum Bild oder URL
    quote: string;
}

// Trainer Profile Interface for API Response
export interface TrainerProfile {
    _id: string;
    Vorname: string;
    Nachname: string;
    Bild?: string[];
    Beschreibung: string;
    Produktfreigabe?: string[];
    Status?: string;
    "Auf Webseite"?: boolean;
    // Add other fields as needed
}