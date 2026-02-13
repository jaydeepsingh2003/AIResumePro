"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Zap, Search, Shield, Globe, Terminal, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    {
        title: "Neural Content Synthesis",
        desc: "Our LLM-4 powered engine doesn't just write; it synthesizes your experiences into high-impact lexical vectors optimized for human recruiters and silicon algorithms.",
        icon: <Cpu className="w-8 h-8 text-neon-cyan" />,
        stat: "4x Match",
        color: "from-neon-cyan/20 to-transparent",
        borderColor: "border-neon-cyan/30"
    },
    {
        title: "ATS Infiltration Layer",
        desc: "Reverse-engineered for Workday, Greenhouse, and Lever. We embed invisible semantic markers that elevate your profile to the top of the automated stack.",
        icon: <Search className="w-8 h-8 text-neon-purple" />,
        stat: "99.9% Pass",
        color: "from-neon-purple/20 to-transparent",
        borderColor: "border-neon-purple/30"
    },
    {
        title: "Dynamic Role Tailoring",
        desc: "One resume, infinite variations. Our engine re-aligns your entire skill constellation for every specific job description in nanoseconds.",
        icon: <Zap className="w-8 h-8 text-cyber-pink" />,
        stat: "Instant",
        color: "from-cyber-pink/20 to-transparent",
        borderColor: "border-cyber-pink/30"
    },
    {
        title: "Predictive Interview Analytics",
        desc: "Based on your final resume, we generate the exact questions you'll be asked, simulated by AI trained on 10M+ real-world interview transcripts.",
        icon: <Eye className="w-8 h-8 text-emerald-400" />,
        stat: "Pre-Solved",
        color: "from-emerald-400/20 to-transparent",
        borderColor: "border-emerald-400/30"
    }
];

export const IntelligenceEngine = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16 sm:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase mb-4 sm:mb-8"
                    >
                        <Terminal className="w-4 h-4" />
                        Core Engineering Modules
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tighter">
                        THE <span className="text-neon-cyan">INTELLIGENCE</span> ENGINE
                    </h2>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        A proprietary stack of career-acceleration technologies designed to bypass the gatekeepers of the 21st century.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {features.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`group relative p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] glass border ${f.borderColor} overflow-hidden`}
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8 sm:mb-12">
                                    <div className="p-4 sm:p-5 rounded-2xl glass border-white/5 shadow-2xl group-hover:scale-110 transition-transform">
                                        {f.icon}
                                    </div>
                                    <div className="text-[9px] sm:text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/5">
                                        Status: Optimized
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 tracking-tight group-hover:text-neon-cyan transition-colors">{f.title}</h3>
                                <p className="text-slate-400 font-light leading-relaxed mb-6 sm:mb-10 text-base sm:text-lg">
                                    {f.desc}
                                </p>

                                <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-white/5">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
                                        <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Efficiency Rating</span>
                                    </div>
                                    <span className="text-lg sm:text-xl font-black text-white">{f.stat}</span>
                                </div>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                        </motion.div>
                    ))}
                </div>

                {/* Performance Dashboard CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 sm:mt-32 p-8 sm:p-16 rounded-[3rem] sm:rounded-[4rem] bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-transparent border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block">
                        <Globe className="w-64 h-64 text-white" />
                    </div>

                    <div className="relative z-10 max-w-2xl text-center sm:text-left">
                        <h4 className="text-3xl sm:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">Experience the AI Laboratory</h4>
                        <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                            Step into the cockpit of your career. Our interactive workspace provides real-time feedback and predictive modeling for every move you make.
                        </p>
                        <Button className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-xl sm:rounded-2xl bg-white text-black font-black hover:bg-neon-cyan transition-colors">
                            ENTER COMMAND CENTER <ArrowRight className="ml-3 w-5 h-5 flex-shrink-0" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
