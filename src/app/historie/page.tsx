// src/app/historie/page.tsx
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/shared/Footer";

export default function HistoriePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-secondary/10 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CE8600' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10V0H20v10L10 0H0v10l10 10L0 30v10h10l10-10 10 10h10V30L30 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-secondary via-third to-accent bg-clip-text text-transparent">
                Unsere Geschichte
              </span>
            </h1>
            <p className="text-2xl text-foreground/80 mb-12 leading-relaxed">
              Der Weg zu einer inklusiveren Gesellschaft
            </p>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border-2 border-white/30 p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <p className="text-xl text-foreground/80 leading-relaxed">
                Diese Seite ist in Entwicklung. Hier wird bald die Geschichte von InkluSolutions erzählt – von den Anfängen als Inklupreneur bis zur heutigen Position als Partner der führenden Wirtschaft.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
