# PEC Media Production

A production-oriented Next.js 16 App Router portfolio for PEC Media Production.

## Stack

- Next.js 16, React 19, TypeScript, and Tailwind CSS 4
- Server Components with focused Client Component islands
- Sanity CMS with an embedded Studio at `/studio`
- Zod-validated local content fallbacks
- React Hook Form, Zod, Server Actions, and Resend
- Vitest, Playwright, ESLint, and Prettier

## Architecture

- `app/` contains App Router pages, layouts, metadata routes, error/loading states, and Route Handlers.
- `features/` contains page-focused interactive UI.
- `components/` contains shared presentation and layout components.
- `data/content.ts` is the validated fallback when Sanity is missing, empty, invalid, or unavailable.
- `lib/sanity.ts` owns typed Sanity queries, cache tags, normalization, and fallback behavior.
- `schemas/` contains shared Zod contracts for content, environment values, and contact submissions.
- `actions/contact-action.ts` validates and sends contact inquiries through Resend. Inquiries are not persisted.

## Environment

Copy `.env.example` to `.env.local` and provide only the values used by your environment.

```env
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=
SANITY_REVALIDATE_SECRET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production

RESEND_API_KEY=
CONTACT_TO_EMAIL=edemu34@gmail.com
CONTACT_FROM_EMAIL=
```

`SANITY_API_TOKEN`, `SANITY_REVALIDATE_SECRET`, and `RESEND_API_KEY` are server-only secrets. Never prefix them with `NEXT_PUBLIC_` or commit them.

## Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

`npm run check` runs linting, type checking, unit tests, and the production build.

## Content and Revalidation

Sanity is the preferred content source. Every Sanity response is parsed through a Zod schema before rendering. Invalid or empty content falls back to `data/content.ts`.

Configure a Sanity webhook to send `POST /api/revalidate` with:

- Header: `x-sanity-secret: <SANITY_REVALIDATE_SECRET>`
- Body: `{ "_type": "post" }`

Recognized types are `businessInfo`, `service`, `project`, `testimonial`, `post`, and `siteSettings`.

## Contact Delivery

The contact form uses a Zod-validated Server Action and a honeypot field. Valid inquiries are emailed through Resend and are not written to Sanity, a database, or the local filesystem. If Resend is not configured or rejects the message, the user receives a controlled failure response.

Durable distributed rate limiting is intentionally not claimed by the application. Configure Vercel Firewall or another shared rate-limiting service if required.

## Deployment

The project is optimized for Vercel. Set production environment variables in the deployment dashboard, use `https://pecmediaproduction.com` for `SITE_URL`, and rotate any credential that has been pasted into logs, chat, or source code.
