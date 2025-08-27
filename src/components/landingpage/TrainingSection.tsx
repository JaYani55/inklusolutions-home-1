// src/components/landingpage/TrainingSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrainingSection() {
  // Produkt-Links: Annahme von Slugs unter /products/<slug>. Ich habe sinnvolle Slugs gewählt; passe sie bei Bedarf an.
  const product1 = {
    title: "Inklusionsführerschein",
    subtitle: "2-tägiger Qualifizierungsworkshop",
    href: "/products/produkt-inklusionsführerschein",
  };

  const masterclasses = [
    { title: "Inklusive Stellenausschreibungen", href: "/products/master-inklusive-stellenausschreibungen" },
    { title: "Barrierefreiheit umsetzen", href: "/products/master-barrierefreiheit-umsetzen" },
    { title: "Barrierefreie Kommunikation online", href: "/products/master-barrierefreie-kommunikation-online" },
    { title: "Inklusives Onboarding", href: "/products/master-inklusives-onboarding" },
    { title: "Bewerbungssimulation mit Mentor:innen", href: "/products/master-bewerbungssimulation" },
    { title: "Deep Dives: Behinderungsarten", href: "/products/master-deep-dives-behinderungsarten" },
    { title: "Fördermittel-Optimierung", href: "/products/master-foerdermittel-optimierung" },
    { title: "Vernetzung & Anlaufstellen", href: "/products/master-vernetzung-anlaufstellen" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
          Unsere praxisorientierten Trainings vermitteln Kompetenzen für inklusive Zusammenarbeit — wählbar als kompakte Workshops, vertiefende Masterclasses oder modulare Lernpfade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Produkt 1 - prominent */}
        <div className="md:col-span-1">
          <Link href={product1.href} className="block rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">{product1.title}</h3>
                <div className="text-sm text-foreground/70 mt-1">{product1.subtitle}</div>
              </div>
              <div className="mt-auto flex items-center gap-2 text-primary">
                <span className="text-sm font-medium">Mehr erfahren</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Masterclasses - list */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {masterclasses.map((m) => (
              <Link
                key={m.title}
                href={m.href}
                className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-foreground">{m.title}</h4>
                    <p className="text-sm text-foreground/60 mt-1">Masterclass</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}