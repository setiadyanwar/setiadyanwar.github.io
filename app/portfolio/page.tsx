"use client"

import { Briefcase } from "lucide-react"
import PortfolioSection from "@/components/portfolio-section"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="Portfolio"
          subtitle="Explore my recent projects and creative work across various domains"
          icon={Briefcase}
        />
      </PageHeaderContainer>

      <PortfolioSection />
    </div>
  )
}
