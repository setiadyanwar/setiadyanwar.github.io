import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { portfolioItems } from "@/lib/data"

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from your CMS
  const portfolio = portfolioItems.find((item) => item.id === params.id) || portfolioItems[0]

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center mb-8 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{portfolio.title}</h1>
          <div className="flex flex-wrap gap-2">
            {portfolio.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3>Project Overview</h3>
            <p>{portfolio.description}</p>

            <h3>My Role</h3>
            <p>{portfolio.role}</p>

            <h3>Challenges & Solutions</h3>
            <p>{portfolio.challenges}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {portfolio.demoUrl && (
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href={portfolio.demoUrl} target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              </Button>
            )}
            {portfolio.repoUrl && (
              <Button variant="outline" asChild className="border-purple-300 dark:border-purple-800">
                <a href={portfolio.repoUrl} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-purple-200 dark:border-purple-800">
            <Image src={portfolio.image || "/placeholder.svg"} alt={portfolio.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {portfolio.additionalImages?.map((img, index) => (
              <div
                key={index}
                className="relative h-[180px] overflow-hidden rounded-lg border border-purple-200 dark:border-purple-800"
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${portfolio.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
