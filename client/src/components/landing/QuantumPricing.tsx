"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Crown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
    {
        name: "Observer",
        price: "0",
        desc: "Entry level access to the Neural Engine. Perfect for standard trajectory optimization.",
        features: ["3 AI Resumes", "Basic ATS Scoring", "Standard Templates", "Public Link Access"],
        button: "Begin Extraction",
        highlight: false
    },
    {
        name: "Architect",
        price: "19",
        desc: "Advanced predictive modeling for serious career pivots and high-stakes transitions.",
        features: ["Unlimited Resumes", "Priority Neural Processing", "Deep ATS Infiltration", "Interview Simulation", "Custom Domain Hosting"],
        button: "Upgrade to Architect",
        highlight: true
    },
    {
        name: "Neural Elite",
        price: "49",
        desc: "Full access to the digital intelligence lab. Custom-trained career trajectories.",
        features: ["Everything in Architect", "1-on-1 AI Strategy", "Ghost Mode Infiltration", "Global Talent Network", "Lifetime Legacy Access"],
        button: "Contact Elite Operations",
        highlight: false
    }
];

export const QuantumPricing = () => {
    return (
        <section className="py-32 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter">RESOURCE ALLOCATION</h2>
                    <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Select your access level to the AI Resume Pro intelligence network. Pricing is calculated based on compute-intensity and career-uplift potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative p-1 rounded-[3rem] overflow-hidden group ${tier.highlight ? 'bg-gradient-to-b from-neon-cyan via-neon-purple to-cyber-pink shadow-[0_0_50px_rgba(0,242,255,0.2)]' : 'bg-white/5 shadow-2xl'}`}
                        >
                            <div className="h-full bg-slate-950 rounded-[2.9rem] p-10 flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{tier.name}</h3>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-black text-white tracking-tighter">${tier.price}</span>
                                            <span className="text-slate-500 font-bold">/MO</span>
                                        </div>
                                    </div>
                                    {tier.highlight && (
                                        <div className="bg-neon-cyan/10 text-neon-cyan p-3 rounded-2xl border border-neon-cyan/20">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>

                                <p className="text-slate-400 font-light mb-10 leading-relaxed text-sm">
                                    {tier.desc}
                                </p>

                                <div className="space-y-4 mb-12 flex-1">
                                    {tier.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tier.highlight ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-white/5 text-slate-500'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-300">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full h-16 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${tier.highlight ? 'bg-white text-black hover:bg-neon-cyan' : 'bg-white/5 text-white hover:bg-white/10'}`}
                                >
                                    {tier.button}
                                </Button>
                            </div>

                            {/* Decorative corner indicator */}
                            <div className="absolute top-0 right-0 p-4">
                                <Info className="w-4 h-4 text-slate-700 hover:text-white cursor-pointer" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-flex items-center gap-4 glass px-8 py-4 rounded-full border-white/5">
                        <Shield className="w-5 h-5 text-emerald-400" />
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Enterprise-Grade Security Protocol // SOC2 Complaint // Neural Isolation</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
