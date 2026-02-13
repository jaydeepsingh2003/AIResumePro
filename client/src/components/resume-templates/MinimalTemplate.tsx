import { Resume } from "@/types/resume";

export const MinimalTemplate = ({ resume }: { resume: Resume }) => {
    const {
        basics, work, education, skills, projects, certifications,
        languages, awards, publications, volunteer, leadership,
        interests, affiliations, patents, conferences, references,
        showReferencesToggle
    } = resume.content;
    const accentColor = resume.style?.color || '#000000';

    return (
        <div className="w-full h-full bg-white text-slate-700 p-16 max-w-[210mm] mx-auto font-sans">
            {/* Minimal Header */}
            <header className="mb-20">
                <div className="flex justify-between items-start mb-10">
                    <h1 className="text-4xl font-light tracking-[0.25em] uppercase text-slate-950">
                        {basics.name}
                        <div className="h-[2px] w-12 bg-slate-950 mt-4" style={{ backgroundColor: accentColor }} />
                    </h1>
                    {basics.image && basics.showImage && (
                        <div className="w-20 h-20 grayscale hover:grayscale-0 transition-all duration-700">
                            <img src={basics.image} alt={basics.name} className="w-full h-full object-cover rounded-sm shadow-2xl shadow-slate-200" />
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        {basics.email && <span>{basics.email}</span>}
                        {basics.phone && <span>{basics.phone}</span>}
                        {basics.location && (
                            <span>{typeof basics.location === 'string' ? basics.location : basics.location.city}</span>
                        )}
                    </div>
                    <div className="flex flex-wrap justify-end gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                        {basics.linkedinUrl && <span>LinkedIn</span>}
                        {basics.githubUrl && <span>GitHub</span>}
                        {basics.portfolioUrl && <span>Portfolio</span>}
                    </div>
                </div>
            </header>

            <div className="space-y-20">
                {/* Profile & Objective */}
                {(basics.summary || basics.objective) && (
                    <section className="grid grid-cols-12 gap-10">
                        <div className="col-span-3">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Statement</h2>
                        </div>
                        <div className="col-span-9 space-y-6">
                            {basics.summary && <p className="text-base leading-relaxed text-slate-800">{basics.summary}</p>}
                            {basics.objective && <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 border-l border-slate-200 pl-4">{basics.objective}</p>}
                        </div>
                    </section>
                )}

                {/* Experience */}
                {work && work.length > 0 && (
                    <section className="grid grid-cols-12 gap-10">
                        <div className="col-span-3">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 text-right">Chronology</h2>
                        </div>
                        <div className="col-span-9 space-y-16">
                            {work.map((job, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between items-baseline mb-6">
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-[0.15em] mb-1">{job.position}</h3>
                                            <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60" style={{ color: accentColor }}>{job.company}</div>
                                        </div>
                                        <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-1">
                                            {job.startDate} &mdash; {job.endDate || 'Present'}
                                        </div>
                                    </div>
                                    <div className="max-w-xl space-y-4">
                                        <p className="text-sm leading-relaxed text-slate-500 whitespace-pre-line">{job.description}</p>
                                        {job.metrics && <div className="text-[10px] font-black uppercase text-indigo-400 tracking-tighter">&diams; {job.metrics}</div>}
                                        {job.technologies && (
                                            <div className="flex flex-wrap gap-4 pt-2">
                                                {job.technologies.slice(0, 5).map((t, i) => (
                                                    <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-slate-300">{t}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education, Awards, Leadership */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 text-right">Credentials</h2>
                    </div>
                    <div className="col-span-9 grid grid-cols-2 gap-12">
                        <section className="space-y-8">
                            {education && education.length > 0 && (
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-200 mb-4 items-center flex gap-3">Education <div className="h-px flex-1 bg-slate-50" /></h4>
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="mb-6">
                                            <h3 className="text-xs font-bold text-slate-900 uppercase mb-0.5">{edu.institution}</h3>
                                            <div className="text-[10px] font-medium text-slate-400 italic mb-1">{edu.studyType} &bull; {edu.area}</div>
                                            <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{edu.startDate} &mdash; {edu.endDate}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {publications && publications.length > 0 && (
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-200 mb-4 items-center flex gap-3">Publications <div className="h-px flex-1 bg-slate-50" /></h4>
                                    {publications.map((p, idx) => (
                                        <div key={idx} className="mb-4 text-[10px] leading-relaxed">
                                            <span className="font-bold uppercase block">{p.title}</span>
                                            <span className="text-slate-400 italic">{p.publisher} ({p.date})</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                        <section className="space-y-8">
                            {awards && awards.length > 0 && (
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-200 mb-4 items-center flex gap-3">Accolades <div className="h-px flex-1 bg-slate-50" /></h4>
                                    {awards.map((a, idx) => (
                                        <div key={idx} className="mb-4 text-[10px]">
                                            <span className="font-bold uppercase block">{a.title}</span>
                                            <span className="text-slate-400 italic">{a.issuer} &bull; {a.date}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {leadership && leadership.length > 0 && (
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-200 mb-4 items-center flex gap-3">Leadership <div className="h-px flex-1 bg-slate-50" /></h4>
                                    {leadership.map((l, idx) => (
                                        <div key={idx} className="mb-4 text-[10px]">
                                            <span className="font-bold uppercase block">{l.role}</span>
                                            <span className="text-slate-400">{l.organization}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </div>

                {/* Final Grid (Skills, Langs, References) */}
                <div className="grid grid-cols-12 gap-10 pt-10 border-t border-slate-50">
                    <div className="col-span-3">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 text-right">Capabilities</h2>
                    </div>
                    <div className="col-span-9 grid grid-cols-3 gap-8">
                        {skills && skills.length > 0 && (
                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-200 mb-4">Expertise</h4>
                                <div className="flex flex-col gap-2">
                                    {skills.slice(0, 8).map((s, i) => (
                                        <div key={i} className="text-[10px] font-bold uppercase tracking-tighter text-slate-600">{s.name}</div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {languages && languages.length > 0 && (
                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-200 mb-4">Eloquence</h4>
                                <div className="flex flex-col gap-2">
                                    {languages.map((l, i) => (
                                        <div key={i} className="text-[10px]">
                                            <span className="font-bold text-slate-600 uppercase tracking-tighter">{l.language}</span>
                                            <span className="text-slate-300 italic block text-[9px] leading-none">{l.fluency}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div>
                            <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-200 mb-4">Verification</h4>
                            <div className="text-[10px] italic leading-relaxed text-slate-300">
                                {showReferencesToggle ? "Professional references available upon inquiry." : "Detailed references on request."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minimal Footer Page Marker */}
            <footer className="mt-32 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-slate-200">
                <div>{new Date().getFullYear()}</div>
                <div>Minimalism Collection &bull; 01</div>
            </footer>
        </div>
    );
};
