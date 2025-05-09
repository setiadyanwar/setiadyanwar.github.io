"use client"

import HeroSection from "@/components/hero-section"
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
      <SkillsShowcase />
      <RecentProjects />
      <ActivityGallery />
    </div>
  )
}
