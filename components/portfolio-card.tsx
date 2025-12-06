"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { getPortfolioItemById } from "@/lib/supabase/data"

// Cache for preloaded data
const preloadCache = new Map<string, any>()

interface PortfolioCardProps {
  id: string
  title: string
  category: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  delay?: number
  filterKey?: string
}

export default function PortfolioCard({
  id,
  title,
  category,
  image,
  technologies,
  demoUrl,
  repoUrl,
  delay = 0,
  filterKey,
}: PortfolioCardProps) {
  const router = useRouter()
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Preload data on hover
  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    // Prefetch route immediately
    router.prefetch(`/portfolio/${id}`)

    // Preload data after a short delay (to avoid unnecessary requests on quick hovers)
    hoverTimeoutRef.current = setTimeout(async () => {
      // Check if already cached
      if (preloadCache.has(id)) {
        return
      }

      try {
        // Fetch and cache the data
        const data = await getPortfolioItemById(id)
        if (data) {
          preloadCache.set(id, data)
        }
      } catch (error) {
        // Silently fail - preloading is optional
      }
    }, 100)
  }

  const handleMouseLeave = () => {
    // Clear timeout if user leaves before delay
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      key={`${id}-${filterKey}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, delay: delay * 0.1, ease: "easeOut" }}
      className="h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="group h-full bg-transparent border-0 shadow-none rounded-3xl p-0">
        <div className="relative h-48 overflow-hidden rounded-3xl">
          <Image
            src={image?.split("?")[0] || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-indigo-500 text-white border-0 px-3 py-1 text-xs font-medium">{category}</Badge>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors group-hover:text-indigo-600">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                +{technologies.length - 3}
              </Badge>
            )}
          </div>

          <Link
            href={`/portfolio/${id}`}
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 font-medium"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}

// Export cache for use in detail page
export { preloadCache }
