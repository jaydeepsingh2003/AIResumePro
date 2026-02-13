"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Target,
    Zap,
    BarChart3,
    MessageSquare,
    ClipboardList,
    LucideIcon
} from "lucide-react";

interface FeatureProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

const FeatureCard = ({ title, description, icon: Icon, color }: FeatureProps) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-indigo-600/20 transition-all duration-300 group"
        >
            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4 tracking-tight">{title}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    );
};

export const Features = () => {
    const featureList = [
        {
            title: "AI Resume Builder",
            description: "Smart content suggestions and real-time rewriting. Our AI understands your industry and suggests bullet points that get seen.",
            icon: Cpu,
            color: "bg-indigo-600 shadow-indigo-200 shadow-lg"
        },
        {
            title: "Advanced ATS Scanner",
            description: "Go beyond keyword matching. Our scanner uses neural networks to understand semantic relevance and intent.",
            icon: Target,
            color: "bg-blue-600 shadow-blue-200 shadow-lg"
        },
        {
            title: "Job Optimization Engine",
            description: "Upload a job description and watch AI pivot your entire resume to match the exact role requirements automatically.",
            icon: Zap,
            color: "bg-amber-500 shadow-amber-200 shadow-lg"
        },
        {
            title: "Career Dashboard",
            description: "Track your applications, monitor your ATS scores across multiple versions, and get predictive insights on your job search.",
            icon: BarChart3,
            color: "bg-emerald-500 shadow-emerald-200 shadow-lg"
        },
        {
            title: "Interview AI",
            description: "Get personalized mock interview questions based on your resume and the target company's culture and requirements.",
            icon: MessageSquare,
            color: "bg-purple-600 shadow-purple-200 shadow-lg"
        },
        {
            title: "Application Tracker",
            description: "Organize your job search funnel. Know exactly when to follow up and keep track of every document sent.",
            icon: ClipboardList,
            color: "bg-rose-500 shadow-rose-200 shadow-lg"
        }
    ];

    return (
        <section id="features" className="py-32 bg-slate-50 dark:bg-slate-900/20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-6 tracking-tight">Everything you need to <span className="text-indigo-600">get hired.</span></h2>
                    <p className="text-lg text-slate-500 font-medium">Built by career experts and refined by state-of-the-art artificial intelligence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureList.map((feature, idx) => (
                        <FeatureCard key={idx} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};
