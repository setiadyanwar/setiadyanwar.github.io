"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function TechStackSection() {
  const technologies = [
    { name: "HTML", icon: "html5.svg" },
    { name: "CSS", icon: "css3.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Vue", icon: "vue.svg" },
    { name: "TailwindCSS", icon: "tailwindcss.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "Java", icon: "java.svg" },
    { name: "Figma", icon: "figma.svg" },
    { name: "Adobe XD", icon: "adobexd.svg" },
    { name: "Flutter", icon: "flutter.svg" },
    { name: "After Effects", icon: "aftereffects.svg" },
    { name: "Photoshop", icon: "photoshop.svg" },
    { name: "Premiere Pro", icon: "premierepro.svg" },
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Tech Stack</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card className="h-full glassmorphism hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img src={`/public.svg?height=48&width=48`} alt={tech.name} className="max-w-full max-h-full" />
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
