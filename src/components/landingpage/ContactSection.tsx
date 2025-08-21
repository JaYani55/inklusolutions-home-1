"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const Schema = z.object({
  name: z.string().min(2, "Zu kurz"),
  email: z.string().email("Ungültige E-Mail"),
  message: z.string().min(10, "Bitte etwas ausführlicher"),
});

type FormData = z.infer<typeof Schema>;

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(Schema) });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Fehler beim Senden");
      return res.json();
    },
    onSuccess: () => { reset(); alert("Danke! Wir melden uns."); },
  });

  return (
    <form onSubmit={handleSubmit((v) => mutation.mutate(v))} className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium text-foreground/80">Name</label>
        <input 
          {...register("name")} 
          className="mt-1 w-full rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200" 
          placeholder="Dein Name" 
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground/80">E‑Mail</label>
        <input 
          {...register("email")} 
          type="email" 
          className="mt-1 w-full rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200" 
          placeholder="name@firma.de" 
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground/80">Nachricht</label>
        <textarea 
          {...register("message")} 
          rows={5} 
          className="mt-1 w-full rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200 resize-none" 
          placeholder="Worum geht's?" 
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>
      <button 
        disabled={isSubmitting || mutation.isPending} 
        type="submit" 
        className="rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 px-5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {mutation.isPending ? "Sende…" : "Absenden"}
      </button>
    </form>
  );
}
