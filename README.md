# Quadratic Funding DAO - Sprint 1 Frontend

A production-grade Next.js 14 application for managing quadratic funding rounds and public good projects.

## 🚀 Features

- ✅ **Next.js 14 App Router** with Server-Side Rendering
- ✅ **Tailwind CSS** with dark/light theme toggle
- ✅ **TypeScript** for type safety
- ✅ **Three.js** interactive 3D hero animation
- ✅ **SEO Optimized** with metadata, OG tags, sitemap, robots.txt
- ✅ **Responsive Design** - Mobile, tablet, and desktop
- ✅ **Glass Morphism** UI with neon gradients
- ✅ **Component Library** - Button, Card, Modal, Toast, Tabs, Accordion, etc.
- ✅ **Wallet Connect** dummy integration
- ✅ **Admin Dashboard** with stats and management tools

## 📁 Project Structure

```
dao/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page with hero & featured projects
│   ├── globals.css             # Global styles and theme
│   ├── providers.tsx           # Next-Themes provider setup
│   ├── robots.ts               # SEO robots.txt
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── rounds/page.tsx         # Browse funding rounds
│   ├── projects/page.tsx       # Browse projects
│   ├── submit/page.tsx         # Submit proposal form
│   ├── admin/page.tsx          # Admin dashboard
│   ├── registry/page.tsx       # Grant registry
│   └── governance/page.tsx     # Governance voting
├── components/
│   ├── Navbar.tsx              # Navigation with mobile menu
│   ├── Hero.tsx                # Hero section with Three.js
│   ├── ThreeHero.tsx           # 3D orb animation
│   ├── FeatureGrid.tsx         # 6 DAO modules grid
│   ├── ProjectCard.tsx         # Project display component
│   ├── Footer.tsx              # Footer with links
│   ├── Button.tsx              # Styled button component
│   ├── Card.tsx                # Glass-morphic card
│   ├── Modal.tsx               # Modal dialog
│   ├── Toast.tsx               # Toast notifications
│   ├── Tabs.tsx                # Tab switcher
│   ├── Accordion.tsx           # Accordion component
│   ├── Breadcrumbs.tsx         # Breadcrumb navigation
│   ├── Skeleton.tsx            # Loading skeleton
│   ├── BentoGrid.tsx           # Bento layout grid
│   ├── ThemeToggle.tsx         # Dark/light toggle
│   └── WalletConnectButton.tsx # Wallet connection
├── lib/utils/
│   ├── seo.ts                  # SEO metadata utilities
│   └── cn.ts                   # Class name merger
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Colors
- **Background**: `#0B0F17` (dark navy)
- **Surface**: `#111827` (slightly lighter navy)
- **Primary**: `#A855F7` (vibrant purple)
- **Secondary**: `#00E5FF` (cyan blue)
- **Accent**: `#00FFA3` (neon green)

### Components
- **Glass**: `glass` class for frosted glass effect
- **Gradients**: `.gradient-text` for gradient text
- **Neon**: `.neon-border` and `.neon-glow` for glowing effects

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📄 Pages

- **`/`** - Home with hero, stats, features, and featured projects
- **`/rounds`** - Browse funding rounds (active, upcoming, past)
- **`/projects`** - Browse and search projects by category
- **`/submit`** - Submit a new project proposal
- **`/admin`** - Admin dashboard with analytics
- **`/registry`** - Grant registry
- **`/governance`** - DAO governance voting

## 🌙 Theme Support

Dark/light mode toggle with localStorage persistence via `next-themes`

## 🔒 SEO Features

- Meta tags and Open Graph
- JSON-LD structured data
- Dynamic sitemap.xml
- robots.txt
- Semantic HTML

## ✅ Build Status

Production build successful! All pages render correctly with proper type safety and styling.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
