This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

## Environment Variables

Create an `.env.local` (or copy `env.example`) with the following values:

```
SUPABASE_URL=your-supabase-project-url
SUPABASE_ANON_KEY=public-anon-key
SUPABASE_SERVICE_ROLE_KEY=service-role-key
```

The `SERVICE_ROLE_KEY` is required on the server (API routes) for insert/update/delete operations. Never expose it to the browser.

## Database Setup

Create a `links` table in Supabase with these columns:

| Column           | Type | Notes                    |
| ---------------- | ---- | ------------------------ |
| `id`             | text | primary key              |
| `title`          | text |                          |
| `url`            | text |                          |
| `icon`           | text | optional                 |
| `section`        | text | optional group label     |
| `preview_text`   | text | optional preview content |
| `preview_domain` | text | optional preview domain  |
| `preview_image`  | text | optional image URL       |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
