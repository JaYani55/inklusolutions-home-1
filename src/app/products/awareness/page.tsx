// src/app/products/awareness/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Star, Users, Video, MessageCircle, Eye, Lightbulb, Pin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import CTASection from '@/components/shared/CTASection'
import Footer from '@/components/shared/Footer'

// fadeUp currently unused but kept for future animations
// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// }

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -6, scale: 1.01, transition: { duration: 0.25 } },
}

// Icon-Mapping für Awareness-Produkte (basierend auf der Produkt-Übersichtsseite)
/* eslint-disable @typescript-eslint/no-explicit-any */
const productIconMap: Record<string, React.ComponentType<any> | undefined> = {
  'disability-awareness-session': Lightbulb,
  'daw-awareness-workshop': Lightbulb,
  'lass-uns-reden': Video,
  'spotlight-moments': Video,
  'inklu-talks': MessageCircle,
  'begehung-analyse-vor-ort': Pin,
  default: Users,
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const awarenessProducts = [
  {
    id: 'awareness-1',
    slug: 'disability-awareness-session',
    name: 'Disability Awareness Session',
    description: 'Halbtägiger Präsenzworkshop für Teams, Führungskräfte & HR mit Film, Mentor:innen & Reflexion.',
    highlight: false,
    withMentors: false,
    icon: productIconMap['disability-awareness-session'],
    hasDetailsPage: true,
  },
  {
    id: 'awareness-3',
    slug: 'inklu-stories',
    name: 'InkluStories',
    description: 'Echte Menschen, echte Geschichten. Authentische Video-Porträts für interne Kommunikation und Events.',
    icon: productIconMap['lass-uns-reden'],
    hasDetailsPage: false,
  },
  {
    id: 'awareness-4',
    slug: 'inklu-talks',
    name: 'InkluTalks',
    description: 'Einstündige Austauschformate zu spezifischen Behinderungsarten mit unseren Mentor:innen auf Augenhöhe.',
    icon: productIconMap['inklu-talks'],
    hasDetailsPage: false,
  },
  {
    id: 'awareness-5',
    slug: 'begehung-analyse-vor-ort',
    name: 'Begehung',
    description: 'Gemeinsam begehen wir eure Räumlichkeiten - und machen so systematisch Barrieren sichtbar.',
    icon: productIconMap['begehung-analyse-vor-ort'],
    hasDetailsPage: false,
  },
]

type AwarenessProduct = {
  id?: string;
  slug?: string;
  name?: string;
  description?: string;
  highlight?: boolean;
  withMentors?: boolean;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  icon?: React.ComponentType<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  hasDetailsPage?: boolean;
}

function ProductCard({ product, index }: { product: AwarenessProduct, index: number }) {
  const IconComponent = product.icon || Users;
  
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover" 
      className="h-full"
    >
      <Card className={`relative h-full flex flex-col overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/90 border border-white/60 hover:border-accent/30 ${
        product.highlight ? 'ring-2 ring-primary/30 border-primary/20' : ''
      }`}>
        {product.highlight && (
          <div className="absolute right-4 top-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-third px-4 py-2 text-sm font-semibold text-white shadow-lg">
              <Star className="h-4 w-4 fill-current" /> Empfohlen
            </div>
          </div>
        )}

        {product.withMentors && (
          <div className="absolute left-4 top-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-xs font-semibold text-white shadow-lg">
              <Users className="h-3 w-3" /> Mit Mentor:innen
            </div>
          </div>
        )}

        {/* Product Icon */}
        <div className="flex items-center justify-center pt-16 pb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
            <IconComponent className="h-8 w-8 text-primary" />
          </div>
        </div>

        <CardHeader className="px-6 pb-4 pt-0">
          <CardTitle className="text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary text-center">
            {product.name}
          </CardTitle>
          {product.description && (
            <CardDescription className="mt-3 text-base leading-relaxed text-foreground/70 text-center">
              {product.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardFooter className="px-6 pb-6 pt-3 mt-auto">
          {product.hasDetailsPage && (
            <Button asChild className="w-full rounded-full bg-white text-foreground border-[3px] border-accent hover:text-secondary-foreground font-semibold transition-all duration-300 hover:shadow-lg">
              <Link href={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
                Details ansehen <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function AwarenessPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background text-foreground">
        {/* Background pattern - styled like main page */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CE8600' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10V0H20v10L10 0H0v10l10 10L0 30v10h10l10-10 10 10h10V30L30 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* HERO */}
        <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-background to-warm-bg">
          {/* Hero Background Image */}
          <img
            src="/training2.jpg"
            alt="Professionals Background"
            className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
          />
          
          {/* Subtiler Textur-Hintergrund */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-10 z-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CE8600' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10V0H20v10L10 0H0v10l10 10L0 30v10h10l10-10 10 10h10V30L30 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-10" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20 z-20">
            <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-6 relative z-30">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-sm border border-white/60 px-6 py-3 shadow-lg">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-primary">Awareness & Sensibilisierung</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                  Perspektivwechsel durch Begegnung
                </span>
              </h1>
              <p className="mx-auto max-w-4xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/90 font-light bg-white/60 backdrop-blur-sm rounded-xl px-8 py-4 shadow-sm">
                <strong>&ldquo;Wie willkommen wäre ich - mit einer Behinderung - in meinem eigenen Team?&rdquo;</strong>
                <br /><br />
                Unsere Awareness Formate sensibilisieren für Barrieren, Unsichtbarkeit und Ableismus und ermöglichen genau diesen Perspektivwechsel.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-24 bg-gradient-to-br from-warm-bg to-background relative overflow-visible">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 z-0" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {awarenessProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Special Mentor Section */}
        <section className="py-20 bg-gradient-to-br from-background to-warm-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
          
          {/* Decorative background elements like main page */}
          <div className="absolute top-0 left-0 w-full h-full opacity-15 z-10">
            <div className="absolute top-32 right-16 w-3 h-3 bg-accent rounded-full animate-pulse" />
            <div className="absolute bottom-32 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
          </div>

          <div className="container mx-auto px-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white/80 border border-white/60 backdrop-blur-sm rounded-3xl p-10 text-center hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Warum Sensibilisierung wirkt</h3>
                </div>
                <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 font-light">
                  Echte Veränderung beginnt mit Verständnis. Unsere Mentor:innen teilen ihre persönlichen Erfahrungen 
                  und schaffen authentische Begegnungen, die Perspektivwechsel ermöglichen.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/80 border border-white/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-xl font-bold text-primary mb-2">Authentizität</div>
                    <div className="text-foreground/70">Echte Geschichten statt theoretische Konzepte</div>
                  </div>
                  <div className="bg-white/80 border border-white/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="text-xl font-bold text-secondary mb-2">Begegnung</div>
                    <div className="text-foreground/70">Direkte Interaktion auf Augenhöhe</div>
                  </div>
                  <div className="bg-white/80 border border-white/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <Video className="h-8 w-8 text-third" />
                    </div>
                    <div className="text-xl font-bold text-third mb-2">Veränderung</div>
                    <div className="text-foreground/70">Kulturwandel durch Perspektivwechsel</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <CTASection 
          title="Bereit für den nächsten Schritt?"
          description="Entdecken Sie alle unsere Leistungen im Detail oder vereinbaren Sie ein kostenloses Beratungsgespräch."
          subtitle=""
          primaryButtonText="Mehr Erfahren"
          primaryButtonHref="/products"
          secondaryButtonText="Kostenlose Beratung"
          showSecondaryButton={true}
        />
      </div>
      <Footer />
    </>
  )
}
