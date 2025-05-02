"use client"

import { motion } from "framer-motion"

export default function ClientsSection() {
  // Sample client logos (would be replaced with actual client logos)
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Collaborating with Industry Leaders</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Honored to have partnered with top-tier organizations, delivering excellence every step of the way.
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
              <img src={client.logo} alt={client.name} className="max-h-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
