import { Resume } from "@/types/resume";

export const ModernTemplate = ({ resume }: { resume: Resume }) => {
    const {
        basics, work, education, skills, projects, certifications,
        languages, awards, publications, volunteer, leadership,
        interests, affiliations, patents, conferences, references,
        showReferencesToggle
    } = resume.content;

    const accentColor = resume.style.color || '#4F46E5';

    return (
        <div className="w-full h-full flex bg-white text-slate-800 font-sans" style={{ '--accent-color': accentColor } as any}>
            {/* Left Sidebar */}
            <aside className="w-[32%] bg-slate-900 text-white p-8 flex flex-col gap-8 shrink-0 print:bg-slate-900 print:text-white">
                {/* Profile Image / Initials */}
                <div className="w-32 h-32 rounded-full bg-slate-800 mx-auto flex items-center justify-center text-4xl font-bold text-slate-600 border-4 border-slate-700 overflow-hidden">
                    {basics.image && basics.showImage ? (
                        <img src={basics.image} alt={basics.name} className="w-full h-full object-cover" />
                    ) : (
                        basics.name.charAt(0)
                    )}
                </div>

                {/* Contact Info */}
                <div className="space-y-4 text-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-4">Contact</h3>
                    {basics.email && (
                        <div className="break-all">
                            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Email</span>
                            <div className="font-medium">{basics.email}</div>
                        </div>
                    )}
                    {basics.phone && (
                        <div>
                            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Phone</span>
                            <div className="font-medium">{basics.phone}</div>
                        </div>
                    )}
                    {basics.location && (
                        <div>
                            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Location</span>
                            <div className="font-medium">{typeof basics.location === 'string' ? basics.location : `${basics.location.city}${basics.location.region ? `, ${basics.location.region}` : ''}`}</div>
                        </div>
                    )}
                    {basics.linkedinUrl && (
                        <div>
                            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</span>
                            <div className="font-medium truncate">{basics.linkedinUrl.replace(/^https?:\/\//, '')}</div>
                        </div>
                    )}
                    {basics.githubUrl && (
                        <div>
                            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">GitHub</span>
                            <div className="font-medium truncate">{basics.githubUrl.replace(/^https?:\/\//, '')}</div>
                        </div>
                    )}
                </div>

                {/* Skills */}
                {skills && skills.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-4">Core Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-300">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Languages */}
                {languages && languages.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-4">Languages</h3>
                        <div className="space-y-3">
                            {languages.map((l, idx) => (
                                <div key={idx}>
                                    <div className="font-bold text-sm tracking-wide">{l.language}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">{l.fluency}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Interests */}
                {interests && interests.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-2 mb-4">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                            {interests.map((i, idx) => (
                                <span key={idx} className="text-xs font-medium text-slate-400">{i.name}{idx < interests.length - 1 ? ' • ' : ''}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* References Toggle */}
                {showReferencesToggle && (
                    <div className="mt-auto pt-8">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">References</div>
                        <div className="text-xs italic text-slate-400 mt-2">Professional references available upon request.</div>
                    </div>
                )}
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 space-y-10 overflow-y-auto">
                {/* Header */}
                <header>
                    <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-2">
                        {basics.name}
                    </h1>
                    <div className="flex items-center gap-4">
                        <p className="font-black uppercase tracking-[0.2em] text-sm" style={{ color: accentColor }}>
                            {basics.label}
                        </p>
                    </div>
                </header>

                {/* Summary & Objective */}
                {(basics.summary || basics.objective) && (
                    <section>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-slate-200"></span>
                            Professional Summary
                        </h3>
                        <div className="space-y-4">
                            {basics.summary && <p className="text-slate-600 leading-relaxed text-sm">{basics.summary}</p>}
                            {basics.objective && (
                                <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-200">
                                    <span className="block text-[10px] font-black uppercase text-slate-400 mb-1">Career Objective</span>
                                    <p className="text-sm italic text-slate-500">{basics.objective}</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Work Experience */}
                {work && work.length > 0 && (
                    <section>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-slate-200"></span>
                            Work Experience
                        </h3>
                        <div className="space-y-8">
                            {work.map((job, idx) => (
                                <div key={idx} className="relative pl-6 border-l-2 border-slate-100 last:border-0 pb-8 last:pb-0">
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white" />
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="text-lg font-bold text-slate-900">{job.position}</h4>
                                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                            {job.startDate} — {job.endDate || 'Present'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold mb-3" style={{ color: accentColor }}>
                                        {job.company}
                                        {job.location && <span className="text-slate-400 font-medium">| {job.location}</span>}
                                        {job.employmentType && <span className="text-[10px] px-2 py-0.5 rounded-full border border-current opacity-70">{job.employmentType}</span>}
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-4">
                                        {job.description}
                                    </p>
                                    {job.highlights && job.highlights.length > 0 && (
                                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2 mb-4">
                                            {job.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                        </ul>
                                    )}
                                    {job.metrics && (
                                        <div className="text-xs font-bold text-slate-700 bg-indigo-50 p-2 rounded-lg border border-indigo-100 inline-block mb-4">
                                            Impact: {job.metrics}
                                        </div>
                                    )}
                                    {job.technologies && job.technologies.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {job.technologies.map((t, i) => (
                                                <span key={i} className="text-[9px] font-black uppercase tracking-tighter bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {education && education.length > 0 && (
                    <section>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-slate-200"></span>
                            Education
                        </h3>
                        <div className="grid grid-cols-1 gap-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="flex justify-between gap-4">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900">{edu.institution}</h4>
                                        <div className="text-sm font-medium text-slate-600">{edu.studyType} in {edu.area}</div>
                                        {edu.honors && <div className="text-xs font-bold text-amber-600 mt-1 italic">{edu.honors}</div>}
                                        {edu.coursework && edu.coursework.length > 0 && (
                                            <div className="text-[10px] text-slate-500 mt-2">
                                                <span className="font-bold uppercase tracking-wider">Key Coursework:</span> {edu.coursework.join(', ')}
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-xs font-bold text-slate-400">{edu.startDate} — {edu.endDate}</div>
                                        {edu.score && <div className="text-xs font-black text-slate-900 mt-1">{edu.score}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Awards & Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {awards && awards.length > 0 && (
                        <section>
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-slate-200"></span>
                                Awards
                            </h3>
                            <div className="space-y-4">
                                {awards.map((a, i) => (
                                    <div key={i}>
                                        <div className="font-bold text-sm text-slate-900">{a.title}</div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase">{a.issuer} | {a.date}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                    {projects && projects.length > 0 && (
                        <section>
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-slate-200"></span>
                                Projects
                            </h3>
                            <div className="space-y-4">
                                {projects.map((p, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                                            <div>
                                                <div className="font-bold text-sm text-slate-900">{p.name}</div>
                                                <div className="text-[10px] text-slate-500">{p.role}</div>
                                            </div>
                                            {p.url && <a href={p.url} className="text-indigo-600 text-[10px] font-bold">&rarr;</a>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Additional Sections Footer */}
                <div className="pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
                    {certifications && certifications.length > 0 && (
                        <div>
                            <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-3">Certifications</h5>
                            {certifications.map((c, i) => (
                                <div key={i} className="text-xs mb-2">
                                    <div className="font-bold">{c.name}</div>
                                    <div className="text-slate-500">{c.issuer} ({c.date})</div>
                                </div>
                            ))}
                        </div>
                    )}
                    {publications && publications.length > 0 && (
                        <div>
                            <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-3">Publications</h5>
                            {publications.map((p, i) => (
                                <div key={i} className="text-xs mb-2">
                                    <div className="font-bold">{p.title}</div>
                                    <div className="text-slate-500">{p.publisher}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};
