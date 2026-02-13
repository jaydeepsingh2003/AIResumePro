"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { fetchResumes } from '@/lib/api';

export function LiveResumeCounter() {
    const [resumeCount, setResumeCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCount = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setResumeCount(0);
                setIsLoading(false);
                return;
            }

            const resumes = await fetchResumes();
            setResumeCount(resumes.length);
        } catch (err) {
            console.error('Failed to fetch resume count:', err);
            setResumeCount(0);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCount();
        const interval = setInterval(fetchCount, 10000);
        return () => clearInterval(interval);
    }, []);

    // Don't show if not logged in
    if (resumeCount === null && !isLoading) return null;
    if (resumeCount === 0 && !localStorage.getItem('token')) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 right-4 sm:top-20 sm:right-6 z-40"
        >
            <div className="glass rounded-full border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-xl shadow-lg flex items-center gap-2 sm:gap-3">
                {/* Icon */}
                <div className="p-1 sm:p-1.5 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20">
                    <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neon-cyan" />
                </div>

                {/* Count */}
                {isLoading ? (
                    <div className="h-4 w-12 sm:w-16 rounded bg-white/5 animate-pulse" />
                ) : (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <motion.span
                            key={resumeCount}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="text-base sm:text-lg font-black text-white"
                        >
                            {resumeCount}
                        </motion.span>
                        <span className="text-[10px] sm:text-xs font-medium text-slate-400">
                            Resume{resumeCount !== 1 ? 's' : ''}
                        </span>
                    </div>
                )}

                {/* Live Indicator */}
                {!isLoading && (
                    <div className="flex items-center gap-1 sm:gap-1.5">
                        <div className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 bg-neon-cyan"></span>
                        </div>
                        <span className="text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-wider hidden xs:inline">Live</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

