"use client"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPortfolioItems } from "@/lib/supabase/data"
import CardSwap, { Card } from "@/components/ui/card-swap"
import { Card as UICard } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

interface PortfolioItem {
  id: string
  title: string
  description?: string
  image?: string
  category: string
  date?: string
  technologies: string[]
}

export default function RecentProjects() {
  const [recentProjects, setRecentProjects] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const items = await getPortfolioItems()
        // Dynamically take the 3 most recent projects and map fields correctly
        const filtered = items.slice(0, 3).map(item => ({
          ...item,
          description: item.subtitle || item.description // Map subtitle to description for display
        }))
        setRecentProjects(filtered as PortfolioItem[])
      } catch (error) {
        // Silently fail
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  // Memoize project cards - must be called before any early returns
  const projectCards = useMemo(() => recentProjects.map((project) => (
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
        <div className="relative flex-1 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 transition-opacity duration-500">
            <Image
              src={project.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3C/svg%3E"}
              alt={project.title}
              fill
              sizes="600px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
            />
          </div>

          {/* Detail overlay only on hover */}
          <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-white/80 dark:bg-black/65" />

          <div className="relative h-full flex flex-col justify-between p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="space-y-3 max-w-md">
              <p className="text-xs tracking-[0.18em] text-gray-500/80 dark:text-gray-300/80 uppercase">
                {project.date || "Recent project"}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
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
                prefetch={true}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold tracking-wide hover:bg-black transition-colors dark:bg-white dark:text-[#05010d] dark:hover:bg-gray-100"
              >
                View project
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </UICard>
    </Card>
  )), [recentProjects])

  // Don't render if no projects loaded yet
  if (loading || recentProjects.length === 0) {
    return null
  }

  return (
    <section className="py-24 bg-gray-100 text-gray-900 dark:bg-[#05010d] dark:text-white rounded-3xl overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Selected recent projects
              <br />
              I&apos;ve designed and built
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              A selection of recent work showcasing product design and front-end engineering.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {recentProjects.map((project) => (
                <li key={project.id} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  <span className="truncate">{project.title}</span>
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
          </motion.div>

          {/* Right card stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[360px] sm:h-[420px] md:h-[520px]"
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              width={620}
              height={420}
            >
              {projectCards}
            </CardSwap>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
