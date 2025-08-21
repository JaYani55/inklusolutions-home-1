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
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80">
      <Sparkles className="h-3.5 w-3.5" />
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
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-2 md:px-0">
        {items.map((it) => (
          <Link key={`${it.category}-${it.slug}`} href={`/products/${it.slug}`} className="snap-start">
            <span className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-gradient-to-r from-muted/60 to-card/60 px-4 py-2 text-sm font-medium shadow-sm transition-all hover:border-primary/50 hover:from-primary/10 hover:to-accent/10">
              <Star className="h-4 w-4 text-primary" />
              {it.name}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
      <Card className={`relative h-full overflow-hidden bg-[#EDEDED] shadow-lg transition-all duration-500 ${
        product.highlight ? 'ring-2 ring-primary/20 from-primary/5 to-accent/5' : ''
      }`}>
        {product.highlight && (
          <div className="absolute right-4 top-4 z-10">
            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg">
              <Star className="h-3 w-3 fill-current" /> Empfohlen
            </div>
          </div>
        )}

        <CardHeader className="px-6 pb-3 pt-6">
          <CardTitle className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
            {product.name}
          </CardTitle>
          {product.description && (
            <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="px-6 pb-2">
          {isMasterclass && (
            <div className="mt-4 space-y-3">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" /> Verfügbare Module
              </div>
              <div className="grid max-h-80 gap-3 overflow-y-auto pr-1">
                {product.topics!.slice(0, 6).map((t) => (
                  <Link key={t.id} href={`/products/${product.slug}/${t.slug}`} className="group rounded-lg border border-border/30 bg-gradient-to-r from-muted/40 to-muted/20 p-3 transition-colors hover:border-primary/30 hover:from-primary/5 hover:to-accent/5">
                    <div className="mb-1 text-sm font-semibold transition-colors group-hover:text-primary">{t.name}</div>
                    <p className="line-clamp-2 text-xs text-muted-foreground">{t.description}</p>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent">
                      Mehr erfahren <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
                {product.topics!.length > 6 && (
                  <div className="py-1 text-center text-xs text-muted-foreground">
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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/4 h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 h-96 w-96 animate-blob rounded-full bg-gradient-to-l from-accent/10 to-transparent blur-3xl" />
          <div className="absolute left-1/3 top-3/4 h-80 w-80 animate-blob rounded-full bg-gradient-to-r from-secondary/10 to-transparent blur-3xl" />
        </div>

  <div className="container relative z-10 mx-auto px-6 py-6 md:px-8 md:py-10">
          {/* HERO */}
          <Section className="pb-6 text-center">
            <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Pill>Inklusions-Lösungen für Unternehmen</Pill>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Produkte & Programme
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Von kompakten Workshops bis zu strategischer Transformation – modular, messbar, wirksam.
              </p>
              <div className="mx-auto mt-4 max-w-4xl">
                <FeaturedStrip items={featured} />
              </div>
            </motion.div>
          </Section>


          {/* CATEGORIES – split layout per category */}
          <LayoutGroup>
            {productsByCategory.map((c) => (
              <CategoryBlock key={c.category} cat={c} />)
            )}
          </LayoutGroup>

          {/* CTA STRIPE */}
          <Section className="mt-6 border-t border-border/30 text-center" id="kontakt">
            <div className="mx-auto mb-6 max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">Bereit für den nächsten Schritt?</h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                Lassen Sie uns gemeinsam die passende Lösung für Ihre Inklusionsziele finden.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:from-secondary hover:to-primary">
                <Link href="/team" className="flex items-center gap-2">
                  <Users className="h-5 w-5" /> Kostenlose Beratung
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-border/50 px-8 py-3 font-semibold">
                <Link href="/">Zurück zur Startseite <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Section>
        </div>
      </div>
    </>
  )
}
