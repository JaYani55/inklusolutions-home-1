// src/components/ui/SectionCard.tsx
import React from "react";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  accent?: string; // z.B. "#39b2c1" – erzeugt Hover-Glow
  className?: string;
  children: React.ReactNode;
}

export default function SectionCard({ title, subtitle, icon, accent = "#39b2c1", className = "", children }: SectionCardProps) {
  return (
    <section
      className={[
        "group relative isolate overflow-hidden rounded-3xl",
        "border border-white/15 bg-white/10 backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
        "transition-transform duration-300 will-change-transform",
        "hover:-translate-y-1 hover:shadow-2xl",
        className,
      ].join(" ")}
      style={{
        // @ts-ignore – CSS-Var für Glow
        "--accent": accent,
      }}
    >
      {/* Glow bei Hover */}
      <div className="pointer-events-none absolute -inset-28 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
           style={{ background: "radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 60%)" }} />

      {/* Dots-Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-soft-light bg-dots [background-size:22px_22px]" />

      {/* Inhalt */}
      <div className="relative p-8 md:p-10">
        <header className="flex items-start gap-4 mb-6">
          {icon && (
            <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-white/15 border border-white/20">
              <span aria-hidden className="text-2xl leading-none">{icon}</span>
            </div>
          )}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-slate-300">{subtitle}</p>}
          </div>
        </header>
        <div className="prose prose-invert prose-p:opacity-90 prose-li:opacity-90 max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}