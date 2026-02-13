"use client";

import { motion } from "framer-motion";
import {
    CheckCircle2,
    XCircle,
    AlertCircle,
    Sparkles,
    ChevronRight,
    Search,
    Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StructureHeatmap } from "./StructureHeatmap";

export const ATSResultsView = () => {
    const scores = [
        { label: "Content Quality", score: 92, color: "bg-emerald-500" },
        { label: "Formatting", score: 85, color: "bg-blue-500" },
        { label: "Keyword Density", score: 45, color: "bg-red-500" },
        { label: "Impact Metrics", score: 78, color: "bg-amber-500" }
    ];

    const keywords = [
        { name: "Cloud Infrastructure", status: "missing", impact: "High" },
        { name: "Kubernetes", status: "found", impact: "Medium" },
        { name: "Terraform", status: "missing", impact: "High" },
        { name: "Agile Leadership", status: "found", impact: "Low" }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
                {/* Main Score Hero */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48" />

                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="relative">
                            <svg className="w-48 h-48 transform -rotate-90">
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    className="text-slate-800"
                                />
                                <motion.circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    strokeDasharray={2 * Math.PI * 88}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - 0.74) }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="text-indigo-500"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-5xl font-black">74%</span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ATS Match</span>
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black tracking-tight italic">Good, but could be legendary.</h3>
                                <p className="text-slate-400 font-medium">Your resume passes basic filters but lacks critical keywords for 'Senior Dev' roles.</p>
                            </div>
                            <Button className="bg-white text-slate-950 hover:bg-slate-100 rounded-2xl h-14 px-8 font-black gap-2 transition-transform hover:scale-105">
                                <Sparkles className="w-5 h-5 text-indigo-600" />
                                Fix Automatically with AI
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Score Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {scores.map((s, idx) => (
                        <div key={idx} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-black text-slate-900 uppercase text-xs tracking-widest">{s.label}</span>
                                <span className={`font-black ${s.score < 50 ? 'text-red-500' : 'text-emerald-500'}`}>{s.score}%</span>
                            </div>
                            <Progress value={s.score} className={`h-2 ${s.color}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar: Keyword Analysis */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                            <Search className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Keyword Audit</h3>
                    </div>

                    <div className="space-y-4">
                        {keywords.map((kw, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 group hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    {kw.status === 'found' ? (
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    ) : (
                                        <XCircle className="w-5 h-5 text-red-400" />
                                    )}
                                    <span className={`font-bold ${kw.status === 'missing' ? 'text-slate-400' : 'text-slate-900'}`}>{kw.name}</span>
                                </div>
                                <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${kw.impact === 'High' ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-400'}`}>
                                    {kw.impact}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button variant="ghost" className="w-full mt-8 text-indigo-600 font-black uppercase tracking-widest text-xs h-12 hover:bg-indigo-50">
                        Show All 42 Keywords
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>

                {/* Heatmap Section */}
                <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Brain className="w-6 h-6" />
                        <h3 className="font-black text-lg tracking-tight">AI Structure Audit</h3>
                    </div>
                    <StructureHeatmap />
                </div>
            </div>
        </div>
    );
};
