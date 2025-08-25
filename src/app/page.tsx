// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation";
import MentorCarousel from "@/components/shared/MentorCarousel";
import { ArrowRight, Users, Target, Award, Heart, CheckCircle, Star, Play, MessageCircle, Video, MapPin, Link2, BarChart2, GraduationCap, Building2, Calculator, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const handlungsfelder = [
    { title: "Wirtschaftlichkeit", desc: "ROI & Fördermittel strategisch nutzen", link: "/products/services" },
    { title: "Strategie", desc: "Nachhaltige Inklusionsstrategien entwickeln", link: "/products/trainings" },
    { title: "Offenlegung", desc: "Transparente Kommunikation & Reporting", link: "/products/services" },
    { title: "Recruiting", desc: "Inklusives Personalmanagement implementieren", link: "/products/services" },
    { title: "Sensibilisierung", desc: "Bewusstsein & Kultur nachhaltig verändern", link: "/products/bewusstsein", mentorProduct: true },
    { title: "Zertifizierung", desc: "Fortschritte sichtbar machen & validieren", link: "/products/services" }
  ];

  const productCategories = [
    {
      title: "Training",
      subtitle: "Inklusionsführerschein, Masterclasses",
      description: "Strukturiertes Lernen für nachhaltige Veränderung",
      icon: GraduationCap,
      color: "from-primary to-secondary",
      link: "/products/trainings"
    },
    {
      title: "Bewusstsein",
      subtitle: "DAW, InkluStories",
      description: "\"Lass uns reden\", Spotlight Moments, InkluTalks",
      icon: Users,
      color: "from-secondary to-accent",
      withMentors: true,
      link: "/products/bewusstsein"
    },
    {
      title: "Services", 
      subtitle: "Peer-Mentoring, JobSync, InkluScore, Zertifikate",
      description: "Datengestützte Lösungen für messbare Erfolge",
      icon: Link2,
      color: "from-accent to-primary",
      withMentors: true,
      link: "/products/services"
    }
  ];

  const caseHighlights = [
    { 
      number: "16", 
      label: "Mitarbeitende mit Behinderung", 
      description: "in 18 Monaten erfolgreich eingestellt",
      color: "from-primary to-secondary"
    },
    { 
      number: "95%", 
      label: "Teilnehmendenzufriedenheit", 
      description: "bei unseren Sensibilisierungsformaten",
      color: "from-secondary to-accent"
    },
    { 
      number: "150+", 
      label: "Partnerunternehmen", 
      description: "vertrauen bereits auf unsere Expertise",
      color: "from-accent to-third"
    }
  ];

  const values = [
    {
      title: "Inklusion & Teilhabe",
      description: "Echte Teilhabe entsteht durch authentische Begegnungen und gegenseitiges Verständnis.",
      icon: Heart,
      color: "from-primary to-secondary",
      quote: "\"Inklusion bedeutet für mich, dass jeder Mensch seine Stärken einbringen kann.\" - Maria Schmidt"
    },
    {
      title: "Ehrliche Kommunikation", 
      description: "Offener Dialog und transparente Kommunikation schaffen Vertrauen und nachhaltige Veränderung.",
      icon: MessageCircle,
      color: "from-secondary to-third",
      quote: "\"Nur durch ehrliche Gespräche können wir Vorurteile abbauen.\" - Thomas Weber"
    },
    {
      title: "Wirkung & Integrität",
      description: "Messbare Erfolge und nachhaltige Veränderungen stehen im Zentrum unserer Arbeit.",
      icon: Target,
      color: "from-third to-accent",
      quote: "\"Wirkung zeigt sich in Zahlen und echten Veränderungen im Arbeitsalltag.\" - Sarah Klein"
    }
  ];

  const companyLogos = [
    // Placeholder für Logos - können später durch echte Logos ersetzt werden
    "Microsoft", "SAP", "Volkswagen", "Siemens", "Bosch", "Deutsche Bank"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* 1) HERO / Above the Fold */}
      <section className="relative overflow-hidden h-[90vh] flex items-center justify-center">
        {/* Background Image - Mentoren im echten Austausch */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/mentor-mentee.jpg')",
            filter: 'brightness(0.55) contrast(0.95)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-6xl mx-auto"
          >
            {/* Claim (Eyebrow) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl font-medium text-third/90 mb-6"
            >
              „Behinderung ist Teil der Lösung."" – InkluSolutions
            </motion.div>
            
            {/* H1 */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Inklusion braucht Menschen mit Erfahrung –</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                und verändert so Unternehmenskultur
              </span>
            </h1>
          
            
            {/* H2 */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Impulsgeber:innen auf Augenhöhe - unsere Mentor:innen.
            </h2>
            
            {/* Subline (2) */}
            <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-5xl mx-auto mb-10">
              Gemeinsam schaffen wir Wissen, fördern Bewusstsein und verankern Inklusion in Strukturen und Prozessen – 
              mit Trainings, Dialog-Formaten und Services.
            </p>
            
            {/* CTAs (3 Buttons) */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/products/trainings">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[3px] border-primary text-black bg-white hover:text-black rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Training entdecken
                  <GraduationCap className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/products/bewusstsein">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[3px] border-secondary text-black hover:text-black bg-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Bewusstsein stärken
                  <Users className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/products/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[3px] border-accent text-black bg-white hover:text-black rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Services nutzen
                  <Link2 className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3) SOCIAL PROOF (150+ Unternehmen) */}
      <section className="py-20 bg-gradient-to-r from-muted/30 via-background to-muted/30 relative">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CE8600' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10V0H20v10L10 0H0v10l10 10L0 30v10h10l10-10 10 10h10V30L30 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#d06119] to-primary bg-clip-text text-transparent">
                Vertrauen von über 150 Unternehmen
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Unsere Wurzeln: Inklupreneur. Unsere Gegenwart: InkluSolutions – 
              Partner der führenden Wirtschaft & Forschung. Individuell und maßgeschneidert.
            </p>
          </motion.div>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-center mb-12"
          >
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center p-6 hover:opacity-100 transition-all duration-300 opacity-60 hover:scale-110 group">
                <div className="text-lg font-semibold text-foreground/70 group-hover:text-primary transition-colors duration-300">{company}</div>
              </div>
            ))}
          </motion.div>

          {/* Mini-Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center">
              <blockquote className="text-lg italic text-foreground/85 mb-4">
                "InkluSolutions hat uns geholfen, Inklusion von der Theorie in die Praxis zu bringen."
              </blockquote>
              <cite className="text-sm font-semibold text-primary">– HR Director, Tech-Startup</cite>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center">
              <blockquote className="text-lg italic text-foreground/85 mb-4">
                "Die Mentor:innen haben unsere Sichtweise nachhaltig verändert."
              </blockquote>
              <cite className="text-sm font-semibold text-primary">– Personalleitung, Konzern</cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4) ANGEBOTE / PRODUKTE-BAUKASTEN (Teaser) */}
      <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url('/bg-texture-subtle.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                Unsere Angebote – nah und ganzheitlich
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link href={category.link}>
                  <div className="h-full p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white/90 cursor-pointer">
                    {/*{category.withMentors && (
                      <div className="absolute top-6 right-6 bg-accent text-black text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                        Mit Mentor:innen
                      </div>
                    )}*/}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                    <h4 className="text-lg font-semibold mb-4 text-primary/80">{category.subtitle}</h4>
                    <p className="text-base text-foreground/80 leading-relaxed">{category.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/products">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[3px] border-secondary text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Alle Angebote entdecken
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>      

      {/* 9) FOOTER */}
      <footer className="bg-foreground/5 border-t border-border/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-2">
              <img 
                src="/InkluSolutionsLogo.png" 
                alt="InkluSolutions Logo" 
                className="h-12 mx-auto md:mx-0 mb-4"
              />
              <p className="text-foreground/70 leading-relaxed">
                "Behinderung ist Teil der Lösung" – InkluSolutions
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/products" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                  Leistungen
                </Link>
                <Link href="/team" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                  Team
                </Link>
                <Link href="/historie" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                  Historie
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                  Datenschutz
                </Link>
                <a href="/datenschutz/contact" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
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