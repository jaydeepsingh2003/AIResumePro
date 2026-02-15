"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Cpu,
    Menu,
    Terminal,
    Zap,
    User,
    LogOut,
    Settings,
    FileText,
    X,
    ChevronDown,
    Activity,
    Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const router = useRouter();
    const { scrollY } = useScroll();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(3, 3, 3, 0)", "rgba(3, 3, 3, 0.8)"]);
    const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(32px)"]);
    const borderOpacity = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setIsProfileMenuOpen(false);
        router.push('/');
    };

    return (
        <motion.nav
            style={{ backgroundColor, backdropFilter: backdropBlur, borderBottomColor: borderOpacity }}
            className="fixed top-0 w-full h-20 px-6 sm:px-12 z-[100] flex items-center justify-between border-b transition-colors duration-500"
        >
            <div className="max-w-[1800px] mx-auto w-full flex items-center justify-between">
                {/* Brand Identity */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="absolute -inset-2 bg-neon-cyan/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-black border border-white/10 p-2.5 rounded-xl group-hover:border-neon-cyan/50 transition-colors">
                            <Cpu className="w-5 h-5 text-neon-cyan shrink-0" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black text-white tracking-tighter uppercase italic leading-none">AI <span className="text-neon-cyan">RESUME</span></span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 hidden sm:block">Professional Builder</span>
                    </div>
                </Link>

                {/* Central Navigation HUD */}
                <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1.5 rounded-2xl backdrop-blur-2xl">
                    <Link href="/#features" className="px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 group">
                        <Terminal className="w-3.5 h-3.5 text-slate-600 group-hover:text-neon-cyan transition-colors" />
                        Features
                    </Link>
                    <div className="w-px h-4 bg-white/5 mx-2" />
                    <Link href="/templates" className="px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 group">
                        <Zap className="w-3.5 h-3.5 text-slate-600 group-hover:text-neon-purple transition-colors" />
                        Templates
                    </Link>
                    <div className="w-px h-4 bg-white/5 mx-2" />
                    <Link href="/#pricing" className="px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 group">
                        <Shield className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyber-pink transition-colors" />
                        Pricing
                    </Link>
                </div>

                {/* Action Cluster */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {isLoggedIn ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="flex items-center gap-3 glass border border-white/10 px-4 py-2.5 rounded-xl group hover:border-neon-cyan/50 transition-all active:scale-95"
                            >
                                <div className="w-6 h-6 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                                    <User className="w-3.5 h-3.5 text-neon-cyan" />
                                </div>
                                <span className="hidden sm:block text-[11px] font-bold uppercase tracking-wider text-white">Account</span>
                                <ChevronDown className={cn("w-3 h-3 text-slate-600 transition-transform duration-300", isProfileMenuOpen && "rotate-180")} />
                            </button>

                            {/* Profile Dropdown */}
                            <AnimatePresence>
                                {isProfileMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 top-14 w-64 glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-[110] p-2"
                                    >
                                        <div className="p-3 mb-2 border-b border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20">
                                                    <Activity className="w-4 h-4 text-neon-cyan" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[11px] font-bold text-white uppercase tracking-wide">Signed In</span>
                                                    <span className="text-[9px] font-medium text-slate-500 uppercase tracking-widest">Online</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            href="/dashboard"
                                            onClick={() => setIsProfileMenuOpen(false)}
                                            className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all group"
                                        >
                                            <FileText className="w-4 h-4 text-slate-500 group-hover:text-neon-cyan transition-colors" />
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white">Dashboard</span>
                                        </Link>

                                        <Link
                                            href="/settings"
                                            onClick={() => setIsProfileMenuOpen(false)}
                                            className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all group"
                                        >
                                            <Settings className="w-4 h-4 text-slate-500 group-hover:text-neon-purple transition-all group-hover:rotate-90" />
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white">Settings</span>
                                        </Link>

                                        <div className="h-px bg-white/5 my-2" />

                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-red-500/10 transition-all group"
                                        >
                                            <LogOut className="w-4 h-4 text-red-500/50 group-hover:text-red-500 transition-colors" />
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-red-500/80 group-hover:text-red-500">Sign Out</span>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4 sm:gap-8">
                            <Link href="/login" className="hidden sm:block">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white cursor-pointer transition-colors">Login</span>
                            </Link>
                            <Link href="/builder/new">
                                <Button className="relative group/btn bg-white text-black hover:bg-neon-cyan hover:text-white px-8 h-12 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Create Resume <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-1 transition-transform" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    )}

                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden text-white hover:bg-white/5 rounded-2xl h-11 w-11 border border-white/5"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Interface */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-20 left-0 w-full bg-[#030303]/95 backdrop-blur-3xl border-b border-white/[0.05] overflow-hidden lg:hidden z-[90]"
                    >
                        <div className="p-10 flex flex-col gap-8 text-center bg-grid-white bg-[size:30px_30px]">
                            <div className="flex flex-col gap-2">
                                <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[12px] font-bold uppercase tracking-widest text-slate-400 hover:text-neon-cyan transition-colors">Features</Link>
                                <Link href="/templates" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[12px] font-bold uppercase tracking-widest text-slate-400 hover:text-neon-purple transition-colors">Templates</Link>
                                <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[12px] font-bold uppercase tracking-widest text-slate-400 hover:text-cyber-pink transition-colors">Pricing</Link>
                            </div>

                            <div className="h-px bg-white/5 mx-auto w-24" />

                            {isLoggedIn ? (
                                <div className="flex flex-col gap-4">
                                    <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="py-4 glass rounded-2xl border border-neon-cyan/20 text-[11px] font-black uppercase tracking-widest text-neon-cyan">Go to Dashboard</Link>
                                    <button
                                        onClick={handleLogout}
                                        className="py-2 text-[11px] font-bold uppercase tracking-widest text-red-500/60 hover:text-red-500"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-6">
                                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <span className="text-[12px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Login</span>
                                    </Link>
                                    <Link href="/builder/new" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button className="w-full bg-white text-black hover:bg-neon-cyan h-16 rounded-[2rem] font-black text-[11px] uppercase tracking-widest transition-all">
                                            Create Resume
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
