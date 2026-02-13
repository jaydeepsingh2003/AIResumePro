import { Resume } from "@/types/resume";
import { motion } from "framer-motion";
import { ModernTemplate } from "../resume-templates/ModernTemplate";
import { ProfessionalTemplate } from "../resume-templates/ProfessionalTemplate";
import { DoubleColumnTemplate } from "../resume-templates/DoubleColumnTemplate";
import { MinimalTemplate } from "../resume-templates/MinimalTemplate";

export function ResumePreview({ resume }: { resume: Resume }) {
    // Determine which template to render based on resume style
    // Default to Modern (Sidebar) if not specified
    const layout = resume.style?.layout || 'sidebar';
    const font = resume.style?.font || 'sans';

    const fontClasses = {
        sans: 'font-sans',
        serif: 'font-serif',
        mono: 'font-mono'
    };

    const getTemplate = () => {
        switch (layout) {
            case 'single':
                return <ProfessionalTemplate resume={resume} />;
            case 'double':
                return <DoubleColumnTemplate resume={resume} />;
            case 'minimal':
                return <MinimalTemplate resume={resume} />;
            case 'sidebar':
            default:
                return <ModernTemplate resume={resume} />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`w-full h-full bg-white shadow-2xl relative min-h-[297mm] ${fontClasses[font as keyof typeof fontClasses] || 'font-sans'}`}
            id="resume-preview-container"
            style={{
                '--accent-color': resume.style?.color || '#4F46E5'
            } as React.CSSProperties}
        >
            {getTemplate()}

            <footer className="absolute bottom-2 left-0 right-0 text-center text-[8px] text-slate-300 uppercase tracking-[0.4em] font-medium print:hidden pointer-events-none">
                Created with AI Resume Pro • {new Date().getFullYear()}
            </footer>
        </motion.div>
    );
}
