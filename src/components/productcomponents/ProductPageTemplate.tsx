// src/components/product/ProductPageTemplate.tsx
'use client';

import React from 'react';
import { ProductData } from '@/types/product';
import TrainerComponent from '@/components/shared/TrainerComponent';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProductPageTemplateProps {
  product: ProductData;
}

/**
 * Updated ProductPageTemplate that works with ProductData interface
 * and includes the TrainerComponent when trainer-module is enabled
 */
const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ product }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 full-width">
              {product.hero.title}
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              {product.hero.description}
            </p>
            
            {product.hero.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {product.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-m text-foreground/60 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {product.features && product.features.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            {product.features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 ${index > 0 ? 'mt-20' : ''}`}>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {feature.image && (
                  <div className="flex-1">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cards Section */}
      {product.cards && product.cards.length > 0 && (
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.cards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Card key={index} className="h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="mb-6">
                        <div className={`w-16 h-16 rounded-full bg-${card.color}/10 flex items-center justify-center mb-4`}>
                          <IconComponent className={`w-8 h-8 text-${card.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-foreground/60 mb-4">
                          {card.description}
                        </p>
                      </div>
                      <ul className="space-y-2 flex-1">
                        {card.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Trainer Component - Only show if trainer-module is enabled */}
      {product['trainer-module'] && (
        <TrainerComponent productName={product.name} />
      )}

      {/* FAQ Section */}
      {product.faq && product.faq.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Häufig gestellte Fragen
              </h2>
              <div className="space-y-6">
                {product.faq.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-foreground/80">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {product.cta && (
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {product.cta.title}
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                {product.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  {product.cta.primaryButton}
                </Button>
                {product.cta.secondaryButton && (
                  <Button variant="outline" className="px-8 py-3">
                    {product.cta.secondaryButton}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPageTemplate;