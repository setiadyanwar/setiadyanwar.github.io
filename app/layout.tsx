import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// @ts-ignore - allow side-effect global css import (no types)
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedCursor from "@/components/animated-cursor"
import { personJsonLd, websiteJsonLd, organizationJsonLd } from "@/lib/structured-data"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://setiadyanwar.github.io"),
  title: {
    default: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    template: "%s | Setiady Ibrahim Anwar"
  },
  description: "BNSP-Certified Web Developer & UI/UX Designer with 2+ years experience. Founder of Kreavoks Digital Agency. Expert in React, Next.js, Vue, Laravel, and modern web technologies.",
  alternates: {
    canonical: "https://setiadyanwar.github.io",
  },
  keywords: [
    "Frontend Developer",
    "UI/UX Designer", 
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Laravel Developer",
    "Web Developer Indonesia",
    "BNSP Certified",
    "Kreavoks Digital Agency",
    "Setiady Ibrahim Anwar",
    "Portfolio Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Design",
    "Digital Agency Tangerang"
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
    locale: "en_US",
    url: "https://setiadyanwar.github.io",
    siteName: "Setiady Ibrahim Anwar Portfolio",
    title: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    description: "BNSP-Certified Frontend Developer & UI/UX Designer with 2+ years experience. Founder of Kreavoks Digital Agency.",
    images: [
      {
        url: "/setiady.png",
        width: 1200,
        height: 630,
        alt: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    description: "BNSP-Certified Frontend Developer & UI/UX Designer with 2+ years experience. Founder of Kreavoks Digital Agency.",
    images: ["/setiady.png"],
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
    google: "DXLJIHtf2lA-k7BqNIrR8kw-_fF2GJmPZSSG5E85Wu0",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <AnimatedCursor />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
