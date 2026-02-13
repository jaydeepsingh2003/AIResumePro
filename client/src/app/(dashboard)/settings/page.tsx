"use client";

import { motion } from "framer-motion";
import { User, Shield, Bell, Zap, Globe, Cpu, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
    {
        title: "Neural Profile",
        desc: "Manage your public identity and lexical markers.",
        icon: <User className="w-5 h-5" />,
        color: "text-neon-cyan",
        borderColor: "border-neon-cyan/20",
        glowColor: "bg-neon-cyan/5"
    },
    {
        title: "Security Protocols",
        desc: "Configure encryption keys and access control.",
        icon: <Shield className="w-5 h-5" />,
        color: "text-neon-purple",
        borderColor: "border-neon-purple/20",
        glowColor: "bg-neon-purple/5"
    },
    {
        title: "Frequency Updates",
        desc: "Neural link notifications and archive sync alerts.",
        icon: <Bell className="w-5 h-5" />,
        color: "text-emerald-400",
        borderColor: "border-emerald-400/20",
        glowColor: "bg-emerald-400/5"
    },
    {
        title: "Resource Allocation",
        desc: "Manage premium compute-cycle subscriptions.",
        icon: <CreditCard className="w-5 h-5" />,
        color: "text-cyber-pink",
        borderColor: "border-cyber-pink/20",
        glowColor: "bg-cyber-pink/5"
    }
];

export default function SettingsPage() {
    return (
        <div className="p-4 sm:p-10 max-w-4xl mx-auto space-y-12 pb-20">
            {/* Header */}
            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3"
                >
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                        <Cpu className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">System Configuration</span>
                </motion.div>
                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase italic">
                    Node <span className="text-neon-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">Config.</span>
                </h1>
                <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl">
                    Recalibrate your neural interface and security parameters for peak career performance.
                </p>
            </div>

            {/* Config Sections */}
            <div className="grid grid-cols-1 gap-6">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`group relative p-6 sm:p-8 rounded-[2rem] glass border ${section.borderColor} overflow-hidden hover:scale-[1.01] transition-all duration-300`}
                    >
                        <div className={`absolute top-0 right-0 w-64 h-64 ${section.glowColor} rounded-full blur-[80px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="flex gap-6 items-start">
                                <div className={`p-4 rounded-2xl glass border border-white/5 ${section.color} shadow-2xl`}>
                                    {section.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-white tracking-tight uppercase italic">{section.title}</h3>
                                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{section.desc}</p>
                                </div>
                            </div>
                            <Button className="w-full sm:w-auto rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest h-12 px-8 transition-all">
                                Initialize Edit
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Dangerous Zone */}
            <div className="pt-8 sm:pt-12 border-t border-white/5">
                <div className="p-8 sm:p-10 rounded-[2.5rem] bg-red-500/5 border border-red-500/10 space-y-6">
                    <div className="flex items-center gap-3 text-red-400">
                        <Zap className="w-5 h-5" />
                        <h3 className="text-lg font-black uppercase tracking-widest">Self-Destruct Protocol</h3>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-2xl">
                        Warning: Activating this protocol will permanently wipe your neural archives and career trajectory data from our silicon matrices. This action is irreversible.
                    </p>
                    <Button variant="outline" className="rounded-xl border-red-500/20 text-red-500 hover:bg-red-500/10 font-black text-[10px] uppercase tracking-widest h-12 px-8">
                        Terminate Account
                    </Button>
                </div>
            </div>

            {/* System Status Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 text-slate-600">
                <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Neural Link Status: Encrypted // Solid</span>
                </div>
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-neon-cyan" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">v4.2.0-Titanium</span>
                </div>
            </div>
        </div>
    );
}
