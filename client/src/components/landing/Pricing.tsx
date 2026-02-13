"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);

    const plans = [
        {
            name: "Free",
            price: "0",
            description: "Perfect for testing the waters.",
            features: ["1 Basic Resume", "Standard Templates", "Basic ATS Scan", "PDF Export"],
            cta: "Get Started",
            highlighted: false
        },
        {
            name: "Pro",
            price: isYearly ? "12" : "19",
            description: "Advanced AI power for serious hunters.",
            features: [
                "Unlimited Resumes",
                "Full AI Content Rewriter",
                "Advanced ATS Score Breakdown",
                "Job Optimization Engine",
                "Interview Simulator",
                "Priority Support"
            ],
            cta: "Get Pro Now",
            highlighted: true
        },
        {
            name: "Premium",
            price: isYearly ? "25" : "39",
            description: "Personal career concierge.",
            features: [
                "Everything in Pro",
                "Dedicated Career Coach AI",
                "LinkedIn Profile Audit",
                "Multi-role Management",
                "Early Access to AI Mockup Features"
            ],
            cta: "Go Premium",
            highlighted: false
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-6">Simple, transparent <span className="text-indigo-600">pricing.</span></h2>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm font-bold ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 bg-slate-100 dark:bg-slate-800 rounded-full p-1 relative transition-colors"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 24 : 0 }}
                                className="w-6 h-6 bg-indigo-600 rounded-full shadow-lg"
                            />
                        </button>
                        <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly (Save 40%)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            key={idx}
                            className={`p-10 rounded-[2.5rem] border ${plan.highlighted ? 'border-indigo-600 ring-4 ring-indigo-600/10 shadow-2xl relative' : 'border-slate-100 dark:border-slate-800'}`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-2">{plan.name}</h3>
                            <p className="text-slate-500 font-medium mb-8">{plan.description}</p>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-slate-950 dark:text-white">${plan.price}</span>
                                <span className="text-slate-500 font-bold">/mo</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
                                        <span className="text-slate-600 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full h-14 rounded-2xl text-lg font-bold shadow-lg transition-transform hover:scale-[1.02] ${plan.highlighted ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20' : 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:opacity-90'}`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-32 max-w-3xl mx-auto">
                    <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-12 text-center tracking-tight">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                        {[
                            { q: "Is it really ATS-friendly?", a: "Yes. Our templates are tested against major ATS like Workday, Greenhouse, and Lever." },
                            { q: "Can I cancel anytime?", a: "Absolutely. No hidden fees or long-term commitments. Cancel with one click." },
                            { q: "How does the AI work?", a: "We use a fine-tuned GPT-4o model trained on 50,000+ top-tier resumes specifically for your industry." }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                                <h4 className="text-lg font-black text-slate-950 dark:text-white mb-2">{faq.q}</h4>
                                <p className="text-slate-500 font-medium">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Reassurance */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-16 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-slate-400" />
                        <span className="text-slate-500 font-bold">Secure SSL Encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <HelpCircle className="w-6 h-6 text-slate-400" />
                        <span className="text-slate-500 font-bold">24/7 Priority Support</span>
                    </div>
                    <div className="flex items-center gap-3 text-indigo-600 font-black">
                        30-Day Money Back Guarantee
                    </div>
                </div>
            </div>
        </section>
    );
};
