// src/app/historie/page.tsx
import Navigation from "@/components/ui/Navigation";

export default function HistoriePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
              Unsere Geschichte
            </h1>
            <p className="text-xl text-slate-200/90 mb-8">
              Der Weg zu einer inklusiveren Gesellschaft
            </p>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 p-8">
              <p className="text-slate-200">
                Diese Seite ist in Entwicklung. Hier wird bald die Geschichte von InkluSolutions erzählt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
