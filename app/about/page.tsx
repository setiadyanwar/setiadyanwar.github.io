import { User, Code, Users } from "lucide-react"
import AboutSection from "@/components/about-section"
import TechStackSection from "@/components/tech-stack-section"
import CTASection from "@/components/cta-section"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about my journey as a BNSP-certified Frontend Developer & UI/UX Designer. Discover my skills, experience, and the technologies I use.",
  alternates: {
    canonical: "https://setiadyanwar.github.io/about",
  },
  openGraph: {
    title: "About Me | Setiady Ibrahim Anwar",
    description: "Learn about my journey as a BNSP-certified Frontend Developer & UI/UX Designer. Discover my skills, experience, and the technologies I use.",
    url: "https://setiadyanwar.github.io/about",
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="About Me"
          subtitle="Get to know more about my journey, skills, and passion for creating amazing digital experiences"
          iconName="User"
        />
      </PageHeaderContainer>

      <AboutSection />

      <div className="mt-20">
        <EnhancedSectionHeader
          title="Tech Stack"
          subtitle="The technologies and tools I use to bring ideas to life"
          iconName="Code"
        />
        <TechStackSection />
      </div>

      {/* CTA Section */}
      <div className="mt-20">
        <CTASection />
      </div>

    </div>
  )
}
