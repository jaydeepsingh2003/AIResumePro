'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid3x3, LayoutGrid, Sparkles, Zap, GraduationCap, Globe, Briefcase, Code } from 'lucide-react';
import { RESUME_TEMPLATES, TemplateCategory, CATEGORY_LABELS } from '@/data/templates';
import { getAllTemplateIds } from '@/components/resume-templates/all-configs';
import Link from 'next/link';

/**
 * 50+ Resume Template Gallery
 * Titanium Noir themed gallery showcasing all templates
 */
export default function TemplateGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return RESUME_TEMPLATES.filter(template => {
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (template.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Category icons
  const categoryIcons: Record<TemplateCategory | 'all', any> = {
    all: Sparkles,
    corporate: Briefcase,
    tech: Code,
    creative: Zap,
    entry: GraduationCap,
    academic: GraduationCap,
    international: Globe,
  };

  // Category colors
  const categoryColors: Record<TemplateCategory | 'all', string> = {
    all: 'from-neon-cyan to-neon-purple',
    corporate: 'from-blue-500 to-blue-700',
    tech: 'from-cyan-500 to-blue-600',
    creative: 'from-pink-500 to-purple-600',
    entry: 'from-green-500 to-emerald-600',
    academic: 'from-indigo-500 to-purple-600',
    international: 'from-orange-500 to-red-600',
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-slate-300">50+ Resume Templates</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase italic">
              <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">Resume</span>
              <br />
              <span className="text-white">Templates.</span>
            </h1>

            <p className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[10px] max-w-xl mx-auto leading-relaxed mb-10">
              Choose from our collection of <br />
              professionally designed resume templates.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-10 mb-12">
              <div className="text-center">
                <div className="text-3xl font-black text-neon-cyan tracking-tighter">{getAllTemplateIds().length}</div>
                <div className="text-[8px] font-black text-slate-700 uppercase tracking-widest mt-1">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-neon-purple tracking-tighter">16</div>
                <div className="text-[8px] font-black text-slate-700 uppercase tracking-widest mt-1">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-neon-cyan tracking-tighter">100+</div>
                <div className="text-[8px] font-black text-slate-700 uppercase tracking-widest mt-1">Styles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-neon-purple tracking-tighter">100%</div>
                <div className="text-[8px] font-black text-slate-700 uppercase tracking-widest mt-1">ATS Friendly</div>
              </div>
            </div>


            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan/50 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 overflow-x-auto">
            {/* Categories */}
            <div className="flex gap-2">
              {(['all', 'corporate', 'tech', 'creative', 'entry', 'academic', 'international'] as const).map((category) => {
                const Icon = categoryIcons[category];
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap
                      ${isActive
                        ? 'bg-gradient-to-r ' + categoryColors[category] + ' text-white shadow-lg'
                        : 'glass text-slate-400 hover:text-white hover:border-white/20'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">
                      {category === 'all' ? 'All Templates' : CATEGORY_LABELS[category as TemplateCategory]}
                    </span>
                    <span className={`
                      text-xs px-2 py-0.5 rounded-full
                      ${isActive ? 'bg-white/20' : 'bg-slate-800'}
                    `}>
                      {category === 'all'
                        ? RESUME_TEMPLATES.length
                        : RESUME_TEMPLATES.filter(t => t.category === category).length
                      }
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 glass rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-neon-cyan text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-neon-cyan text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section >

      {/* Templates Grid */}
      < section className="py-16 px-4" >
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-slate-400">
              Showing <span className="text-neon-cyan font-semibold">{filteredTemplates.length}</span> templates
            </p>
          </div>

          {/* Grid/List View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'flex flex-col gap-4'
              }
            >
              {filteredTemplates.map((template, index) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  index={index}
                  viewMode={viewMode}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No templates found</h3>
              <p className="text-slate-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-20 px-4" >
        <div className="max-w-4xl mx-auto text-center glass rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to build your resume?
          </h2>
          <p className="text-slate-400 mb-8">
            Our templates work with all resume sections.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-bold text-slate-950 hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Create Resume
          </Link>
        </div>
      </section >
    </div >
  );
}

/**
 * Template Card Component
 */
function TemplateCard({
  template,
  index,
  viewMode,
}: {
  template: typeof RESUME_TEMPLATES[0];
  index: number;
  viewMode: 'grid' | 'list';
}) {
  const categoryColors: Record<TemplateCategory, string> = {
    corporate: 'from-blue-500/20 to-blue-700/20 border-blue-500/30',
    tech: 'from-cyan-500/20 to-blue-600/20 border-cyan-500/30',
    creative: 'from-pink-500/20 to-purple-600/20 border-pink-500/30',
    entry: 'from-green-500/20 to-emerald-600/20 border-green-500/30',
    academic: 'from-indigo-500/20 to-purple-600/20 border-indigo-500/30',
    international: 'from-orange-500/20 to-red-600/20 border-orange-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`
        group relative glass rounded-xl overflow-hidden border border-white/10
        hover:border-neon-cyan/50 transition-all duration-300
        ${viewMode === 'list' ? 'flex items-center gap-6 p-4' : 'flex flex-col'}
      `}
    >
      {/* Thumbnail */}
      <div className={`
        relative overflow-hidden bg-slate-900 group
        ${viewMode === 'grid' ? 'aspect-[8.5/11] w-full' : 'w-48 h-64 flex-shrink-0'}
      `}>
        <img
          src={`/thumbnails/${template.id}.png`}
          alt={template.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.querySelector('.fallback-preview')?.classList.remove('hidden');
          }}
        />
        {/* Fallback */}
        <div className="fallback-preview hidden absolute inset-0 flex items-center justify-center bg-slate-800 text-center p-4">
          <div className="text-slate-500 text-xs font-mono">PREVIEW UNAVAILABLE</div>
        </div>

        {/* Category Badge */}
        <div className={`
          absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
          bg-gradient-to-r ${categoryColors[template.category]} backdrop-blur-md border border-white/10 z-10
        `}>
          {CATEGORY_LABELS[template.category]}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className={viewMode === 'grid' ? 'p-6' : 'flex-1'}>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
          {template.name}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/template-test?template=${template.id}`}
            className="flex-1 px-4 py-2 bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/30 rounded-lg text-neon-cyan text-sm font-medium text-center transition-colors"
          >
            Preview
          </Link>
          <Link
            href={`/dashboard?template=${template.id}`}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-slate-950 text-sm font-bold text-center hover:shadow-lg hover:shadow-neon-cyan/30 transition-all"
          >
            Use Template
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
