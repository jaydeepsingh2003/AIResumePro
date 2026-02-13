"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchResumes } from "@/lib/api";
import {
    Plus,
    FileText,
    TrendingUp,
    Briefcase,
    Clock,
    ChevronRight,
    Sparkles,
    MoreHorizontal,
    ArrowUpRight,
    Search,
    Bell
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const applicationData = [
    { name: "Week 1", value: 4 },
    { name: "Week 2", value: 12 },
    { name: "Week 3", value: 8 },
    { name: "Week 4", value: 18 },
    { name: "Week 5", value: 24 },
];

const skillGapData = [
    { subject: 'React', A: 120, B: 110, fullMark: 150 },
    { subject: 'Node.js', A: 98, B: 130, fullMark: 150 },
    { subject: 'Next.js', A: 86, B: 130, fullMark: 150 },
    { subject: 'System Design', A: 99, B: 100, fullMark: 150 },
    { subject: 'Cloud', A: 85, B: 90, fullMark: 150 },
];

const funnelData = [
    { name: 'Applied', value: 124, fill: '#6366f1' },
    { name: 'Screening', value: 42, fill: '#4f46e5' },
    { name: 'Interview', value: 12, fill: '#4338ca' },
    { name: 'Offer', value: 3, fill: '#3730a3' },
];

export default function DashboardPage() {
    const { data: resumes, isLoading } = useQuery({
        queryKey: ["resumes"],
        queryFn: fetchResumes,
    });

    return (
        <div className="flex flex-col h-full bg-titanium-black min-h-screen">
            {/* Top Bar */}
            <header className="h-20 border-b border-white/5 bg-black/40 px-10 flex items-center justify-between sticky top-0 z-30 backdrop-blur-3xl">
                <div className="flex items-center gap-6 flex-1">
                    <div className="relative w-full max-w-md hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                            placeholder="Interrogate neural archives..."
                            className="pl-12 h-12 bg-white/5 border-white/10 rounded-2xl text-xs uppercase tracking-widest text-white focus:border-neon-cyan/50 focus:ring-neon-cyan transition-all"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Button variant="ghost" size="icon" className="text-slate-500 relative hover:bg-white/5 transition-all">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-neon-cyan rounded-full border-2 border-black shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
                    </Button>
                    <div className="w-10 h-10 rounded-2xl bg-neon-purple/20 flex items-center justify-center text-neon-purple font-black text-xs border border-neon-purple/30 shadow-[0_0_10px_rgba(188,19,254,0.2)]">
                        JD
                    </div>
                </div>
            </header>

            <main className="p-10 max-w-[1700px] mx-auto w-full space-y-12">
                {/* Hero Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
                            Neural <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">Pulse.</span>
                        </h1>
                        <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px] mt-2">Active intelligence monitoring 24 nodes.</p>
                    </motion.div>
                    <div className="flex items-center gap-4">
                        <Link href="/builder/new">
                            <Button size="lg" className="bg-white text-black hover:bg-neon-cyan transition-all rounded-[1.5rem] h-14 px-10 font-black uppercase tracking-widest text-xs group shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <Plus className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform" />
                                Manifest New Code
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Quick Start Templates section */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Core Architectures</h2>
                        <Link href="/templates" className="text-[10px] font-black text-neon-cyan hover:underline uppercase tracking-widest">Global Gallery &rarr;</Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {[
                            { id: 'sidebar', name: 'Titanium', icon: 'bg-white', color: 'text-black' },
                            { id: 'single', name: 'Carbon', icon: 'bg-slate-900', color: 'text-white' },
                            { id: 'double', name: 'Neon', icon: 'bg-neon-cyan/20', color: 'text-neon-cyan' },
                            { id: 'minimal', name: 'Void', icon: 'bg-black/40', color: 'text-slate-500' },
                        ].map((t) => (
                            <Link href={`/builder/new?layout=${t.id}`} key={t.id}>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 glass rounded-[2.5rem] border border-white/5 flex items-center gap-4 cursor-pointer group hover:border-white/20 transition-all duration-500"
                                >
                                    <div className={`w-14 h-18 ${t.icon} rounded-xl border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden shrink-0`}>
                                        <div className="w-full h-full opacity-30 pointer-events-none">
                                            <div className="p-2 space-y-1"><div className="h-0.5 w-full bg-current rounded" /><div className="h-0.5 w-full bg-current rounded w-2/3" /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-black text-white group-hover:text-neon-cyan transition-colors tracking-widest uppercase">{t.name}</div>
                                        <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.3em] mt-1">Class Alpha</div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                        <Link href="/builder/new">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-6 bg-white/5 rounded-[2.5rem] border-2 border-dashed border-white/10 flex items-center gap-4 cursor-pointer group h-full hover:border-neon-cyan/30 transition-all"
                            >
                                <div className="w-14 h-18 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                                    <Plus className="w-5 h-5 text-slate-700 group-hover:text-neon-cyan transition-colors" />
                                </div>
                                <div className="text-xs font-black text-slate-700 group-hover:text-neon-cyan transition-colors tracking-widest uppercase">Null</div>
                            </motion.div>
                        </Link>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Resume Strength Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-8 p-10 rounded-[4rem] glass border border-white/10 shadow-3xl flex flex-col md:flex-row gap-16 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] -mr-64 -mt-64" />
                        <div className="flex flex-col justify-between relative z-10">
                            <div>
                                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Neural Compatibility</h3>
                                <div className="text-9xl font-black text-white tracking-tighter italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">88%</div>
                                <div className="mt-8 flex items-center gap-3 text-neon-cyan font-black bg-neon-cyan/10 px-6 py-3 rounded-full w-fit text-[10px] uppercase tracking-[0.2em] border border-neon-cyan/20">
                                    <Sparkles className="w-4 h-4 shadow-[0_0_10px_rgba(0,242,255,1)]" />
                                    <span>Elite Tier Consensus</span>
                                </div>
                            </div>
                            <Link href="/ats-score">
                                <Button variant="outline" className="mt-12 rounded-2xl border-white/10 glass font-black h-14 px-10 hover:bg-white/5 transition-all text-[10px] uppercase tracking-widest">
                                    Full Diagnostics
                                </Button>
                            </Link>
                        </div>
                        <div className="flex-1 h-[320px] relative mt-10 md:mt-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={applicationData}>
                                    <defs>
                                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#00f2ff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', backdropFilter: 'blur(10px)', color: '#fff', padding: '16px' }}
                                        itemStyle={{ color: '#00f2ff', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase' }}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#00f2ff" strokeWidth={4} fillOpacity={1} fill="url(#colorVal)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Skill Gap Radar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4 p-10 rounded-[4rem] bg-gradient-to-br from-neon-purple to-cyber-pink shadow-3xl shadow-neon-purple/20 flex flex-col items-center justify-between relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000" />
                        <h3 className="text-[10px] font-black text-white/70 uppercase tracking-[0.4em] mb-6 self-start relative">Cognitive Array</h3>
                        <div className="w-full h-[280px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillGapData}>
                                    <PolarGrid stroke="#ffffff33" />
                                    <PolarAngleAxis dataKey="subject" stroke="#ffffffaa" tick={{ fontSize: 10, fontWeight: '900' }} />
                                    <Radar name="Skills" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.45} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-full pt-6 border-t border-white/20 relative">
                            <p className="text-white text-[10px] font-black text-center uppercase tracking-widest flex items-center justify-center gap-3">
                                <Sparkles className="w-4 h-4" />
                                Target: <span className="underline decoration-white/40">System Design</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Recent Resumes */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-black text-white tracking-widest uppercase italic">Neural Archives</h2>
                            <Link href="/builder" className="text-[10px] font-black text-neon-cyan hover:scale-110 transition-transform uppercase tracking-[0.3em]">Exfiltrate All &rarr;</Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {isLoading ? (
                                [1, 2].map(i => <div key={i} className="h-72 glass rounded-[3rem] animate-pulse" />)
                            ) : resumes?.length > 0 ? (
                                resumes.slice(0, 4).map((resume: any) => (
                                    <motion.div
                                        key={resume.id}
                                        whileHover={{ y: -10 }}
                                        className="p-10 glass rounded-[3.5rem] border border-white/5 hover:border-white/20 shadow-2xl transition-all group"
                                    >
                                        <div className="flex justify-between items-start mb-10">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-neon-cyan/20 group-hover:text-neon-cyan transition-all duration-500 border border-white/5">
                                                <FileText className="w-8 h-8" />
                                            </div>
                                            <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-700 hover:text-white">
                                                <MoreHorizontal className="w-6 h-6" />
                                            </Button>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-3 tracking-tighter uppercase italic group-hover:text-neon-cyan transition truncate">
                                            {resume.title}
                                        </h3>
                                        <div className="flex items-center gap-3 mb-12">
                                            <Clock className="w-4 h-4 text-slate-600" />
                                            <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">Sync: 14h ago</span>
                                        </div>

                                        <div className="flex items-center justify-between pt-10 border-t border-white/5">
                                            <div className="flex flex-col">
                                                <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em] mb-1">Frequency</div>
                                                <div className="text-3xl font-black text-neon-cyan tracking-tighter">92%</div>
                                            </div>
                                            <Link href={`/builder/${resume.id}`}>
                                                <Button size="sm" className="rounded-2xl bg-white text-black hover:bg-neon-cyan group h-14 px-8 font-black uppercase tracking-widest text-[10px]">
                                                    Access <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-2 flex flex-col items-center justify-center py-24 glass rounded-[4rem] border-2 border-dashed border-white/10 text-center">
                                    <div className="w-28 h-28 bg-white/5 rounded-[3rem] flex items-center justify-center mb-8 border border-white/5">
                                        <FileText className="w-14 h-14 text-slate-700" />
                                    </div>
                                    <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">Zero Nodes Detected</h3>
                                    <p className="text-slate-500 max-w-sm mt-4 mb-12 font-black uppercase tracking-[0.2em] text-xs">Initialize your first professional frequency.</p>
                                    <Link href="/builder/new">
                                        <Button className="bg-neon-cyan text-black hover:bg-white h-20 px-16 rounded-[2.5rem] text-xl font-black uppercase tracking-widest shadow-[0_0_40px_rgba(0,242,255,0.3)] transition-all hover:scale-105">
                                            Initialize Core
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Panel: Insights */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black text-white tracking-widest uppercase italic">Neural Feed</h2>
                            <div className="bg-neon-cyan/10 px-4 py-1.5 rounded-full text-neon-cyan text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                                LIVE
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Weak Metrics", desc: "Your 'Senior Developer' bullets lack quantifiable impact (e.g., %).", type: "warning", action: "Fix with AI" },
                                { title: "Target Match", desc: "Google match is at 45%. You are missing 12 core keywords.", type: "error", action: "Optimize" },
                                { title: "Job Market", desc: "High demand for 'Next.js' in your preferred locations.", type: "info", action: "Details" }
                            ].map((insight, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="p-10 glass rounded-[3rem] border border-white/5 hover:border-white/10 shadow-xl space-y-6"
                                >
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-black text-white text-xl tracking-tighter uppercase italic">{insight.title}</h4>
                                        <div className={`w-3 h-3 rounded-full ${insight.type === 'error' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]' : insight.type === 'warning' ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]' : 'bg-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.8)]'}`} />
                                    </div>
                                    <p className="text-xs text-slate-500 font-black uppercase tracking-widest leading-relaxed">{insight.desc}</p>
                                    <button className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.3em] hover:underline pt-2">{insight.action} &rarr;</button>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-10 rounded-[3.5rem] glass border border-white/10 relative overflow-hidden group shadow-3xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] opacity-40 -mr-32 -mt-32 group-hover:opacity-60 transition-opacity" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-6 tracking-tighter text-white uppercase italic">Quantize <br />Your Career.</h3>
                                <ul className="space-y-5 mb-12">
                                    {["Infinite Neural Rewrites", "All Alpha Architectures", "Priority Stream Priority"].map(li => (
                                        <li key={li} className="text-[10px] text-slate-500 flex items-center gap-4 font-black uppercase tracking-widest">
                                            <div className="w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-neon-purple text-white hover:bg-white hover:text-black font-black rounded-[1.5rem] h-16 text-xs uppercase tracking-widest transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(188,19,254,0.3)]">Elevate Logic</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
