import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// @ts-ignore - allow side-effect global css import (no types)
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedCursor from "@/components/animated-cursor"
import { personJsonLd, websiteJsonLd, organizationJsonLd } from "@/lib/utils/structured-data"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ConditionalLayout from "@/components/conditional-layout"
import { siteConfig } from "@/lib/config/site-config"
import AnalyticsTracker from "@/components/analytics-tracker"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

// Construct absolute URL for OG Image to ensure social media platforms can find it
const ogImageUrl = new URL(siteConfig.ogImage, siteConfig.url).toString()

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    template: "%s | Setiady Ibrahim Anwar"
  },
  description: "Professional Frontend Developer & UI/UX Designer from Indonesia. BNSP-Certified with 2+ years experience building modern web applications. Expert in React, Next.js, Vue.js, Laravel, TypeScript, and Tailwind CSS. Founder of Kreavoks Digital Agency. Available for freelance projects and full-time opportunities.",
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "Frontend Developer", "UI/UX Designer", "React Developer", "Next.js Developer", "Vue.js Developer", "Laravel Developer", "JavaScript Developer", "TypeScript Developer", "Web Developer", "Full Stack Developer", "React.js", "Next.js", "Vue.js", "Laravel", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Git", "GitHub", "UI Design", "UX Design", "Web Design", "Mobile App Design", "Responsive Design", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping", "Wireframing", "User Experience", "User Interface", "Web Developer Indonesia", "Frontend Developer Jakarta", "UI/UX Designer Tangerang", "Web Developer Tangerang", "Digital Agency Tangerang", "Web Developer Bogor", "Frontend Developer Bogor", "UI/UX Designer Bogor", "Web Developer West Java", "Freelance Web Developer", "Web Development Services", "Custom Website Development", "E-commerce Development", "Portfolio Website", "Setiady Ibrahim Anwar", "Setiady Anwar", "Setiady Ibrahim", "IPB University", "Institut Pertanian Bogor", "Bogor Agricultural University", "IPB Student", "IPB Graduate", "Bogor", "West Java", "Indonesia", "BNSP Certified", "Certified Web Developer", "Professional Web Developer", "Experienced Developer", "2+ Years Experience", "Kreavoks Digital Agency", "Kreavoks", "Digital Agency", "Software Development", "Web Application", "Mobile Application", "Progressive Web App", "PWA", "API Development", "RESTful API", "GraphQL", "Microservices", "Cloud Computing", "AWS", "Vercel", "Netlify", "Hire Web Developer", "Web Development Company", "Custom Software Development", "Website Maintenance", "SEO Optimization", "Performance Optimization", "Code Review", "Technical Consulting", "Project Management", "Agile Development", "IPB Alumni", "IPB Graduate", "Bogor Agricultural University Alumni", "Computer Science IPB", "Informatika IPB", "Teknologi Informasi IPB", "GDG IPB", "Google Developer Group IPB", "GDGOC IPB", "Google Developer Group on Campus IPB", "Student Developer", "Campus Developer", "University Developer", "Setiady Portfolio", "Setiady Ibrahim Anwar Portfolio", "Setiady Developer", "Setiady UI/UX", "Setiady Web Developer", "Setiady Frontend", "Setiady React Developer", "Setiady Next.js Developer"
  ],
  authors: [{ name: "Setiady Ibrahim Anwar" }],
  creator: "Setiady Ibrahim Anwar",
  publisher: "Setiady Ibrahim Anwar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: "Setiady Ibrahim Anwar Portfolio",
    title: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    description: "Professional Frontend Developer & UI/UX Designer from Indonesia. BNSP-Certified with 2+ years experience building modern web applications. Expert in React, Next.js, Vue.js, Laravel, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    description: "Professional Frontend Developer & UI/UX Designer from Indonesia. BNSP-Certified with 2+ years experience building modern web applications. Expert in React, Next.js, Vue.js, Laravel, TypeScript, and Tailwind CSS.",
    images: [ogImageUrl],
    creator: "@setiadyanwarr",
    site: "@setiadyanwarr",
  },
  // Additional meta tags for better social media support
  other: {
    // Facebook/Meta (Instagram, Threads, Messenger)
    "fb:app_id": "", // Optional: Add your Facebook App ID if you have one
    "og:image:secure_url": ogImageUrl,
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",

    // Twitter/X specific
    "twitter:image:src": ogImageUrl,
    "twitter:image:alt": "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    "twitter:domain": "setiadyanwar.github.io",

    // LinkedIn
    "article:author": "Setiady Ibrahim Anwar",

    // WhatsApp & Telegram (use OG tags)
    "og:site_name": "Setiady Ibrahim Anwar Portfolio",
    "og:locale": "id_ID",
    "og:locale:alternate": "en_US",

    // General
    "theme-color": "#6366f1",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "zgAl9x48b6aAPic1QagBGN37SGoYzCkm2HUivLgUf74",
    other: {
      "msvalidate.01": "35DBB23E6006B598582733FEDD095DA0",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="google-site-verification" content="zgAl9x48b6aAPic1QagBGN37SGoYzCkm2HUivLgUf74" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <AnalyticsTracker />
          <ConditionalLayout
            animatedCursor={<AnimatedCursor />}
            header={<Header />}
            footer={<Footer />}
            main={<main className="flex-grow pt-0 md:pt-16">{children}</main>}
          />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
