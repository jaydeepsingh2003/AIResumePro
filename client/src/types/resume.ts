export interface ResumeLocation {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
}

export interface ResumeProfile {
    name: string;
    label?: string; // e.g. "Software Engineer"
    email: string;
    phone: string;
    location: ResumeLocation | string;
    url?: string; // Personal Website
    portfolioUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    summary: string;
    objective?: string;
    image?: string; // Profile Photo URL
    showImage?: boolean;
}

export interface ResumeWorkExperience {
    id?: string;
    company: string;
    position: string;
    location?: string;
    employmentType?: string; // Full-time, Internship, etc.
    startDate: string;
    endDate: string;
    current?: boolean;
    description: string;
    highlights?: string[];
    metrics?: string;
    technologies?: string[];
    leadershipRole?: string;
    promotionHistory?: string;
    teamSize?: number;
}

export interface ResumeEducation {
    id?: string;
    institution: string;
    area: string;
    studyType: string;
    location?: string;
    startDate: string;
    endDate: string;
    score?: string; // GPA
    honors?: string;
    coursework?: string[];
}

export interface ResumeSkill {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master';
    keywords?: string[];
    type?: 'Technical' | 'Soft' | 'Tool';
}

export interface ResumeProject {
    id?: string;
    name: string;
    description: string;
    role?: string;
    url?: string; // Live Link
    githubUrl?: string;
    keywords?: string[]; // Technologies Used
    impact?: string; // Impact metrics
    startDate?: string;
    endDate?: string;
}

export interface ResumeCertification {
    name: string;
    issuer: string;
    date: string;
    expiryDate?: string;
    credentialId?: string;
    url?: string; // Verification URL
}

export interface ResumeAward {
    title: string;
    issuer: string;
    date: string;
    description?: string;
}

export interface ResumePublication {
    title: string;
    publisher: string; // Journal / Platform
    date: string;
    url?: string; // DOI / Link
    description?: string;
}

export interface ResumeVolunteer {
    organization: string;
    role: string;
    startDate: string;
    endDate: string;
    current?: boolean;
    highlights?: string[];
}

export interface ResumeLeadership {
    role: string;
    organization: string;
    startDate: string;
    endDate: string;
    current?: boolean;
    description: string;
    impact?: string;
}

export interface ResumeLanguage {
    language: string;
    fluency: 'Beginner' | 'Intermediate' | 'Fluent' | 'Native';
}

export interface ResumeInterest {
    name: string;
    keywords?: string[];
}

export interface ResumeAffiliation {
    organization: string;
    role: string;
    startDate: string;
    endDate: string;
    current?: boolean;
}

export interface ResumePatent {
    title: string;
    number: string;
    date: string;
    url?: string;
}

export interface ResumeConference {
    name: string;
    role: string;
    date: string;
    description?: string;
}

export interface ResumeReference {
    name: string;
    position: string;
    company: string;
    email: string;
    phone: string;
}

export interface ResumeContent {
    basics: ResumeProfile;
    work: ResumeWorkExperience[];
    education: ResumeEducation[];
    skills: ResumeSkill[];
    projects: ResumeProject[];
    certifications?: ResumeCertification[];
    awards?: ResumeAward[];
    publications?: ResumePublication[];
    volunteer?: ResumeVolunteer[];
    leadership?: ResumeLeadership[];
    languages?: ResumeLanguage[];
    interests?: ResumeInterest[];
    affiliations?: ResumeAffiliation[];
    patents?: ResumePatent[];
    conferences?: ResumeConference[];
    references?: ResumeReference[];
    showReferencesToggle?: boolean;
    [key: string]: any;
}

export interface Resume {
    id?: string;
    title: string;
    content: ResumeContent;
    style: {
        theme: string;
        font: string;
        layout: string;
        color?: string;
        templateId?: string;
        sectionOrder?: string[];
        visibleSections?: { [key: string]: boolean };
    };
}
