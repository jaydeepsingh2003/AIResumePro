"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    FileText,
    Shield,
    Briefcase,
    Zap,
    History,
    Settings,
    Crown,
    Sparkles,
    ChevronLeft,
    Target
} from "lucide-react";
import { motion } from "framer-motion";

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        label: "My Resumes",
        icon: FileText,
        href: "/builder",
    },
    {
        label: "ATS Scan",
        icon: Shield,
        href: "/ats-score",
    },
    {
        label: "Job Tailoring",
        icon: Target,
        href: "/job-optimizer",
    },
    {
        label: "Interview AI",
        icon: Zap,
        href: "/interview-prep",
    },
];

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full bg-black/40 text-slate-400 w-full backdrop-blur-3xl">
            <div className="px-6 py-10 flex-1">
                <Link href="/dashboard" className="flex items-center gap-4 mb-14 px-4">
                    <div className="bg-neon-cyan/10 p-3 rounded-2xl shadow-[0_0_20px_rgba(0,242,255,0.2)] border border-neon-cyan/20">
                        <Sparkles className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <span className="text-xl font-black text-white tracking-tighter uppercase italic">AI Pro</span>
                </Link>

                <div className="space-y-2">
                    {routes.map((route) => {
                        const isActive = pathname === route.href;
                        return (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 font-black text-xs uppercase tracking-widest",
                                    isActive
                                        ? "bg-white/10 text-neon-cyan shadow-[0_0_30px_rgba(0,242,255,0.1)] border border-white/10"
                                        : "hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <route.icon className={cn(
                                    "h-5 w-5 transition-all duration-500",
                                    isActive ? "text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]" : "text-slate-600 group-hover:text-white"
                                )} />
                                {route.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="ml-auto w-1 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)]"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Premium Upgrade Card */}
            <div className="p-6">
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neon-purple/20 to-cyber-pink/20 border border-white/10 space-y-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-neon-purple/20 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                    <div className="flex items-center gap-2 text-neon-purple">
                        <Crown className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Quantum Access</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase tracking-wider">Expand your cognitive reach with infinite exports.</p>
                    <button className="w-full py-4 bg-neon-purple/20 hover:bg-neon-purple/30 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-neon-purple/30 hover:shadow-[0_0_20px_rgba(188,19,254,0.3)]">
                        Upgrade Core
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                    <Link href="/settings" className="flex items-center gap-4 px-6 py-3 text-slate-500 hover:text-white transition-all w-full text-[10px] font-black uppercase tracking-widest group">
                        <Settings className="w-5 h-5 text-slate-700 group-hover:text-neon-cyan group-hover:rotate-90 transition-all duration-500" />
                        Config
                    </Link>
                </div>
            </div>
        </div>
    );
};
