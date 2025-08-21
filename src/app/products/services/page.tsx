// src/app/products/services/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Star, Target, BarChart2, Users } from 'lucide-react'
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

const servicesProducts = [
  {
    id: 'services-1',
    slug: 'peer-mentoring',
    name: 'Peer-Mentoring',
    description: 'Authentische Begleitung durch erfahrene Mentor:innen mit Behinderung',
    highlight: true,
    withMentors: true,
  },
  {
    id: 'services-2',
    slug: 'recruiting-support-jobsync',
    name: 'JobSync - Recruiting-Support',
    description: 'Intelligente Jobdistribution, Matching und Prozessbegleitung'
  },
  {
    id: 'services-3',
    slug: 'inklu-score',
    name: 'InkluScore',
    description: 'Wissenschaftliche Messung Ihrer Inklusionskultur mit Handlungsempfehlungen',
    highlight: true,
  },
  {
    id: 'services-4',
    slug: 'zertifikate-auszeichnungen',
    name: 'Zertifikate & Auszeichnungen',
    description: 'Professionelle Unterstützung für Nachweise und Sichtbarkeit Ihrer Bemühungen'
  },
]

function ProductCard({ product }: { product: any }) {
  return (
    <motion.div variants={cardVariants} whileHover="hover" className="h-full">
      <Card className={`relative h-full overflow-hidden bg-white/70 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 border-2 hover:border-primary/40 ${
        product.highlight ? 'ring-2 ring-primary/30 from-primary/10 to-accent/10' : 'border-white/30'
      }`}>
        {product.highlight && (
          <div className="absolute right-4 top-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-third px-4 py-2 text-sm font-semibold text-primary-foreground shadow-xl">
              <Star className="h-4 w-4 fill-current" /> Empfohlen
            </div>
          </div>
        )}

        {product.withMentors && (
          <div className="absolute left-4 top-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-third px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
              <Users className="h-3 w-3" /> Mit Mentor:innen
            </div>
          </div>
        )}

        <CardHeader className="px-6 pb-4 pt-6">
          <CardTitle className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
            {product.name}
          </CardTitle>
          {product.description && (
            <CardDescription className="mt-3 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardFooter className="px-6 pb-6 pt-3">
          <Button asChild className="w-full rounded-xl bg-gradient-to-r from-primary via-primary to-secondary font-semibold text-primary-foreground shadow-md transition-all hover:from-secondary hover:to-primary">
            <Link href={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
              Details ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function ServicesPage() {
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
          <section className="relative py-24 text-center">
            <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 px-6 py-3">
                <Target className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-primary">Services & Beratung</span>
              </div>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
                <span className="bg-gradient-to-r from-primary via-third to-accent bg-clip-text text-transparent">
                  Strategische Unterstützung
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-foreground/80 md:text-2xl">
                Umfassende Services für nachhaltige Transformation und messbare Erfolge in der Inklusion.
              </p>
            </motion.div>
          </section>

          {/* PRODUCTS */}
          <section className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                {servicesProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </motion.div>
          </section>

          {/* Special InkluScore Section */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary/10 via-third/10 to-accent/10 border-2 border-primary/30 rounded-3xl p-10 text-center hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">InkluScore im Detail</h3>
                </div>
                <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed mb-8">
                  Unser wissenschaftlich fundiertes Bewertungssystem macht Ihre Inklusionskultur messbar und gibt 
                  Ihnen konkrete Handlungsempfehlungen für nachhaltigen Fortschritt.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/60 rounded-xl p-6">
                    <div className="text-2xl font-bold text-primary mb-2">Messung</div>
                    <div className="text-foreground/80">Wissenschaftliche Bewertung Ihrer aktuellen Inklusionskultur</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-6">
                    <div className="text-2xl font-bold text-secondary mb-2">Analyse</div>
                    <div className="text-foreground/80">Detaillierte Auswertung mit Stärken und Entwicklungsfeldern</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-6">
                    <div className="text-2xl font-bold text-third mb-2">Steuerung</div>
                    <div className="text-foreground/80">Konkrete Handlungsempfehlungen für nachhaltige Verbesserungen</div>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary via-secondary to-third hover:from-primary/90 hover:via-secondary/90 hover:to-third/90 text-primary-foreground rounded-full px-10 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  <Link href="/products/inklu-score" className="flex items-center gap-3">
                    InkluScore starten
                    <BarChart2 className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="mt-16 border-t border-border/30 text-center pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
                <span className="bg-gradient-to-r from-primary via-third to-accent bg-clip-text text-transparent">
                  Bereit für strategische Transformation?
                </span>
              </h3>
              <p className="mt-4 text-xl leading-relaxed text-foreground/80 mb-8">
                Lassen Sie uns gemeinsam Ihre Inklusionsziele erreichen.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-primary via-secondary to-third px-10 py-4 font-semibold text-primary-foreground shadow-xl transition-all hover:from-primary/90 hover:via-secondary/90 hover:to-third/90 hover:scale-105">
                  <Link href="/team" className="flex items-center gap-3 text-lg">
                    <Target className="h-6 w-6" /> Kostenlose Beratung
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-2 border-border/50 px-10 py-4 font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                  <Link href="/products" className="flex items-center gap-3 text-lg">
                    Alle Produkte <ArrowRight className="ml-2 h-5 w-5" />
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
