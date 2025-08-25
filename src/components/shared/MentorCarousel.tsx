// app/components/shared/MentorCarousel.tsx
"use client"; // Notwendig, da Hooks und Framer Motion verwendet werden

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mentors, type Mentor } from '@/data/mentors/mentors';

interface MentorCarouselProps {
  theme?: 'warm'; // Jetzt nur noch 'warm' möglich
}

const MentorCarousel: React.FC<MentorCarouselProps> = ({ theme = 'warm' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const isWarmTheme = theme === 'warm';
  const mentorsPerPage = 3;
  const maxIndex = Math.max(0, mentors.length - mentorsPerPage);

  const nextMentors = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevMentors = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleMentors = mentors.slice(currentIndex, currentIndex + mentorsPerPage);

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-6 px-6">
      {/*
      <div className="text-center mb-12">
        <h3 className={`text-5xl font-bold mb-6 ${isWarmTheme ? 'bg-gradient-to-r from-theme-secondary via-theme-primary to-theme-accent bg-clip-text text-transparent font-mono' : 'text-theme-primary'}`}>
          Unsere Mentor:innen
        </h3>
        <p className="text-xl text-theme-text/80 max-w-3xl mx-auto leading-relaxed">
          Lernen Sie die inspirierenden Persönlichkeiten kennen, die Sie auf Ihrem Weg zu mehr Inklusion begleiten werden.
        </p>
      </div>
      */}

      <div className="relative">
        {/* Navigation Arrows */}
        <Button
          onClick={prevMentors}
          disabled={currentIndex === 0}
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-theme-bg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        <Button
          onClick={nextMentors}
          disabled={currentIndex >= maxIndex}
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-theme-bg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>

        {/* Mentors Grid */}
        <div className="overflow-hidden px-16 h-[500px] py-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleMentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  className="bg-gradient-to-br from-theme-bg/90 to-theme-bg/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-theme-border/20 hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Mentor Image */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-theme-primary shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-theme-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Mentor Info */}
                  <div className="text-center space-y-4">
                    <h4 className={`text-2xl md:text-3xl font-bold text-theme-secondary ${isWarmTheme && 'font-mono'} group-hover:text-theme-primary transition-colors duration-300`}>
                      {mentor.name}
                    </h4>
                    <p className="text-lg font-semibold text-theme-accent uppercase tracking-wider">
                      {mentor.role}
                    </p>
                    
                    {/* Quote */}
                    <blockquote className="relative mt-6">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-theme-accent/40" />
                      <p className="text-lg md:text-xl text-theme-text/90 italic leading-relaxed pl-6 min-h-[6rem] flex items-center">
                        "{mentor.quote}"
                      </p>
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`block h-3 w-3 bg-accent rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-theme-primary scale-125 shadow-lg'
                  : 'bg-theme-text/30 hover:bg-theme-text/60 hover:scale-110'
              }`}
              aria-label={`Go to mentors group ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorCarousel;