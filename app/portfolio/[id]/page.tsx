import { getPortfolioItemById, getPortfolioItems } from "@/lib/supabase/data"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config/site-config"
import PortfolioDetailClient from "./portfolio-detail-client"
import PortfolioDetailSkeleton from "@/components/portfolio/portfolio-detail-skeleton"

// Generate metadata for portfolio detail pages (runs server-side)
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const portfolio = await getPortfolioItemById(params.id)
  
  if (!portfolio) {
    return {
      title: "Portfolio Not Found",
      description: "The requested portfolio item could not be found.",
    }
  }

  const title = `${portfolio.title} | Portfolio | Setiady Ibrahim Anwar`
  const description = portfolio.subtitle || portfolio.description || `View ${portfolio.title} portfolio project by Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer.`
  const imageUrl = portfolio.image?.split("?")[0] || siteConfig.ogImage
  const fullImageUrl = imageUrl.startsWith("http") ? imageUrl : `${siteConfig.url}${imageUrl}`
  const keywords = portfolio.technologies ? [...portfolio.technologies, "Portfolio", "Web Development", "UI/UX Design"] : ["Portfolio", "Web Development", "UI/UX Design"]

  return {
    title,
    description: description.length > 160 ? description.substring(0, 157) + "..." : description,
    keywords,
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${params.id}`,
    },
    openGraph: {
      title,
      description: description.length > 200 ? description.substring(0, 197) + "..." : description,
      url: `${siteConfig.url}/portfolio/${params.id}`,
      type: "website",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: portfolio.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description.length > 200 ? description.substring(0, 197) + "..." : description,
      images: [fullImageUrl],
    },
  }
}

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

  // Transform data
  const portfolio = {
    ...portfolioItem,
    additionalImages: portfolioItem.additional_images || [],
    demoUrl: portfolioItem.demo_url,
    repoUrl: portfolioItem.repo_url,
    problemImage: portfolioItem.problem_image || null,
    solutionImage: portfolioItem.solution_image || null,
    problemDescription: portfolioItem.problem_description,
    problemCards: portfolioItem.problem_cards || [],
    solutionDescription: portfolioItem.solution_description,
    solutionCards: portfolioItem.solution_cards || [],
    impact: portfolioItem.impact || [],
    outcomes: portfolioItem.outcomes || [],
    nextSteps: portfolioItem.next_steps,
    projectSteps: portfolioItem.project_steps || [],
  }

  // Pass data to client component
  return <PortfolioDetailClient portfolio={portfolio} allPortfolioItems={allItems} />
}
