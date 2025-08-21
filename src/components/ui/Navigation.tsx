"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Produkte", href: "/products" },
    { name: "Team", href: "/team" },
    { name: "Historie", href: "/historie" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/InkluSolutionsLogo.png"
              alt="Inklu Solutions"
              width={300}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors duration-200 font-medium relative group"
                >
                  <span
                    className="inline-block px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 8px 18px rgba(255,255,255, 1))' }}
                  >
                    <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary transition-colors p-2"
              aria-label="Navigation öffnen"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-primary/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.06)', filter: 'drop-shadow(0 8px 18px rgba(255,255,255,0.20))' }}
                    >
                      <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
