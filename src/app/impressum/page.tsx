// src/app/impressum/page.tsx

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/shared/Footer';

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2344b8c9' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 text-center">
              <span className="bg-gradient-to-r from-primary via-third to-accent bg-clip-text text-transparent">
                Impressum
              </span>
            </h1>
            
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border-2 border-white/30 p-12 space-y-8 shadow-2xl">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Angaben gemäß § 5 TMG</h2>
                <address className="not-italic text-lg text-foreground/85 space-y-3 leading-relaxed">
                  <p className="font-semibold text-xl">Inklu-Solutions Gesellschaft für Inklusion und Teilhabe GmbH</p>
                  <p>Altenwall 17</p>
                  <p>28195 Bremen</p>
                  <p>Deutschland</p>
                </address>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Vertreten durch</h3>
                <p className="text-lg text-foreground/85 mb-6">Nils Dreyer &amp; Özlem Cetin</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Kontakt</h3>
                <div className="text-lg text-foreground/85 space-y-3">
                  <p>Telefon: <a href="tel:+4942159629800" className="text-primary hover:text-secondary hover:underline transition-colors duration-300 font-medium">0421 – 59 629 800</a></p>
                  <p>E-Mail: <a href="mailto:NDreyer@inklusolutions.de" className="text-primary hover:text-secondary hover:underline transition-colors duration-300 font-medium">NDreyer@inklusolutions.de</a></p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Registereintrag</h3>
                <div className="text-lg text-foreground/85 space-y-2">
                  <p>Eintragung im Handelsregister</p>
                  <p>Registergericht: Bremen</p>
                  <p>Registernummer: HRB 40070</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Umsatzsteuer-ID</h3>
                <p className="text-lg text-foreground/85 mb-3">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
                <p className="font-mono text-lg text-foreground/70">DE367049446</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/" className="text-xl text-primary hover:text-secondary hover:underline font-semibold transition-colors duration-300">
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}