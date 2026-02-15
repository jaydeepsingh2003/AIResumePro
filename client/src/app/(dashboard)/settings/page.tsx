"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Shield,
    Bell,
    CreditCard,
    Zap,
    User,
    Globe,
    Sparkles,
    Sliders,
    ChevronRight,
    Lock,
    Eye,
    RefreshCw,
    Activity,
    Database,
    Binary
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
    {
        id: "profile",
        title: "Neural Profile",
        desc: "Identity lexical markers & public trace.",
        icon: User,
        color: "text-neon-cyan",
        border: "border-neon-cyan/20",
        glow: "shadow-[0_0_20px_rgba(0,242,255,0.15)]",
        settings: [
            { label: "Public Trace Visibility", active: true },
            { label: "Neural Signature Sync", active: false }
        ]
    },
    {
        id: "security",
        title: "Security Protocols",
        desc: "Encryption keys & access control matrices.",
        icon: Shield,
        color: "text-neon-purple",
        border: "border-neon-purple/20",
        glow: "shadow-[0_0_20px_rgba(188,19,254,0.15)]",
        settings: [
            { label: "End-to-End Encryption", active: true },
            { label: "2FA Biometric Lock", active: true }
        ]
    },
    {
        id: "sync",
        title: "Sync Frequencies",
        desc: "Neural link notification & archive alerts.",
        icon: Bell,
        color: "text-emerald-400",
        border: "border-emerald-400/20",
        glow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        settings: [
            { label: "Real-time Pulse Alerts", active: true },
            { label: "Deep Archive Backups", active: false }
        ]
    },
    {
        id: "compute",
        title: "Compute Cycles",
        desc: "Resource allocation & premium tier data.",
        icon: CreditCard,
        color: "text-cyber-pink",
        border: "border-cyber-pink/20",
        glow: "shadow-[0_0_20px_rgba(255,0,255,0.15)]",
        settings: [
            { label: "High-Priority Processing", active: true },
            { label: "Extended Buffer Memory", active: true }
        ]
    }
];

export default function SettingsPage() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <div className="flex flex-col h-full bg-[#050505] min-h-screen text-white p-6 lg:p-10 space-y-12 selection:bg-neon-cyan/30 relative overflow-hidden">
            {/* Background HUD Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-neon-purple/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-neon-cyan/5 rounded-full blur-[150px]" />
            </div>

            {/* Sub-header HUD */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/[0.03] pb-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,242,255,1)] animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">System Configuration Matrix</span>
                    </div>
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">Logic.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-2 lg:flex items-center gap-6">
                    <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col items-center justify-center min-w-[140px] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest mb-1 relative z-10">Neural Latency</span>
                        <span className="text-sm font-black italic tracking-tighter text-emerald-400 relative z-10 flex items-center gap-2">
                            14MS <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        </span>
                    </div>

                    <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col items-center justify-center min-w-[140px] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest mb-1 relative z-10">Uptime Protocol</span>
                        <span className="text-sm font-black italic tracking-tighter text-neon-cyan relative z-10 flex items-center gap-2">
                            99.9% <Activity className="w-3 h-3 animate-bounce" />
                        </span>
                    </div>

                    <div className="relative group col-span-2 lg:col-span-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-cyber-pink rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition duration-500" />
                        <Button
                            variant="ghost"
                            className="relative h-14 px-10 bg-black border border-white/10 hover:border-white/20 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all overflow-hidden flex items-center gap-4 w-full lg:w-auto"
                        >
                            {/* Scanning Animation */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-[2px] bg-neon-cyan/50 shadow-[0_0_15px_rgba(0,242,255,1)] z-20"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="relative z-10 flex items-center gap-4">
                                <div className="relative">
                                    <RefreshCw className="w-4 h-4 text-neon-cyan group-hover:rotate-180 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-neon-cyan/20 blur-md rounded-full animate-ping" />
                                </div>
                                <div className="flex flex-col items-start leading-none gap-1 text-left">
                                    <span>Sync Recalibration</span>
                                    <span className="text-[7px] text-slate-600 tracking-[0.1em]">Protocol: Quantum-7</span>
                                </div>
                            </div>

                            {/* Signal Indicator */}
                            <div className="ml-auto flex items-center gap-1">
                                {[1, 2, 3, 4].map(i => (
                                    <motion.div
                                        key={i}
                                        className="w-1 h-3 bg-white/10 rounded-full"
                                        animate={{ height: [8, 12, 8], backgroundColor: ["rgba(255,255,255,0.1)", "rgba(0,242,255,1)", "rgba(255,255,255,0.1)"] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                ))}
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Configuration Grid */}
            <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`group relative p-10 rounded-[3rem] glass border ${section.border} transition-all duration-500 overflow-hidden`}
                    >
                        {/* Interactive Background Glow */}
                        <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] -mr-24 -mt-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${section.color.replace('text-', 'bg-')}/10`} />

                        <div className="relative z-10 space-y-8">
                            <div className="flex items-start justify-between">
                                <div className={`p-6 rounded-[2rem] glass border border-white/10 ${section.color} ${section.glow} group-hover:scale-110 transition-all duration-500`}>
                                    <section.icon className="w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Shield Active</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white leading-none">{section.title}</h3>
                                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed">{section.desc}</p>
                            </div>

                            <div className="pt-8 space-y-6 border-t border-white/[0.03]">
                                {section.settings.map((setting, sIdx) => (
                                    <div key={sIdx} className="flex items-center justify-between group/setting">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest group-hover/setting:text-neon-cyan transition-colors">{setting.label}</span>
                                            <span className="text-[7px] font-bold text-slate-700 uppercase tracking-widest">Active Status: {setting.active ? 'Verified' : 'Standby'}</span>
                                        </div>
                                        <div className={cn(
                                            "h-6 w-12 rounded-full border border-white/10 flex items-center p-1 transition-all relative overflow-hidden",
                                            setting.active ? "bg-white/[0.03] border-white/20" : "bg-black"
                                        )}>
                                            <div
                                                className={cn(
                                                    "h-4 w-4 rounded-full transition-all duration-500 relative z-10",
                                                    setting.active
                                                        ? `${section.color.replace('text-', 'bg-')} translate-x-6 shadow-[0_0_15px_rgba(255,255,255,0.5)]`
                                                        : "bg-slate-800 translate-x-0"
                                                )}
                                            />
                                            {setting.active && (
                                                <motion.div
                                                    className={cn("absolute inset-0 opacity-20", section.color.replace('text-', 'bg-'))}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full h-14 rounded-2xl bg-white/[0.02] border border-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all group/btn mt-4">
                                <span className="flex items-center justify-center gap-2">
                                    Access Parameters
                                    <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Silicon Flux Visualizer */}
            <div className="max-w-5xl mx-auto w-full glass rounded-[3rem] border border-white/5 p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-10 pointer-events-none" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                            <Binary className="w-5 h-5 text-neon-cyan" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Silicon Flux Monitor</span>
                            <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Real-time spectral data distribution</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[8px] font-black text-slate-800 uppercase tracking-widest">Throughput</span>
                            <span className="text-sm font-black italic text-neon-cyan tracking-tighter">1.8 GB/S</span>
                        </div>
                        <div className="h-8 w-px bg-white/5" />
                        <div className="flex flex-col items-end">
                            <span className="text-[8px] font-black text-slate-800 uppercase tracking-widest">Entropy</span>
                            <span className="text-sm font-black italic text-neon-purple tracking-tighter">LOW</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-end gap-1.5 h-32 relative z-10">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-neon-cyan/40 to-neon-purple/40 rounded-full"
                            animate={{
                                height: [
                                    `${20 + Math.random() * 60}%`,
                                    `${30 + Math.random() * 70}%`,
                                    `${20 + Math.random() * 60}%`
                                ]
                            }}
                            transition={{
                                duration: 1.5 + Math.random(),
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.05
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Dangerous Zone HUD */}
            <div className="relative z-10 max-w-5xl mx-auto w-full space-y-8 pt-12 border-t border-white/[0.03]">
                <div className="flex items-center gap-4">
                    <Binary className="w-5 h-5 text-red-500" />
                    <h3 className="text-xl font-black uppercase italic tracking-widest text-red-500">Security Infiltration Risk</h3>
                </div>

                <div className="p-12 rounded-[4rem] bg-red-500/[0.02] border border-red-500/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-red-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="space-y-6 flex-1">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-2xl glass border border-red-500/20 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                                    <Zap className="w-6 h-6 animate-pulse" />
                                </div>
                                <h4 className="text-3xl font-black uppercase italic tracking-tighter text-white">Full System <span className="text-red-500">Purge.</span></h4>
                            </div>
                            <p className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] leading-relaxed max-w-xl">
                                Activating the purge protocol will permanently incinerate all neural archives, identity markers, and trace logs from the core silicon matrix. <span className="text-red-900">Total data erasure is absolute and irreversible.</span>
                            </p>
                        </div>
                        <Button className="h-20 px-16 bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] transition-all shadow-[0_0_40px_rgba(239,68,68,0.1)] hover:shadow-[0_0_60px_rgba(239,68,68,0.3)]">
                            Terminate All Nodes
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer Status Bars */}
            <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-24 pb-12 gap-8 opacity-40">
                <div className="flex items-center gap-4 group cursor-help">
                    <Globe className="w-5 h-5 text-slate-700" />
                    <div className="flex flex-col">
                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">Neural Link Status</span>
                        <span className="text-[8px] font-black tracking-[0.5em] text-cyan-400">ENCRYPTED // SOLID</span>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-slate-700" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Archive Load: 1.42 TB</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-neon-cyan" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">v4.4.2-TITANIUM</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .glass {
                    background: rgba(255, 255, 255, 0.01);
                    backdrop-filter: blur(20px);
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.95); opacity: 0.5; }
                    50% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(0.95); opacity: 0.5; }
                }
            `}</style>
        </div>
    );
}
