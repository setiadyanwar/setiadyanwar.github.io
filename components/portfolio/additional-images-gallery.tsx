"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface AdditionalImagesGalleryProps {
  images: string[] | Array<{ url: string; description?: string }>
  title: string
}

export default function AdditionalImagesGallery({ images, title }: AdditionalImagesGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Normalize images to array of objects
  const normalizedImages = images.map((img) => {
    if (typeof img === "string") {
      return { url: img, description: "" }
    }
    return img
  })

  const visibleImages = normalizedImages.slice(0, 3)
  const remainingCount = normalizedImages.length - 3

  const openModal = (index: number = 0) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length)
  }

  const currentImage = normalizedImages[currentIndex]

  // Keyboard navigation - must be before early return
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevImage()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        nextImage()
      } else if (e.key === "Escape") {
        e.preventDefault()
        closeModal()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen, currentIndex, normalizedImages.length])

  if (!normalizedImages || normalizedImages.length === 0) return null

  return (
    <>
      {/* Additional Images - Horizontal layout below main image */}
      <div className="flex items-center gap-3 mt-4" data-cursor-view="true">
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 flex-shrink-0"
            onClick={() => openModal(idx)}
          >
            <Image
              src={img.url || "/placeholder.svg"}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {remainingCount > 0 && (
          <button
            onClick={() => openModal(3)}
            className="relative w-24 h-24 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 flex-shrink-0"
          >
            +{remainingCount}
          </button>
        )}
      </div>

      {/* Modal for viewing images with description */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 dark:bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-full max-w-7xl h-full max-h-[90vh] flex gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section - 80% */}
            <div className="relative flex-1 flex items-center justify-center">
              {/* Navigation Buttons - Only show if more than 1 image */}
              {normalizedImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-4 z-10 w-14 h-14 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full flex items-center justify-center text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-200 shadow-2xl hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-7 h-7" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-4 z-10 w-14 h-14 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full flex items-center justify-center text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-200 shadow-2xl hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-7 h-7" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
                <Image
                  src={currentImage.url?.split("?")[0] || "/placeholder.svg"}
                  alt={`${title} screenshot ${currentIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full rounded-lg"
                />
              </div>

              {/* Image Counter */}
              {normalizedImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 text-white px-4 py-2 rounded-full text-sm font-medium shadow-2xl">
                  {currentIndex + 1} / {normalizedImages.length}
                </div>
              )}
            </div>

            {/* Description Section - 20% with Glassmorphism */}
            <div className="w-[20%] min-w-[200px] bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-lg p-6 overflow-y-auto border border-white/20 dark:border-gray-700/30 shadow-2xl">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-2 drop-shadow-sm">
                    Image {currentIndex + 1}
                  </h3>
                  {currentImage.description ? (
                    <p className="text-sm text-white/90 dark:text-gray-300 leading-relaxed drop-shadow-sm">
                      {currentImage.description}
                    </p>
                  ) : (
                    <p className="text-sm text-white/70 dark:text-gray-400 italic drop-shadow-sm">
                      No description available for this image.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

