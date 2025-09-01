// src/components/landingpage/LandingPageLayout.tsx
import React from "react";
import SectionCard from "@/components/ui/SectionCard";
import AwarenessSection from "@/components/landingpage/AwarenessSection";
import ServiceSection from "@/components/landingpage/ServiceSection";
import TrainingSection from "@/components/landingpage/TrainingSection";
import ContactSection from "@/components/landingpage/ContactSection";

export default function LandingPageLayout() {
  return (
    <section className="py-24 bg-background relative overflow-visible">
      {/* Background gradient matching product page */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-0" />
      
      <main className="relative max-w-7xl mx-auto px-6 md:px-8 z-10">
        {/* Responsive Mosaic-Grid */}
        <div className="grid grid-cols-12 gap-8 auto-rows-[1fr]">
          {/* Awareness – großflächig */}
          <div className="col-span-12 md:col-span-7">
            <SectionCard title="Awareness" subtitle="Formate, die Haltung verändern" icon={"✨"} accent="#39b2c1">
              <AwarenessSection />
            </SectionCard>
          </div>

          {/* Services – hoch, schmaler */}
          <div className="col-span-12 md:col-span-5">
            <SectionCard title="Services" subtitle="Begleitung, die wirkt" icon={"🧩"} accent="#f84d42">
              <ServiceSection />
            </SectionCard>
          </div>

          {/* Training – 50/50 Zeile darunter */}
          <div className="col-span-12 md:col-span-6">
            <SectionCard title="Training" subtitle="Kompetenz mit Praxisbezug" icon={"🎯"} accent="#fbc12c">
              <TrainingSection />
            </SectionCard>
          </div>

          {/* Kontakt – 50/50 */}
          <div className="col-span-12 md:col-span-6">
            <SectionCard title="Kontakt" subtitle="Wir freuen uns auf deine Nachricht" icon={"✉️"} accent="#8ab4ff">
              <ContactSection />
            </SectionCard>
          </div>
        </div>
      </main>
    </section>
  );
}