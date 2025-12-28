import { getPortfolioItemById, getPortfolioItems } from "@/lib/supabase/data"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config/site-config"
import PortfolioDetailClient from "./portfolio-detail-client"
import PortfolioDetailSkeleton from "@/components/portfolio/portfolio-detail-skeleton"


// ... (keep generateMetadata as is)

// Enable static generation for all portfolio items
export async function generateStaticParams() {
  const items = await getPortfolioItems()
  return items.map((item: any) => ({
    id: item.id,
  }))
}

// Production: 1 hour cache (real-time is too slow for navigation)
export const revalidate = 3600

export default async function PortfolioDetail({ params }: { params: { id: string } }) {
  // Fetch data server-side from database only
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

  // Transform data - use database values exclusively
  const { project_steps, ...restPortfolioItem } = portfolioItem

  const portfolio = {
    ...restPortfolioItem,
    overviewHeading: portfolioItem.overview_heading || "Overview",
    processHeading: portfolioItem.process_heading || "The Journey",
    challengesHeading: portfolioItem.challenges_heading || "The Challenge",
    problemHeading: portfolioItem.problem_heading || "Problem",
    solutionHeading: portfolioItem.solution_heading || "Solution",
    outcomesHeading: portfolioItem.outcomes_heading || "Outcomes",
    description: portfolioItem.description || "",
    challenges: portfolioItem.challenges || "",
    additionalImages: portfolioItem.additional_images || [],
    demoUrl: portfolioItem.demo_url,
    repoUrl: portfolioItem.repo_url,
    problemImage: portfolioItem.problem_image || null,
    solutionImage: portfolioItem.solution_image || null,
    problemDescription: portfolioItem.problem_description || "",
    problemCards: portfolioItem.problem_cards || [],
    solutionDescription: portfolioItem.solution_description || "",
    solutionCards: portfolioItem.solution_cards || [],
    impact: portfolioItem.impact || [],
    outcomes: portfolioItem.outcomes || [],
    nextSteps: portfolioItem.next_steps || "",
    projectSteps: project_steps || [],
  }

  // Pass data to client component
  return <PortfolioDetailClient portfolio={portfolio} allPortfolioItems={allItems} />
}
