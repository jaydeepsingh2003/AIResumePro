import React, { useState } from 'react';
import { RESUME_TEMPLATES } from '@/data/templates';
import { TemplateConfig } from '@/types/template';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Search,
    Layout,
    ChevronRight,
    Check,
    Briefcase,
    Code,
    Palette,
    GraduationCap,
    BookOpen,
    Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';

interface TemplateGalleryProps {
    onSelect: (template: TemplateConfig) => void;
    onClose: () => void;
    currentTemplateId?: string;
}

const TemplateMockup = ({ category }: { category: string }) => {
    const getMockup = () => {
        switch (category) {
            case 'tech':
                return (
                    <div className="w-full h-full p-4 flex gap-2">
                        <div className="w-1/3 h-full bg-slate-100 rounded-lg flex flex-col gap-2 p-2">
                            <div className="w-8 h-8 rounded-full bg-slate-300 shadow-sm" />
                            <div className="w-full h-2 bg-slate-200 rounded" />
                            <div className="w-full h-2 bg-slate-200 rounded" />
                            <div className="mt-auto space-y-1">
                                <div className="w-full h-1 bg-indigo-200 rounded" />
                                <div className="w-3/4 h-1 bg-indigo-200 rounded" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-4 p-2">
                            <div className="w-3/4 h-4 bg-slate-200 rounded" />
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-slate-100 rounded" />
                                <div className="w-full h-2 bg-slate-100 rounded" />
                                <div className="w-1/2 h-2 bg-slate-100 rounded" />
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="w-full h-2 bg-slate-100 rounded" />
                                <div className="w-full h-2 bg-slate-100 rounded" />
                            </div>
                        </div>
                    </div>
                );
            case 'corporate':
                return (
                    <div className="w-full h-full p-6 flex flex-col gap-6">
                        <div className="w-full border-b pb-4 flex justify-between items-center">
                            <div className="space-y-2">
                                <div className="w-32 h-4 bg-slate-300 rounded" />
                                <div className="w-24 h-2 bg-indigo-100 rounded" />
                            </div>
                            <div className="w-12 h-2 bg-slate-100 rounded" />
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="space-y-2">
                                    <div className="w-full h-2 bg-slate-200 rounded" />
                                    <div className="w-5/6 h-2 bg-slate-100 rounded" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto grid grid-cols-2 gap-4">
                            <div className="w-full h-2 bg-slate-50 rounded" />
                            <div className="w-full h-2 bg-slate-50 rounded" />
                        </div>
                    </div>
                );
            case 'creative':
                return (
                    <div className="w-full h-full relative overflow-hidden bg-white">
                        <div className="absolute top-0 left-0 w-24 h-full bg-indigo-600 opacity-5" />
                        <div className="relative p-6 space-y-8">
                            <div className="w-full h-12 bg-slate-50 rounded-2xl flex items-center px-4">
                                <div className="w-24 h-3 bg-slate-200 rounded-full" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square bg-slate-100 rounded-xl" />
                                <div className="flex flex-col gap-2 justify-center">
                                    <div className="w-full h-2 bg-slate-200 rounded" />
                                    <div className="w-full h-2 bg-slate-200 rounded" />
                                    <div className="w-1/2 h-2 bg-indigo-200 rounded" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="w-full h-2 bg-slate-50 rounded" />
                                <div className="w-full h-2 bg-slate-50 rounded" />
                                <div className="w-3/4 h-2 bg-slate-50 rounded" />
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="w-full h-full p-8 space-y-4 text-center items-center flex flex-col justify-center">
                        <div className="w-1/2 h-4 bg-slate-200 rounded mx-auto" />
                        <div className="w-full h-px bg-slate-100" />
                        <div className="space-y-2 w-full">
                            <div className="w-full h-2 bg-slate-50 rounded" />
                            <div className="w-full h-2 bg-slate-50 rounded" />
                            <div className="w-full h-2 bg-slate-50 rounded" />
                        </div>
                        <div className="w-full h-24 bg-slate-50/50 rounded-xl border-2 border-dashed border-slate-100 flex items-center justify-center mt-4">
                            <Layout className="w-6 h-6 text-slate-200" />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="w-full h-full bg-white transition-opacity">
            {getMockup()}
        </div>
    );
};

export function TemplateGallery({ onSelect, onClose, currentTemplateId }: TemplateGalleryProps) {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Templates', icon: Layout },
        { id: 'corporate', name: 'Corporate', icon: Briefcase },
        { id: 'tech', name: 'Tech', icon: Code },
        { id: 'creative', name: 'Creative', icon: Palette },
        { id: 'entry', name: 'Student', icon: GraduationCap },
        { id: 'academic', name: 'Academic', icon: BookOpen },
        { id: 'international', name: 'Global', icon: Globe },
    ];

    const filteredTemplates = RESUME_TEMPLATES.filter(t => {
        const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
        const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white dark:bg-slate-900 w-full max-w-6xl h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-white/20"
            >
                {/* Header */}
                <div className="p-8 border-b flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Template Gallery</h2>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mt-1">Choose your professional identity</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                            <Input
                                placeholder="Search templates..."
                                className="pl-10 h-11 w-64 bg-white dark:bg-slate-900 border-slate-200 rounded-2xl font-bold"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 h-10 w-10">
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                    {/* Sidebar Navigation */}
                    <div className="w-64 border-r p-6 space-y-2 bg-slate-50/30 dark:bg-slate-800/20">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-black text-sm ${activeCategory === cat.id
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 translate-x-1'
                                    : 'text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                                    }`}
                            >
                                <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-white' : 'text-slate-400'}`} />
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Template Grid */}
                    <ScrollArea className="flex-1 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTemplates.map((template) => (
                                <motion.div
                                    layout
                                    key={template.id}
                                    className="group relative flex flex-col"
                                >
                                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm transition-all group-hover:shadow-2xl group-hover:scale-[1.02] group-hover:-translate-y-2">
                                        {/* Live Mockup Engine */}
                                        <TemplateMockup category={template.category} />

                                        {/* Overlay Action */}
                                        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors flex items-center justify-center">
                                            <Button
                                                onClick={() => onSelect(template)}
                                                className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white hover:bg-indigo-50 text-indigo-600 font-black px-6 rounded-2xl shadow-xl"
                                            >
                                                {currentTemplateId === template.id ? 'Current' : 'Select Template'}
                                            </Button>
                                        </div>

                                        {currentTemplateId === template.id && (
                                            <div className="absolute top-4 right-4 bg-indigo-600 text-white p-2 rounded-full shadow-lg">
                                                <Check className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4 px-2">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-black text-slate-900 dark:text-white truncate">{template.name}</h3>
                                            <Badge variant="secondary" className="text-[9px] uppercase font-black bg-slate-100 text-slate-500">
                                                {template.category}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-1 font-bold">{template.description || 'No description'}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </motion.div>
        </motion.div>
    );
}
