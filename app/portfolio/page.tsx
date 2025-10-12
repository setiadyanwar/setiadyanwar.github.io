import { Briefcase } from "lucide-react"
import PortfolioSection from "@/components/portfolio-section"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse my portfolio showcasing web development projects, UI/UX designs, mobile apps, and creative work. View my latest projects and case studies.",
  alternates: {
    canonical: "https://setiadyanwar.github.io/portfolio",
  },
  openGraph: {
    title: "Portfolio | Setiady Ibrahim Anwar",
    description: "Browse my portfolio showcasing web development projects, UI/UX designs, mobile apps, and creative work. View my latest projects and case studies.",
    url: "https://setiadyanwar.github.io/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="Portfolio"
          subtitle="Explore my recent projects and creative work across various domains"
          iconName="Briefcase"
        />
      </PageHeaderContainer>

      <PortfolioSection />
    </div>
  )
}
