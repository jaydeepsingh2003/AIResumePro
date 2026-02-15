"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, Brain, Sword, Mic, Video, Users, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const prepModes = [
    {
        id: 'behavioral',
        title: "Behavioral Matrix",
        desc: "Simulate high-pressure soft-skill interactions.",
        icon: MessageSquare,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        id: 'technical',
        title: "Algorithm Combat",
        desc: "Live synthetic coding & system architecture challenges.",
        icon: Sword,
        color: "text-red-400",
        bg: "bg-red-400/10",
        border: "border-red-400/20"
    },
    {
        id: 'company',
        title: "Deep Infiltration",
        desc: "Targeted reconnaissance for specific Fortune 500s.",
        icon: Brain,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20"
    },
    {
        id: 'mock',
        title: "Simulation Live",
        desc: "Full-scale synthetic interview with real-time feedback.",
        icon: Video,
        color: "text-neon-cyan",
        bg: "bg-neon-cyan/10",
        border: "border-neon-cyan/20"
    }
];

export default function InterviewPrepPage() {
    return (
        <div className="flex flex-col h-full bg-[#050505] min-h-screen text-white p-6 lg:p-10 space-y-10 selection:bg-emerald-400/30">
            {/* Minimal Sub-header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.03] pb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Combat Readiness</span>
                    </div>
                    <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                        Simulation <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">Lab.</span>
                    </h1>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end">
                        <div className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Training Level</div>
                        <div className="text-xl font-black italic tracking-tighter">PHASE 4</div>
                    </div>
                    <Button className="h-10 px-8 bg-emerald-400 text-black hover:bg-white rounded-xl font-black text-[9px] uppercase tracking-widest transition-all">
                        Resume Training
                    </Button>
                </div>
            </div>

            {/* Grid of modes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {prepModes.map((mode, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className={`group relative p-10 rounded-[3rem] glass border ${mode.border} overflow-hidden transition-all duration-500 cursor-pointer hover:bg-white/[0.02]`}
                    >
                        <div className={`absolute top-0 right-0 w-64 h-64 ${mode.bg} rounded-full blur-[100px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity`} />

                        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-10">
                            <div className={`p-6 rounded-[2rem] glass border ${mode.border} ${mode.color} shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                <mode.icon className="w-10 h-10" />
                            </div>
                            <div className="space-y-4 pt-2">
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none group-hover:text-white transition-colors">{mode.title}</h3>
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed max-w-xs">{mode.desc}</p>
                                <div className="pt-4 flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] font-bold text-slate-800 uppercase tracking-widest">Success Rate</span>
                                        <span className="text-sm font-black italic">84%</span>
                                    </div>
                                    <Button variant="ghost" className="text-[9px] font-black text-white hover:text-emerald-400 uppercase tracking-widest p-0">
                                        INITIALIZE &rarr;
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom HUD */}
            <section className="pt-10">
                <div className="p-8 rounded-[2.5rem] bg-emerald-400/5 border border-emerald-400/10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-emerald-400/10 rounded-2xl flex items-center justify-center">
                            <Mic className="w-6 h-6 text-emerald-400 animate-pulse" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xs font-black uppercase tracking-widest">Voice Analysis Ready</h4>
                            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Spectral detection at ultra-low latency.</p>
                        </div>
                    </div>
                    <div className="flex-1 max-w-md h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="h-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                        />
                    </div>
                    <Button variant="outline" className="h-12 px-8 rounded-xl border-emerald-400/20 text-emerald-400 font-black text-[10px] uppercase tracking-widest">Calibrate Engine</Button>
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
