"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// Import der benötigten Icons von Lucide React
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";

// Hauptkomponente für die Navigation
export default function Navigation() {
  // State für die Sichtbarkeit des mobilen Menüs (gesamte Overlay-Navigation)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State, der die ID des gerade aktiv GEEKLIICKTEN Haupt-Dropdown-Elements speichert.
  // Wenn null, ist kein Haupt-Dropdown per Klick offen.
  // Dies ermöglicht persistentes Öffnen/Schließen auf Klick und dient als Flag für den Hover-Effekt.
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // State, der die ID des gerade aktiv GEEKLIICKTEN Sub-Dropdown-Elements (z.B. "Training") speichert.
  // Ähnlich wie activeDropdown, aber für die zweite Ebene der Menüpunkte.
  // Hat Auswirkungen auf das Chevron-Icon und die Sichtbarkeit des Sub-Menüs.
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  // useRef, um auf das DOM-Element der gesamten Navigationskomponente zuzugreifen.
  // Dies ist entscheidend, um Klicks zu detektieren, die außerhalb der Navigation stattfinden.
  const navRef = useRef<HTMLElement>(null);

  // Definition der Navigationsstruktur
  // Jedes Objekt repräsentiert einen Top-Level-Menüpunkt.
  // 'id' wird hinzugefügt, um den Zustand von activeDropdown/activeSubDropdown eindeutig zu verwalten.
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
    // Ein Top-Level-Menüpunkt ohne Dropdown, der zu einer externen Ressource führt
    { name: "Kontakt", href: "https://forms.office.com/e/4fpN4gHamc", isExternal: true },
  ];

  // Hilfsfunktion: Schließt alle offenen Dropdowns, indem sie deren IDs im State auf null setzt.
  // Wird verwendet, wenn Klicks außerhalb der Navigation erkannt werden oder wenn ein Link geklickt wird.
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // useEffect Hook für den "Klick außerhalb schließen"-Mechanismus auf Desktop.
  useEffect(() => {
    // Event-Handler, der prüft, ob der Klick außerhalb der Navigationskomponente erfolgte.
    const handleClickOutside = (event: MouseEvent) => {
      // Wenn das navRef.current existiert und der Klick NICHT innerhalb der Navigation war
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAllDropdowns(); // Schließe alle Dropdowns
        setIsMobileMenuOpen(false); // Stelle sicher, dass auch das mobile Menü geschlossen wird
      }
    };
    // Fügt den Event-Listener beim Initial-Rendering hinzu
    document.addEventListener("mousedown", handleClickOutside);
    // Bereinigungsfunktion: Entfernt den Event-Listener beim Unmount der Komponente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]); // Abhängigkeit von navRef, damit der Listener bei Änderungen (wenn auch unwahrscheinlich) aktualisiert wird

  // Click-Handler für Haupt-Dropdown-Elemente (funktioniert auf Desktop und Mobile zum Togglen).
  // Wenn ein Menüpunkt geklickt wird, wird dessen ID im activeDropdown/activeSubDropdown State gespeichert.
  const handleDropdownClick = (itemId: string) => {
    // Schließt vor dem Öffnen andere Dropdowns, die möglicherweise noch offen sind.
    // Dies verhindert, dass mehrere Top-Level-Dropdowns gleichzeitig offen sind durch Klicks.
    closeAllDropdowns();
    // Togglet den Zustand des geklickten Dropdowns: War es offen, wird es geschlossen (null); war es geschlossen, wird es geöffnet (itemId).
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  // Click-Handler für Sub-Dropdown-Elemente (z.B. "Training").
  const handleSubDropdownClick = (subItemId: string) => {
    // Togglet den Zustand des geklickten Sub-Dropdowns.
    setActiveSubDropdown(activeSubDropdown === subItemId ? null : subItemId);
  };


  // HOVER-Logik für Desktop-Ansicht: Öffnet Dropdowns nur, wenn sie NICHT bereits per Klick geöffnet sind.
  // Auf diese Weise hat der "Klick" Priorität und hält das Menü offen.
  // Wenn kein Menü geklickt ist, funktioniert der Hover-Effekt wie gewohnt.

  // Hover-Handler für Haupt-Dropdown (z.B. "Leistungen") auf Desktop.
  const handleDropdownMouseEnter = (itemId: string) => {
    // Das Dropdown soll sich nur auf Hover öffnen, wenn nicht bereits ein anderes Dropdown per Klick geöffnet ist.
    // Falls activeDropdown == null, d.h. aktuell kein Dropdown per Klick "festgepinnt" ist,
    // dann können wir das aktuelle Menü per Hover öffnen.
    // Falls activeDropdown einen Wert hat, bedeutet das, ein Dropdown wurde geklickt und soll permanent offen bleiben –
    // in diesem Fall soll der Hover-Effekt keine anderen Menüs öffnen.
    if (activeDropdown === null) {
      setActiveDropdown(itemId);
    }
  };

  // Hover-Handler beim Verlassen des Haupt-Dropdowns auf Desktop.
  const handleDropdownMouseLeave = () => {
    // Das Dropdown soll sich nur schließen, wenn es durch Hover geöffnet wurde (d.h., kein aktiver Klick-Status).
    // Wenn activeDropdown auf 'null' ist, bedeutet dies, es wurde entweder durch Hover geöffnet oder es war bereits geschlossen.
    // Das Schließen findet nur statt, wenn ein Dropdown gerade offen ist (per Hover), UND es kein permanent geöffnetes Menü gibt.
    // Die persistente Schließlogik ist nun im handleClickOutside() und per Klick auf die Menüpunkte abgedeckt.
     if (activeDropdown !== null && activeSubDropdown === null) {
      // Wenn activeDropdown gesetzt ist, aber activeSubDropdown nicht,
      // und wir das Hauptmenü verlassen ohne in ein Submenü zu gehen,
      // dann schließen wir das Hauptmenü. Dies ist die komplexere Logik für "Hover schließt, wenn nicht geklickt".
      // Ein Klick auf ein Menüelement im Dropdown schließt es auch über die closeAllDropdowns()-Funktion.
      setActiveDropdown(null);
     }
  };


  // Hover-Handler für Sub-Dropdown (z.B. "Training") auf Desktop.
  const handleSubDropdownMouseEnter = (subItemId: string) => {
    // Öffnet das Sub-Dropdown nur, wenn kein Sub-Dropdown per Klick "festgepinnt" ist
    // UND wenn das Haupt-Dropdown aktiv ist (entweder durch Klick oder Hover).
    if (activeSubDropdown === null && activeDropdown !== null) {
      setActiveSubDropdown(subItemId);
    }
  };

  // Hover-Handler beim Verlassen des Sub-Dropdowns auf Desktop.
  const handleSubDropdownMouseLeave = () => {
    // Schließt das Sub-Dropdown nur, wenn es durch Hover geöffnet wurde (d.h., kein aktiver Klick-Status).
    // Wenn activeSubDropdown auf 'null' ist, bedeutet dies, es wurde entweder durch Hover geöffnet oder es war bereits geschlossen.
    if (activeSubDropdown !== null) {
      setActiveSubDropdown(null);
    }
  };


  return (
    // Die Navigationselemente umschließen, um handleClickOutside zu ermöglichen.
    <nav ref={navRef} className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo-Bereich */}
          <Link
            href="/"
            className="flex items-center"
            // Beim Klick auf das Logo alle Menüs schließen und zur Startseite navigieren
            onClick={() => {
              setIsMobileMenuOpen(false);
              closeAllDropdowns();
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
          <div className="text-lg hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? ( // Prüft, ob der Menüpunkt ein Haupt-Dropdown hat
                  <div
                    className="relative"
                    // Hover-Events für das Haupt-Dropdown
                    onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                    onMouseLeave={() => handleDropdownMouseLeave()}
                  >
                    <button
                      // Click-Event für das Haupt-Dropdown. Toggelt den Status des geklickten Dropdowns.
                      onClick={() => handleDropdownClick(item.id)}
                      className="transition-colors duration-200 font-medium relative flex items-center"
                    >
                       <span
                        className="inline-flex items-center px-3 py-1 rounded-full"
                        // Inline-Style für den Hintergrund und den Schatten, um das Design zu unterstützen
                        style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
                      >
                        <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                        {/* Chevron-Icon dreht sich basierend auf dem 'activeDropdown' Status */}
                        <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                      </span>
                      {/* Unterstrich-Effekt bei Hover */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                    </button>
                    {/* Rendert das Haupt-Dropdown-Menü nur, wenn 'activeDropdown' dieser ID entspricht */}
                    {(activeDropdown === item.id) && (
                      <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <div key={dropdownItem.name} className="relative group">
                              {dropdownItem.hasSubDropdown ? ( // Prüft, ob dieser Dropdown-Unterpunkt ein Sub-Dropdown hat (z.B. "Training")
                                <div
                                  // Hover-Events für das Sub-Dropdown
                                  onMouseEnter={() => handleSubDropdownMouseEnter(dropdownItem.id)}
                                  onMouseLeave={() => handleSubDropdownMouseLeave()}
                                >
                                  <Link
                                    href={dropdownItem.href} // Link des Sub-Dropdown-Trägers
                                    onClick={(e) => {
                                      // Auf Desktop (md breakpoint) soll ein Klick auf den Sub-Dropdown-Träger das Sub-Dropdown togglen,
                                      // anstatt direkt zum Link zu navigieren.
                                      if (window.innerWidth >= 768) {
                                        e.preventDefault(); // Verhindert die Standard-Navigationsaktion des Links
                                        handleSubDropdownClick(dropdownItem.id); // Togglet den Zustand des Sub-Dropdowns
                                      } else {
                                        // Auf mobilen Geräten soll der Link normal navigieren
                                        setIsMobileMenuOpen(false);
                                        closeAllDropdowns();
                                      }
                                    }}
                                    className="block px-4 py-2 text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200 relative group flex justify-between items-center"
                                  >
                                    {dropdownItem.name}
                                    {/* Chevron-Icon dreht sich basierend auf dem 'activeSubDropdown' Status */}
                                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${activeSubDropdown === dropdownItem.id ? 'rotate-180' : ''}`} />
                                  </Link>
                                  {/* Rendert das Sub-Dropdown-Menü nur, wenn 'activeSubDropdown' dieser ID entspricht */}
                                  {(activeSubDropdown === dropdownItem.id) && (
                                    <div className="absolute top-0 right-full mt-0 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 mr-2">
                                      <div className="py-2">
                                        {dropdownItem.subDropdownItems?.map((subItem) => (
                                          subItem.disabled ? ( // Prüft, ob der Sub-Eintrag deaktiviert ist
                                            <div
                                              key={subItem.name}
                                              className="block px-4 py-2 text-gray-400 cursor-not-allowed select-none"
                                              title="Dieser Eintrag ist noch nicht verfügbar"
                                            >
                                              {subItem.name}
                                            </div>
                                          ) : (
                                            <Link
                                              key={subItem.name}
                                              href={subItem.href}
                                              className="block px-4 py-2 text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                                              onClick={() => {
                                                setIsMobileMenuOpen(false); // Schließt mobile Menü
                                                closeAllDropdowns(); // Schließt alle Desktop-Dropdowns
                                              }}
                                            >
                                              {subItem.name}
                                            </Link>
                                          )
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : ( // Wenn der Dropdown-Unterpunkt KEIN Sub-Dropdown hat
                                dropdownItem.disabled ? (
                                  <div
                                    key={dropdownItem.name}
                                    className="block px-4 py-2 text-gray-400 cursor-not-allowed select-none"
                                    title="Dieser Eintrag ist noch nicht verfügbar"
                                  >
                                    {dropdownItem.name}
                                  </div>
                                ) : (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="block px-4 py-2 text-gray-800 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      closeAllDropdowns();
                                    }}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                )
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : ( // Wenn der Top-Level-Menüpunkt KEIN Dropdown hat
                  // Behandelt externe Links
                  (item.href && item.href.startsWith('http')) ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 font-medium relative group"
                      onClick={() => closeAllDropdowns()} // Schließt alle Dropdowns beim Klick auf einen externen Link
                    >
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
                      >
                        <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                        {'isExternal' in item && item.isExternal && ( // Zeigt das Externe-Link-Icon, falls isExternal true
                          <ExternalLink className="ml-1 h-3 w-3 text-foreground/60" />
                        )}
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ) : (
                    // Behandelt interne Links ohne Dropdown
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 font-medium relative group"
                      onClick={() => closeAllDropdowns()} // Schließt alle Dropdowns beim Klick auf einen internen Link
                    >
                      <span
                        className="inline-block px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.14)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
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

          {/* Mobiler Menü-Button - Nur auf kleinen Bildschirmen sichtbar */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen); // Togglet die Sichtbarkeit des mobilen Menüs
                closeAllDropdowns(); // Schließt alle Desktop-Dropdowns, wenn das mobile Menü geöffnet/geschlossen wird
              }}
              className="text-foreground/80 hover:text-primary transition-colors p-2"
              aria-label="Navigation öffnen"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Wird nur gerendert, wenn 'isMobileMenuOpen' true ist */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? ( // Prüft, ob der Haupt-Menüpunkt ein Dropdown hat
                    <div>
                      <button
                        // Klick-Event für Haupt-Dropdown im mobilen Menü
                        onClick={() => handleDropdownClick(item.id)}
                        className="w-full text-left block px-3 py-2 rounded-lg transition-colors"
                      >
                        <span
                          className="inline-flex items-center justify-between w-full px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.06)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
                        >
                          <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                          {/* Chevron-Icon dreht sich basierend auf dem 'activeDropdown' Status */}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                        </span>
                      </button>
                      {/* Rendert das Haupt-Dropdown-Menü nur, wenn 'activeDropdown' dieser ID entspricht */}
                      {activeDropdown === item.id && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.hasSubDropdown ? ( // Prüft, ob dieser Dropdown-Unterpunkt ein Sub-Dropdown hat
                                <>
                                  <button
                                    // Klick-Event für Sub-Dropdown im mobilen Menü
                                    onClick={() => handleSubDropdownClick(dropdownItem.id)}
                                    className="w-full text-left block px-3 py-2 rounded-lg transition-colors flex justify-between items-center"
                                  >
                                    <span className="text-foreground/70 hover:text-primary">{dropdownItem.name}</span>
                                    {/* Chevron-Icon dreht sich basierend auf dem 'activeSubDropdown' Status */}
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubDropdown === dropdownItem.id ? 'rotate-180' : ''}`} />
                                  </button>
                                  {/* Rendert das Sub-Dropdown-Menü nur, wenn 'activeSubDropdown' dieser ID entspricht */}
                                  {activeSubDropdown === dropdownItem.id && (
                                    <div className="ml-4 mt-2 space-y-1">
                                      {dropdownItem.subDropdownItems?.map((subItem) => (
                                        subItem.disabled ? (
                                          <div
                                            key={subItem.name}
                                            className="block px-3 py-2 rounded-lg text-gray-400 cursor-not-allowed select-none"
                                            title="Dieser Eintrag ist noch nicht verfügbar"
                                          >
                                            {subItem.name}
                                          </div>
                                        ) : (
                                          <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-3 py-2 rounded-lg transition-colors text-foreground/70 hover:text-primary hover:bg-primary/5"
                                            // Schließt alle Menüs beim Klick auf einen Link im mobilen Unter-Dropdown
                                            onClick={() => {
                                              setIsMobileMenuOpen(false);
                                              closeAllDropdowns();
                                            }}
                                          >
                                            {subItem.name}
                                          </Link>
                                        )
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : ( // Wenn der Dropdown-Unterpunkt KEIN Sub-Dropdown hat (mobil)
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
                                    // Schließt alle Menüs beim Klick auf einen Link im mobilen Haupt-Dropdown
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      closeAllDropdowns();
                                    }}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                )
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : ( // Wenn der Top-Level-Menüpunkt KEIN Dropdown hat (mobil)
                    // Behandelt externe Links (mobil)
                    (item.href && item.href.startsWith('http')) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded-lg transition-colors"
                        // Schließt alle Menüs beim Klick auf einen externen Link im mobilen Menü
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          closeAllDropdowns();
                        }}
                      >
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.06)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
                        >
                          <span className="text-foreground/80 hover:text-primary">{item.name}</span>
                          {'isExternal' in item && item.isExternal && (
                            <ExternalLink className="ml-1 h-3 w-3 text-foreground/60" />
                          )}
                        </span>
                      </a>
                    ) : (
                      // Behandelt interne Links ohne Dropdown (mobil)
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-lg transition-colors"
                        // Schließt alle Menüs beim Klick auf einen internen Link im mobilen Menü
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          closeAllDropdowns();
                        }}
                      >
                        <span
                          className="inline-block px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.06)', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }}
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
