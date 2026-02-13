"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[150px] -ml-64 -mt-64 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[150px] -mr-64 -mb-64 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-md w-full text-center relative z-10">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] glass border border-red-500/30 text-red-400 mb-8 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
          <AlertCircle className="w-12 h-12 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" aria-hidden />
        </div>

        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase italic">
          SYSTEM <span className="text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">MALFUNCTION</span>
        </h1>

        <p className="text-slate-400 mb-12 text-xs font-black uppercase tracking-[0.2em] leading-relaxed">
          Critical error detected in neural pathways. <br />
          Attempting recovery protocol or return to base.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="h-14 px-8 glass border border-white/10 text-white hover:bg-white/5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all gap-3"
          >
            <RefreshCw className="w-4 h-4" />
            Retry Protocol
          </Button>
          <Button asChild className="h-14 px-8 bg-white text-black hover:bg-neon-cyan rounded-2xl font-black uppercase tracking-widest text-xs transition-all gap-3 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <Link href="/">
              <Home className="w-4 h-4" />
              Return to Base
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
