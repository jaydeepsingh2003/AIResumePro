"use client";

import { useQuery } from '@tanstack/react-query';
import { ATSResultsView } from "@/components/ats/ResultsView";
import { ArrowLeft, Share2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ATSPage() {
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
                        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">ATS Health Report</h1>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Master Resume • Updated today</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="rounded-xl border-slate-200 font-bold h-10 px-4">
                        <Printer className="w-4 h-4 mr-2" />
                        Print Report
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl border-slate-200 font-bold h-10 px-4">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                    </Button>
                </div>
            </div>

            <main className="p-8 max-w-[1200px] mx-auto space-y-12">
                <section>
                    <div className="mb-10">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">How you stack <span className="text-indigo-600">up.</span></h2>
                        <p className="text-slate-500 font-medium max-w-2xl">We analyzed your resume against current recruitment algorithms for Senior Software Engineering roles. Here are your findings.</p>
                    </div>

                    <ATSResultsView />
                </section>
            </main>
        </div>
    );
}
