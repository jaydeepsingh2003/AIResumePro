"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Senior Software Engineer at Google";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Visual Design Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px] -z-10 -mr-96 -mt-96" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] -z-10 -ml-48 -mb-48" />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-black mb-8 uppercase tracking-widest"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI-Powered Career Intelligence</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter"
                    >
                        Build a <span className="text-indigo-600">Job-Winning</span> <br />
                        Resume with AI.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto mb-12"
                    >
                        Land 3x more interviews with our ATS-optimized, AI-driven platform.
                        Professional resumes designed for humans, optimized for machines.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
                    >
                        <Link href="/register">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white h-20 px-12 rounded-[2rem] text-xl font-black shadow-2xl shadow-indigo-200 group transition-all hover:scale-[1.02]">
                                Build My Resume Free
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/ats-score">
                            <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-lg font-semibold border-slate-200">
                                Check ATS Score
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap justify-center items-center gap-8 mb-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    >
                        {["Google", "Meta", "Amazon", "Netflix", "Microsoft"].map(brand => (
                            <span key={brand} className="text-xl font-bold tracking-tighter">{brand}</span>
                        ))}
                    </motion.div>

                    {/* Interactive Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="w-full max-w-5xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] -z-10 group-hover:bg-indigo-500/20 transition-colors" />

                        <div className="glass rounded-[3rem] p-4 lg:p-6 shadow-2xl border border-white/40 overflow-hidden">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-inner flex flex-col lg:flex-row min-h-[600px]">
                                {/* Editor Side - Left */}
                                <div className="w-full lg:w-[400px] bg-slate-50 border-r border-slate-100 p-8 flex flex-col gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="space-y-4 pt-4">
                                        <div className="h-4 w-32 bg-slate-200 rounded-md" />
                                        <div className="h-12 w-full bg-white border border-slate-200 rounded-xl px-4 flex items-center text-slate-800 font-medium whitespace-nowrap overflow-hidden">
                                            {typedText}<span className="w-[3px] h-6 bg-indigo-600 animate-pulse ml-0.5" />
                                        </div>
                                        <div className="h-4 w-24 bg-slate-200 rounded-md mt-8" />
                                        <div className="space-y-2">
                                            <div className="h-10 w-full bg-white border border-slate-200 rounded-xl" />
                                            <div className="h-10 w-full bg-white border border-slate-200 rounded-xl" />
                                            <div className="h-32 w-full bg-white border border-slate-200 rounded-xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Side - Right */}
                                <div className="flex-1 bg-white p-12 relative overflow-hidden">
                                    <div className="h-full border border-slate-100 rounded-lg p-10 space-y-8">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-4">
                                                <div className="h-8 w-48 bg-slate-900 rounded-md" />
                                                <div className="h-4 w-32 bg-slate-400 rounded-md" />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="h-6 w-16 bg-indigo-600/10 rounded-full" />
                                                <div className="h-6 w-16 bg-emerald-50 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="h-px w-full bg-slate-100" />
                                        <div className="space-y-4">
                                            <div className="h-3 w-full bg-slate-100 rounded" />
                                            <div className="h-3 w-5/6 bg-slate-100 rounded" />
                                            <div className="h-3 w-4/6 bg-slate-100 rounded" />
                                        </div>
                                        <div className="pt-4 space-y-12">
                                            <div className="space-y-4">
                                                <div className="h-4 w-24 bg-slate-900 rounded" />
                                                <div className="h-32 w-full bg-slate-50 rounded-xl" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating AI Widgets */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute top-20 right-10 p-6 glass rounded-3xl shadow-2xl border-indigo-500/10 flex flex-col gap-3 max-w-[200px]"
                                    >
                                        <div className="flex items-center gap-2 text-xs font-black text-indigo-600">
                                            <Sparkles className="w-4 h-4" />
                                            <span>AI OPTIMIZER</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-bold leading-tight">Keywords matched for "Google Software Engineer"</p>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[92%] bg-indigo-600" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                        className="absolute bottom-20 left-10 p-6 glass rounded-[1.5rem] shadow-2xl border-emerald-500/20 flex flex-col items-center gap-2"
                                    >
                                        <div className="text-3xl font-black text-emerald-600">88%</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">ATS Score</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
