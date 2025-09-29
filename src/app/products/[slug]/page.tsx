// app/products/[slug]/page.tsx
// Dies ist deine dynamische Produktseite für den Next.js App Router.
// Sie wird unter der Route /products/:slug erreichbar sein.

'use client'; // Diese Direktive ist notwendig, da Hooks und Client-side JavaScript verwendet werden

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Eye, CheckCircle, Phone
} from "lucide-react";
// TestimonialSlider temporarily unused in product slug
// import TestimonialSlider from "@/components/shared/TestimonialSlider";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/ui/Navigation";
// MentorCarousel temporarily unused in product slug
// import MentorCarousel from "@/components/shared/MentorCarousel";
import { useParams } from 'next/navigation';
import { ProductData } from '@/types/product';
import { ProductService } from '@/data/productService';
import CTASection from '@/components/shared/CTASection';
import Footer from '@/components/shared/Footer';
import TrainerComponent from '@/components/shared/TrainerComponent';

const ProductSlugPage = () => {
  const params = useParams();
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    const slug = params?.slug as string;
    if (slug) {
      const product = ProductService.getProductBySlug(slug);
      setProductData(product);
    }
  }, [params]);

  if (!productData) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Produkt nicht gefunden</h1>
            <p className="text-lg text-foreground/70 mb-8">Das angeforderte Produkt existiert nicht.</p>
            <Button
              onClick={() => window.history.back()}
              className="rounded-full bg-white text-foreground border-[3px] border-accent hover:text-secondary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Zurück
            </Button>
          </div>
        </div>
      </>
    );
  }

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-background to-warm-bg">
                    <img
                        src={productData.hero.image}
                        alt={`${productData.name} Hintergrund`}
                        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
                    />
                    {/* Subtiler Textur-Hintergrund */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-10"
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
                    
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-full max-w-xl space-y-8 text-center lg:text-left"
                            >
                                <div className="space-y-6">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words pb-2">
                                        <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                                            {productData.hero.title}
                                        </span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-light">
                                        {productData.hero.description}
                                    </p>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                                    {productData.cta.secondaryButton && (
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="rounded-full border-[3px] border-accent text-foreground bg-white hover:text-secondary-foreground text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            <Eye className="mr-2 h-5 w-5" />
                                            {productData.cta.secondaryButton}
                                        </Button>
                                    )}
                                </div>
                                
                                {productData.hero.stats && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                                        {productData.hero.stats.map((stat, index) => (
                                            <div key={index} className="text-center">
                                                <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                                                <div className="text-sm text-foreground/60 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="w-full lg:w-1/2 flex justify-end mb-8 lg:mb-0"
                            >
                                <img
                                    src={productData.hero.image}
                                    alt={`${productData.name} Hero`}
                                    className="rounded-3xl w-full h-[260px] sm:h-[340px] md:h-[400px] object-cover border border-primary/30 backdrop-blur-sm shadow-lg"
                                    style={{ objectPosition: 'right' }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section - Text Only */}
                <section className="py-24 bg-gradient-to-br from-warm-bg to-background relative overflow-visible">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 z-0" />
                    
                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 z-10">
                        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                        <div className="absolute top-60 right-1/4 w-1 h-1 bg-third rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
                    </div>

                    <div className="container mx-auto px-6 relative z-20 space-y-20">
                        {productData.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={`max-w-4xl mx-auto text-center space-y-8 ${index % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}`}
                            >
                                {/* Feature Number Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 ${index % 2 === 1 ? 'lg:ml-auto lg:mr-0' : ''}`}
                                >
                                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </motion.div>

                                {/* Feature Title */}
                                <motion.h3 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-4xl lg:text-5xl font-normal leading-relaxed mb-6 pb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                    style={{ WebkitFontSmoothing: 'antialiased', fontWeight: '400' }}
                                >
                                    {feature.title}
                                </motion.h3>
                                
                                {/* Feature Description */}
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-xl leading-relaxed font-light text-foreground/80 max-w-3xl mx-auto"
                                >
                                    {feature.description}
                                </motion.p>

                                {/* Decorative separator line */}
                                {index < productData.features.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        viewport={{ once: true }}
                                        className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-16"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Cards Section - Only if cards exist */}
                {productData.cards && (
                    <section className="py-20 relative bg-gradient-to-br from-background to-warm-bg">
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
                                        {productData.name}
                                    </span>
                                </h2>
                                <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-light">
                                    Tiefer Einblick in Inhalte, Zielgruppen und den Ablauf.
                                </p>
                            </motion.div>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {productData.cards.map((card, index) => {
                                    const IconComponent = card.icon;
                                    
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <Card className="bg-white/80 border border-white/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 group overflow-hidden relative shadow-lg h-full">
                                                <CardContent className="p-8 relative h-full flex flex-col">
                                                    {/* Icon with gradient background */}
                                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                                        <IconComponent className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                                                    </div>
                                                    
                                                    {/* Title and Description */}
                                                    <div className="mb-6">
                                                        <h3 className="text-2xl font-medium text-foreground mb-3">
                                                            {card.title}
                                                        </h3>
                                                        <p className="text-foreground/60 text-sm font-medium uppercase tracking-wider">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* Items List */}
                                                    <ul className="space-y-3 text-foreground/70 leading-relaxed mb-8 flex-grow">
                                                        {card.items.map((item, itemIndex) => (
                                                            <li key={itemIndex} className="flex items-start gap-3">
                                                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Hover Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Mentor Carousel und testimonial Section */}
                {/* <section className="py-20 bg-gradient-to-br from-warm-bg to-background relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-primary/3 z-0" />
                    <div className="container mx-auto px-6 relative z-10">
                        <MentorCarousel theme="warm" />
                    </div>
                </section>


                <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background to-warm-bg">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-shimmer" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-5xl font-bold mb-6 pb-2">
                            <span className="bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                                Stimmen aus der Praxis
                            </span>
                        </h2>
                        <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
                            Das sagen Unternehmen und Teilnehmende über unsere Arbeit –
                            <span className="font-semibold text-primary"> direkt, ehrlich, wertvoll.</span>
                        </p>
                        <div className="relative">
                            <TestimonialSlider theme="warm" />
                            <div className="absolute -inset-x-10 -inset-y-10 pointer-events-none rounded-3xl z-0 opacity-10"
                                style={{
                                    background: 'radial-gradient(ellipse at center, var(--theme-secondary) 0%, transparent 70%), radial-gradient(ellipse at center, var(--theme-accent) 0%, transparent 70%)',
                                    mixBlendMode: 'screen',
                                }}
                            />
                        </div>
                        <div className="mt-16 flex justify-center items-center gap-4">
                            <CheckCircle className="h-6 w-6 text-secondary" />
                            <span className="text-foreground/80 text-lg font-mono">Nachgewiesener Erfolg.</span>
                            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* Trainer Component - Only show if trainer-module is enabled */}
                {productData['trainer-module'] && (
                    <TrainerComponent productName={productData.name} />
                )}

                {/* FAQ Section */}
                <section className="py-20 bg-gradient-to-br from-warm-bg to-background">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-12 leading-relaxed pb-2 bg-gradient-to-r from-primary to-[#d06119] bg-clip-text text-transparent">
                            Häufig gestellte Fragen (FAQ)
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-6">
                            {productData.faq.map((item, index) => (
                                <div key={index} className="bg-background/50 border border-primary/20 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-3">{item.question}</h3>
                                    <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> 

                {/* CTA Section */}
                <CTASection 
                  title={productData.cta.title}
                  description={productData.cta.description}
                  subtitle=""
                  primaryButtonText={productData.cta.secondaryButton || "Alle Angebote entdecken"}
                  primaryButtonHref="/products"
                  secondaryButtonText="Kostenlose Beratung"
                  showSecondaryButton={true}
                />
            </div>
            <Footer />
        </>
    );
};

export default ProductSlugPage;