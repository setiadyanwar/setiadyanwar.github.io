"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioItems } from "@/lib/data"
import PortfolioCard from "@/components/portfolio-card"

export default function RecentProjects() {
  // Get the specific 3 most recent projects by ID
  const recentProjectIds = ["kreavoks", "studylens", "freezemart"]
  const recentProjects = recentProjectIds
    .map((id) => portfolioItems.find((item) => item.id === id))
    .filter((project) => project !== undefined) as typeof portfolioItems

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Recent Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out my latest work and creative endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
              delay={index}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white btn-splash">
            <Link href="/portfolio" className="inline-flex items-center">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
