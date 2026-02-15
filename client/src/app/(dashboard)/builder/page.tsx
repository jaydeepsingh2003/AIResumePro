"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchResumes } from "@/lib/api";
import { Plus, FileText, ChevronRight, Search, Layout, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BuilderPage() {
    const { data: resumes, isLoading } = useQuery({
        queryKey: ["resumes"],
        queryFn: fetchResumes,
    });

    return (
        <div className="flex flex-col h-full bg-[#050505] min-h-screen text-white p-6 lg:p-10 space-y-10 selection:bg-neon-purple/30">
            {/* Minimal Sub-header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.03] pb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Architecture Hub</span>
                    </div>
                    <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                        Matrix <span className="text-neon-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.4)]">Build.</span>
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/builder/new">
                        <Button className="h-12 px-8 bg-neon-purple text-white hover:bg-white hover:text-black rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(188,19,254,0.2)]">
                            <Plus className="w-4 h-4 mr-2" />
                            Initialize Node
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Grid of Resumes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* Create New Card - Cyber Version */}
                <Link href="/builder/new">
                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="h-full aspect-[4/5] rounded-[2.5rem] border-2 border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center p-10 group hover:border-neon-purple/30 transition-all cursor-pointer"
                    >
                        <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-neon-purple/10 transition-colors">
                            <Plus className="w-10 h-10 text-slate-700 group-hover:text-neon-purple transition-colors" />
                        </div>
                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-slate-700 group-hover:text-white transition-colors">New Sequence</h3>
                        <p className="text-[9px] font-bold text-slate-800 uppercase tracking-widest mt-2 group-hover:text-slate-500 transition-colors">Empty template allocation</p>
                    </motion.div>
                </Link>

                {isLoading ? (
                    [1, 2, 3].map(i => <div key={i} className="aspect-[4/5] glass rounded-[2.5rem] animate-pulse" />)
                ) : resumes?.map((resume: any, idx: number) => (
                    <motion.div
                        key={resume.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -10 }}
                        className="group relative aspect-[4/5] rounded-[2.5rem] glass border border-white/5 overflow-hidden p-8 flex flex-col bg-white/[0.02] hover:border-white/10 transition-all shadow-2xl"
                    >
                        {/* Status Dots */}
                        <div className="absolute top-8 right-8 flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-purple/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
                        </div>

                        <div className="mb-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-600 group-hover:text-neon-purple transition-all duration-500 shadow-xl group-hover:shadow-neon-purple/20">
                            <FileText className="w-6 h-6" />
                        </div>

                        <div className="space-y-2">
                            <div className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Construct #{idx + 1024}</div>
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none group-hover:text-neon-purple transition-colors truncate">{resume.title || "Untitled"}</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Revision 4.02 // Synthetic</p>
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Strength</span>
                                <span className="text-xl font-black italic tracking-tighter text-white">92<span className="text-neon-purple">%</span></span>
                            </div>
                            <Link href={`/builder/${resume.id}`}>
                                <Button className="h-12 w-12 rounded-2xl bg-white/5 text-white hover:bg-neon-purple hover:text-white transition-all shadow-xl">
                                    <MousePointer2 className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
                .glass {
                    background: rgba(255, 255, 255, 0.01);
                    backdrop-filter: blur(20px);
                }
            `}</style>
        </div>
    );
}
