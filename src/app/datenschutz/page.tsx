// src/app/datenschutz/page.tsx

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5 relative overflow-hidden">
        {/* Subtiles Hintergrundmuster */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2344b8c9' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 text-center">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                InkluSolutions.de Datenschutzerklärung
              </span>
            </h1>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border-2 border-white/30 p-12 space-y-8 shadow-2xl">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot"). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortliche Stelle</h2>
                <address className="not-italic text-lg text-foreground/85 space-y-1 leading-relaxed">
                  <p>Inklu-Solutions Gesellschaft für Inklusion und Teilhabe GmbH</p>
                  <p>Altenwall 17</p>
                  <p>28195 Bremen</p>
                  <p>Deutschland</p>
                  <p>
                    E-Mail: <a href="mailto:NDreyer@inklusolutions.de" className="text-primary hover:text-secondary hover:underline">NDreyer@inklusolutions.de</a>
                  </p>
                </address>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Arten der verarbeiteten Daten</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                  <li>Bestandsdaten (z.B., Namen, Adressen).</li>
                  <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
                  <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
                  <li>Nutzungsdaten (z.B., besuchte Sites, Interesse an Inhalten, Zugriffszeiten).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Kategorien betroffener Personen</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer").
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Zweck der Verarbeitung</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                  <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
                  <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
                  <li>Sicherheitsmaßnahmen</li>
                  <li>Reichweitenmessung/Marketing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Verwendete Begrifflichkeiten</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Als „Verantwortlicher“ wird die natürliche oder juristische Person bezeichnet, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Maßgebliche Rechtsgrundlagen</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt: Einwilligungen – Art. 6 Abs. 1 lit. a & Art. 7 DSGVO; Verarbeitung zur Vertragserfüllung – Art. 6 Abs. 1 lit. b DSGVO; rechtliche Verpflichtungen – Art. 6 Abs. 1 lit. c DSGVO; berechtigte Interessen – Art. 6 Abs. 1 lit. f DSGVO; lebenswichtige Interessen – Art. 6 Abs. 1 lit. d DSGVO.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Sicherheitsmaßnahmen</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Wir treffen geeignete technische und organisatorische Maßnahmen nach Art. 32 DSGVO, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Zusammenarbeit mit Auftragsverarbeitern und Dritten</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Datenübermittlungen an Auftragsverarbeiter oder Dritte erfolgen nur auf Grundlage gesetzlicher Erlaubnis, Ihrer Einwilligung, rechtlicher Verpflichtung oder berechtigter Interessen (Art. 28 DSGVO bei Auftragsverarbeitungsvertrag).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Rechte der betroffenen Personen</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Sie haben Rechte auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 & 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) und Beschwerde (Art. 77 DSGVO).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Widerrufs- und Widerspruchsrecht</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Widerruf erteilter Einwilligungen gem. Art. 7 Abs. 3 DSGVO möglich; Widerspruch gegen künftige Verarbeitung gem. Art. 21 DSGVO jederzeit möglich.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Löschung von Daten</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Daten werden gelöscht oder in der Verarbeitung eingeschränkt, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen (z.B. 10 Jahre gemäß AO/HGB).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Hosting via Cloudflare</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Unser Angebot wird auf Cloudflare (CDN & DNS) gehostet. Server-Logfiles werden gemäß Art. 28 & Art. 6 Abs. 1 lit. f DSGVO verarbeitet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Kontaktformular via Microsoft Forms</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Anfragen über Microsoft Forms werden zur Bearbeitung gespeichert und verarbeitet auf Basis Art. 6 Abs. 1 lit. b & f DSGVO. Datenschutzerklärung von Microsoft: <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary hover:underline">privacy.microsoft.com</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Einbindung von Diensten und Inhalten Dritter</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Inhalte und Services Dritter (z.B. Schriftarten) werden auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) eingebunden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Google Fonts</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Schriftarten werden lokal gehostet, sodass keine Daten an Google übertragen werden.
                </p>
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
    </>
  );
}
