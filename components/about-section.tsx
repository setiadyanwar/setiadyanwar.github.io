"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CheckCircle, X } from "lucide-react"

interface ImageInfo {
  src: string
  alt: string
  title: string
  description: string
  thumbnail?: string
}

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const values = [
    "Clean & Maintainable Code",
    "User-Centered Design",
    "Responsive & Accessible Interfaces",
    "Performance Optimization",
  ]

  const images: ImageInfo[] = [
    {
      src: "/sertifikat/Web Developer - Setiady Ibrahim Anwar.pdf",
      alt: "BNSP Certification",
      title: "BNSP Certification",
      description:
        "Professional certification from the National Professional Certification Agency (BNSP) validating my expertise in web development and design.",
      thumbnail: "/sertifikat/bnsp-setiady.png"
    },
    {
      src: "/sertifikat/google.png?height=128&width=128",
      alt: "ux sertif",
      title: "Foundations of User Experience (UX) Design",
      description:  "Gained a solid foundation in UX design principles, conducted user research through interviews, surveys, and usability studies, applied the design thinking framework to solve complex problems, and created wireframes and interactive prototypes to visualize and validate design ideas.",
    },
    {
      src: "/sertifikat/sertif-dicoding.png?height=128&width=128",
      alt: "dicoding",
      title: "Fundamentals of Web Development",
      description:
        "Completed a comprehensive course on web development fundamentals, covering HTML, CSS, and JavaScript.",
    },
  ]

  const openModal = (image: ImageInfo) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            {/* Main photo container */}
            <div className="relative h-[500px] w-full max-w-[500px] overflow-hidden rounded-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-orange-500/20 blur-xl" />
              <div className="absolute inset-0 glassmorphism rounded-lg" />
              <div className="absolute inset-2 rounded-lg overflow-hidden">
                <Image src="/setiady.png" alt="About Setiady Ibrahim Anwar" fill style={{ objectFit: "cover" }} />
              </div>

              {/* Certification photo overlapping front */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-4 right-4 w-40 h-56 rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg rotate-6 z-10 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openModal(images[0])}
              >
                <Image
                  src={images[0].thumbnail || images[0].src || "/placeholder.svg"}
                  alt={images[0].alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </div>

            {/* Additional photos container aligned left */}
            <div className="flex space-x-4 mt-6 justify-start max-w-[500px] mx-auto">
              {[1, 2].map((item, index) => (
                <div
                  key={item}
                  className="relative w-32 h-32 rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal(images[index + 1])}
                >
                  <Image
                    src={images[index + 1].src || "/placeholder.svg"}
                    alt={images[index + 1].alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-dashed border-indigo-400 dark:border-indigo-600 opacity-50" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-dashed border-orange-400 dark:border-orange-600 opacity-50" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Setiady Ibrahim Anwar</h2>

            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Web Developer & UI/UX Designer
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate Web Developer specialize in frontend developer and UI/UX Designer with a keen eye for detail and a commitment to
              creating exceptional user experiences. With expertise in modern web technologies, I specialize in building
              responsive, accessible, and visually appealing interfaces that balance aesthetics with functionality.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only
              look great but also perform flawlessly across all devices and platforms.
            </p>

            <div className="space-y-3 mt-6">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">What I value:</h4>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[95vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedImage.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{selectedImage.description}</p>
              </div>

              <div className="relative w-full h-[70vh] bg-gray-100 dark:bg-gray-800">
                {selectedImage.src.endsWith('.pdf') ? (
                  <div className="w-full h-full flex flex-col">
                    <div className="flex-1 bg-white">
                      <iframe
                        src={`${selectedImage.src}#view=FitH&toolbar=1&navpanes=1&scrollbar=1`}
                        className="w-full h-full border-0 rounded"
                        title="PDF Preview"
                        onError={() => console.log('PDF iframe failed to load')}
                        allow="fullscreen"
                      />
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t flex justify-between items-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Use the toolbar above to navigate through pages
                      </div>
                      <a 
                        href={selectedImage.src} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-2"
                      >
                        <span>📄</span>
                        Open in New Tab
                      </a>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
