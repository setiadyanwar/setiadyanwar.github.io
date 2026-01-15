"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ScrollToTop from "@/components/scroll-to-top"

// Lazy load non-critical sections that appear further down the page
const TechStackSection = dynamic(() => import("@/components/tech-stack-section"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse rounded-3xl" />,
  ssr: true
})

const SkillsShowcase = dynamic(() => import("@/components/skills-showcase"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />,
  ssr: true
})

const FocusOn = dynamic(() => import("@/components/focus-on"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />,
  ssr: true
})

const RecentProjects = dynamic(() => import("@/components/recent-projects"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />,
  ssr: true
})

const ActivityGallery = dynamic(() => import("@/components/activity-gallery"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />,
  ssr: true
})

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-950 animate-pulse" />,
  ssr: true
})

const CTASection = dynamic(() => import("@/components/cta-section"), {
  loading: () => <div className="h-64 bg-indigo-600 dark:bg-indigo-900 animate-pulse" />,
  ssr: true
})

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />

      {/* Animated Skills Section */}
      <SkillsShowcase />

      {/* Tech Stack Section */}
      <div className="container mx-auto px-4 -mt-8">
        <TechStackSection />
      </div>

      <FocusOn />
      <RecentProjects />
      <TestimonialsSection />
      <ActivityGallery />

      {/* CTA Section moved to the bottom */}
      <CTASection />

      <ScrollToTop />
    </div>
  )
}
