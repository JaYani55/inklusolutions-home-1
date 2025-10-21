// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation";
// MentorCarousel temporarily unused on home page
// import MentorCarousel from "@/components/shared/MentorCarousel";
import {
  Lightbulb, 
  Settings,
  ArrowRight, Users, Award, CheckCircle, Video, GraduationCap, BarChart3, MessageCircle, 
  Zap} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import ContentRenderer from "@/components/shared/ContentRenderer";

export default function HomePage() {
  // handlungsfelder (temporarily unused)
  // const handlungsfelder = [ ... ]

  const productCategories = [
    {
      title: "Trainings",
      icon: GraduationCap,
      color: "from-primary to-primary",
      link: "/products/trainings",
      products: ["Inklusionsführerschein", "Masterclasses"]
    },
    {
      title: "Awareness",
      icon: Lightbulb,
      color: "from-secondary to-secondary",
      withMentors: true,
      products: ["Awareness Workshop", "inkluStories", "InkluTalks"],
      link: "/products/awareness"
    },
    {
      title: "Service & Beratung", 
      icon: Settings,
      color: "from-accent to-accent",
      withMentors: true,
      link: "/products/services",
      products: ["peer-mentoring", "jobSync", "InkluScore", "Zertifikate"]
    }
  ];

  // map product keys (normalized) to Lucide icon components that fit the product semantics
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const productIconMap: Record<string, any> = {
    inklusionsführerschein: GraduationCap,
    masterclasses: GraduationCap,
    daw: Lightbulb,
    inklustories: Video,
    "lass uns reden": Video,
    "spotlight moments": Video,
    inklutalks: MessageCircle,
    "peer-mentoring": Users,
    jobsync: Zap,
    inkluscore: BarChart3,
    zertifikate: Award,
    default: CheckCircle,
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const formatLabel = (s: string) =>
    s
      .replace(/-/g, " ")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // caseHighlights & values currently unused - kept for future content

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
<section className="relative overflow-hidden">
  {/* Background Image - nur auf größeren Screens sichtbar */}
  <div 
    className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
       backgroundImage: "url('/header.jpg')",
       filter: 'brightness(0.85) contrast(0.9) blur(3px)'
    }}
  />
  
  {/* Subtle dark overlay */}
  <div className="hidden sm:block absolute inset-0 bg-black/25" />
  
  {/* Content Container - responsive height ohne negative translation */}
  <div className="relative z-10 flex flex-col justify-center 
                  min-h-[500px] sm:min-h-[65vh] md:min-h-[70vh] 
                  px-6 sm:px-8 lg:px-24 py-16 sm:py-20 
                  mobile-bg sm:bg-transparent">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto text-center"
    >
      {/* Text Content mit original Farben */}
      <div className="space-y-8 mb-12">
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
        
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-2xl"
          style={{
            textShadow: '3px 3px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.6)'
          }}
        >
          Inklusion beginnt mit Menschen und wird mit den richtigen Lösungen wirksam.
        </h1>
        
        <h2 className="text-xl lg:text-2xl font-semibold text-white drop-shadow-2xl"
          style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
          }}
        >
          Wir leben, was wir beraten: 55% unseres Teams sind schwerbehindert.
        </h2>
      </div>

      {/* Sektion: Unsere Leistungen entfalten Wirkung */}
      <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 max-w mx-auto">
            {/* Box 1 */}
            <Link href="/products/trainings" 
            className="block flex-grow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/85 hover:bg-white/100 p-6 rounded-2xl shadow-lg border-4 border-primary text-center flex flex-col items-center h-full"
              >
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4 flex-shrink-0" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground flex-grow-0">
                  Kompetenz aufbauen
                </h3>
                <p className="text-lg text-foreground/80 flex-grow">
                  Durch praxisnahe Trainings
                </p>
              </motion.div>
            </Link>

            {/* Box 2 */}
            <Link 
              href="/products/awareness" 
              className="block flex-grow">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/85 hover:bg-white/100 p-6 rounded-2xl shadow-lg border-4 border-secondary text-center flex flex-col items-center h-full"
              >
                <Lightbulb className="w-12 h-12 text-third mx-auto mb-4 flex-shrink-0" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground flex-grow-0">Kultur stärken</h3>
                <p className="text-lg text-foreground/80 flex-grow">
                  Mit Formaten für Awareness und Perspektivwechsel
                </p>
              </motion.div>
            </Link>

            {/* Box 3 */}
            <Link 
              href="/products/services" 
              className="block flex-grow">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/85 hover:bg-white/100 p-6 rounded-2xl shadow-lg border-4 border-accent text-center flex flex-col items-center h-full"
              >
                <Settings className="w-12 h-12 text-accent mx-auto mb-4 flex-shrink-0"/>
                <h3 className="text-2xl font-semibold mb-3 text-foreground flex-grow-0">
                  Strukturen verankern
                </h3>
                <p className="text-lg text-foreground/80 flex-grow">
                  Über Services und Tools zur Umsetzung
                </p>
              </motion.div>
            </Link>
          </div>
      </div>
      
      
      {/* Einfache Mobile-Version */}
      <div className="sm:hidden mt-8">
        <Link href="/products">
          <Button size="lg" className="white px-8 py-6 text-lg">
            Unsere Angebote entdecken
          </Button>
        </Link>
      </div>
      
      <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-white drop-shadow-xl pt-10"
        style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
        }}
      >
        Gemeinsam mit <strong>Menschen mit Behinderung</strong> als <strong>Mentor:innen</strong> schaffen wir Wissen, fördern Bewusstsein und verankern Inklusion in Strukturen und Prozessen.
      </p>
      
      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 pt-6 border-t border-white/30"
      >
        <p className="text-sm lg:text-base text-white/80 max-w-2xl mx-auto text-center leading-relaxed"
          style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.6)'
          }}
        >
          Willkommen auf der neuen Inklu-Solutions Website. Die Website ist derzeit im Aufbau und wird kontinuierlich angepasst und erweitert.
        </p>
      </motion.div>
    </motion.div>
    
    {/* Dekorative Elemente */}
    <div className="hidden sm:block absolute top-1/4 left-8 w-24 h-24 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse" />
    <div className="hidden sm:block absolute bottom-1/3 right-8 w-32 h-32 bg-gradient-to-r from-red-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
</section>


{/* Video Section */}
<section className="relative overflow-hidden py-20 bg-gradient-to-r from-muted/30 via-background to-muted/30 border">
  <div className="container mx-auto px-0">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12 px-6"
    >
      <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-bold">
        Erleben Sie, wie wir Inklusion in die Praxis umsetzen
      </p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full px-6 lg:px-12"
    >
      <ContentRenderer 
        content={[
          {
            id: 'v-1',
            type: 'video',
            src: 'https://player.vimeo.com/video/1126325516?h=6fb514b6ff',
            provider: 'vimeo',
            caption: 'InkluSolutions – Gemeinsam Inklusion gestalten',
          }
        ]}
      />
    </motion.div>
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
              <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                Vertrauen von über 150 Unternehmen
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Unsere Wurzeln: Inklupreneur <br></br>
              Unsere Gegenwart: InkluSolutions<br></br>
              Partner der führenden Wirtschaft & Forschung <br></br>
              Individuell und maßgeschneidert<br></br>
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
                &ldquo;Ich habe tolle Menschen kennengelernt und viel von Euch mitgenommen. Es ging nicht
nur um Nachteilsausgleich oder Einhaltung der Vorgaben zur Beschäftigung von
Menschen mit Behinderungen sondern immer auch um bewußte Teilhabe, Vielfalt und
kreative Anpassung und Etablierung einer inklusiven Kultur. Anders war auch, dass die
Talente, die ihr vermittelt habt, wirklich zu den Stellen passten und motiviert und
engagiert waren.&rdquo;
              </blockquote>
              <cite className="text-sm font-semibold text-primary">– Meike Plötner, Inklusionsmanagerin,
Concentrix Global Services GmbH</cite>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center">
              <blockquote className="text-lg italic text-foreground/85 mb-4">
                &ldquo;Die Teilnahme am Programm kann ich nur jedem ans Herz legen, egal wie weit sich im
Unternehmen bereits mit dem Thema Inklusion am Arbeitsplatz beschäftigt wurde.
Durch viel Interaktion und viel Raum für Fragen und Austausch konnten wir uns dem
Thema so nähern, dass wir in der Praxis nun gut aufgestellt sind, um auch Menschen mit
Behinderung einen angenehmen Arbeitsplatz gestalten zu können.&rdquo;
              </blockquote>
              <cite className="text-sm font-semibold text-primary">– Carolin Warlich, HR-Managerin,
42DIGITAL GmbH</cite>
            </div>
          </motion.div>
        </div>
</section>

{/* Karten */}
<section className="py-16">
  <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto px-6">
    {productCategories.map((category, index) => (
      <motion.article
        key={index}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        className="group relative h-full" // h-full hinzugefügt
      >
        <Link
          href={category.link}
          className="block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(var(--accent))]/40 rounded-2xl"
          aria-label={`${category.title} erkunden`}
        >
          {/* Gradient-Border-Karte */}
          <div className="h-full rounded-2xl p-[1px] bg-gradient-to-br from-white/40 via-white/60 to-white/30 group-hover:from-[hsl(var(--primary))]/30 group-hover:via-white/70 group-hover:to-[hsl(var(--accent))]/30 transition-all duration-300">
            <div className="h-full rounded-2xl p-9 bg-white/80 backdrop-blur-md border border-white/60 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col">
              
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}
              >
                <category.icon className="w-10 h-10 text-white" aria-hidden />
              </div>
              
              {/* Titel */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors flex-shrink-0">
                {category.title}
              </h3>
              
              {/* Produkt-Liste - nimmt verfügbaren Platz ein */}
              {Array.isArray(category.products) && category.products.length > 0 && (
                <div className="text-lg md:text-xl text-foreground/75 mt-6 flex-grow">
                  <ul className="space-y-4">
                    {category.products.map((product, pIndex) => {
                      const key = String(product).toLowerCase().trim();
                      const Icon = productIconMap[key] || productIconMap.default;
                      return (
                        <li key={pIndex} className="flex items-start gap-4">
                          <span className="mt-0.5 text-primary flex-shrink-0">
                            <Icon className="w-6 h-6" aria-hidden />
                          </span>
                          <span className="leading-snug">{formatLabel(String(product))}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              
              {/* „Mehr"-Hint - bleibt am unteren Rand */}
              <div className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-foreground/80 group-hover:text-primary flex-shrink-0">
                Mehr erfahren
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    ))}
  </div>
</section>

{/* 
<section className="relative overflow-hidden py-20 bg-gradient-to-r from-muted/30 via-background to-muted/30">
  <div className="w-full">
{/* CTA Buttons - nur auf größeren Screens mit vollem Design 
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden sm:block justify-center max-w-4xl mx-auto"
      >
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:flex-1 min-w-0">
              <Link href="/products/trainings" className="block">
                <Button
                  size="lg"
                  className="w-full text-white bg-gradient-to-r from-primary to-primary border-transparent rounded-full px-10 py-7 text-xl font-semibold transition-all duration-300 hover:brightness-110"
                >
                  Trainings
                  <GraduationCap className="ml-4 w-7 h-7" />
                </Button>
              </Link>
            </div>
            <div className="md:flex-1 min-w-0">
              <Link href="/products/awareness" className="block">
                <Button
                  size="lg"
                  className="w-full text-white bg-gradient-to-r from-secondary to-secondary border-transparent rounded-full px-10 py-7 text-xl font-semibold transition-all duration-300 hover:brightness-110"
                >
                  Awareness
                  <Lightbulb className="ml-4 w-7 h-7" />
                </Button>
              </Link>
            </div>
            <div className="md:flex-1 min-w-0">
              <Link href="/products/services" className="block">
                <Button
                  size="lg"
                  className="w-full text-white bg-gradient-to-r from-accent to-accent border-transparent rounded-full px-10 py-7 text-xl font-semibold transition-all duration-300 hover:brightness-110"
                >
                  Services & Beratung
                  <Settings className="ml-4 w-7 h-7" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
  </div>
</section>
*/}

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
        className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
          Unsere Angebote – nah und ganzheitlich
        </span>
      </h2>
      <p className="mt-4 text-lg text-foreground/80">
        Wir verbinden Wissen, Haltung und messbare Lösungen für gelebte Inklusion.
      </p>
    </motion.header>

    {/* CTA-Bar */}
    <CTASection />
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
      <Footer />
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

   const sidePaddingVar = '--side-padding' as const;
   return (
     <div className="relative px-[var(--side-padding)]" ref={containerRef} style={{ [sidePaddingVar]: `${sidePadding}px` } as React.CSSProperties}>
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
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className={`object-contain ${logo.alt === 'Scout24' ? 'h-20' : 'h-16'}`}
                loading="lazy"
                sizes="(min-width: 1280px) 200px, (min-width: 768px) 160px, 120px"
              />
            </div>
          ))}
         </div>
       </div>

       <button
         aria-label="Vorheriges"
         onClick={prev}
         className="absolute -left-6 top-1/2 -translate-y-1/2 p-1 bg-transparent hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
       >
  <Image src="/arrows.png" alt="Pfeil links" width={32} height={32} className="w-8 h-8 rotate-180" />
       </button>

       <button
         aria-label="Nächstes"
         onClick={next}
         className="absolute -right-6 top-1/2 -translate-y-1/2 p-1 bg-transparent hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
       >
  <Image src="/arrows.png" alt="Pfeil rechts" width={32} height={32} className="w-8 h-8" />
       </button>
     </div>
   );
}