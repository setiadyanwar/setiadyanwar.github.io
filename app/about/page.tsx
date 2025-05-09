"use client"
import { User, Code, Users } from "lucide-react"
import AboutSection from "@/components/about-section"
import TechStackSection from "@/components/tech-stack-section"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="About Me"
          subtitle="Get to know more about my journey, skills, and passion for creating amazing digital experiences"
          icon={User}
        />
      </PageHeaderContainer>

      <AboutSection />

      <div className="mt-20">
        <EnhancedSectionHeader
          title="Tech Stack"
          subtitle="The technologies and tools I use to bring ideas to life"
          icon={Code}
        />
        <TechStackSection />
      </div>

    </div>
  )
}
