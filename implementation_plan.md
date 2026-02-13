# implementation_plan.md

This document outlines the step-by-step plan for building the AI Resume Pro SaaS platform.

## Phase 1: Project Scaffolding & Core Setup
- **Objective**: Establish the monorepo structure and initialize key frameworks.
- [x] Create directory structure (`/client` for Frontend, `/server` for Backend).
- [x] Initialize Next.js 15+ (App Router) in `/client`.
- [x] Initialize NestJS in `/server`.
- [x] Set up TailwindCSS and ShadCN UI in the client.
- [x] Configure PostgreSQL database with Docker (or local) and Prism ORM within `/server`.

## Phase 2: Design System & Frontend Foundation
- **Objective**: Implement a premium, enterprise-grade design system.
- [x] Configure `tailwind.config.ts` with custom color palette (HSL variables) for Light/Dark modes.
- [x] Create core UI components (Button, Input, Card, Modal) using ShadCN/Radix primitives.
- [x] Build layout shell: Navbar, Sidebar, and Dashboard Wrapper.
- [ ] Implement Landing Page with high-fidelity animations (Framer Motion).

## Phase 3: Module 1 - Advanced AI Resume Builder (Core)
- **Objective**: Build the dynamic resume editor.
- [x] Design JSON Schema for Resume Data.
- [x] Build the interactive Resume Editor UI (Left panel: Form, Right panel: Live Preview).
- [x] Implement the Template Engine (Renderer component that takes schema + template ID).
- [x] Create the first 3 templates: "Modern Corporate" (MVP done), "Tech", "Creative".
- [x] Implement "Export to PDF" functionality (using `react-pdf` or server-side generation).

## Phase 4: Backend & Auth
- **Objective**: Secure the platform and manage user data.
- [x] Implement Authentication (JWT / OAuth) in NestJS `auth` module.
- [x] Create User and Resume entities in Prisma.
- [x] Build API endpoints for CRUD operations on Resumes.

## Phase 5: Module 2 - Advanced ATS Score Checker
- **Objective**: Develop the scoring logic.
- [x] Implement simple keyword matching algorithm (Mock UI).
- [x] Integrate OpenAI/Gemini API for semantic analysis (Skeleton & Basic Integration done).
- [x] Create the "Score Card" UI component with breakdown charts.

## Phase 6: Subscriptions & Enterprise Features
- [ ] Integrate Stripe for billing.
- [ ] Implement role-based access control (Admin vs User).

## Phase 7: Polish & Optimization
- [ ] A/B Testing of Templates.
- [ ] Load Testing and Final Security Audit.
