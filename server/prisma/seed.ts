import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const templates = [
    {
        id: 'sidebar',
        name: 'Titanium Pro',
        description: 'Engineered for high-conversion leadership roles.',
        category: 'corporate',
        isPremium: true,
        isActive: true,
        layout: {
            type: 'sidebar',
            sidebarPosition: 'left',
            sidebarWidth: '32%',
            columnGap: '0',
            pageMargin: '0'
        },
        styles: {
            fontFamily: {
                headings: 'Inter',
                body: 'Inter'
            },
            fontSize: {
                name: '28pt',
                headings: '9pt',
                body: '9pt',
                meta: '8pt'
            },
            lineHeight: '1.5',
            colors: {
                primary: '#0f172a',
                secondary: '#334155',
                accent: '#0ea5e9',
                text: '#1e293b',
                background: '#ffffff',
                sidebarBackground: '#0f172a'
            },
            spacing: {
                sectionBottom: '20pt',
                itemBottom: '12pt'
            }
        },
        sections: {
            basics: {
                style: {
                    titleCase: 'uppercase',
                    titleAlignment: 'left'
                }
            }
        }
    },
    {
        id: 'double',
        name: 'Quantum Flow',
        description: 'Innovative 8-4 split for balanced creative focus.',
        category: 'creative',
        isPremium: true,
        isActive: true,
        layout: {
            type: 'single', // Technically a grid but uses single page flow with 2 col content
            pageMargin: '0.5in'
        },
        styles: {
            fontFamily: {
                headings: 'Inter',
                body: 'Inter'
            },
            fontSize: {
                name: '32pt',
                headings: '10pt',
                body: '9pt',
                meta: '8pt'
            },
            lineHeight: '1.6',
            colors: {
                primary: '#2e1065',
                secondary: '#4c1d95',
                accent: '#bc13fe',
                text: '#1e293b',
                background: '#ffffff'
            },
            spacing: {
                sectionBottom: '24pt',
                itemBottom: '16pt'
            }
        },
        sections: {}
    },
    {
        id: 'minimal',
        name: 'Void Minimal',
        description: 'Ultra-clean design with high-fashion neural spacing.',
        category: 'tech',
        isPremium: false,
        isActive: true,
        layout: {
            type: 'single',
            pageMargin: '0.75in'
        },
        styles: {
            fontFamily: {
                headings: 'Roboto',
                body: 'Roboto'
            },
            fontSize: {
                name: '24pt',
                headings: '10pt',
                body: '9pt',
                meta: '8pt'
            },
            lineHeight: '1.8',
            colors: {
                primary: '#000000',
                secondary: '#404040',
                accent: '#000000',
                text: '#171717',
                background: '#ffffff'
            },
            spacing: {
                sectionBottom: '30pt',
                itemBottom: '18pt'
            }
        },
        sections: {
            basics: {
                style: {
                    titleAlignment: 'center'
                }
            }
        }
    },
    {
        id: 'single',
        name: 'ATS Ghost',
        description: 'Traditional structure optimized for algorithmic infiltration.',
        category: 'entry',
        isPremium: false,
        isActive: true,
        layout: {
            type: 'single',
            pageMargin: '0.5in'
        },
        styles: {
            fontFamily: {
                headings: 'Times-Roman',
                body: 'Times-Roman'
            },
            fontSize: {
                name: '14pt',
                headings: '11pt',
                body: '10pt',
                meta: '10pt'
            },
            lineHeight: '1.2',
            colors: {
                primary: '#000000',
                secondary: '#000000',
                accent: '#000000',
                text: '#000000',
                background: '#ffffff'
            },
            spacing: {
                sectionBottom: '12pt',
                itemBottom: '6pt'
            }
        },
        sections: {
            header: {
                style: {
                    borderBottom: true,
                    titleAlignment: 'center'
                }
            }
        }
    }
];

async function main() {
    console.log('Start seeding templates...');
    for (const template of templates) {
        await prisma.template.upsert({
            where: { id: template.id },
            update: {
                name: template.name,
                description: template.description,
                category: template.category,
                isPremium: template.isPremium,
                isActive: template.isActive,
                layout: template.layout as any,
                styles: template.styles as any,
                sections: template.sections as any
            },
            create: {
                id: template.id,
                name: template.name,
                description: template.description,
                category: template.category,
                isPremium: template.isPremium,
                isActive: template.isActive,
                layout: template.layout as any,
                styles: template.styles as any,
                sections: template.sections as any
            }
        });
    }
    console.log('Seeding templates finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
