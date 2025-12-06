# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dynamic content management with Supabase integration, SEO optimization, and a clean, maintainable codebase.

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun
- Supabase account (for database)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Optional: For server-side operations
SUPABASE_URL=your-supabase-project-url
SUPABASE_ANON_KEY=your-anon-key
```

**Important**: The `SERVICE_ROLE_KEY` is required on the server (API routes) for insert/update/delete operations. Never expose it to the browser.

4. Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:7000](http://localhost:7000).

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── links/        # Links API endpoints
│   ├── ess-api/          # ESS API documentation page
│   ├── experience/        # Experience page
│   ├── links/             # Links management page
│   ├── portfolio/         # Portfolio pages
│   │   ├── [id]/         # Dynamic portfolio detail page
│   │   └── page.tsx      # Portfolio listing page
│   ├── fonts/             # Font files
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
│
├── components/            # React components
│   ├── portfolio/        # Portfolio-specific components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   └── *.tsx            # Feature components
│
├── docs/                  # Documentation
│   └── ess-api-contract-be-laravel.yaml
│
├── hooks/                 # Custom React hooks
│   └── use-mobile.tsx
│
├── lib/                   # Utility libraries
│   ├── config/           # Configuration files
│   │   └── site-config.ts
│   ├── supabase/         # Supabase integration
│   │   ├── client.ts     # Supabase client setup
│   │   └── data.ts       # Data fetching functions
│   ├── utils/            # Utility functions
│   │   ├── canonical-url.ts
│   │   └── structured-data.ts
│   ├── data.ts           # Local data fallback
│   ├── links-data.ts     # Links data
│   └── utils.ts          # General utilities
│
├── public/               # Static assets
│   ├── activity/        # Activity images
│   ├── client/          # Client logos
│   ├── cv/              # CV files
│   ├── experience/      # Experience logos
│   ├── portfolio/       # Portfolio images
│   ├── sertifikat/      # Certificates
│   ├── tech/            # Technology icons
│   └── robots.txt       # Robots.txt file
│
├── scripts/              # Utility scripts
│   ├── database/        # Database migration scripts
│   │   └── migrate-to-supabase.ts
│   └── verification/    # Verification scripts
│       ├── verify-portfolio-images.ts
│       └── verify-unsplash-urls.ts
│
├── supabase/            # Supabase configuration
│   └── schema.sql       # Database schema
│
├── types/               # TypeScript type definitions
│   └── global.d.ts
│
├── .env                 # Environment variables (not in git)
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

### Key Directories

- **`app/`**: Next.js App Router directory containing all pages and API routes
- **`components/`**: React components organized by feature
  - `portfolio/`: Components specific to portfolio pages
  - `ui/`: Reusable UI components from shadcn/ui
  - Root level: Feature-specific components (hero, header, footer, etc.)
- **`lib/`**: Utility libraries organized by purpose
  - `config/`: Site configuration
  - `supabase/`: Supabase client and data functions
  - `utils/`: General utility functions
  - Root level: Data files and general utilities
- **`scripts/`**: Utility scripts for maintenance
  - `database/`: Database migration and setup scripts
  - `verification/`: Scripts to verify data integrity

## 🗄️ Database Setup

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and API keys from the Supabase dashboard
3. Run the database schema:
   - Go to Supabase Dashboard → SQL Editor
   - Copy and paste the contents of `supabase/schema.sql`
   - Click **Run** to execute the SQL

This will create the following tables:
- `portfolio_items` - Portfolio projects
- `work_experiences` - Work history
- `education_experiences` - Education history
- `organization_experiences` - Organization history
- `technologies` - Technology stack
- `links` - External links (optional)

### Links Table (Optional)

If you want to use the links management feature, create a `links` table with these columns:

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

### Migrate Data to Supabase

After setting up the database schema, migrate your data:

```bash
npm run migrate:supabase
```

This script will:
- Read all data from `lib/data.ts`
- Transform and insert it into Supabase
- Show progress for each item migrated

**Note**: The app has a built-in fallback mechanism. If Supabase is not configured or unavailable, it will automatically fall back to `lib/data.ts`.

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server (port 7000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Maintenance
npm run lint                    # Run ESLint
npm run migrate:supabase        # Migrate data to Supabase
npm run verify:portfolio-images # Verify portfolio images
npm run verify:unsplash-urls    # Verify Unsplash URLs
```

## 🎨 Features

- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Dynamic Content**: Supabase integration with local data fallback
- **SEO Optimized**: Canonical URLs, structured data, sitemap
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Theme switching support
- **Performance**: Image optimization, lazy loading, code splitting
- **Type Safety**: Full TypeScript support

## 🔍 SEO Configuration

### Canonical URLs

All pages have canonical URLs pointing to the production domain (`https://setiadyanwar.github.io`) to prevent duplicate content issues.

**Implementation**:
- `metadataBase` is set in `app/layout.tsx`
- Each page has `alternates.canonical` in its metadata

### X-Robots-Tag Header

The `next.config.mjs` includes headers configuration to prevent indexing of Vercel subdomain:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: '*.vercel.app'
        }
      ],
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noindex'
        }
      ]
    }
  ];
}
```

### Verification

To verify SEO implementation:

1. **Check canonical URLs**:
   ```bash
   curl -s https://setiadyanwar.github.io | grep "canonical"
   ```

2. **Check X-Robots-Tag**:
   ```bash
   curl -I https://setiadyanwar-github-io.vercel.app
   ```

3. **Google Search Console**:
   - Submit sitemap: `https://setiadyanwar.github.io/sitemap.xml`
   - Request indexing for main pages
   - Monitor indexing status

## 🛠️ Maintenance

### Verify Portfolio Images

Check if all portfolio images are present and valid:

```bash
npm run verify:portfolio-images
```

### Verify Unsplash URLs

Check and fix broken Unsplash image URLs:

```bash
npm run verify:unsplash-urls
```

This script will:
- Test all Unsplash URLs in the database
- Replace broken URLs with valid ones
- Update the database automatically

## 📦 Dependencies

### Core
- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations

### UI Components
- **shadcn/ui**: Reusable UI components
- **Lucide React**: Icons
- **next-themes**: Theme management

### Data & API
- **Supabase**: Database and backend
- **@supabase/supabase-js**: Supabase client

### Utilities
- **js-yaml**: YAML parsing (for API docs)
- **swagger-ui-react**: API documentation viewer

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (for API routes)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Supabase Documentation](https://supabase.com/docs) - Supabase guides and API reference
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS utility classes

## 📝 Notes

- All Supabase-related code is in `lib/supabase/`
- Configuration files are in `lib/config/`
- Utility functions are in `lib/utils/`
- The app automatically falls back to local data if Supabase is unavailable
- All console logs are disabled in production mode

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
