import { Resume } from './resume';

export interface TemplateProps {
    resume: Resume;
    config: TemplateConfig;
    preview?: boolean;
}

export interface TemplateConfig {
    id: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        text: string;
        textLight: string;
        background: string;
        border: string;
    };
    fonts: {
        heading: string;
        body: string;
        size: {
            name: string;
            heading: string;
            subheading: string;
            body: string;
            small: string;
        };
        weight: {
            heading: number;
            subheading: number;
            body: number;
        };
    };
    spacing: {
        section: string;
        item: string;
        margin: string;
        padding: string;
    };
    layout: {
        type: 'single' | 'double' | 'sidebar' | 'minimal';
        columns?: number;
        sidebarWidth?: string;
        contentWidth?: string;
    };
    borders: {
        style: 'solid' | 'dashed' | 'dotted' | 'none';
        width: string;
        radius: string;
    };
    icons: {
        show: boolean;
        style: 'outline' | 'solid' | 'minimal';
    };
}

/**
 * Field visibility configuration for templates
 * Allows templates to show/hide specific fields
 */
export interface TemplateFieldConfig {
    basics: {
        name: boolean;
        label: boolean;
        email: boolean;
        phone: boolean;
        location: boolean;
        url: boolean;
        portfolioUrl: boolean;
        githubUrl: boolean;
        linkedinUrl: boolean;
        summary: boolean;
        objective: boolean;
        image: boolean;
    };
    work: {
        company: boolean;
        position: boolean;
        location: boolean;
        employmentType: boolean;
        startDate: boolean;
        endDate: boolean;
        description: boolean;
        highlights: boolean;
        metrics: boolean;
        technologies: boolean;
        leadershipRole: boolean;
        promotionHistory: boolean;
        teamSize: boolean;
    };
    education: {
        institution: boolean;
        area: boolean;
        studyType: boolean;
        location: boolean;
        startDate: boolean;
        endDate: boolean;
        score: boolean;
        honors: boolean;
        coursework: boolean;
    };
    skills: {
        name: boolean;
        level: boolean;
        keywords: boolean;
        type: boolean;
    };
    projects: {
        name: boolean;
        description: boolean;
        role: boolean;
        url: boolean;
        githubUrl: boolean;
        keywords: boolean;
        impact: boolean;
        startDate: boolean;
        endDate: boolean;
    };
    certifications: {
        name: boolean;
        issuer: boolean;
        date: boolean;
        expiryDate: boolean;
        credentialId: boolean;
        url: boolean;
    };
    awards: {
        title: boolean;
        issuer: boolean;
        date: boolean;
        description: boolean;
    };
    publications: {
        title: boolean;
        publisher: boolean;
        date: boolean;
        url: boolean;
        description: boolean;
    };
    volunteer: {
        organization: boolean;
        role: boolean;
        startDate: boolean;
        endDate: boolean;
        highlights: boolean;
    };
    leadership: {
        role: boolean;
        organization: boolean;
        startDate: boolean;
        endDate: boolean;
        description: boolean;
        impact: boolean;
    };
    languages: {
        language: boolean;
        fluency: boolean;
    };
    interests: {
        name: boolean;
        keywords: boolean;
    };
    affiliations: {
        organization: boolean;
        role: boolean;
        startDate: boolean;
        endDate: boolean;
    };
    patents: {
        title: boolean;
        number: boolean;
        date: boolean;
        url: boolean;
    };
    conferences: {
        name: boolean;
        role: boolean;
        date: boolean;
        description: boolean;
    };
    references: {
        name: boolean;
        position: boolean;
        company: boolean;
        email: boolean;
        phone: boolean;
    };
}

/**
 * Default field configuration - shows all fields
 */
export const DEFAULT_FIELD_CONFIG: TemplateFieldConfig = {
    basics: {
        name: true,
        label: true,
        email: true,
        phone: true,
        location: true,
        url: true,
        portfolioUrl: true,
        githubUrl: true,
        linkedinUrl: true,
        summary: true,
        objective: true,
        image: true,
    },
    work: {
        company: true,
        position: true,
        location: true,
        employmentType: true,
        startDate: true,
        endDate: true,
        description: true,
        highlights: true,
        metrics: true,
        technologies: true,
        leadershipRole: true,
        promotionHistory: true,
        teamSize: true,
    },
    education: {
        institution: true,
        area: true,
        studyType: true,
        location: true,
        startDate: true,
        endDate: true,
        score: true,
        honors: true,
        coursework: true,
    },
    skills: {
        name: true,
        level: true,
        keywords: true,
        type: true,
    },
    projects: {
        name: true,
        description: true,
        role: true,
        url: true,
        githubUrl: true,
        keywords: true,
        impact: true,
        startDate: true,
        endDate: true,
    },
    certifications: {
        name: true,
        issuer: true,
        date: true,
        expiryDate: true,
        credentialId: true,
        url: true,
    },
    awards: {
        title: true,
        issuer: true,
        date: true,
        description: true,
    },
    publications: {
        title: true,
        publisher: true,
        date: true,
        url: true,
        description: true,
    },
    volunteer: {
        organization: true,
        role: true,
        startDate: true,
        endDate: true,
        highlights: true,
    },
    leadership: {
        role: true,
        organization: true,
        startDate: true,
        endDate: true,
        description: true,
        impact: true,
    },
    languages: {
        language: true,
        fluency: true,
    },
    interests: {
        name: true,
        keywords: true,
    },
    affiliations: {
        organization: true,
        role: true,
        startDate: true,
        endDate: true,
    },
    patents: {
        title: true,
        number: true,
        date: true,
        url: true,
    },
    conferences: {
        name: true,
        role: true,
        date: true,
        description: true,
    },
    references: {
        name: true,
        position: true,
        company: true,
        email: true,
        phone: true,
    },
};
