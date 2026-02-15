const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../public/thumbnails');
const BASE_URL = 'http://localhost:3000/template-test';

// Template IDs from registry.ts
const TEMPLATE_IDS = [
    // CORPORATE
    'corp-01', 'corp-02', 'corp-03', 'corp-04', 'corp-05',
    'corp-06', 'corp-07', 'corp-08', 'corp-09', 'corp-10',
    // TECH
    'tech-11', 'tech-12', 'tech-13', 'tech-14', 'tech-15',
    'tech-16', 'tech-17', 'tech-18', 'tech-19', 'tech-20',
    // CREATIVE
    'creative-21', 'creative-22', 'creative-23', 'creative-24', 'creative-25',
    'creative-26', 'creative-27', 'creative-28', 'creative-29', 'creative-30',
    // ENTRY-LEVEL
    'entry-31', 'entry-32', 'entry-33', 'entry-34', 'entry-35',
    'entry-36', 'entry-37', 'entry-38', 'entry-39', 'entry-40',
    // ACADEMIC
    'academic-41', 'academic-42', 'academic-43', 'academic-44', 'academic-45',
    // INTERNATIONAL
    'intl-46', 'intl-47', 'intl-48', 'intl-49', 'intl-50'
];

async function main() {
    console.log(`Ensuring output directory exists: ${OUTPUT_DIR}`);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new', // Use new headless mode
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

    console.log(`Starting generation for ${TEMPLATE_IDS.length} templates...`);

    for (const templateId of TEMPLATE_IDS) {
        const url = `${BASE_URL}?templateId=${templateId}`;
        console.log(`Generating thumbnail for ${templateId}...`);

        try {
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

            // Wait for the preview container to be visible
            const selector = '#resume-preview-container';
            await page.waitForSelector(selector);

            // Add a small delay for any animations/fonts to settle
            await new Promise(r => setTimeout(r, 1000));

            const element = await page.$(selector);
            if (!element) {
                console.error(`Element not found for ${templateId}`);
                continue;
            }

            const outputPath = path.join(OUTPUT_DIR, `${templateId}.png`);
            await element.screenshot({ path: outputPath });
            console.log(`Saved: ${outputPath}`);

        } catch (error) {
            console.error(`Failed to generate thumbnail for ${templateId}:`, error.message);
        }
    }

    await browser.close();
    console.log('Thumbnail generation complete!');
}

main().catch(console.error);
