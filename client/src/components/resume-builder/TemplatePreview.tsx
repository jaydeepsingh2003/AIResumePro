"use client";

import { motion } from "framer-motion";

export const TemplateCard = ({
    template,
    selected,
    onSelect,
}: {
    template: any;
    selected: boolean;
    onSelect: () => void;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative cursor-pointer rounded-lg border-2 overflow-hidden transition-all ${selected ? "border-primary ring-2 ring-primary ring-offset-2" : "border-transparent"
                }`}
            onClick={onSelect}
        >
            <div className="aspect-[210/297] bg-slate-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground uppercase font-bold tracking-widest">
                    {template.name}
                </div>
            </div>
            <div className="p-2 text-center text-sm font-medium bg-white">
                {template.name}
            </div>
        </motion.div>
    );
};
