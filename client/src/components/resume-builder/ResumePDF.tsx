"use client";

import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { Resume } from '@/types/resume';

// Register standard fonts
Font.register({
    family: 'Inter',
    fonts: [
        { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2', fontWeight: 400 },
        { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2', fontWeight: 700 },
        { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuNYZ9hiA.woff2', fontWeight: 900 },
    ],
});

// Styles helper to create dynamic styles
const createStyles = (accentColor: string) => StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Inter',
        color: '#1e293b',
        padding: 0,
    },
    // Modern Sidebar Styles
    sidebar: {
        width: '32%',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        padding: 24,
        height: '100%',
    },
    main: {
        flex: 1,
        padding: 32,
    },
    sidebarSectionTitle: {
        fontSize: 8,
        fontWeight: 'black',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        color: '#94a3b8',
        borderBottom: '1pt solid #334155',
        paddingBottom: 4,
        marginBottom: 8,
        marginTop: 16,
    },
    sidebarText: {
        fontSize: 8,
        marginBottom: 4,
        color: '#cbd5e1',
    },
    sidebarLabel: {
        fontSize: 6,
        textTransform: 'uppercase',
        color: '#64748b',
        marginBottom: 2,
        fontWeight: 'bold',
    },
    skillBadgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 3,
        marginTop: 4,
    },
    skillBadge: {
        backgroundColor: '#1e293b',
        border: '1pt solid #334155',
        padding: '2 5',
        borderRadius: 4,
        fontSize: 7,
        color: '#e2e8f0',
    },

    // Main Content Styles
    name: {
        fontSize: 28,
        fontWeight: 'black',
        textTransform: 'uppercase',
        marginBottom: 4,
        color: '#0f172a',
    },
    label: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: accentColor,
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 16,
    },
    sectionTitle: {
        fontSize: 9,
        fontWeight: 'black',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        color: '#64748b',
    },
    sectionLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#f1f5f9',
        marginLeft: 8,
    },
    itemTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    itemSubtitle: {
        fontSize: 9,
        fontWeight: 'bold',
        color: accentColor,
        marginBottom: 2,
    },
    dateRange: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#94a3b8',
        textTransform: 'uppercase',
    },
    description: {
        fontSize: 9,
        lineHeight: 1.4,
        color: '#475569',
        marginBottom: 8,
    },
    bulletPoint: {
        fontSize: 9,
        color: '#475569',
        marginBottom: 2,
        marginLeft: 10,
    },
    metricBox: {
        backgroundColor: '#f8fafc',
        padding: 6,
        borderRadius: 4,
        borderLeft: `2pt solid ${accentColor}`,
        marginBottom: 8,
    },
    metricText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#334155',
    },

    // Grid helpers
    gridRow: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
    },
    gridCol: {
        flex: 1,
    }
});

export const ResumePDF = ({ resume }: { resume: Resume }) => {
    const layout = resume.style?.layout || 'sidebar';
    const accentColor = resume.style?.color || '#4F46E5';
    const styles = createStyles(accentColor);
    const {
        basics, work, education, skills, projects, certifications,
        languages, awards, publications, volunteer, leadership,
        interests, affiliations, patents, conferences, references,
        showReferencesToggle
    } = resume.content;

    const SectionTitle = ({ title }: { title: string }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.sectionLine} />
        </View>
    );

    // --- Sub-components for different layouts ---

    const ModernSidebar = () => (
        <Page size="A4" style={styles.page}>
            <View style={styles.sidebar}>
                {basics.image && basics.showImage && (
                    <View style={{ marginBottom: 20, alignItems: 'center' }}>
                        <Image src={basics.image} style={{ width: 80, height: 80, borderRadius: 40, border: '2pt solid #1e293b' }} />
                    </View>
                )}

                <View style={{ marginBottom: 15 }}>
                    <Text style={styles.sidebarSectionTitle}>Contact</Text>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={styles.sidebarLabel}>Email</Text>
                        <Text style={styles.sidebarText}>{basics.email}</Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={styles.sidebarLabel}>Phone</Text>
                        <Text style={styles.sidebarText}>{basics.phone}</Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={styles.sidebarLabel}>Location</Text>
                        <Text style={styles.sidebarText}>
                            {typeof basics.location === 'string' ? basics.location : `${basics.location.city}, ${basics.location.countryCode}`}
                        </Text>
                    </View>
                    {basics.linkedinUrl && (
                        <View style={{ marginBottom: 5 }}>
                            <Text style={styles.sidebarLabel}>LinkedIn</Text>
                            <Text style={styles.sidebarText}>{basics.linkedinUrl.replace(/^https?:\/\//, '')}</Text>
                        </View>
                    )}
                    {basics.githubUrl && (
                        <View style={{ marginBottom: 5 }}>
                            <Text style={styles.sidebarLabel}>GitHub</Text>
                            <Text style={styles.sidebarText}>{basics.githubUrl.replace(/^https?:\/\//, '')}</Text>
                        </View>
                    )}
                </View>

                {skills && skills.length > 0 && (
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.sidebarSectionTitle}>Skills</Text>
                        <View style={styles.skillBadgeContainer}>
                            {skills.map((s, i) => (
                                <Text key={i} style={styles.skillBadge}>{s.name}</Text>
                            ))}
                        </View>
                    </View>
                )}

                {languages && languages.length > 0 && (
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.sidebarSectionTitle}>Languages</Text>
                        {languages.map((l, i) => (
                            <View key={i} style={{ marginBottom: 4 }}>
                                <Text style={{ ...styles.sidebarText, fontWeight: 'bold', color: '#fff', marginBottom: 1 }}>{l.language}</Text>
                                <Text style={{ ...styles.sidebarText, fontSize: 7, color: '#94a3b8' }}>{l.fluency}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {certifications && certifications.length > 0 && (
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.sidebarSectionTitle}>Certifications</Text>
                        {certifications.map((c, i) => (
                            <View key={i} style={{ marginBottom: 6 }}>
                                <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#fff' }}>{c.name}</Text>
                                <Text style={{ fontSize: 7, color: '#94a3b8' }}>{c.issuer} | {c.date}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {affiliations && affiliations.length > 0 && (
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.sidebarSectionTitle}>Affiliations</Text>
                        {affiliations.map((a, i) => (
                            <View key={i} style={{ marginBottom: 6 }}>
                                <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#fff' }}>{a.organization}</Text>
                                <Text style={{ fontSize: 7, color: '#94a3b8' }}>{a.role}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {showReferencesToggle && (
                    <View style={{ marginTop: 'auto' }}>
                        <Text style={styles.sidebarSectionTitle}>References</Text>
                        <Text style={{ ...styles.sidebarText, fontSize: 7, fontStyle: 'italic', color: '#94a3b8' }}>
                            Professional references available upon request.
                        </Text>
                    </View>
                )}
            </View>

            <View style={styles.main}>
                <Text style={styles.name}>{basics.name}</Text>
                <Text style={styles.label}>{basics.label}</Text>

                {(basics.summary || basics.objective) && (
                    <View style={{ marginBottom: 10 }}>
                        <SectionTitle title="Profile" />
                        {basics.summary && <Text style={styles.description}>{basics.summary}</Text>}
                        {basics.objective && (
                            <View style={{ backgroundColor: '#f8fafc', padding: 8, borderRadius: 4, marginBottom: 8, borderLeft: `2pt solid ${accentColor}` }}>
                                <Text style={{ fontSize: 7, fontWeight: 'bold', color: '#64748b', marginBottom: 2, textTransform: 'uppercase' }}>Objective</Text>
                                <Text style={{ fontSize: 9, fontStyle: 'italic', color: '#475569' }}>{basics.objective}</Text>
                            </View>
                        )}
                    </View>
                )}

                {work && work.length > 0 && (
                    <View style={{ marginBottom: 10 }}>
                        <SectionTitle title="Experience" />
                        {work.map((job, i) => (
                            <View key={i} style={{ marginBottom: 12 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                                    <Text style={styles.itemTitle}>{job.position}</Text>
                                    <Text style={styles.dateRange}>{job.startDate} – {job.endDate || 'Present'}</Text>
                                </View>
                                <Text style={styles.itemSubtitle}>{job.company} {job.location && `| ${job.location}`}</Text>
                                <Text style={styles.description}>{job.description}</Text>
                                {job.metrics && (
                                    <View style={styles.metricBox}>
                                        <Text style={styles.metricText}>Key Result: {job.metrics}</Text>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                )}

                {projects && projects.length > 0 && (
                    <View style={{ marginBottom: 10 }}>
                        <SectionTitle title="Projects" />
                        {projects.map((p, i) => (
                            <View key={i} style={{ marginBottom: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#0f172a' }}>{p.name}</Text>
                                    <Text style={styles.dateRange}>{p.role}</Text>
                                </View>
                                <Text style={styles.description}>{p.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {education && education.length > 0 && (
                    <View style={{ marginBottom: 10 }}>
                        <SectionTitle title="Education" />
                        {education.map((edu, i) => (
                            <View key={i} style={{ marginBottom: 8 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{edu.institution}</Text>
                                    <Text style={styles.dateRange}>{edu.startDate} – {edu.endDate}</Text>
                                </View>
                                <Text style={{ fontSize: 9, color: accentColor, fontWeight: 'bold' }}>{edu.studyType} in {edu.area}</Text>
                                {edu.score && <Text style={{ fontSize: 8, color: '#64748b' }}>GPA: {edu.score}</Text>}
                            </View>
                        ))}
                    </View>
                )}

                <View style={styles.gridRow}>
                    <View style={styles.gridCol}>
                        {awards && awards.length > 0 && (
                            <View>
                                <SectionTitle title="Awards" />
                                {awards.map((a, i) => (
                                    <View key={i} style={{ marginBottom: 6 }}>
                                        <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{a.title}</Text>
                                        <Text style={{ fontSize: 7, color: '#64748b' }}>{a.issuer} | {a.date}</Text>
                                        {a.description && <Text style={{ fontSize: 7, color: '#475569', marginTop: 2 }}>{a.description}</Text>}
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                    <View style={styles.gridCol}>
                        {publications && publications.length > 0 && (
                            <View>
                                <SectionTitle title="Publications" />
                                {publications.map((p, i) => (
                                    <View key={i} style={{ marginBottom: 6 }}>
                                        <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{p.title}</Text>
                                        <Text style={{ fontSize: 7, color: '#64748b' }}>{p.publisher} | {p.date}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                </View>

                {leadership && leadership.length > 0 && (
                    <View style={{ marginBottom: 10 }}>
                        <SectionTitle title="Leadership" />
                        {leadership.map((l, i) => (
                            <View key={i} style={{ marginBottom: 8 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{l.role} @ {l.organization}</Text>
                                <Text style={{ fontSize: 8, color: '#475569' }}>{l.impact}</Text>
                            </View>
                        ))}
                    </View>
                )}

                <View style={styles.gridRow}>
                    <View style={styles.gridCol}>
                        {patents && patents.length > 0 && (
                            <View>
                                <SectionTitle title="Patents" />
                                {patents.map((p, i) => (
                                    <View key={i} style={{ marginBottom: 6 }}>
                                        <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{p.title}</Text>
                                        <Text style={{ fontSize: 7, color: '#64748b' }}>{p.number} | {p.date}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                    <View style={styles.gridCol} />
                </View>
            </View>
        </Page>
    );

    const DoubleColumnLayout = () => (
        <Page size="A4" style={{ ...styles.page, flexDirection: 'column', padding: 35 }}>
            {/* Horizontal Header */}
            <View style={{ borderBottom: `4pt solid #0f172a`, paddingBottom: 20, marginBottom: 25 }}>
                <Text style={{ ...styles.name, fontSize: 34 }}>{basics.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ ...styles.label, marginBottom: 0 }}>{basics.label}</Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 8, color: '#64748b', fontWeight: 'bold' }}>{basics.email} | {basics.phone}</Text>
                        <Text style={{ fontSize: 8, color: '#94a3b8' }}>{typeof basics.location === 'string' ? basics.location : basics.location.city}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 30 }}>
                {/* Main Column */}
                <View style={{ flex: 1.8 }}>
                    {(basics.summary || basics.objective) && (
                        <View style={{ marginBottom: 20 }}>
                            <SectionTitle title="Profile" />
                            <Text style={{ ...styles.description, fontSize: 10 }}>{basics.summary || basics.objective}</Text>
                        </View>
                    )}

                    <View style={{ marginBottom: 20 }}>
                        <SectionTitle title="Experience" />
                        {work.map((job, i) => (
                            <View key={i} style={{ marginBottom: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{job.position}</Text>
                                    <Text style={styles.dateRange}>{job.startDate} – {job.endDate}</Text>
                                </View>
                                <Text style={{ fontSize: 9, color: accentColor, fontWeight: 'bold', marginBottom: 4 }}>{job.company}</Text>
                                <Text style={styles.description}>{job.description}</Text>
                            </View>
                        ))}
                    </View>

                    {projects && projects.length > 0 && (
                        <View style={{ marginBottom: 20 }}>
                            <SectionTitle title="Key Initiatives" />
                            {projects.map((p, i) => (
                                <View key={i} style={{ marginBottom: 10 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{p.name} — {p.role}</Text>
                                    <Text style={styles.description}>{p.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                {/* Sidebar Column */}
                <View style={{ flex: 1, borderLeft: '1pt solid #f1f5f9', paddingLeft: 20 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 8, fontWeight: 'black', textTransform: 'uppercase', color: '#64748b', marginBottom: 10 }}>Core Expertise</Text>
                        <View style={{ gap: 6 }}>
                            {skills.map((s, i) => (
                                <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{s.name}</Text>
                                    <View style={{ width: 40, height: 2, backgroundColor: '#f1f5f9' }}>
                                        <View style={{ width: s.level === 'Expert' ? '100%' : '70%', height: '100%', backgroundColor: accentColor }} />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 8, fontWeight: 'black', textTransform: 'uppercase', color: '#64748b', marginBottom: 10 }}>Education</Text>
                        {education.map((edu, i) => (
                            <View key={i} style={{ marginBottom: 8 }}>
                                <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{edu.institution}</Text>
                                <Text style={{ fontSize: 7, color: '#64748b' }}>{edu.area}</Text>
                                <Text style={{ fontSize: 7, color: accentColor }}>{edu.endDate}</Text>
                            </View>
                        ))}
                    </View>

                    {certifications && certifications.length > 0 && (
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 8, fontWeight: 'black', textTransform: 'uppercase', color: '#64748b', marginBottom: 10 }}>Certifications</Text>
                            {certifications.map((c, i) => (
                                <View key={i} style={{ marginBottom: 4 }}>
                                    <Text style={{ fontSize: 8, fontWeight: 'bold' }}>{c.name}</Text>
                                    <Text style={{ fontSize: 7, color: '#94a3b8' }}>{c.issuer}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </Page>
    );

    const MinimalLayout = () => (
        <Page size="A4" style={{ ...styles.page, flexDirection: 'column', padding: 50 }}>
            <View style={{ marginBottom: 40, alignItems: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', letterSpacing: 2, marginBottom: 5 }}>{basics.name}</Text>
                <Text style={{ fontSize: 9, color: '#64748b', textTransform: 'uppercase', letterSpacing: 4 }}>{basics.label}</Text>
                <View style={{ height: 1, width: 100, backgroundColor: '#000', marginTop: 15 }} />
            </View>

            <View style={{ marginBottom: 25 }}>
                {work.map((job, i) => (
                    <View key={i} style={{ marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{job.company}</Text>
                            <Text style={{ fontSize: 8, color: '#94a3b8' }}>{job.startDate} — {job.endDate}</Text>
                        </View>
                        <Text style={{ fontSize: 9, fontStyle: 'italic', marginBottom: 4 }}>{job.position}</Text>
                        <Text style={{ ...styles.description, fontSize: 9 }}>{job.description}</Text>
                    </View>
                ))}
            </View>

            <View style={{ borderTop: '0.5pt solid #e2e8f0', paddingTop: 20 }}>
                <View style={{ flexDirection: 'row', gap: 40 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 7, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>Education</Text>
                        {education.map((edu, i) => (
                            <View key={i} style={{ marginBottom: 8 }}>
                                <Text style={{ fontSize: 8, fontWeight: 'bold' }}>{edu.studyType} in {edu.area}</Text>
                                <Text style={{ fontSize: 7, color: '#64748b' }}>{edu.institution}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 7, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>Skills</Text>
                        <Text style={{ fontSize: 8, lineHeight: 1.6 }}>{skills.map(s => s.name).join('  •  ')}</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 'auto', alignItems: 'center' }}>
                <Text style={{ fontSize: 7, color: '#cbd5e1' }}>{basics.email}  /  {basics.phone}  /  {typeof basics.location === 'string' ? basics.location : basics.location.city}</Text>
            </View>
        </Page>
    );

    const ProfessionalSingle = () => (
        <Page size="A4" style={{ ...styles.page, flexDirection: 'column', padding: 45 }}>
            <View style={{ marginBottom: 30, borderBottom: `2pt solid ${accentColor}`, paddingBottom: 20 }}>
                <Text style={{ ...styles.name, fontSize: 32, textAlign: 'center' }}>{basics.name}</Text>
                <Text style={{ ...styles.label, textAlign: 'center', marginBottom: 15 }}>{basics.label}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 15, fontSize: 9, color: '#475569' }}>
                    <Text>{basics.email}</Text>
                    <Text>•</Text>
                    <Text>{basics.phone}</Text>
                    <Text>•</Text>
                    <Text>{typeof basics.location === 'string' ? basics.location : basics.location.city}</Text>
                </View>
            </View>

            <View style={{ marginBottom: 20 }}>
                <SectionTitle title="Work Experience" />
                {work.map((job, i) => (
                    <View key={i} style={{ marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                            <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{job.position}</Text>
                            <Text style={styles.dateRange}>{job.startDate} – {job.endDate}</Text>
                        </View>
                        <Text style={{ fontSize: 10, color: accentColor, fontWeight: 'bold', marginBottom: 4 }}>{job.company}</Text>
                        <Text style={styles.description}>{job.description}</Text>
                    </View>
                ))}
            </View>

            <View style={{ marginBottom: 20 }}>
                <SectionTitle title="Education" />
                {education.map((edu, i) => (
                    <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{edu.institution}</Text>
                            <Text style={{ fontSize: 9, color: '#64748b' }}>{edu.studyType} in {edu.area}</Text>
                        </View>
                        <Text style={styles.dateRange}>{edu.endDate}</Text>
                    </View>
                ))}
            </View>

            <View>
                <SectionTitle title="Skills & Expertise" />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                    {skills.map((s, i) => (
                        <Text key={i} style={{ fontSize: 8, backgroundColor: '#f8fafc', padding: '3 8', borderRadius: 4, color: '#334155', border: '1pt solid #e2e8f0' }}>{s.name}</Text>
                    ))}
                </View>
            </View>
        </Page>
    );

    const renderLayout = () => {
        switch (layout) {
            case 'sidebar': return <ModernSidebar />;
            case 'double': return <DoubleColumnLayout />;
            case 'minimal': return <MinimalLayout />;
            case 'single':
            default: return <ProfessionalSingle />;
        }
    };

    return (
        <Document title={`${basics.name} - Resume`}>
            {renderLayout()}
        </Document>
    );
};
