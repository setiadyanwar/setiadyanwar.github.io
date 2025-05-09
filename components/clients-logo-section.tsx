"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function ClientsLogoSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scrolling effect for client logos
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPos = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPos += scrollSpeed

      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPos
      }

      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  const clients = [
    { id: 1, name: "Google", logo: "/client/google.svg" },
    { id: 2, name: "MicroIT", logo: "/client/microit.svg" },
    { id: 3, name: "svipb", logo: "/client/svipb.png" },
    { id: 4, name: "Agrimovie", logo: "/client/Agrimovie.png" },
    { id: 5, name: "niagahoster", logo: "/client/niagahoster.svg" },
    { id: 6, name: "GDGOC", logo: "/client/gdgoc.svg" },
    { id: 7, name: "Upala", logo: "/client/upala.png" },
    { id: 8, name: "Kreavoks", logo: "/client/kreavoks.svg" },
    { id: 9, name: "IPB University", logo: "/client/ipb.png" },
  ]

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Collaborating with Industry Leaders</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>

          <div
            ref={scrollRef}
            className="flex space-x-12 py-8 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex-shrink-0 h-20 w-40 rounded-lg flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <img src={client.logo} alt={client.name} className="max-h-full max-w-full" />
              </motion.div>
            ))}

            {/* Duplicate set for infinite scroll effect */}
            {clients.map((client, index) => (
              <motion.div
                key={`dup-${client.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index + clients.length) * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex-shrink-0 h-20 w-40 rounded-lg flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <img src={client.logo} alt={client.name} className="max-h-full max-w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
