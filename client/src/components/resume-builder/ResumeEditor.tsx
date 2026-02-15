"use client";

import { Resume } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    User,
    Briefcase,
    GraduationCap,
    Wand2,
    Plus,
    Trash2,
    Loader2,
    ChevronDown,
    ChevronUp,
    Layout,
    Sparkles,
    Award,
    Languages,
    Link as LinkIcon,
    Code,
    Book,
    Heart,
    Users,
    FileCheck,
    Presentation,
    PhoneOutgoing,
    Hash,
    MapPin,
    Milestone,
    Building,
    Target,
    Trophy,
    Network,
    Cpu,
    Eye,
    EyeOff,
    Megaphone
} from "lucide-react";
import { useState } from "react";
import { improveText } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";

import { templates as availableTemplates } from "@/data/templates";

// ... (imports remain same)

export function ResumeEditor({
    resume,
    onUpdate,
}: {
    resume: Resume;
    onUpdate: (resume: Resume) => void;
}) {
    const [improvingField, setImprovingField] = useState<string | null>(null);
    const [expandedSection, setExpandedSection] = useState<string>("basics");
    const [isTemplatePickerOpen, setIsTemplatePickerOpen] = useState(false);

    const getTemplateColor = (id: string) => {
        switch (id) {
            case 'sidebar': return 'bg-slate-900 shadow-[0_0_20px_rgba(0,242,255,0.1)]';
            case 'double': return 'bg-slate-800 border-t-8 border-neon-purple shadow-[0_0_20px_rgba(188,19,254,0.1)]';
            case 'minimal': return 'bg-slate-950 border-l-4 border-white/20';
            case 'single': return 'bg-white/5 border-2 border-white/10';
            default: return 'bg-white/5 border border-white/10';
        }
    };

    const templates = availableTemplates.map(t => ({
        ...t,
        color: getTemplateColor(t.id)
    }));

    const handleTemplateChange = (templateId: string) => {
        onUpdate({
            ...resume,
            style: {
                ...resume.style,
                layout: templateId
            }
        });
        setIsTemplatePickerOpen(false);
    };

    const handleFontChange = (fontId: string) => {
        onUpdate({
            ...resume,
            style: {
                ...resume.style,
                font: fontId
            }
        });
    };

    const handleColorChange = (color: string) => {
        onUpdate({
            ...resume,
            style: {
                ...resume.style,
                color
            }
        });
    };

    const handleBasicChange = (field: string, value: string) => {
        onUpdate({
            ...resume,
            content: {
                ...resume.content,
                basics: {
                    ...resume.content.basics,
                    [field]: value
                }
            }
        });
    };

    const handleImprove = async (
        field: 'summary' | 'experience' | 'objective' | 'project' | 'volunteer' | 'leadership' | 'awards' | 'publications' | 'conferences',
        index?: number
    ) => {
        let currentText = "";
        let id = field as string;

        if (field === 'summary') {
            currentText = resume.content.basics.summary;
        } else if (field === 'objective') {
            currentText = resume.content.basics.objective || "";
        } else if (field === 'experience' && index !== undefined) {
            currentText = resume.content.work[index].description;
            id = `work-${index}`;
        } else if (field === 'project' && index !== undefined) {
            currentText = resume.content.projects[index].description;
            id = `project-${index}`;
        } else if (field === 'volunteer' && index !== undefined) {
            currentText = resume.content.volunteer?.[index].highlights?.[0] || "";
            id = `volunteer-${index}`;
        } else if (field === 'leadership' && index !== undefined) {
            currentText = resume.content.leadership?.[index].impact || resume.content.leadership?.[index].description || "";
            id = `leadership-${index}`;
        } else if (field === 'awards' && index !== undefined) {
            currentText = resume.content.awards?.[index].description || "";
            id = `awards-${index}`;
        } else if (field === 'publications' && index !== undefined) {
            currentText = resume.content.publications?.[index].description || "";
            id = `publications-${index}`;
        } else if (field === 'conferences' && index !== undefined) {
            currentText = resume.content.conferences?.[index].description || "";
            id = `conferences-${index}`;
        }

        if (!currentText) return;

        setImprovingField(id);
        try {
            const improved = await improveText(currentText, "professional, punchy, metric-oriented");

            if (field === 'summary') {
                handleBasicChange('summary', improved.improvedText);
            } else if (field === 'objective') {
                handleBasicChange('objective', improved.improvedText);
            } else if (field === 'experience' && index !== undefined) {
                const newWork = [...resume.content.work];
                newWork[index].description = improved.improvedText;
                onUpdate({
                    ...resume,
                    content: { ...resume.content, work: newWork }
                });
            } else if (field === 'project' && index !== undefined) {
                const newProjects = [...resume.content.projects];
                newProjects[index].description = improved.improvedText;
                onUpdate({
                    ...resume,
                    content: { ...resume.content, projects: newProjects }
                });
            } else if (field === 'volunteer' && index !== undefined) {
                const n = [...(resume.content.volunteer || [])];
                n[index].highlights = [improved.improvedText];
                onUpdate({ ...resume, content: { ...resume.content, volunteer: n } });
            } else if (field === 'leadership' && index !== undefined) {
                const n = [...(resume.content.leadership || [])];
                n[index].impact = improved.improvedText;
                onUpdate({ ...resume, content: { ...resume.content, leadership: n } });
            } else if (field === 'awards' && index !== undefined) {
                const n = [...(resume.content.awards || [])];
                n[index].description = improved.improvedText;
                onUpdate({ ...resume, content: { ...resume.content, awards: n } });
            } else if (field === 'publications' && index !== undefined) {
                const n = [...(resume.content.publications || [])];
                n[index].description = improved.improvedText;
                onUpdate({ ...resume, content: { ...resume.content, publications: n } });
            } else if (field === 'conferences' && index !== undefined) {
                const n = [...(resume.content.conferences || [])];
                n[index].description = improved.improvedText;
                onUpdate({ ...resume, content: { ...resume.content, conferences: n } });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setImprovingField(null);
        }
    };

    const addWork = () => {
        const newWork = [
            ...resume.content.work,
            { company: "", position: "", startDate: "", endDate: "", description: "", highlights: [], technologies: [] }
        ];
        onUpdate({
            ...resume,
            content: { ...resume.content, work: newWork }
        });
    };

    const removeWork = (index: number) => {
        const newWork = resume.content.work.filter((_, i) => i !== index);
        onUpdate({
            ...resume,
            content: { ...resume.content, work: newWork }
        });
    };

    const addEducation = () => {
        const newEdu = [
            ...resume.content.education,
            { institution: "", area: "", studyType: "", startDate: "", endDate: "", coursework: [] }
        ];
        onUpdate({
            ...resume,
            content: { ...resume.content, education: newEdu }
        });
    };

    const removeEducation = (index: number) => {
        const newEdu = resume.content.education.filter((_, i) => i !== index);
        onUpdate({
            ...resume,
            content: { ...resume.content, education: newEdu }
        });
    };

    const addSkill = () => {
        const newSkills = [
            ...resume.content.skills,
            { name: "", level: "Beginner" as any, type: "Technical" as any }
        ];
        onUpdate({
            ...resume,
            content: { ...resume.content, skills: newSkills }
        });
    };

    const removeSkill = (index: number) => {
        const newSkills = resume.content.skills.filter((_, i) => i !== index);
        onUpdate({
            ...resume,
            content: { ...resume.content, skills: newSkills }
        });
    };

    const addProject = () => {
        const newProjects = [
            ...resume.content.projects,
            { name: "", description: "", url: "" }
        ];
        onUpdate({
            ...resume,
            content: { ...resume.content, projects: newProjects }
        });
    };

    const removeProject = (index: number) => {
        const newProjects = resume.content.projects.filter((_, i) => i !== index);
        onUpdate({
            ...resume,
            content: { ...resume.content, projects: newProjects }
        });
    };

    const addCertification = () => {
        const newCerts = [
            ...(resume.content.certifications || []),
            { name: "", issuer: "", date: "" }
        ];
        onUpdate({
            ...resume,
            content: { ...resume.content, certifications: newCerts }
        });
    };

    const removeCertification = (index: number) => {
        const newCerts = (resume.content.certifications || []).filter((_, i) => i !== index);
        onUpdate({
            ...resume,
            content: { ...resume.content, certifications: newCerts }
        });
    };

    const addLanguage = () => {
        const newLangs = [
            ...(resume.content.languages || []),
            { language: "", fluency: "Native" as any }
        ];
        onUpdate({
            ...resume,
            content: { ...resume.content, languages: newLangs }
        });
    };

    const removeLanguage = (index: number) => {
        const newLangs = (resume.content.languages || []).filter((_, i) => i !== index);
        onUpdate({
            ...resume,
            content: { ...resume.content, languages: newLangs }
        });
    };

    const addItem = (section: string, emptyItem: any) => {
        onUpdate({
            ...resume,
            content: {
                ...resume.content,
                [section]: [...(resume.content[section] || []), emptyItem]
            }
        });
    };

    const removeItem = (section: string, index: number) => {
        onUpdate({
            ...resume,
            content: {
                ...resume.content,
                [section]: (resume.content[section] || []).filter((_: any, i: number) => i !== index)
            }
        });
    };

    const defaultOrder = ['basics', 'work', 'education', 'skills', 'projects', 'certifications', 'languages', 'awards', 'publications', 'volunteer', 'leadership', 'interests', 'affiliations', 'patents', 'conferences', 'references'] as const;

    const handleMoveSection = (index: number, direction: 'up' | 'down', e: React.MouseEvent) => {
        e.stopPropagation();
        const order = Array.from(resume.style?.sectionOrder || defaultOrder);
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < order.length) {
            const newOrder = [...order];
            [newOrder[index], newOrder[newIndex]] = [newOrder[newIndex], newOrder[index]];
            onUpdate({ ...resume, style: { ...resume.style, sectionOrder: newOrder } });
        }
    };

    const toggleVisibility = (section: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const currentVisibility = resume.style?.visibleSections || {};
        // Default to true if undefined
        const isVisible = currentVisibility[section] !== false;

        onUpdate({
            ...resume,
            style: {
                ...resume.style,
                visibleSections: {
                    ...currentVisibility,
                    [section]: !isVisible
                }
            }
        });
    };

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? "" : section);
    };

    const SectionHeader = ({ id, title, icon: Icon, desc }: any) => {
        const order = Array.from(resume.style?.sectionOrder || defaultOrder);
        const index = order.indexOf(id as any);
        const isActive = expandedSection === id;
        const currentVisibility = resume.style?.visibleSections || {};
        const isVisible = currentVisibility[id] !== false;

        return (
            <div className={`group/header border-b border-white/5 relative transition-all duration-500 ${isActive ? 'bg-white/5' : 'bg-transparent'} ${!isVisible ? 'opacity-50' : ''}`}>
                <div className="flex items-center">
                    <button
                        onClick={() => toggleSection(id)}
                        className="flex-1 flex items-center justify-between p-8 hover:bg-white/5 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isActive ? 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,242,255,0.5)]' : 'bg-white/5 text-slate-500 group-hover/header:text-neon-cyan'}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h3 className={`font-black uppercase tracking-widest text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover/header:text-white'}`}>{title}</h3>
                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{desc}</p>
                            </div>
                        </div>
                        {isActive ? <ChevronUp className="w-5 h-5 text-neon-cyan" /> : <ChevronDown className="w-5 h-5 text-slate-600" />}
                    </button>

                    <div className="flex flex-col border-l border-white/5 opacity-0 group-hover/header:opacity-100 transition-opacity">
                        <button
                            onClick={(e) => toggleVisibility(id, e)}
                            className={`p-4 hover:bg-white/10 text-slate-500 ${isVisible ? 'hover:text-neon-cyan' : 'text-slate-700 hover:text-slate-500'}`}
                            title={isVisible ? "Hide Section" : "Show Section"}
                        >
                            {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                        <button
                            disabled={index === 0}
                            onClick={(e) => handleMoveSection(index, 'up', e)}
                            className="p-4 hover:bg-white/10 disabled:opacity-10 text-slate-500 hover:text-neon-cyan border-t border-white/5"
                            title="Move Up"
                        >
                            <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                            disabled={index === order.length - 1}
                            onClick={(e) => handleMoveSection(index, 'down', e)}
                            className="p-4 hover:bg-white/10 disabled:opacity-10 text-slate-500 hover:text-neon-cyan border-t border-white/5"
                            title="Move Down"
                        >
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6 max-w-2xl mx-auto pb-32">
            {/* Template Selector Card */}
            <div className="glass rounded-[2.5rem] border border-white/10 shadow-2xl mb-8 overflow-hidden transition-all duration-500 backdrop-blur-3xl">
                <div
                    className="p-8 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => setIsTemplatePickerOpen(!isTemplatePickerOpen)}
                >
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                            <Layout className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Architecture</span>
                            <span className="text-lg font-black text-white uppercase tracking-tighter">
                                {templates.find(t => t.id === (resume.style?.layout || 'sidebar'))?.name || 'Titanium Pro'}
                            </span>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase text-neon-cyan tracking-widest hover:bg-neon-cyan/10 rounded-xl px-6">
                        {isTemplatePickerOpen ? 'Lock' : 'Morph'}
                    </Button>
                </div>

                <AnimatePresence>
                    {isTemplatePickerOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-black/40 border-t border-white/5"
                        >
                            <div className="p-8 space-y-10">
                                {/* Layouts */}
                                <div>
                                    <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Neural Blueprints</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {templates.map(t => (
                                            <div
                                                key={t.id}
                                                onClick={() => handleTemplateChange(t.id as any)}
                                                className={`group relative p-6 rounded-3xl border-2 cursor-pointer transition-all hover:scale-[1.02] ${resume.style?.layout === t.id ? 'border-neon-cyan bg-white/5 shadow-[0_0_30px_rgba(0,242,255,0.2)]' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                                            >
                                                <div className={`w-full h-24 rounded-xl mb-4 ${t.color} text-[8px] flex items-center justify-center font-serif text-white/20 uppercase tracking-widest relative overflow-hidden`}>
                                                    <div className="absolute inset-x-4 top-4 h-1 bg-current opacity-20 rounded-full" />
                                                    <div className="absolute inset-x-4 top-6 h-1 bg-current opacity-10 rounded-full w-2/3" />
                                                </div>
                                                <h4 className={`font-black text-sm mb-1 uppercase tracking-tight ${resume.style?.layout === t.id ? 'text-neon-cyan' : 'text-white'}`}>{t.name}</h4>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-tight">{t.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Fonts */}
                                <div>
                                    <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Typography Engine</h5>
                                    <div className="flex gap-4">
                                        {[
                                            { id: 'sans', name: 'Modern Sans', class: 'font-sans' },
                                            { id: 'serif', name: 'Elegant Serif', class: 'font-serif' },
                                            { id: 'mono', name: 'Tech Mono', class: 'font-mono' }
                                        ].map(f => (
                                            <button
                                                key={f.id}
                                                onClick={() => handleFontChange(f.id)}
                                                className={`flex-1 p-4 rounded-2xl border-2 transition-all ${resume.style?.font === f.id ? 'border-neon-purple bg-white/5 shadow-[0_0_20px_rgba(188,19,254,0.2)]' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                                            >
                                                <div className={`text-xl mb-1 ${f.class} font-bold text-white`}>Aa</div>
                                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{f.name}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Colors */}
                                <div>
                                    <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Neural Accent</h5>
                                    <div className="flex flex-wrap gap-4">
                                        {[
                                            { name: 'Cyan', value: '#00f2ff' },
                                            { name: 'Purple', value: '#bc13fe' },
                                            { name: 'Pink', value: '#ff00ff' },
                                            { name: 'Emerald', value: '#10B981' },
                                            { name: 'Amber', value: '#D97706' },
                                            { name: 'White', value: '#FFFFFF' }
                                        ].map(c => (
                                            <button
                                                key={c.value}
                                                onClick={() => handleColorChange(c.value)}
                                                className={`w-12 h-12 rounded-2xl border-2 transition-all hover:scale-110 active:scale-95 ${resume.style?.color === c.value ? 'border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                                style={{ backgroundColor: c.value }}
                                                title={c.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="glass rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl">
                {/* Basics Section */}
                <SectionHeader id="basics" title="Identity" icon={User} desc="Core persona and access details" />
                <AnimatePresence>
                    {expandedSection === "basics" && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-6 grid grid-cols-2 gap-6 bg-transparent">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</Label>
                                    <Input
                                        className="rounded-xl border-white/10 bg-white/5 h-11 focus:border-neon-cyan/50 focus:ring-neon-cyan font-medium text-white"
                                        value={resume.content.basics.name}
                                        onChange={(e) => handleBasicChange('name', e.target.value)}
                                        placeholder="Identity Label"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Job Title</Label>
                                    <Input
                                        className="rounded-xl border-white/10 bg-white/5 h-11 focus:border-neon-cyan/50 focus:ring-neon-cyan font-medium text-white"
                                        value={resume.content.basics.label}
                                        onChange={(e) => handleBasicChange('label', e.target.value)}
                                        placeholder="Operational Role"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email</Label>
                                    <Input
                                        className="rounded-xl border-white/10 bg-white/5 h-11 focus:border-neon-cyan/50 focus:ring-neon-cyan font-medium text-white"
                                        value={resume.content.basics.email}
                                        onChange={(e) => handleBasicChange('email', e.target.value)}
                                        placeholder="Comms Frequency"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phone</Label>
                                    <Input
                                        className="rounded-xl border-white/10 bg-white/5 h-11 focus:border-neon-cyan/50 focus:ring-neon-cyan font-medium text-white"
                                        value={resume.content.basics.phone}
                                        onChange={(e) => handleBasicChange('phone', e.target.value)}
                                        placeholder="Direct Uplink"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LinkedIn URL</Label>
                                    <Input
                                        className="rounded-xl border-white/10 bg-white/5 h-11 focus:border-neon-cyan/50 focus:ring-neon-cyan font-medium text-white"
                                        value={resume.content.basics.linkedinUrl}
                                        onChange={(e) => handleBasicChange('linkedinUrl', e.target.value)}
                                        placeholder="Social Neural Link"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GitHub URL</Label>
                                    <Input
                                        className="rounded-xl border-white/10 bg-white/5 h-11 focus:border-neon-cyan/50 focus:ring-neon-cyan font-medium text-white"
                                        value={resume.content.basics.githubUrl}
                                        onChange={(e) => handleBasicChange('githubUrl', e.target.value)}
                                        placeholder="Source Repository"
                                    />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <div className="flex justify-between items-center">
                                        <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Professional Summary</Label>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-7 hover:bg-neon-cyan/10"
                                            onClick={() => handleImprove('summary')}
                                            disabled={improvingField === 'summary'}
                                        >
                                            {improvingField === 'summary' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />}
                                            AI Polish
                                        </Button>
                                    </div>
                                    <Textarea
                                        className="rounded-2xl border-white/10 bg-white/5 min-h-[100px] focus:border-neon-cyan text-white text-sm leading-relaxed p-4 placeholder:text-slate-600"
                                        value={resume.content.basics.summary}
                                        onChange={(e) => handleBasicChange('summary', e.target.value)}
                                        placeholder="Summate your professional existence..."
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Experience */}
                <SectionHeader id="work" title="Experience" icon={Briefcase} desc="Professional history and impact" />
                <AnimatePresence>
                    {expandedSection === "work" && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 space-y-8 bg-transparent">
                                {resume.content.work.map((exp, idx) => (
                                    <div key={idx} className="relative p-6 rounded-3xl border border-white/10 bg-white/5 group transition-all hover:bg-white/[0.08]">
                                        <button
                                            onClick={() => removeItem('work', idx)}
                                            className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>

                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Organization</Label>
                                                <Input
                                                    className="rounded-xl h-10 bg-slate-950/50 border-white/10 text-white font-bold"
                                                    value={exp.company}
                                                    onChange={(e) => {
                                                        const n = [...resume.content.work];
                                                        n[idx].company = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, work: n } });
                                                    }}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Position</Label>
                                                <Input
                                                    className="rounded-xl h-10 bg-slate-950/50 border-white/10 text-white font-bold"
                                                    value={exp.position}
                                                    onChange={(e) => {
                                                        const n = [...resume.content.work];
                                                        n[idx].position = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, work: n } });
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Impact Logs</Label>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-6 hover:bg-neon-cyan/10"
                                                    onClick={() => handleImprove('experience', idx)}
                                                    disabled={improvingField === `work-${idx}`}
                                                >
                                                    {improvingField === `work-${idx}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />}
                                                    Improve with AI
                                                </Button>
                                            </div>
                                            <Textarea
                                                className="rounded-2xl bg-white/5 border-white/10 text-white text-sm min-h-[120px] p-4 leading-relaxed"
                                                value={exp.description}
                                                onChange={(e) => {
                                                    const n = [...resume.content.work];
                                                    n[idx].description = e.target.value;
                                                    onUpdate({ ...resume, content: { ...resume.content, work: n } });
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <Button
                                    onClick={() => addItem('work', { company: "", position: "", startDate: "", endDate: "", description: "", highlights: [], technologies: [] })}
                                    variant="outline"
                                    className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Experience Module
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Education */}
                <SectionHeader id="education" title="Education" icon={GraduationCap} desc="Academic neural training" />
                <AnimatePresence>
                    {expandedSection === "education" && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 space-y-8 bg-transparent">
                                {resume.content.education.map((edu, idx) => (
                                    <div key={idx} className="relative p-6 rounded-3xl border border-white/10 bg-white/5 group transition-all hover:bg-white/[0.08]">
                                        <button
                                            onClick={() => removeItem('education', idx)}
                                            className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="col-span-2 space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Institution</Label>
                                                <Input
                                                    className="rounded-xl h-10 bg-slate-950/50 border-white/10 text-white font-bold"
                                                    value={edu.institution}
                                                    onChange={(e) => {
                                                        const n = [...resume.content.education];
                                                        n[idx].institution = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, education: n } });
                                                    }}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Field of Study</Label>
                                                <Input
                                                    className="rounded-xl h-10 bg-slate-950/50 border-white/10 text-white font-bold"
                                                    value={edu.area}
                                                    onChange={(e) => {
                                                        const n = [...resume.content.education];
                                                        n[idx].area = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, education: n } });
                                                    }}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Qualification</Label>
                                                <Input
                                                    className="rounded-xl h-10 bg-slate-950/50 border-white/10 text-white font-bold"
                                                    value={edu.studyType}
                                                    onChange={(e) => {
                                                        const n = [...resume.content.education];
                                                        n[idx].studyType = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, education: n } });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button
                                    onClick={() => addItem('education', { institution: "", area: "", studyType: "", startDate: "", endDate: "", coursework: [] })}
                                    variant="outline"
                                    className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Academic Block
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Skills */}
                <SectionHeader
                    id="skills"
                    title="Skills"
                    icon={Code}
                    desc="Technical and soft skills"
                />
                <AnimatePresence>
                    {expandedSection === "skills" && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 space-y-6 bg-transparent">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {resume.content.skills.map((skill, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 group relative transition-all hover:bg-white/[0.07]">
                                            <button
                                                onClick={() => removeSkill(idx)}
                                                className="absolute top-4 right-4 text-slate-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Skill Module</Label>
                                                    <Input
                                                        className="rounded-xl h-11 bg-white/5 border-white/10 focus:border-neon-cyan/50 focus:ring-neon-cyan text-white font-medium"
                                                        value={skill.name}
                                                        onChange={(e) => {
                                                            const n = [...resume.content.skills];
                                                            n[idx].name = e.target.value;
                                                            onUpdate({ ...resume, content: { ...resume.content, skills: n } });
                                                        }}
                                                        placeholder="e.g. Neural Networks"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Competency Level</Label>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'].map(lvl => (
                                                            <button
                                                                key={lvl}
                                                                onClick={() => {
                                                                    const n = [...resume.content.skills];
                                                                    n[idx].level = lvl as any;
                                                                    onUpdate({ ...resume, content: { ...resume.content, skills: n } });
                                                                }}
                                                                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${skill.level === lvl ? 'bg-neon-cyan text-black shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'bg-white/5 text-slate-500 border border-white/10 hover:border-neon-cyan/50'}`}
                                                            >
                                                                {lvl}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    onClick={addSkill}
                                    variant="outline"
                                    className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Integrate New Capability
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Projects */}
                <SectionHeader id="projects" title="Projects & Experiments" icon={Sparkles} desc="Neural architectures and deployments" />
                <AnimatePresence>
                    {expandedSection === "projects" && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 space-y-10 bg-transparent">
                                {resume.content.projects.map((project, idx) => (
                                    <div key={idx} className="relative p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] group">
                                        <button
                                            onClick={() => removeProject(idx)}
                                            className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Project Name</Label>
                                                <Input
                                                    className="rounded-xl h-11 bg-white/5 border-white/10 focus:border-neon-cyan/50 focus:ring-neon-cyan text-white font-medium"
                                                    value={project.name}
                                                    onChange={(e) => {
                                                        const n = [...resume.content.projects];
                                                        n[idx].name = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, projects: n } });
                                                    }}
                                                    placeholder="Project Alpha"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Role / Tech Stack</Label>
                                                <Input
                                                    className="rounded-xl h-11 bg-white/5 border-white/10 focus:border-neon-cyan/50 focus:ring-neon-cyan text-white font-medium"
                                                    value={project.role || ""}
                                                    onChange={(e) => {
                                                        const n = [...resume.content.projects];
                                                        n[idx].role = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, projects: n } });
                                                    }}
                                                    placeholder="Lead Architect"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Codebase Log</Label>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-7 hover:bg-neon-cyan/10"
                                                    onClick={() => handleImprove('project', idx)}
                                                    disabled={improvingField === `project-${idx}`}
                                                >
                                                    {improvingField === `project-${idx}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />}
                                                    AI Refactor
                                                </Button>
                                            </div>
                                            <Textarea
                                                className="rounded-2xl border-white/10 bg-white/5 min-h-[120px] focus:border-neon-cyan text-white text-sm leading-relaxed p-4"
                                                value={project.description}
                                                onChange={(e) => {
                                                    const n = [...resume.content.projects];
                                                    n[idx].description = e.target.value;
                                                    onUpdate({ ...resume, content: { ...resume.content, projects: n } });
                                                }}
                                                placeholder="Describe the system architecture..."
                                            />
                                        </div>
                                    </div>
                                ))}
                                <Button
                                    onClick={addProject}
                                    variant="outline"
                                    className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Launch New Project
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Certifications */}
                <SectionHeader id="certifications" title="Certifications" icon={Award} desc="Professional validation modules" />
                <AnimatePresence>
                    {expandedSection === "certifications" && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 space-y-4 bg-transparent">
                                {(resume.content.certifications || []).map((cert, idx) => (
                                    <div key={idx} className="relative p-6 rounded-2xl border border-white/10 bg-white/5 flex gap-6 items-center group transition-all hover:bg-white/[0.08]">
                                        <div className="flex-1 grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol Name</Label>
                                                <Input
                                                    className="rounded-xl h-10 bg-white/5 border-white/10 text-white font-medium"
                                                    value={cert.name}
                                                    onChange={(e) => {
                                                        const n = [...(resume.content.certifications || [])];
                                                        n[idx].name = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, certifications: n } });
                                                    }}
                                                    placeholder="Certification Name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Issuing Authority</Label>
                                                <Input
                                                    className="rounded-xl h-10 bg-white/5 border-white/10 text-white font-medium"
                                                    value={cert.issuer}
                                                    onChange={(e) => {
                                                        const n = [...(resume.content.certifications || [])];
                                                        n[idx].issuer = e.target.value;
                                                        onUpdate({ ...resume, content: { ...resume.content, certifications: n } });
                                                    }}
                                                    placeholder="Issuer"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeCertification(idx)}
                                            className="text-slate-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                                <Button
                                    onClick={addCertification}
                                    variant="outline"
                                    className="w-full h-12 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Verify New Protocol
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Languages */}
                <SectionHeader id="languages" title="Linguistic Modules" icon={Languages} desc="Communication protocols" />
                <AnimatePresence>
                    {expandedSection === "languages" && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 space-y-8 bg-transparent">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {(resume.content.languages || []).map((lang, idx) => (
                                        <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] group relative">
                                            <button
                                                onClick={() => removeLanguage(idx)}
                                                className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol</Label>
                                                    <Input
                                                        className="rounded-xl h-10 bg-white/5 border-white/10 text-white font-medium"
                                                        value={lang.language}
                                                        onChange={(e) => {
                                                            const n = [...(resume.content.languages || [])];
                                                            n[idx].language = e.target.value;
                                                            onUpdate({ ...resume, content: { ...resume.content, languages: n } });
                                                        }}
                                                        placeholder="e.g. English, French"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Fluency Level</Label>
                                                    <div className="flex gap-1">
                                                        {['Beginner', 'Intermediate', 'Fluent', 'Native'].map(f => (
                                                            <button
                                                                key={f}
                                                                onClick={() => {
                                                                    const n = [...(resume.content.languages || [])];
                                                                    n[idx].fluency = f as any;
                                                                    onUpdate({ ...resume, content: { ...resume.content, languages: n } });
                                                                }}
                                                                className={`flex-1 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-tighter transition-all ${lang.fluency === f ? 'bg-neon-purple text-white shadow-[0_0_10px_rgba(188,19,254,0.4)]' : 'bg-white/5 text-slate-500 border border-white/5 hover:border-white/20'}`}
                                                            >
                                                                {f}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    onClick={addLanguage}
                                    variant="outline"
                                    className="w-full h-12 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Initialize New Language Module
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Awards */}
                <SectionHeader id="awards" title="Neural Accolades" icon={Trophy} desc="Recognition and achievements" />
                <AnimatePresence>
                    {expandedSection === "awards" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                {(resume.content.awards || []).map((award, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                        <button onClick={() => removeItem('awards', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Award Title</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={award.title} onChange={(e) => { const n = [...(resume.content.awards || [])]; n[idx].title = e.target.value; onUpdate({ ...resume, content: { ...resume.content, awards: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Issuer</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={award.issuer} onChange={(e) => { const n = [...(resume.content.awards || [])]; n[idx].issuer = e.target.value; onUpdate({ ...resume, content: { ...resume.content, awards: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Date</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={award.date} onChange={(e) => { const n = [...(resume.content.awards || [])]; n[idx].date = e.target.value; onUpdate({ ...resume, content: { ...resume.content, awards: n } }); }} /></div>
                                            <div className="col-span-2 space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Impact Summary</Label>
                                                    <Button variant="ghost" size="sm" className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-7 hover:bg-neon-cyan/10" onClick={() => handleImprove('awards' as any, idx)} disabled={improvingField === `awards-${idx}`}>{improvingField === `awards-${idx}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />} AI Polish</Button>
                                                </div>
                                                <Textarea className="rounded-2xl border-white/10 bg-white/5 min-h-[80px] focus:border-neon-cyan text-white text-sm leading-relaxed p-4" value={award.description || ""} onChange={(e) => { const n = [...(resume.content.awards || [])]; n[idx].description = e.target.value; onUpdate({ ...resume, content: { ...resume.content, awards: n } }); }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={() => addItem('awards', { title: "", issuer: "", date: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Add Award Module</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Publications */}
                <SectionHeader id="publications" title="Neural Publications" icon={Book} desc="Articles and research papers" />
                <AnimatePresence>
                    {expandedSection === "publications" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                {(resume.content.publications || []).map((pub, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                        <button onClick={() => removeItem('publications', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="col-span-2 space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Publication Title</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={pub.title} onChange={(e) => { const n = [...(resume.content.publications || [])]; n[idx].title = e.target.value; onUpdate({ ...resume, content: { ...resume.content, publications: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Publisher</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={pub.publisher} onChange={(e) => { const n = [...(resume.content.publications || [])]; n[idx].publisher = e.target.value; onUpdate({ ...resume, content: { ...resume.content, publications: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Source URL</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={pub.url} onChange={(e) => { const n = [...(resume.content.publications || [])]; n[idx].url = e.target.value; onUpdate({ ...resume, content: { ...resume.content, publications: n } }); }} /></div>
                                            <div className="col-span-2 space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Abstract / Summary</Label>
                                                    <Button variant="ghost" size="sm" className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-7 hover:bg-neon-cyan/10" onClick={() => handleImprove('publications' as any, idx)} disabled={improvingField === `publications-${idx}`}>{improvingField === `publications-${idx}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />} AI Polish</Button>
                                                </div>
                                                <Textarea className="rounded-2xl border-white/10 bg-white/5 min-h-[80px] focus:border-neon-cyan text-white text-sm leading-relaxed p-4" value={pub.description || ""} onChange={(e) => { const n = [...(resume.content.publications || [])]; n[idx].description = e.target.value; onUpdate({ ...resume, content: { ...resume.content, publications: n } }); }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={() => addItem('publications', { title: "", publisher: "", date: "", url: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Publish Component</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Volunteer */}
                <SectionHeader id="volunteer" title="Community Impact" icon={Heart} desc="Altruistic neural deployments" />
                <AnimatePresence>
                    {expandedSection === "volunteer" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                {(resume.content.volunteer || []).map((v, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                        <button onClick={() => removeItem('volunteer', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Organization</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={v.organization} onChange={(e) => { const n = [...(resume.content.volunteer || [])]; n[idx].organization = e.target.value; onUpdate({ ...resume, content: { ...resume.content, volunteer: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Role</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={v.role} onChange={(e) => { const n = [...(resume.content.volunteer || [])]; n[idx].role = e.target.value; onUpdate({ ...resume, content: { ...resume.content, volunteer: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Start Cycle</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={v.startDate} onChange={(e) => { const n = [...(resume.content.volunteer || [])]; n[idx].startDate = e.target.value; onUpdate({ ...resume, content: { ...resume.content, volunteer: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">End Cycle</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={v.endDate} onChange={(e) => { const n = [...(resume.content.volunteer || [])]; n[idx].endDate = e.target.value; onUpdate({ ...resume, content: { ...resume.content, volunteer: n } }); }} /></div>
                                            <div className="col-span-2 space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contribution Logs</Label>
                                                    <Button variant="ghost" size="sm" className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-7 hover:bg-neon-cyan/10" onClick={() => handleImprove('volunteer' as any, idx)} disabled={improvingField === `volunteer-${idx}`}>{improvingField === `volunteer-${idx}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />} AI Polish</Button>
                                                </div>
                                                <Textarea className="rounded-2xl border-white/10 bg-white/5 min-h-[100px] focus:border-neon-cyan text-white text-sm leading-relaxed p-4" value={v.highlights?.[0] || ""} onChange={(e) => { const n = [...(resume.content.volunteer || [])]; n[idx].highlights = [e.target.value]; onUpdate({ ...resume, content: { ...resume.content, volunteer: n } }); }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={() => addItem('volunteer', { organization: "", role: "", startDate: "", endDate: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Add Altruistic Module</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Leadership */}
                <SectionHeader id="leadership" title="Neural Command" icon={Users} desc="Leadership and influence" />
                <AnimatePresence>
                    {expandedSection === "leadership" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                {(resume.content.leadership || []).map((l, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                        <button onClick={() => removeItem('leadership', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Command Role</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={l.role} onChange={(e) => { const n = [...(resume.content.leadership || [])]; n[idx].role = e.target.value; onUpdate({ ...resume, content: { ...resume.content, leadership: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Organization</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={l.organization} onChange={(e) => { const n = [...(resume.content.leadership || [])]; n[idx].organization = e.target.value; onUpdate({ ...resume, content: { ...resume.content, leadership: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Start Cycle</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={l.startDate} onChange={(e) => { const n = [...(resume.content.leadership || [])]; n[idx].startDate = e.target.value; onUpdate({ ...resume, content: { ...resume.content, leadership: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">End Cycle</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={l.endDate} onChange={(e) => { const n = [...(resume.content.leadership || [])]; n[idx].endDate = e.target.value; onUpdate({ ...resume, content: { ...resume.content, leadership: n } }); }} /></div>
                                            <div className="col-span-2 space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Impact & Strategy</Label>
                                                    <Button variant="ghost" size="sm" className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-7 hover:bg-neon-cyan/10" onClick={() => handleImprove('leadership' as any, idx)} disabled={improvingField === `leadership-${idx}`}>{improvingField === `leadership-${idx}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />} AI Polish</Button>
                                                </div>
                                                <Textarea className="rounded-2xl border-white/10 bg-white/5 min-h-[100px] focus:border-neon-cyan text-white text-sm leading-relaxed p-4" value={l.impact || l.description || ""} onChange={(e) => { const n = [...(resume.content.leadership || [])]; n[idx].impact = e.target.value; onUpdate({ ...resume, content: { ...resume.content, leadership: n } }); }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={() => addItem('leadership', { role: "", organization: "", startDate: "", endDate: "", description: "", impact: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Commission New Role</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Interests */}
                <SectionHeader id="interests" title="Neural Passions" icon={Target} desc="Hobbies and peripheral focus" />
                <AnimatePresence>
                    {expandedSection === "interests" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-4 bg-transparent">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {(resume.content.interests || []).map((i, idx) => (
                                        <div key={idx} className="relative group flex gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                            <Input className="h-9 bg-transparent border-none text-white font-medium focus-visible:ring-0 placeholder:text-slate-600" value={i.name} onChange={(e) => { const n = [...(resume.content.interests || [])]; n[idx].name = e.target.value; onUpdate({ ...resume, content: { ...resume.content, interests: n } }); }} placeholder="Interest..." />
                                            <button onClick={() => removeItem('interests', idx)} className="text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all px-2"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    ))}
                                </div>
                                <Button onClick={() => addItem('interests', { name: "", keywords: [] })} variant="outline" className="w-full h-12 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Inject Passion</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Affiliations */}
                <SectionHeader id="affiliations" title="Neural Networks" icon={Network} desc="Professional memberships" />
                <AnimatePresence>
                    {expandedSection === "affiliations" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                {(resume.content.affiliations || []).map((a, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                        <button onClick={() => removeItem('affiliations', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Organization</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={a.organization} onChange={(e) => { const n = [...(resume.content.affiliations || [])]; n[idx].organization = e.target.value; onUpdate({ ...resume, content: { ...resume.content, affiliations: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Role</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={a.role} onChange={(e) => { const n = [...(resume.content.affiliations || [])]; n[idx].role = e.target.value; onUpdate({ ...resume, content: { ...resume.content, affiliations: n } }); }} /></div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={() => addItem('affiliations', { organization: "", role: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Connect New Node</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Patents */}
                <SectionHeader id="patents" title="Intellectual Assets" icon={Cpu} desc="Patents and inventions" />
                <AnimatePresence>
                    {expandedSection === "patents" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                {(resume.content.patents || []).map((p, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                        <button onClick={() => removeItem('patents', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="col-span-2 space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Asset Title</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={p.title} onChange={(e) => { const n = [...(resume.content.patents || [])]; n[idx].title = e.target.value; onUpdate({ ...resume, content: { ...resume.content, patents: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Registration ID</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={p.number} onChange={(e) => { const n = [...(resume.content.patents || [])]; n[idx].number = e.target.value; onUpdate({ ...resume, content: { ...resume.content, patents: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Date</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={p.date} onChange={(e) => { const n = [...(resume.content.patents || [])]; n[idx].date = e.target.value; onUpdate({ ...resume, content: { ...resume.content, patents: n } }); }} /></div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={() => addItem('patents', { title: "", number: "", date: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Register Asset</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Conferences */}
                <SectionHeader id="conferences" title="Neural Summits" icon={Megaphone} desc="Conference contributions" />
                <AnimatePresence>
                    {expandedSection === "conferences" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                {(resume.content.conferences || []).map((c, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                        <button onClick={() => removeItem('conferences', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        <div className="grid grid-cols-2 gap-6 mb-6">
                                            <div className="col-span-2 space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Summit Name</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={c.name} onChange={(e) => { const n = [...(resume.content.conferences || [])]; n[idx].name = e.target.value; onUpdate({ ...resume, content: { ...resume.content, conferences: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Role / Presentation</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={c.role} onChange={(e) => { const n = [...(resume.content.conferences || [])]; n[idx].role = e.target.value; onUpdate({ ...resume, content: { ...resume.content, conferences: n } }); }} /></div>
                                            <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Date</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={c.date} onChange={(e) => { const n = [...(resume.content.conferences || [])]; n[idx].date = e.target.value; onUpdate({ ...resume, content: { ...resume.content, conferences: n } }); }} /></div>
                                            <div className="col-span-2 space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Presentation Abstract</Label>
                                                    <Button variant="ghost" size="sm" className="text-[10px] text-neon-cyan font-black uppercase tracking-widest h-7 hover:bg-neon-cyan/10" onClick={() => handleImprove('conferences' as any, idx)} disabled={improvingField === `conferences-${idx}`}>{improvingField === `conferences-${idx}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3 mr-2" />} AI Polish</Button>
                                                </div>
                                                <Textarea className="rounded-2xl border-white/10 bg-white/5 min-h-[100px] focus:border-neon-cyan text-white text-sm leading-relaxed p-4" value={c.description || ""} onChange={(e) => { const n = [...(resume.content.conferences || [])]; n[idx].description = e.target.value; onUpdate({ ...resume, content: { ...resume.content, conferences: n } }); }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={() => addItem('conferences', { name: "", role: "", date: "", description: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Connect to Summit</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* References */}
                <SectionHeader id="references" title="Neural Endorsements" icon={PhoneOutgoing} desc="Professional validation nodes" />
                <AnimatePresence>
                    {expandedSection === "references" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="p-8 space-y-10 bg-transparent">
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
                                    <input type="checkbox" className="w-4 h-4 rounded-md border-white/10 bg-slate-900 text-neon-cyan focus:ring-neon-cyan" checked={resume.content.showReferencesToggle} onChange={(e) => onUpdate({ ...resume, content: { ...resume.content, showReferencesToggle: e.target.checked } })} id="ref-toggle" />
                                    <Label htmlFor="ref-toggle" className="text-[10px] font-black uppercase tracking-widest text-slate-400 cursor-pointer">Include "Available upon request"</Label>
                                </div>
                                {!resume.content.showReferencesToggle && (
                                    <>
                                        {(resume.content.references || []).map((r, idx) => (
                                            <div key={idx} className="p-6 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/[0.08] relative group">
                                                <button onClick={() => removeItem('references', idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>
                                                <div className="grid grid-cols-2 gap-6">
                                                    <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Endorser Name</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={r.name} onChange={(e) => { const n = [...(resume.content.references || [])]; n[idx].name = e.target.value; onUpdate({ ...resume, content: { ...resume.content, references: n } }); }} /></div>
                                                    <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Position</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={r.position} onChange={(e) => { const n = [...(resume.content.references || [])]; n[idx].position = e.target.value; onUpdate({ ...resume, content: { ...resume.content, references: n } }); }} /></div>
                                                    <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Organization</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={r.company} onChange={(e) => { const n = [...(resume.content.references || [])]; n[idx].company = e.target.value; onUpdate({ ...resume, content: { ...resume.content, references: n } }); }} /></div>
                                                    <div className="space-y-2"><Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol Address (Email)</Label><Input className="rounded-xl h-11 bg-white/5 border-white/10 text-white font-medium" value={r.email} onChange={(e) => { const n = [...(resume.content.references || [])]; n[idx].email = e.target.value; onUpdate({ ...resume, content: { ...resume.content, references: n } }); }} /></div>
                                                </div>
                                            </div>
                                        ))}
                                        <Button onClick={() => addItem('references', { name: "", position: "", company: "", email: "", phone: "" })} variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-white/10 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan transition-all font-black text-[10px] uppercase tracking-widest"><Plus className="w-4 h-4 mr-2" /> Connect New Endorser</Button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* AI Assistant Floating Hint */}
            <div className="p-6 bg-slate-900 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 rounded-full blur-[60px] opacity-40 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="flex items-start gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">AI Assistant Tip</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            "Including data-driven metrics in your work experience (e.g., 'Increased sales by 20%') can boost your ATS score by up to 35%."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
