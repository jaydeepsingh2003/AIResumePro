"use client";

import { Navbar } from "@/components/layout/Navbar";
import { QuantumPricing } from "@/components/landing/QuantumPricing";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Instagram, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-neon-cyan/30 selection:text-white">
      <Navbar />

      <main id="main-content" className="flex-1 pt-32">
        <QuantumPricing />

        {/* CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[150px]" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-[4rem] p-16 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]"
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
                NEED A CUSTOM <br />
                <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">PROTOCOL?</span>
              </h2>
              <p className="text-slate-400 mb-12 text-xs font-black uppercase tracking-[0.2em] leading-relaxed">
                Enterprise-grade neural networks for teams. <br />
                Unlimited nodes. Priority support. Custom integrations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/#pricing">
                  <Button className="h-16 px-12 bg-white text-black hover:bg-neon-cyan rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    Initiate Contact Protocol
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="h-16 px-12 glass border-white/10 text-white hover:bg-white/5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">
                    <ArrowLeft className="w-4 h-4 mr-3" />
                    Return to Base
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1">
              <Link href="/" className="flex items-center gap-4 mb-10">
                <div className="bg-white/5 p-2 rounded-xl border border-white/10 shadow-2xl">
                  <Sparkles className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="font-black text-2xl tracking-tighter text-white uppercase">AI Resume Pro</span>
              </Link>
              <p className="text-slate-500 font-light mb-10 leading-relaxed text-sm">Empowering the workforce of tomorrow with autonomous career intelligence.</p>
              <div className="flex items-center gap-8">
                <Twitter className="w-5 h-5 text-slate-600 hover:text-neon-cyan cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-slate-600 hover:text-neon-cyan cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-slate-600 hover:text-neon-cyan cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-16">
              <div>
                <h4 className="font-black text-white mb-10 uppercase text-[10px] tracking-[0.4em]">Intelligence</h4>
                <ul className="space-y-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <li><Link href="/dashboard/builder" className="hover:text-neon-cyan transition">Neural Builder</Link></li>
                  <li><Link href="/dashboard/ats-score" className="hover:text-neon-cyan transition">ATS Analytics</Link></li>
                  <li><Link href="/dashboard/job-optimizer" className="hover:text-neon-cyan transition">Optimizer</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-white mb-10 uppercase text-[10px] tracking-[0.4em]">Resources</h4>
                <ul className="space-y-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <li><Link href="/templates" className="hover:text-neon-cyan transition">Blueprints</Link></li>
                  <li><Link href="/#features" className="hover:text-neon-cyan transition">Neural Components</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-white mb-10 uppercase text-[10px] tracking-[0.4em]">Platform</h4>
                <ul className="space-y-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <li><Link href="/register" className="hover:text-neon-cyan transition">Access</Link></li>
                  <li><Link href="/login" className="hover:text-neon-cyan transition">Terminal</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">
              © 2026 AI Resume Pro // Neural Career Network
            </div>
            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
              <span className="text-[9px] font-black text-neon-cyan uppercase tracking-widest">All Core Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
