// src/app/products/trainings/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/ui/Navigation'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Award, 
  CheckCircle, 
  Lightbulb,
  Target,
  GraduationCap,
  ArrowDown 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    description: 'Kurze, praxisnahe Sessions zu Spezialthemen wie barrierefreie Kommunikation, Fördermittel oder Bewerbungssimulation.',
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
                  <span className="font-semibold text-primary">Training</span>
                </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Vom Wollen</span>
                    <br />
                    <span className="text-foreground">ins Können</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    Mit unseren Trainings wird Inklusion lebendig.
                  </p>
                  
                  {/* Scroll down Button */} 
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
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                    <Image
                      src="/workshop-setting.jpg"
                      alt="Professional training session with diverse participants"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
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
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                    <Image
                      src="/inclusive-leadership-course.jpg"
                      alt="Inclusive workplace collaboration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
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
                      2-tägiger Präsenz-Workshop mit Fokus auf Haltung, Begegnung & Reflexion – 
                      ideal für alle, die Verantwortung für Inklusion im Arbeitsalltag tragen und dafür praxisnahe Impulse suchen.
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
                  <p className="mb-8 text-2xl text-foreground/80">In kurzen, praxisnahen Sessions wird vermittelt, wie Mitarbeitende mit Behinderung gewonnen, Bewerbungsprozesse inklusiv gestaltet und Mitarbeitende langfristig gebunden werden können. Ergänzend fließen Fachwissen, praktische Tipps und individuelle Beratung ein. Mentor:innen mit eigener Behinderung teilen ihre Erfahrungen und geben wertvolles Feedback zur Umsetzung.</p>
                </div>

                  <div className="space-y-8">
                    {/* Obere Reihe */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Inklusive Stellenausschreibungen - Grün */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-emerald-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-emerald-500">
                        <Image src="/Stellenausschreibung.png" alt="Stellenausschreibung" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Inklusive Stellenausschreibung & Jobcarving</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wie sprechen ihre Stellenausschreibungen besser potenzielle Mitarbeitende mit Behinderung an. Wie können Stellen angepasst werden.
                    </p>
                  </motion.div>

                  {/* Barrierefreiheit umsetzen - Blau */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-blue-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-blue-500">
                        <Image src="/Barrierefreiheit.png" alt="Barrierefreiheit" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Barrieren verstehen und abbauen</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wir zeigen Ihnen, wie Sie Barrieren – ob räumlich, visuell oder sozial - erkennen und gezielt verringern.
                    </p>
                  </motion.div>

                  {/* Barrierefreie Kommunikation online - Orange */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-orange-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-orange-500">
                        <Image src="/KommunikationOnline.png" alt="Kommunikation Online" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Inklusiver Webauftritt</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wie Webseiten und Landingpages inklusiv, zugänglich und für Menschen mit Behinderung attraktiv gestaltet werden.
                    </p>
                  </motion.div>

                  {/* Inklusives Onboarding - Lila */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-purple-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-purple-500">
                        <Image src="/Onboarding.png" alt="Inklusives Onboarding" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Inklusives Onboarding</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Was muss für ein erfolgreiches Onboarding bei Menschen mit Behinderungen berücksichtigt werden.
                    </p>
                  </motion.div>
                </div>

                {/* Untere Reihe */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Bewerbungssimulation mit Mentor:innen - Rosa */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-pink-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-pink-500">
                        <Image src="/Bewerbungssimulation.png" alt="Bewerbungssimulation" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Inklusive Bewerbungsgespräche</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Bewerbungsgespräche mit Menschen mit Behinderung trainieren – mit direktem Feedback und Aha-Momenten.
                    </p>
                  </motion.div>

                  {/* Deep Dives: Behinderungsarten - Rot */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-red-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-red-500">
                        <Image src="/DeepDive.png" alt="Deep Dives" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Behinderungsarten</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Von Autismus über Sehbehinderung bis chronische Schmerzen – wir teilen fundiertes Wissen und persönliche Perspektiven, um Behinderungen besser zu verstehen und inklusiver zu handeln.
                    </p>
                  </motion.div>

                  {/* Fördermittel-Optimierung - Gelb */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-yellow-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-yellow-500">
                        <Image src="/Foerdermittel.png" alt="Fördermittel" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Fördermittel</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                       Überblick über staatliche Fördermittel und die effektive Nutzung für die Inklusion.
                    </p>
                  </motion.div>

                  {/* Vernetzung & Anlaufstellen - Türkis */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="relative rounded-3xl p-6 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-[3px] border-teal-500"
                  >
                    <div className="mb-4">
                      <div className="p-2 bg-white absolute left-5 top-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm shadow-lg overflow-visible border-2 border-teal-500">
                        <Image src="/Vernetzung.png" alt="Vernetzung" width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                      <div className="h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Vernetzung & Anlaufstellen</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Die wichtigsten externen Kontakte, Förderakteure und Netzwerke, die bei der Inklusion eurer Unternehmen unterstützen können.
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
