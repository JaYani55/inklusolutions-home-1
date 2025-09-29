"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Mail } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showSecondaryButton?: boolean;
  className?: string;
}

export default function CTASection({
  title = "Bereit für den nächsten Schritt?",
  description = "Entdecken Sie alle unsere Leistungen im Detail oder vereinbaren Sie ein kostenloses Beratungsgespräch.",
  subtitle = "Von Unsicherheit zu Sicherheit: Mit unseren Programmen Inklusion in Ihrem Unternehmen nachhaltig verankern",
  primaryButtonText = "Alle Angebote entdecken",
  primaryButtonHref = "/products",
  secondaryButtonText = "Kostenlose Beratung",
  secondaryButtonHref = "https://forms.office.com/e/4fpN4gHamc",
  showSecondaryButton = true,
  className = ""
}: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.3 }}
      viewport={{ once: true }}
      className={`mt-20 text-center ${className}`}
    >
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-lg max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-foreground/70 mb-6">
          {description}
        </p>
        {subtitle && (
          <p className="text-foreground/60 mb-8 text-lg italic">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <div className="w-full sm:flex-1 min-w-0">
            <Button asChild
              variant="outline" 
              size="lg"
              className="w-full sm:min-w-[12rem] border-[3px] border-primary text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href={primaryButtonHref} className="flex items-center justify-center gap-2">
                {primaryButtonText}
                <Star className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
          {showSecondaryButton && (
            <div className="w-full sm:flex-1 min-w-0">
              <Button asChild
                variant="outline" 
                size="lg"
                className="w-full sm:min-w-[12rem] border-[3px] border-accent text-foreground bg-white hover:text-secondary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href={secondaryButtonHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  {secondaryButtonText}
                  <Mail className="ml-3 w-6 h-6" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
