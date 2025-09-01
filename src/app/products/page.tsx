// src/app/products/page.tsx
"use client"; // Notwendig für Framer Motion und useState/useEffect Hooks

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation"; // Annahme: Pfad passt
import Image from "next/image"; // Import für das Next.js Image-Komponente
import {
  Lightbulb,
  Settings,
  GraduationCap,
  Star,
  Video,
  MessageCircle,
  Users,
  Zap,
  Circle,
  BarChart3,
  Award,
  ArrowRight,
  Phone,
  Pin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// formatLabel currently unused but kept for future use
// const formatLabel = (s: string) =>
//   s
//     .replace(/-/g, " ")
//     .split(" ")
//     .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");

// Mapping Produkt-Schlüssel (normalisiert) zu Lucide Icon Komponenten
/* eslint-disable @typescript-eslint/no-explicit-any */
const productIconMap: Record<string, any> = {
  inklusionsführerschein: GraduationCap,
  masterclasses: Award, // Masterclasses könnten auch Award sein
  daw: Lightbulb,
  inklustories: Star, // Eventuell ein Story-Icon wenn vorhanden
  lassunsreden: Video,
  spotlightmoments: Video,
  inklutalks: MessageCircle,
  peermentoring: Users,
  jobsync: Zap,
  inkluscore: BarChart3,
  zertifikate: Award,
  recruitingsupport: Zap,
  lunchbag: MessageCircle,
  begehung: Pin, // Eventuell ein MapPin für Begehung
  default: Circle, // Standard-Icon falls kein spezifisches gefunden wird
};
/* eslint-enable @typescript-eslint/no-explicit-any */

// Deine Daten für die Produktkategorien
const productCategories = [
  {
    id: "training", // Eindeutige ID für Ankerlinks
    title: "Training",
    icon: GraduationCap,
    color: "from-primary to-secondary",
    link: "/products/trainings",
    image: "/training1.png", // Platzhalterbild für Training (aus /public)
    alt: "Personen lernen in einem Training",
    description:
      "Unsere praxisnahen Qualifizierungen vermitteln euch das nötige Wissen und schaffen Sicherheit im inklusiven Umgang. Von Grundlagen bis zu spezifischen Themen, individuell auf eure Anforderungen zugeschnitten.",
    products: [
      { name: "Inklusionsführerschein", description: "Grundlagenwissen für alle Mitarbeitenden" },
      { name: "Masterclasses", description: "Vertiefende Workshops zu spezifischen Inklusionsthemen" },
      // Füge hier weitere spezifische Trainings hinzu
    ],
  },
  {
    id: "bewusstsein",
    title: "Bewusstsein",
    icon: Lightbulb,
    color: "from-secondary to-accent",
    link: "/products/bewusstsein",
    image: null, // Explizit kein Bild für Bewusstsein
    alt: "Menschen führen ein Gespräch in einem Workshop", // Alt-Text bleibt, falls man ihn doch wieder will
    description:
      "Wir initiieren Formate, die echte Begegnungen ermöglichen, offene Dialoge fördern und diverse Perspektiven sichtbar machen. Erlebt einen nachhaltigen Wandel in eurer Unternehmenskultur.",
    products: [
      { name: "DAW", description: "Der Diversity & Awareness Workshop für tiefgehendes Verständnis" },
      { name: "Inklustories", description: "Inspirierende Geschichten und Erfahrungsberichte" },
      { name: "Lass uns reden", description: "Interaktive Gesprächsformate für offenen Austausch" },
      { name: "Spotlight Moments", description: "Kurze, prägnante Einblicke in inklusive Themen" },
      { name: "InkluTalks", description: "Regelmäßige Diskussionsrunden zu aktuellen Inklusionsfragen" },
      { name: "Lunchbag", description: "Informelle Mittagspausen-Dialoge" },
      { name: "Begehung", description: "Praktische Analyse der Barrierefreiheit vor Ort für Unternehmen" },
    ],
  },
  {
    id: "services",
    title: "Services",
    icon: Settings,
    color: "from-accent to-third",
    link: "/products/services",
  image: "/Produktion2.jpg", // Platzhalterbild für Services (aus /public)
    alt: "Team arbeitet zusammen an einem Projekt mit Diagrammen",
    description:
      "Unsere Instrumente und Tools begleiten eure Prozesse, machen Erfolge sichtbar und verankern Inklusion nachhaltig in eurer Organisationsstruktur. Für messbaren Impact und langfristigen Erfolg.",
    products: [
      { name: "Peer-Mentoring", description: "Erfahrene Mentor:innen unterstützen neue Mitarbeitende" },
      { name: "Recruiting-Support", description: "Optimierung eurer Recruiting-Prozesse für mehr Inklusion" },
      { name: "InkluScore", description: "Messung und Analyse eures Inklusionsgrades" },
      { name: "Zertifikate", description: "Validierung und Auszeichnung eurer Inklusionsbemühungen" },
      // Füge hier weitere spezifische Services hinzu
    ],
  },
];

// Hauptkomponente für die Produktseite
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* Hero-Sektion für die Produktseite */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-background to-warm-bg">
        {/* Subtiler Textur-Hintergrund */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CE8600' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10V0H20v10L10 0H0v10l10 10L0 30v10h10l10-10 10 10h10V30L30 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Inhalt des Hero-Bereichs */}
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Unsere Leistungen
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto"
          >
            Inklusion braucht Lösungen – keine Einzelmaßnahmen.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed"
          >
            InkluSolutions steht für ganzheitliche Inklusionsentwicklung im
            Unternehmen: Von Bewusstsein über Qualifizierung bis zur
            strukturellen Verankerung. Statt isolierter Einzelmaßnahmen bieten
            wir einen modularen Baukasten – strategisch, praxisnah und
            wirksam. Mit Mentor:innen, messbarem Impact und einem
            klaren Fokus auf die Potenziale eurer Mitarbeitenden mit
            Behinderung begleiten wir euch auf dem Weg zu einer inklusiven
            Unternehmenskultur.
          </motion.p>
          {/* Anker-Links zu den Sektionen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {productCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-lg hover:underline transition-colors duration-200"
              >
                {category.title}

              </a>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Sektion: Unsere Leistungen entfalten Wirkung */}
      <section
        id="overview-section"
        className="py-20 bg-gradient-to-br from-warm-bg to-background"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
              Unsere Leistungen entfalten Wirkung auf drei Ebenen
            </span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ebene 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 p-8 rounded-2xl shadow-lg border border-white/60 text-center"
            >
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Kompetenz aufbauen
              </h3>
              <p className="text-lg text-foreground/80">
                Durch praxisnahe Trainings
              </p>
            </motion.div>
            {/* Ebene 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 p-8 rounded-2xl shadow-lg border border-white/60 text-center"
            >
              <Lightbulb className="w-12 h-12 text-third mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Kultur stärken</h3>
              <p className="text-lg text-foreground/80">
                Mit Formaten für Bewusstsein und Perspektivwechsel
              </p>
            </motion.div>
            {/* Ebene 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 p-8 rounded-2xl shadow-lg border border-white/60 text-center"
            >
              <Settings className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Strukturen verankern
              </h3>
              <p className="text-lg text-foreground/80">
                Über Services und Tools zur Umsetzung
              </p>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-xl text-foreground/70 mt-12 max-w-2xl mx-auto"
          >
            Wir arbeiten ganzheitlich – mit Fachwissen, der Perspektive von
            Menschen mit Behinderung und messbarem Impact.
          </motion.p>
        </div>
      </section>
      {/* Leistungsbereiche als einzelne Sektionen */}
      {productCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id} // Anker-ID für Navigation
          className={`py-24 ${
            index % 2 === 0
              ? "bg-gradient-to-br from-warm-bg to-background"
              : "bg-gradient-to-br from-background to-warm-bg"
          } odd:bg-gray-100 even:bg-white`} // Abwechselnde Hintergründe
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-center mb-16"
            >
              <span className={`bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent`}>
                {category.title}
              </span>
            </motion.h2>

            {/* Bedingtes Rendering basierend auf Category ID */}
            {category.id === "bewusstsein" ? (
              // Spezifisches Layout für "Bewusstsein"
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 text-center md:text-left">
                  {category.description}
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center justify-center md:justify-start gap-3">
                  <category.icon className="w-7 h-7 text-primary" />
                  Formate für Perspektivwechsel & Dialog:
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, pIndex) => {
                    const key = product.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                    const IconComponent = productIconMap[key] || productIconMap.default;
                    return (
                      <motion.div
                        key={pIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: pIndex * 0.08 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="p-6 bg-white/70 rounded-xl shadow-lg border border-white/50 group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-primary group-hover:text-secondary flex-shrink-0">
                            <IconComponent className="w-8 h-8" aria-hidden />
                          </span>
                          <p className="font-semibold text-xl text-foreground leading-tight">
                            {product.name}
                          </p>
                        </div>
                        <p className="text-foreground/70 text-base leading-relaxed">
                          {product.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              // Standardlayout für andere Kategorien
              <>
                <div
                  className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 0 ? "" : "md:grid-flow-col-dense"
                  }`}
                >
                  {/* Bild / Video / Visuelles Element */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                    className={`${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    } relative w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01] ${
                      category.id === "training" ? "h-96 md:h-[34rem]" : category.id === "services" ? "h-96 md:h-[34rem]" : "aspect-video"
                    }`}
                  >
                    <Image
                      src={category.image as string} // Typ-Assertion, da wir wissen, dass es hier ein String ist
                      alt={category.alt}
                      fill
                      // cover sorgt dafür, dass das Bild die Höhe füllt und links/rechts abgeschnitten werden
                      style={
                        // Verwende objectPosition statt transform, damit das Bild innerhalb des Fill-Containers korrekt fokussiert
                        category.id === "services"
                          ? { objectFit: "cover", objectPosition: "45% 50%" }
                          : { objectFit: "cover", objectPosition: "10% 50%" }
                      }
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                    {/* Optional: Overlay für Textlesbarkeit oder Branding */}
                    <div className="absolute inset-0 bg-black/10"></div>
                  </motion.div>
                  {/* Beschreibung und Formate */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                    className={`${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    } p-4`}
                  >
                    <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
                      {category.description}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <category.icon className="w-7 h-7 text-primary" />
                      Formate im {category.title}-Bereich:
                    </h3>
                    <ul className="space-y-4">
                      {category.products.map((product, pIndex) => {
                        const key = product.name.toLowerCase().replace(/ /g, '-');
                        const IconComponent = productIconMap[key] || productIconMap.default;
                        return (
                          <motion.li
                            key={pIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: pIndex * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex items-start gap-4 p-4 bg-white/70 rounded-lg shadow-sm border border-white/50 group hover:shadow-md transition-all duration-300"
                          >
                            <span className="mt-1 text-primary group-hover:text-secondary transition-colors duration-300">
                              <IconComponent className="w-6 h-6" aria-hidden />
                            </span>
                            <div>
                              <p className="font-semibold text-xl text-foreground">
                                {product.name}
                              </p>
                              <p className="text-foreground/70 text-base">
                                {product.description}
                              </p>
                            </div>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </div>

                {/* CTA button only rendered for 'training' category */}
                {category.id === "training" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                  >
                    <Link href={category.link}>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-[3px] border-accent text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Alle {category.title}-Angebote
                          <ArrowRight className="ml-3 w-5 h-5" />
                        </span>
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>
      ))}

      {/* CTA-Bar */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-center container mx-auto px-6"
      >
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-foreground/70 mb-6">
            Entdecken Sie alle unsere Leistungen im Detail oder vereinbaren Sie
            ein kostenloses Beratungsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <div className="w-full sm:flex-1 min-w-0">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:min-w-[12rem] border-[3px] border-accent text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a
                  href="https://forms.office.com/e/4fpN4gHamc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Kostenlose Beratung
                  <Phone className="ml-3 w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border/20 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-2">
              <img
                src="/InkluSolutionsLogo.png"
                alt="InkluSolutions Logo"
                className="h-12 mx-auto md:mx-0 mb-4"
              />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Navigation
              </h4>
              <div className="space-y-2">
                <Link
                  href="/products"
                  className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Leistungen
                </Link>
                <Link
                  href="/team"
                  className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Team
                </Link>
                <Link
                  href="/historie"
                  className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Historie
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Rechtliches
              </h4>
              <div className="space-y-2">
                <Link
                  href="/impressum"
                  className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Datenschutz
                </Link>
                <a
                  href="/datenschutz/contact"
                  className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-8 text-center">
            <p className="text-foreground/60">
              © 2025 InkluSolutions. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}