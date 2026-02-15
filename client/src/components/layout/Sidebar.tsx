"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    FileText,
    Shield,
    Target,
    Zap,
    Settings,
    Crown,
    Sparkles,
    Cpu,
    Terminal,
    Fingerprint,
    Activity
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const routes = [
    {
        label: "Command",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-neon-cyan"
    },
    {
        label: "Archives",
        icon: FileText,
        href: "/builder",
        color: "text-neon-purple"
    },
    {
        label: "Neural Scan",
        icon: Shield,
        href: "/ats-score",
        color: "text-neon-cyan"
    },
    {
        label: "Optimizer",
        icon: Target,
        href: "/job-optimizer",
        color: "text-cyber-pink"
    },
    {
        label: "Sim Lab",
        icon: Zap,
        href: "/interview-prep",
        color: "text-emerald-400"
    },
];

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full bg-[#030303]/80 text-slate-500 w-full backdrop-blur-3xl border-r border-white/[0.03] overflow-y-auto scrollbar-hide">
            {/* Logo Section */}
            <div className="px-8 py-10">
                <Link href="/dashboard" className="group flex items-center gap-4">
                    <div className="relative">
                        <div className="absolute -inset-2 bg-neon-cyan/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-black border border-white/10 p-2.5 rounded-xl group-hover:border-neon-cyan/50 transition-colors">
                            <Cpu className="w-5 h-5 text-neon-cyan" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-black text-white tracking-tighter uppercase italic leading-none">RESUME <span className="text-neon-cyan">AI</span></span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Professional</span>
                    </div>
                </Link>
            </div>

            {/* Navigation Cluster */}
            <div className="px-4 space-y-1">
                <div className="px-4 mb-4">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Menu</span>
                </div>
                {routes.map((route) => {
                    const isActive = pathname === route.href;
                    // Remap labels for display
                    let label = route.label;
                    if (route.label === "Command") label = "Dashboard";
                    if (route.label === "Archives") label = "My Resumes";
                    if (route.label === "Neural Scan") label = "ATS Check";
                    if (route.label === "Optimizer") label = "Job Match";
                    if (route.label === "Sim Lab") label = "Interview Prep";

                    return (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 font-bold text-[10px] uppercase tracking-wider",
                                isActive
                                    ? "bg-white/[0.03] text-white border border-white/[0.05]"
                                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.01]"
                            )}
                        >
                            <div className={cn(
                                "relative flex items-center justify-center w-5 h-5 transition-all",
                                isActive ? route.color : "text-slate-700 group-hover:text-slate-400"
                            )}>
                                <route.icon className="w-4.5 h-4.5 relative z-10" />
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-glow"
                                        className={cn("absolute inset-0 blur-xl opacity-20 rounded-xl", route.color.replace('text-', 'bg-'))}
                                    />
                                )}
                            </div>
                            {label}
                            {isActive && (
                                <div className={cn("ml-auto w-1 h-1 rounded-full", route.color.replace('text-', 'bg-'))} />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* System Metrics HUD */}
            <div className="px-8 py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] space-y-3">
                    <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-slate-500">
                        <span>Storage Used</span>
                        <span className="text-neon-cyan">88%</span>
                    </div>
                    <div className="h-1 w-full bg-white/[0.02] rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "88%" }}
                            className="h-full bg-neon-cyan/40"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="p-4 mt-auto">
                <div className="p-6 rounded-[2rem] bg-gradient-to-br from-neon-purple/5 to-cyber-pink/5 border border-white/[0.03] space-y-4 relative overflow-hidden group hover:border-white/10 transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-neon-purple/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                    <div className="flex items-center gap-2 text-neon-purple">
                        <Crown className="w-4 h-4 shadow-[0_0_10px_rgba(188,19,254,0.5)]" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Pro Plan</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide leading-relaxed">Unlock all features.</p>
                    <Button className="w-full h-10 bg-neon-purple/10 hover:bg-neon-purple text-white hover:text-black rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border border-neon-purple/20">
                        Upgrade Now
                    </Button>
                </div>

                <div className="mt-6">
                    <Link href="/settings" className={cn(
                        "flex items-center gap-4 px-6 py-4 rounded-xl transition-all w-full text-[10px] font-bold uppercase tracking-wider group",
                        pathname === "/settings" ? "bg-white/[0.03] text-white" : "text-slate-500 hover:text-slate-300"
                    )}>
                        <Settings className="w-4.5 h-4.5 group-hover:rotate-90 transition-transform duration-500" />
                        Settings
                    </Link>
                </div>
            </div>
        </div>
    );
};
