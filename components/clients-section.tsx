"use client"

import { motion } from "framer-motion"

export default function ClientsSection() {
  // Sample client logos (would be replaced with actual client logos)
  const clients = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`,
    logo: `/placeholder.svg?height=80&width=160`,
  }))

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Trusted by Leaders in the Industry</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proud to have worked with these amazing organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={client.logo || "/placeholder.svg"} alt={client.name} className="max-h-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
