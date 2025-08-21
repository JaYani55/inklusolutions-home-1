// src/app/team/page.tsx
import Navigation from "@/components/ui/Navigation";

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
              Unser Team
            </h1>
            <p className="text-xl text-slate-200/90 mb-8">
              Lernen Sie die Menschen hinter InkluSolutions kennen
            </p>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 p-8">
              <p className="text-slate-200">
                Diese Seite ist in Entwicklung. Hier werden bald unsere Teammitglieder vorgestellt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
