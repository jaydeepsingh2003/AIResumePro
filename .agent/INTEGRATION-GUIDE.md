# 🔌 Integration Guide: Connecting All Components

## Overview

This guide shows how to integrate the 50-template system with ResumeEditor, PDF export, and live preview.

---

## 1️⃣ ResumeEditor Integration

### **Step 1: Add Template Picker to ResumeEditor**

```typescript
// In ResumeEditor.tsx
import { useState } from 'react';
import { getTemplateComponent } from '@/components/resume-templates/registry';
import { getTemplateConfig } from '@/components/resume-templates/all-configs';
import { RESUME_TEMPLATES } from '@/data/templates';

// Add state for template picker
const [showTemplatePicker, setShowTemplatePicker] = useState(false);

// Template picker UI
<button
  onClick={() => setShowTemplatePicker(true)}
  className="px-4 py-2 bg-neon-cyan text-slate-950 rounded-lg"
>
  Change Template
</button>

{showTemplatePicker && (
  <TemplatePicker
    currentTemplateId={resume.style.templateId}
    onSelect={(templateId) => {
      onUpdate({
        ...resume,
        style: { ...resume.style, templateId }
      });
      setShowTemplatePicker(false);
    }}
    onClose={() => setShowTemplatePicker(false)}
  />
)}
```

### **Step 2: Live Preview with Selected Template**

```typescript
// In ResumeEditor.tsx or ResumePreview component
import { getTemplateComponent } from '@/components/resume-templates/registry';
import { getTemplateConfig } from '@/components/resume-templates/all-configs';

function ResumePreview({ resume }: { resume: Resume }) {
  const TemplateComponent = getTemplateComponent(resume.style.templateId || 'corp-01');
  const config = getTemplateConfig(resume.style.templateId || 'corp-01');

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      <TemplateComponent
        resume={resume}
        config={config}
        preview={true}
      />
    </div>
  );
}
```

---

## 2️⃣ Template Picker Component

### **Create TemplatePicker.tsx**

```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { RESUME_TEMPLATES, TemplateCategory, CATEGORY_LABELS } from '@/data/templates';

interface TemplatePickerProps {
  currentTemplateId: string;
  onSelect: (templateId: string) => void;
  onClose: () => void;
}

export default function TemplatePicker({
  currentTemplateId,
  onSelect,
  onClose,
}: TemplatePickerProps) {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = RESUME_TEMPLATES.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">Choose Template</h2>
            <p className="text-sm text-slate-400">All templates support all fields</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan/50"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 p-6 border-b border-white/10 overflow-x-auto">
          {(['all', 'corporate', 'tech', 'creative', 'entry', 'academic', 'international'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors
                ${selectedCategory === category
                  ? 'bg-neon-cyan text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
                }
              `}
            >
              {category === 'all' ? 'All' : CATEGORY_LABELS[category as TemplateCategory]}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => onSelect(template.id)}
                className={`
                  group relative p-4 rounded-lg border transition-all
                  ${currentTemplateId === template.id
                    ? 'border-neon-cyan bg-neon-cyan/10'
                    : 'border-white/10 hover:border-neon-cyan/50 bg-slate-800'
                  }
                `}
              >
                <div className="aspect-[8.5/11] bg-slate-700 rounded mb-3 flex items-center justify-center">
                  <span className="text-xs text-slate-500">Preview</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{template.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{template.description}</p>
                
                {currentTemplateId === template.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center">
                    <span className="text-slate-950 text-xs">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
```

---

## 3️⃣ PDF Export Integration

### **Install PDF Library**

```bash
npm install html2pdf.js
npm install @types/html2pdf.js --save-dev
```

### **Create PDF Export Function**

```typescript
// src/lib/pdf-export.ts
import html2pdf from 'html2pdf.js';
import { Resume } from '@/types/resume';
import { getTemplateConfig } from '@/components/resume-templates/all-configs';
import { renderToString } from 'react-dom/server';
import ClassicProfessional from '@/components/resume-templates/corporate/ClassicProfessional';

export async function exportResumeToPDF(resume: Resume, filename: string = 'resume.pdf') {
  const config = getTemplateConfig(resume.style.templateId || 'corp-01');
  
  // Render template to HTML string
  const htmlString = renderToString(
    <ClassicProfessional resume={resume} config={config} preview={false} />
  );

  // PDF options
  const options = {
    margin: 0,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  // Generate PDF
  await html2pdf().set(options).from(htmlString).save();
}
```

### **Add Export Button to ResumeEditor**

```typescript
// In ResumeEditor.tsx
import { exportResumeToPDF } from '@/lib/pdf-export';
import { Download } from 'lucide-react';

<button
  onClick={() => exportResumeToPDF(resume, `${resume.content.basics.name}-resume.pdf`)}
  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-slate-950 font-bold"
>
  <Download className="w-4 h-4" />
  Export PDF
</button>
```

---

## 4️⃣ Dashboard Integration

### **Update Dashboard to Show Template Gallery**

```typescript
// In dashboard/page.tsx
import Link from 'next/link';
import { FileText, Sparkles } from 'lucide-react';

<Link
  href="/templates"
  className="glass p-6 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all"
>
  <div className="flex items-center gap-4 mb-4">
    <div className="p-3 bg-neon-purple/20 rounded-lg">
      <Sparkles className="w-6 h-6 text-neon-purple" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-white">Browse Templates</h3>
      <p className="text-sm text-slate-400">50+ professional designs</p>
    </div>
  </div>
  <div className="text-neon-cyan text-sm font-medium">
    View Gallery →
  </div>
</Link>
```

---

## 5️⃣ URL Parameter Integration

### **Support Template Selection via URL**

```typescript
// In dashboard or editor page
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function EditorPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');

  useEffect(() => {
    if (templateId) {
      // Auto-select template from URL
      onUpdate({
        ...resume,
        style: { ...resume.style, templateId }
      });
    }
  }, [templateId]);

  // Rest of component...
}
```

---

## 6️⃣ Testing Integration

### **Test All Templates**

```typescript
// Create test page: src/app/test-all-templates/page.tsx
'use client';

import { getAllTemplateIds } from '@/components/resume-templates/all-configs';
import { getTemplateComponent } from '@/components/resume-templates/registry';
import { getTemplateConfig } from '@/components/resume-templates/all-configs';
import { SAMPLE_RESUME_DATA } from '@/data/sample-resume';

export default function TestAllTemplatesPage() {
  const templateIds = getAllTemplateIds();

  return (
    <div className="p-8 space-y-12">
      {templateIds.map((templateId) => {
        const Template = getTemplateComponent(templateId);
        const config = getTemplateConfig(templateId);

        return (
          <div key={templateId} className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-bold mb-4">{templateId}</h2>
            <div className="bg-white shadow-lg">
              <Template resume={SAMPLE_RESUME_DATA} config={config} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

---

## 7️⃣ Complete Integration Checklist

### **ResumeEditor**
- [ ] Add template picker button
- [ ] Implement TemplatePicker component
- [ ] Add live preview with selected template
- [ ] Support template switching
- [ ] Persist template selection

### **PDF Export**
- [ ] Install html2pdf.js
- [ ] Create PDF export function
- [ ] Add export button to editor
- [ ] Test all templates export correctly
- [ ] Ensure all fields are included

### **Navigation**
- [ ] Add "Templates" link to navbar
- [ ] Add template gallery card to dashboard
- [ ] Support URL parameters for template selection
- [ ] Add breadcrumbs for navigation

### **Testing**
- [ ] Test all 50 templates render correctly
- [ ] Test template switching
- [ ] Test PDF export for each category
- [ ] Test responsive design
- [ ] Test field coverage

---

## 🎯 Quick Start Commands

```bash
# Navigate to templates gallery
http://localhost:3000/templates

# Test specific template
http://localhost:3000/template-test?template=corp-01

# Use template in dashboard
http://localhost:3000/dashboard?template=tech-15

# Test all templates
http://localhost:3000/test-all-templates
```

---

## 📝 Example: Complete Flow

1. **User visits gallery** → `/templates`
2. **Browses templates** → Filters by category, searches
3. **Clicks "Use Template"** → Redirected to `/dashboard?template=corp-01`
4. **Fills resume data** → All fields supported
5. **Previews live** → Sees template with their data
6. **Switches template** → Opens template picker, selects new one
7. **Exports PDF** → Clicks export, downloads PDF with all fields

---

## ✅ Integration Complete!

All components are ready to connect. Follow the steps above to integrate the 50-template system with your existing ResumeEditor and dashboard.

**Status**: 🟢 Ready for Integration
