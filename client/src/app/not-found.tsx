"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-cyan/10 rounded-full blur-[150px] -mr-64 -mt-64 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[150px] -ml-64 -mb-64 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-md w-full text-center relative z-10">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-[2.5rem] glass border border-white/10 text-slate-600 mb-8 shadow-xl">
          <FileQuestion className="w-14 h-14" aria-hidden />
        </div>

        <h1 className="text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
          NODE <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">NOT FOUND</span>
        </h1>

        <p className="text-slate-400 mb-12 text-xs font-black uppercase tracking-[0.2em] leading-relaxed">
          The requested neural pathway does not exist <br />
          or has been relocated to another sector.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.back()}
            className="h-14 px-8 glass border border-white/10 text-white hover:bg-white/5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Reverse Path
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
