// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation";
import MentorCarousel from "@/components/shared/MentorCarousel";
import { 
  Lightbulb, 
  Settings,
  ChevronRight,
  UserCheck,
  BarChart3,
  Zap, ArrowRight, Users, Target, Award, Heart, CheckCircle, Star, Play, MessageCircle, Video, MapPin, Link2, BarChart2, GraduationCap, Building2, Calculator, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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
      icon: GraduationCap,
      color: "from-primary to-secondary",
      link: "/products/trainings",
      products: ["inklusionsfuehrerschein", "masterclasses"]
    },
    {
      title: "Bewusstsein",
      icon: Lightbulb,
      color: "from-secondary to-accent",
      withMentors: true,
      products: ["DAW", "inklustories", "Lass uns reden", "Spotlight Moments", "InkluTalks"],
      link: "/products/bewusstsein"
    },
    {
      title: "Services", 
      icon: Settings,
      color: "from-accent to-primary",
      withMentors: true,
      link: "/products/services",
      products: ["peer-mentoring", "jobsync", "InkluScore", "zertifikate"]
    }
  ];

  // map product keys (normalized) to Lucide icon components that fit the product semantics
  const productIconMap: Record<string, any> = {
    inklusionsfuehrerschein: GraduationCap,
    masterclasses: GraduationCap,
    daw: Lightbulb,
    inklustories: Star,
    "lass uns reden": Video,
    "spotlight moments": Video,
    inklutalks: MessageCircle,
    "peer-mentoring": Users,
    jobsync: Zap,
    inkluscore: BarChart3,
    zertifikate: Award,
    default: CheckCircle,
  };

  const formatLabel = (s: string) =>
    s
      .replace(/-/g, " ")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

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
    // echte Logos aus public/logos
    { src: '/logos/Cargill.png', alt: 'Cargill' },
    { src: '/logos/Idealo.png', alt: 'Idealo' },
    { src: '/logos/Kfzteile24.png', alt: 'Kfzteile24' },
    { src: '/logos/Nordsee.png', alt: 'Nordsee' },
    { src: '/logos/Radisson_Blu.png', alt: 'Radisson Blu' },
    { src: '/logos/Scout24.png', alt: 'Scout24' },
    { src: '/logos/UNIQLO.png', alt: 'UNIQLO' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* 1) HERO / Above the Fold - Elegant Text Solution */}
      <section className="relative overflow-hidden min-h-[90vh]">
        {/* Background Image - clear and prominent */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/header.jpg')",
            filter: 'brightness(0.75) contrast(1.1)'
          }}
        />
        
        {/* Very subtle dark overlay only for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center min-h-[90vh] pt-80 px-8 lg:px-24 py-20">
          {/* Main Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Text Content with elegant text shadows */}
            <div className="space-y-8 mb-12">
              {/* Claim (Eyebrow) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl font-medium mb-4 text-white drop-shadow-2xl"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
                }}
              >
              </motion.div>
              
              {/* H1 with strong text shadow */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-2xl"
                style={{
                  textShadow: '3px 3px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.6)'
                }}
              >
                Inklusion beginnt mit Menschen –
                <br />
                und wird mit den richtigen Lösungen wirksam
              </h1>
              
              {/* H2 */}
              <h2 className="text-xl lg:text-2xl font-semibold text-white drop-shadow-2xl"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
                }}
              >
                Impulsgeber:innen auf Augenhöhe - unsere Mentor:innen.
              </h2>
              

            </div>

            {/* Integrated CTA Buttons — each button has its own gradient segment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center max-w-4xl mx-auto"
            >
              <div className="w-full">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Button 1: primary -> third */}
                  <div className="md:flex-1 min-w-0">
                    <Link href="/products/trainings" className="block">
                      <Button
                        size="lg"
                        className="w-full text-white bg-gradient-to-r from-primary to-secondary border-transparent rounded-full px-10 py-7 text-xl font-semibold transition-all duration-300 hover:brightness-110"
                      >
                        Training entdecken
                        <GraduationCap className="ml-4 w-7 h-7" />
                      </Button>
                    </Link>
                  </div>

                  {/* Button 2: third -> secondary */}
                  <div className="md:flex-1 min-w-0">
                    <Link href="/products/bewusstsein" className="block">
                      <Button
                        size="lg"
                        className="w-full text-white bg-gradient-to-r from-secondary to-third border-transparent rounded-full px-10 py-7 text-xl font-semibold transition-all duration-300 hover:brightness-110"
                      >
                        Bewusstsein stärken
                        <Lightbulb className="ml-4 w-7 h-7" />
                      </Button>
                    </Link>
                  </div>

                  {/* Button 3: secondary -> accent */}
                  <div className="md:flex-1 min-w-0">
                    <Link href="/products/services" className="block">
                      <Button
                        size="lg"
                        className="w-full text-white bg-gradient-to-r from-third to-accent border-transparent rounded-full px-10 py-7 text-xl font-semibold transition-all duration-300 hover:brightness-110"
                      >
                        Services nutzen
                        <Settings className="ml-4 w-7 h-7" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
                          {/* Subline */}
              <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-white drop-shadow-xl pt-10"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
                }}
              >
                Gemeinsam schaffen wir Wissen, fördern Bewusstsein und verankern Inklusion in Strukturen und Prozessen – 
                mit Trainings, Dialog-Formaten und Services.
              </p>
          </motion.div>

          {/* Subtle decorative elements */}
          <div className="absolute top-1/4 left-8 w-24 h-24 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 right-8 w-32 h-32 bg-gradient-to-r from-red-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* 2) SOCIAL PROOF (150+ Unternehmen) */}
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

          {/* Logo Carousel (infinite loop, arrow controls) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full mb-12"
          >
            {/* Carousel state */}
            {/* showCount controls how many logos are visible at once */}
            {/* we duplicate the logos array to allow smooth looping */}
            <Carousel logos={companyLogos} showCount={4} sidePadding={56} />
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

{/* 3) ANGEBOTE / PRODUKTE-BAUKASTEN (Teaser) – Pro Version */}
<section
  id="angebote"
  aria-labelledby="angebote-heading"
  className="relative overflow-hidden py-24 bg-gray-200"
>
  {/* Subtle texture + zwei weiche „blob“-highlights */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 opacity-15"
    style={{
      backgroundImage: `url('/bg-texture-subtle.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
  <div aria-hidden className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[hsl(var(--accent))] blur-3xl opacity-20" />
  <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[hsl(var(--third))] blur-3xl opacity-20" />

  <div className="container mx-auto px-6 relative z-10">
    {/* Headline */}
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      className="text-center mb-16"
    >

      <h2
        id="angebote-heading"
        className="text-4xl lg:text-5xl font-bold mb-6">        <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
          Unsere Angebote – nah und ganzheitlich
        </span>
      </h2>
      <p className="mt-4 text-lg text-foreground/80">
        Wir verbinden Wissen, Haltung und messbare Lösungen für gelebte Inklusion.
      </p>
    </motion.header>

    {/* Karten */}
    <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
      {productCategories.map((category, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="group relative"
        >
          <Link
            href={category.link}
            className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(var(--accent))]/40 rounded-2xl"
            aria-label={`${category.title} erkunden`}
          >
            {/* Gradient-Border-Karte */}
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/40 via-white/60 to-white/30 group-hover:from-[hsl(var(--primary))]/30 group-hover:via-white/70 group-hover:to-[hsl(var(--accent))]/30 transition-all duration-300">
              <div className="h-full rounded-2xl p-9 bg-white/80 backdrop-blur-md border border-white/60 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-500">


                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <category.icon className="w-10 h-10 text-white" aria-hidden />
                </div>

                {/* Titel + Untertitel */}
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                {/* optionale Produkt-Liste außerhalb der Karte (nicht clickable) */}
                {Array.isArray(category.products) && category.products.length > 0 && (
                  <div className="text-lg md:text-xl text-foreground/75 mt-6">
                    <ul className="space-y-4">
                      {category.products.map((product, pIndex) => {
                        const key = String(product).toLowerCase().trim();
                        const Icon = productIconMap[key] || productIconMap.default;
                        return (
                          <li key={pIndex} className="flex items-start gap-4">
                            <span className="mt-0.5 text-primary">
                              <Icon className="w-6 h-6" aria-hidden />
                            </span>
                            <span className="leading-snug">{formatLabel(String(product))}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* „Mehr“-Hint */}
                <div className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-foreground/80 group-hover:text-primary">
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>

    {/* CTA-Bar */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-20 text-center"
    >
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          Bereit für den nächsten Schritt?
        </h3>
        <p className="text-foreground/70 mb-6">
          Entdecken Sie alle unsere Leistungen im Detail oder vereinbaren Sie ein kostenloses Beratungsgespräch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          
          <div className="w-full sm:flex-1 min-w-0">
            <Link href="/products">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:min-w-[12rem] border-[3px] border-primary text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Alle Angebote entdecken
                <Star className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
          <div className="w-full sm:flex-1 min-w-0">
            <Button asChild
              variant="outline" 
              size="lg"
              className="w-full sm:min-w-[12rem] border-[3px] border-accent text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a href="https://forms.office.com/e/4fpN4gHamc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Kostenlose Beratung
                <Phone className="ml-3 w-6 h-6" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </motion.div>
  </div>

  {/* reduced motion support */}
  <style jsx>{`
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `}</style>
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

// Simple inline carousel component
function Carousel({ logos, showCount = 5, sidePadding = 48 }: { logos: { src: string; alt: string }[]; showCount?: number; sidePadding?: number }) {
   const total = logos.length;
   const [containerWidth, setContainerWidth] = useState(0);
   const containerRef = useRef<HTMLDivElement | null>(null);
   // we use a currentIndex that starts in the middle copy to allow both-direction looping
   const middle = total; // start index offset
   const [currentIndex, setCurrentIndex] = useState(middle);
   const [isAnimating, setIsAnimating] = useState(true);
   const items = [...logos, ...logos, ...logos]; // triple for safe looping

   useEffect(() => {
     function measure() {
       if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
     }
     measure();
     window.addEventListener('resize', measure);
     return () => window.removeEventListener('resize', measure);
   }, []);

   const effectiveWidth = containerWidth ? Math.max(0, containerWidth - sidePadding * 2) : 0;
   const itemWidth = effectiveWidth ? effectiveWidth / showCount : 0;

   const go = (dir: number) => {
     setIsAnimating(true);
     setCurrentIndex((i) => i + dir);
   };

   const prev = () => go(-1);
   const next = () => go(1);

   // after each animation, if we left the central copy, jump back without animation
   useEffect(() => {
     if (!isAnimating) return;
     const t = window.setTimeout(() => {
       // normalize into middle range
       if (currentIndex >= total * 2) {
         setIsAnimating(false);
         setCurrentIndex((ci) => ci - total);
       } else if (currentIndex < total) {
         setIsAnimating(false);
         setCurrentIndex((ci) => ci + total);
       }
     }, 520);
     return () => window.clearTimeout(t);
   }, [currentIndex, isAnimating, total]);

   // autoplay
   useEffect(() => {
     const t = window.setInterval(() => {
       go(1);
     }, 4500);
     return () => window.clearInterval(t);
   }, [containerWidth]);

   const translateX = -currentIndex * itemWidth;

   return (
     <div className="relative px-[var(--side-padding)]" ref={containerRef} style={{ ['--side-padding' as any]: `${sidePadding}px` }}>
       <div className="overflow-hidden">
         <div
           className="flex items-center"
           style={{
             width: `${items.length * itemWidth}px`,
             transform: `translateX(${translateX}px)`,
             transition: isAnimating ? 'transform 480ms ease' : 'none',
           }}
         >
           {items.map((logo, idx) => (
             <div key={idx} style={{ width: `${itemWidth}px` }} className="flex-shrink-0 flex items-center justify-center p-2">
               <img src={logo.src} alt={logo.alt} className="h-16 object-contain" loading="lazy" />
             </div>
           ))}
         </div>
       </div>

       <button
         aria-label="Vorheriges"
         onClick={prev}
         className="absolute -left-6 top-1/2 -translate-y-1/2 p-1 bg-transparent hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
       >
         <img src="/arrows.png" alt="Pfeil links" className="w-8 h-8 rotate-180" />
       </button>

       <button
         aria-label="Nächstes"
         onClick={next}
         className="absolute -right-6 top-1/2 -translate-y-1/2 p-1 bg-transparent hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
       >
         <img src="/arrows.png" alt="Pfeil rechts" className="w-8 h-8" />
       </button>
     </div>
   );
}