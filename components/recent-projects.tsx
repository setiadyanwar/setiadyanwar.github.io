"use client"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioItems } from "@/lib/data"
import CardSwap, { Card } from "@/components/ui/card-swap"
import { Card as UICard } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

export default function RecentProjects() {
  // Get the specific 3 most recent projects by ID (latest web projects)
  const recentProjectIds = ["ess", "nexaid", "kreavoks"]
  const recentProjects = recentProjectIds
    .map((id) => portfolioItems.find((item) => item.id === id))
    .filter((project) => project !== undefined) as typeof portfolioItems

  return (
    <section className="py-8 bg-gray-50 text-gray-900 dark:bg-[#05010d] dark:text-white rounded-3xl overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
          {/* Left content */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Selected recent projects
              <br />
              I've designed and built
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              A selection of recent projects that highlight my work across product design and front-end engineering,
              presented in a clean, browser-like experience.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {recentProjects.map((project) => (
                <li key={project.id} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  <span>{project.title}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right card stack */}
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px]">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              width={620}
              height={420}
            >
              {recentProjects.map((project) => (
                <Card key={project.id}>
                  <UICard className="group overflow-hidden h-full bg-white border border-gray-200 shadow-[0_26px_60px_rgba(15,23,42,0.16)] rounded-3xl flex flex-col dark:bg-[#05010d] dark:border-white/10">
                    {/* Top browser bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-100/80 dark:border-white/10 dark:bg-black/60">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                        <span className="ml-3 text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-[220px]">
                          {project.title}
                        </span>
                      </div>
                      <span className="text-[11px] px-3 py-1 rounded-full bg-white text-gray-700 border border-gray-200 uppercase tracking-wide dark:bg-white/5 dark:border-white/10 dark:text-gray-200">
                        {project.category}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="relative flex-1 overflow-hidden">
                      <div className="absolute inset-0 transition-opacity duration-500">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          sizes="600px"
                          className="object-cover group-hover:blur-[6px] transition duration-500"
                        />
                      </div>

                      {/* Detail overlay only on hover */}
                      <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-white/80 dark:bg-black/65" />

                      <div className="relative h-full flex flex-col justify-between p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="space-y-3 max-w-md">
                          <p className="text-xs tracking-[0.18em] text-gray-500/80 dark:text-gray-300/80 uppercase">
                            {project.date || "Recent project"}
                          </p>
                          <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-600/90 dark:text-gray-300/85 line-clamp-2 md:line-clamp-3">
                            {project.description ||
                              "A modern experience focused on performance, clarity, and delightful details."}
                          </p>
                        </div>

                        <div className="flex items-end justify-between gap-4">
                          <div className="flex flex-wrap gap-2 max-w-xs">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="bg-white/80 border-gray-200 text-[11px] text-gray-800 dark:bg-black/40 dark:border-white/20 dark:text-gray-100"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge
                                variant="outline"
                                className="bg-white/80 border-gray-200 text-[11px] text-gray-800 dark:bg-black/40 dark:border-white/20 dark:text-gray-200"
                              >
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>

                          <Link
                            href={`/portfolio/${project.id}`}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold tracking-wide hover:bg-black transition-colors dark:bg-white dark:text-[#05010d] dark:hover:bg-gray-100"
                          >
                            View case study
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </UICard>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}
