import { Resume } from "@/types/resume";

export const ProfessionalTemplate = ({ resume }: { resume: Resume }) => {
    const {
        basics, work, education, skills, projects, certifications,
        languages, awards, publications, volunteer, leadership,
        interests, affiliations, patents, conferences, references,
        showReferencesToggle
    } = resume.content;
    const accentColor = resume.style?.color || '#0f172a';

    return (
        <div className="w-full h-full bg-white text-slate-900 p-12 max-w-[210mm] mx-auto leading-relaxed font-serif">
            {/* Header */}
            <header className="border-b-4 border-slate-900 pb-6 mb-8 text-center relative">
                <h1 className="text-5xl font-bold uppercase tracking-tighter mb-4">
                    {basics.name}
                </h1>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-700 font-semibold">
                    {basics.email && <span>{basics.email}</span>}
                    {basics.phone && <span>{basics.phone}</span>}
                    {basics.location && (
                        <span>{typeof basics.location === 'string' ? basics.location : `${basics.location.city}, ${basics.location.countryCode}`}</span>
                    )}
                    {basics.linkedinUrl && <span className="underline">{basics.linkedinUrl.replace(/^https?:\/\//, '')}</span>}
                    {basics.portfolioUrl && <span className="underline">{basics.portfolioUrl.replace(/^https?:\/\//, '')}</span>}
                </div>
            </header>

            {/* Objective & Summary */}
            <div className="grid grid-cols-1 gap-6 mb-8">
                {basics.objective && (
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Career Objective</h2>
                        <p className="text-sm italic font-medium text-slate-700 leading-snug">{basics.objective}</p>
                    </section>
                )}
                {basics.summary && (
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3 border-b border-slate-200 pb-1">Professional Profile</h2>
                        <p className="text-sm text-justify leading-relaxed">
                            {basics.summary}
                        </p>
                    </section>
                )}
            </div>

            {/* Experience */}
            {work && work.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 mb-4">Professional Experience</h2>
                    <div className="space-y-8">
                        {work.map((job, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-baseline mb-2">
                                    <div className="flex items-baseline gap-3">
                                        <h3 className="text-lg font-bold">{job.position}</h3>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-sm font-bold" style={{ color: accentColor }}>{job.company}</span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-600">
                                        {job.startDate} – {job.endDate || 'Present'}
                                    </span>
                                </div>
                                {job.location && <div className="text-xs italic text-slate-500 mb-2">{job.location} | {job.employmentType}</div>}
                                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                                    {job.description}
                                </p>
                                {job.highlights && job.highlights.length > 0 && (
                                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 ml-4 mb-3">
                                        {job.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                    </ul>
                                )}
                                {job.technologies && job.technologies.length > 0 && (
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                        Key Technologies: {job.technologies.join(', ')}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education && education.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 mb-4">Education & Credentials</h2>
                    <div className="space-y-6">
                        {education.map((edu, idx) => (
                            <div key={idx} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-base">{edu.institution}</h3>
                                    <div className="text-sm font-bold" style={{ color: accentColor }}>{edu.studyType} in {edu.area}</div>
                                    {edu.honors && <div className="text-xs font-bold text-slate-600 italic mt-1">{edu.honors}</div>}
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-bold text-slate-700">{edu.startDate} – {edu.endDate}</div>
                                    {edu.score && <div className="text-xs font-black mt-1">GPA: {edu.score}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills Grid */}
            {skills && skills.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 mb-4">Expertise & Skills</h2>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                        {skills.map((s, i) => (
                            <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 pb-1">
                                <span className="font-bold text-slate-800">{s.name}</span>
                                <span className="text-[10px] text-slate-400 uppercase font-black">{s.level}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Two Column for smaller sections */}
            <div className="grid grid-cols-2 gap-12">
                <div>
                    {certifications && certifications.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xs font-black uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Certifications</h2>
                            <div className="space-y-3">
                                {certifications.map((c, i) => (
                                    <div key={i}>
                                        <div className="font-bold text-sm leading-tight">{c.name}</div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase">{c.issuer} | {c.date}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                    {projects && projects.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xs font-black uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Key Projects</h2>
                            <div className="space-y-4">
                                {projects.map((p, i) => (
                                    <div key={i}>
                                        <div className="font-bold text-sm">{p.name}</div>
                                        <div className="text-xs text-slate-600 leading-snug">{p.description}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
                <div>
                    {awards && awards.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xs font-black uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Awards & Honors</h2>
                            <div className="space-y-3">
                                {awards.map((a, i) => (
                                    <div key={i}>
                                        <div className="font-bold text-sm underline decoration-slate-200">{a.title}</div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase">{a.issuer}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                    {languages && languages.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xs font-black uppercase tracking-widest border-b border-slate-300 pb-1 mb-4">Languages</h2>
                            <div className="flex flex-wrap gap-4">
                                {languages.map((l, i) => (
                                    <div key={i} className="text-sm">
                                        <span className="font-bold">{l.language}:</span> <span className="text-slate-500 italic">{l.fluency}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Footer Sections */}
            <div className="mt-8 pt-8 border-t-4 border-slate-900 grid grid-cols-3 gap-8">
                {publications && publications.length > 0 && (
                    <div className="col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Selected Publications</h4>
                        <div className="space-y-2">
                            {publications.map((p, i) => (
                                <div key={i} className="text-xs italic text-slate-700">"{p.title}" – {p.publisher} ({p.date})</div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="text-right">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">References</h4>
                    <div className="text-xs font-bold italic">
                        {showReferencesToggle ? "Professional references available upon request." : "Direct contact details available upon verification."}
                    </div>
                </div>
            </div>
        </div>
    );
};
