
export interface TemplateConfig {
    id: string;
    name: string;
    description?: string;
    category: 'corporate' | 'tech' | 'creative' | 'entry' | 'academic' | 'international';
    isPremium: boolean;
    isActive: boolean;
    thumbnailUrl?: string;

    // Layout Configuration
    layout: {
        type: 'single' | 'double' | 'sidebar' | 'timeline' | 'executive';
        columnGap?: string; // e.g. "2rem"
        sidebarWidth?: string; // e.g. "30%"
        sidebarPosition?: 'left' | 'right';
        pageMargin?: string; // e.g. "0.5in"
    };

    // Global Style Configuration
    styles: {
        fontFamily: {
            headings: string;
            body: string;
        };
        fontSize: {
            name: string;
            headings: string;
            body: string;
            meta: string;
        };
        lineHeight: string;
        colors: {
            primary: string; // Headings, Name
            secondary: string; // Subheadings, Dates
            accent: string; // Icons, Borders, Highlights
            text: string; // Body text
            background: string;
            sidebarBackground?: string;
        };
        spacing: {
            sectionBottom: string;
            itemBottom: string;
        };
    };

    // Section-Specific Overrides
    sections: {
        [key: string]: {
            hidden?: boolean;
            order?: number;
            style?: {
                titleCase?: 'uppercase' | 'capitalize' | 'lowercase';
                titleAlignment?: 'left' | 'center' | 'right';
                borderBottom?: boolean;
                background?: string;
                icon?: boolean; // Show icon for section title
            };
            itemStyle?: {
                layout?: 'stack' | 'grid' | 'inline'; // e.g. Skills can be inline
                showBullets?: boolean;
            };
        };
    };
}

export interface TemplateCategory {
    id: string;
    name: string;
}

export interface TemplateFieldConfig {
    basics: {
        name?: boolean;
        label?: boolean;
        image?: boolean;
        email?: boolean;
        phone?: boolean;
        url?: boolean;
        summary?: boolean;
        objective?: boolean;
        location?: boolean;
        linkedinUrl?: boolean;
        githubUrl?: boolean;
        portfolioUrl?: boolean;
    };
    work: {
        company?: boolean;
        position?: boolean;
        startDate?: boolean;
        endDate?: boolean;
        location?: boolean;
        description?: boolean;
        highlights?: boolean;
        url?: boolean;
        tags?: boolean;
        leadershipRole?: boolean;
        teamSize?: boolean;
        metrics?: boolean;
        technologies?: boolean;
        promotionHistory?: boolean;
        employmentType?: boolean;
    };
    education: {
        institution?: boolean;
        area?: boolean;
        studyType?: boolean;
        startDate?: boolean;
        endDate?: boolean;
        score?: boolean;
        coursework?: boolean;
        location?: boolean; // Added based on usage
        honors?: boolean; // Added based on usage
    };
    skills: {
        name?: boolean;
        level?: boolean;
        keywords?: boolean;
        type?: boolean; // Added based on usage
    };
    projects: {
        name?: boolean;
        description?: boolean;
        highlights?: boolean;
        keywords?: boolean;
        startDate?: boolean;
        endDate?: boolean;
        url?: boolean;
        roles?: boolean;
        entity?: boolean;
        type?: boolean;
    };
    volunteer: {
        organization?: boolean;
        position?: boolean;
        startDate?: boolean;
        endDate?: boolean;
        summary?: boolean;
        highlights?: boolean;
        url?: boolean;
    };
    awards: {
        title?: boolean;
        date?: boolean;
        awarder?: boolean;
        summary?: boolean;
    };
    publications: {
        name?: boolean;
        publisher?: boolean;
        releaseDate?: boolean;
        url?: boolean;
        summary?: boolean;
    };
    languages: {
        language?: boolean;
        fluency?: boolean;
    };
    certifications: {
        name?: boolean;
        issuer?: boolean;
        date?: boolean;
        url?: boolean;
    };
    leadership: {
        role?: boolean;
        organization?: boolean;
        startDate?: boolean;
        endDate?: boolean;
        description?: boolean;
        impact?: boolean;
    };
    affiliations: {
        organization?: boolean;
        role?: boolean;
        startDate?: boolean;
        endDate?: boolean;
    };
    patents: {
        title?: boolean;
        number?: boolean;
        date?: boolean;
        url?: boolean;
    };
    conferences: {
        name?: boolean;
        role?: boolean;
        date?: boolean;
        description?: boolean;
    };
    interests: {
        name?: boolean;
        keywords?: boolean;
    };
    references: {
        name?: boolean;
        position?: boolean;
        company?: boolean;
        email?: boolean;
        phone?: boolean;
        reference?: boolean;
    };
}

export const DEFAULT_FIELD_CONFIG: TemplateFieldConfig = {
    basics: {
        name: true,
        label: true,
        image: true,
        email: true,
        phone: true,
        url: true,
        summary: true,
        objective: true,
        location: true,
        linkedinUrl: true,
        githubUrl: true,
        portfolioUrl: true,
    },
    work: {
        company: true,
        position: true,
        startDate: true,
        endDate: true,
        location: true,
        description: true,
        highlights: true,
        url: true,
        tags: true,
        leadershipRole: true,
        teamSize: true,
        metrics: true,
        technologies: true,
        promotionHistory: true,
        employmentType: true,
    },
    education: {
        institution: true,
        area: true,
        studyType: true,
        startDate: true,
        endDate: true,
        score: true,
        coursework: true,
        location: true,
        honors: true,
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
        highlights: true,
        keywords: true,
        startDate: true,
        endDate: true,
        url: true,
        roles: true,
        entity: true,
        type: true,
    },
    volunteer: {
        organization: true,
        position: true,
        startDate: true,
        endDate: true,
        summary: true,
        highlights: true,
        url: true,
    },
    awards: {
        title: true,
        date: true,
        awarder: true,
        summary: true,
    },
    publications: {
        name: true,
        publisher: true,
        releaseDate: true,
        url: true,
        summary: true,
    },
    languages: {
        language: true,
        fluency: true,
    },
    certifications: {
        name: true,
        issuer: true,
        date: true,
        url: true,
    },
    leadership: {
        role: true,
        organization: true,
        startDate: true,
        endDate: true,
        description: true,
        impact: true,
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
    interests: {
        name: true,
        keywords: true,
    },
    references: {
        name: true,
        position: true,
        company: true,
        email: true,
        phone: true,
        reference: true,
    },
};
