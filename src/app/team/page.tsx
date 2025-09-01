// src/app/team/page.tsx
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/shared/Footer";

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-third/5 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23970200' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-primary via-secondary to-third bg-clip-text text-transparent">
                Unser Team
              </span>
            </h1>
            <p className="text-2xl text-foreground/80 mb-12 leading-relaxed">
              Lernen Sie die Menschen hinter InkluSolutions kennen
            </p>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border-2 border-white/30 p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <p className="text-xl text-foreground/80 leading-relaxed">
                Diese Seite ist in Entwicklung. Hier werden bald unsere Teammitglieder und Mentor:innen vorgestellt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
