"use client";

import { motion } from "framer-motion";

const sections = [
    { name: "Header", strength: 95, color: "bg-emerald-500" },
    { name: "Summary", strength: 80, color: "bg-emerald-400" },
    { name: "Experience", strength: 90, color: "bg-emerald-500" },
    { name: "Skills", strength: 40, color: "bg-amber-400" },
    { name: "Education", strength: 75, color: "bg-emerald-300" },
    { name: "Projects", strength: 20, color: "bg-red-400" },
];

export const StructureHeatmap = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-indigo-200 uppercase tracking-widest">Structural Heatmap</h4>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
            </div>

            <div className="space-y-2">
                {sections.map((section, idx) => (
                    <div key={idx} className="relative group">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-indigo-100">{section.name}</span>
                            <span className="text-[10px] font-black text-white/50">{section.strength}%</span>
                        </div>
                        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${section.strength}%` }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className={`h-full ${section.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                            />
                        </div>

                        {/* Tooltip on hover */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-slate-900 text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-100 z-10 whitespace-nowrap">
                            {section.strength < 50 ? "Priority Improvement Needed" : "Optimal Placement"}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] text-indigo-200 font-medium leading-tight">
                    AI suggests moving <span className="text-white font-bold underline">Skills</span> above Education for a 12% higher scan rate.
                </p>
            </div>
        </div>
    );
};
