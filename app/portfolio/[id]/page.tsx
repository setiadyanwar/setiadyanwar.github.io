import { getPortfolioItemById, getPortfolioItems } from "@/lib/supabase/data"
import { portfolioItems as localPortfolioItems } from "@/lib/data"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config/site-config"
import PortfolioDetailClient from "./portfolio-detail-client"
import PortfolioDetailSkeleton from "@/components/portfolio/portfolio-detail-skeleton"


// ... (keep generateMetadata as is)

export const dynamic = 'force-dynamic'

export default async function PortfolioDetail({ params }: { params: { id: string } }) {
  // Fetch data server-side
  const [portfolioItem, allItems] = await Promise.all([
    getPortfolioItemById(params.id),
    getPortfolioItems(),
  ])


  if (!portfolioItem) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Portfolio item not found</h1>
      </div>
    )
  }

  // Find local fallback data to handle missing DB columns (like overviewHeading)
  const localItem = localPortfolioItems.find(item => item.id === params.id)

  // Transform data - exclude project_steps from spread to prevent override
  const { project_steps, ...restPortfolioItem } = portfolioItem

  const portfolio = {
    ...restPortfolioItem,
    overviewHeading: portfolioItem.overview_heading || (localItem && (localItem as any).overviewHeading),
    processHeading: portfolioItem.process_heading || (localItem && (localItem as any).processHeading),
    challengesHeading: portfolioItem.challenges_heading || (localItem && (localItem as any).challengesHeading),
    problemHeading: portfolioItem.problem_heading || (localItem && (localItem as any).problemHeading),
    solutionHeading: portfolioItem.solution_heading || (localItem && (localItem as any).solutionHeading),
    outcomesHeading: portfolioItem.outcomes_heading || (localItem && (localItem as any).outcomesHeading),
    // Data priority: DB -> Local Fallback
    description: portfolioItem.description || (localItem && localItem.description),
    challenges: portfolioItem.challenges || (localItem && localItem.challenges),
    additionalImages: portfolioItem.additional_images || [],
    demoUrl: portfolioItem.demo_url,
    repoUrl: portfolioItem.repo_url,
    problemImage: portfolioItem.problem_image || null,
    solutionImage: portfolioItem.solution_image || null,
    problemDescription: portfolioItem.problem_description || (localItem && (localItem as any).problemDescription),
    problemCards: portfolioItem.problem_cards || [],
    solutionDescription: portfolioItem.solution_description || (localItem && (localItem as any).solutionDescription),
    solutionCards: portfolioItem.solution_cards || [],
    impact: portfolioItem.impact || [],
    outcomes: portfolioItem.outcomes || [],
    nextSteps: portfolioItem.next_steps,
    // IMPORTANT: Assign projectSteps LAST to ensure it's not overridden by spread
    projectSteps: (project_steps && project_steps.length > 0) ? project_steps : ((localItem && localItem.projectSteps) || []),
  }

  // Pass data to client component
  return <PortfolioDetailClient portfolio={portfolio} allPortfolioItems={allItems} />
}
