"use client";

import { useMutation } from "@tanstack/react-query";
import { createResume } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Plus, Sparkles, Layout, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const initialResume = {
    title: "New Synthetic Sequence",
    content: {
        basics: {
            name: "",
            label: "",
            email: "",
            phone: "",
            summary: "",
            location: { address: "", postalCode: "", city: "", countryCode: "", region: "" },
            profiles: []
        },
        work: [],
        education: [],
        skills: [],
        projects: []
    },
    style: {
        layout: "sidebar",
        color: "#00f2ff",
        font: "sans"
    }
};

export default function NewResumePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const layout = searchParams.get('layout');

    const mutation = useMutation({
        mutationFn: createResume,
        onSuccess: (data) => {
            router.push(`/builder/${data.id}`);
        },
    });

    useEffect(() => {
        const create = async () => {
            const resumeToCreate = {
                ...initialResume,
                style: {
                    ...initialResume.style,
                    layout: (layout as any) || "sidebar"
                }
            };
            mutation.mutate(resumeToCreate);
        };
        create();
    }, []);

    return (
        <div className="flex h-screen items-center justify-center bg-[#050505] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 relative z-10"
            >
                <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-neon-cyan/20 rounded-full blur-2xl animate-pulse" />
                    <div className="relative bg-black border border-white/10 p-6 rounded-[2rem] shadow-2xl">
                        <Cpu className="w-12 h-12 text-neon-cyan animate-pulse" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">Initializing <span className="text-neon-cyan">Node.</span></h2>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">Synthesizing professional frequency patterns for core deployment.</p>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce [animation-delay:-0.1s]" />
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce [animation-delay:-0.2s]" />
                </div>
            </motion.div>
        </div>
    );
}
