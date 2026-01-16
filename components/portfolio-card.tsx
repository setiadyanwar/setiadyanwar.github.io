"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

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
  delay = 0,
  filterKey,
}: PortfolioCardProps) {
  const router = useRouter()

  // Prefetch on hover for faster navigation
  const handleMouseEnter = () => {
    router.prefetch(`/portfolio/${id}`)
  }

  return (
    <motion.div
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
    >
      <Card className="group h-full bg-transparent border-0 shadow-none rounded-3xl p-0">
        <div className="relative h-48 overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800">
          <Image
            src={image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3C/svg%3E"}
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
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors group-hover:text-indigo-600 line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '3.5rem' }}>
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
