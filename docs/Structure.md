## Gesamtübersicht der Website

Diese Datei bietet eine kurze, strukturierte Übersicht über die Ordner-, Page- und Komponentenstruktur der Next.js-Website im Projekt `inklusolutions-home`.

Ziel: Entwickler:innen schnell orientieren, welche Seiten existieren, wo wiederverwendbare Komponenten liegen und welche Daten-/Hilfsbibliotheken verfügbar sind.

---

## Kurzzusammenfassung

- Framework: Next.js (App-Directory, React + TypeScript)
- Standort der Anwendung: `src/app`
- Wiederverwendbare UI-Komponenten: `src/components`
- Daten/Content-Metadaten: `src/data`
- Hilfsfunktionen / Libs: `src/lib`
- Provider / Context: `src/providers`
- Typdefinitionen: `src/types`

---

## Pages (app directory)

Die Hauptseiten liegen unter `src/app`. Die Struktur folgt dem Next.js App Router (Ordner = Route). Wichtige Einträge:

- `src/app/page.tsx` — Startseite (Root)
- `src/app/layout.tsx` — Globales Layout (Header, Footer, Meta etc.)
- `src/app/globals.css` — zentrale Styles
- `src/app/providers.tsx` — Root-Provider-Wrapping (z. B. React Query)
- `src/app/favicon.ico` — Favicon

Unterseiten / Routen (Auswahl):

- `src/app/datenschutz/page.tsx` — Datenschutzseite
- `src/app/impressum/page.tsx` — Impressum
- `src/app/historie/page.tsx` — Firmenhistorie
- `src/app/products/page.tsx` — Produkt-/Service-Übersicht (Listing)
- `src/app/products/[slug]/` — Produktdetail-Seiten (dynamische Route)
- `src/app/products/bewusstsein/` — Produkt-Unterseite
- `src/app/products/services/` — Services-Übersicht
- `src/app/products/trainings/` — Trainings-Übersicht
- `src/app/team/page.tsx` — Team-Seite

Hinweis: Einige Seiten sind in Unterordnern organisiert, z. B. `products` mit dynamischen Slugs.

---

## Komponenten (src/components)

Komponenten sind in mehrere Unterordner gegliedert. Kurzbeschreibung der vorhandenen Ordner und wichtigen Dateien:

- `src/components/landingpage/`
  - `LandingPageLayout.tsx` — Layout für Landingpage-Bereiche
  - `AwarenessSection.tsx` — Sektion: Awareness
  - `ServiceSection.tsx` — Sektion: Services
  - `TrainingSection.tsx` — Sektion: Trainings
  - `ContactSection.tsx` & `ContactSection_new.tsx` — Kontaktformulare/-sektionen

- `src/components/productcomponents/`
  - `ProductPageTemplate.tsx` — Wiederverwendbare Template-Komponente für Produktdetailseiten

- `src/components/shared/` — (Platz für projektspezifische geteilte Komponenten; aktuell im Repo vorhanden, kann Buttons, Cards, Layout-Teile enthalten)

- `src/components/ui/` — UI-Bausteine (Buttons, Inputs, Icons, kleinere primitives)

Wichtig: Komponenten sind so organisiert, dass Landingpage-spezifische, produkt-spezifische und generische UI-Elemente getrennt sind.

---

## Automatisch erkannte Dateien (Auszug)

Die folgenden Dateien wurden automatisch aus dem `src/`-Ordner ermittelt (Auswahl wichtiger Dateien):

- Pages / App
  - `src/app/layout.tsx` — Globales Root-Layout (Theme + ReactQueryProvider)
  - `src/app/page.tsx` — Startseite (umfangreicher Hero + Angebotsteaser)
  - `src/app/globals.css` — Globale Styles
  - `src/app/robots.ts`, `src/app/sitemap.ts` — Robots & Sitemap
  - `src/app/impressum/page.tsx` — Impressum
  - `src/app/datenschutz/page.tsx` — Datenschutz
  - `src/app/datenschutz/contact/route.ts` — Kontakt-Route (API/Route Handler)
  - `src/app/historie/page.tsx` — Historie
  - `src/app/team/page.tsx` — Team
  - `src/app/products/page.tsx` — Produkt-/Service-Übersicht
  - `src/app/products/[slug]/page.tsx` — Produkt-Detail (dynamischer Slug)
  - `src/app/products/trainings/page.tsx`, `src/app/products/services/page.tsx`, `src/app/products/bewusstsein/page.tsx`

- Components — Landingpage
  - `src/components/landingpage/LandingPageLayout.tsx` — Landingpage Grid + SectionCards
  - `src/components/landingpage/AwarenessSection.tsx`
  - `src/components/landingpage/ServiceSection.tsx`
  - `src/components/landingpage/TrainingSection.tsx`
  - `src/components/landingpage/ContactSection.tsx`
  - `src/components/landingpage/ContactSection_new.tsx`

- Components — Product
  - `src/components/productcomponents/ProductPageTemplate.tsx` — generisches Template für Produktdetailseiten

- Components — Shared / UI
  - `src/components/shared/MentorCarousel.tsx`
  - `src/components/shared/TestimonialSlider.tsx`
  - `src/components/shared/FeatureReveal.tsx`
  - `src/components/shared/FAQSection.tsx`
  - `src/components/ui/Navigation.tsx`
  - `src/components/ui/Header.tsx`
  - `src/components/ui/Hero.tsx`
  - `src/components/ui/button.tsx` (Button-Komponente)
  - `src/components/ui/card.tsx`
  - `src/components/ui/SectionCard.tsx`
  - `src/components/ui/ThemeToggle.tsx`
  - `src/components/ui/tooltip.tsx`, `sheet.tsx`, `dialog.tsx`, `accordion.tsx`, `CommandMenu.tsx`, `command.tsx`, `Aurora.tsx`

- Data / Content
  - `src/data/productService.ts` — ProductService (Zugriff auf Produktdaten)
  - `src/data/products/*.ts` — Einzelne Produktdatendateien (z. B. `inklusionsfuehrerschein.ts`)
  - `src/data/mentors/mentors.ts` — Mentor-Daten

- Libs / Types / Providers
  - `src/lib/utils.ts` — Hilfsfunktionen
  - `src/lib/fontawesome.ts` — Icon-Setup
  - `src/providers/ReactQueryProvider.tsx` — React Query Client Provider
  - `src/types/product.d.ts`, `src/types/react.d.ts`

---

## Wichtige Komponenten: Zweck & Props (Kurzreferenz)

Die folgenden Mini-Docs helfen beim schnellen Verständnis zentraler Komponenten. Sie sollen als Starter dienen; bei Bedarf kann ich detaillierte Prop-Tabellen und Beispiele ergänzen.

- `ProductPageTemplate` (`src/components/productcomponents/ProductPageTemplate.tsx`)
  - Props: `{ product: Product }` — `Product` aus `src/types/product.d.ts`
  - Zweck: Generisches Template für Produkt-Detailseiten. Rendert Name, Preis, Beschreibung, Langtext (HTML), Bilder, Features.
  - Client/Server: Markiert als 'use client' (interaktive Teile möglich).

- `LandingPageLayout` (`src/components/landingpage/LandingPageLayout.tsx`)
  - Props: keine
  - Zweck: Komposition der Landingpage-Sektionen in einem responsiven Grid. Nutzt `SectionCard` als Wrapper.

- `SectionCard` (`src/components/ui/SectionCard.tsx`)
  - Props (typisch): `{ title: string, subtitle?: string, icon?: ReactNode, accent?: string, children: ReactNode }`
  - Zweck: Visueller Container mit Titel/Subtitel/Accent für Landingpage-Sektionen.

- `Button` (`src/components/ui/button.tsx`)
  - Props (typisch): `{ size?: 'sm'|'md'|'lg', children: ReactNode, className?: string, onClick?: () => void }`
  - Zweck: Stilisierter, wiederverwendbarer Button; verwendet in Hero/CTAs.

- `Navigation` / `Header` (`src/components/ui/Navigation.tsx`, `Header.tsx`)
  - Props: meist keine; rendert globale Navigation, Links zu `/products`, `/team` etc.

- `ReactQueryProvider` (`src/providers/ReactQueryProvider.tsx`)
  - Props: `{ children: React.ReactNode }`
  - Zweck: Initialisiert `QueryClient` und stellt `QueryClientProvider` bereit.

- `ProductService` (`src/data/productService.ts`)
  - Wichtige Methoden:
    - `getProductBySlug(slug: string): ProductData | null` — tolerant gegenüber Umlauten und URL-kodierten Slugs
    - `getAllProducts(): ProductData[]`
    - `getAllSlugs(): string[]` — für Sitemaps/Static Generation
    - `productExists(slug: string): boolean`
  - Zweck: Zentrale Registry für Produktdaten; einfache Normalisierung von Slugs und Fallbacks für alte URLs.

---

## Hinweise zur Weiterdokumentation (konkrete Vorschläge)

- Generiere kurze README.md Dateien neben `src/components/landingpage` und `src/components/productcomponents` mit Props, Beispiel-Import und Screenshot/Snippet.
- Ergänze `src/types/product.d.ts` mit JSDoc-Kommentaren, damit IDEs bessere Autovervollständigung bieten.
- Optional: Erzeuge ein kleines Script (`scripts/generate-structure.ts`) das `src` parst und `docs/Structure.md` automatisch aktualisiert (kann ich implementieren).

---

## Temporär auskommentierte Sektionen

In Vorbereitung auf eine kurzzeitige Inhaltsanpassung wurden einige UI-Elemente im Code bewusst auskommentiert (sind weiterhin im Code vorhanden, werden aber nicht gerendert). Diese Änderung ist temporär und dokumentiert, damit Entwickler:innen wissen, wo die Stellen sind und wie sie wieder aktiviert werden können.

- `src/components/ui/Navigation.tsx`
  - Dropdown-Eintrag unter "Leistungen": `Services(TBA)` wurde ausgekommentiert (war `{ name: "Services(TBA)", href: "/products/services", disabled: true }`).

- `src/app/page.tsx` (Startseite)
  - Mini-Testimonials: Die zwei Kurz-Testimonials
    - "InkluSolutions hat uns geholfen, Inklusion von der Theorie in die Praxis zu bringen." – HR Director, Tech-Startup
    - "Die Mentor:innen haben unsere Sichtweise nachhaltig verändert." – Personalleitung, Konzern
    sind aktuell in einem JSX-Kommentar blockiert.

  - Footer: Navigationslinks `Team`, `Historie` und der Kontakt-Link (`/datenschutz/contact`) sind ebenfalls in JSX-Kommentaren ausgeklammert.

Hinweis: Um die Sektionen wieder zu aktivieren, entferne die entsprechenden /* ... */- oder //-Kommentare in den genannten Dateien.


## Anforderungen / Abdeckung

- "gesamtübersicht über diese website" — Done: Datei erweitert mit automatischer Dateiliste und Kurzbeschreibungen. (Erledigt)
- "Übersicht über die component und page Struktur" — Done: Komponenten- und Page-Ordner mit Schlüsselfiles sind dokumentiert. (Erledigt)

---

Wenn du möchtest, implementiere ich jetzt das Skript, das die vollständige `src`-Struktur automatisch generiert und `docs/Structure.md` bei Bedarf aktualisiert; oder ich schreibe kurze READMEs für ausgewählte Komponenten. Welche Option bevorzugst du?

## Daten / Content

- `src/data/productService.ts` — zentrale Daten/Services-Definitionen für Produkte/Services
- `src/data/mentors/` — Mentor-Daten (vermutlich JSON/TS-Dateien)
- `src/data/products/` — Produktdaten (Inhalte für Produktseiten)

Diese Datei(en) werden von Pages/Components importiert, um statische Inhalte oder Listen bereitzustellen.

---

## Lib / Utilities

- `src/lib/fontawesome.ts` — FontAwesome-Setup
- `src/lib/utils.ts` — Hilfsfunktionen (utilities)

Diese Module enthalten Projekt-spezifische Helfer, Icon-Setup und Utility-Funktionen.

---

## Provider / React-Query

- `src/providers/ReactQueryProvider.tsx` — Konfiguration von React Query und globalen Daten-Provider
- `src/app/providers.tsx` — Root-Provider-Wrapper, angewendet im App-Layout

Provider kapseln globales State-Management, Caching und evtl. Theme-Provider.

---

## Types

- `src/types/product.d.ts` — Typdefinitionen für Produktobjekte
- `src/types/react.d.ts` — zusätzliche React-Typen/Erweiterungen

Die Typen werden von Seiten und Komponenten importiert, um Props und Datenformen zu typisieren.

---

## Public / Assets

Alle statischen Assets (Bilder, Icons, Logos) liegen in `public/` und sind in Unterordnern wie `logos/` organisiert. Beispiele:

- `public/InkluSolutionsLogo.png`, `public/team-collaboration.jpg`, `public/logos/*`

---

## Build / Konfigurationsdateien (Kurz)

- `package.json` — npm-Skripte und Abhängigkeiten
- `next.config.ts`, `open-next.config.ts` — Next.js / OpenNext Konfiguration
- `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts` — Tooling & Linter/Styling

---

## Navigations- und Layout-Verhalten (kurz)

- Globales Layout: `src/app/layout.tsx` liefert Header/Footer und lädt globale Styles.
- Jede Route hat typischerweise eigene Page-Komponenten in `src/app/<route>/page.tsx`.
- Produktdetailseiten verwenden `src/components/productcomponents/ProductPageTemplate.tsx` und Inhalte aus `src/data/products` bzw. `src/data/productService.ts`.

---

## Empfehlung / Nächste Schritte (kleine Verbesserungen)

- Dokumentation erweitern: Beschreibe Props wichtiger Komponenten (`LandingPageLayout`, `ProductPageTemplate`) in kurzen README-Dateien neben den Komponenten.
- Tests: Kleine Unit-Tests für Utility-Funktionen in `src/lib/utils.ts` und Snapshot-Tests für zentrale Komponenten.
- Konsistenz: Prüfe, ob alle wiederverwendbaren UI-Elemente in `src/components/ui` liegen.

---

## Anforderungen / Abdeckung

- "gesamtübersicht über diese website" — Done: Diese Datei enthält eine strukturierte Gesamtübersicht. (Erledigt)
- "Übersicht über die component und page Struktur" — Done: Komponenten- und Page-Ordner mit Schlüsselfiles sind dokumentiert. (Erledigt)

Wenn du möchtest, kann ich jetzt noch:

- die Struktur automatisch aus dem `src`-Ordner parsen und eine vollständige, automatisierte Liste aller Dateien erzeugen, oder
- an spezifischen Komponenten- oder Page-Readmes arbeiten.
