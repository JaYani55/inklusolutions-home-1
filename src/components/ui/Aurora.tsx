// src/components/ui/Aurora.tsx
import React from "react";

/**
 * Sanft animierter Aurora-/Mesh-Background (nur Deko, pointer-events:none)
 */
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Farbige Mesh-Grundfläche */}
      <div className="absolute inset-0 bg-slate-950 bg-mesh" />

      {/* Weiche animierte „Blobs“ */}
      <div className="absolute -top-24 -left-24 w-[48rem] h-[48rem] rounded-full blur-3xl opacity-40 animate-blob"
           style={{ background: "radial-gradient(circle at 30% 30%, rgba(57,178,193,.45), transparent 60%)" }} />
      <div className="absolute -bottom-32 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-35 animate-blob [animation-duration:22s]"
           style={{ background: "radial-gradient(circle at 70% 40%, rgba(248,77,66,.40), transparent 60%)" }} />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30 animate-blob [animation-duration:26s]"
           style={{ background: "radial-gradient(circle at 50% 60%, rgba(251,193,44,.35), transparent 60%)" }} />

      {/* dezentes Dots-Overlay als Textur */}
      <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-soft-light bg-dots [background-size:22px_22px]" />
    </div>
  );
}