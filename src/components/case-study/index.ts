/**
 * Case Study Components
 * Carpeta para mantener organizados los componentes de case studies
 * 
 * Estructura:
 * - CaseStudyTemplate.tsx - Componente principal orquestador
 * - CaseStudyHero.tsx - Sección hero
 * - CaseStudySummary.tsx - Resumen + ficha del proyecto
 * - CaseStudyChallenge.tsx - Challenge section
 * - CaseStudyApproach.tsx - Approach section
 * - CaseStudyPhases.tsx - Phases grid (3 columnas)
 * - CaseStudyResults.tsx - Results section
 * - CaseStudyHighlights.tsx - Highlights section
 * - CaseStudyLearnings.tsx - Learnings section
 * 
 * Objetivo: Mantener cada sección bajo 100 LOC para mejor mantenibilidad
 * 
 * Estado de Migration: PLANEADO
 * - [x] Carpeta creada
 * - [ ] CaseStudyHero - NEXT
 * - [ ] CaseStudySummary
 * - [ ] Otros componentes
 * - [ ] Update imports en CaseStudyTemplate.tsx
 * - [ ] Verificar compilación
 */

export { CaseStudyHero } from './CaseStudyHero';
export type { CaseStudyHeroProps, HeroStat } from './CaseStudyHero';
export { CaseStudySection } from './CaseStudySection';
export { CaseStudyNotFound } from './CaseStudyNotFound';
