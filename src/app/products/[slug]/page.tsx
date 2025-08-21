// app/products/[slug]/page.tsx
// Dies ist deine dynamische Produktseite für den Next.js App Router.
// Sie wird unter der Route /products/:slug erreichbar sein.

'use client'; // Diese Direktive ist notwendig, da Hooks und Client-side JavaScript verwendet werden

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket, Eye, CheckCircle, ArrowUpRight, Sparkles
} from "lucide-react";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import FeatureReveal from "@/components/shared/FeatureReveal";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/ui/Navigation";
import MentorCarousel from "@/components/shared/MentorCarousel";
import { useParams } from 'next/navigation';
import { ProductData } from '@/types/product';
import { ProductService } from '@/data/productService';

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
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
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
                <section className="relative pt-20 pb-16 overflow-hidden bg-background">
                    <img
                        src={productData.hero.image}
                        alt={`${productData.name} Hintergrund`}
                        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 z-10" />
                    <div className="absolute top-0 left-0 w-full h-full opacity-30 z-20">
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
                                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            {productData.hero.title}
                                        </span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-light">
                                        {productData.hero.description}
                                    </p>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button
                                        size="lg"
                                        className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary font-bold text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                                    >
                                        <Rocket className="mr-3 h-6 w-6" />
                                        <span className="text-primary-foreground">
                                            {productData.cta.primaryButton}
                                        </span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="rounded-full border-accent text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4 font-mono uppercase tracking-wider transition-all duration-300"
                                    >
                                        <Eye className="mr-2 h-5 w-5" />
                                        {productData.cta.secondaryButton}
                                    </Button>
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

                {/* Features Section */}
                <section className="py-24 bg-background relative overflow-visible">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-0" />
                    <div className="container mx-auto px-6 relative z-10 space-y-24">
                        {productData.features.map((feature, index) => (
                            <FeatureReveal
                                key={index}
                                title={feature.title}
                                text={feature.description}
                                image={feature.image}
                                reverse={feature.reverse}
                                customTheme="warm"
                            />
                        ))}
                    </div>
                </section>

                {/* Cards Section - Only if cards exist */}
                {productData.cards && (
                    <section className="py-20 relative bg-background">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
                        <div className="container mx-auto px-6 relative">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-bold mb-6 pb-2">
                                    <span className="text-foreground">DIE SÄULEN VON</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                        {productData.name.toUpperCase()}
                                    </span>
                                </h2>
                                <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-light">
                                    Tiefer Einblick in Inhalte, Zielgruppen und den Ablauf.
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {productData.cards.map((card, index) => {
                                    const IconComponent = card.icon;
                                    const colorClass = card.color === 'primary' ? 'primary' : card.color === 'secondary' ? 'secondary' : 'accent';
                                    
                                    return (
                                        <Card key={index} className={`bg-background/50 border border-${colorClass}/30 backdrop-blur-sm hover:border-${colorClass}/60 transition-all duration-300 group overflow-hidden relative`}>
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <CardContent className="p-8 relative">
                                                <div className={`w-16 h-16 bg-gradient-to-br from-${colorClass}/20 to-${colorClass}/10 rounded-2xl flex items-center justify-center mb-6`}>
                                                    <IconComponent className={`h-8 w-8 text-${colorClass}`} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-foreground mb-4 font-mono uppercase tracking-wider">
                                                    {card.title}
                                                </h3>
                                                <ul className="list-disc list-inside text-foreground/70 leading-relaxed mb-6">
                                                    {card.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                                <div className={`flex items-center text-${colorClass} group-hover:text-secondary transition-colors duration-300`}>
                                                    <span className="font-mono text-sm uppercase tracking-wider">{card.description}</span>
                                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Mentor Carousel Section */}
                <section className="py-20 bg-background relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 z-0" />
                    <div className="container mx-auto px-6 relative z-10">
                        <MentorCarousel theme="warm" />
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 relative overflow-hidden bg-background">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-shimmer" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-5xl font-bold mb-6 pb-2">
                            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-mono uppercase tracking-wider">
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

                {/* FAQ Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-12 leading-relaxed pb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                <section className="py-20 relative overflow-hidden bg-background">
                    <img
                        src="/bg-texture-subtle.jpg"
                        alt="CTA Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-5xl font-bold mb-8 pb-2">
                                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
                                    {productData.cta.title}
                                </span>
                            </h2>
                            <p className="text-xl mb-12 text-foreground/80 font-light">
                                {productData.cta.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary font-bold text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                                >
                                    <Rocket className="mr-3 h-6 w-6" />
                                    <span className="text-primary-foreground">
                                        {productData.cta.primaryButton}
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full border-accent text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4 font-mono uppercase tracking-wider transition-all duration-300"
                                >
                                    <Eye className="mr-2 h-5 w-5" />
                                    {productData.cta.secondaryButton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductSlugPage;