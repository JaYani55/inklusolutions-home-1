// src/app/products/page.tsx
'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import { motion, Variants, LayoutGroup } from 'framer-motion'
import { ArrowRight, Star, Award, Users, Target, Sparkles, ChevronRight, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * ---------------------------------------------------------------------------
 * 1) TYPES & DATA
 * ---------------------------------------------------------------------------
 */
interface ProductTopic {
  id: string
  slug: string
  name: string
  description: string
  icon?: string
}

interface Product {
  id: string
  slug: string
  name: string
  description?: string
  topics?: ProductTopic[]
  categoryIcon?: LucideIcon
  highlight?: boolean
}

interface ProductCategory {
  category: string
  description: string
  icon: LucideIcon
  items: Product[]
}

const productsByCategory: ProductCategory[] = [
  {
    category: 'Training & Qualifizierung',
    description: 'Professionelle Weiterbildung für nachhaltige Inklusion',
    icon: Award,
    items: [
      {
        id: 'training-1',
        slug: 'inklusionsfuehrerschein',
        name: 'Inklusionsführerschein',
        description:
          'Zertifizierte 2-tägige Qualifizierung mit praktischen Werkzeugen für inklusives Arbeiten',
      },
      {
        id: 'training-2',
        slug: 'masterclasses',
        name: 'Masterclass-Serie',
        description:
          'Spezialisierte Tiefgänge in Schlüsselthemen der Inklusion. Jedes Modul ist eigenständig buchbar.',
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
    ],
  },
  {
    category: 'Bewusstsein & Sensibilisierung',
    description: 'Kulturwandel durch Aufklärung und authentische Begegnungen',
    icon: Users,
    items: [
      {
        id: 'bewusstsein-1',
        slug: 'disability-awareness-session',
        name: 'Disability Awareness Session',
        description:
          'Halbtägiger, interaktiver Sensibilisierungsworkshop mit authentischen Begegnungen und nachhaltigem Perspektivwechsel',
      },
      {
        id: 'bewusstsein-2',
        slug: 'daw-awareness-workshop',
        name: 'DAW - Disability Awareness Workshop',
        description:
          '4-stündige interaktive Sensibilisierung mit nachhaltiger Wirkung - auch in Präsenz verfügbar',
      },
      { id: 'bewusstsein-3', slug: 'lass-uns-reden', name: '"Lass uns reden" - Videopaket', description: 'Professionelle Video-Serie für interne Kommunikation und Events' },
      { id: 'bewusstsein-4', slug: 'spotlight-moments', name: 'Spotlight Moments', description: 'Maßgeschneiderte Videoproduktion Ihrer Inklusionsgeschichten' },
      { id: 'bewusstsein-5', slug: 'inklu-talks', name: 'Inklu-Talks', description: '60-minütige Expert:innen-Talks für offenen Austausch und Diskussion' },
      { id: 'bewusstsein-6', slug: 'begehung-analyse-vor-ort', name: 'Barrierefreiheits-Analyse', description: 'Professionelle Vor-Ort-Begutachtung mit detailliertem Maßnahmenkatalog' },
    ],
  },
  {
    category: 'Services & Beratung',
    description: 'Strategische Unterstützung für nachhaltige Transformation',
    icon: Target,
    items: [
      {
        id: 'services-1',
        slug: 'peer-mentoring',
        name: 'Peer-Mentoring',
        description: 'Authentische Begleitung durch erfahrene Mentor:innen mit Behinderung',
      },
      { id: 'services-2', slug: 'recruiting-support-jobsync', name: 'JobSync - Recruiting-Support', description: 'Intelligente Jobdistribution, Matching und Prozessbegleitung' },
      { id: 'services-3', slug: 'inklu-score', name: 'Inklu-Score', description: 'Wissenschaftliche Messung Ihrer Inklusionskultur mit Handlungsempfehlungen' },
      { id: 'services-4', slug: 'zertifikate-auszeichnungen', name: 'Zertifikate & Auszeichnungen', description: 'Professionelle Unterstützung für Nachweise und Sichtbarkeit Ihrer Bemühungen' },
    ],
  },
]

/**
 * ---------------------------------------------------------------------------
 * 2) ANIMATION PRESETS (framer-motion)
 * ---------------------------------------------------------------------------
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -6, scale: 1.01, transition: { duration: 0.25 } },
}

/**
 * ---------------------------------------------------------------------------
 * 3) SMALL UI PRIMITIVES
 * ---------------------------------------------------------------------------
 */
function Section({ children, className = '', ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { className?: string }>) {
  return (
    <section {...props} className={`relative py-10 ${className}`}>
      {children}
    </section>
  )
}

function Pill({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-gradient-to-r from-card/80 to-muted/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground/90 shadow-lg">
      <Sparkles className="h-4 w-4 text-third" />
      {children}
    </span>
  )
}

/**
 * ---------------------------------------------------------------------------
 * 4) FEATURED STRIP (horizontally scrollable chips for highlights)
 * ---------------------------------------------------------------------------
 */
function FeaturedStrip({ items }: { items: { name: string; slug: string; category: string }[] }) {
  return (
    <div className="not-prose relative -mx-4 md:mx-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]" />
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-3 md:px-0">
        {items.map((it) => (
          <Link key={`${it.category}-${it.slug}`} href={`/products/${it.slug}`} className="snap-start">
            <span className="group inline-flex items-center gap-3 rounded-full border border-border/60 bg-gradient-to-r from-muted/80 to-card/80 backdrop-blur-sm px-6 py-3 text-base font-medium shadow-lg transition-all hover:border-primary/60 hover:from-primary/15 hover:to-third/15 hover:scale-105 hover:shadow-xl">
              <Star className="h-5 w-5 text-primary group-hover:text-third transition-colors duration-300" />
              {it.name}
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

/**
 * ---------------------------------------------------------------------------
 * 5) PRODUCT CARD (supports topics)
 * ---------------------------------------------------------------------------
 */
function ProductCard({ product }: { product: Product }) {
  const isMasterclass = !!product.topics?.length

  return (
    <motion.div variants={cardVariants} whileHover="hover" className="h-full">
      <Card className={`relative h-full overflow-hidden bg-white/70 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 border-2 hover:border-primary/40 ${
        product.highlight ? 'ring-2 ring-primary/30 from-primary/10 to-accent/10' : 'border-white/30'
      }`}>
        {product.highlight && (
          <div className="absolute right-4 top-4 z-10">
            <div className="flex items-center gap-2 rounded-full bg-third px-4 py-2 text-sm font-semibold text-primary-foreground shadow-xl">
              <Star className="h-4 w-4 fill-current" /> Empfohlen
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

        <CardContent className="px-6 pb-3">
          {isMasterclass && (
            <div className="mt-4 space-y-4">
              <div className="mb-4 flex items-center gap-2 text-base font-medium text-primary">
                <Award className="h-5 w-5" /> Verfügbare Module
              </div>
              <div className="grid max-h-80 gap-4 overflow-y-auto pr-1">
                {product.topics!.slice(0, 6).map((t) => (
                  <Link key={t.id} href={`/products/${product.slug}/${t.slug}`} className="group rounded-xl border-2 border-border/30 bg-gradient-to-r from-muted/50 to-muted/30 p-4 transition-all duration-300 hover:border-primary/40 hover:from-primary/10 hover:to-third/10 hover:shadow-lg hover:-translate-y-1">
                    <div className="mb-2 text-base font-semibold transition-colors group-hover:text-primary">{t.name}</div>
                    <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:text-primary transition-colors duration-300">
                      Mehr erfahren <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
                {product.topics!.length > 6 && (
                  <div className="py-2 text-center text-sm text-muted-foreground font-medium">
                    +{product.topics!.length - 6} weitere Module
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-3">
          {isMasterclass ? (
            <Button asChild variant="outline" className="w-full rounded-xl border-primary/30 font-semibold text-primary hover:border-primary/50 hover:bg-primary/5">
              <Link href={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
                Alle Module entdecken <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild className="w-full rounded-xl bg-gradient-to-r from-primary via-primary to-secondary font-semibold text-primary-foreground shadow-md transition-all hover:from-secondary hover:to-primary">
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

/**
 * ---------------------------------------------------------------------------
 * 6) CATEGORY BLOCK with split layout (text left, cards right)
 * ---------------------------------------------------------------------------
 */
function CategoryBlock({ cat }: { cat: ProductCategory }) {
  const Icon = cat.icon

  return (
    <Section className="">
      {/* Header */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={fadeUp} className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 px-4 py-3">
            <Icon className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{cat.category}</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">{cat.description}</p>
        </motion.div>

        {/* Row: sticky helper left, product cards right */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Sticky helper */}
          <motion.div variants={fadeUp} className="md:col-span-4">
            <div className="sticky top-24">
              <Card className="bg-[#EDEDED]">
                <CardHeader>
                  <CardTitle className="text-xl">Welches Angebot passt zu Ihnen?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Sie sind nicht sicher, welches das richtige Angebot ist? Nehmen Sie gerne unsere kostenlose Beratung in Anspruch.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#kontakt">Kostenlose Erstberatung</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div variants={fadeUp} className="md:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
              {cat.items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

/**
 * ---------------------------------------------------------------------------
 * 7) PAGE
 * ---------------------------------------------------------------------------
 */
export default function ProductsOverviewPage() {
  const featured = useMemo(() => {
    const list: { name: string; slug: string; category: string }[] = []
    for (const c of productsByCategory) {
      for (const i of c.items) if (i.highlight) list.push({ name: i.name, slug: i.slug, category: c.category })
    }
    return list
  }, [])

  return (
    <>
      <Navigation />

      {/* Background decorations */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/10 to-third/5">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23970200' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/4 h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-primary/15 to-transparent blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 h-96 w-96 animate-blob rounded-full bg-gradient-to-l from-accent/15 to-transparent blur-3xl" />
          <div className="absolute left-1/3 top-3/4 h-80 w-80 animate-blob rounded-full bg-gradient-to-r from-third/15 to-transparent blur-3xl" />
        </div>

  <div className="container relative z-10 mx-auto px-6 py-6 md:px-8 md:py-10">
          {/* HERO */}
          <Section className="pb-8 text-center">
            <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Pill>Inklusions-Lösungen für Unternehmen</Pill>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
                <span className="bg-gradient-to-r from-primary via-third to-accent bg-clip-text text-transparent">
                  Produkte & Programme
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                Von kompakten Workshops bis zu strategischer Transformation – modular, messbar, wirksam.
              </p>
              <div className="mx-auto mt-6 max-w-5xl">
                <FeaturedStrip items={featured} />
              </div>
            </motion.div>
          </Section>

          {/* CATEGORY NAVIGATION */}
          <Section className="pb-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Direkt zu Ihren Lösungen</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link href="/products/trainings">
                  <Button size="lg" className="w-full rounded-xl bg-gradient-to-r from-primary via-secondary to-third px-6 py-4 font-semibold text-primary-foreground shadow-xl transition-all hover:from-primary/90 hover:via-secondary/90 hover:to-third/90 hover:scale-105">
                    <Award className="mr-3 h-6 w-6" />
                    Training & Qualifizierung
                  </Button>
                </Link>
                <Link href="/products/services">
                  <Button size="lg" variant="outline" className="w-full rounded-xl border-2 border-primary/50 px-6 py-4 font-semibold hover:border-primary/70 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                    <Target className="mr-3 h-6 w-6" />
                    Services & Beratung
                  </Button>
                </Link>
                <Link href="/products/bewusstsein">
                  <Button size="lg" variant="outline" className="w-full rounded-xl border-2 border-secondary/50 px-6 py-4 font-semibold hover:border-secondary/70 hover:bg-secondary/10 transition-all duration-300 hover:scale-105">
                    <Users className="mr-3 h-6 w-6" />
                    Bewusstsein & Sensibilisierung
                  </Button>
                </Link>
              </div>
              <p className="text-lg text-foreground/70 mt-8 mb-4">Oder entdecken Sie alle Angebote auf einen Blick:</p>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-2 border-border/50 px-10 py-4 font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                <Link href="#alle-angebote" className="flex items-center gap-3 text-lg">
                  Alle Angebote ansehen <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </Section>


          {/* CATEGORIES – split layout per category */}
          <LayoutGroup>
            <div id="alle-angebote">
              {productsByCategory.map((c) => (
                <CategoryBlock key={c.category} cat={c} />)
              )}
            </div>
          </LayoutGroup>

          {/* CTA STRIPE */}
          <Section className="mt-8 border-t border-border/30 text-center" id="kontakt">
            <div className="mx-auto mb-8 max-w-3xl">
              <h3 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
                <span className="bg-gradient-to-r from-primary via-third to-accent bg-clip-text text-transparent">
                  Bereit für den nächsten Schritt?
                </span>
              </h3>
              <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
                Lassen Sie uns gemeinsam die passende Lösung für Ihre Inklusionsziele finden.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-primary via-secondary to-third px-10 py-4 font-semibold text-primary-foreground shadow-xl transition-all hover:from-primary/90 hover:via-secondary/90 hover:to-third/90 hover:scale-105">
                <Link href="/team" className="flex items-center gap-3 text-lg">
                  <Users className="h-6 w-6" /> Kostenlose Beratung
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-2 border-border/50 px-10 py-4 font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                <Link href="/" className="flex items-center gap-3 text-lg">
                  Zurück zur Startseite <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Section>
        </div>
      </div>
    </>
  )
}
