"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const values = [
    "Clean & Maintainable Code",
    "User-Centered Design",
    "Responsive & Accessible Interfaces",
    "Performance Optimization",
  ]

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative h-[400px] w-full max-w-[500px] mx-auto overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-orange-500/20 blur-xl" />
              <div className="absolute inset-0 glassmorphism rounded-lg" />
              <div className="absolute inset-2 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="About Setiady Ibrahim Anwar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-dashed border-indigo-400 dark:border-indigo-600 opacity-50" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-dashed border-orange-400 dark:border-orange-600 opacity-50" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Frontend Developer & UI/UX Designer
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate Frontend Developer and UI/UX Designer with a keen eye for detail and a commitment to
              creating exceptional user experiences. With expertise in modern web technologies, I specialize in building
              responsive, accessible, and visually appealing interfaces that balance aesthetics with functionality.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only
              look great but also perform flawlessly across all devices and platforms.
            </p>

            <div className="space-y-3 mt-6">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">What I value:</h4>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
