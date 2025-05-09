"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Sample gallery images (would be replaced with actual images)
  const galleryImages = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Activity ${i + 1}`,
    description: `Description for activity or achievement ${i + 1}`,
    image: `/placeholder.svg?height=400&width=${300 + (i % 3) * 100}`,
  }))

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="break-inside-avoid mb-4"
            >
              <div
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox for enlarged image view */}
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
      </div>
    </section>
  )
}
