// src/components/landingpage/ServiceSection.tsx
import React from "react";
import { Users, Link2, BarChart2, Award } from "lucide-react";

export default function ServiceSection() {
  const services = [
    // { title: "Peer-Mentoring", desc: "Begleitung durch Menschen mit Behinderung – authentisch, praxisnah." },
    { title: "Recruiting-Support (JobSync)", desc: "Jobdistribution, Matching & Begleitung für inklusives Recruiting." },
    { title: "Inklu-Score", desc: "Messung inklusiver Kultur – sichtbar und vergleichbar." },
    { title: "Zertifikate & Auszeichnungen", desc: "Nachweise für Fortschritt & Sichtbarkeit." },
  ] as const;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const iconMap: Record<string, React.ComponentType<any>> = {
    /* "Peer-Mentoring": Users, */
    "Recruiting-Support (JobSync)": Link2,
    "Inklu-Score": BarChart2,
    "Zertifikate & Auszeichnungen": Award,
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <ul className="space-y-4">
      {services.map((s) => {
        const Icon = iconMap[s.title];
        return (
          <li key={s.title} className="p-4 rounded-2xl bg-secondary/5 border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-secondary/10 to-accent/10">
                {Icon ? <Icon className="w-6 h-6 text-secondary" aria-hidden /> : <span className="text-2xl text-secondary" aria-hidden>•</span>}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm md:text-[15px] text-foreground/70 mt-1">{s.desc}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}