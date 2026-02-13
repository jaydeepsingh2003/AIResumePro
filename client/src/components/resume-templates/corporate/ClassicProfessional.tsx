'use client';

import { BaseTemplate } from '../BaseTemplateExtended';
import { TemplateProps } from '@/types/template';

/**
 * Classic Professional Template (corp-01)
 * Traditional single-column layout with ALL resume fields supported
 * Perfect for corporate, finance, consulting, and traditional industries
 */
export default function ClassicProfessional({ resume, config, preview }: TemplateProps) {
    const template = new BaseTemplate(resume, config);

    return (
        <div
            className="resume-template classic-professional"
            style={{
                fontFamily: config.fonts.body,
                color: config.colors.text,
                backgroundColor: config.colors.background,
                padding: config.spacing.margin,
                maxWidth: '816px', // 8.5 inches at 96 DPI
                margin: '0 auto',
                minHeight: preview ? 'auto' : '1056px', // 11 inches at 96 DPI
            }}
        >
            {/* Header with ALL contact fields */}
            {template['renderHeader']()}

            {/* Summary & Objective */}
            {template['renderSummary']()}

            {/* Work Experience with ALL fields */}
            {template['renderWorkExperience']()}

            {/* Education with ALL fields */}
            {template['renderEducation']()}

            {/* Skills with ALL fields */}
            {template['renderSkills']()}

            {/* Projects with ALL fields */}
            {template['renderProjects']()}

            {/* Certifications with ALL fields */}
            {template['renderCertifications']()}

            {/* Awards with ALL fields */}
            {template['renderAwards']()}

            {/* Publications with ALL fields */}
            {template['renderPublications']()}

            {/* Leadership with ALL fields */}
            {template['renderLeadership']()}

            {/* Volunteer with ALL fields */}
            {template['renderVolunteer']()}

            {/* Languages with ALL fields */}
            {template['renderLanguages']()}

            {/* Professional Affiliations with ALL fields */}
            {template['renderAffiliations']()}

            {/* Patents with ALL fields */}
            {template['renderPatents']()}

            {/* Conferences with ALL fields */}
            {template['renderConferences']()}

            {/* Interests with ALL fields */}
            {template['renderInterests']()}

            {/* References with ALL fields */}
            {template['renderReferences']()}
        </div>
    );
}
