// src/components/ui/Hero.tsx
"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  { h: "Inklusion sichtbar machen", p: "Workshops, Videos & Beratung – mit Menschen & Mentoren im Mittelpunkt." },
  { h: "Recruiting inklusiv denken", p: "JobSync, Peer-Mentoring und Inklu-Score unterstützen dich messbar." },
  { h: "Training mit Transfer", p: "Praxisnahe Tools für Teams und Führung – vor Ort & remote." },
];

export default function Hero() {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  useEffect(() => {
    if (!embla) return;
    const timer = setInterval(() => embla.scrollNext(), 4000);
    return () => clearInterval(timer);
  }, [embla]);

  return (
    <div className="relative mx-auto mb-10 mt-8 max-w-7xl">
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl" ref={viewportRef}>
        <div className="flex">
          {slides.map((s) => (
            <div key={s.h} className="min-w-0 shrink-0 grow-0 basis-full p-10 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                className="mx-auto max-w-3xl text-center"
              >
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">{s.h}</h1>
                <p className="mt-3 text-slate-200/90 md:text-lg">{s.p}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}