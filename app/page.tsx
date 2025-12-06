"use client"

import dynamic from "next/dynamic"

// Lazy load heavy components to reduce initial bundle size
const HeroSection = dynamic(() => import("@/components/hero-section"), { 
  ssr: false,
  loading: () => <div className="h-screen bg-gray-50 dark:bg-gray-950" />
})

const ClientsLogoSection = dynamic(() => import("@/components/clients-logo-section"), {
  loading: () => <div className="h-32 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

const FocusOn = dynamic(() => import("@/components/focus-on"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

const RecentProjects = dynamic(() => import("@/components/recent-projects"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

const SkillsShowcase = dynamic(() => import("@/components/skills-showcase"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

const ActivityGallery = dynamic(() => import("@/components/activity-gallery"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsLogoSection />
      <FocusOn />
      <RecentProjects />
      <SkillsShowcase />
      <ActivityGallery />
    </div>
  )
}
