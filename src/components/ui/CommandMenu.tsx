// src/components/ui/CommandMenu.tsx
"use client";
import * as React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { useRouter } from 'next/navigation';
import { Search, Sparkles, Phone, GraduationCap, Handshake } from "lucide-react";

export default function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  const go = (hash: string) => {
    setOpen(false);
    router.push("/#" + hash);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-start pt-24 px-4">
      <div className="w-full max-w-xl rounded-2xl border border-white/15 bg-slate-900/80 backdrop-blur-xl">
        <Command>
          <CommandInput placeholder="Suche… (⌘/Ctrl+K)" />
          <CommandList>
            <CommandEmpty>Keine Treffer</CommandEmpty>
            <CommandGroup heading="Sektionen">
              <CommandItem onSelect={() => go("awareness")}> <Sparkles className="mr-2 size-4"/> Bewusstsein</CommandItem>
              <CommandItem onSelect={() => go("services")}> <Handshake className="mr-2 size-4"/> Services</CommandItem>
              <CommandItem onSelect={() => go("training")}> <GraduationCap className="mr-2 size-4"/> Training</CommandItem>
              <CommandItem onSelect={() => go("contact")}> <Phone className="mr-2 size-4"/> Kontakt</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
}