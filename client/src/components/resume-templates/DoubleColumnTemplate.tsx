import { Resume } from "@/types/resume";

export const DoubleColumnTemplate = ({ resume }: { resume: Resume }) => {
    const {
        basics, work, education, skills, projects, certifications,
        languages, awards, publications, volunteer, leadership,
        interests, affiliations, patents, conferences, references,
        showReferencesToggle
    } = resume.content;
    const accentColor = resume.style?.color || '#000000';

    return (
        <div className="w-full h-full bg-white text-slate-800 p-10 leading-relaxed font-sans">
            {/* Header */}
            <header className="mb-12 border-b-8 border-slate-900 pb-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-6xl font-black text-slate-950 uppercase tracking-tighter mb-2">
                            {basics.name}
                        </h1>
                        <p className="text-2xl font-black uppercase tracking-[0.2em]" style={{ color: accentColor }}>
                            {basics.label}
                        </p>
                    </div>
                    <div className="text-right text-xs font-black text-slate-500 uppercase tracking-widest space-y-1">
                        <div className="text-slate-900">{basics.email}</div>
                        <div>{basics.phone}</div>
                        <div>{typeof basics.location === 'string' ? basics.location : `${basics.location.city}, ${basics.location.countryCode}`}</div>
                        {basics.linkedinUrl && <div className="lowercase">{basics.linkedinUrl.replace(/^https?:\/\//, '')}</div>}
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-12">
                {/* Left Column (Main) */}
                <div className="col-span-8 space-y-12">
                    {/* Summary & Objective */}
                    {(basics.summary || basics.objective) && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-4">
                                Profile <div className="flex-1 h-px bg-slate-100" />
                            </h2>
                            <div className="space-y-4">
                                {basics.summary && <p className="text-slate-800 font-bold text-base leading-relaxed">{basics.summary}</p>}
                                {basics.objective && <p className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-lg border-l-4 border-slate-200">{basics.objective}</p>}
                            </div>
                        </section>
                    )}

                    {/* Work Experience */}
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                            Exp <div className="flex-1 h-px bg-slate-100" />
                        </h2>
                        <div className="space-y-10">
                            {work.map((job, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{job.position}</h3>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">
                                            {job.startDate} — {job.endDate || 'Present'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm font-black mb-4 uppercase tracking-wider" style={{ color: accentColor }}>
                                        {job.company}
                                        {job.location && <span className="text-slate-300">/</span>}
                                        {job.location && <span className="text-slate-400">{job.location}</span>}
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-4">
                                        {job.description}
                                    </p>
                                    {job.highlights && job.highlights.length > 0 && (
                                        <div className="grid grid-cols-1 gap-2 ml-4 mb-4">
                                            {job.highlights.map((h, i) => (
                                                <div key={i} className="text-sm text-slate-700 font-medium border-l-2 border-slate-100 pl-3">
                                                    {h}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {job.metrics && (
                                        <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full inline-block">
                                            Metric: {job.metrics}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Awards & Leadership */}
                    <div className="grid grid-cols-2 gap-10">
                        {awards && awards.length > 0 && (
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-4">Awards</h2>
                                <div className="space-y-4">
                                    {awards.map((a, i) => (
                                        <div key={i}>
                                            <div className="font-black text-sm text-slate-900 uppercase tracking-tight">{a.title}</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">{a.issuer} | {a.date}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                        {leadership && leadership.length > 0 && (
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-4">Leadership</h2>
                                <div className="space-y-4">
                                    {leadership.map((l, i) => (
                                        <div key={i}>
                                            <div className="font-black text-sm text-slate-900 uppercase tracking-tight">{l.role}</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">{l.organization}</div>
                                            <div className="text-[10px] text-slate-500 mt-1 italic">{l.impact}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* References */}
                    {showReferencesToggle && (
                        <section className="pt-10 border-t border-slate-100">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 italic">Professional references available upon request.</h2>
                        </section>
                    )}
                </div>

                {/* Right Column (Sidebar) */}
                <div className="col-span-4 space-y-12">
                    {/* Skills */}
                    {skills && skills.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8 border-l-4 border-slate-900 pl-4">Skills</h2>
                            <div className="space-y-6">
                                {skills.map((skill, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between text-[11px] font-black text-slate-900 uppercase tracking-widest">
                                            <span>{skill.name}</span>
                                            <span className="text-slate-400">{skill.level}</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-50 rounded-full border border-slate-100 overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{
                                                    width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '80%' : skill.level === 'Intermediate' ? '60%' : '40%',
                                                    backgroundColor: accentColor
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {education && education.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8 border-l-4 border-slate-900 pl-4">Edu</h2>
                            {education.map((edu, idx) => (
                                <div key={idx} className="mb-8 last:mb-0">
                                    <div className="font-black text-slate-950 text-sm uppercase tracking-tight mb-1">{edu.institution}</div>
                                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>{edu.studyType} • {edu.area}</div>
                                    <div className="text-[10px] text-slate-400 font-black mt-2 uppercase tracking-widest">
                                        {edu.startDate} — {edu.endDate}
                                    </div>
                                    {edu.honors && <div className="text-[10px] font-bold text-amber-600 mt-2 italic">{edu.honors}</div>}
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Certifications */}
                    {certifications && certifications.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8 border-l-4 border-slate-900 pl-4">Certs</h2>
                            <div className="space-y-6">
                                {certifications.map((cert, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <h4 className="font-black text-slate-900 text-xs uppercase tracking-tight leading-tight">{cert.name}</h4>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{cert.issuer}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Publications & Patents */}
                    {((publications?.length ?? 0) > 0 || (patents?.length ?? 0) > 0) && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8 border-l-4 border-slate-900 pl-4">Intellectual</h2>
                            <div className="space-y-6">
                                {publications?.map((p, i) => (
                                    <div key={i} className="text-[10px] font-bold">
                                        <div className="uppercase tracking-tight underline decoration-slate-200">{p.title}</div>
                                        <div className="text-slate-400 mt-1">{p.publisher} ({p.date})</div>
                                    </div>
                                ))}
                                {patents?.map((p, i) => (
                                    <div key={i} className="text-[10px] font-bold">
                                        <div className="uppercase tracking-tight text-indigo-600">Patent: {p.title}</div>
                                        <div className="text-slate-400 mt-1">#{p.number}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {languages && languages.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8 border-l-4 border-slate-900 pl-4">Langs</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {languages.map((l, idx) => (
                                    <div key={idx}>
                                        <div className="text-xs font-black text-slate-900 uppercase tracking-tighter mb-1">{l.language}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{l.fluency}</div>
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
