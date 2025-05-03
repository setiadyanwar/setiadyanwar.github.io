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
    <div className="container mx-auto px-4 py-24">
      <Link
        href="/"
        className="inline-flex items-center mb-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
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
                className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
            <p className="text-gray-500">{portfolio.description}</p>

            <h3 className="text-xl font-semibold my-2">My Role</h3>
            <p className="text-gray-500">{portfolio.role}</p>

            <h3 className="text-xl font-semibold my-2">Challenges & Solutions</h3>
            <p className="text-gray-500">{portfolio.challenges}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {portfolio.demoUrl && (
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a href={portfolio.demoUrl} target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              </Button>
            )}
            {portfolio.repoUrl && (
              <Button variant="outline" asChild className="border-indigo-300 dark:border-indigo-800">
                <a href={portfolio.repoUrl} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-indigo-200 dark:border-indigo-800">
            <Image src={portfolio.image || "/placeholder.svg"} alt={portfolio.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {portfolio.additionalImages?.map((img, index) => (
              <div
                key={index}
                className="relative h-[180px] overflow-hidden rounded-lg border border-indigo-200 dark:border-indigo-800"
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
