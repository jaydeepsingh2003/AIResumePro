"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ResumeEditor } from "@/components/resume-builder/ResumeEditor";
import { ResumePreview } from "@/components/resume-builder/ResumePreview";
import { ResumePDF } from "@/components/resume-builder/ResumePDF";
import { TemplateGallery } from "@/components/resume-builder/TemplateGallery";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Download, Wand2, Loader2, Sparkles, Layout, FileText } from "lucide-react";
import Link from "next/link";
import { mockResume } from "@/data/mock-resume";
import { getLayoutForCategory, RESUME_TEMPLATES } from "@/data/templates";
import { fetchResume, createResume, updateResume } from "@/lib/api";
import { Resume } from "@/types/resume";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Suspense } from "react";

function EditorContent() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const queryClient = useQueryClient();
    const id = params.id as string;
    const isNew = id === "new";
    const layoutParam = searchParams.get('layout');
    const templateParam = searchParams.get('template');

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);

        // If not logged in and trying to access an existing resume, redirect
        if (!storedToken && !isNew) {
            router.push("/login");
        }
    }, [isNew, router]);

    // Local state for the editor
    const [resume, setResume] = useState<Resume>(() => {
        if (!isNew) return mockResume;
        const template = templateParam ? RESUME_TEMPLATES.find(t => t.id === templateParam) : null;
        const layout = layoutParam && ['sidebar', 'single', 'double', 'minimal'].includes(layoutParam)
            ? layoutParam as 'sidebar' | 'single' | 'double' | 'minimal'
            : template ? getLayoutForCategory(template.category) : mockResume.style?.layout || 'single';
        return {
            ...mockResume,
            style: {
                ...mockResume.style,
                layout,
                templateId: template?.id ?? mockResume.style?.templateId,
            }
        };
    });
    const [isSaving, setIsSaving] = useState(false);
    const [showTemplateGallery, setShowTemplateGallery] = useState(false);

    // Fetch existing resume if not new
    const { data: fetchedResume, isLoading: isLoadingResume } = useQuery({
        queryKey: ['resume', id],
        queryFn: () => fetchResume(id),
        enabled: !isNew && !!token,
    });

    // Update local state when fetched data arrives
    useEffect(() => {
        if (fetchedResume) {
            setResume(fetchedResume);
        }
    }, [fetchedResume]);

    const handleSave = () => {
        if (!token) {
            // Store progress in session storage and redirect to register
            sessionStorage.setItem("pending_resume", JSON.stringify(resume));
            router.push("/register?callback=/builder/new");
            return;
        }

        setIsSaving(true);
        saveMutation.mutate(resume, {
            onSettled: () => setIsSaving(false)
        });
    };

    const handleSelectTemplate = (template: any) => {
        setResume(prev => ({
            ...prev,
            style: {
                ...prev.style,
                templateId: template.id,
                layout: getLayoutForCategory(template.category),
            }
        }));
        setShowTemplateGallery(false);
    };

    // Mutation for creating/updating
    const saveMutation = useMutation({
        mutationFn: async (data: Resume) => {
            if (isNew) {
                return createResume(data);
            } else {
                return updateResume(id, data);
            }
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['resumes'] });
            if (isNew) {
                router.replace(`/builder/${data.id}`);
            }
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#4F46E5', '#6366F1', '#818CF8']
            });
        },
        onError: (error) => {
            console.error("Failed to save resume", error);
        }
    });

    if (isLoadingResume && token) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-slate-50 gap-4">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Initializing Editor...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950">
            {/* Header */}
            <header className="h-20 border-b bg-white dark:bg-slate-900 flex items-center justify-between px-8 z-20 shrink-0 shadow-sm text-slate-900 dark:text-white">
                <div className="flex items-center gap-6">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div className="h-8 w-px bg-slate-200 hidden md:block" />
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                                {resume.title || "Untitled Resume"}
                            </h1>
                            <div className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase text-slate-500 tracking-tighter text-indigo-600">
                                {!token ? "Guest Draft" : "Draft"}
                            </div>
                        </div>
                        <p className="text-xs font-bold text-slate-400">
                            {isNew ? (token ? "Editing New Masterpiece" : "Guest Mode - Real-time Builder") : "Auto-saved just now"}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        className="text-slate-600 dark:text-slate-300 font-black hidden md:flex hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl px-4"
                        onClick={() => setShowTemplateGallery(true)}
                    >
                        <Layout className="mr-2 h-4 w-4 text-indigo-500" />
                        Templates
                    </Button>
                    <div className="w-px h-6 bg-slate-200 hidden md:block mx-1" />
                    <Button
                        variant="outline"
                        className="rounded-xl border-slate-200 hover:bg-slate-50 font-black h-12 px-6 shadow-sm transition-all"
                        onClick={handleSave}
                        disabled={isSaving}
                    >
                        {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4 text-indigo-600" />}
                        {token ? "Save" : "Save & Register"}
                    </Button>

                    <PDFDownloadLink
                        document={<ResumePDF resume={resume} />}
                        fileName={`${resume.title || 'resume'}.pdf`}
                    >
                        {({ loading }) => (
                            <Button
                                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-8 font-black shadow-lg shadow-indigo-100 gap-2 transition-all hover:scale-[1.05]"
                                disabled={loading}
                            >
                                {loading ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Download className="h-4 w-4" />
                                )}
                                {loading ? 'Preparing...' : 'Download'}
                            </Button>
                        )}
                    </PDFDownloadLink>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                <div className="w-full lg:w-[45%] border-r bg-white dark:bg-slate-900 overflow-y-auto scrollbar-hide">
                    <div className="p-8 pb-32">
                        <ResumeEditor resume={resume} onUpdate={setResume} />
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 bg-slate-100 dark:bg-slate-950 overflow-y-auto p-12 justify-center items-start scrollbar-hide">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="shadow-[0_0_80px_rgba(0,0,0,0.1)] bg-white w-full max-w-[210mm] min-h-[297mm] sticky top-0"
                    >
                        <div className="relative group">
                            <ResumePreview resume={resume} />
                        </div>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {showTemplateGallery && (
                    <TemplateGallery
                        onClose={() => setShowTemplateGallery(false)}
                        onSelect={handleSelectTemplate}
                        currentTemplateId={resume.style.templateId}
                    />
                )}
            </AnimatePresence>

            {!token && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="glass p-4 rounded-2xl border border-indigo-500/30 flex items-center gap-6 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-500/10 rounded-lg">
                                <Sparkles className="w-4 h-4 text-indigo-500" />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">You are building as a Guest. Save your work to the Neural Cloud.</p>
                        </div>
                        <Button
                            size="sm"
                            onClick={() => router.push("/register")}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest h-10 px-6"
                        >
                            Claim Identity
                        </Button>
                    </motion.div>
                </div>
            )}

            <div className="lg:hidden fixed bottom-6 right-6">
                <Button
                    onClick={() => setShowTemplateGallery(true)}
                    className="w-16 h-16 rounded-full bg-indigo-600 shadow-2xl flex items-center justify-center p-0 transition-transform hover:scale-110 active:scale-95"
                >
                    <Sparkles className="w-7 h-7 text-white" />
                </Button>
            </div>
        </div>
    );
}

export default function EditorPage() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center h-screen bg-slate-50 gap-4">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Editor...</p>
            </div>
        }>
            <EditorContent />
        </Suspense>
    );
}
