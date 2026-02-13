"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
    const steps = [
        {
            title: "Upload or Create",
            description: "Start from scratch with our intuitive editor or upload your existing PDF/Word resume for an instant AI audit.",
            icon: Upload,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "AI Scan & Optimize",
            description: "Our AI identifies keyword gaps, improves your tone, and optimizes your layout for ATS compatibility in seconds.",
            icon: Cpu,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            title: "Download & Get Hired",
            description: "Export your high-fidelity, recruiter-approved resume. Users of AI Resume Pro report landing 3x more interviews.",
            icon: CheckCircle,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-950 dark:text-white mb-6 tracking-tight">Your path to a new role in <span className="text-indigo-600">3 steps.</span></h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">Skip the manual struggle and let intelligence work for you.</p>
                </div>

                <div className="relative">
                    {/* Line Connector */}
                    <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-slate-100 hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                key={idx}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`w-32 h-32 rounded-full ${step.bg} border-8 border-white dark:border-slate-950 flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-indigo-200/50`}>
                                    <step.icon className={`w-12 h-12 ${step.color}`} />
                                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-slate-950 border-4 border-white flex items-center justify-center text-white font-black text-sm">
                                        {idx + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">{step.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-xs">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
