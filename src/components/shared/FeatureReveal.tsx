// app/components/shared/FeatureReveal.tsx
'use client'; // Notwendig, da Framer Motion Hooks verwendet

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureRevealProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean; // Optional: Wenn true, wird Bild und Text vertauscht
  customTheme?: 'warm'; // Jetzt nur noch 'warm' möglich
}

const FeatureReveal: React.FC<FeatureRevealProps> = ({
  title,
  text,
  image,
  reverse,
  customTheme = 'warm', // Standard-Theme ist jetzt 'warm'
}) => {
  // Die Theme-Klasse ist jetzt immer 'theme-warm'.
  // Da die generischen Variablen im :root in globals.css die "warmen" Farben enthalten,
  // muss man hier keine spezielle Klassen oder Theme-Umschaltung mehr vornehmen.
  // Die Tailwind-Klassen nutzen automatisch die --theme- Variablen, die in globale CSS definiert sind.

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className={`
          grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-visible
          ${reverse ? 'lg:grid-flow-col-dense' : ''}
        `}
    >
      {/* Hintergrund-Overlay innerhalb der FeatureReveal-Box für subtile Effekte */}
      {/* Nutzt CSS-Variable --theme-bg für die Hintergrundfarbe, mit Transparenz und Blur-Effekt */}
      <div className="absolute inset-0 bg-[var(--theme-bg)]/10 backdrop-blur-sm z-0 rounded-3xl" />
      
      {/* Bereich für das Bild */}
      <motion.div
        className={`relative z-10 ${reverse ? 'lg:col-start-2' : ''}`}
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Hauptbild */}
        {/* Der Rahmen nutzt --theme-border für dynamische Farbe */}
        <img
          src={image}
          alt={title}
          className="rounded-3xl w-full h-[300px] object-cover shadow-lg border border-[var(--theme-border)] transform hover:scale-105 transition-transform duration-500"
        />
        {/* Dekorative Elemente um das Bild, gesteuert durch das Theme (nutzen --theme- Farben und Schatten) */}
      </motion.div>
      {/* Bereich für den Textinhalt */}
      <motion.div
        className="space-y-6 z-10"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* TITEL: Verwendet nun die generischen Theme-Farben für den Gradient-Text */}
        <h3 
          className="text-4xl lg:text-5xl font-normal leading-relaxed mb-4 pb-2 bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent"
          style={{ WebkitFontSmoothing: 'antialiased', fontWeight: '400' }}
        >
          {title}
        </h3>
        
        {/* Paragraphentext: Nutzt --theme-text für dynamische Farbe */}
  <p className="mt-0 text-xl leading-relaxed font-light text-[var(--theme-text)]/80">
          {text}
        </p>
        
        {/* "Mehr erfahren" Button: Nutzt --theme-primary und --theme-secondary für Farben */}
        <button className="inline-flex items-center transition-colors duration-300 font-mono uppercase tracking-wider group text-[var(--theme-primary)] hover:text-[var(--theme-secondary)]">
          Mehr erfahren
          {/* SVG-Icon für den Button, dessen Farbe sich mit dem Button-Text ändert */}
          <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* SVG-Stroke Farbe muss direkt gesetzt werden auf var(--theme-primary) */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" stroke="currentColor"/>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FeatureReveal;