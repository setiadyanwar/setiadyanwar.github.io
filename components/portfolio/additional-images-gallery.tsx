"use client"

import { useState } from "react"
import Image from "next/image"
import FullScreenImageGallery from "./full-screen-image-gallery"

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

  // Ensure stable array even if empty to prevent crashes
  const safeImages = normalizedImages.length > 0 ? normalizedImages : []

  const visibleImages = safeImages.slice(0, 3)
  const remainingCount = Math.max(0, safeImages.length - 3)

  const openModal = (index: number = 0) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!safeImages || safeImages.length === 0) return null

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
              src={img.url ? img.url.split('?')[0] : "/placeholder.svg"}
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

      {/* Reuse Responsive Gallery Modal */}
      <FullScreenImageGallery
        images={safeImages}
        initialIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

