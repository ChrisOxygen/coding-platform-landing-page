# CodeHubb — Coding Platform Landing Page

Live site: [code-hubb.netlify.app](https://code-hubb.netlify.app)

A responsive landing page for a coding help platform that connects developers with certified engineers for mentorship, problem-solving, and code review.

## Features

- **Hero Section** — CTA with a dashboard preview image and decorative animated circles
- **Social Proof** — Logos from trusted companies (Google, Netflix, Spotify, Dropbox, Disney)
- **Feature Cards** — Highlights platform capabilities like code playgrounds, expert consultations, and guided learning
- **Workflow Section** — Expandable accordion showing how the platform automates developer workflows, with a chatbot CTA
- **Communication Block** — Task automation feature overview with supporting illustration
- **FAQ Section** — Tabbed FAQ accordion with blur effects
- **Pricing Plans** — Three tiers: Starter ($44), Professional ($88), Advance ($120) with feature breakdowns
- **Integrations Section** — Floating icons for 11+ integrations (GitHub, Slack, Notion, Trello, Shopify, etc.)
- **CTA Banner** — 14-day free trial call-to-action
- **Mobile Navigation** — Animated slide-in menu using Framer Motion with a hamburger toggle

## Tech Stack

- **React 18** — Component-based UI
- **Vite** — Fast dev server and production builds
- **SASS** — Modular BEM-structured stylesheets
- **Framer Motion** — Mobile menu animations
- **ESLint + Prettier** — Code quality and formatting

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx               # Main landing page layout
├── DataProvider.jsx      # React context for shared data and window state
├── components/
│   ├── SiteHeader.jsx    # Navigation with mobile toggle
│   ├── SiteFooter.jsx    # Footer with links and subscription form
│   ├── FeatureBox.jsx    # Reusable feature card
│   ├── FaqBlock.jsx      # FAQ accordion with tabs
│   ├── WorkflowFeature.jsx  # Expandable workflow list
│   ├── MobileMenu.jsx    # Animated mobile nav (Framer Motion)
│   └── MobileNavToggle.jsx  # Hamburger button
└── sass/                 # SCSS stylesheets (BEM methodology)
data.json                 # Static content (nav, features, FAQ, logos)
```
