import { Award, ImageIcon } from "lucide-react"
import ExperienceSection from "@/components/experience-section"
// import GallerySection from "@/components/gallery-section"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience",
  description: "Explore my professional journey as a Frontend Developer and UI/UX Designer. View my work experience, achievements, and career highlights.",
  alternates: {
    canonical: "https://setiadyanwar.github.io/experience",
  },
  openGraph: {
    title: "Experience | Setiady Ibrahim Anwar",
    description: "Explore my professional journey as a Frontend Developer and UI/UX Designer. View my work experience, achievements, and career highlights.",
    url: "https://setiadyanwar.github.io/experience",
  },
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="Experience"
          subtitle="My professional journey and career highlights in the industry"
          iconName="Award"
        />
      </PageHeaderContainer>

      <ExperienceSection />

      {/* <div className="mt-20">
        <EnhancedSectionHeader
          title="Gallery"
          subtitle="Visual highlights from my professional journey and community involvement"
          icon={ImageIcon}
        />
        <GallerySection />
      </div> */}
    </div>
  )
}
