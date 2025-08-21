// src/app/impressum/page.tsx

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impressum
            </h1>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 p-8 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                <address className="not-italic text-foreground/80 space-y-2">
                  <p className="font-medium">Inklu-Solutions Gesellschaft für Inklusion und Teilhabe GmbH</p>
                  <p>Altenwall 17</p>
                  <p>28195 Bremen</p>
                  <p>Deutschland</p>
                </address>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Vertreten durch</h3>
                <p className="text-foreground/80 mb-4">Nils Dreyer &amp; Özlem Cetin</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Kontakt</h3>
                <div className="text-foreground/80 space-y-2">
                  <p>Telefon: <a href="tel:+4942159629800" className="text-accent hover:text-accent/80 hover:underline">0421 – 59 629 800</a></p>
                  <p>E-Mail: <a href="mailto:NDreyer@inklusolutions.de" className="text-accent hover:text-accent/80 hover:underline">NDreyer@inklusolutions.de</a></p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Registereintrag</h3>
                <div className="text-foreground/80">
                  <p>Eintragung im Handelsregister</p>
                  <p>Registergericht: Bremen</p>
                  <p>Registernummer: HRB 40070</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Umsatzsteuer-ID</h3>
                <p className="text-foreground/80 mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
                <p className="font-mono text-sm text-foreground/60">[USt-IdNr.]</p>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-foreground/60">
                  Dieses Impressum ist ein Mustertext und ersetzt keine rechtliche Beratung. Bitte lassen Sie das Impressum gegebenenfalls durch einen Rechtsanwalt prüfen.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="text-accent hover:text-accent/80 hover:underline font-medium">
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}