"use client";

import { motion } from "framer-motion";
import { Zap, Target, Search, FileText, Cpu, ChevronRight, Activity, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JobOptimizerPage() {
    return (
        <div className="flex flex-col h-full bg-[#050505] min-h-screen text-white p-6 lg:p-10 space-y-10 selection:bg-neon-purple/30">
            {/* Minimal Sub-header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.03] pb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Engine Protocol</span>
                    </div>
                    <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                        Pulse <span className="text-neon-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.4)]">Optimizer.</span>
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/20 rounded-xl">
                        <Activity className="w-4 h-4 text-neon-purple" />
                        <span className="text-[10px] font-black text-neon-purple uppercase tracking-widest">Neural Load: 42%</span>
                    </div>
                </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 h-full">
                {/* Inputs Column */}
                <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Target Selection */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-10 glass rounded-[3rem] border border-white/5 space-y-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-4">
                                <Search className="w-6 h-6 text-neon-purple" />
                                <h3 className="text-xl font-black uppercase italic tracking-tighter leading-none">Target Script</h3>
                            </div>
                            <textarea
                                placeholder="PASTE JOB SPECIFICATION HERE..."
                                className="w-full h-48 bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 focus:outline-none focus:border-neon-purple/50 transition-all custom-scrollbar resize-none"
                            />
                            <div className="flex justify-between items-center text-[8px] font-black text-slate-800 uppercase tracking-widest">
                                <span>Chars: 0</span>
                                <span>Entropy: Low</span>
                            </div>
                        </motion.div>

                        {/* Node Selection */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-10 glass rounded-[3rem] border border-white/5 space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <Cpu className="w-6 h-6 text-neon-cyan" />
                                <h3 className="text-xl font-black uppercase italic tracking-tighter leading-none">Source Node</h3>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:bg-white/[0.06] cursor-pointer transition-all active:scale-[0.98]">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                                <FileText className="w-4 h-4 text-slate-600" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest">Resume Node #{i + 102}</span>
                                        </div>
                                        <div className="w-4 h-4 rounded-full border border-white/10" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex justify-center pt-4">
                        <Button className="h-20 w-full rounded-[2rem] bg-gradient-to-r from-neon-purple to-cyber-pink hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_50px_rgba(188,19,254,0.3)] font-black uppercase italic tracking-[0.2em] group overflow-hidden relative">
                            <motion.div
                                className="absolute inset-0 bg-white/10"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.8 }}
                            />
                            <Wand2 className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform" />
                            Synthesize Optimization
                        </Button>
                    </div>
                </div>

                {/* Real-time Insights Sidebar */}
                <div className="lg:col-span-12 xl:col-span-4 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black uppercase italic tracking-widest">Predictive Feed</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-neon-purple animate-ping" />
                            <span className="text-[10px] font-black text-neon-purple uppercase tracking-widest">Syncing</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { title: "Gap Threshold", val: "Critical", desc: "Target requires 4 years of 'Next.js'—Node 102 only traces 2 years.", color: "text-red-500" },
                            { title: "Sentiment Match", val: "Optimal", desc: "Node vocabulary aligns with target's aggressive culture.", color: "text-emerald-400" },
                            { title: "Infiltration Path", val: "Calculated", desc: "Keyword injection recommended in 'Experience' matrix.", color: "text-neon-purple" }
                        ].map((insight, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 10 }}
                                className="p-8 glass rounded-[2.5rem] border border-white/5 space-y-4 shadow-xl"
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{insight.title}</h4>
                                    <span className={`text-[10px] font-black uppercase italic tracking-tighter ${insight.color}`}>{insight.val}</span>
                                </div>
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed pr-6">{insight.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 rounded-full blur-[60px] opacity-40 -mr-16 -mt-16" />
                        <h4 className="text-lg font-black uppercase italic tracking-tighter mb-4 text-white">Auto-Rewrite Node</h4>
                        <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-8 leading-relaxed">Let AI automatically restructure your node to fit this target exactly.</p>
                        <Button className="w-full h-14 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all">Enable Auto-Pilot</Button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .glass {
                    background: rgba(255, 255, 255, 0.01);
                    backdrop-filter: blur(20px);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(188, 19, 254, 0.2);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
