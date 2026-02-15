"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchResume, updateResume } from "@/lib/api";
import { ResumeEditor } from "@/components/resume-builder/ResumeEditor";
import { ResumePreview } from "@/components/resume-builder/ResumePreview";
import { Loader2, ArrowLeft, Cpu, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
    const params = useParams();
    const queryClient = useQueryClient();
    const id = params.id as string;

    const { data: resume, isLoading } = useQuery({
        queryKey: ["resume", id],
        queryFn: () => fetchResume(id),
    });

    const mutation = useMutation({
        mutationFn: (updatedResume: any) => updateResume(id, updatedResume),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["resume", id] });
        },
    });

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#050505]">
                <div className="text-center space-y-4">
                    <Loader2 className="w-10 h-10 animate-spin text-neon-cyan mx-auto" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">Synchronizing Neural Node...</p>
                </div>
            </div>
        );
    }

    if (!resume) return <div className="p-10 text-white">Node not found.</div>;

    return (
        <div className="flex flex-col h-full bg-[#050505] min-h-screen">
            {/* Command Header */}
            <header className="h-20 border-b border-white/[0.03] bg-black/40 px-8 flex items-center justify-between sticky top-0 z-50 backdrop-blur-2xl">
                <div className="flex items-center gap-8">
                    <Link href="/builder">
                        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/5 group">
                            <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                        </Button>
                    </Link>
                    <div className="h-8 w-px bg-white/10" />
                    <div className="flex flex-col">
                        <h1 className="text-xl font-black italic tracking-tighter uppercase leading-none">
                            Matrix <span className="text-neon-purple">Edit.</span>
                        </h1>
                        <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest mt-1">Status: Operational // ID: {id.slice(0, 8)}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-neon-purple/5 border border-neon-purple/10 rounded-xl">
                        <ShieldCheck className="w-3 h-3 text-neon-purple" />
                        <span className="text-[9px] font-black text-neon-purple uppercase tracking-widest">Encrypted Session</span>
                    </div>
                    <Button onClick={() => mutation.mutate(resume)} disabled={mutation.isPending} className="h-10 px-8 bg-neon-purple text-white hover:bg-white hover:text-black rounded-xl font-black text-[9px] uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(188,19,254,0.2)]">
                        {mutation.isPending ? "Syncing..." : "Sync Archive"}
                    </Button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Editor Matrix */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-10 bg-[#050505] relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
                    <ResumeEditor
                        resume={resume}
                        onUpdate={(updatedResume) => mutation.mutate(updatedResume)}
                    />
                </div>

                {/* Real-time Render Matrix */}
                <div className="hidden lg:block w-[45%] border-l border-white/[0.03] bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-cyan/5 pointer-events-none" />
                    <div className="h-full overflow-y-auto custom-scrollbar p-12">
                        <div className="max-w-[850px] mx-auto scale-90 origin-top shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                            <ResumePreview resume={resume} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(188, 19, 254, 0.2);
                }
            `}</style>
        </div>
    );
}
