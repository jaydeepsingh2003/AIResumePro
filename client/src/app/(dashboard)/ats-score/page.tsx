"use client";

import { motion } from "framer-motion";
import { Target, Search, Zap, ChevronLeft, ShieldCheck, Activity, Cpu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AtsScorePage() {
    return (
        <div className="flex flex-col h-full bg-[#050505] min-h-screen text-white p-6 lg:p-10 space-y-10 selection:bg-neon-cyan/30">
            {/* Minimal Sub-header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.03] pb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Audit Protocol</span>
                    </div>
                    <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                        Neural <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]">Scan.</span>
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-slate-500 hover:text-white uppercase text-[9px] font-black tracking-widest">
                        Export Audit
                    </Button>
                    <Button className="h-10 px-6 bg-neon-cyan text-black hover:bg-white rounded-xl font-black text-[9px] uppercase tracking-widest transition-all">
                        Initialize Full Scan
                    </Button>
                </div>
            </div>

            {/* Main Diagnostic Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Score Orb */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-5 h-[500px] glass rounded-[3rem] border border-white/5 flex flex-col items-center justify-center p-12 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-neon-cyan/5 blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
                    <div className="relative z-10 text-center">
                        <div className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.5em] mb-6">Aggregate Compliance</div>
                        <div className="text-[8rem] font-black italic tracking-tighter text-white leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            84<span className="text-neon-cyan">%</span>
                        </div>
                        <div className="mt-8 inline-flex items-center gap-2 px-6 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                            <ShieldCheck className="w-4 h-4" />
                            Protocol Pass
                        </div>
                    </div>

                    {/* HUD elements */}
                    <div className="absolute bottom-10 left-10 p-4 border-l border-white/10 space-y-1">
                        <div className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Latency</div>
                        <div className="text-xs font-black italic">14ms</div>
                    </div>
                    <div className="absolute bottom-10 right-10 p-4 border-r border-white/10 text-right space-y-1">
                        <div className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Confidence</div>
                        <div className="text-xs font-black italic">99.8%</div>
                    </div>
                </motion.div>

                {/* Audit Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { title: "Syntax Precision", val: "92%", desc: "Lexical structure matches industry-standard parsers.", color: "text-neon-cyan" },
                        { title: "Keyword Saturation", val: "45%", desc: "Missing 8 high-value tokens for Senior UI Roles.", color: "text-red-500" },
                        { title: "Formatting Integrity", val: "100%", desc: "Universal accessibility metrics are within range.", color: "text-emerald-400" },
                        { title: "Logical Hierarchy", val: "78%", desc: "Header prioritization needs neural recalibration.", color: "text-amber-500" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 glass rounded-[2.5rem] border border-white/5 flex flex-col justify-between group hover:bg-white/[0.03] transition-all"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.title}</h3>
                                    <Activity className={`w-4 h-4 ${item.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                                </div>
                                <div className={`text-4xl font-black italic tracking-tighter ${item.color}`}>{item.val}</div>
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider leading-relaxed pr-6">{item.desc}</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <button className="text-[9px] font-black text-white hover:text-neon-cyan transition-colors uppercase tracking-widest underline decoration-white/10">Repair Instruction &rarr;</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Matrix View section */}
            <section className="pt-10">
                <div className="flex items-center gap-4 mb-8">
                    <Cpu className="w-5 h-5 text-slate-700" />
                    <h2 className="text-lg font-black uppercase italic tracking-widest">Binary Signal Trace</h2>
                    <div className="h-px flex-1 bg-white/5" />
                </div>
                <div className="p-10 glass rounded-[3rem] border border-white/5 bg-white/[0.01]">
                    <div className="grid grid-cols-12 gap-1 h-32">
                        {Array.from({ length: 48 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: "20%" }}
                                animate={{ height: `${Math.random() * 80 + 20}%` }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                className="col-span-1 bg-neon-cyan/20 rounded-full group-hover:bg-neon-cyan/40"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .glass {
                    background: rgba(255, 255, 255, 0.01);
                    backdrop-filter: blur(20px);
                }
            `}</style>
        </div>
    );
}
