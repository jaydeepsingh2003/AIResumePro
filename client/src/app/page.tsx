"use client";

import { Navbar } from "@/components/layout/Navbar";
import { FuturisticHero } from "@/components/landing/FuturisticHero";
import { IntelligenceEngine } from "@/components/landing/IntelligenceEngine";
import { QuantumPricing } from "@/components/landing/QuantumPricing";
import { LiveResumeCounter } from "@/components/landing/LiveResumeCounter";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Twitter, Linkedin, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-neon-cyan/30 selection:text-white">
      <Navbar />
      <LiveResumeCounter />

      <main id="main-content" className="flex-1">
        <FuturisticHero />

        {/* Cinematic Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <IntelligenceEngine />

        {/* Templates Showcase - Futuristic Version */}
        <section id="templates" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 sm:mb-24 gap-8 sm:gap-12">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[10px] sm:text-[10px] font-black text-neon-purple uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-4"
                >
                  Professional Templates
                </motion.div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">Build a <span className="text-neon-purple">Better Resume.</span></h2>
                <p className="text-base sm:text-lg text-slate-500 font-light max-w-xl">Designed to help you stand out and get hired faster.</p>
              </div>
              <Link href="/templates" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-11 px-6 rounded-xl glass border-white/10 text-white font-bold hover:bg-white/5 transition-all text-xs uppercase tracking-wider">View All Templates</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  id: 'sidebar',
                  name: "Modern Professional",
                  tag: "Most Popular",
                  color: "border-neon-cyan/20"
                },
                {
                  id: 'single',
                  name: "ATS Friendly",
                  tag: "Simple & Clean",
                  color: "border-white/10"
                },
                {
                  id: 'double',
                  name: "Creative Studio",
                  tag: "For Designers",
                  color: "border-neon-purple/20"
                },
                {
                  id: 'minimal',
                  name: "Minimalist",
                  tag: "Clean Layout",
                  color: "border-cyber-pink/20"
                }
              ].map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="group relative"
                >
                  <div className={`aspect-[3/4.2] glass rounded-[2rem] sm:rounded-[2.5rem] border ${item.color} overflow-hidden group-hover:shadow-[0_0_50px_rgba(0,242,255,0.1)] transition-all duration-500 relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 text-center">
                      <div className="space-y-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <div className="h-1 w-10 sm:w-12 bg-white/20 mx-auto rounded-full" />
                        <div className="h-24 sm:h-32 w-20 sm:w-24 bg-white/5 border border-white/10 rounded-xl" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 sm:p-8 text-center text-white backdrop-blur-md">
                      <Link href={`/builder/new?layout=${item.id}`} className="w-full">
                        <Button className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white text-slate-950 hover:bg-neon-cyan hover:text-white font-black transition-all text-xs uppercase">Use Template</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8 text-center sm:text-left">
                    <div className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.tag}</div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight">{item.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <QuantumPricing />

        {/* Final CTA Section - Futuristic */}
        <section className="py-24 sm:py-48 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              className="glass rounded-[3rem] sm:rounded-[5rem] p-8 sm:p-16 lg:p-32 text-center relative overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,242,255,0.1)]"
            >
              <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-neon-cyan/10 rounded-full blur-[80px] sm:blur-[120px] -mr-32 sm:-mr-64 -mt-32 sm:-mt-64" />
              <div className="absolute bottom-0 left-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-neon-purple/10 rounded-full blur-[80px] sm:blur-[120px] -ml-32 sm:-ml-64 -mb-32 sm:-mb-64" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tighter leading-tight uppercase">Your Future <br /> <span className="text-gradient-futuristic">Starts Here.</span></h2>
                <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">Join 250,000+ job seekers who found their dream jobs using our platform.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-neon-cyan text-black h-16 sm:h-20 px-10 sm:px-16 text-xl sm:text-2xl font-black rounded-full transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                      Get Started Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

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
                <h4 className="font-black text-white mb-10 uppercase text-[10px] tracking-[0.4em]">Features</h4>
                <ul className="space-y-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <li><Link href="/dashboard/builder" className="hover:text-neon-cyan transition">Resume Builder</Link></li>
                  <li><Link href="/dashboard/ats-score" className="hover:text-neon-cyan transition">ATS Score</Link></li>
                  <li><Link href="/dashboard/job-optimizer" className="hover:text-neon-cyan transition">Job Match</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-white mb-10 uppercase text-[10px] tracking-[0.4em]">Resources</h4>
                <ul className="space-y-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <li><Link href="/templates" className="hover:text-neon-cyan transition">Templates</Link></li>
                  <li><Link href="/#features" className="hover:text-neon-cyan transition">All Features</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-white mb-10 uppercase text-[10px] tracking-[0.4em]">Account</h4>
                <ul className="space-y-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <li><Link href="/register" className="hover:text-neon-cyan transition">Register</Link></li>
                  <li><Link href="/login" className="hover:text-neon-cyan transition">Login</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">
              © 2026 AI Resume Pro // Resume Builder Platform
            </div>
            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
              <span className="text-[9px] font-black text-neon-cyan uppercase tracking-widest">Systems Online</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
