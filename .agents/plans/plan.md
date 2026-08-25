# Basement Dwellers Wiki - Project Plan

## 1. Web Summary

**Project Name:** Basement Dwellers Wiki  
**Purpose:** A lightweight, modern wiki website for the "Basement Dwellers" Minecraft server community  
**Core Mission:** Guide players to join the server through an intuitive, beautifully designed platform with integrated blue-map mod support, FAQ, and community information  
**Key Features:**
- Guided player onboarding tutorial
- Blue-map mod integration
- Comprehensive FAQ section
- Community "About Us" page
- Interactive table of contents
- Tabbed content sections
- Modern, premium-looking static site with near-zero JavaScript

## 2. Server Identity

**Title:** Basement Dwellers  
**Tagline:** *"The best adventures start below the surface."*

**Short Description (hero / meta):**  
A cozy, community-driven modded Minecraft server built around craftsmanship, exploration, and good company. Grab your pickaxe — the basement awaits.

**Long Description (About page / server listing):**  
Basement Dwellers is a lightweight, carefully curated modpack server where building matters more than grinding. Whether you're automating your first machine, mapping out sprawling cave cities, or just hanging out by the furnace with friends, our community welcomes players who love to tinker, explore, and build together. With an always-on live map, fair rules, and zero pay-to-win nonsense, it's Minecraft the way it was meant to be played — just a little deeper underground.

**Server listing blurb (one-liner):**  
Modded survival, live world map, friendly community — join the dwellers. ⛏️

## 3. Target Users

| User Segment | Description | Primary Needs |
|--------------|-------------|---------------|
| **New Players** | First-time visitors seeking to join the server | Clear onboarding, easy navigation, quick start guide |
| **Experienced Players** | Regular server members | Detailed FAQ, community info, efficient browsing |
| **Developers** | Site contributors/maintainers | Clean architecture, modular components, easy maintenance |
| **Community Members** | Existing Basement Dwellers community | Personalized experience, tabs for different topics, searchability |

## 4. Core Features

1. **Onboarding Tutorial** - Step-by-step guide for new players to join the server
2. **Blue-Map Mod Integration** - Embedded or linked integration for the bluemap mod
3. **FAQ Section** - Frequently asked questions about server rules, gameplay, technical details
4. **About Us Page** - Server history, mission statement, team information
5. **Table of Contents** - Navigable index linking all major sections
6. **Tabbed Content** - Organized views (e.g., "Getting Started", "Rules", "Resources")
7. **Modern UI** - Premium look with Tailwind CSS, shadcn-like components, minimal JS

## 5. Recommended Tech Stack

| Layer | Technology | Reason |
|-------|------------|---------|
| **Framework** | Astro (or Astro-like static site generator) | Static generation, fast loading, SEO-friendly |
| **Styling** | Tailwind CSS | Utility-first, premium themes, responsive by default |
| **UI Components** | shadcn/ui (via CLI) | Consistent, accessible components with Tailwind integration |
| **Routing** | Astro Nested Routes | Simple, declarative routing for pages and sections |
| **Data Flow** | Client-side hydration (Astro) | Minimal JS, instant performance, near-zero footprint |
| **Build** | Astro build + ESLint | Optimized production builds, linting for quality |
| **Deployment** | Vercel/Netlify (static hosting) | Free tier, CDN, automatic SSL, global distribution |

## 6. Pages/Routes

```
/
├── /about          # About Us page
├── /faq             # FAQ section
├── /tutorial       # Guided player onboarding tutorial
├── /blue-map       # Blue-map mod integration page
└── /tabs           # Main navigation tabs (Getting Started, Rules, Resources, etc.)
```

**Route Structure:**
- `/` - Home page (overview + TOC)
- `/about` - Server history and mission
- `/faq` - Frequently asked questions
- `/tutorial` - Step-by-step joining guide
- `/blue-map` - Blue-map mod integration details
- `/tabs` - Tab-based navigation hub

## 7. Possible Data Model

Since there's no database, data lives as typed content collections / static files in the Astro project:

- **Tutorial Steps** (static array of steps):
  - Step 1: Download prerequisites
  - Step 2: Install the modpack
  - Step 3: Connect to the server
  - Step 4: Explore the live blue-map

- **FAQ Entries** (question → answer, grouped by category)

- **Tab Sections** (static mapping):
  - "Getting Started" → Tutorial + Onboarding
  - "Rules & Guidelines" → FAQ + Community policies
  - "Resources" → Blue-map guides, maps, etc.

## 8. Build Phases

| Phase | Duration | Goals | Deliverables |
|-------|----------|-------|--------------|
| **Phase 1: Foundation** | Week 1 | Set up project structure, basic Astro skeleton, Tailwind + shadcn setup | Project initialized, routing, base templates |
| **Phase 2: Core Content** | Week 2 | Create pages (about, faq, tutorial, blue-map), TOC, tabs | Fully functional static site with all main pages |
| **Phase 3: Polish & Optimization** | Week 3 | Refine UX, add minimal animations, performance tuning, deployment prep | Production-ready site, optimized for speed |
| **Phase 4: Deployment** | Week 4 | Publish to static host | Live site on Vercel/Netlify |

## 9. Risks & Edge Cases

| Risk | Mitigation |
|------|------------|
| **Performance** - Heavy JS blocking rendering | Use Astro's static generation; keep client-side JS minimal (<5KB) |
| **Content Gaps** - Missing FAQ or tutorial steps | Template-driven content with placeholder sections; easy to extend |
| **Mobile Responsiveness** - Poor mobile experience | Tailwind responsive utilities; test on various screen sizes |
| **Integration Complexity** - Blue-map mod API limitations | Abstract integration behind components; fallback to static links if API unavailable |
| **SEO** - Limited dynamic content | Proper meta tags, heading hierarchy, semantic HTML |
| **Maintenance** - Keeping content updated | Modular page components; version-controlled content files |

## 10. Final Copyable Starter Prompt for Coding Agent

```markdown
# Basement Dwellers Wiki - Coding Agent Prompt

You are a senior frontend engineer specializing in Astro-based static sites with shadcn UI components. Your task is to implement the Basement Dwellers Wiki website according to the architectural plan outlined above.

## Project Overview
Build a lightweight, modern wiki website for the "Basement Dwellers" Minecraft server community. The site should feature:
- A guided player onboarding tutorial
- Blue-map mod integration
- FAQ section
- About Us page
- Table of contents and tabbed navigation
- Modern, premium-looking static site with near-zero JavaScript

## Technical Requirements
- Framework: Astro (static generation)
- Styling: Tailwind CSS + shadcn/ui components
- Zero auth, no database, no payments
- Near-zero JavaScript (minimal client-side hydration)
- Responsive design for all devices
- SEO-optimized pages

## Pages to Implement
1. **Home** (`/`) - Overview + Table of Contents
2. **About** (`/about`) - Server history and mission
3. **FAQ** (`/faq`) - Frequently asked questions
4. **Tutorial** (`/tutorial`) - Step-by-step player onboarding
5. **Blue-Map** (`/blue-map`) - Integration details

## Components & Routes
- Use Astro nested routes for page hierarchy
- Implement tabbed navigation on the homepage
- Create reusable shadcn components (cards, buttons, forms)

## Data Model
Each page maintains a simple metadata structure:
- Title, summary, target users, core features
- For the tutorial: step-by-step onboarding flow
- For the FAQ: question-answer pairs
- For the blue-map: integration details

## Success Criteria
- Site loads instantly on mobile and desktop
- All pages are SEO-friendly with proper headings
- No auth or backend dependencies required
- Easy to extend with new sections

## Implementation Notes
- Use Astro's `layout.ts` for shared headers/footers
- Leverage shadcn's `FieldGroup`, `Button`, `Card` for UI consistency
- Keep JavaScript to only what's necessary for interactivity
- Follow accessibility best practices (semantic HTML, ARIA labels)
```
