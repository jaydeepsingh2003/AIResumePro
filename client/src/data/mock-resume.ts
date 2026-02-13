import { Resume } from '@/types/resume';

export const mockResume: Resume = {
    id: 'mock-1',
    title: 'Senior Full Stack Engineer & Team Lead',
    style: {
        theme: 'modern',
        font: 'sans',
        layout: 'sidebar',
        color: '#4F46E5',
        sectionOrder: ['work', 'education', 'skills', 'projects', 'certifications', 'awards', 'languages', 'interests', 'volunteer', 'leadership', 'publications', 'patents', 'conferences', 'references']
    },
    content: {
        basics: {
            name: 'Alex Johnson',
            label: 'Senior Full Stack Engineer',
            email: 'alex.johnson@example.com',
            phone: '+1 (555) 123-4567',
            location: {
                city: 'San Francisco',
                region: 'CA',
                countryCode: 'USA'
            },
            url: 'https://alexjohnson.dev',
            portfolioUrl: 'https://portfolio.alex.dev',
            githubUrl: 'https://github.com/alexj',
            linkedinUrl: 'https://linkedin.com/in/alexjohnson',
            summary: 'Experienced Full Stack Engineer with 8+ years of expertise in building scalable SaaS platforms. Proven track record in leading cross-functional teams and optimizing cloud infrastructure.',
            objective: 'Seeking a Lead Engineering role in a high-growth startup focusing on AI and developer tools.',
            showImage: false
        },
        work: [
            {
                id: 'w1',
                company: 'Tech Solutions Inc.',
                position: 'Senior Software Engineer',
                location: 'San Francisco, CA',
                employmentType: 'Full-time',
                startDate: '2021-01',
                endDate: 'Present',
                current: true,
                description: 'Leading a team of 5 developers to build a scalable SaaS platform.',
                highlights: [
                    'Reduced server costs by 40% through AWS optimization.',
                    'Implemented microservices architecture using NestJS.',
                    'Mentored 10+ junior developers and conducted code reviews.',
                ],
                metrics: 'Increased system throughput by 250% and reduced p99 latency by 150ms.',
                technologies: ['React', 'NestJS', 'PostgreSQL', 'AWS Lambda'],
                leadershipRole: 'Team Lead',
                teamSize: 5
            }
        ],
        education: [
            {
                id: 'e1',
                institution: 'UC Berkeley',
                area: 'Computer Science',
                studyType: 'Bachelor',
                location: 'Berkeley, CA',
                startDate: '2014-09',
                endDate: '2018-05',
                score: '3.8 GPA',
                honors: 'Cum Laude',
                coursework: ['Distributed Systems', 'Machine Learning', 'Advanced Algorithms']
            }
        ],
        skills: [
            { name: 'JavaScript / TypeScript', level: 'Expert', type: 'Technical' },
            { name: 'React / Next.js', level: 'Expert', type: 'Technical' },
            { name: 'Node.js / NestJS', level: 'Expert', type: 'Technical' },
            { name: 'System Architecture', level: 'Advanced', type: 'Technical' },
            { name: 'Team Leadership', level: 'Expert', type: 'Soft' }
        ],
        projects: [
            {
                id: 'p1',
                name: 'AI Resume Engine',
                description: 'A revolutionary platform that analyzes resumes and provides real-time AI suggestions.',
                role: 'Solo Developer',
                url: 'https://ai-resume-pro.vercel.app',
                githubUrl: 'https://github.com/alexj/resume-engine',
                keywords: ['Next.js', 'OpenAI', 'TailwindCSS'],
                impact: 'Helped 50,000+ users improve their resume scores by an average of 40%.'
            }
        ],
        certifications: [
            {
                name: 'AWS Solutions Architect Professional',
                issuer: 'Amazon Web Services',
                date: '2023-05',
                credentialId: 'AWS-PROF-12345',
                url: 'https://aws.amazon.com/verification'
            }
        ],
        awards: [
            {
                title: 'Employee of the Year',
                issuer: 'Tech Solutions Inc.',
                date: '2022-12',
                description: 'Received for outstanding contribution to the platform migration project.'
            }
        ],
        languages: [
            { language: 'English', fluency: 'Native' },
            { language: 'Spanish', fluency: 'Fluent' }
        ],
        interests: [
            { name: 'Personal Interests', keywords: ['Classical Music', 'Bouldering', 'Ethical AI'] }
        ],
        volunteer: [
            {
                organization: 'Code for America',
                role: 'Open Source Contributor',
                startDate: '2019-01',
                endDate: '2020-01',
                highlights: ['Contributed to localized disaster relief coordination tools.']
            }
        ],
        leadership: [
            {
                role: 'Engineering Lead',
                organization: 'SF Tech Meetup',
                startDate: '2022-06',
                endDate: 'Present',
                current: true,
                description: 'Organizing monthly meetups for 2000+ local engineers.',
                impact: 'Increased engagement by 300% through hybrid event formats.'
            }
        ],
        publications: [
            {
                title: 'Scaling Microservices with K8s',
                publisher: 'Medium Engineering',
                date: '2021-08',
                url: 'https://medium.com/@alexj/scaling'
            }
        ],
        references: [
            {
                name: 'Sarah Chen',
                position: 'VP Engineering',
                company: 'Tech Solutions Inc.',
                email: 'sarah@techsol.com',
                phone: '+1 (555) 987-6543'
            }
        ],
        showReferencesToggle: true
    }
};
