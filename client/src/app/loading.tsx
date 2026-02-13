import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden" aria-live="polite" aria-busy="true">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <Loader2 className="w-16 h-16 text-neon-cyan animate-spin drop-shadow-[0_0_15px_rgba(0,242,255,0.8)]" aria-hidden />
        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Initializing Neural Network...</p>
      </div>
    </div>
  );
}
