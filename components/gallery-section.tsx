"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Sample gallery images (would be replaced with actual images)
  const galleryImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Activity ${i + 1}`,
    description: `Description for activity or achievement ${i + 1}`,
    image: `/placeholder.svg?height=400&width=600`,
  }))

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Activity & Achievement Gallery</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Highlights from my professional journey and community involvement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="overflow-hidden cursor-pointer h-full glassmorphism"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lightbox for enlarged image view */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </button>

                <img
                  src={galleryImages[selectedImage].image || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].title}
                  className="max-h-[90vh] max-w-full object-contain"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                  <h3 className="text-xl font-semibold mb-1">{galleryImages[selectedImage].title}</h3>
                  <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
