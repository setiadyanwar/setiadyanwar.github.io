"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Palette, Globe } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function FocusOn() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  }

  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-600 dark:text-blue-400",
      spotlightColor: "59, 130, 246", // blue-500
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces designed with precision, focusing on user experience and accessibility.",
      icon: <Palette className="w-6 h-6" />,
      color: "text-orange-600 dark:text-orange-400",
      spotlightColor: "249, 115, 22", // orange-500
    },
    {
      title: "Web Development",
      description: "End-to-end digital solutions crafted with creativity and technical excellence.",
      icon: <Globe className="w-6 h-6" />,
      color: "text-gray-600 dark:text-gray-400",
      spotlightColor: "99, 102, 241", // indigo-500
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Specialist Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Professional solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -8, 
                transition: { 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                } 
              }}
              className="group relative"
            >
              <SpotlightCard
                spotlightColor={service.spotlightColor}
                className="p-8 md:p-10 hover:shadow-xl hover:shadow-gray-200/20 dark:hover:shadow-black/20 transition-all duration-500"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 mb-6 group-hover:scale-110 transition-all duration-300 ${service.color}`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
