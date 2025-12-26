"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FullScreenImageGalleryProps {
    images: Array<{ url: string; description?: string }>
    initialIndex?: number
    isOpen: boolean
    onClose: () => void
}

export default function FullScreenImageGallery({
    images,
    initialIndex = 0,
    isOpen,
    onClose
}: FullScreenImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    // Update index when initialIndex prop changes
    useEffect(() => {
        setCurrentIndex(initialIndex)
    }, [initialIndex])

    const nextImage = () => {
        if (images.length <= 1) return
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        if (images.length <= 1) return
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    // Ensure index is valid
    const safeIndex = (currentIndex >= 0 && currentIndex < images.length) ? currentIndex : 0
    const currentImage = images[safeIndex]

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                e.preventDefault()
                prevImage()
            } else if (e.key === "ArrowRight") {
                e.preventDefault()
                nextImage()
            } else if (e.key === "Escape") {
                e.preventDefault()
                onClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = 'unset'
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, currentIndex, images.length])

    if (!isOpen || !images || images.length === 0) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-0 md:p-4"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[10000] w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
                        aria-label="Close gallery"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div
                        className="relative w-full h-full md:max-w-7xl md:max-h-[90vh] flex flex-col md:flex-row gap-0 md:gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Section */}
                        <div className="relative flex-1 flex items-center justify-center w-full h-full bg-black/20 md:bg-transparent">
                            {/* Navigation Buttons - Hidden on mobile if swipe logic isn't added, using taps instead */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            prevImage()
                                        }}
                                        className="absolute left-2 md:left-4 z-10 w-10 h-10 md:w-14 md:h-14 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all shadow-xl hover:scale-105"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            nextImage()
                                        }}
                                        className="absolute right-2 md:right-4 z-10 w-10 h-10 md:w-14 md:h-14 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all shadow-xl hover:scale-105"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>
                                </>
                            )}

                            {/* Main Image Container */}
                            <div className="relative w-full h-full flex items-center justify-center p-2 md:p-0">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        src={currentImage.url?.split("?")[0] || "/placeholder.svg"}
                                        alt={currentImage.description || `Gallery image ${currentIndex + 1}`}
                                        width={1920}
                                        height={1080}
                                        priority
                                        className="object-contain max-w-full max-h-[70vh] md:max-h-full rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                            </div>

                            {/* Mobile Image Counter - Top centered */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:hidden bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                                {currentIndex + 1} / {images.length}
                            </div>

                            {/* Desktop Image Counter - Bottom centered */}
                            {images.length > 1 && (
                                <div className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium shadow-2xl">
                                    {currentIndex + 1} / {images.length}
                                </div>
                            )}
                        </div>

                        {/* Description Section - Responsive Layout */}
                        {/* Mobile: Bottom sheet / Overlay | Desktop: Side panel */}
                        <div className="flex-shrink-0 w-full md:w-[320px] bg-black/80 md:bg-white/10 md:backdrop-blur-xl md:rounded-lg p-6 md:overflow-y-auto md:border md:border-white/20 shadow-2xl z-20 absolute bottom-0 md:static min-h-[150px] md:min-h-0 md:h-full">
                            {/* Mobile Drag Indicator */}
                            <div className="w-12 h-1.5 bg-gray-600 rounded-full mx-auto mb-4 md:hidden" />

                            <div className="space-y-4 text-left">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm flex items-center justify-between">
                                        <span>Details</span>
                                        <span className="text-xs font-normal text-gray-400 md:hidden">{currentIndex + 1} of {images.length}</span>
                                    </h3>

                                    {currentImage.description ? (
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            {currentImage.description}
                                        </p>
                                    ) : (
                                        <p className="text-sm text-gray-500 italic">
                                            No description available for this image.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
