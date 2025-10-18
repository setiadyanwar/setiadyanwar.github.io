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
  metadataBase: new URL("https://setiadyanwar.vercel.app"),
  title: {
    default: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    template: "%s | Setiady Ibrahim Anwar"
  },
  description: "Professional Frontend Developer & UI/UX Designer from Indonesia. BNSP-Certified with 2+ years experience building modern web applications. Expert in React, Next.js, Vue.js, Laravel, TypeScript, and Tailwind CSS. Founder of Kreavoks Digital Agency. Available for freelance projects and full-time opportunities.",
  alternates: {
    canonical: "https://setiadyanwar.vercel.app",
  },
  keywords: [
    // Primary Skills
    "Frontend Developer",
    "UI/UX Designer", 
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Laravel Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Full Stack Developer",
    
    // Technologies & Frameworks
    "React.js",
    "Next.js",
    "Vue.js",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Git",
    "GitHub",
    
    // Design & UI/UX
    "UI Design",
    "UX Design",
    "Web Design",
    "Mobile App Design",
    "Responsive Design",
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "Prototyping",
    "Wireframing",
    "User Experience",
    "User Interface",
    
    // Location & Services
    "Web Developer Indonesia",
    "Frontend Developer Jakarta",
    "UI/UX Designer Tangerang",
    "Web Developer Tangerang",
    "Digital Agency Tangerang",
    "Web Developer Bogor",
    "Frontend Developer Bogor",
    "UI/UX Designer Bogor",
    "Web Developer West Java",
    "Freelance Web Developer",
    "Web Development Services",
    "Custom Website Development",
    "E-commerce Development",
    "Portfolio Website",
    
    // Personal Information & Education
    "Setiady Ibrahim Anwar",
    "Setiady Anwar",
    "Setiady Ibrahim",
    "IPB University",
    "Institut Pertanian Bogor",
    "Bogor Agricultural University",
    "IPB Student",
    "IPB Graduate",
    "Bogor",
    "West Java",
    "Indonesia",
    
    // Certifications & Experience
    "BNSP Certified",
    "Certified Web Developer",
    "Professional Web Developer",
    "Experienced Developer",
    "2+ Years Experience",
    "Kreavoks Digital Agency",
    "Kreavoks",
    "Digital Agency",
    
    // Industry Terms
    "Software Development",
    "Web Application",
    "Mobile Application",
    "Progressive Web App",
    "PWA",
    "API Development",
    "RESTful API",
    "GraphQL",
    "Microservices",
    "Cloud Computing",
    "AWS",
    "Vercel",
    "Netlify",
    
    // Business Keywords
    "Hire Web Developer",
    "Web Development Company",
    "Custom Software Development",
    "Website Maintenance",
    "SEO Optimization",
    "Performance Optimization",
    "Code Review",
    "Technical Consulting",
    "Project Management",
    "Agile Development",
    
    // Academic & Professional Networks
    "IPB Alumni",
    "IPB Graduate",
    "Bogor Agricultural University Alumni",
    "Computer Science IPB",
    "Informatika IPB",
    "Teknologi Informasi IPB",
    "GDG IPB",
    "Google Developer Group IPB",
    "GDGOC IPB",
    "Google Developer Group on Campus IPB",
    "Student Developer",
    "Campus Developer",
    "University Developer",
    
    // Personal Branding
    "Setiady Portfolio",
    "Setiady Ibrahim Anwar Portfolio",
    "Setiady Developer",
    "Setiady UI/UX",
    "Setiady Web Developer",
    "Setiady Frontend",
    "Setiady React Developer",
    "Setiady Next.js Developer"
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
    url: "https://setiadyanwar.vercel.app",
    siteName: "Setiady Ibrahim Anwar Portfolio",
    title: "Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer",
    description: "Professional Frontend Developer & UI/UX Designer from Indonesia. BNSP-Certified with 2+ years experience building modern web applications. Expert in React, Next.js, Vue.js, Laravel, TypeScript, and Tailwind CSS.",
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
    description: "Professional Frontend Developer & UI/UX Designer from Indonesia. BNSP-Certified with 2+ years experience building modern web applications. Expert in React, Next.js, Vue.js, Laravel, TypeScript, and Tailwind CSS.",
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
        <meta name="google-site-verification" content="DXLJIHtf2lA-k7BqNIrR8kw-_fF2GJmPZSSG5E85Wu0" />
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
            <main className="flex-grow pt-0 md:pt-16">{children}</main>
            <Footer />
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
