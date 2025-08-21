// src/components/landingpage/AwarenessSection.tsx
import React from "react";
import { Users, Play, Video, MessageCircle, MapPin } from "lucide-react";

export default function AwarenessSection() {
  const items = [
    { title: "DAW (Awareness Workshop)", desc: "4h Sensibilisierung mit erlebbaren Perspektivwechseln." },
    { title: "\"Lass uns reden\"", desc: "Videopaket für Intranet & Events." },
    { title: "Spotlight Moments", desc: "Individuelle Videoproduktion mit Menschen & Mentoren." },
    { title: "Inklu-Talks", desc: "60 Min. Austauschformat für Teams & Führung." },
    { title: "Begehung", desc: "Vor-Ort-Analyse: Barrieren sichtbar machen." },
  ] as const;

  const iconMap: Record<string, React.ComponentType<any>> = {
    "DAW (Awareness Workshop)": Users,
    '"Lass uns reden"': Play,
    "Spotlight Moments": Video,
    "Inklu-Talks": MessageCircle,
    "Begehung": MapPin,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((it) => {
        const Icon = iconMap[it.title];
        return (
          <div key={it.title} className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              {Icon ? <Icon className="w-6 h-6 text-primary" aria-hidden /> : <span aria-hidden className="text-2xl text-primary">•</span>}
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="text-sm md:text-[15px] text-foreground/70 mt-1">{it.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}