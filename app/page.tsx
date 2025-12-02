"use client"

import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: false })
import ClientsLogoSection from "@/components/clients-logo-section"
import SkillsShowcase from "@/components/skills-showcase"
import RecentProjects from "@/components/recent-projects"
import ActivityGallery from "@/components/activity-gallery"
import FocusOn from "@/components/focus-on"

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
