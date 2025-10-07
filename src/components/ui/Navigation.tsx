"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const navItems = [
    { 
      name: "Leistungen", 
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Übersicht", href: "/products", disabled: false },
        { name: "Training", href: "/products/trainings", disabled: false, },
        { name: "-> Inklusionsführerschein", href: "/products/inklusionsfuehrerschein", disabled: false},
        { name: "-> Masterclasses", href: "/products/trainings#masterclass", disabled: false},
        { name: "Awareness", href: "/products/awareness", disabled: false },
        { name: "Services", href: "/products/services", disabled: false },
      ]
    },
    { name: "Kontakt", href: "https://forms.office.com/e/4fpN4gHamc", isExternal: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white backdrop-blur-xl">
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
          <div className="text-lg hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                    >
                      <button
                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        className="transition-colors duration-200 font-medium relative group flex items-center"
                      >
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 8px 18px rgba(255,255,255, 1))' }}
                        >
                          <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isProductsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                          <div className="py-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              dropdownItem.disabled ? (
                                <div
                                  key={dropdownItem.name}
                                  className="block px-6 py-2 text-gray-400 cursor-not-allowed select-none"
                                  title="Dieser Eintrag ist noch nicht verfügbar"
                                >
                                  {dropdownItem.name}
                                </div>
                              ) : (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                                  onClick={() => setIsProductsDropdownOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // if external link (starts with http) render a regular anchor that opens in a new tab
                    (item.href && item.href.startsWith('http')) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 font-medium relative group"
                      >
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 8px 18px rgba(255,255,255, 1))' }}
                        >
                          <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                          {'isExternal' in item && item.isExternal && (
                            <ExternalLink className="ml-1 h-3 w-3 text-foreground/60" />
                          )}
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                      </a>
                    ) : (
                      <Link
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
                    )
                  )}
                </div>
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
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                          className="w-full text-left block px-3 py-2 rounded-lg transition-colors"
                        >
                          <span
                            className="inline-flex items-center justify-between w-full px-3 py-1 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.06)', filter: 'drop-shadow(0 8px 18px rgba(255,255,255,0.20))' }}
                          >
                            <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                          </span>
                        </button>
                        {isProductsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdownItems?.map((dropdownItem) => (
                              dropdownItem.disabled ? (
                                <div
                                  key={dropdownItem.name}
                                  className="block px-3 py-2 rounded-lg text-gray-400 cursor-not-allowed select-none"
                                  title="Dieser Eintrag ist noch nicht verfügbar"
                                >
                                  {dropdownItem.name}
                                </div>
                              ) : (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-3 py-2 rounded-lg transition-colors text-foreground/70 hover:text-primary hover:bg-primary/5"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      (item.href && item.href.startsWith('http')) ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-2 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span
                            className="inline-flex items-center px-3 py-1 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.06)', filter: 'drop-shadow(0 8px 18px rgba(255,255,255,0.20))' }}
                          >
                            <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                            {'isExternal' in item && item.isExternal && (
                              <ExternalLink className="ml-1 h-3 w-3 text-foreground/60" />
                            )}
                          </span>
                        </a>
                      ) : (
                        <Link
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
                      )
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
