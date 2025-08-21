// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation";
import { ArrowRight, Users, Target, Award, Heart, CheckCircle, Star, Play, MessageCircle, Video, MapPin, Link2, BarChart2, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const mentorQuotes = [
    {
      name: "Maria Schmidt",
      image: "/Mentor1.jpg",
      quote: "Echte Inklusion entsteht durch authentische Begegnungen, nicht durch Theorie.",
      role: "Peer-Mentorin"
    },
    {
      name: "Thomas Weber",
      image: "/Mentor2.jpg", 
      quote: "Jeder Mensch hat Potenzial – manchmal braucht es nur den richtigen Rahmen.",
      role: "Peer-Mentor"
    },
    {
      name: "Sarah Klein",
      image: "/Mentor3.jpg",
      quote: "Verständnis wächst durch gemeinsame Erfahrungen, nicht durch Vorurteile.",
      role: "Peer-Mentorin"
    }
  ];

  const whyUs = [
    {
      icon: Heart,
      title: "Mentor:innen",
      description: "Echte Erfahrung & authentische Begegnungen auf Augenhöhe",
      color: "from-primary to-secondary"
    },
    {
      icon: BarChart2,
      title: "InkluScore",
      description: "Messbarkeit & Steuerung für nachhaltigen Fortschritt",
      color: "from-secondary to-accent"
    },
    {
      icon: Target,
      title: "ROI & Förderung",
      description: "Wirtschaftlichkeit & verfügbare Fördermittel optimal nutzen",
      color: "from-accent to-primary"
    }
  ];

  const handlungsfelder = [
    { title: "Wirtschaftlichkeit", desc: "ROI & Fördermittel strategisch nutzen" },
    { title: "Strategie", desc: "Nachhaltige Inklusionsstrategien entwickeln" },
    { title: "Offenlegung", desc: "Transparente Kommunikation & Reporting" },
    { title: "Recruiting", desc: "Inklusives Personalmanagement implementieren" },
    { title: "Sensibilisierung", desc: "Bewusstsein & Kultur nachhaltig verändern" },
    { title: "Zertifizierung", desc: "Fortschritte sichtbar machen & validieren" }
  ];

  const productCategories = [
    {
      title: "Training",
      products: ["Inklusionsführerschein", "Masterclasses"],
      icon: GraduationCap,
      color: "from-primary to-secondary"
    },
    {
      title: "Bewusstsein",
      products: ["DAW", "Lass uns reden", "Spotlight Moments", "InkluTalks"],
      icon: Users,
      color: "from-secondary to-accent",
      withMentors: true
    },
    {
      title: "Services", 
      products: ["Peer-Mentoring", "JobSync", "InkluScore", "Zertifikate"],
      icon: Link2,
      color: "from-accent to-primary",
      withMentors: true
    }
  ];

  const stats = [
    { number: "150+", label: "Unternehmen vertrauen uns" },
    { number: "10K+", label: "Menschen sensibilisiert" },
    { number: "16", label: "Einstellungen in 18 Monaten" },
    { number: "94K€", label: "Kosten eines unbesetzten Pflichtplatzes" }
  ];

  const companyLogos = [
    // Placeholder für Logos - können später durch echte Logos ersetzt werden
    "Microsoft", "SAP", "Volkswagen", "Siemens", "Bosch", "Deutsche Bank"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[85vh] flex items-center justify-center">
        {/* Background Image - Mentoren im echten Austausch */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter" 
          style={{
            backgroundImage: "url('/mentor-mentee.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 max-w-5xl mx-auto"
          >
            <div className="space-y-6">
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Inklusion beginnt mit Menschen –</span>
                <br />
                <span className="bg-gradient-to-r from-third to-primary bg-clip-text text-transparent">
                  und wird mit den richtigen Lösungen wirksam
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Unsere Mentor:innen teilen ihre Erfahrung, unser InkluScore macht Fortschritt sichtbar, 
                und unsere Programme zahlen sich für Unternehmen aus.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-foreground hover:text-third-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Mentor:innen kennenlernen
                <Users className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent text-foreground hover:text-accent-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                InkluScore testen
                <BarChart2 className="ml-3 w-6 h-6" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white group-hover:text-third transition-colors duration-300">{stat.number}</div>
                  <div className="text-lg text-white/80 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentor:innen Spotlight Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23970200' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary via-secondary to-third bg-clip-text text-transparent">
                Unsere Mentor:innen machen den Unterschied
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Echte Erfahrung statt Theorie – Begegnung auf Augenhöhe verändert Kultur.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {mentorQuotes.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-3xl p-8 hover:shadow-2xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-24 h-24 rounded-full object-cover border-3 border-primary/30 group-hover:border-third transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-third/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <blockquote className="text-lg text-foreground/85 italic mb-6 leading-relaxed">
                      "{mentor.quote}"
                    </blockquote>
                    <div>
                      <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{mentor.name}</div>
                      <div className="text-lg text-foreground/70 mt-1">{mentor.role}</div>
                    </div>
                  </div>
                </div>
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
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-foreground hover:text-third-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Mentor:innen kennenlernen
                <Users className="ml-3 w-6 h-6" />
              </Button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
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
              <span className="bg-gradient-to-r from-secondary via-third to-accent bg-clip-text text-transparent">
                Vertrauen von über 150 Unternehmen
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
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
            className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-center"
          >
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center p-6 hover:opacity-100 transition-all duration-300 opacity-60 hover:scale-110 group">
                <div className="text-lg font-semibold text-foreground/70 group-hover:text-primary transition-colors duration-300">{company}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why InkluSolutions Section */}
      <section className="py-24 bg-gradient-to-bl from-background via-muted/10 to-background relative overflow-hidden">
        {/* Wave pattern background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url('/bg-waves-light.svg')`,
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
              <span className="bg-gradient-to-r  from-primary to-third  bg-clip-text text-transparent">
                Warum InkluSolutions?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Drei Säulen, die Inklusion in Ihrem Unternehmen nachhaltig wirksam machen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-10 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/40 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center hover:bg-white/90">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Handlungsfelder Section */}
      <section className="py-24 bg-gradient-to-tr from-muted/40 via-background to-third/5 relative">
        {/* Abstract lines background */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url('/bg-abstract-lines.svg')`,
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r  from-primary to-third  bg-clip-text text-transparent">
                Inklusion braucht Struktur –<br />wir bringen Klarheit in Ihre Handlungsfelder
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {handlungsfelder.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:border-secondary/50 transition-all duration-400 hover:shadow-xl hover:-translate-y-2 hover:bg-white/80">
                  <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">{field.title}</h4>
                  <p className="text-lg text-foreground/80 leading-relaxed">{field.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services and Training Section - Side by Side */}
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
              <span className="bg-gradient-to-r  from-primary to-third  bg-clip-text text-transparent">
                Unsere Angebote – modular, praxisnah, maßgeschneidert
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/80 max-w-5xl mx-auto leading-relaxed">
              Von der ersten Sensibilisierung bis zur nachhaltigen Implementierung – 
              wir begleiten Sie auf Ihrem Weg zur inklusiven Organisation.
            </p>
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
                <div className="h-full p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white/90">
                  {category.withMentors && (
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-primary via-secondary to-third text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                      Mit Mentor:innen
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex} className="text-lg text-foreground/80 flex items-center group-hover:text-foreground transition-colors duration-300">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 group-hover:text-third transition-colors duration-300" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
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
                className="border-2 border-secondary text-foreground hover:text-third-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Alle Angebote entdecken
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>      

      {/* Wirkung & Cases Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-accent/10 relative">
        {/* Dot pattern background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2344b8c9' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
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
              <span className="bg-gradient-to-r  from-primary to-third  bg-clip-text text-transparent">
                Was wir bereits bewegt haben
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-3xl p-10 text-center hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-4 group-hover:text-third transition-colors duration-300">16</div>
              <div className="text-xl font-semibold mb-4 text-foreground">Einstellungen</div>
              <div className="text-lg text-foreground/80 leading-relaxed">Mitarbeitende mit Behinderung in 18 Monaten eingestellt</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-3xl p-10 text-center hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-4 group-hover:text-third transition-colors duration-300">95%</div>
              <div className="text-xl font-semibold mb-4 text-foreground">Zufriedenheit</div>
              <div className="text-lg text-foreground/80 leading-relaxed">Teilnehmende bewerten unsere Programme positiv</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-3xl p-10 text-center md:col-span-2 lg:col-span-1 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-4 group-hover:text-third transition-colors duration-300">150+</div>
              <div className="text-xl font-semibold mb-4 text-foreground">Unternehmen</div>
              <div className="text-lg text-foreground/80 leading-relaxed">Haben bereits auf unsere Expertise vertraut</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-third/10 to-accent/10 border-2 border-primary/30 rounded-3xl p-10 text-center max-w-5xl mx-auto hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">Wirtschaftlicher Nutzen</h3>
            <p className="text-xl lg:text-2xl text-foreground/85 leading-relaxed">
              Ein Pflichtplatz unbesetzt kostet <span className="font-bold text-primary text-2xl lg:text-3xl">94.080 €</span> in 11 Jahren – 
              wir helfen, diese Potenziale zu nutzen und Fördermittel optimal einzusetzen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Werte & Haltung Section */}
      <section className="py-24 bg-gradient-to-tl from-background via-secondary/5 to-background relative overflow-hidden">
        {/* Geometric pattern background */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFAF2E' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
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
              <span className="bg-gradient-to-r  from-primary to-third  bg-clip-text text-transparent">
                Unsere Haltung – unser Fundament
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">Inklusion & Teilhabe</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Echte Teilhabe entsteht durch authentische Begegnungen und gegenseitiges Verständnis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-third flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-secondary transition-colors duration-300">Ehrliche Kommunikation</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Offener Dialog und transparente Kommunikation schaffen Vertrauen und nachhaltige Veränderung.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-third to-accent flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-third transition-colors duration-300">Wirkung & Integrität</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Messbare Erfolge und nachhaltige Veränderungen stehen im Zentrum unserer Arbeit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-third/10 relative">
        {/* Wave background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url('/bg-waves-light.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-third bg-clip-text text-transparent">
                Ihr nächster Schritt zu gelebter Inklusion
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-12 leading-relaxed">
              Drei Wege – ein Ziel: Inklusion wirksam machen.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-foreground hover:text-third-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Mentor:innen kennenlernen
                <Users className="ml-3 w-6 h-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent text-foreground hover:text-accent-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                InkluScore testen
                <BarChart2 className="ml-3 w-6 h-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-third text-foreground hover:text-third-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Fördermittel & ROI kalkulieren
                <Target className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}