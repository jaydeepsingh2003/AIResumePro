"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, BrainCircuit, Cpu, Zap, Activity } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export const FuturisticHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
            {/* Interactive Grid Background */}
            <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />

            {/* Cinematic Glows */}
            <div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-slow"
                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px] animate-pulse-slow font-delay-2000"
                style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
            />

            <motion.div
                style={{ y: y1, opacity, scale }}
                className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-white/10 text-neon-cyan text-xs font-black mb-10 uppercase tracking-[0.3em] glow-cyan/20"
                >
                    <BrainCircuit className="w-4 h-4 animate-pulse" />
                    <span>Neural Engine v4.0 Active</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl lg:text-9xl font-black text-white leading-[0.85] mb-10 tracking-tighter"
                >
                    <span className="text-gradient-futuristic block">FORGE YOUR</span>
                    <span className="relative">
                        DIGITAL IDENTITY
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.8, duration: 1.5 }}
                            className="absolute -bottom-4 left-0 h-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-transparent rounded-full shadow-[0_0_20px_rgba(0,242,255,0.5)]"
                        />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed tracking-wide"
                >
                    Transcend the traditional resume. Our intelligence engine synthesizes your career trajectory into a high-performance narrative that bypasses algorithms and commands attention.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-8 mb-24"
                >
                    <Link href="/register">
                        <Button size="lg" className="relative h-20 px-16 rounded-full bg-white text-slate-950 text-2xl font-black overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                            <span className="relative z-10">INITIALIZE BUILD</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors" />
                            <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Button>
                    </Link>

                    <button className="flex items-center gap-4 group">
                        <div className="w-14 h-14 rounded-full glass border-white/20 flex items-center justify-center group-hover:border-neon-cyan/50 transition-colors">
                            <Zap className="w-6 h-6 text-white group-hover:text-neon-cyan transition-colors" />
                        </div>
                        <span className="font-black text-sm uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">Watch Intelligence Probe</span>
                    </button>
                </motion.div>

                {/* Cyber Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                    className="w-full max-w-6xl mx-auto relative perspective-1000"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative glass rounded-[2.5rem] border-white/10 overflow-hidden shadow-2xl backdrop-blur-3xl">
                        {/* Header UI */}
                        <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            <div className="flex-1 text-[10px] text-slate-500 font-mono text-center uppercase tracking-[0.3em]">Neural Interface // Secure_Session_742</div>
                        </div>

                        <div className="flex flex-col lg:flex-row h-[600px]">
                            {/* Dashboard Left */}
                            <div className="w-full lg:w-80 border-r border-white/10 p-8 flex flex-col gap-8 bg-black/20">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                        <span>System Health</span>
                                        <span className="text-neon-cyan">99.2%</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "92%" }}
                                            transition={{ delay: 1.5, duration: 2 }}
                                            className="h-full bg-neon-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex gap-4 items-center opacity-40">
                                            <div className="w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center">
                                                <Cpu className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-2 w-16 bg-white/10 rounded" />
                                                <div className="h-1 w-full bg-white/5 rounded" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto p-4 rounded-2xl bg-neon-cyan/5 border border-neon-cyan/20">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-neon-cyan mb-2">
                                        <Activity className="w-3 h-3" />
                                        LIVE ANALYSIS
                                    </div>
                                    <div className="font-mono text-[9px] text-slate-400 uppercase tracking-tighter leading-tight">
                                        Scanning keywords...<br />
                                        Optimizing semantic flow...<br />
                                        Bypassing ATS filters...
                                    </div>
                                </div>
                            </div>

                            {/* Main Display */}
                            <div className="flex-1 p-1 pr-1 bg-black/40 relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white opacity-5" />

                                {/* Mock Resume Frame */}
                                <div className="h-full w-full bg-white/5 rounded-[2rem] border border-white/5 p-12 relative group/resume">
                                    <div className="max-w-2xl mx-auto space-y-12">
                                        <div className="flex justify-between items-start border-b border-white/10 pb-10">
                                            <div className="space-y-4">
                                                <div className="h-10 w-64 bg-white/20 rounded-lg animate-pulse" />
                                                <div className="h-4 w-40 bg-white/10 rounded-md" />
                                            </div>
                                            <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center font-black text-2xl text-white/20">
                                                AI
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="h-4 w-32 bg-neon-cyan/20 rounded-full" />
                                            <div className="space-y-4">
                                                <div className="h-4 w-full bg-white/5 rounded" />
                                                <div className="h-4 w-[90%] bg-white/5 rounded" />
                                                <div className="h-4 w-[85%] bg-white/5 rounded" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-12 pt-8">
                                            <div className="space-y-4">
                                                <div className="h-4 w-24 bg-white/10 rounded" />
                                                <div className="h-24 w-full bg-white/5 rounded-xl border border-white/5" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="h-4 w-24 bg-white/10 rounded" />
                                                <div className="h-24 w-full bg-white/5 rounded-xl border border-white/5" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scan Line Effect */}
                                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neon-cyan/20 to-transparent animate-scan pointer-events-none" />

                                    {/* Floating Data Nodes */}
                                    <motion.div
                                        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/3 right-20 p-4 glass rounded-2xl border-neon-cyan/20 shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                                    >
                                        <div className="text-[10px] font-black text-neon-cyan mb-1 uppercase">ATS Score</div>
                                        <div className="text-2xl font-black text-white">98%</div>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute bottom-1/4 left-20 p-4 glass rounded-2xl border-neon-purple/20 shadow-[0_0_20px_rgba(188,19,254,0.2)]"
                                    >
                                        <div className="text-[10px] font-black text-neon-purple mb-1 uppercase">Clarity</div>
                                        <div className="text-2xl font-black text-white">MAX</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
