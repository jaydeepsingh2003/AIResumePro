'use client';

/**
 * BaseTemplate - Part 2: Additional Section Renderers
 * This file contains renderers for all remaining resume sections
 */

import { BaseTemplate as BaseTemplateCore } from './BaseTemplate';

export class BaseTemplateExtended extends BaseTemplateCore {
    /**
     * Render projects
     */
    protected renderProjects(): JSX.Element | null {
        if (!this.hasContent('projects')) return null;

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
                    {this.getSectionTitle('projects')}
                </h3>

                {this.content.projects.map((project, idx) => (
                    <div key={idx} style={{ marginBottom: this.config.spacing.item }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.projects.name && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.subheading,
                                        fontWeight: this.config.fonts.weight.subheading,
                                        color: this.config.colors.text,
                                    }}>
                                        {project.name}
                                        {this.fieldConfig.projects.role && project.role && ` - ${project.role}`}
                                    </h4>
                                )}
                            </div>
                            {(this.fieldConfig.projects.startDate || this.fieldConfig.projects.endDate) && (project.startDate || project.endDate) && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {this.formatDateRange(project.startDate || '', project.endDate || '')}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.projects.description && project.description && (
                            <p style={{
                                fontSize: this.config.fonts.size.body,
                                lineHeight: '1.5',
                                color: this.config.colors.text,
                                marginTop: '4px',
                            }}>
                                {project.description}
                            </p>
                        )}

                        {this.fieldConfig.projects.impact && project.impact && (
                            <div style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                marginTop: '4px',
                                fontWeight: 600,
                            }}>
                                Impact: {project.impact}
                            </div>
                        )}

                        {this.fieldConfig.projects.keywords && project.keywords && project.keywords.length > 0 && (
                            <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {project.keywords.map((tech, i) => (
                                    <span key={i} style={{
                                        fontSize: this.config.fonts.size.small,
                                        padding: '2px 6px',
                                        backgroundColor: this.config.colors.background,
                                        border: `1px solid ${this.config.colors.border}`,
                                        borderRadius: '3px',
                                        color: this.config.colors.textLight,
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div style={{ marginTop: '4px', display: 'flex', gap: '12px', fontSize: this.config.fonts.size.small }}>
                            {this.fieldConfig.projects.url && project.url && (
                                <a href={project.url} style={{ color: this.config.colors.accent, textDecoration: 'none' }}>
                                    🔗 Live Demo
                                </a>
                            )}
                            {this.fieldConfig.projects.githubUrl && project.githubUrl && (
                                <a href={project.githubUrl} style={{ color: this.config.colors.accent, textDecoration: 'none' }}>
                                    💻 GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render certifications
     */
    protected renderCertifications(): JSX.Element | null {
        if (!this.hasContent('certifications')) return null;

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
                    {this.getSectionTitle('certifications')}
                </h3>

                {this.content.certifications!.map((cert, idx) => (
                    <div key={idx} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.certifications.name && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.body,
                                        fontWeight: 600,
                                        color: this.config.colors.text,
                                    }}>
                                        {cert.name}
                                    </h4>
                                )}
                                {this.fieldConfig.certifications.issuer && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.small,
                                        color: this.config.colors.secondary,
                                    }}>
                                        {cert.issuer}
                                    </div>
                                )}
                            </div>
                            {this.fieldConfig.certifications.date && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {cert.date}
                                </span>
                            )}
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '2px', fontSize: this.config.fonts.size.small }}>
                            {this.fieldConfig.certifications.credentialId && cert.credentialId && (
                                <span style={{ color: this.config.colors.textLight }}>
                                    ID: {cert.credentialId}
                                </span>
                            )}
                            {this.fieldConfig.certifications.expiryDate && cert.expiryDate && (
                                <span style={{ color: this.config.colors.textLight }}>
                                    Expires: {cert.expiryDate}
                                </span>
                            )}
                            {this.fieldConfig.certifications.url && cert.url && (
                                <a href={cert.url} style={{ color: this.config.colors.accent, textDecoration: 'none' }}>
                                    Verify
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render awards
     */
    protected renderAwards(): JSX.Element | null {
        if (!this.hasContent('awards')) return null;

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
                    {this.getSectionTitle('awards')}
                </h3>

                {this.content.awards!.map((award, idx) => (
                    <div key={idx} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.awards.title && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.body,
                                        fontWeight: 600,
                                        color: this.config.colors.text,
                                    }}>
                                        🏆 {award.title}
                                    </h4>
                                )}
                                {this.fieldConfig.awards.issuer && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.small,
                                        color: this.config.colors.secondary,
                                    }}>
                                        {award.issuer}
                                    </div>
                                )}
                            </div>
                            {this.fieldConfig.awards.date && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {award.date}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.awards.description && award.description && (
                            <p style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.text,
                                marginTop: '4px',
                            }}>
                                {award.description}
                            </p>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render publications
     */
    protected renderPublications(): JSX.Element | null {
        if (!this.hasContent('publications')) return null;

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
                    {this.getSectionTitle('publications')}
                </h3>

                {this.content.publications!.map((pub, idx) => (
                    <div key={idx} style={{ marginBottom: '10px' }}>
                        {this.fieldConfig.publications.title && (
                            <h4 style={{
                                fontSize: this.config.fonts.size.body,
                                fontWeight: 600,
                                color: this.config.colors.text,
                                fontStyle: 'italic',
                            }}>
                                "{pub.title}"
                            </h4>
                        )}

                        <div style={{ fontSize: this.config.fonts.size.small, color: this.config.colors.secondary, marginTop: '2px' }}>
                            {this.fieldConfig.publications.publisher && pub.publisher}
                            {this.fieldConfig.publications.date && pub.date && ` (${pub.date})`}
                        </div>

                        {this.fieldConfig.publications.description && pub.description && (
                            <p style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.text,
                                marginTop: '4px',
                            }}>
                                {pub.description}
                            </p>
                        )}

                        {this.fieldConfig.publications.url && pub.url && (
                            <a href={pub.url} style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                textDecoration: 'none',
                                marginTop: '4px',
                                display: 'inline-block',
                            }}>
                                📄 View Publication
                            </a>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render volunteer experience
     */
    protected renderVolunteer(): JSX.Element | null {
        if (!this.hasContent('volunteer')) return null;

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
                    {this.getSectionTitle('volunteer')}
                </h3>

                {this.content.volunteer!.map((vol, idx) => (
                    <div key={idx} style={{ marginBottom: this.config.spacing.item }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.volunteer.role && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.subheading,
                                        fontWeight: this.config.fonts.weight.subheading,
                                        color: this.config.colors.text,
                                    }}>
                                        {vol.role}
                                    </h4>
                                )}
                                {this.fieldConfig.volunteer.organization && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.body,
                                        color: this.config.colors.secondary,
                                    }}>
                                        {vol.organization}
                                    </div>
                                )}
                            </div>
                            {(this.fieldConfig.volunteer.startDate || this.fieldConfig.volunteer.endDate) && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {this.formatDateRange(vol.startDate, vol.endDate, vol.current)}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.volunteer.highlights && vol.highlights && vol.highlights.length > 0 && (
                            <ul style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                {vol.highlights.map((highlight, i) => (
                                    <li key={i} style={{
                                        fontSize: this.config.fonts.size.body,
                                        lineHeight: '1.5',
                                        color: this.config.colors.text,
                                    }}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render leadership
     */
    protected renderLeadership(): JSX.Element | null {
        if (!this.hasContent('leadership')) return null;

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
                    {this.getSectionTitle('leadership')}
                </h3>

                {this.content.leadership!.map((lead, idx) => (
                    <div key={idx} style={{ marginBottom: this.config.spacing.item }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.leadership.role && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.subheading,
                                        fontWeight: this.config.fonts.weight.subheading,
                                        color: this.config.colors.text,
                                    }}>
                                        {lead.role}
                                    </h4>
                                )}
                                {this.fieldConfig.leadership.organization && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.body,
                                        color: this.config.colors.secondary,
                                    }}>
                                        {lead.organization}
                                    </div>
                                )}
                            </div>
                            {(this.fieldConfig.leadership.startDate || this.fieldConfig.leadership.endDate) && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {this.formatDateRange(lead.startDate, lead.endDate, lead.current)}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.leadership.description && lead.description && (
                            <p style={{
                                fontSize: this.config.fonts.size.body,
                                lineHeight: '1.5',
                                color: this.config.colors.text,
                                marginTop: '4px',
                            }}>
                                {lead.description}
                            </p>
                        )}

                        {this.fieldConfig.leadership.impact && lead.impact && (
                            <div style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                marginTop: '4px',
                                fontWeight: 600,
                            }}>
                                Impact: {lead.impact}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render languages
     */
    protected renderLanguages(): JSX.Element | null {
        if (!this.hasContent('languages')) return null;

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
                    {this.getSectionTitle('languages')}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {this.content.languages!.map((lang, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}>
                            {this.fieldConfig.languages.language && (
                                <span style={{
                                    fontSize: this.config.fonts.size.body,
                                    fontWeight: 600,
                                    color: this.config.colors.text,
                                }}>
                                    {lang.language}
                                </span>
                            )}
                            {this.fieldConfig.languages.fluency && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    ({lang.fluency})
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    /**
     * Render interests
     */
    protected renderInterests(): JSX.Element | null {
        if (!this.hasContent('interests')) return null;

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
                    {this.getSectionTitle('interests')}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {this.content.interests!.map((interest, idx) => (
                        <div key={idx} style={{
                            padding: '4px 10px',
                            backgroundColor: this.config.colors.background,
                            border: `1px solid ${this.config.colors.border}`,
                            borderRadius: this.config.borders.radius,
                        }}>
                            {this.fieldConfig.interests.name && (
                                <span style={{
                                    fontSize: this.config.fonts.size.body,
                                    color: this.config.colors.text,
                                }}>
                                    {interest.name}
                                </span>
                            )}
                            {this.fieldConfig.interests.keywords && interest.keywords && interest.keywords.length > 0 && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                    marginLeft: '4px',
                                }}>
                                    ({interest.keywords.join(', ')})
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    /**
     * Render affiliations
     */
    protected renderAffiliations(): JSX.Element | null {
        if (!this.hasContent('affiliations')) return null;

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
                    {this.getSectionTitle('affiliations')}
                </h3>

                {this.content.affiliations!.map((aff, idx) => (
                    <div key={idx} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.affiliations.role && (
                                    <span style={{
                                        fontSize: this.config.fonts.size.body,
                                        fontWeight: 600,
                                        color: this.config.colors.text,
                                    }}>
                                        {aff.role}
                                    </span>
                                )}
                                {this.fieldConfig.affiliations.organization && (
                                    <span style={{
                                        fontSize: this.config.fonts.size.body,
                                        color: this.config.colors.secondary,
                                        marginLeft: '6px',
                                    }}>
                                        - {aff.organization}
                                    </span>
                                )}
                            </div>
                            {(this.fieldConfig.affiliations.startDate || this.fieldConfig.affiliations.endDate) && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {this.formatDateRange(aff.startDate, aff.endDate, aff.current)}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render patents
     */
    protected renderPatents(): JSX.Element | null {
        if (!this.hasContent('patents')) return null;

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
                    {this.getSectionTitle('patents')}
                </h3>

                {this.content.patents!.map((patent, idx) => (
                    <div key={idx} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.patents.title && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.body,
                                        fontWeight: 600,
                                        color: this.config.colors.text,
                                    }}>
                                        {patent.title}
                                    </h4>
                                )}
                                {this.fieldConfig.patents.number && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.small,
                                        color: this.config.colors.secondary,
                                    }}>
                                        Patent No: {patent.number}
                                    </div>
                                )}
                            </div>
                            {this.fieldConfig.patents.date && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {patent.date}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.patents.url && patent.url && (
                            <a href={patent.url} style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.accent,
                                textDecoration: 'none',
                                marginTop: '4px',
                                display: 'inline-block',
                            }}>
                                View Patent
                            </a>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render conferences
     */
    protected renderConferences(): JSX.Element | null {
        if (!this.hasContent('conferences')) return null;

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
                    {this.getSectionTitle('conferences')}
                </h3>

                {this.content.conferences!.map((conf, idx) => (
                    <div key={idx} style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div>
                                {this.fieldConfig.conferences.name && (
                                    <h4 style={{
                                        fontSize: this.config.fonts.size.body,
                                        fontWeight: 600,
                                        color: this.config.colors.text,
                                    }}>
                                        {conf.name}
                                    </h4>
                                )}
                                {this.fieldConfig.conferences.role && (
                                    <div style={{
                                        fontSize: this.config.fonts.size.small,
                                        color: this.config.colors.secondary,
                                    }}>
                                        {conf.role}
                                    </div>
                                )}
                            </div>
                            {this.fieldConfig.conferences.date && (
                                <span style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {conf.date}
                                </span>
                            )}
                        </div>

                        {this.fieldConfig.conferences.description && conf.description && (
                            <p style={{
                                fontSize: this.config.fonts.size.small,
                                color: this.config.colors.text,
                                marginTop: '4px',
                            }}>
                                {conf.description}
                            </p>
                        )}
                    </div>
                ))}
            </section>
        );
    }

    /**
     * Render references
     */
    protected renderReferences(): JSX.Element | null {
        if (!this.hasContent('references')) return null;
        if (this.content.showReferencesToggle === false) return null;

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
                    {this.getSectionTitle('references')}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {this.content.references!.map((ref, idx) => (
                        <div key={idx} style={{
                            padding: '12px',
                            backgroundColor: this.config.colors.background,
                            border: `1px solid ${this.config.colors.border}`,
                            borderRadius: this.config.borders.radius,
                        }}>
                            {this.fieldConfig.references.name && (
                                <h4 style={{
                                    fontSize: this.config.fonts.size.body,
                                    fontWeight: 600,
                                    color: this.config.colors.text,
                                    marginBottom: '4px',
                                }}>
                                    {ref.name}
                                </h4>
                            )}
                            {this.fieldConfig.references.position && (
                                <div style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.secondary,
                                }}>
                                    {ref.position}
                                </div>
                            )}
                            {this.fieldConfig.references.company && (
                                <div style={{
                                    fontSize: this.config.fonts.size.small,
                                    color: this.config.colors.textLight,
                                }}>
                                    {ref.company}
                                </div>
                            )}
                            <div style={{ marginTop: '8px', fontSize: this.config.fonts.size.small }}>
                                {this.fieldConfig.references.email && (
                                    <div style={{ color: this.config.colors.text }}>{ref.email}</div>
                                )}
                                {this.fieldConfig.references.phone && (
                                    <div style={{ color: this.config.colors.text }}>{ref.phone}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export { BaseTemplateExtended as BaseTemplate };
