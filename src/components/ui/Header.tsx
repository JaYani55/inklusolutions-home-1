// src/components/ui/Header.tsx
"use client";
import ThemeToggle from "@/components/ui/ThemeToggle";
import CommandMenu from "@/components/ui/CommandMenu";
import { Command } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="font-semibold tracking-tight text-white">InkluSolutions</a>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen((v) => !v)} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20" aria-label="Befehlspalette">
            <Command className="size-4"/> <span className="hidden sm:inline">Suchen</span>
          </button>
          <ThemeToggle/>
        </div>
      </div>
      {open && <CommandMenu/>}
    </header>
  );
}