"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ui", name: "UI/UX Design" },
  ]

  // Sample portfolio items (would be replaced with actual projects)
  const portfolioItems = [
    {
      id: "kreavoks",
      title: "Agency & E-learning Website",
      category: "web",
      image: "/portfolio/web/kreavoks.png?height=400&width=600",
      technologies: ["React", "Next.js", "TailwindCSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "upala",
      title: "Upala - Company Profile Website",
      category: "web",
      image: "/portfolio/web/upala.png?height=400&width=600",
      technologies: ["Tailwind", "Figma", "Laravel"],
      demoUrl: "#",
      repoUrl: null,
    },
    {
      id: "project3",
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/public.svg?height=400&width=600",
      technologies: ["Flutter", "Firebase"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "project4",
      title: "Dashboard Interface",
      category: "web",
      image: "/public.svg?height=400&width=600",
      technologies: ["Vue.js", "Chart.js", "TailwindCSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "project5",
      title: "Social Media App",
      category: "mobile",
      image: "/public.svg?height=400&width=600",
      technologies: ["React Native", "Node.js"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "project6",
      title: "Portfolio Website",
      category: "web",
      image: "/public.svg?height=400&width=600",
      technologies: ["HTML/CSS", "JavaScript", "GSAP"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent projects and creative work
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              layout
              className="h-full"
            >
              <Card className="overflow-hidden h-full glassmorphism hover:shadow-lg transition-all duration-300">
                <div className="relative group h-48 overflow-hidden">
                  <img
                    src={item.image || "/public.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {item.repoUrl && (
                        <a
                          href={item.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{item.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-indigo-100/50 dark:bg-indigo-900/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${item.id}`}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
