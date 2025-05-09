"use client"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { portfolioItems } from "@/lib/data"
import { motion } from "framer-motion"

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from your CMS
  const portfolio = portfolioItems.find((item) => item.id === params.id) || portfolioItems[0]

  // Find previous and next portfolio items
  const currentIndex = portfolioItems.findIndex((item) => item.id === params.id)
  const prevPortfolio = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null
  const nextPortfolio = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null

  // Project steps (example data)
  const projectSteps = [
    {
      title: "Research & Planning",
      description:
        "Started with extensive research on user needs and market trends. Created a detailed project plan with milestones and deliverables.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Design & Prototyping",
      description:
        "Developed wireframes and high-fidelity mockups. Created interactive prototypes for user testing and feedback collection.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Development",
      description:
        "Implemented the frontend using modern technologies. Ensured responsive design and cross-browser compatibility.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Testing & Launch",
      description:
        "Conducted thorough testing to identify and fix bugs. Optimized performance before the successful launch.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400">
          Portfolio
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-indigo-600 dark:text-indigo-400">{portfolio.title}</span>
      </div>

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
            <p className="text-gray-600 dark:text-gray-400">{portfolio.description}</p>

            <h3 className="text-xl font-semibold my-2">My Role</h3>
            <p className="text-gray-600 dark:text-gray-400">{portfolio.role}</p>

            <h3 className="text-xl font-semibold my-2">Challenges & Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400">{portfolio.challenges}</p>
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

      {/* Project Steps */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-10 text-center">Project Development Process</h2>

        <div className="space-y-24">
          {projectSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                  <span className="inline-block w-8 h-8 bg-indigo-600 text-white rounded-full text-center leading-8 mr-3">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative h-[250px] overflow-hidden rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation between portfolio items */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {prevPortfolio && (
          <Link
            href={`/portfolio/${prevPortfolio.id}`}
            className="group flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <ArrowLeft className="mr-4 h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Previous Project</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{prevPortfolio.title}</p>
            </div>
          </Link>
        )}

        {nextPortfolio && (
          <Link
            href={`/portfolio/${nextPortfolio.id}`}
            className="group flex items-center justify-end p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">Next Project</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{nextPortfolio.title}</p>
            </div>
            <ArrowRight className="ml-4 h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  )
}
