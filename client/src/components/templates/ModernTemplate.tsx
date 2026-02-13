import { Resume } from "@/types/resume";

export const ModernTemplate = ({ resume }: { resume: Resume }) => {
    const { basics, work, education, skills, projects, certifications, languages } = resume.content;
    const accentColor = resume.style?.color || '#0f172a';

    return (
        <div className="font-sans text-slate-800 p-8 h-full bg-white">
            {/* Header */}
            <header className="border-b-2 pb-6 mb-6" style={{ borderColor: accentColor }}>
                <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900 leading-none mb-2">{basics.name}</h1>
                <div className="text-sm font-bold uppercase tracking-widest text-[#64748b]" style={{ color: accentColor }}>{basics.label || resume.title}</div>
                <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest mt-4 text-slate-400">
                    {basics.email && <span>{basics.email}</span>}
                    {basics.phone && <span>• {basics.phone}</span>}
                    {basics.location && <span>• {typeof basics.location === 'string' ? basics.location : basics.location.city}</span>}
                </div>
            </header>

            <div className="grid grid-cols-12 gap-8">
                {/* Main Column */}
                <div className="col-span-8 space-y-8">
                    {/* Summary */}
                    {basics.summary && (
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-slate-400">Profile</h2>
                            <p className="text-sm leading-relaxed text-slate-600">{basics.summary}</p>
                        </section>
                    )}

                    {/* Experience */}
                    {work.length > 0 && (
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-slate-400">Experience</h2>
                            <div className="space-y-6">
                                {work.map((job, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-bold text-base text-slate-900">{job.position}</h3>
                                            <span className="text-[10px] font-black text-slate-400 uppercase">
                                                {job.startDate} — {job.endDate || 'Present'}
                                            </span>
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>{job.company}</div>
                                        <p className="text-sm text-slate-600 leading-relaxed">{job.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Certifications */}
                    {certifications && certifications.length > 0 && (
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-slate-400">Certifications</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {certifications.map((cert, idx) => (
                                    <div key={idx} className="border-l-2 pl-3 py-1" style={{ borderColor: accentColor }}>
                                        <div className="text-sm font-bold text-slate-900">{cert.name}</div>
                                        <div className="text-xs text-slate-500">{cert.issuer}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar Column */}
                <div className="col-span-4 space-y-8">
                    {/* Skills */}
                    {skills.length > 0 && (
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-slate-400">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-700 rounded uppercase tracking-wider">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {education.length > 0 && (
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-slate-400">Education</h2>
                            <div className="space-y-4">
                                {education.map((edu, idx) => (
                                    <div key={idx}>
                                        <div className="font-bold text-sm text-slate-900 leading-tight">{edu.institution}</div>
                                        <div className="text-xs text-slate-500 mt-0.5">{edu.area}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase mt-1">
                                            {edu.startDate} — {edu.endDate}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {languages && languages.length > 0 && (
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-slate-400">Languages</h2>
                            <div className="space-y-2">
                                {languages.map((l, idx) => (
                                    <div key={idx}>
                                        <div className="text-xs font-bold text-slate-900">{l.language}</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">{l.fluency}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
