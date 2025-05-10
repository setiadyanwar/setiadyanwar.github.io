"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

interface PortfolioCardProps {
  id: string
  title: string
  category: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  delay?: number
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
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
        <div className="relative group h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex space-x-3">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 text-white" />
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-indigo-500 text-white border-0 px-3 py-1 text-xs font-medium">{category}</Badge>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-white">{title}</h3>

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
            className="inline-flex items-center text-gray-600 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition-colors group"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}
