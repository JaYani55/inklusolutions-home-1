// src/app/robots.ts
// Dies ist eine Server Component, die zur Build-Zeit eine robots.txt Datei generiert.

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Gilt für alle Web-Crawler
      allow: '/', // Erlaube das Crawlen aller Seiten
      // disallow: '/private/', // Beispiel: Verbiete das Crawlen des /private/ Pfades
    },
    sitemap: 'https://www.inklusolutions.de/sitemap.xml', // Der Pfad zu deiner Sitemap
    // Anmerkung: Ersetze 'https://www.inklusolutions.de' durch deine tatsächliche Domain,
    // oder hole sie dynamisch aus Umgebungsvariablen für verschiedene Umgebungen
  };
}