'use client';

import React from 'react';

import { Resume, ResumeContent } from '@/types/resume';
import { ResumeDesignConfig, TemplateFieldConfig, DEFAULT_FIELD_CONFIG } from '@/types/template-design';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Award, BookOpen, Users, Heart, Building, FileText, Presentation } from 'lucide-react';

export interface BaseTemplateProps {
    resume: Resume;
    config: ResumeDesignConfig;
    fieldConfig?: Partial<TemplateFieldConfig>;
    preview?: boolean;
}

/**
 * Base Template Component
 * Provides utility functions and common rendering logic for all templates
 */
export class BaseTemplate {
    protected resume: Resume;
    protected config: ResumeDesignConfig;
    protected fieldConfig: TemplateFieldConfig;
    protected content: ResumeContent;

    constructor(resume: Resume, config: ResumeDesignConfig, fieldConfig?: Partial<TemplateFieldConfig>) {
        this.resume = resume;
        this.config = config;
        this.content = resume.content;
        this.fieldConfig = { ...DEFAULT_FIELD_CONFIG, ...fieldConfig };
    }

    // ==================== UTILITY FUNCTIONS ====================

    /**
     * Format date range
     */
    protected formatDateRange(startDate: string, endDate: string, current?: boolean): string {
        if (!startDate) return '';
        const end = current ? 'Present' : endDate || 'Present';
        return `${startDate} - ${end}`;
    }

    /**
     * Format location (handles both string and object)
     */
    protected formatLocation(location: any): string {
        if (!location) return '';
        if (typeof location === 'string') return location;

        const parts = [
            location.city,
            location.region,
            location.countryCode
        ].filter(Boolean);

        return parts.join(', ');
    }

    /**
     * Check if section has content
     */
    protected hasContent(section: keyof ResumeContent): boolean {
        const data = this.content[section];
        if (!data) return false;
        if (Array.isArray(data)) return data.length > 0;
        if (typeof data === 'object') return Object.keys(data).length > 0;
        return Boolean(data);
    }

    /**
     * Get section title
     */
    protected getSectionTitle(section: string): string {
        const titles: Record<string, string> = {
            work: 'Work Experience',
            education: 'Education',
            skills: 'Skills',
            projects: 'Projects',
            certifications: 'Certifications',
            awards: 'Awards & Honors',
            publications: 'Publications',
            volunteer: 'Volunteer Experience',
            leadership: 'Leadership',
            languages: 'Languages',
            interests: 'Interests',
            affiliations: 'Professional Affiliations',
            patents: 'Patents',
            conferences: 'Conferences & Presentations',
            references: 'References',
        };
        return titles[section] || section;
    }

    /**
     * Render contact icons
     */
    protected renderContactIcon(type: string, size: number = 16): React.JSX.Element | null {
        const iconProps = { size, className: 'inline-block' };

        switch (type) {
            case 'email': return <Mail {...iconProps} />;
            case 'phone': return <Phone {...iconProps} />;
            case 'location': return <MapPin {...iconProps} />;
            case 'url': return <Globe {...iconProps} />;
            case 'github': return <Github {...iconProps} />;
            case 'linkedin': return <Linkedin {...iconProps} />;
            case 'calendar': return <Calendar {...iconProps} />;
            case 'award': return <Award {...iconProps} />;
            case 'book': return <BookOpen {...iconProps} />;
            case 'users': return <Users {...iconProps} />;
            case 'heart': return <Heart {...iconProps} />;
            case 'building': return <Building {...iconProps} />;
            case 'file': return <FileText {...iconProps} />;
            case 'presentation': return <Presentation {...iconProps} />;
            default: return null;
        }
    }

    // ==================== SECTION RENDERERS ====================

    /**
     * Render header/basics section
     */
    protected renderHeader(): React.JSX.Element {
        const { basics } = this.content;
        const { fieldConfig } = this;

        return (
            <header>
                {fieldConfig.basics.name && (
                    <h1 style={{
                        fontFamily: this.config.fonts.heading,
                        fontSize: this.config.fonts.size.name,
                        fontWeight: this.config.fonts.weight.heading,
                        color: this.config.colors.primary,
                        marginBottom: '8px',
                    }}>
                        {basics.name}
                    </h1>
                )}

                {fieldConfig.basics.label && basics.label && (
                    <h2 style={{
                        fontFamily: this.config.fonts.body,
                        fontSize: this.config.fonts.size.heading,
                        fontWeight: this.config.fonts.weight.subheading,
                        color: this.config.colors.secondary,
                        marginBottom: '16px',
                    }}>
                        {basics.label}
                    </h2>
                )}

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    fontSize: this.config.fonts.size.small,
                    color: this.config.colors.textLight,
                }}>
                    {fieldConfig.basics.email && basics.email && (
                        <span>{this.config.icons.show && this.renderContactIcon('email', 14)} {basics.email}</span>
                    )}
                    {fieldConfig.basics.phone && basics.phone && (
                        <span>{this.config.icons.show && this.renderContactIcon('phone', 14)} {basics.phone}</span>
                    )}
                    {fieldConfig.basics.location && (
                        <span>{this.config.icons.show && this.renderContactIcon('location', 14)} {this.formatLocation(basics.location)}</span>
                    )}
                    {fieldConfig.basics.url && basics.url && (
                        <span>{this.config.icons.show && this.renderContactIcon('url', 14)} {basics.url}</span>
                    )}
                    {fieldConfig.basics.linkedinUrl && basics.linkedinUrl && (
                        <span>{this.config.icons.show && this.renderContactIcon('linkedin', 14)} LinkedIn</span>
                    )}
                    {fieldConfig.basics.githubUrl && basics.githubUrl && (
                        <span>{this.config.icons.show && this.renderContactIcon('github', 14)} GitHub</span>
                    )}
                    {fieldConfig.basics.portfolioUrl && basics.portfolioUrl && (
                        <span>{this.config.icons.show && this.renderContactIcon('url', 14)} Portfolio</span>
                    )}
                </div>
            </header>
        );
    }

    /**
     * Render summary/objective
     */
    protected renderSummary(): React.JSX.Element | null {
        const { basics } = this.content;
        const { fieldConfig } = this;

        if (!fieldConfig.basics.summary && !fieldConfig.basics.objective) return null;
        if (!basics.summary && !basics.objective) return null;

        return (
            <section style={{ marginBottom: this.config.spacing.section }}>
                {fieldConfig.basics.summary && basics.summary && (
                    <>
                        <h3 style={{
                            fontSize: this.config.fonts.size.heading,
                            fontWeight: this.config.fonts.weight.heading,
                            color: this.config.colors.primary,
                            marginBottom: this.config.spacing.item,
                        }}>
                            Professional Summary
                        </h3>
                        <p style={{
                            fontSize: this.config.fonts.size.body,
                            lineHeight: '1.6',
                            color: this.config.colors.text,
                        }}>
                            {basics.summary}
                        </p>
                    </>
                )}

                {fieldConfig.basics.objective && basics.objective && (
                    <>
                        <h3 style={{
                            fontSize: this.config.fonts.size.heading,
                            fontWeight: this.config.fonts.weight.heading,
                            color: this.config.colors.primary,
                            marginBottom: this.config.spacing.item,
                            marginTop: basics.summary ? '16px' : '0',
                        }}>
                            Career Objective
                        </h3>
                        <p style={{
                            fontSize: this.config.fonts.size.body,
                            lineHeight: '1.6',
                            color: this.config.colors.text,
                        }}>
                            {basics.objective}
                        </p>
                    </>
                )}
            </section>
        );
    }

    /**
     * Render work experience
     */
    protected renderWorkExperience(): React.JSX.Element | null {
        if (!this.hasContent('work')) return null;

        return (
            <section style={{ marginBottom: this.config.spacing.section }}>
                <h3 style={{
                    fontSize: this.config.fonts.size.heading,
                    fontWeight: this.config.fonts.weight.heading,
                    color: this.config.colors.primary,
                    marginBottom: this.config.spacing.item,
                    borderBottom: `2px solid ${this.config.colors.border}`,
                    paddingBottom: '4px',
                }}>
                    {this.getSectionTitle('work')}
                </h3>

                {this.content.work.map((job, idx) => (
                    <div key={idx} style={{ marginBottom: this.config.spacing.item }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                            <div>
                                {this.fieldConfig.work.position && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.subheading,
                                        fontWeight: this.config.fonts.weight.subheading,
                                        color: this.config.colors.text,
                                    }}>
                                        {job.position}
                                    </h4>
                                )}
                                {this.fieldConfig.work.company && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.body,
                                        color: this.config.colors.secondary,
                                        fontWeight: 600,
                                    }}>
                                        {job.company}
                                        {this.fieldConfig.work.location && job.location && ` | ${job.location}`}
                                        {this.fieldConfig.work.employmentType && job.employmentType && ` | ${job.employmentType}`}
                                    </div>
                                )}
                            </div>
                            {(this.fieldConfig.work.startDate || this.fieldConfig.work.endDate) && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {this.formatDateRange(job.startDate, job.endDate, job.current)}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.work.leadershipRole && job.leadershipRole && (
                            <div style={{ fontSize: this.config.fonts.size.small, color: this.config.colors.accent, marginBottom: '4px' }}>
                                <strong>Leadership:</strong> {job.leadershipRole}
                            </div>
                        )}

                        {this.fieldConfig.work.teamSize && job.teamSize && (
                            <div style={{ fontSize: this.config.fonts.size.small, color: this.config.colors.textLight, marginBottom: '4px' }}>
                                Team Size: {job.teamSize}
                            </div>
                        )}

                        {this.fieldConfig.work.description && job.description && (
                            <p style={{
                                fontSize: this.config.fonts.size.body,
                                lineHeight: '1.5',
                                color: this.config.colors.text,
                                marginTop: '4px',
                            }}>
                                {job.description}
                            </p>
                        )}

                        {this.fieldConfig.work.highlights && job.highlights && job.highlights.length > 0 && (
                            <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                                {job.highlights.map((highlight, i) => (
                                    <li key={i} style={{
                                        fontSize: this.config.fonts.size.body,
                                        lineHeight: '1.5',
                                        color: this.config.colors.text,
                                        marginBottom: '4px',
                                    }}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {this.fieldConfig.work.metrics && job.metrics && (
                            <div style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                marginTop: '4px',
                                fontWeight: 600,
                            }}>
                                📊 {job.metrics}
                            </div>
                        )}

                        {this.fieldConfig.work.technologies && job.technologies && job.technologies.length > 0 && (
                            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {job.technologies.map((tech, i) => (
                                    <span key={i} style={{
                                        fontSize: this.config.fonts.size.small,
                                        padding: '2px 8px',
                                        backgroundColor: this.config.colors.background,
                                        border: `1px solid ${this.config.colors.border}`,
                                        borderRadius: '4px',
                                        color: this.config.colors.text,
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {this.fieldConfig.work.promotionHistory && job.promotionHistory && (
                            <div style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                marginTop: '4px',
                                fontStyle: 'italic',
                            }}>
                                ⬆️ {job.promotionHistory}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render education
     */
    protected renderEducation(): React.JSX.Element | null {
        if (!this.hasContent('education')) return null;

        return (
            <section style={{ marginBottom: this.config.spacing.section }}>
                <h3 style={{
                    fontSize: this.config.fonts.size.heading,
                    fontWeight: this.config.fonts.weight.heading,
                    color: this.config.colors.primary,
                    marginBottom: this.config.spacing.item,
                    borderBottom: `2px solid ${this.config.colors.border}`,
                    paddingBottom: '4px',
                }}>
                    {this.getSectionTitle('education')}
                </h3>

                {this.content.education.map((edu, idx) => (
                    <div key={idx} style={{ marginBottom: this.config.spacing.item }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.education.studyType && this.fieldConfig.education.area && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.subheading,
                                        fontWeight: this.config.fonts.weight.subheading,
                                        color: this.config.colors.text,
                                    }}>
                                        {edu.studyType} in {edu.area}
                                    </h4>
                                )}
                                {this.fieldConfig.education.institution && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.body,
                                        color: this.config.colors.secondary,
                                    }}>
                                        {edu.institution}
                                        {this.fieldConfig.education.location && edu.location && ` | ${edu.location}`}
                                    </div>
                                )}
                            </div>
                            {(this.fieldConfig.education.startDate || this.fieldConfig.education.endDate) && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {this.formatDateRange(edu.startDate, edu.endDate)}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.education.score && edu.score && (
                            <div style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                marginTop: '4px',
                            }}>
                                GPA: {edu.score}
                            </div>
                        )}

                        {this.fieldConfig.education.honors && edu.honors && (
                            <div style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                marginTop: '4px',
                                fontStyle: 'italic',
                            }}>
                                🏆 {edu.honors}
                            </div>
                        )}

                        {this.fieldConfig.education.coursework && edu.coursework && edu.coursework.length > 0 && (
                            <div style={{ marginTop: '4px' }}>
                                <span style={{ fontSize: this.config.fonts.size.small, fontWeight: 600 }}>Relevant Coursework: </span>
                                <span style={{ fontSize: this.config.fonts.size.small, color: this.config.colors.textLight }}>
                                    {edu.coursework.join(', ')}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render skills
     */
    protected renderSkills(): React.JSX.Element | null {
        if (!this.hasContent('skills')) return null;

        return (
            <section style={{ marginBottom: this.config.spacing.section }}>
                <h3 style={{
                    fontSize: this.config.fonts.size.heading,
                    fontWeight: this.config.fonts.weight.heading,
                    color: this.config.colors.primary,
                    marginBottom: this.config.spacing.item,
                    borderBottom: `2px solid ${this.config.colors.border}`,
                    paddingBottom: '4px',
                }}>
                    {this.getSectionTitle('skills')}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {this.content.skills.map((skill, idx) => (
                        <div key={idx} style={{
                            display: 'inline-flex',
                            flexDirection: 'column',
                            padding: '6px 12px',
                            backgroundColor: this.config.colors.background,
                            border: `1px solid ${this.config.colors.border}`,
                            borderRadius: this.config.borders.radius,
                        }}>
                            {this.fieldConfig.skills.name && (
                                <span style={{
                                    fontSize: this.config.fonts.size.body,
                                    fontWeight: 600,
                                    color: this.config.colors.text,
                                }}>
                                    {skill.name}
                                </span>
                            )}
                            {this.fieldConfig.skills.level && skill.level && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {skill.level}
                                </span>
                            )}
                            {this.fieldConfig.skills.type && skill.type && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.accent,
                                }}>
                                    {skill.type}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Continue in next file...
}

