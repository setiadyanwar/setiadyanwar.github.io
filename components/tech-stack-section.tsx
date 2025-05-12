"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("all")

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
    // { name: "Node.js", icon: "nodejs.svg", category: "backend" },
    // { name: "Express", icon: "express.svg", category: "backend" },
    { name: "MySQL", icon: "tech/mysql.svg", category: "database" },
    { name: "MongoDB", icon: "tech/mongodb.svg", category: "database" },
    { name: "PostgreSQL", icon: "tech/postgresql.svg", category: "database" },
    { name: "Firebase", icon: "tech/firebase.svg", category: "database" },
    { name: "Flutter", icon: "tech/flutter.svg", category: "mobile" },
    { name: "Java", icon: "tech/java.svg", category: "mobile" },
    { name: "Kotlin", icon: "tech/kotlin.svg", category: "mobile" },
    // { name: "React Native", icon: "react.svg", category: "mobile" },
    { name: "Figma", icon: "tech/figma.svg", category: "design" },
    { name: "Adobe XD", icon: "tech/adobexd.svg", category: "design" },
    { name: "Photoshop", icon: "tech/photoshop.svg", category: "design" },
    { name: "Illustrator", icon: "tech/illustrator.svg", category: "design" },
    { name: "After Effects", icon: "tech/aftereffect.svg", category: "design" },
    { name: "Premiere Pro", icon: "tech/premier.svg", category: "design" },
  ]

  const filteredTechnologies =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
        {filteredTechnologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
            className="h-full"
          >
            <Card className="h-full glassmorphism hover:shadow-md transition-all duration-300 flex flex-col items-start justify-center p-4 text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img src={`/${tech.icon}`} alt={tech.name} className="max-w-full max-h-full" />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </Card>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </section>
  )
}
