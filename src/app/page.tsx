// src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/Navigation";
import TrainingSection from "@/components/landingpage/TrainingSection";
import { ArrowRight, Sparkles, Users, Target, Award, Heart, CheckCircle, Star, Play, MessageCircle, Video, MapPin, Link2, BarChart2, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      icon: Users,
      title: "Peer-Mentoring",
      description: "Begleitung durch Menschen mit Behinderung – authentisch und praxisnah.",
      color: "from-primary to-secondary"
    },
    {
      icon: Link2,
      title: "JobSync",
      description: "Jobdistribution, Matching & Begleitung für inklusives Recruiting.",
      color: "from-secondary to-accent"
    },
    {
      icon: BarChart2,
      title: "Inklu-Score",
      description: "Messung inklusiver Kultur – sichtbar und vergleichbar.",
      color: "from-accent to-primary"
    },
    {
      icon: Award,
      title: "Zertifikate",
      description: "Nachweise für Fortschritt & Sichtbarkeit in der Inklusion.",
      color: "from-primary/80 to-secondary/80"
    }
  ];

  const awareness = [
    { icon: Users, title: "DAW Workshops", desc: "4h Sensibilisierung mit erlebbaren Perspektivwechseln" },
    { icon: Play, title: "Video Content", desc: "Videopaket für Intranet & Events" },
    { icon: Video, title: "Spotlight Moments", desc: "Individuelle Videoproduktion mit Menschen & Mentoren" },
    { icon: MessageCircle, title: "Inklu-Talks", desc: "60 Min. Austauschformat für Teams & Führung" }
  ];

  const stats = [
    { number: "500+", label: "Unternehmen erreicht" },
    { number: "10K+", label: "Menschen sensibilisiert" },
    { number: "95%", label: "Zufriedenheitsrate" },
    { number: "3 Jahre", label: "Erfahrung" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter" 
          style={{
            backgroundImage: "url('/team-collaboration.jpg')",
          }}
        />
        {/* stronger veil: semi-transparent dark layer + soft gradient for warmth */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Inklusion neu gedacht</span>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Inklu-Solutions
                </span>
                <br />
                <span className="text-white">für eine inklusive Zukunft</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Wir schaffen echtes Verständnis für Inklusion durch praxisnahe Workshops, 
                authentische Begegnungen und nachhaltige Veränderung in Unternehmen.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Jetzt starten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-black hover:bg-white/10 rounded-full px-8 py-4 text-lg backdrop-blur-sm"
              >
                Mehr erfahren
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awareness Section - Now directly under hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Bewusstsein schaffen
                </span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Echte Inklusion beginnt mit Verständnis. Unsere Formate schaffen 
                authentische Begegnungen und nachhaltige Perspektivwechsel.
              </p>
              
              <div className="space-y-6">
                {awareness.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/workshop-setting.jpg"
                alt="Workshop Setting"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services and Training Section - Side by Side */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Services & Trainings
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Von der ersten Sensibilisierung bis zur nachhaltigen Implementierung – 
              wir begleiten Sie auf Ihrem Weg zur inklusiven Organisation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Unsere Services
                </span>
              </h3>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Training Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Unsere Trainings
                </span>
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <TrainingSection />
              </motion.div>
            </div>
          </div>
        </div>
      </section>      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Lassen Sie uns gemeinsam Inklusion in Ihrem Unternehmen verwirklichen. 
              Kontaktieren Sie uns für ein unverbindliches Gespräch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Kostenloses Gespräch buchen
              </Button>
              <Link href="/products">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-foreground hover:bg-primary/5 rounded-full px-8 py-4 text-lg"
                >
                  Alle Produkte ansehen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}