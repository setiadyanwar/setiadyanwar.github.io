"use client"

import { Award, ImageIcon } from "lucide-react"
import ExperienceSection from "@/components/experience-section"
import GallerySection from "@/components/gallery-section"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="Experience"
          subtitle="My professional journey and career highlights in the industry"
          icon={Award}
        />
      </PageHeaderContainer>

      <ExperienceSection />

      <div className="mt-20">
        <EnhancedSectionHeader
          title="Gallery"
          subtitle="Visual highlights from my professional journey and community involvement"
          icon={ImageIcon}
        />
        <GallerySection />
      </div>
    </div>
  )
}
