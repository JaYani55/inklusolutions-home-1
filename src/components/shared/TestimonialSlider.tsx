// app/components/TestimonialSlider.tsx
'use client'; // Notwendig, da Swiper Hooks und Browser-APIs verwendet

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import React from 'react';

// Beispielbilder im `public/` Ordner
const testimonialImage1 = "/thumbnail1.jpg";
const testimonialImage2 = "/thumbnail2.jpg";
const testimonialImage3 = "/workshop-setting.jpg";
const testimonialImage4 = "/inclusive-leadership-course.jpg";

const testimonials = [
  {
    name: "Sabine L.",
    role: "HR-Managerin, TechSolutions Co.",
    quote:
      "Der Inklusionsführerschein war mehr als ein Kurs – er war ein Weckruf. Wir haben jetzt nicht nur die Theorie verstanden, sondern auch einen klaren Plan, wie wir Inklusion in unserer Unternehmenskultur leben können. Absolut empfehlenswert für jedes zukunftsorientierte Unternehmen!",
    image: testimonialImage1,
    rating: 5,
  },
  {
    name: "Daniel R.",
    role: "CEO, InnovateWorks GmbH",
    quote:
      "Als CEO sehe ich den Inklusionsführerschein als Investition in die Zukunft unseres Unternehmens. Die pragmatischen Ansätze und der direkte Austausch mit den Mentor:innen waren unbezahlbar. Wir sind jetzt besser aufgestellt, um Diversität nicht nur zu fordern, sondern auch zu fördern.",
    image: testimonialImage2,
    rating: 5,
  },
  {
    name: "Dr. Lena M.",
    role: "Diversity & Inclusion Lead, Global Corp.",
    quote:
      "Die Inhalte des Kurses sind topaktuell und tiefgreifend. Besonders die interaktiven Simulationen haben viel bewirkt und uns praxisnahe Werkzeuge an die Hand gegeben, die wir sofort anwenden konnten. Ein Muss für jeden DEI-Experten!",
    image: testimonialImage3,
    rating: 4,
  },
  {
    name: "Team HR von 'Visionary Solutions'",
    role: "Gesamtes HR-Team",
    quote:
      "Wir nahmen als Team teil und konnten unsere Erfahrungen direkt im Unternehmen umsetzen. Der Mix aus Theorie, persönlichem Austausch und konkreten Handlungsempfehlungen war einzigartig und extrem wertvoll. Eine echte Bereicherung für unsere HR-Strategie.",
    image: testimonialImage4,
    rating: 5,
  },
];

interface TestimonialSliderProps {
  theme?: 'warm'; // Jetzt nur noch 'warm' möglich
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ theme = 'warm' }) => {
  // Die Theme-Klasse ist jetzt immer 'theme-warm', da es nur ein Theme gibt.
  // Es reicht, die generischen Variablen zu nutzen, die im :root in globals.css gesetzt sind.
  const isWarmTheme = theme === 'warm';

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={32}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className={`max-w-3xl mx-auto pb-12`} // Die theme-warm Klasse ist nicht mehr explizit nötig, da das Stylesheet so konfiguriert ist.
    >
      {testimonials.map((t, idx) => (
        <SwiperSlide key={idx} className="p-2">
          <div className={`
              bg-theme-bg/70 backdrop-blur-md
              p-8 sm:p-10 rounded-2xl shadow-xl border
              border-theme-border/30 hover:border-theme-border/50
              transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center
          `}>
            {/* Hintergrund-Quote Icon */}
            {/* Quote Icons verwenden generische Theme-Variablen */}
            <Quote className={`absolute top-4 left-4 h-20 w-20 text-theme-primary/60 opacity-60 transform -rotate-12 z-0`} />
            <Quote className={`absolute bottom-4 right-4 h-20 w-20 text-theme-secondary/60 opacity-60 transform rotate-12 z-0`} />
            <div className="relative z-10">
              {/* Avatar - Hintergrund bg-theme-bg, Rand border-theme-primary */}
              <div className={`
                  relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2
                  border-theme-primary shadow-lg flex items-center justify-center bg-theme-bg
              `}>
                  <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                   {/* Subtiler Ring um das Bild - ring-theme-primary */}
                  <div className={`absolute inset-0 rounded-full ring-2 ring-theme-primary/50 animate-pulse-slow`} />
              </div>
              {/* Zitat - Textfarbe text-theme-text, Farbe der Anführungszeichen text-theme-primary */}
              <p className={`text-xl sm:text-2xl text-theme-text/90 italic leading-relaxed mb-6 relative`}>
                  <span className={`inline-block text-theme-primary text-3xl align-top mr-1 -mt-2`}>“</span>
                  {t.quote}
                  <span className={`inline-block text-theme-primary text-3xl align-bottom ml-1 -mb-2`}>”</span>
              </p>
              {/* Sterne-Bewertung - starColor ist jetzt text-theme-secondary und starEmptyColor ist text-theme-text/30 */}
              {t.rating && (
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < t.rating ? 'text-theme-secondary' : 'text-theme-text/30'
                      }`}
                      fill={i < t.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              )}
              {/* Name und Rolle - Name text-theme-primary, Rolle text-theme-text/60 */}
              <div className={`${isWarmTheme ? 'font-mono uppercase tracking-wider' : 'uppercase tracking-wider'} font-bold text-theme-primary text-lg mb-1`}>
                {t.name}
              </div>
              <div className={`text-sm text-theme-text/60 font-light`}>
                {t.role}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;