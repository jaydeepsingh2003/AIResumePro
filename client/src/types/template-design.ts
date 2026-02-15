
export interface ResumeDesignConfig {
    id: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        text: string;
        textLight: string;
        background: string;
        border: string;
        sidebarBackground?: string;
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
        type: 'single' | 'double' | 'sidebar' | 'minimal' | 'timeline' | 'executive';
        columns?: number;
        sidebarWidth?: string;
        contentWidth?: string;
        sidebarPosition?: 'left' | 'right';
        columnGap?: string;
        pageMargin?: string;
    };
    borders: {
        style: string;
        width: string;
        radius: string;
    };
    icons: {
        show: boolean;
        style: string;
    };
}

export interface TemplateFieldConfig {
    basics: {
        name: boolean;
        label: boolean;
        image: boolean;
        email: boolean;
        phone: boolean;
        url: boolean;
        summary: boolean;
        location: boolean;
        objective: boolean;
        linkedinUrl: boolean;
        githubUrl: boolean;
        portfolioUrl: boolean;
    };
    work: {
        company: boolean;
        position: boolean;
        location: boolean;
        startDate: boolean;
        endDate: boolean;
        highlights: boolean;
        description: boolean;
        technologies: boolean;
        employmentType: boolean;
        leadershipRole: boolean;
        teamSize: boolean;
        metrics: boolean;
        promotionHistory: boolean;
    };
    education: {
        institution: boolean;
        area: boolean;
        studyType: boolean;
        startDate: boolean;
        endDate: boolean;
        score: boolean;
        coursework: boolean;
        location: boolean;
        honors: boolean;
    };
    skills: {
        name: boolean;
        level: boolean;
        type: boolean;
    };
    projects: {
        name: boolean;
        description: boolean;
        startDate: boolean;
        endDate: boolean;
        url: boolean;
        githubUrl: boolean;
        role: boolean;
        impact: boolean;
        keywords: boolean;
    };
    certifications: {
        name: boolean;
        date: boolean;
        issuer: boolean;
        url: boolean;
        credentialId: boolean;
        expiryDate: boolean;
    };
    awards: {
        title: boolean;
        date: boolean;
        issuer: boolean;
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
        organization: boolean;
        role: boolean;
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
    references: {
        name: boolean;
        position: boolean;
        company: boolean;
        email: boolean;
        phone: boolean;
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
}

export const DEFAULT_FIELD_CONFIG: TemplateFieldConfig = {
    basics: {
        name: true, label: true, image: true, email: true, phone: true, url: true, summary: true, location: true, objective: true, linkedinUrl: true, githubUrl: true, portfolioUrl: true
    },
    work: {
        company: true, position: true, location: true, startDate: true, endDate: true, highlights: true, description: true, technologies: true, employmentType: true, leadershipRole: true, teamSize: true, metrics: true, promotionHistory: true
    },
    education: {
        institution: true, area: true, studyType: true, startDate: true, endDate: true, score: true, coursework: true, location: true, honors: true
    },
    skills: {
        name: true, level: true, type: true
    },
    projects: {
        name: true, description: true, startDate: true, endDate: true, url: true, githubUrl: true, role: true, impact: true, keywords: true
    },
    certifications: {
        name: true, date: true, issuer: true, url: true, credentialId: true, expiryDate: true
    },
    awards: {
        title: true, date: true, issuer: true, description: true
    },
    publications: {
        title: true, publisher: true, date: true, url: true, description: true
    },
    volunteer: {
        organization: true, role: true, startDate: true, endDate: true, highlights: true
    },
    leadership: {
        organization: true, role: true, startDate: true, endDate: true, description: true, impact: true
    },
    languages: {
        language: true, fluency: true
    },
    interests: {
        name: true, keywords: true
    },
    references: {
        name: true, position: true, company: true, email: true, phone: true
    },
    affiliations: {
        organization: true, role: true, startDate: true, endDate: true
    },
    patents: {
        title: true, number: true, date: true, url: true
    },
    conferences: {
        name: true, role: true, date: true, description: true
    }
};
