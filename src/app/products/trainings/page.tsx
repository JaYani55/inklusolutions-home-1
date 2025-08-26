// src/app/products/trainings/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Award, Bubbles, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -6, scale: 1.01, transition: { duration: 0.25 } },
}

function ProductCard({ product }: { product: any }) {
  return (
    <motion.div variants={cardVariants} whileHover="hover" className="h-full">
      <Card className={`relative h-full flex flex-col overflow-hidden bg-white/70 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 border-2 hover:border-primary/40 ${
        product.highlight ? 'ring-2 ring-primary/30 from-primary/10 to-accent/10' : 'border-white/30'
      }`}>
        {product.highlight && (
          <div className="absolute right-4 top-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-third px-4 py-2 text-sm font-semibold text-primary-foreground shadow-xl">
              <Star className="h-4 w-4 fill-current" /> Empfohlen
            </div>
          </div>
        )}

        {product.withMentors && (
          <div className="absolute left-5 top-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-accent to-third px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
              <Users className="h-3 w-3" /> Mit Mentor:innen
            </div>
          </div>
        )}

        <CardHeader className="px-6 pb-4 pt-14">
          <CardTitle className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
            {product.name}
          </CardTitle>
          {product.description && (
            <CardDescription className="mt-3 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardFooter className="px-6 pb-6 pt-3 mt-auto">
          <Button asChild className="w-full rounded-xl bg-third font-semibold text-primary-foreground shadow-md transition-all hover:from-secondary hover:to-primary">
            <Link href={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
              Details ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const trainingsProducts = [
  {
    id: 'training-1',
    slug: 'inklusionsfuehrerschein',
    name: 'Inklusionsführerschein',
    description: '1-tägiger Präsenz-Workshop mit Fokus auf Haltung, Begegnung & Reflexion – ideal für DEI, SBV, IB',
    highlight: true,
  },
  {
    id: 'training-2',
    slug: 'masterclasses',
    name: 'Masterclass-Serie',
    description: 'Kompakte Vertiefungen z. B. zu: barrierefreie Kommunikation, Fördermittel, Bewerbungssimulation',
    topics: [
      { id: 'mc-1', slug: 'inklusive-stellenausschreibungen', name: 'Inklusive Stellenausschreibungen', description: 'Optimieren Sie Ihre Jobtexte für maximale Diversität und Ansprache.' },
      { id: 'mc-2', slug: 'barrierefreiheit-umsetzen', name: 'Barrierefreiheit umsetzen', description: 'Konkrete Schritte für physische und digitale Zugänglichkeit.' },
      { id: 'mc-3', slug: 'barrierefreie-kommunikation-online', name: 'Barrierefreie Online-Kommunikation', description: 'Web, Social Media und Dokumente für alle zugänglich gestalten.' },
      { id: 'mc-4', slug: 'inklusives-onboarding', name: 'Inklusives Onboarding', description: 'Erfolgreicher Start für alle neuen Teammitglieder.' },
      { id: 'mc-5', slug: 'bewerbungssimulation', name: 'Bewerbungssimulation mit Mentor:innen', description: 'Realistische Vorbereitung mit professionellem Feedback.' },
      { id: 'mc-6', slug: 'deep-dives-behinderungsarten', name: 'Deep Dives: Behinderungsarten', description: 'Fundiertes Verständnis und sensibler Umgang.' },
      { id: 'mc-7', slug: 'foerdermittel-optimierung', name: 'Fördermittel-Optimierung', description: 'Maximale Ausschöpfung verfügbarer Fördermöglichkeiten.' },
      { id: 'mc-8', slug: 'vernetzung-anlaufstellen', name: 'Vernetzung & Anlaufstellen', description: 'Strategischer Aufbau Ihres Inklusionsnetzwerks.' },
    ],
  },
]

export default function TrainingsPage() {
  return (
    <>
      <Navigation />

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/10 to-third/5">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23970200' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/4 h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-primary/15 to-transparent blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 h-96 w-96 animate-blob rounded-full bg-gradient-to-l from-accent/15 to-transparent blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-6 md:px-8 md:py-10">
          {/* HERO */}
          <section className="relative py-12 text-center">
            <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 px-6 py-3">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-primary">Training & Qualifizierung</span>
              </div>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Vom Wollen ins Können
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-foreground/80 md:text-2xl">
                Mit unseren Trainings wird Inklusion lebendig.
              </p>
            </motion.div>
          </section>

          {/* Beschreibung */}
          <section className="py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Wer Inklusion im Unternehmen wirksam gestalten will, braucht mehr als gute Absichten. Es geht um Haltung – und um Handwerk: Handlungskompetenz, Sicherheit im Umgang mit Behinderung und das Wissen, wie man Inklusion im Alltag lebt.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Ob als Präsenz-Workshop oder Online-Session: In unseren Trainings machen wir aus Haltung Handlung – durch echtes Erleben, Reflexion und Praxistransfer. Weniger Theorie, mehr Erfahrung. Weniger Belehrung, mehr Begegnung.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Inklusionsführerschein Section */}
          <section className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                <h2 className="text-foreground text-4xl font-bold mb-4">{trainingsProducts[0].name}</h2>
                <p className="text-xl mb-8 text-foreground/80">{trainingsProducts[0].description}</p>
                <Button asChild className="w-auto rounded-xl bg-third font-semibold text-primary-foreground shadow-md transition-all hover:from-secondary hover:to-primary">
                  <Link href={`/products/${trainingsProducts[0].slug}`} className="flex items-center justify-center gap-2">
                    Details ansehen <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </section>

          {/* Masterclass Section */}
          <section className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto text-center"
            >
              <div className="bg-muted/10 rounded-2xl p-8 mb-12">
                <h2 className="text-foreground text-4xl font-bold mb-4">{trainingsProducts[1].name}</h2>
                <p className="mb-8 text-xl text-foreground/80">{trainingsProducts[1].description}</p>
              </div>
              
              {/* Masterclasses Grid - 2 Reihen mit je 4 Kästen */}
              <div className="space-y-8">
                {/* Obere Reihe */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Inklusive Stellenausschreibungen - Rot-Pink Verlauf */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#E8F3D6' }}
                  >
                    <div className="mb-4">
                      {/* Circle positioned so its center sits on the card's top-left corner */}
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/Stellenausschreibung.png" alt="Stellenausschreibung" className="w-16 h-16 object-contain" />
                      </div>
                      {/* spacer to keep content spacing similar */}
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Inklusive Stellenausschreibungen</h3>
                    <p className="text-black text-sm leading-relaxed">
                      Wie Stellenanzeigen, Anforderungsprofile und Recruitingprozesse barriereärmer und einladender gestaltet werden.
                    </p>
                  </motion.div>

                  {/* Barrierefreiheit umsetzen - Orange */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#FCF9BE' }}
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/Barrierefreiheit.png" alt="Barrierefreiheit" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Barrierefreiheit umsetzen</h3>
                    <p className="text-black text-sm leading-relaxed">
                      Wie Barrieren im Arbeitsumfeld erkannt, priorisiert und pragmatisch abgebaut werden können.
                    </p>
                  </motion.div>

                  {/* Barrierefreie Kommunikation online - Hellgelb */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#FFDCA9' }}
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/KommunikationOnline.png" alt="Kommunikation Online" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Barrierefreie Kommunikation online</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Wie Webseiten und Landingpages inklusiv, zugänglich und für Menschen mit Behinderung attraktiv gestaltet werden.
                    </p>
                  </motion.div>

                  {/* Inklusives Onboarding - Helltürkis */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#FAAB78' }}
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/Onboarding.png" alt="Inklusives Onboarding" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Inklusives Onboarding</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Wie ein inklusives Onboarding gestaltet wird – von Begrüßung bis Prozessanpassung.
                    </p>
                  </motion.div>
                </div>

                {/* Untere Reihe */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Bewerbungssimulation mit Mentor:innen - Lila */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#B5C0D0' }}
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/Bewerbungssimulation.png" alt="Bewerbungssimulation" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Bewerbungssimulation mit Mentor:innen</h3>
                    <p className="text-black text-sm leading-relaxed">
                      Bewerbungsgespräche mit Menschen mit Behinderung trainieren – mit ehrlichem Feedback und Aha-Momenten.
                    </p>
                  </motion.div>

                  {/* Deep Dives: Behinderungsarten - Grün */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#CCD3CA' }}
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/DeepDive.png" alt="Deep Dives" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Deep Dives: Behinderungsarten</h3>
                    <p className="text-black text-sm leading-relaxed">
                      Fachlich und erfahrungsbasiert – z. B. Autismus, psychische Erkrankungen oder chronische Schmerzen besser einordnen.
                    </p>
                  </motion.div>

                  {/* Fördermittel-Optimierung - Sandfarben/Hellorange */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#EED3D9' }}
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/Foerdermittel.png" alt="Fördermittel" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Fördermittel-Optimierung</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Überblick über relevante Leistungen und Strategien, wie Unternehmen Fördermittel effektiv für Inklusion nutzen können.
                    </p>
                  </motion.div>

                  {/* Vernetzung & Anlaufstellen - Hellblau */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#D7E4C0' }}
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible">
                        <img src="/Vernetzung.png" alt="Vernetzung" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Vernetzung & Anlaufstellen</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Die wichtigsten externen Kontakte, Förderakteure und Netzwerke für Inklusionsverantwortliche im Überblick.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 border-t border-border/30 text-center pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
                <span className="bg-primary bg-clip-text text-transparent">
                  Bereit für Ihre Weiterbildung?
                </span>
              </h3>
              <p className="mt-4 text-xl leading-relaxed text-foreground/80 mb-8">
                Investieren Sie in nachhaltige Kompetenz für Ihr Team.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row w-full sm:max-w-xl mx-auto">
                  <div className="w-full sm:flex-1 min-w-0">
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="w-full sm:min-w-[12rem] border-[3px] border-accent text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <a href="https://forms.office.com/e/4fpN4gHamc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Kostenlose Beratung
                      <Users className="ml-3 w-6 h-6" />
                    </a>
                  </Button>
                </div>

                <div className="w-full sm:flex-1 min-w-0">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:min-w-[12rem] border-[3px] border-primary text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Alle Angebote entdecken
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  )
}
