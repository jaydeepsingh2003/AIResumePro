export type TemplateCategory = 'corporate' | 'tech' | 'creative' | 'entry' | 'academic' | 'international';

export interface ResumeTemplate {
    id: string;
    name: string;
    category: TemplateCategory;
    description: string;
    prompt: string;
    thumbnail: string;
}

/** Maps template category to builder layout (sidebar | single | double | minimal) so "Use This Template" opens the right layout. */
export function getLayoutForCategory(category: TemplateCategory): 'sidebar' | 'single' | 'double' | 'minimal' {
    switch (category) {
        case 'tech': return 'sidebar';
        case 'creative': return 'double';
        case 'entry': return 'minimal';
        case 'corporate':
        case 'academic':
        case 'international':
        default: return 'single';
    }
}

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
    corporate: 'Corporate',
    tech: 'Tech',
    creative: 'Creative',
    entry: 'Entry / Student',
    academic: 'Academic',
    international: 'International',
};

export const RESUME_TEMPLATES: ResumeTemplate[] = [
    // CORPORATE TEMPLATES (10)
    { id: 'corp-01', name: 'Classic Professional', category: 'corporate', description: 'Traditional single-column layout.', prompt: 'Create a clean single-column resume thumbnail with a traditional layout, bold name header at top, serif-style heading font, clear section dividers, black and dark navy color scheme, professional spacing, minimalist design, white background, soft shadow, realistic paper mockup.', thumbnail: '/templates/corp_01.webp' },
    { id: 'corp-02', name: 'Modern Corporate', category: 'corporate', description: 'Two-column corporate layout.', prompt: 'Design a two-column corporate resume thumbnail with left sidebar in soft blue, bold uppercase name header, clean sans-serif fonts, structured work experience timeline, modern spacing, elegant professional look, subtle shadow.', thumbnail: '/templates/corp_02.webp' },
    { id: 'corp-03', name: 'Executive Elite', category: 'corporate', description: 'Luxury minimalist layout.', prompt: 'Create an executive-level resume thumbnail with luxury minimalist layout, strong name header centered, thin gold accent line, serif heading font, structured sections, clean white background, premium corporate style.', thumbnail: '/templates/corp_03.webp' },
    { id: 'corp-04', name: 'Clean Minimal', category: 'corporate', description: 'Whitespace-focused layout.', prompt: 'Design a minimalist resume thumbnail with lots of white space, thin divider lines, simple typography, no icons, one-column layout, black and gray color scheme, modern professional feel.', thumbnail: '/templates/corp_04.webp' },
    { id: 'corp-05', name: 'Banking Pro', category: 'corporate', description: 'Conservative navy accents.', prompt: 'Create a finance-focused resume thumbnail with conservative layout, navy accents, structured sections, formal typography, professional and serious tone, ATS-friendly clean format.', thumbnail: '/templates/corp_05.webp' },
    { id: 'corp-06', name: 'Consulting Standard', category: 'corporate', description: 'Highly structured layout.', prompt: 'Design a highly structured consulting resume thumbnail, tight spacing, bullet-focused experience, bold section headers, clean one-column layout, minimal color accents, McKinsey-style clean look.', thumbnail: '/templates/corp_06.webp' },
    { id: 'corp-07', name: 'Managerial Layout', category: 'corporate', description: 'Leadership-focused header.', prompt: 'Create a leadership-focused resume thumbnail with strong bold header, executive summary section, achievement-driven layout, professional navy accent, clear hierarchy.', thumbnail: '/templates/corp_07.webp' },
    { id: 'corp-08', name: 'Leadership Focus', category: 'corporate', description: 'Two-column skills summary.', prompt: 'Design a two-column leadership resume thumbnail, left sidebar with skills summary, right side detailed achievements, subtle blue accents, clean typography.', thumbnail: '/templates/corp_08.webp' },
    { id: 'corp-09', name: 'Boardroom Classic', category: 'corporate', description: 'Traditional high-level corporate.', prompt: 'Create a traditional high-level corporate resume thumbnail, centered name header, serif font headings, black and dark gray palette, structured professional layout.', thumbnail: '/templates/corp_09.webp' },
    { id: 'corp-10', name: 'Legal Corporate', category: 'corporate', description: 'Clean lines for legal.', prompt: 'Design a legal profession resume thumbnail with clean lines, conservative typography, black and navy accents, structured education and experience sections.', thumbnail: '/templates/corp_10.webp' },

    // TECH TEMPLATES (10)
    { id: 'tech-11', name: 'Developer Pro', category: 'tech', description: 'Skill tags as badges.', prompt: 'Create a modern tech resume thumbnail with left sidebar in dark gray, bold name header, skill tags styled as badges, monospaced font accents, clean two-column layout.', thumbnail: '/templates/tech_11.webp' },
    { id: 'tech-12', name: 'Engineering Grid', category: 'tech', description: 'Technical skills grid.', prompt: 'Design a structured engineering resume thumbnail with technical skills grid section, blue accent highlights, clean professional typography, balanced layout.', thumbnail: '/templates/tech_12.webp' },
    { id: 'tech-13', name: 'Data Scientist Modern', category: 'tech', description: 'Graph-style elements.', prompt: 'Create a data scientist resume thumbnail with subtle graph-style elements, soft blue accents, skill bars section, modern sans-serif typography.', thumbnail: '/templates/tech_13.webp' },
    { id: 'tech-14', name: 'Full Stack Minimal', category: 'tech', description: 'Keyword highlighting.', prompt: 'Design a clean developer resume thumbnail, one-column minimal layout, skill keywords highlighted, modern typography, lots of white space.', thumbnail: '/templates/tech_14.webp' },
    { id: 'tech-15', name: 'DevOps Focus', category: 'tech', description: 'Structured tool lists.', prompt: 'Create a DevOps resume thumbnail with structured tool list section, subtle dark blue accent, professional clean formatting.', thumbnail: '/templates/tech_15.webp' },
    { id: 'tech-16', name: 'Cybersecurity Clean', category: 'tech', description: 'Certification focused.', prompt: 'Design a cybersecurity resume thumbnail with dark navy accent, structured certifications section, strong professional hierarchy.', thumbnail: '/templates/tech_16.webp' },
    { id: 'tech-17', name: 'AI Specialist', category: 'tech', description: 'Subtle purple accents.', prompt: 'Create a modern AI professional resume thumbnail with subtle purple accent, clean layout, technical skill section highlighted.', thumbnail: '/templates/tech_17.webp' },
    { id: 'tech-18', name: 'Cloud Architect', category: 'tech', description: 'Project section focus.', prompt: 'Design a cloud architect resume thumbnail with soft blue gradient header line, structured project section, professional technical layout.', thumbnail: '/templates/tech_18.webp' },
    { id: 'tech-19', name: 'Startup Tech', category: 'tech', description: 'Achievement bullet layout.', prompt: 'Create a modern startup resume thumbnail with clean spacing, bold section headers, subtle color accents, achievement-focused bullet layout.', thumbnail: '/templates/tech_19.webp' },
    { id: 'tech-20', name: 'Product Manager Tech', category: 'tech', description: 'Metrics section focus.', prompt: 'Design a PM resume thumbnail with structured metrics section, clean typography, two-column balanced layout.', thumbnail: '/templates/tech_20.webp' },

    // CREATIVE TEMPLATES (10)
    { id: 'creative-21', name: 'Creative Bold', category: 'creative', description: 'Colored sidebar & large header.', prompt: 'Create a bold creative resume thumbnail with colored sidebar, large name header, modern typography, slightly artistic layout but still readable.', thumbnail: '/templates/creative_21.webp' },
    { id: 'creative-22', name: 'Designer Split', category: 'creative', description: 'Colorful split layout.', prompt: 'Design a two-column designer resume thumbnail with left colorful sidebar, right clean content area, modern aesthetic.', thumbnail: '/templates/creative_22.webp' },
    { id: 'creative-23', name: 'Portfolio Showcase', category: 'creative', description: 'Project highlight section.', prompt: 'Create a creative resume thumbnail with project highlights section, subtle layout variation, modern clean fonts.', thumbnail: '/templates/creative_23.webp' },
    { id: 'creative-24', name: 'Visual Timeline', category: 'creative', description: 'Vertical timeline line.', prompt: 'Design a timeline-style resume thumbnail with vertical timeline line, clean typography, subtle accent color.', thumbnail: '/templates/creative_24.webp' },
    { id: 'creative-25', name: 'Marketing Pop', category: 'creative', description: 'Subtle gradient accents.', prompt: 'Create a marketing resume thumbnail with bold section headers, subtle gradient accent, professional but creative style.', thumbnail: '/templates/creative_25.webp' },
    { id: 'creative-26', name: 'Content Creator', category: 'creative', description: 'Modern font pairing.', prompt: 'Design a clean resume thumbnail with modern font pairing, social links section styled elegantly.', thumbnail: '/templates/creative_26.webp' },
    { id: 'creative-27', name: 'UX/UI Designer', category: 'creative', description: 'Soft purple accent.', prompt: 'Create a UI/UX resume thumbnail with modern layout, structured project section, soft purple accent.', thumbnail: '/templates/creative_27.webp' },
    { id: 'creative-28', name: 'Social Media Modern', category: 'creative', description: 'Subtle color blocks.', prompt: 'Design a resume thumbnail with subtle color blocks, clean layout, visually engaging but professional.', thumbnail: '/templates/creative_28.webp' },
    { id: 'creative-29', name: 'Creative Minimal', category: 'creative', description: 'Clean lines & light accent.', prompt: 'Create a minimalist creative resume thumbnail with thin lines, clean white space, light accent color.', thumbnail: '/templates/creative_29.webp' },
    { id: 'creative-30', name: 'Art Director', category: 'creative', description: 'Strong typography.', prompt: 'Design a bold art director resume thumbnail with strong typography, creative layout, subtle artistic accents.', thumbnail: '/templates/creative_30.webp' },

    // ENTRY-LEVEL / STUDENT (10)
    { id: 'entry-31', name: 'Graduate Simple', category: 'entry', description: 'Education highlighted.', prompt: 'Create a clean student resume thumbnail with one-column layout, education section highlighted, professional typography.', thumbnail: '/templates/entry_31.webp' },
    { id: 'entry-32', name: 'Internship Ready', category: 'entry', description: 'Skill-focused layout.', prompt: 'Design a minimal internship resume thumbnail, skill-focused layout, clean formatting.', thumbnail: '/templates/entry_32.webp' },
    { id: 'entry-33', name: 'College Modern', category: 'entry', description: 'Soft blue accents.', prompt: 'Create a modern student resume thumbnail with soft blue accent, structured education and projects section.', thumbnail: '/templates/entry_33.webp' },
    { id: 'entry-34', name: 'Fresher ATS', category: 'entry', description: 'No graphics, clean layout.', prompt: 'Design an ATS-friendly fresher resume thumbnail with simple clean layout, no graphics, structured bullet points.', thumbnail: '/templates/entry_34.webp' },
    { id: 'entry-35', name: 'Campus Professional', category: 'entry', description: 'Subtle accent line.', prompt: 'Create a student professional resume thumbnail with subtle accent line, clear section hierarchy.', thumbnail: '/templates/entry_35.webp' },
    { id: 'entry-36', name: 'Student Compact', category: 'entry', description: 'One-page compact layout.', prompt: 'Design a compact one-page student resume thumbnail, tight spacing, structured layout.', thumbnail: '/templates/entry_36.webp' },
    { id: 'entry-37', name: 'Academic Fresher', category: 'entry', description: 'Education-first layout.', prompt: 'Create a fresher resume thumbnail with education-first layout, clean typography.', thumbnail: '/templates/entry_37.webp' },
    { id: 'entry-38', name: 'First Job Template', category: 'entry', description: 'Skill highlights section.', prompt: 'Design a simple first-job resume thumbnail with skill highlight section and clean white background.', thumbnail: '/templates/entry_38.webp' },
    { id: 'entry-39', name: 'Junior Developer', category: 'entry', description: 'Beginner tech layout.', prompt: 'Create a beginner tech resume thumbnail with skill badge layout, clean two-column structure.', thumbnail: '/templates/entry_39.webp' },
    { id: 'entry-40', name: 'Trainee Clean', category: 'entry', description: 'Minimalist blue accents.', prompt: 'Design a minimalist trainee resume thumbnail with subtle blue accents, simple layout.', thumbnail: '/templates/entry_40.webp' },

    // ACADEMIC / RESEARCH (5)
    { id: 'academic-41', name: 'Research CV', category: 'academic', description: 'Publication section focus.', prompt: 'Create an academic CV thumbnail with publication section, clean serif headings, structured multi-section layout.', thumbnail: '/templates/academic_41.webp' },
    { id: 'academic-42', name: 'PhD Academic', category: 'academic', description: 'Detailed research/teaching.', prompt: 'Design a detailed academic resume thumbnail with research, publications, teaching experience sections.', thumbnail: '/templates/academic_42.webp' },
    { id: 'academic-43', name: 'Professor CV', category: 'academic', description: 'Formal academic format.', prompt: 'Create a professor resume thumbnail with structured academic formatting, formal typography.', thumbnail: '/templates/academic_43.webp' },
    { id: 'academic-44', name: 'Medical Research', category: 'academic', description: 'Clinical experience focus.', prompt: 'Design a medical research resume thumbnail with clinical experience section, clean professional look.', thumbnail: '/templates/academic_44.webp' },
    { id: 'academic-45', name: 'Publication Focus', category: 'academic', description: 'Emphasizing publications.', prompt: 'Create an academic resume thumbnail emphasizing publications and research projects.', thumbnail: '/templates/academic_45.webp' },

    // INTERNATIONAL (5)
    { id: 'intl-46', name: 'US Standard', category: 'international', description: 'American-style format.', prompt: 'Create a clean American-style resume thumbnail, one-page format, simple typography.', thumbnail: '/templates/intl_46.webp' },
    { id: 'intl-47', name: 'UK Modern', category: 'international', description: 'Modern UK-style layout.', prompt: 'Design a UK-style resume thumbnail with slightly formal layout and structured sections.', thumbnail: '/templates/intl_47.webp' },
    { id: 'intl-48', name: 'EU Europass Style', category: 'international', description: 'Europass-inspired sidebar.', prompt: 'Create a Europass-inspired resume thumbnail with structured sidebar layout, professional formatting.', thumbnail: '/templates/intl_48.webp' },
    { id: 'intl-49', name: 'Canada Professional', category: 'international', description: 'Canadian modern format.', prompt: 'Design a Canadian-style resume thumbnail with clean formatting and modern typography.', thumbnail: '/templates/intl_49.webp' },
    { id: 'intl-50', name: 'India Corporate', category: 'international', description: 'Indian corporate accents.', prompt: 'Create a professional Indian corporate resume thumbnail with structured layout and subtle blue accents.', thumbnail: '/templates/intl_50.webp' },
];
