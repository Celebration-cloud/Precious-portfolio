# PEC Media Production - Creative Agency Portfolio Website

A premium, modern Next.js portfolio website for **PEC Media Production** (a creative media agency specializing in video production, video editing, photography, cinematography, and CV revamp services).

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components, and Server Actions)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Prisma](https://www.prisma.io/) with [Neon PostgreSQL](https://neon.tech/) (with automatic local filesystem JSON data-fallbacks)
- **Content Management**: [Sanity CMS](https://www.sanity.io/) (with embedded Studio at `/studio` and complete client-side static content fallbacks)
- **Form Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)
- **Email Service**: [Resend](https://resend.com/)

---

## 🏛️ Architecture System

This project is built using a decoupled **5-Layer SaaS Architecture**:

1. **Presentation Layer (`/app`, `/components`, `/features`)**: Renders components and handles layouts. React Server Components (RSC) are prioritized, with Client Components utilized for animations (Framer Motion) and interactive forms.
2. **Application Layer (`/actions`, `/services`)**: Orchestrates actions and business flows (e.g. form submissions, validating payloads with Zod, saving to repositories, and sending emails via Resend).
3. **Domain Layer (`/domain/entities`, `/domain/interfaces`)**: Core enterprise rules, models, and interfaces (like repository contracts) isolated from framework dependencies.
4. **Data Layer (`/repositories`, `/database`)**: Manages data persistence. Uses `PrismaClient` to interface with PostgreSQL, or automatically falls back to secure local JSON file logging if the database is offline or not configured.
5. **Infrastructure Layer (`/lib`)**: Bridges external integrations (e.g., Sanity client configuration, Resend email dispatchers).

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### 2. Environment Variables Setup
Create a `.env` file in the root directory and specify the following variables:

```env
# General
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Database (Neon PostgreSQL)
DATABASE_URL="your-postgresql-database-url"

# Sanity CMS Credentials
SANITY_PROJECT_ID="71wqvxpw"
SANITY_DATASET="production"
SANITY_API_TOKEN="your-sanity-write-token"

# Resend Email Service
RESEND_API_KEY="your-resend-api-key"
CONTACT_TO_EMAIL="recipient@example.com"
CONTACT_FROM_EMAIL="onboarding@resend.dev"
```

### 3. Installation & Run
Install dependencies:
```bash
npm install
```

Run in development mode:
```bash
npm run dev
```

Generate production build:
```bash
npm run build
```

---

## 🎨 Content Management & Sanity Studio

Sanity Studio is **embedded directly** inside this project. 
- You can access the CMS manager by visiting `/studio` in your browser.
- Authenticate with your Sanity developer account to modify services, testimonials, project lists, blog posts, and site metadata.
- **Fail-Safe Fallbacks**: If the Sanity CMS credentials are not configured or the network is offline, the site will automatically fetch layout and text data from `/src/data/content.ts` seamlessly.

---

## 🔒 Security Measures

- **HTTP Security Headers**: Secure headers (including `CSP`, `X-Frame-Options`, `X-Content-Type-Options`, and `Referrer-Policy`) are applied via `next.config.ts`.
- **Form Rate Limiting**: Next.js Server Actions implement sliding window rate-limiting for form submissions to protect endpoints against bot attacks.
- **robots.txt**: Standard search engine rules are implemented in `/public/robots.txt` which disallows crawlers from accessing `/studio/` or `/api/` endpoints.
