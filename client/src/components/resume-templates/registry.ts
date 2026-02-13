'use client';

import { ComponentType } from 'react';
import { TemplateProps } from '@/types/template';
import ClassicProfessional from './corporate/ClassicProfessional';

/**
 * Template Registry
 * Maps template IDs to their React components
 * All templates use the same BaseTemplate rendering engine
 */

// Universal Template Component
// Since all templates use BaseTemplate with different configs,
// we can use a single component for all templates
const UniversalTemplate = ClassicProfessional;

/**
 * Template Component Registry
 * Maps each template ID to its component
 */
export const TEMPLATE_REGISTRY: Record<string, ComponentType<TemplateProps>> = {
    // CORPORATE (1-10)
    'corp-01': UniversalTemplate,
    'corp-02': UniversalTemplate,
    'corp-03': UniversalTemplate,
    'corp-04': UniversalTemplate,
    'corp-05': UniversalTemplate,
    'corp-06': UniversalTemplate,
    'corp-07': UniversalTemplate,
    'corp-08': UniversalTemplate,
    'corp-09': UniversalTemplate,
    'corp-10': UniversalTemplate,

    // TECH (11-20)
    'tech-11': UniversalTemplate,
    'tech-12': UniversalTemplate,
    'tech-13': UniversalTemplate,
    'tech-14': UniversalTemplate,
    'tech-15': UniversalTemplate,
    'tech-16': UniversalTemplate,
    'tech-17': UniversalTemplate,
    'tech-18': UniversalTemplate,
    'tech-19': UniversalTemplate,
    'tech-20': UniversalTemplate,

    // CREATIVE (21-30)
    'creative-21': UniversalTemplate,
    'creative-22': UniversalTemplate,
    'creative-23': UniversalTemplate,
    'creative-24': UniversalTemplate,
    'creative-25': UniversalTemplate,
    'creative-26': UniversalTemplate,
    'creative-27': UniversalTemplate,
    'creative-28': UniversalTemplate,
    'creative-29': UniversalTemplate,
    'creative-30': UniversalTemplate,

    // ENTRY-LEVEL (31-40)
    'entry-31': UniversalTemplate,
    'entry-32': UniversalTemplate,
    'entry-33': UniversalTemplate,
    'entry-34': UniversalTemplate,
    'entry-35': UniversalTemplate,
    'entry-36': UniversalTemplate,
    'entry-37': UniversalTemplate,
    'entry-38': UniversalTemplate,
    'entry-39': UniversalTemplate,
    'entry-40': UniversalTemplate,

    // ACADEMIC (41-45)
    'academic-41': UniversalTemplate,
    'academic-42': UniversalTemplate,
    'academic-43': UniversalTemplate,
    'academic-44': UniversalTemplate,
    'academic-45': UniversalTemplate,

    // INTERNATIONAL (46-50)
    'intl-46': UniversalTemplate,
    'intl-47': UniversalTemplate,
    'intl-48': UniversalTemplate,
    'intl-49': UniversalTemplate,
    'intl-50': UniversalTemplate,
};

/**
 * Get template component by ID
 * Returns ClassicProfessional as fallback
 */
export function getTemplateComponent(templateId: string): ComponentType<TemplateProps> {
    return TEMPLATE_REGISTRY[templateId] || ClassicProfessional;
}

/**
 * Check if template component exists
 */
export function hasTemplateComponent(templateId: string): boolean {
    return templateId in TEMPLATE_REGISTRY;
}

/**
 * Get all registered template IDs
 */
export function getRegisteredTemplateIds(): string[] {
    return Object.keys(TEMPLATE_REGISTRY);
}
