"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { portfolioItems } from "@/lib/data"
import { motion } from "framer-motion"

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  const [activeStep, setActiveStep] = useState<number>(0)

  const portfolio = portfolioItems.find((item) => item.id === params.id) || portfolioItems[0]
  const currentIndex = portfolioItems.findIndex((item) => item.id === params.id)
  const prevPortfolio = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null
  const nextPortfolio = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null

  return (
    <div className="container mx-auto px-4 mt-12 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400">Portfolio</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-indigo-600 dark:text-indigo-400">{portfolio.title}</span>
      </div>

      {/* Header + Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{portfolio.title}</h1>
          <div className="flex flex-wrap gap-2">
            {portfolio.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
            <p>{portfolio.description}</p>
            <h3 className="text-xl font-semibold my-2">My Role</h3>
            <p>{portfolio.role}</p>
            <h3 className="text-xl font-semibold my-2">Challenges & Solutions</h3>
            <p>{portfolio.challenges}</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            {portfolio.demoUrl && (
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a href={portfolio.demoUrl} target="_blank" rel="noopener noreferrer">View Live Demo</a>
              </Button>
            )}
            {portfolio.repoUrl && (
              <Button variant="outline" asChild className="border-indigo-300 dark:border-indigo-800">
                <a href={portfolio.repoUrl} target="_blank" rel="noopener noreferrer">View Repository</a>
              </Button>
            )}
          </div>
        </div>
        <div className="space-y-8">
          {/* Main image */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <Image src={portfolio.image || "/placeholder.svg"} alt={portfolio.title} fill className="object-cover rounded-xl border border-indigo-200 dark:border-indigo-800" />
          </div>
          {/* Additional images */}
          <div className="grid grid-cols-2 gap-4">
            {portfolio.additionalImages?.map((img, idx) => (
              <div key={idx} className="relative w-full" style={{ paddingBottom: "75%" }}>
                <Image src={img || "/placeholder.svg"} alt={`${portfolio.title} screenshot ${idx + 1}`} fill className="object-cover rounded-lg border border-indigo-200 dark:border-indigo-800" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Steps with Timeline */}
      {portfolio.projectSteps && portfolio.projectSteps.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-10 text-center">Project Development Process</h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute top-0 left-4 w-px h-full bg-indigo-200 dark:bg-indigo-800"></div>

            <div className="space-y-12">
              {portfolio.projectSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Dot outside highlight */}
                  <div className="absolute left-2 top-6 w-4 h-4 rounded-full bg-indigo-600 z-10">
                    <span className="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-75"></span>
                    <span className="absolute inset-0 rounded-full border-4 border-indigo-200 animate-pulse"></span>
                  </div>

                  {/* Content box with left margin */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setActiveStep(index)}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className={`ml-8 flex flex-col md:flex-row items-start gap-8 p-4 rounded-lg ${
                      activeStep === index ? "border-2 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" : ""
                    }`}
                  >
                    {/* Text */}
                    <div className="md:w-1/2">
                      <div className="flex items-center mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-400 mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                    {/* Optional image */}
                    {step.image && (
                      <div className="md:w-1/2">
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <Image src={step.image} alt={step.title} fill className="object-cover rounded-xl border border-indigo-200 dark:border-indigo-800" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Prev / Next navigation */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {prevPortfolio && (
          <Link href={`/portfolio/${prevPortfolio.id}`} className="group flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <ArrowLeft className="mr-4 h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Previous Project</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{prevPortfolio.title}</p>
            </div>
          </Link>
        )}
        {nextPortfolio && (
          <Link href={`/portfolio/${nextPortfolio.id}`} className="group flex items-center justify-end p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
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
