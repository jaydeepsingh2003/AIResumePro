"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, Terminal, Zap, User, LogOut, Settings, FileText } from "lucide-react";

export const Navbar = () => {
    const router = useRouter();
    const { scrollY } = useScroll();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.9)"]);
    const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(24px)"]);

    useEffect(() => {
        // Check if user is logged in
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
            style={{ backgroundColor, backdropBlur }}
            className="fixed top-0 w-full h-24 px-6 z-50 flex items-center justify-between border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-slate-950 p-2.5 rounded-xl border border-white/10">
                            <Sparkles className="w-6 h-6 text-neon-cyan animate-pulse" />
                        </div>
                    </div>
                    <span className="font-black text-3xl tracking-tighter text-white uppercase group-hover:text-neon-cyan transition-colors">AI Resume <span className="text-slate-500 group-hover:text-white transition-colors">PRO</span></span>
                </Link>

                <div className="hidden lg:flex items-center gap-12 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-xl shadow-2xl">
                    <Link href="/#features" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-neon-cyan transition-colors flex items-center gap-2">
                        <Terminal className="w-3 h-3 text-neon-cyan/50" /> Features
                    </Link>
                    <Link href="/#templates" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-neon-cyan transition-colors flex items-center gap-2">
                        <Zap className="w-3 h-3 text-neon-purple/50" /> Blueprints
                    </Link>
                    <Link href="/#pricing" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-neon-cyan transition-colors">Resource Allocation</Link>
                </div>

                <div className="flex items-center gap-6">
                    {isLoggedIn ? (
                        <div className="relative">
                            <Button
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-white/10 text-white hover:from-neon-cyan/30 hover:to-neon-purple/30 px-4 h-12 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,242,255,0.1)]"
                            >
                                <User className="w-4 h-4 mr-2" />
                                Profile
                            </Button>

                            {/* Profile Dropdown */}
                            <AnimatePresence>
                                {isProfileMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 top-14 w-56 glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                                    >
                                        <div className="p-2">
                                            <Link
                                                href="/dashboard"
                                                onClick={() => setIsProfileMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                                            >
                                                <FileText className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                                                <span className="text-sm font-medium text-slate-300 group-hover:text-white">Dashboard</span>
                                            </Link>

                                            <Link
                                                href="/settings"
                                                onClick={() => setIsProfileMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                                            >
                                                <Settings className="w-4 h-4 text-slate-400 group-hover:text-neon-purple group-hover:scale-110 transition-all" />
                                                <span className="text-sm font-medium text-slate-300 group-hover:text-white">Settings</span>
                                            </Link>

                                            <div className="h-px bg-white/5 my-2" />

                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 transition-colors group"
                                            >
                                                <LogOut className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                                                <span className="text-sm font-medium text-red-400 group-hover:text-red-300">Logout</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <>
                            <Link href="/login">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white cursor-pointer hidden sm:inline-flex transition-colors">Secure_Login</span>
                            </Link>
                            <Link href="/builder/new">
                                <Button className="bg-white text-black hover:bg-neon-cyan px-8 h-12 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95">
                                    Initialize Builder
                                </Button>
                            </Link>
                        </>
                    )}

                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden text-white hover:bg-white/5 rounded-xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="absolute top-24 left-0 w-full glass border-b border-white/10 overflow-hidden lg:hidden"
                    >
                        <div className="p-6 flex flex-col gap-6 text-center">
                            <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-neon-cyan transition-colors">Core Intelligence</Link>
                            <Link href="/#templates" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-neon-cyan transition-colors">Neural Blueprints</Link>
                            <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-neon-cyan transition-colors">Pricing</Link>

                            {isLoggedIn && (
                                <>
                                    <div className="h-px bg-white/10" />
                                    <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-widest text-neon-cyan hover:text-white transition-colors">Dashboard</Link>
                                    <button onClick={handleLogout} className="text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors">Logout</button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
