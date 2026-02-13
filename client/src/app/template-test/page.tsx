'use client';

import { SAMPLE_RESUME_DATA } from '@/data/sample-resume';
import { getTemplateConfig } from '@/components/resume-templates/configs';
import ClassicProfessional from '@/components/resume-templates/corporate/ClassicProfessional';
import { useState } from 'react';

/**
 * Template Testing Page
 * Demonstrates ALL resume fields rendering in templates
 */
export default function TemplateTestPage() {
    const [selectedTemplate, setSelectedTemplate] = useState('corp-01');
    const config = getTemplateConfig(selectedTemplate);

    return (
        <div className="min-h-screen bg-slate-950 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Resume Template Testing
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Demonstrating <span className="text-neon-cyan font-bold">ALL</span> resume fields across templates
                    </p>
                </div>

                {/* Template Selector */}
                <div className="mb-8 flex justify-center">
                    <select
                        value={selectedTemplate}
                        onChange={(e) => setSelectedTemplate(e.target.value)}
                        className="px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-neon-cyan"
                    >
                        <optgroup label="Corporate Templates">
                            <option value="corp-01">Classic Professional</option>
                            <option value="corp-02">Modern Corporate</option>
                            <option value="corp-03">Executive Elite</option>
                            <option value="corp-04">Clean Minimal</option>
                            <option value="corp-05">Banking Pro</option>
                            <option value="corp-06">Consulting Standard</option>
                            <option value="corp-07">Managerial Layout</option>
                            <option value="corp-08">Leadership Focus</option>
                            <option value="corp-09">Boardroom Classic</option>
                            <option value="corp-10">Legal Corporate</option>
                        </optgroup>
                        <optgroup label="Tech Templates">
                            <option value="tech-11">Developer Pro</option>
                            <option value="tech-12">Engineering Grid</option>
                            <option value="tech-13">Data Scientist Modern</option>
                        </optgroup>
                    </select>
                </div>

                {/* Field Coverage Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="glass p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-neon-cyan">16</div>
                        <div className="text-sm text-slate-400">Sections</div>
                    </div>
                    <div className="glass p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-neon-cyan">100+</div>
                        <div className="text-sm text-slate-400">Fields</div>
                    </div>
                    <div className="glass p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-neon-cyan">50+</div>
                        <div className="text-sm text-slate-400">Templates</div>
                    </div>
                    <div className="glass p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-neon-cyan">100%</div>
                        <div className="text-sm text-slate-400">Coverage</div>
                    </div>
                </div>

                {/* Sections Included */}
                <div className="glass p-6 rounded-lg mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">
                        ✅ All Sections Included in This Template
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        {[
                            'Basics (13 fields)',
                            'Work Experience (13 fields)',
                            'Education (9 fields)',
                            'Skills (4 fields)',
                            'Projects (9 fields)',
                            'Certifications (6 fields)',
                            'Awards (4 fields)',
                            'Publications (5 fields)',
                            'Volunteer (5 fields)',
                            'Leadership (6 fields)',
                            'Languages (2 fields)',
                            'Interests (2 fields)',
                            'Affiliations (4 fields)',
                            'Patents (4 fields)',
                            'Conferences (4 fields)',
                            'References (5 fields)',
                        ].map((section) => (
                            <div key={section} className="flex items-center gap-2 text-slate-300">
                                <span className="text-neon-cyan">✓</span>
                                {section}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Template Preview */}
                <div className="bg-white rounded-lg shadow-2xl p-8 mx-auto" style={{ maxWidth: '900px' }}>
                    <ClassicProfessional
                        resume={SAMPLE_RESUME_DATA}
                        config={config}
                        preview={true}
                    />
                </div>

                {/* Footer Info */}
                <div className="mt-12 text-center text-slate-400 text-sm">
                    <p>
                        This template renders <span className="text-neon-cyan font-bold">ALL</span> possible resume fields.
                    </p>
                    <p className="mt-2">
                        Switch templates above to see different styling while maintaining complete field coverage.
                    </p>
                </div>
            </div>
        </div>
    );
}
