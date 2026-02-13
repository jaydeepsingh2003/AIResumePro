"use client";

import { JobOptimizer } from "@/components/optimizer/JobOptimizer";
import { ArrowLeft, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JobOptimizerPage() {
    return (
        <div className="bg-slate-50/50 dark:bg-slate-950 min-h-screen">
            {/* Context Header */}
            <div className="h-20 bg-white dark:bg-slate-900 border-b px-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="icon" className="rounded-xl">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Job Tailoring Engine</h1>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Master Resume • Senior Software Engineer</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        AI Agent Active
                    </div>
                </div>
            </div>

            <main className="p-8 max-w-[1400px] mx-auto space-y-12">
                <section>
                    <div className="mb-12">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Tailor your resume in <span className="text-indigo-600">seconds.</span></h2>
                        <p className="text-slate-500 font-medium max-w-2xl">Don't use a generic resume. Our AI adjusts your tone, projects, and keywords to perfectly match the job description below.</p>
                    </div>

                    <JobOptimizer />
                </section>
            </main>
        </div>
    );
}
