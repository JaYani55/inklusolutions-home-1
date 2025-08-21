// src/components/ui/ThemeToggle.tsx
"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Vor dem Mount wissen wir das Theme nicht → neutrale Platzhalter-UI
  if (!mounted) {
    return (
      <button
        aria-label="Theme umschalten"
        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
        disabled
      >
        <Sun className="size-4 opacity-0" aria-hidden /> {/* Platzhalter, verhindert Layout-Shift */}
        <span className="hidden sm:inline">Theme</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label="Theme umschalten"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
