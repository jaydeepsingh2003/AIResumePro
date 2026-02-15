"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchResumes } from "@/lib/api";
import {
    Plus,
    FileText,
    TrendingUp,
    Briefcase,
    Clock,
    Sparkles,
    Search,
    Bell,
    Cpu,
    Zap,
    Target,
    Activity,
    Lock,
    Globe,
    Shield,
    Terminal,
    Command,
    Eye,
    ChevronRight,
    LucideIcon
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    Cell
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const statsData = [
    { name: 'Mon', apps: 4, intensity: 45 },
    { name: 'Tue', apps: 7, intensity: 60 },
    { name: 'Wed', apps: 5, intensity: 55 },
    { name: 'Thu', apps: 12, intensity: 85 },
    { name: 'Fri', apps: 9, intensity: 70 },
    { name: 'Sat', apps: 3, intensity: 30 },
    { name: 'Sun', apps: 2, intensity: 20 },
];

const nodes = [
    {
        title: "Matrix Build",
        desc: "Construct high-frequency resume entities.",
        icon: FileText,
        color: "text-neon-cyan",
        borderColor: "border-neon-cyan/20",
        glowColor: "bg-neon-cyan/10",
        href: "/builder"
    },
    {
        title: "Neural Scan",
        desc: "Analyze ATS compliance and keyword alignment.",
        icon: Target,
        color: "text-neon-purple",
        borderColor: "border-neon-purple/20",
        glowColor: "bg-neon-purple/10",
        href: "/ats-score"
    },
    {
        title: "Pulse Optimized",
        desc: "Tailor profiles for specific job signatures.",
        icon: Zap,
        color: "text-cyber-pink",
        borderColor: "border-cyber-pink/20",
        glowColor: "bg-cyber-pink/10",
        href: "/job-optimizer"
    },
    {
        title: "Combat Simulation",
        desc: "AI-driven interview training protocols.",
        icon: Shield,
        color: "text-emerald-400",
        borderColor: "border-emerald-400/20",
        glowColor: "bg-emerald-400/10",
        href: "/interview-prep"
    }
];

export default function DashboardPage() {
    const { data: resumes, isLoading } = useQuery({
        queryKey: ["resumes"],
        queryFn: fetchResumes,
    });

    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="flex flex-col h-full bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-neon-cyan/30">
            {/* Top Bar - Ultra Minimal */}
            <header className="h-20 border-b border-white/[0.03] bg-black/20 px-8 flex items-center justify-between sticky top-0 z-50 backdrop-blur-2xl">
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-neon-cyan/10 rounded-lg border border-neon-cyan/20 animate-pulse">
                            <Cpu className="w-5 h-5 text-neon-cyan" />
                        </div>
                        <h1 className="text-xl font-black italic tracking-tighter uppercase">
                            Node <span className="text-neon-cyan">Zero</span>
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                        <Terminal className="w-3 h-3 text-slate-500" />
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">System Status: Optimal</span>
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    </div>

                    <div className="flex items-center gap-3 ml-4">
                        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white hover:bg-white/5 transition-all">
                            <Search className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white hover:bg-white/5 transition-all relative">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                        </Button>
                        <div className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center font-black text-[10px] text-neon-cyan">
                            JS
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 lg:p-10 max-w-[1800px] mx-auto w-full space-y-10 overflow-y-auto custom-scrollbar pb-24">

                {/* Hero command Section */}
                <section className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-cyber-pink/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                    <div className="relative p-10 lg:p-16 rounded-[2.5rem] glass border border-white/10 overflow-hidden bg-black/40">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-2xl space-y-6 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
                                >
                                    <Sparkles className="w-3 h-3 text-neon-cyan" />
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Autonomous Intelligence Active</span>
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl lg:text-6xl font-black tracking-tighter uppercase italic leading-[0.9]"
                                >
                                    SURPASS YOUR <br />
                                    <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">LIMITS.</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-slate-500 font-medium uppercase tracking-wider text-xs lg:text-sm max-w-lg leading-relaxed"
                                >
                                    The neural engine is ready to synthesize your career trajectory. Deployment protocols are at 100% capacity.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
                                >
                                    <Link href="/builder/new">
                                        <Button className="h-14 px-8 bg-white text-black hover:bg-neon-cyan hover:text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                            Initialize Core
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="h-14 px-8 glass border-white/10 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all">
                                        View System Logs
                                    </Button>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-full lg:w-[450px] aspect-square relative"
                            >
                                <div className="absolute inset-0 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse" />
                                <div className="relative w-full h-full glass border border-white/10 rounded-[3rem] p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Neural Load</div>
                                            <div className="text-4xl font-black italic tracking-tighter text-white">88.4<span className="text-neon-cyan">%</span></div>
                                        </div>
                                        <Activity className="w-6 h-6 text-neon-cyan" />
                                    </div>

                                    <div className="flex-1 py-8">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={statsData}>
                                                <defs>
                                                    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="#00f2ff" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <Area type="monotone" dataKey="apps" stroke="#00f2ff" strokeWidth={3} fill="url(#glow)" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                            <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Nodes Active</div>
                                            <div className="text-lg font-black text-white italic">12</div>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                            <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Sync Frequency</div>
                                            <div className="text-lg font-black text-neon-cyan italic">94Hz</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Operations Grid */}
                <section className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex flex-col">
                            <h3 className="text-xl font-black uppercase italic tracking-widest">System Modules</h3>
                            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-1">Select specialized neural interface</p>
                        </div>
                        <div className="h-px flex-1 mx-8 bg-white/5" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
                            <span className="text-[10px] font-black text-neon-cyan uppercase tracking-widest">Real-time Sync</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {nodes.map((node, idx) => (
                            <Link href={node.href} key={idx} className="group">
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`p-8 h-full rounded-[2rem] glass border ${node.borderColor} transition-all duration-500 relative overflow-hidden`}
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${node.glowColor} rounded-full blur-[60px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10 flex flex-col h-full space-y-6">
                                        <div className={`p-4 rounded-2xl ${node.glowColor} ${node.color} border border-white/5 w-fit shadow-2xl`}>
                                            <node.icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-black uppercase italic tracking-tight group-hover:text-white transition-colors">
                                                {node.title}
                                            </h4>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-relaxed">
                                                {node.desc}
                                            </p>
                                        </div>
                                        <div className="mt-auto pt-6 flex items-center justify-between">
                                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-700 group-hover:text-neon-cyan transition-colors">Initialize Control</span>
                                            <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-neon-cyan transition-all group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Archives & Feed - Double Column */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Archives */}
                    <div className="lg:col-span-12 space-y-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-widest">Neural Archives</h3>
                            <Link href="/builder">
                                <Button variant="ghost" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-neon-cyan">
                                    Access All Nodes <ChevronRight className="w-3 h-3 ml-2" />
                                </Button>
                            </Link>
                        </div>

                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[1, 2, 3].map(i => <div key={i} className="h-48 glass rounded-[2rem] animate-pulse" />)}
                            </div>
                        ) : resumes?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {resumes.slice(0, 4).map((resume: any, i: number) => (
                                    <motion.div
                                        key={resume.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="p-6 rounded-[2rem] glass border border-white/5 hover:border-neon-cyan/30 transition-all group cursor-pointer bg-white/[0.02]"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-600 group-hover:text-neon-cyan transition-colors">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest">#{resume.id.slice(0, 4)}</div>
                                        </div>
                                        <h5 className="text-lg font-black uppercase italic tracking-tight truncate mb-1">{resume.title || "Untitled Node"}</h5>
                                        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">Updated: 12.04.26</p>
                                        <div className="mt-6 flex items-center justify-between">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(x => <div key={x} className="w-5 h-5 rounded-full border border-black bg-slate-800" />)}
                                            </div>
                                            <Link href={`/builder/${resume.id}`}>
                                                <Button size="icon" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-neon-cyan hover:text-black transition-all">
                                                    <ArrowRight className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-12 glass rounded-[3rem] border border-dashed border-white/10 text-center flex flex-col items-center gap-6">
                                <div className="p-6 bg-white/5 rounded-full border border-white/5">
                                    <Zap className="w-10 h-10 text-slate-800" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-2xl font-black uppercase italic tracking-tighter">Archives Empty</h4>
                                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">No neural signatures detected in the silicon matrices.</p>
                                </div>
                                <Link href="/builder/new">
                                    <Button className="h-12 px-10 bg-white text-black hover:bg-neon-cyan hover:text-white rounded-xl font-black text-[10px] uppercase tracking-widest group">
                                        INITIALIZE ARCHIVE <Plus className="w-4 h-4 ml-2 group-hover:rotate-90 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {/* Futuristic HUD Info - Bottom Left */}
            <div className="fixed bottom-6 left-72 z-50 pointer-events-none hidden lg:block">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-neon-cyan/20 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: [-32, 32] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full bg-neon-cyan"
                            />
                        </div>
                        <span className="text-[8px] font-black text-slate-700 uppercase tracking-[0.4em]">Signal Trace</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-neon-purple/20 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: [32, -32] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full bg-neon-purple"
                            />
                        </div>
                        <span className="text-[8px] font-black text-slate-700 uppercase tracking-[0.4em]">Core Frequency</span>
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
                    background: rgba(0, 242, 255, 0.2);
                }
                .glass {
                    background: rgba(255, 255, 255, 0.01);
                    backdrop-filter: blur(20px);
                }
            `}</style>
        </div>
    );
}

function ArrowRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
