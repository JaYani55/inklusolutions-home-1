import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border/20 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <img 
              src="/InkluSolutionsLogo.png" 
              alt="InkluSolutions Logo" 
              className="h-12 mx-auto md:mx-0 mb-4"
            />
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link href="/products" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                Leistungen
              </Link>
              {/*
              <Link href="/team" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                Team
              </Link>
              <Link href="/historie" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                Historie
              </Link>
              */}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <div className="space-y-2">
              <Link href="/impressum" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                Datenschutz
              </Link>
              {/*
              <a href="/datenschutz/contact" className="block text-foreground/70 hover:text-primary transition-colors duration-300">
                Kontakt
              </a>
              */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-foreground/60">
            © 2025 InkluSolutions. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
