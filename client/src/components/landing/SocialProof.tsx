"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const SocialProof = () => {
    const reviews = [
        {
            name: "Sarah Johnson",
            role: "Product Manager at Airbnb",
            text: "This AI builder is magic. I landed my Airbnb role within 2 weeks of using it. The job optimizer feature is a game changer.",
            avatar: "SJ"
        },
        {
            name: "David Chen",
            role: "Software Engineer at Google",
            text: "The ATS score was scary accurate. It found missing keywords I never would have thought of. Highly recommend.",
            avatar: "DC"
        },
        {
            name: "Elena Rodriguez",
            role: "Marketing Director",
            text: "I've tried every resume builder out there, but AI Resume Pro is on another level. The UI is gorgeous and intuitive.",
            avatar: "ER"
        }
    ];

    const stats = [
        { label: "Resumes Created", value: "250,000+" },
        { label: "Interview Success Rate", value: "92%" },
        { label: "Average Rating", value: "4.8/5" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    {/* Stats Left */}
                    <div className="space-y-12">
                        {stats.map((stat, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                key={idx}
                                className="group"
                            >
                                <div className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-2 group-hover:text-brand-indigo transition-colors">{stat.value}</div>
                                <div className="text-lg font-medium text-slate-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonials Right - 2 cols */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviews.map((review, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                key={idx}
                                className={`p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:shadow-xl hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 ${idx === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="flex items-center gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-8 leading-relaxed italic">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-indigo flex items-center justify-center text-white font-bold">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-950 dark:text-white">{review.name}</div>
                                        <div className="text-sm text-slate-500">{review.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
