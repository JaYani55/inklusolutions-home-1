// app/components/shared/MentorCarousel.tsx
"use client"; // Notwendig, da Hooks und Framer Motion verwendet werden

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Stelle sicher, dass du einen Button importierst, der zu deinem Design passt

// Beispielbilder im `public/` Ordner: public-Dateien dürfen nicht per import geladen werden.
// Verwende öffentliche Pfade (beginnend mit '/'), z.B. '/Mentor1.jpg'.
const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Lena Schmidt',
    image: '/Mentor1.jpg',
    quote: 'Meine eigenen Erfahrungen mit Barrieren im Arbeitsalltag haben mich gelehrt, wie wichtig Empathie und konkrete Handlungspläne sind. Ich freue mich darauf, mein Wissen zu teilen.',
  },
  {
    id: 2,
    name: 'Max Mustermann',
    image: '/Mentor2.jpg',
    quote: 'Inklusion beginnt im Kopf. Ich zeige Ihnen, wie Sie Vorurteile erkennen und eine offene Kultur im Unternehmen etablieren können.',
  },
  {
    id: 3,
    name: 'Sarah Müller',
    image: '/Mentor3.jpg',
    quote: 'Es ist unglaublich erfüllend, Unternehmen auf ihrem Weg zu mehr Inklusion zu begleiten. Jeder kleine Schritt zählt und führt zu einer großen Wirkung.',
  },
];

type Mentor = {
  id: number;
  name: string;
  image: string; // Pfad-String aus /public, z.B. "/Mentor1.jpg"
  quote: string;
};

interface MentorCarouselProps {
  theme?: 'warm'; // Jetzt nur noch 'warm' möglich
}

const MentorCarousel: React.FC<MentorCarouselProps> = ({ theme = 'warm' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Da wir nur noch das "warm" Theme haben, nutzen wir direkt die generischen Variablen.
  // Das 'isCreativeTheme' wird umbenannt oder entfernt. Hier nutzen wir isWarmTheme
  const isWarmTheme = theme === 'warm';

  const nextMentor = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length);
  };

  const prevMentor = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mentors.length) % mentors.length);
  };

  const currentMentor = mentors[currentIndex];

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className={`relative w-full max-w-4xl mx-auto py-12 px-6 rounded-3xl shadow-xl 
                    bg-theme-bg border-theme-border text-theme-text`}> 
      <div className="text-center mb-8">
        <h3 className={`text-4xl font-bold mb-4 pb-2 ${isWarmTheme ? 'bg-gradient-to-r from-theme-secondary via-theme-primary to-theme-accent bg-clip-text text-transparent font-mono' : 'text-theme-primary'}`}>
          Unsere Mentor:innen
        </h3>
        <p className="text-lg text-theme-text/70">
          Lernen Sie die inspirierenden Persönlichkeiten kennen, die Sie auf Ihrem Weg begleiten werden.
        </p>
      </div>
      <div className="relative overflow-hidden h-[450px] md:h-[350px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentMentor.id}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4 gap-8"
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={currentMentor.image}
                alt={currentMentor.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-theme-primary shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
              {/* Hier nutzen wir einfach text-theme-secondary und den font-mono bedingt */}
              <h4 className={`text-3xl font-bold text-theme-secondary uppercase tracking-wider ${isWarmTheme && 'font-mono'}`}>{currentMentor.name}</h4>
              <blockquote className={`text-xl text-theme-text/90 italic relative pl-4`}>
                <Quote className="absolute top-0 left-0 h-8 w-8 text-theme-accent opacity-50" />
                <p className="ml-8 leading-relaxed">"{currentMentor.quote}"</p>
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          onClick={prevMentor}
          variant="outline"
          size="icon"
          className="rounded-full border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-theme-bg transition-colors duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          {mentors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-theme-secondary scale-125'
                  : 'bg-theme-text/30 hover:bg-theme-text/60'
              }`}
              aria-label={`Go to mentor ${idx + 1}`}
            />
          ))}
        </div>
        <Button
          onClick={nextMentor}
          variant="outline"
          size="icon"
          className="rounded-full border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-theme-bg transition-colors duration-300"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default MentorCarousel;