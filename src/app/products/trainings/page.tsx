// src/app/products/trainings/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Award, Star, Users } from 'lucide-react'
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
          <div className="absolute left-4 top-4 z-10">
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
    description: 'Zertifizierte 2-tägige Qualifizierung mit praktischen Werkzeugen für inklusives Arbeiten',
    highlight: true,
  },
  {
    id: 'training-2',
    slug: 'masterclasses',
    name: 'Masterclass-Serie',
    description: 'Spezialisierte Tiefgänge in Schlüsselthemen der Inklusion. Jedes Modul ist eigenständig buchbar.',
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
                  Professionelle Weiterbildung
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-foreground/80 md:text-2xl">
                Zertifizierte Qualifizierungen und spezialisierte Module für nachhaltige Inklusion in Ihrem Unternehmen.
              </p>
            </motion.div>
          </section>

          {/* Inklusionsführerschein Section */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-foreground text-4xl font-bold mb-4">{trainingsProducts[0].name}</h2>
              <p className="text-xl mb-6">{trainingsProducts[0].description}</p>
              <ul className="mb-6 text-left list-disc mx-auto max-w-md">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt.</li>
                <li>Ut labore et dolore magna aliqua.</li>
              </ul>
          <Button asChild className="w-auto rounded-xl bg-third font-semibold text-primary-foreground shadow-md transition-all hover:from-secondary hover:to-primary">
            <Link href={`/products/${trainingsProducts[0].slug}`} className="flex items-center justify-center gap-2">
              Details ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
            </div>
          </section>

          {/* Masterclass Section */}
          <section className="py-12 bg-muted/10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-foreground text-4xl font-bold mb-2">{trainingsProducts[1].name}</h2>
              <p className="mb-8 text-xl">Spezialisierte Tiefgänge in Schlüsselthemen der Inklusion</p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {trainingsProducts[1].topics?.map((topic) => (
                  <ProductCard key={topic.id} product={topic} />
                ))}
              </div>
            </div>
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
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bereit für Ihre Weiterbildung?
                </span>
              </h3>
              <p className="mt-4 text-xl leading-relaxed text-foreground/80 mb-8">
                Investieren Sie in nachhaltige Kompetenz für Ihr Team.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button asChild size="lg" className="text-lg rounded-full bg-accent px-10 py-4 font-semibold text-primary-foreground shadow-xl transition-all hover:from-primary/90 hover:via-secondary/90 hover:to-third/90 hover:scale-105">
                  <Link href="/team" className="flex items-center gap-3 text-lg">
                    <Users className="h-6 w-6" /> Kostenlose Beratung
                  </Link>
                </Button>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  )
}
