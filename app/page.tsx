"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { LayoutGroup } from "framer-motion"

// Lazy load components
const HeroSection = dynamic(() => import("@/components/hero-section"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-50 dark:bg-gray-950" />
})

const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <div className="min-h-screen bg-white dark:bg-black animate-pulse" />
})

const SkillsShowcase = dynamic(() => import("@/components/skills-showcase"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

const FocusOn = dynamic(() => import("@/components/focus-on"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

const RecentProjects = dynamic(() => import("@/components/recent-projects"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

const ActivityGallery = dynamic(() => import("@/components/activity-gallery"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />
})

export default function Home() {
  return (
    <LayoutGroup>
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsShowcase />
        <FocusOn />
        <RecentProjects />
        <ActivityGallery />
      </div>
    </LayoutGroup>
  )
}
