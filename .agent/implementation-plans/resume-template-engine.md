# Fully Independent Resume Template Engine - Implementation Plan

## 🎯 Project Overview

Build a **fully self-hosted, white-label resume template engine** with 50+ professional templates that can be deployed independently without any external dependencies. This system will be production-ready, scalable, and completely customizable.

---

## 📋 Current State Analysis

### ✅ What You Already Have
- **50 Templates Defined** in `src/data/templates.ts`
- **6 Categories**: Corporate (10), Tech (10), Creative (10), Entry-Level (10), Academic (5), International (5)
- **Resume Editor Component** with full CRUD operations
- **PDF Generation** capability
- **AI Text Improvement** integration
- **Template Gallery** UI component
- **Titanium Noir Design System** applied across all pages

### ❌ What's Missing for Full Independence
1. **Actual Template Rendering Engine** (currently only has layout types: sidebar/single/double/minimal)
2. **Template-Specific Styling System** (50 unique visual designs)
3. **Template Preview Generation** (thumbnails for each template)
4. **Self-Hosted Infrastructure** (database, storage, authentication)
5. **White-Label Configuration** (branding, domain, customization)
6. **Template Marketplace/Management** (admin panel for templates)
7. **Export Formats** (PDF, DOCX, HTML, JSON)
8. **Version Control** for templates
9. **Template Testing Framework**
10. **Performance Optimization** for 50+ templates

---

## 🏗️ Architecture Design

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                    RESUME TEMPLATE ENGINE                    │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Template   │  │   Rendering  │  │    Export    │      │
│  │   Registry   │→ │    Engine    │→ │    Engine    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         ↓                  ↓                  ↓              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Styling    │  │   Preview    │  │   Storage    │      │
│  │   System     │  │  Generator   │  │   Layer      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Phase 1: Template Rendering Engine (Week 1-2)

### 1.1 Create Template Component Architecture

**Goal**: Build a flexible component system where each template is a React component with its own styling.

#### File Structure
```
src/
├── components/
│   └── resume-templates/
│       ├── index.ts                    # Template registry
│       ├── BaseTemplate.tsx            # Shared template logic
│       ├── TemplateRenderer.tsx        # Main renderer
│       ├── corporate/
│       │   ├── ClassicProfessional.tsx # corp-01
│       │   ├── ModernCorporate.tsx     # corp-02
│       │   └── ... (8 more)
│       ├── tech/
│       │   ├── DeveloperPro.tsx        # tech-11
│       │   └── ... (9 more)
│       ├── creative/
│       │   └── ... (10 templates)
│       ├── entry/
│       │   └── ... (10 templates)
│       ├── academic/
│       │   └── ... (5 templates)
│       └── international/
│           └── ... (5 templates)
```

#### Implementation Steps

**Step 1.1.1**: Create Base Template Interface
```typescript
// src/types/template.ts
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
    background: string;
  };
  fonts: {
    heading: string;
    body: string;
    size: {
      name: string;
      heading: string;
      body: string;
      small: string;
    };
  };
  spacing: {
    section: string;
    item: string;
    margin: string;
  };
  layout: {
    type: 'single' | 'double' | 'sidebar' | 'minimal';
    columns?: number;
    sidebarWidth?: string;
  };
}
```

**Step 1.1.2**: Create Template Registry
```typescript
// src/components/resume-templates/index.ts
import { TemplateProps } from '@/types/template';

// Import all templates
import ClassicProfessional from './corporate/ClassicProfessional';
import ModernCorporate from './corporate/ModernCorporate';
// ... import all 50 templates

export const TEMPLATE_COMPONENTS: Record<string, React.FC<TemplateProps>> = {
  'corp-01': ClassicProfessional,
  'corp-02': ModernCorporate,
  // ... map all 50 templates
};

export function getTemplateComponent(templateId: string) {
  return TEMPLATE_COMPONENTS[templateId] || TEMPLATE_COMPONENTS['corp-01'];
}
```

**Step 1.1.3**: Create Template Renderer
```typescript
// src/components/resume-templates/TemplateRenderer.tsx
'use client';

import { Resume } from '@/types/resume';
import { getTemplateComponent } from './index';
import { getTemplateConfig } from './configs';

interface Props {
  templateId: string;
  resume: Resume;
  preview?: boolean;
}

export function TemplateRenderer({ templateId, resume, preview }: Props) {
  const TemplateComponent = getTemplateComponent(templateId);
  const config = getTemplateConfig(templateId);
  
  return (
    <div className="template-container">
      <TemplateComponent resume={resume} config={config} preview={preview} />
    </div>
  );
}
```

### 1.2 Create Template Configurations

**Step 1.2.1**: Define template-specific configs
```typescript
// src/components/resume-templates/configs.ts
import { TemplateConfig } from '@/types/template';

export const TEMPLATE_CONFIGS: Record<string, TemplateConfig> = {
  'corp-01': {
    id: 'corp-01',
    colors: {
      primary: '#1a1a1a',
      secondary: '#2c3e50',
      accent: '#3498db',
      text: '#333333',
      background: '#ffffff',
    },
    fonts: {
      heading: 'Georgia, serif',
      body: 'Arial, sans-serif',
      size: {
        name: '28px',
        heading: '16px',
        body: '11px',
        small: '9px',
      },
    },
    spacing: {
      section: '20px',
      item: '12px',
      margin: '40px',
    },
    layout: {
      type: 'single',
    },
  },
  // ... 49 more template configs
};

export function getTemplateConfig(templateId: string): TemplateConfig {
  return TEMPLATE_CONFIGS[templateId] || TEMPLATE_CONFIGS['corp-01'];
}
```

### 1.3 Build First 5 Template Components (Proof of Concept)

**Step 1.3.1**: Classic Professional (corp-01)
```tsx
// src/components/resume-templates/corporate/ClassicProfessional.tsx
'use client';

import { TemplateProps } from '@/types/template';

export default function ClassicProfessional({ resume, config }: TemplateProps) {
  return (
    <div 
      className="resume-template classic-professional"
      style={{
        fontFamily: config.fonts.body,
        color: config.colors.text,
        backgroundColor: config.colors.background,
        padding: config.spacing.margin,
      }}
    >
      {/* Header */}
      <header className="text-center mb-8">
        <h1 
          style={{ 
            fontFamily: config.fonts.heading,
            fontSize: config.fonts.size.name,
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          {resume.basics.name}
        </h1>
        <div className="contact-info text-sm" style={{ color: config.colors.secondary }}>
          {resume.basics.email} | {resume.basics.phone} | {resume.basics.location}
        </div>
      </header>

      {/* Professional Summary */}
      {resume.basics.summary && (
        <section style={{ marginBottom: config.spacing.section }}>
          <h2 
            style={{ 
              fontSize: config.fonts.size.heading,
              fontWeight: 'bold',
              borderBottom: `2px solid ${config.colors.primary}`,
              paddingBottom: '4px',
              marginBottom: config.spacing.item,
            }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ fontSize: config.fonts.size.body, lineHeight: '1.6' }}>
            {resume.basics.summary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {resume.work && resume.work.length > 0 && (
        <section style={{ marginBottom: config.spacing.section }}>
          <h2 
            style={{ 
              fontSize: config.fonts.size.heading,
              fontWeight: 'bold',
              borderBottom: `2px solid ${config.colors.primary}`,
              paddingBottom: '4px',
              marginBottom: config.spacing.item,
            }}
          >
            WORK EXPERIENCE
          </h2>
          {resume.work.map((job, idx) => (
            <div key={idx} style={{ marginBottom: config.spacing.item }}>
              <div className="flex justify-between items-baseline">
                <h3 style={{ fontSize: config.fonts.size.body, fontWeight: 'bold' }}>
                  {job.position}
                </h3>
                <span style={{ fontSize: config.fonts.size.small, color: config.colors.secondary }}>
                  {job.startDate} - {job.endDate || 'Present'}
                </span>
              </div>
              <div style={{ fontSize: config.fonts.size.small, color: config.colors.secondary, marginBottom: '4px' }}>
                {job.company} | {job.location}
              </div>
              <p style={{ fontSize: config.fonts.size.body, lineHeight: '1.5' }}>
                {job.summary}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <section style={{ marginBottom: config.spacing.section }}>
          <h2 
            style={{ 
              fontSize: config.fonts.size.heading,
              fontWeight: 'bold',
              borderBottom: `2px solid ${config.colors.primary}`,
              paddingBottom: '4px',
              marginBottom: config.spacing.item,
            }}
          >
            EDUCATION
          </h2>
          {resume.education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: config.spacing.item }}>
              <div className="flex justify-between items-baseline">
                <h3 style={{ fontSize: config.fonts.size.body, fontWeight: 'bold' }}>
                  {edu.degree} in {edu.field}
                </h3>
                <span style={{ fontSize: config.fonts.size.small, color: config.colors.secondary }}>
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <div style={{ fontSize: config.fonts.size.small, color: config.colors.secondary }}>
                {edu.institution}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {resume.skills && resume.skills.length > 0 && (
        <section>
          <h2 
            style={{ 
              fontSize: config.fonts.size.heading,
              fontWeight: 'bold',
              borderBottom: `2px solid ${config.colors.primary}`,
              paddingBottom: '4px',
              marginBottom: config.spacing.item,
            }}
          >
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, idx) => (
              <span 
                key={idx}
                style={{ 
                  fontSize: config.fonts.size.body,
                  marginRight: '12px',
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
```

**Repeat for**:
- Modern Corporate (corp-02) - Two-column with sidebar
- Developer Pro (tech-11) - Tech-focused with skill badges
- Creative Bold (creative-21) - Colorful sidebar design
- Graduate Simple (entry-31) - Clean student layout

---

## 📦 Phase 2: Template Preview System (Week 2-3)

### 2.1 Thumbnail Generation

**Goal**: Generate high-quality preview thumbnails for all 50 templates.

#### Options:

**Option A: Server-Side Rendering (Recommended)**
```typescript
// src/app/api/templates/[id]/thumbnail/route.ts
import { NextRequest } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const templateId = params.id;
  
  // Launch headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport for resume size
  await page.setViewport({ width: 816, height: 1056 }); // 8.5x11 at 96 DPI
  
  // Navigate to template preview page
  await page.goto(`http://localhost:3000/templates/preview/${templateId}`);
  
  // Take screenshot
  const screenshot = await page.screenshot({ 
    type: 'webp',
    quality: 85,
  });
  
  await browser.close();
  
  return new Response(screenshot, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
```

**Option B: Static Generation (Build Time)**
```typescript
// scripts/generate-thumbnails.ts
import { RESUME_TEMPLATES } from '@/data/templates';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

async function generateThumbnails() {
  const browser = await puppeteer.launch();
  
  for (const template of RESUME_TEMPLATES) {
    console.log(`Generating thumbnail for ${template.id}...`);
    
    const page = await browser.newPage();
    await page.setViewport({ width: 816, height: 1056 });
    await page.goto(`http://localhost:3000/templates/preview/${template.id}`);
    
    const screenshot = await page.screenshot({ 
      type: 'webp',
      quality: 85,
    });
    
    const outputPath = path.join(
      process.cwd(),
      'public',
      'templates',
      `${template.id}.webp`
    );
    
    await fs.writeFile(outputPath, screenshot);
    await page.close();
  }
  
  await browser.close();
  console.log('✅ All thumbnails generated!');
}

generateThumbnails();
```

### 2.2 Live Preview Component

```typescript
// src/components/resume-templates/LivePreview.tsx
'use client';

import { useState, useEffect } from 'react';
import { Resume } from '@/types/resume';
import { TemplateRenderer } from './TemplateRenderer';
import { SAMPLE_RESUME_DATA } from '@/data/sample-resume';

interface Props {
  templateId: string;
  scale?: number;
}

export function LivePreview({ templateId, scale = 0.5 }: Props) {
  const [resume, setResume] = useState<Resume>(SAMPLE_RESUME_DATA);
  
  return (
    <div 
      className="live-preview border border-white/10 rounded-2xl overflow-hidden shadow-xl"
      style={{ 
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${100 / scale}%`,
        height: `${100 / scale}%`,
      }}
    >
      <TemplateRenderer 
        templateId={templateId} 
        resume={resume} 
        preview={true}
      />
    </div>
  );
}
```

---

## 📦 Phase 3: Self-Hosted Infrastructure (Week 3-4)

### 3.1 Database Setup (PostgreSQL)

```sql
-- migrations/001_initial_schema.sql

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Resumes table
CREATE TABLE resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  template_id VARCHAR(50) NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Templates table (for custom templates)
CREATE TABLE custom_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  config JSONB NOT NULL,
  component_code TEXT,
  is_public BOOLEAN DEFAULT FALSE,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Template usage analytics
CREATE TABLE template_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id VARCHAR(50) NOT NULL,
  user_id UUID REFERENCES users(id),
  action VARCHAR(50) NOT NULL, -- 'view', 'use', 'download'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_resumes_user_id ON resumes(user_id);
CREATE INDEX idx_resumes_template_id ON resumes(template_id);
CREATE INDEX idx_template_usage_template_id ON template_usage(template_id);
```

### 3.2 File Storage (Local + S3 Compatible)

```typescript
// src/lib/storage.ts
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import fs from 'fs/promises';
import path from 'path';

export class StorageService {
  private s3Client?: S3Client;
  private useS3: boolean;
  
  constructor() {
    this.useS3 = process.env.USE_S3 === 'true';
    
    if (this.useS3) {
      this.s3Client = new S3Client({
        region: process.env.AWS_REGION || 'us-east-1',
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        },
        endpoint: process.env.S3_ENDPOINT, // For MinIO/DigitalOcean Spaces
      });
    }
  }
  
  async uploadPDF(userId: string, resumeId: string, pdfBuffer: Buffer): Promise<string> {
    const filename = `${userId}/${resumeId}.pdf`;
    
    if (this.useS3) {
      await this.s3Client!.send(new PutObjectCommand({
        Bucket: process.env.S3_BUCKET!,
        Key: filename,
        Body: pdfBuffer,
        ContentType: 'application/pdf',
      }));
      
      return `s3://${process.env.S3_BUCKET}/${filename}`;
    } else {
      // Local file storage
      const localPath = path.join(process.cwd(), 'storage', 'pdfs', filename);
      await fs.mkdir(path.dirname(localPath), { recursive: true });
      await fs.writeFile(localPath, pdfBuffer);
      
      return `/storage/pdfs/${filename}`;
    }
  }
  
  async getDownloadUrl(filePath: string): Promise<string> {
    if (this.useS3 && filePath.startsWith('s3://')) {
      const key = filePath.replace(`s3://${process.env.S3_BUCKET}/`, '');
      const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET!,
        Key: key,
      });
      
      return await getSignedUrl(this.s3Client!, command, { expiresIn: 3600 });
    }
    
    return filePath;
  }
}

export const storage = new StorageService();
```

### 3.3 Environment Configuration

```bash
# .env.local

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/resume_builder"

# Storage (choose one)
USE_S3=false  # Set to true for S3/MinIO/Spaces
S3_BUCKET=resume-pdfs
S3_ENDPOINT=https://nyc3.digitaloceanspaces.com  # Optional for S3-compatible
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

# Authentication
NEXTAUTH_SECRET=your_secret_key_here
NEXTAUTH_URL=http://localhost:3000

# AI (Optional)
OPENAI_API_KEY=your_openai_key

# White Label
NEXT_PUBLIC_APP_NAME="AI Resume Pro"
NEXT_PUBLIC_APP_LOGO="/logo.svg"
NEXT_PUBLIC_PRIMARY_COLOR="#00f2ff"
NEXT_PUBLIC_SUPPORT_EMAIL="support@yourcompany.com"
```

---

## 📦 Phase 4: Export Engine (Week 4-5)

### 4.1 Enhanced PDF Export

```typescript
// src/lib/pdf-export.ts
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Resume } from '@/types/resume';

export class PDFExporter {
  async generatePDF(
    templateId: string,
    resume: Resume,
    options: {
      format?: 'a4' | 'letter';
      quality?: number;
    } = {}
  ): Promise<Blob> {
    const { format = 'letter', quality = 2 } = options;
    
    // Render template to DOM
    const container = document.createElement('div');
    container.style.width = '816px'; // 8.5 inches at 96 DPI
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    document.body.appendChild(container);
    
    // Render React component to container
    const { createRoot } = await import('react-dom/client');
    const { TemplateRenderer } = await import('@/components/resume-templates/TemplateRenderer');
    
    const root = createRoot(container);
    root.render(<TemplateRenderer templateId={templateId} resume={resume} />);
    
    // Wait for render
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Convert to canvas
    const canvas = await html2canvas(container, {
      scale: quality,
      useCORS: true,
      logging: false,
    });
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: format === 'a4' ? [595, 842] : [612, 792],
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
    // Cleanup
    document.body.removeChild(container);
    
    return pdf.output('blob');
  }
}

export const pdfExporter = new PDFExporter();
```

### 4.2 DOCX Export

```typescript
// src/lib/docx-export.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { Resume } from '@/types/resume';

export class DOCXExporter {
  async generateDOCX(resume: Resume): Promise<Blob> {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          // Header
          new Paragraph({
            text: resume.basics.name,
            heading: HeadingLevel.HEADING_1,
            alignment: 'center',
          }),
          new Paragraph({
            children: [
              new TextRun(`${resume.basics.email} | ${resume.basics.phone} | ${resume.basics.location}`),
            ],
            alignment: 'center',
          }),
          
          // Summary
          ...(resume.basics.summary ? [
            new Paragraph({ text: '' }), // Spacing
            new Paragraph({
              text: 'PROFESSIONAL SUMMARY',
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({ text: resume.basics.summary }),
          ] : []),
          
          // Work Experience
          ...(resume.work && resume.work.length > 0 ? [
            new Paragraph({ text: '' }),
            new Paragraph({
              text: 'WORK EXPERIENCE',
              heading: HeadingLevel.HEADING_2,
            }),
            ...resume.work.flatMap(job => [
              new Paragraph({
                children: [
                  new TextRun({ text: job.position, bold: true }),
                  new TextRun(` | ${job.company}`),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: `${job.startDate} - ${job.endDate || 'Present'}`, italics: true }),
                ],
              }),
              new Paragraph({ text: job.summary }),
              new Paragraph({ text: '' }),
            ]),
          ] : []),
          
          // Education
          ...(resume.education && resume.education.length > 0 ? [
            new Paragraph({
              text: 'EDUCATION',
              heading: HeadingLevel.HEADING_2,
            }),
            ...resume.education.flatMap(edu => [
              new Paragraph({
                children: [
                  new TextRun({ text: `${edu.degree} in ${edu.field}`, bold: true }),
                ],
              }),
              new Paragraph({ text: edu.institution }),
              new Paragraph({ text: '' }),
            ]),
          ] : []),
          
          // Skills
          ...(resume.skills && resume.skills.length > 0 ? [
            new Paragraph({
              text: 'SKILLS',
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: resume.skills.map(s => s.name).join(' • '),
            }),
          ] : []),
        ],
      }],
    });
    
    return await Packer.toBlob(doc);
  }
}

export const docxExporter = new DOCXExporter();
```

### 4.3 JSON Export/Import

```typescript
// src/lib/json-export.ts
import { Resume } from '@/types/resume';

export class JSONExporter {
  export(resume: Resume): string {
    return JSON.stringify(resume, null, 2);
  }
  
  import(jsonString: string): Resume {
    try {
      const data = JSON.parse(jsonString);
      // Validate structure
      if (!data.basics || !data.basics.name) {
        throw new Error('Invalid resume format');
      }
      return data as Resume;
    } catch (error) {
      throw new Error('Failed to parse resume JSON');
    }
  }
  
  downloadJSON(resume: Resume, filename: string = 'resume.json') {
    const blob = new Blob([this.export(resume)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}

export const jsonExporter = new JSONExporter();
```

---

## 📦 Phase 5: White-Label System (Week 5-6)

### 5.1 Branding Configuration

```typescript
// src/lib/white-label.ts
export interface WhiteLabelConfig {
  appName: string;
  logo: string;
  favicon: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
  features: {
    aiImprovement: boolean;
    pdfExport: boolean;
    docxExport: boolean;
    templateCustomization: boolean;
  };
  pricing: {
    enabled: boolean;
    plans: Array<{
      name: string;
      price: number;
      features: string[];
    }>;
  };
}

export function getWhiteLabelConfig(): WhiteLabelConfig {
  return {
    appName: process.env.NEXT_PUBLIC_APP_NAME || 'AI Resume Pro',
    logo: process.env.NEXT_PUBLIC_APP_LOGO || '/logo.svg',
    favicon: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
    colors: {
      primary: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#00f2ff',
      secondary: process.env.NEXT_PUBLIC_SECONDARY_COLOR || '#bc13fe',
      accent: process.env.NEXT_PUBLIC_ACCENT_COLOR || '#ff00ff',
    },
    fonts: {
      heading: process.env.NEXT_PUBLIC_HEADING_FONT || 'Inter',
      body: process.env.NEXT_PUBLIC_BODY_FONT || 'Inter',
    },
    contact: {
      email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@example.com',
      phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE,
      address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS,
    },
    social: {
      twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    },
    features: {
      aiImprovement: process.env.NEXT_PUBLIC_ENABLE_AI === 'true',
      pdfExport: process.env.NEXT_PUBLIC_ENABLE_PDF === 'true',
      docxExport: process.env.NEXT_PUBLIC_ENABLE_DOCX === 'true',
      templateCustomization: process.env.NEXT_PUBLIC_ENABLE_CUSTOM_TEMPLATES === 'true',
    },
    pricing: {
      enabled: process.env.NEXT_PUBLIC_ENABLE_PRICING === 'true',
      plans: JSON.parse(process.env.NEXT_PUBLIC_PRICING_PLANS || '[]'),
    },
  };
}
```

### 5.2 Dynamic Theme Provider

```typescript
// src/components/providers/ThemeProvider.tsx
'use client';

import { createContext, useContext, useEffect } from 'react';
import { getWhiteLabelConfig } from '@/lib/white-label';

const ThemeContext = createContext(getWhiteLabelConfig());

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const config = getWhiteLabelConfig();
  
  useEffect(() => {
    // Apply CSS variables
    document.documentElement.style.setProperty('--color-primary', config.colors.primary);
    document.documentElement.style.setProperty('--color-secondary', config.colors.secondary);
    document.documentElement.style.setProperty('--color-accent', config.colors.accent);
    document.documentElement.style.setProperty('--font-heading', config.fonts.heading);
    document.documentElement.style.setProperty('--font-body', config.fonts.body);
    
    // Update meta tags
    document.title = config.appName;
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) favicon.href = config.favicon;
  }, [config]);
  
  return (
    <ThemeContext.Provider value={config}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

---

## 📦 Phase 6: Admin Panel (Week 6-7)

### 6.1 Template Management Dashboard

```typescript
// src/app/(admin)/admin/templates/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { RESUME_TEMPLATES } from '@/data/templates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TemplateManagementPage() {
  const [templates, setTemplates] = useState(RESUME_TEMPLATES);
  const [search, setSearch] = useState('');
  
  const filteredTemplates = templates.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="p-10 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-8">Template Management</h1>
        
        <div className="mb-8">
          <Input
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <div key={template.id} className="glass rounded-2xl p-6 border border-white/10">
              <img 
                src={template.thumbnail} 
                alt={template.name}
                className="w-full aspect-[3/4] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{template.description}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="outline">Preview</Button>
                <Button size="sm" variant="outline">Analytics</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 6.2 Analytics Dashboard

```typescript
// src/app/(admin)/admin/analytics/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AnalyticsPage() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch analytics data
    fetch('/api/admin/analytics')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return (
    <div className="p-10 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-8">Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-2xl p-6 border border-white/10">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Total Users</h3>
            <p className="text-4xl font-black text-white">1,234</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/10">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Resumes Created</h3>
            <p className="text-4xl font-black text-white">5,678</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/10">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">PDFs Generated</h3>
            <p className="text-4xl font-black text-white">3,456</p>
          </div>
        </div>
        
        <div className="glass rounded-2xl p-6 border border-white/10">
          <h2 className="text-2xl font-black text-white mb-6">Template Usage</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.9)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                }}
              />
              <Bar dataKey="usage" fill="#00f2ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
```

---

## 📦 Phase 7: Performance Optimization (Week 7-8)

### 7.1 Template Code Splitting

```typescript
// src/components/resume-templates/index.ts
import dynamic from 'next/dynamic';
import { TemplateProps } from '@/types/template';

// Lazy load templates
export const TEMPLATE_COMPONENTS: Record<string, React.ComponentType<TemplateProps>> = {
  'corp-01': dynamic(() => import('./corporate/ClassicProfessional')),
  'corp-02': dynamic(() => import('./corporate/ModernCorporate')),
  // ... all 50 templates with dynamic imports
};
```

### 7.2 Caching Strategy

```typescript
// src/lib/cache.ts
import { Redis } from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export class CacheService {
  async getTemplateThumbnail(templateId: string): Promise<Buffer | null> {
    const cached = await redis.getBuffer(`thumbnail:${templateId}`);
    return cached;
  }
  
  async setTemplateThumbnail(templateId: string, buffer: Buffer): Promise<void> {
    await redis.setex(`thumbnail:${templateId}`, 86400, buffer); // 24 hours
  }
  
  async getResumeData(resumeId: string): Promise<any | null> {
    const cached = await redis.get(`resume:${resumeId}`);
    return cached ? JSON.parse(cached) : null;
  }
  
  async setResumeData(resumeId: string, data: any): Promise<void> {
    await redis.setex(`resume:${resumeId}`, 3600, JSON.stringify(data)); // 1 hour
  }
}

export const cache = new CacheService();
```

---

## 🚀 Deployment Guide

### Docker Compose Setup

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/resume_builder
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: resume_builder
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Dockerfile

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📊 Success Metrics

- ✅ 50+ templates fully implemented and tested
- ✅ < 2s page load time for template gallery
- ✅ < 5s PDF generation time
- ✅ 100% ATS compatibility for all templates
- ✅ Mobile responsive (all templates)
- ✅ 99.9% uptime
- ✅ Support for 10,000+ concurrent users

---

## 🎯 Next Steps

1. **Week 1-2**: Build template rendering engine + 5 proof-of-concept templates
2. **Week 2-3**: Complete all 50 templates + preview system
3. **Week 3-4**: Set up database and storage infrastructure
4. **Week 4-5**: Implement export engines (PDF, DOCX, JSON)
5. **Week 5-6**: Build white-label configuration system
6. **Week 6-7**: Create admin panel for template management
7. **Week 7-8**: Performance optimization and testing
8. **Week 8**: Production deployment

---

## 💰 Cost Estimate (Self-Hosted)

- **Server**: $20-50/month (DigitalOcean/Hetzner)
- **Database**: Included in server
- **Storage**: $5-10/month (100GB)
- **Domain**: $10-15/year
- **SSL**: Free (Let's Encrypt)
- **Total**: ~$30-70/month

---

**Ready to start? Let me know which phase you'd like to begin with!** 🚀
