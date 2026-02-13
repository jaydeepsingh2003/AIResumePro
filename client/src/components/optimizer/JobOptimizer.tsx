"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Sparkles, Send, Target, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function JobOptimizer() {
    const [jobDescription, setJobDescription] = useState("");
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleOptimize = async () => {
        setIsOptimizing(true);
        // Simulate AI logic
        setTimeout(() => {
            setResult({
                match: 85,
                missingKeywords: ["Cloud Infrastructure", "Terraform", "System Architecture"],
                suggestions: [
                    "Highlight your experience with AWS in the first bullet point.",
                    "Mention specific Terraform modules you've built.",
                    "The tone should be more authoritative regarding architectural decisions."
                ]
            });
            setIsOptimizing(false);
        }, 2000);
    };

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <FileText className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 tracking-tight">Step 1: Paste Job Ad</h3>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">Paste the full job description you're applying for. We'll extract the hidden requirements.</p>
                        <Textarea
                            placeholder="Paste job description here..."
                            className="min-h-[300px] rounded-2xl border-slate-100 bg-slate-50/50 p-6 font-medium focus:ring-brand-indigo"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        />
                        <Button
                            className="w-full h-14 bg-indigo-600 hover:bg-slate-900 rounded-2xl font-black text-lg gap-2 shadow-xl shadow-indigo-100"
                            onClick={handleOptimize}
                            disabled={!jobDescription || isOptimizing}
                        >
                            {isOptimizing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Target className="w-5 h-5" />}
                            Tailor My Resume
                        </Button>
                    </div>

                    <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                        <h4 className="font-bold flex items-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            How it works
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-400 font-medium">
                            <li>• Extracts high-intent keywords</li>
                            <li>• Identifies soft skill requirements</li>
                            <li>• Analyzes company values & culture</li>
                            <li>• Rewrites your experiences to match</li>
                        </ul>
                    </div>
                </div>

                <div className="lg:sticky lg:top-8">
                    <AnimatePresence mode="wait">
                        {isOptimizing ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center p-24 bg-white rounded-[3rem] border border-slate-100 shadow-xl"
                            >
                                <div className="w-20 h-20 relative mb-8">
                                    <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
                                    <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin" />
                                    <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-indigo-600 animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">AI Analysis in Progress</h3>
                                <p className="text-slate-500 mt-2">Correlating your profile with 24 job requirements...</p>
                            </motion.div>
                        ) : result ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-6"
                            >
                                <div className="p-10 bg-indigo-600 rounded-[3rem] text-white text-center shadow-2xl shadow-indigo-100">
                                    <div className="text-6xl font-black mb-2">{result.match}%</div>
                                    <div className="text-sm font-black uppercase tracking-[0.2em] text-indigo-200">Job Compatibility Match</div>
                                </div>

                                <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Missing Keywords</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {result.missingKeywords.map((kw: string) => (
                                            <span key={kw} className="px-4 py-2 bg-red-50 text-red-500 rounded-xl font-bold text-xs">{kw}</span>
                                        ))}
                                    </div>

                                    <div className="h-px bg-slate-50 w-full" />

                                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Tailoring Strategy</h4>
                                    <ul className="space-y-4">
                                        {result.suggestions.map((s: string, i: number) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                                </div>
                                                <span className="text-sm font-medium text-slate-600">{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button className="w-full h-14 bg-slate-900 rounded-2xl font-black text-md">Apply Suggestions Automatically</Button>
                            </motion.div>
                        ) : (
                            <div className="flex flex-col items-center justify-center p-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-100 text-center">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-slate-200" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Analysis Preview</h3>
                                <p className="text-slate-500 mt-2 max-w-[200px] text-sm font-medium">Results will appear here once you paste a job description.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
