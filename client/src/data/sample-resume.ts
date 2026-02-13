import { Resume } from '@/types/resume';

/**
 * Comprehensive sample resume data with ALL possible fields populated
 * This demonstrates every single field that templates can render
 */
export const SAMPLE_RESUME_DATA: Resume = {
    id: 'sample-001',
    title: 'Complete Resume Sample',
    content: {
        // ==================== BASICS ====================
        basics: {
            name: 'Alexandra Chen',
            label: 'Senior Software Engineering Manager',
            email: 'alexandra.chen@email.com',
            phone: '+1 (555) 123-4567',
            location: {
                address: '123 Tech Street',
                city: 'San Francisco',
                region: 'CA',
                postalCode: '94102',
                countryCode: 'US',
            },
            url: 'https://alexandrachen.com',
            portfolioUrl: 'https://portfolio.alexandrachen.com',
            githubUrl: 'https://github.com/alexandrachen',
            linkedinUrl: 'https://linkedin.com/in/alexandrachen',
            summary: 'Results-driven Senior Engineering Manager with 12+ years of experience leading high-performing teams to deliver scalable cloud solutions. Proven track record of driving technical excellence, mentoring engineers, and aligning engineering initiatives with business objectives. Expertise in distributed systems, microservices architecture, and agile methodologies.',
            objective: 'Seeking a VP of Engineering role where I can leverage my technical leadership experience to build world-class engineering organizations and drive innovation at scale.',
            image: '/profile-photo.jpg',
            showImage: true,
        },

        // ==================== WORK EXPERIENCE ====================
        work: [
            {
                id: 'work-1',
                company: 'TechCorp Inc.',
                position: 'Senior Engineering Manager',
                location: 'San Francisco, CA',
                employmentType: 'Full-time',
                startDate: 'Jan 2020',
                endDate: 'Present',
                current: true,
                description: 'Lead a team of 25 engineers across 4 scrum teams, delivering cloud-native solutions serving 10M+ users. Spearheaded migration to microservices architecture, reducing deployment time by 70% and improving system reliability to 99.99% uptime.',
                highlights: [
                    'Reduced production incidents by 65% through implementation of comprehensive monitoring and alerting systems',
                    'Increased team velocity by 40% by introducing agile best practices and streamlining development workflows',
                    'Successfully delivered 3 major product launches on time and under budget',
                ],
                metrics: 'Managed $5M annual budget, 25 direct/indirect reports, 99.99% uptime',
                technologies: ['Kubernetes', 'AWS', 'Python', 'Go', 'React', 'PostgreSQL', 'Redis'],
                leadershipRole: 'Engineering Manager → Senior Engineering Manager (promoted 2022)',
                promotionHistory: 'Promoted from Engineering Manager to Senior Engineering Manager in 2022',
                teamSize: 25,
            },
            {
                id: 'work-2',
                company: 'StartupXYZ',
                position: 'Engineering Manager',
                location: 'Palo Alto, CA',
                employmentType: 'Full-time',
                startDate: 'Mar 2017',
                endDate: 'Dec 2019',
                description: 'Built and led the platform engineering team from 3 to 15 engineers. Architected and implemented the company\'s first microservices platform, enabling rapid feature development and deployment.',
                highlights: [
                    'Designed and implemented CI/CD pipeline reducing deployment time from 4 hours to 15 minutes',
                    'Established engineering best practices including code review standards and testing frameworks',
                    'Mentored 5 engineers who were promoted to senior positions',
                ],
                metrics: '300% team growth, 15min deployment time, 50+ microservices',
                technologies: ['Docker', 'Jenkins', 'Node.js', 'MongoDB', 'RabbitMQ'],
                teamSize: 15,
            },
            {
                id: 'work-3',
                company: 'BigTech Solutions',
                position: 'Senior Software Engineer',
                location: 'Seattle, WA',
                employmentType: 'Full-time',
                startDate: 'Jun 2014',
                endDate: 'Feb 2017',
                description: 'Led development of high-performance data processing pipeline handling 1TB+ daily data volume. Collaborated with cross-functional teams to deliver customer-facing features.',
                highlights: [
                    'Optimized data processing pipeline, reducing processing time by 80%',
                    'Implemented real-time analytics dashboard used by 500+ internal stakeholders',
                ],
                metrics: '1TB+ daily data processing, 80% performance improvement',
                technologies: ['Java', 'Spark', 'Kafka', 'Elasticsearch'],
            },
        ],

        // ==================== EDUCATION ====================
        education: [
            {
                id: 'edu-1',
                institution: 'Stanford University',
                area: 'Computer Science',
                studyType: 'Master of Science',
                location: 'Stanford, CA',
                startDate: '2012',
                endDate: '2014',
                score: '3.9/4.0',
                honors: 'Magna Cum Laude, Dean\'s List (All Semesters)',
                coursework: [
                    'Distributed Systems',
                    'Machine Learning',
                    'Advanced Algorithms',
                    'Database Systems',
                    'Computer Networks',
                ],
            },
            {
                id: 'edu-2',
                institution: 'University of California, Berkeley',
                area: 'Computer Science',
                studyType: 'Bachelor of Science',
                location: 'Berkeley, CA',
                startDate: '2008',
                endDate: '2012',
                score: '3.8/4.0',
                honors: 'Summa Cum Laude, Phi Beta Kappa',
                coursework: [
                    'Data Structures',
                    'Operating Systems',
                    'Software Engineering',
                    'Artificial Intelligence',
                ],
            },
        ],

        // ==================== SKILLS ====================
        skills: [
            { name: 'Python', level: 'Expert', type: 'Technical', keywords: ['Django', 'Flask', 'FastAPI'] },
            { name: 'JavaScript/TypeScript', level: 'Expert', type: 'Technical', keywords: ['React', 'Node.js', 'Next.js'] },
            { name: 'Go', level: 'Advanced', type: 'Technical' },
            { name: 'Java', level: 'Advanced', type: 'Technical' },
            { name: 'AWS', level: 'Expert', type: 'Tool', keywords: ['EC2', 'S3', 'Lambda', 'EKS'] },
            { name: 'Kubernetes', level: 'Expert', type: 'Tool' },
            { name: 'Docker', level: 'Expert', type: 'Tool' },
            { name: 'PostgreSQL', level: 'Advanced', type: 'Technical' },
            { name: 'MongoDB', level: 'Advanced', type: 'Technical' },
            { name: 'Redis', level: 'Advanced', type: 'Tool' },
            { name: 'Leadership', level: 'Expert', type: 'Soft' },
            { name: 'Agile/Scrum', level: 'Expert', type: 'Soft' },
            { name: 'Technical Mentoring', level: 'Expert', type: 'Soft' },
            { name: 'System Design', level: 'Expert', type: 'Technical' },
        ],

        // ==================== PROJECTS ====================
        projects: [
            {
                id: 'proj-1',
                name: 'Open Source Kubernetes Operator',
                description: 'Created and maintain a Kubernetes operator for automated database backups, used by 500+ companies worldwide.',
                role: 'Creator & Lead Maintainer',
                url: 'https://k8s-backup-operator.io',
                githubUrl: 'https://github.com/alexandrachen/k8s-backup-operator',
                keywords: ['Go', 'Kubernetes', 'Operators', 'Cloud Native'],
                impact: '10K+ GitHub stars, 500+ production deployments',
                startDate: 'Jan 2021',
                endDate: 'Present',
            },
            {
                id: 'proj-2',
                name: 'Real-time Analytics Platform',
                description: 'Built a real-time analytics platform processing 100M+ events per day with sub-second latency.',
                role: 'Technical Lead',
                keywords: ['Kafka', 'Flink', 'Elasticsearch', 'React'],
                impact: 'Reduced query latency by 95%, enabled real-time business insights',
                startDate: 'Mar 2020',
                endDate: 'Dec 2020',
            },
        ],

        // ==================== CERTIFICATIONS ====================
        certifications: [
            {
                name: 'AWS Certified Solutions Architect - Professional',
                issuer: 'Amazon Web Services',
                date: 'Mar 2023',
                expiryDate: 'Mar 2026',
                credentialId: 'AWS-PSA-12345',
                url: 'https://aws.amazon.com/verification',
            },
            {
                name: 'Certified Kubernetes Administrator (CKA)',
                issuer: 'Cloud Native Computing Foundation',
                date: 'Jan 2022',
                expiryDate: 'Jan 2025',
                credentialId: 'CKA-67890',
                url: 'https://cncf.io/certification/verify',
            },
            {
                name: 'Professional Scrum Master (PSM I)',
                issuer: 'Scrum.org',
                date: 'Jun 2019',
                credentialId: 'PSM-54321',
            },
        ],

        // ==================== AWARDS ====================
        awards: [
            {
                title: 'Engineering Excellence Award',
                issuer: 'TechCorp Inc.',
                date: '2023',
                description: 'Recognized for outstanding technical leadership and driving 99.99% system reliability',
            },
            {
                title: 'Innovation Award',
                issuer: 'StartupXYZ',
                date: '2019',
                description: 'Awarded for architecting the microservices platform that enabled 10x faster feature delivery',
            },
            {
                title: 'Best Paper Award',
                issuer: 'IEEE Cloud Computing Conference',
                date: '2018',
                description: 'Received best paper award for research on distributed system optimization',
            },
        ],

        // ==================== PUBLICATIONS ====================
        publications: [
            {
                title: 'Optimizing Microservices Communication in Cloud-Native Environments',
                publisher: 'IEEE Cloud Computing Journal',
                date: '2022',
                url: 'https://doi.org/10.1109/example',
                description: 'Research paper on reducing latency in microservices architectures through intelligent service mesh configuration',
            },
            {
                title: 'Building Resilient Distributed Systems at Scale',
                publisher: 'ACM SIGOPS',
                date: '2020',
                url: 'https://dl.acm.org/example',
                description: 'Case study on implementing chaos engineering practices in production systems',
            },
        ],

        // ==================== VOLUNTEER ====================
        volunteer: [
            {
                organization: 'Code for Good',
                role: 'Technical Mentor',
                startDate: 'Jan 2020',
                endDate: 'Present',
                current: true,
                highlights: [
                    'Mentored 15+ aspiring software engineers from underrepresented backgrounds',
                    'Conducted weekly coding workshops and technical interview preparation sessions',
                    'Helped 8 mentees secure positions at top tech companies',
                ],
            },
            {
                organization: 'Girls Who Code',
                role: 'Workshop Instructor',
                startDate: 'Sep 2018',
                endDate: 'Dec 2019',
                highlights: [
                    'Taught Python programming to 50+ high school students',
                    'Developed curriculum for web development workshops',
                ],
            },
        ],

        // ==================== LEADERSHIP ====================
        leadership: [
            {
                role: 'Women in Tech Leadership Committee Chair',
                organization: 'TechCorp Inc.',
                startDate: 'Jan 2022',
                endDate: 'Present',
                current: true,
                description: 'Lead company-wide initiatives to promote diversity and inclusion in technical leadership roles',
                impact: 'Increased women in engineering leadership by 40% over 2 years',
            },
            {
                role: 'Engineering Mentorship Program Lead',
                organization: 'TechCorp Inc.',
                startDate: 'Jun 2020',
                endDate: 'Dec 2021',
                description: 'Established and managed company-wide engineering mentorship program',
                impact: '100+ mentor-mentee pairs, 25% increase in internal promotions',
            },
        ],

        // ==================== LANGUAGES ====================
        languages: [
            { language: 'English', fluency: 'Native' },
            { language: 'Mandarin Chinese', fluency: 'Native' },
            { language: 'Spanish', fluency: 'Intermediate' },
            { language: 'French', fluency: 'Beginner' },
        ],

        // ==================== INTERESTS ====================
        interests: [
            { name: 'Open Source', keywords: ['Kubernetes', 'Cloud Native', 'DevOps'] },
            { name: 'Technical Writing', keywords: ['Blogging', 'Documentation', 'Tutorials'] },
            { name: 'Public Speaking', keywords: ['Conferences', 'Meetups', 'Workshops'] },
            { name: 'Hiking', keywords: ['Backpacking', 'Trail Running'] },
            { name: 'Photography', keywords: ['Landscape', 'Travel'] },
        ],

        // ==================== AFFILIATIONS ====================
        affiliations: [
            {
                organization: 'Association for Computing Machinery (ACM)',
                role: 'Senior Member',
                startDate: '2015',
                endDate: 'Present',
                current: true,
            },
            {
                organization: 'IEEE Computer Society',
                role: 'Member',
                startDate: '2014',
                endDate: 'Present',
                current: true,
            },
            {
                organization: 'Cloud Native Computing Foundation',
                role: 'Ambassador',
                startDate: '2021',
                endDate: 'Present',
                current: true,
            },
        ],

        // ==================== PATENTS ====================
        patents: [
            {
                title: 'System and Method for Automated Microservice Deployment Optimization',
                number: 'US-10,234,567-B2',
                date: '2022',
                url: 'https://patents.google.com/patent/US10234567B2',
            },
            {
                title: 'Distributed Cache Invalidation in Multi-Region Cloud Environments',
                number: 'US-10,345,678-B2',
                date: '2021',
                url: 'https://patents.google.com/patent/US10345678B2',
            },
        ],

        // ==================== CONFERENCES ====================
        conferences: [
            {
                name: 'KubeCon + CloudNativeCon North America',
                role: 'Keynote Speaker',
                date: 'Oct 2023',
                description: 'Delivered keynote on "Building Resilient Cloud-Native Applications at Scale"',
            },
            {
                name: 'AWS re:Invent',
                role: 'Speaker',
                date: 'Nov 2022',
                description: 'Presented session on "Microservices Architecture Best Practices"',
            },
            {
                name: 'QCon San Francisco',
                role: 'Panelist',
                date: 'Nov 2021',
                description: 'Participated in panel discussion on "The Future of Engineering Leadership"',
            },
        ],

        // ==================== REFERENCES ====================
        references: [
            {
                name: 'Dr. James Wilson',
                position: 'VP of Engineering',
                company: 'TechCorp Inc.',
                email: 'james.wilson@techcorp.com',
                phone: '+1 (555) 234-5678',
            },
            {
                name: 'Sarah Martinez',
                position: 'CTO',
                company: 'StartupXYZ',
                email: 'sarah.martinez@startupxyz.com',
                phone: '+1 (555) 345-6789',
            },
        ],

        showReferencesToggle: true,
    },

    style: {
        theme: 'professional',
        font: 'sans',
        layout: 'single',
        color: '#3498db',
        templateId: 'corp-01',
        sectionOrder: [
            'basics',
            'work',
            'education',
            'skills',
            'projects',
            'certifications',
            'awards',
            'publications',
            'leadership',
            'volunteer',
            'languages',
            'affiliations',
            'patents',
            'conferences',
            'interests',
            'references',
        ],
    },
};
