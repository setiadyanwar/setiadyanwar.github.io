"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Palette, Globe } from "lucide-react"

export default function FocusOn() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // Bisa juga diganti skeleton/loading

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

  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive, accessible, and performant web applications with modern technologies.",
      icon: <Code className="w-10 h-10 mb-4 text-indigo-500 dark:text-indigo-400" />,
      gradient: "from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/20",
      border: "border-indigo-200 dark:border-indigo-800/30",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces with a focus on user experience.",
      icon: <Palette className="w-10 h-10 mb-4 text-orange-500 dark:text-orange-400" />,
      gradient: "from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20",
      border: "border-orange-200 dark:border-orange-800/30",
    },
    {
      title: "Web Development",
      description: "Building digital solutions with creative and innovative approaches.",
      icon: <Globe className="w-10 h-10 mb-4 text-gray-700 dark:text-gray-300" />,
      gradient: "from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/30",
      border: "border-gray-200 dark:border-gray-700/30",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Specialist Service</h2>
        <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
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
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`p-8 rounded-xl bg-gradient-to-br ${service.gradient} border ${service.border} transition-all duration-300 hover:shadow-lg`}
          >
            <div className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
