// app/layout.tsx
// Dieses Layout umgibt Ihre gesamte Anwendung im Next.js App Router.
// Es wird nur einmal geladen, wenn der Benutzer Ihre Website besucht.

import './globals.css'; // Globales CSS importieren
import { ThemeProvider } from 'next-themes'; // Provider für next-themes
import type { Metadata } from 'next'; // Typ für Metadaten
import Script from 'next/script'; // Next.js Script Komponente für optimales Laden
import ReactQueryProvider from '../providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Inklusionsführerschein', // Standardtitel für die Website
  description: 'Praktisches Wissen und echtes Verständnis für eine inklusive Unternehmenskultur.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      {/*
        ThemeProvider von next-themes:
        - attribute="class": Fügt die Theme-Klasse (e.g., 'light') zum <html> Element hinzu.
        - defaultTheme="light": Setzt das Standardtheme auf 'light'.
          Da wir im globals.css nur Light Mode via :root stylen, wird dies unsere warme Darstellung sein.
        - enableSystem={false}: Ignoriert die System-Theme-Einstellung.
        - disableTransitionOnChange: Verhindert Übergänge.
      */}
      <body>
        {/* Eye-Able® Accessibility Scripts */}
        <Script
          src="https://cdn.eye-able.com/configs/inklusolutions.de.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.eye-able.com/public/js/eyeAble.js"
          strategy="afterInteractive"
        />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // <-- Geändert zu "light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}