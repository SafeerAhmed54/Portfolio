# Project Structure

## Root Directory Layout
```
portfolio/
├── app/                    # Next.js App Router directory
├── components/             # Reusable React components
├── public/                 # Static assets
├── .kiro/                  # Kiro AI assistant configuration
├── .next/                  # Next.js build output (auto-generated)
├── node_modules/           # Dependencies (auto-generated)
└── config files            # Various configuration files
```

## App Directory (`/app`)
- **layout.tsx** - Root layout with metadata and font configuration
- **page.tsx** - Main homepage component orchestrating all sections
- **globals.css** - Global styles, custom animations, and Tailwind imports
- **favicon.ico** - Site favicon

## Components Directory (`/components`)
All components are functional React components using TypeScript:

### Core Layout Components
- **header.tsx** - Fixed navigation header with scroll effects
- **background.tsx** - Animated background effects
- **interactive-cursor.tsx** - Custom cursor implementation
- **mouse-lights.tsx** - Mouse-following ambient lighting

### Content Section Components
- **home.tsx** - Hero section with main introduction
- **about.tsx** - About section
- **services.tsx** - Services offered
- **education.tsx** - Educational background
- **experience.tsx** - Work experience
- **project.tsx** - Portfolio projects showcase
- **contact.tsx** - Contact information and form
- **skills.tsx** & **skillsPage.tsx** - Skills presentation

### Design Components
- **design.tsx** & **design2.tsx** - Additional design elements

## Public Directory (`/public`)
- **Images** - Profile photos, project screenshots, technology icons
- **fonts/** - Custom font files (Satoshi family)
- **Resume PDF** - Downloadable resume file
- **SVG Icons** - Various icon assets

## Configuration Files
- **package.json** - Dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **next.config.ts** - Next.js configuration
- **eslint.config.mjs** - ESLint rules
- **postcss.config.mjs** - PostCSS configuration
- **next-env.d.ts** - Next.js TypeScript declarations

## Naming Conventions
- Components use PascalCase (e.g., `InteractiveCursor`)
- Files use kebab-case (e.g., `interactive-cursor.tsx`)
- All components are default exports
- Use descriptive, semantic naming

## Component Architecture
- All components use "use client" directive for client-side interactivity
- Framer Motion for animations and transitions
- Tailwind CSS for styling with custom CSS variables
- Responsive design patterns throughout
- Section-based layout with anchor navigation