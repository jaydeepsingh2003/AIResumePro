"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export const ATSVisualDemo = () => {
    const [isOptimized, setIsOptimized] = useState(false);

    return (
        <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[600px] bg-brand-indigo/10 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">
                            Don't get ghosted by the <span className="text-brand-indigo">Machine.</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                            Recruiters at top companies use ATS (Applicant Tracking Systems) to filter 90% of resumes before a human ever sees them. We built an AI that thinks like the machine.
                        </p>

                        <ul className="space-y-6 mb-12">
                            {[
                                "Industry-specific keyword injection",
                                "Semantic relevance scoring",
                                "Formatting error detection",
                                "Role-specific impact auditing"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-slate-300 font-bold">
                                    <CheckCircle2 className="w-6 h-6 text-brand-indigo" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button
                            onClick={() => setIsOptimized(!isOptimized)}
                            className="bg-brand-indigo hover:bg-brand-indigo/90 h-14 px-8 rounded-xl font-bold gap-2 text-lg"
                        >
                            <Sparkles className="w-5 h-5" />
                            {isOptimized ? "Reset Demo" : "Simulate AI Polish"}
                        </Button>
                    </div>

                    <div className="relative">
                        <motion.div
                            animate={{ opacity: isOptimized ? 0 : 1, x: isOptimized ? -50 : 0 }}
                            className={`p-8 glass-dark rounded-[2.5rem] border-red-500/20 shadow-2xl ${isOptimized ? 'pointer-events-none' : ''}`}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-black text-white">Before AI</h3>
                                <div className="text-3xl font-black text-red-500">42%</div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl bg-white/5 flex items-center gap-4 border border-red-500/10">
                                    <XCircle className="w-5 h-5 text-red-500" />
                                    <div className="space-y-1">
                                        <div className="h-2 w-32 bg-white/20 rounded" />
                                        <p className="text-xs text-slate-500">Missing 'Cloud Infrastructure' keyword</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 flex items-center gap-4 border border-red-500/10">
                                    <AlertCircle className="w-5 h-5 text-amber-500" />
                                    <div className="space-y-1">
                                        <div className="h-2 w-24 bg-white/20 rounded" />
                                        <p className="text-xs text-slate-500">Weak action verbs detected</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{
                                opacity: isOptimized ? 1 : 0,
                                scale: isOptimized ? 1 : 0.9,
                                x: isOptimized ? 0 : 50
                            }}
                            className="absolute inset-0 p-8 glass-dark rounded-[2.5rem] border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.2)]"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-black text-white">After AI</h3>
                                <div className="text-4xl font-black text-emerald-500">95%</div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 flex items-center gap-4 border border-emerald-500/20">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <div className="space-y-1">
                                        <div className="h-2 w-48 bg-emerald-500/40 rounded" />
                                        <p className="text-xs text-emerald-300 font-bold">Injected 14 high-impact keywords</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-blue-500/10 flex items-center gap-4 border border-blue-500/20">
                                    <Sparkles className="w-5 h-5 text-blue-400" />
                                    <div className="space-y-1">
                                        <div className="h-2 w-36 bg-blue-500/40 rounded" />
                                        <p className="text-xs text-blue-300 font-bold">Rewrote summary for executive tone</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-500/20 p-2 rounded-xl text-center text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                    PASSES GOOGLE RECRUITER ATS V6.2
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
