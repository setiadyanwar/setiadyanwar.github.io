"use client"

import HeroSection from "@/components/hero-section"
import ClientsLogoSection from "@/components/clients-logo-section"
import SkillsShowcase from "../components/skills-showcase"
import RecentProjects from "../components/recent-projects"
import { motion } from "framer-motion"

export default function Home() {
  <>
      {/* Content Web Kamu */}
      <main>
        {/* isi portfolio */}
      </main>
    </>
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div>
      <HeroSection />
      <ClientsLogoSection />

      {/* Skills Showcase Section */}
      <SkillsShowcase />

      {/* Services Section */}
      <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Specialist Service</h2>
          <div className="w-20 h-1 bg-indigo dark:bg-indigo-light mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Need a hand with your project? I offer services to help you achieve your goals.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/20 border border-indigo-200 dark:border-indigo-800/30 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-indigo-500 dark:text-indigo-50">
              Frontend Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Creating responsive, accessible, and performant web applications with modern technologies.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200 dark:border-orange-800/30 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-300">UI/UX Design</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Designing intuitive and beautiful user interfaces with a focus on user experience.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700/30 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">Creative Solutions</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Solving complex problems with creative and innovative approaches.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Recent Projects Section */}
      <RecentProjects />

      
    </div>
  )
}
