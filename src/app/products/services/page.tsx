// src/app/products/services/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Star, Target, BarChart2, Users, Zap, Award, Settings } from 'lucide-react'
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

// Icon-Mapping für Services-Produkte
/* eslint-disable @typescript-eslint/no-explicit-any */
const productIconMap: Record<string, React.ComponentType<any> | undefined> = {
  'recruiting-support-jobsync': Zap,
  'inklu-score': BarChart2,
  'zertifikate-auszeichnungen': Award,
  default: Settings,
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const servicesProducts = [
  {
    id: 'services-1',
    slug: 'recruiting-support-jobsync',
    name: 'Inklu-Connect JobSync - Recruiting-Support',
    description: 'KI-gestützte Multi-Posting Software für intelligente Stellenverteilung in ein inklusives Partnernetzwerk. Vollautomatisierung durch SmartSync-System.',
    highlight: false,
    icon: productIconMap['recruiting-support-jobsync'],
    hasDetailsPage: false,
    isExternal: true,
    externalUrl: 'https://inklu-connect.de'
  },
  {
    id: 'services-2',
    slug: 'inklu-score',
    name: 'InkluScore',
    description: 'Wissenschaftliche Messung Ihrer Inklusionskultur mit Handlungsempfehlungen',
    highlight: false,
    icon: productIconMap['inklu-score'],
    hasDetailsPage: false,
    isExternal: false
  },
  {
    id: 'services-3',
    slug: 'zertifikate-auszeichnungen',
    name: 'Zertifikate & Auszeichnungen',
    description: 'Professionelle Unterstützung für Nachweise und Sichtbarkeit Ihrer Bemühungen',
    highlight: false,
    icon: productIconMap['zertifikate-auszeichnungen'],
    hasDetailsPage: false,
    isExternal: false
  },
]

type ServicesProduct = {
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
  isExternal?: boolean;
  externalUrl?: string;
}

function ProductCard({ product, index }: { product: ServicesProduct, index: number }) {
  const IconComponent = product.icon || Settings;
  
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
          {(product.hasDetailsPage || product.isExternal) && (
            <Button asChild className="w-full rounded-full bg-white text-foreground border-[3px] border-accent hover:text-secondary-foreground font-semibold transition-all duration-300 hover:shadow-lg">
              {product.isExternal ? (
                <a 
                  href={product.externalUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Jetzt entdecken <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link href={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
                  Details ansehen <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background text-foreground">
        {/* Background pattern - styled like awareness page */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CE8600' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10V0H20v10L10 0H0v10l10 10L0 30v10h10l10-10 10 10h10V30L30 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* HERO */}
        <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-background to-warm-bg">
          {/* Hero Background Image */}
          <img
            src="/team-collaboration.jpg"
            alt="Services Background"
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
                <Target className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-primary">Services & Beratung</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                  Strategische Unterstützung
                </span>
              </h1>
              <p className="mx-auto max-w-4xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/90 font-light bg-white/60 backdrop-blur-sm rounded-xl px-8 py-4 shadow-sm">
                Umfassende Services für nachhaltige Transformation und messbare Erfolge in der Inklusion.
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
                {servicesProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* JobSync Details Section */}
        <section className="py-20 bg-gradient-to-br from-background to-warm-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
          
          {/* Decorative background elements */}
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
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-medium mb-6 pb-2">
                <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                  Details im Überblick
                </span>
                <br />
                <span className="text-foreground/70">
                  Inklu-Connect JobSync
                </span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-light">
                Revolutioniere dein Recruiting mit intelligenter Inklusion und KI-gestützter Automatisierung.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Multi-Posting Software Service */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 border border-white/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 group overflow-hidden relative shadow-lg h-full">
                  <div className="p-8 relative h-full flex flex-col">
                    {/* Icon with gradient background */}
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    
                    {/* Title and Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-medium text-foreground mb-3">
                        Multi-Posting Software
                      </h3>
                      <p className="text-foreground/60 text-sm font-medium uppercase tracking-wider">
                        Intelligente Stellenverteilung
                      </p>
                    </div>
                    
                    {/* Features List */}
                    <ul className="space-y-3 text-foreground/70 leading-relaxed mb-8 flex-grow">
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Automatische Verteilung in inklusives Partnernetzwerk</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Erreichen von 3 Millionen Menschen mit Behinderungen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>30% weniger Werbekosten pro Einstellung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Zugang zu inklusiven, spezialisierten Jobplattformen und Premium Jobbörsen</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Job Synchronisation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 border border-white/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 group overflow-hidden relative shadow-lg h-full">
                  <div className="p-8 relative h-full flex flex-col">
                    {/* Icon with gradient background */}
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary/15 to-third/15 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Settings className="h-10 w-10 text-secondary group-hover:text-third transition-colors duration-300" />
                    </div>
                    
                    {/* Title and Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-medium text-foreground mb-3">
                        Job Synchronisation
                      </h3>
                      <p className="text-foreground/60 text-sm font-medium uppercase tracking-wider">
                        Automatisiertes Crawling & KI-Analyse
                      </p>
                    </div>
                    
                    {/* Features List */}
                    <ul className="space-y-3 text-foreground/70 leading-relaxed mb-8 flex-grow">
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Automatisches Crawling Ihrer Jobseite (bis zu 5 Domains)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>KI-Anreicherung mit präzisen Metadaten</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>30% schnellere Besetzungszeiten</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>2x mehr qualifizierte Bewerbungen aus organischen Quellen</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Vollautomatisierung */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 border border-white/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 group overflow-hidden relative shadow-lg h-full">
                  <div className="p-8 relative h-full flex flex-col">
                    {/* Icon with gradient background */}
                    <div className="w-20 h-20 bg-gradient-to-br from-third/15 to-accent/15 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <BarChart2 className="h-10 w-10 text-third group-hover:text-accent transition-colors duration-300" />
                    </div>
                    
                    {/* Title and Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-medium text-foreground mb-3">
                        Vollautomatisierung
                      </h3>
                      <p className="text-foreground/60 text-sm font-medium uppercase tracking-wider">
                        SmartSync System & Partnernetzwerk
                      </p>
                    </div>
                    
                    {/* Features List */}
                    <ul className="space-y-3 text-foreground/70 leading-relaxed mb-8 flex-grow">
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-third mt-0.5 flex-shrink-0" />
                        <span>SmartSync LLM-System für intelligente Verteilung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-third mt-0.5 flex-shrink-0" />
                        <span>Dezentrales Partnernetzwerk mit Bildungseinrichtungen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-third mt-0.5 flex-shrink-0" />
                        <span>API-Zugang für ATS/CRM Integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-third mt-0.5 flex-shrink-0" />
                        <span>Kein manueller Aufwand - Jobs erreichen die richtigen Talente</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Special InkluScore Section */}
        <section className="py-20 bg-gradient-to-br from-warm-bg to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent" />
          
          {/* Decorative background elements like awareness page */}
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
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">InkluScore im Detail</h3>
                </div>
                <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 font-light">
                  Unser wissenschaftlich fundiertes Bewertungssystem macht Ihre Inklusionskultur messbar und gibt 
                  Ihnen konkrete Handlungsempfehlungen für nachhaltigen Fortschritt.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/80 border border-white/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <BarChart2 className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-xl font-bold text-primary mb-2">Messung</div>
                    <div className="text-foreground/70">Wissenschaftliche Bewertung Ihrer aktuellen Inklusionskultur</div>
                  </div>
                  <div className="bg-white/80 border border-white/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="text-xl font-bold text-secondary mb-2">Analyse</div>
                    <div className="text-foreground/70">Detaillierte Auswertung mit Stärken und Entwicklungsfeldern</div>
                  </div>
                  <div className="bg-white/80 border border-white/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <Settings className="h-8 w-8 text-third" />
                    </div>
                    <div className="text-xl font-bold text-third mb-2">Steuerung</div>
                    <div className="text-foreground/70">Konkrete Handlungsempfehlungen für nachhaltige Verbesserungen</div>
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
