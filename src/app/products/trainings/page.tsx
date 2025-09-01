// src/app/products/trainings/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Users, 
  Award, 
  CheckCircle, 
  Lightbulb,
  Target,
  MessageSquare,
  GraduationCap,
  TrendingUp,
  ArrowDown 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import CTASection from '@/components/shared/CTASection'
import Footer from '@/components/shared/Footer'

const trainingsProducts = [
  {
    id: 'training-1',
    slug: 'inklusionsführerschein',
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

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/5 to-accent/10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full ">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Unsere Mission</span>
                </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vom Wollen</span>
                    <br />
                    <span className="text-foreground">ins Können</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    Mit unseren Trainings wird Inklusion lebendig.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-[3px] border-primary text-foreground bg-white hover:text-secondary-foreground rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => {
                        const inklusionsführerscheinSection = document.getElementById('inklusionsführerschein');
                        inklusionsführerscheinSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Mehr erfahren
                      <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="/workshop-setting.jpg"
                      alt="Professional training session with diverse participants"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inklusionsführerschein Section */}
        <section id="inklusionsführerschein" className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src="/inclusive-leadership-course.jpg"
                      alt="Inclusive workplace collaboration"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-xl">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-primary font-semibold">
                      <GraduationCap className="h-5 w-5" />
                      Basis-Workshop
                    </div>
                    <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      2-tägig
                    </div>
                    <h2 className="text-4xl font-bold">Inklusionsführerschein</h2>
                    <p className="text-2xl text-muted-foreground">
                      1-tägiger Präsenz-Workshop mit Fokus auf Haltung, Begegnung & Reflexion – 
                      ideal für DEI, SBV, IB. Ziel: Sicherheit im Umgang mit Behinderung & Transfer in den Arbeitsalltag.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Ideal für alle, die Verantwortung für Inklusion im Arbeitsalltag tragen und dafür praxisnahe Impulse suchen.
                    </p>
                  </div>
                  
                  <div className="text-lg space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Praxisnahe Übungen und Simulationen</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Direkte Begegnung mit Expert:innen</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Zertifikat für nachgewiesene Kompetenz</span>
                    </div>
                     <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Ziel: Sicherheit im Umgang mit Behinderung & Transfer in den Arbeitsalltag.</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    size="lg"
                    className="border-[3px] border-primary text-foreground bg-white hover:text-secondary-foreground rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Link href={`/products/${trainingsProducts[0].slug}`} className="group flex items-center gap-2">
                      Details ansehen
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Masterclass Section - Full Width Gray Background */}
        <section className="w-full bg-gradient-to-br from-gray-50 to-slate-100 py-20">
          <div className="container mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                  <h2 className="text-foreground text-4xl font-bold mb-4">{trainingsProducts[1].name}</h2>
                  <p className="mb-8 text-2xl text-foreground/80">Kurze, praxisnahe Sessions zu Spezialthemen wie barrierefreie Kommunikation, Fördermittel oder Bewerbungssimulation.</p>
                </div>

                  <div className="space-y-8">
                    {/* Obere Reihe */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Inklusive Stellenausschreibungen - Sanftes Grün */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-primary"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-primary">
                        <img src="/Stellenausschreibung.png" alt="Stellenausschreibung" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Inklusive Stellenausschreibungen</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wie Stellenanzeigen, Anforderungsprofile und Recruitingprozesse barriereärmer und einladender gestaltet werden.
                    </p>
                  </motion.div>

                  {/* Barrierefreiheit umsetzen - Sanftes Blau */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-secondary"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-secondary">
                        <img src="/Barrierefreiheit.png" alt="Barrierefreiheit" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Barrierefreiheit umsetzen</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wie Barrieren im Arbeitsumfeld erkannt, priorisiert und pragmatisch abgebaut werden können.
                    </p>
                  </motion.div>

                  {/* Barrierefreie Kommunikation online - Sanftes Orange */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-third"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-third">
                        <img src="/KommunikationOnline.png" alt="Kommunikation Online" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Barrierefreie Kommunikation online</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wie Webseiten und Landingpages inklusiv, zugänglich und für Menschen mit Behinderung attraktiv gestaltet werden.
                    </p>
                  </motion.div>

                  {/* Inklusives Onboarding - Sanftes Lila */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-accent"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-accent">
                        <img src="/Onboarding.png" alt="Inklusives Onboarding" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Inklusives Onboarding</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wie ein inklusives Onboarding gestaltet wird – von Begrüßung bis Prozessanpassung.
                    </p>
                  </motion.div>
                </div>

                {/* Untere Reihe */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Bewerbungssimulation mit Mentor:innen - Sanftes Cyan */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-third"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-third">
                        <img src="/Bewerbungssimulation.png" alt="Bewerbungssimulation" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Bewerbungssimulation mit Mentor:innen</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Bewerbungsgespräche mit Menschen mit Behinderung trainieren – mit ehrlichem Feedback und Aha-Momenten.
                    </p>
                  </motion.div>

                  {/* Deep Dives: Behinderungsarten - Sanftes Grau */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-accent"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-accent">
                        <img src="/DeepDive.png" alt="Deep Dives" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Deep Dives: Behinderungsarten</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fachlich und erfahrungsbasiert – z. B. Autismus, psychische Erkrankungen oder chronische Schmerzen besser einordnen.
                    </p>
                  </motion.div>

                  {/* Fördermittel-Optimierung - Sanftes Rosa */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-primary"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-primary">
                        <img src="/Foerdermittel.png" alt="Fördermittel" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Fördermittel-Optimierung</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Überblick über relevante Leistungen und Strategien, wie Unternehmen Fördermittel effektiv für Inklusion nutzen können.
                    </p>
                  </motion.div>

                  {/* Vernetzung & Anlaufstellen - Sanftes Lime */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-secondary"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-secondary">
                        <img src="/Vernetzung.png" alt="Vernetzung" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Vernetzung & Anlaufstellen</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Die wichtigsten externen Kontakte, Förderakteure und Netzwerke für Inklusionsverantwortliche im Überblick.
                    </p>
                  </motion.div>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Full Width Background */}
        <CTASection 
          title="Bereit für den nächsten Schritt?"
          description="Entdecken Sie alle unsere Leistungen im Detail oder vereinbaren Sie ein kostenloses Beratungsgespräch."
          subtitle=""
          primaryButtonText="Mehr Erfahren"
          primaryButtonHref="/products"
          secondaryButtonText="Kostenlose Beratung"
          showSecondaryButton={true}
          className="w-full bg-gradient-to-r from-primary/10 to-accent/10 py-20 container mx-auto px-6 md:px-8"
        />
      </div>
      <Footer />
    </>
  )
}
