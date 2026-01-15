"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "mobile", name: "Mobile" },
    { id: "design", name: "Design" },
  ]

  const technologies = [
    { name: "HTML", icon: "tech/html.svg", category: "frontend" },
    { name: "CSS", icon: "tech/css.svg", category: "frontend" },
    { name: "JavaScript", icon: "tech/javascript.svg", category: "frontend" },
    { name: "React", icon: "tech/react.svg", category: "frontend" },
    { name: "Vue", icon: "tech/vue.svg", category: "frontend" },
    { name: "Next.js", icon: "tech/next-js.svg", category: "frontend" },
    { name: "Tailwind CSS", icon: "tech/tailwind.svg", category: "frontend" },
    { name: "Bootstrap", icon: "tech/bootstrap.svg", category: "frontend" },
    { name: "Laravel", icon: "tech/laravel.svg", category: "backend" },
    { name: "PHP", icon: "tech/php.svg", category: "backend" },
    { name: "MySQL", icon: "tech/mysql.svg", category: "database" },
    { name: "MongoDB", icon: "tech/mongodb.svg", category: "database" },
    { name: "PostgreSQL", icon: "tech/postgresql.svg", category: "database" },
    { name: "Firebase", icon: "tech/firebase.svg", category: "database" },
    { name: "Flutter", icon: "tech/flutter.svg", category: "mobile" },
    { name: "Java", icon: "tech/java.svg", category: "mobile" },
    { name: "Kotlin", icon: "tech/kotlin.svg", category: "mobile" },
    { name: "Figma", icon: "tech/figma.svg", category: "design" },
    { name: "Adobe XD", icon: "tech/adobexd.svg", category: "design" },
    { name: "Photoshop", icon: "tech/photoshop.svg", category: "design" },
    { name: "Illustrator", icon: "tech/illustrator.svg", category: "design" },
    { name: "After Effects", icon: "tech/aftereffect.svg", category: "design" },
    { name: "Premiere Pro", icon: "tech/premier.svg", category: "design" },
  ]

  const filteredTechnologies =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  // Show more if there are items that would overflow 3 rows (conservative estimate)
  const hasMore = filteredTechnologies.length > 18 // 3 rows × 6 cols average

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900/50 rounded-3xl max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-full"
      >
        {/* Compact filter buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setShowAll(false)
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCategory === category.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid container with fade overlay */}
        <div className="relative">
          {/* Grid - responsive columns, max 3 rows when collapsed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 transition-all duration-500 ${!showAll ? "max-h-[300px] overflow-hidden" : ""
              }`}
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.02 * index }}
                className="h-full"
              >
                <Card className="h-full glassmorphism hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-8 h-8 mb-2 flex items-center justify-center">
                    <img
                      src={`/${tech.icon}`}
                      alt={tech.name}
                      className={`max-w-full max-h-full ${tech.name === "Next.js" ? "dark:filter dark:invert" : ""}`}
                    />
                  </div>
                  <span className="text-xs font-medium leading-tight line-clamp-2">{tech.name}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient fade overlay + Show More button */}
          {hasMore && !showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900/50 via-gray-50/80 dark:via-gray-900/40 to-transparent pointer-events-none">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg"
                >
                  Show More
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Show Less button (when expanded) */}
          {showAll && hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Show Less
                <ChevronUp className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
