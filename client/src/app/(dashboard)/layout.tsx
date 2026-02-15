"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Menu, X, Sparkles, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const isGuestBuilder = pathname === "/builder/new";

        if (!token && !isGuestBuilder) {
            router.push("/login");
        }
    }, [router, pathname]);

    // Close mobile sidebar on route change
    useEffect(() => {
        setIsMobileSidebarOpen(false);
    }, [pathname]);

    return (
        <div className="h-full relative bg-titanium-black text-white min-h-screen">
            {/* Mobile Nav Bar */}
            <div className="md:hidden flex items-center justify-between h-20 px-6 bg-black/60 border-b border-white/5 fixed top-0 w-full z-40 backdrop-blur-xl">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <div className="bg-neon-cyan/10 p-2 rounded-lg border border-neon-cyan/20">
                        <Cpu className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <span className="font-black text-lg tracking-tighter uppercase italic leading-none text-white">AI <span className="text-neon-cyan">RESUME</span></span>
                </Link>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="text-white hover:bg-white/5"
                >
                    <Menu className="w-6 h-6" />
                </Button>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-[80] bg-black/40 text-slate-400 w-64 backdrop-blur-3xl">
                <Sidebar />
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileSidebarOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] md:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-80 bg-slate-950 z-[100] md:hidden border-r border-white/5"
                        >
                            <div className="absolute top-6 right-6 z-50">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsMobileSidebarOpen(false)}
                                    className="text-white hover:bg-white/5"
                                >
                                    <X className="w-6 h-6" />
                                </Button>
                            </div>
                            <Sidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <main className="md:pl-64 pt-20 md:pt-0 min-h-screen relative">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
