"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Leistungen",
      id: "leistungen", // Eindeutige ID für dieses Haupt-Dropdown
      href: "/products", // Link zur Übersichtsseite für Leistungen
      hasDropdown: true, // Flag, das anzeigt, dass dieser Punkt ein Dropdown hat
      dropdownItems: [ // Unterpunkte des "Leistungen"-Dropdowns
        { name: "Übersicht", href: "/products", disabled: false },
        {
          name: "Training",
          id: "training", // Eindeutige ID für dieses Sub-Dropdown
          href: "/products/trainings", // Link zur Übersichtsseite für Trainings
          hasSubDropdown: true, // Flag, das anzeigt, dass dieser Punkt ein weiteres Sub-Dropdown hat
          subDropdownItems: [ // Unterpunkte des "Training"-Sub-Dropdowns
            { name: "Inklusionsführerschein", href: "/products/inklusionsfuehrerschein", disabled: false },
            { name: "Masterclasses", href: "/products/trainings#masterclass", disabled: false },
          ],
        },
        { name: "Awareness", href: "/products/awareness", disabled: false },
        { name: "Services", href: "/products/services", disabled: false },
      ],
    },
    { name: "Kontakt", href: "https://forms.office.com/e/4fpN4gHamc", isExternal: true },
  ];

  return (
    // Die Navigationselemente umschließen, um handleClickOutside zu ermöglichen.
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo-Bereich */}
          <Link
            href="/"
            className="flex items-center"
            // Beim Klick auf das Logo alle Menüs schließen und zur Startseite navigieren
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            <Image
              src="/InkluSolutionsLogo.png"
              alt="Inklu Solutions"
              width={300}
              height={100}
              className="object-contain" // Sorgt dafür, dass das Bild innerhalb seiner Dimensionen skaliert wird
              priority // Priorisiert das Laden dieses Bildes, da es im sichtbaren Bereich ist
            />
          </Link>

          {/* Desktop Navigation - Versteckt auf mobilen Geräten */}
          <ul className="text-lg hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button
                        tabIndex={0}
                        className="transition-colors duration-200 font-medium relative flex items-center"
                      >
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full"
                          // Inline-Style für den Hintergrund und den Schatten, um das Design zu unterstützen
                          style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
                        >
                          <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                          {/* Chevron-Icon dreht sich basierend auf dem 'activeDropdown' Status */}
                          <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </span>
                        {/* Unterstrich-Effekt bei Hover */}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        sideOffset={5}
                        className="bg-white p-2 shadow-lg rounded-xl border border-gray-200 w-60 z-50"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          dropdownItem.hasSubDropdown ? (
                            <DropdownMenu.Sub key={dropdownItem.name}>
                              <DropdownMenu.SubTrigger className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-800 rounded-md hover:bg-gray-50 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                <Link href={dropdownItem.href} onClick={(e) => e.preventDefault()}>{dropdownItem.name}</Link>
                                <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200" />
                              </DropdownMenu.SubTrigger>
                              <DropdownMenu.Portal>
                                <DropdownMenu.SubContent
                                  className="bg-white p-2 shadow-lg rounded-xl border border-gray-200 w-60 z-50"
                                  sideOffset={2}
                                  alignOffset={-5}
                                >
                                  {dropdownItem.subDropdownItems?.map((subItem) => (
                                    <DropdownMenu.Item key={subItem.name} asChild disabled={subItem.disabled}>
                                      <Link
                                        href={subItem.href}
                                        className={cn(
                                          "block px-4 py-2 text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 rounded-md",
                                          subItem.disabled && "text-gray-400 cursor-not-allowed"
                                        )}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </DropdownMenu.Item>
                                  ))}
                                </DropdownMenu.SubContent>
                              </DropdownMenu.Portal>
                            </DropdownMenu.Sub>
                          ) : (
                            <DropdownMenu.Item key={dropdownItem.name} asChild disabled={dropdownItem.disabled}>
                              <Link
                                href={dropdownItem.href}
                                className={cn(
                                  "block px-4 py-2 text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 rounded-md",
                                  dropdownItem.disabled && "text-gray-400 cursor-not-allowed"
                                )}
                              >
                                {dropdownItem.name}
                              </Link>
                            </DropdownMenu.Item>
                          )
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                ) : (
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="transition-colors duration-200 font-medium relative flex items-center"
                  >
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
                    >
                      <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                      {item.isExternal && <ExternalLink className="ml-2 h-4 w-4" />}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Sichtbar nur auf mobilen Geräten */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                {item.hasDropdown ? (
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger className="w-full text-left font-medium text-gray-800 flex justify-between items-center">
                      {item.name}
                      <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="mt-2 space-y-2 pl-4 bg-white rounded-md shadow-lg">
                      {item.dropdownItems?.map((dropdownItem) => (
                        dropdownItem.hasSubDropdown ? (
                          <DropdownMenu.Sub key={dropdownItem.name}>
                            <DropdownMenu.SubTrigger className="w-full text-left font-medium text-gray-700 flex justify-between items-center py-2">
                              {dropdownItem.name}
                              <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200" />
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent className="mt-2 space-y-1 pl-4 bg-white">
                              {dropdownItem.subDropdownItems?.map((subItem) => (
                                <DropdownMenu.Item key={subItem.name} asChild disabled={subItem.disabled}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                      "block py-1 text-gray-600",
                                      subItem.disabled && "text-gray-400 cursor-not-allowed"
                                    )}
                                  >
                                    {subItem.name}
                                  </Link>
                                </DropdownMenu.Item>
                              ))}
                            </DropdownMenu.SubContent>
                          </DropdownMenu.Sub>
                        ) : (
                          <DropdownMenu.Item key={dropdownItem.name} asChild disabled={dropdownItem.disabled}>
                            <Link
                              href={dropdownItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "block text-gray-700",
                                dropdownItem.disabled && "text-gray-400 cursor-not-allowed"
                              )}
                            >
                              {dropdownItem.name}
                            </Link>
                          </DropdownMenu.Item>
                        )
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                ) : (
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-medium text-gray-800 flex items-center"
                  >
                    {item.name}
                    {item.isExternal && <ExternalLink className="ml-2 h-4 w-4" />}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
