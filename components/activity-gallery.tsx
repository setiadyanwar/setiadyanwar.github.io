"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Activity {
  id: number
  title: string
  description: string
  image: string
  date: string
}

export default function ActivityGallery() {
  const [activities] = useState<Activity[]>([
    {
      id: 1,
      title: "GDGOC IPB University Core team 2025",
      description: "Spearheaded event planning and community outreach for Google Developer Group on Campus, co-organizing meetups, hackathons, and peer-learning sessions on no-code prototyping and UI/UX best practices, driving a 30% increase in active membership.",
      image: "/activity/gdgoc.jpg?height=300&width=500",
      date: "May 2025",
    },
      {
        id: 2,
        title: "Lead Company Visit Himavo MicroIT",
        description: "I am delighted to have succeeded in becoming the chief organizer of the Company Visit event at Himavo Micro IT which included 75 participants who took part and collaborated with PT Elang Mahkota Teknologi and Indosat Ooredoo Hutchison.",
        image: "/activity/comvis-2.jpeg?height=300&width=500",
        date: "July 2024",
      },
    {
      id: 3,
      title: "User Experience Academy Compfest 2024",
      description: "Participated in a 48-hour design sprint, collaborating with cross-disciplinary teams to craft user-centered solutions for live briefs. Deliverables included wireframes and high-fidelity mockups that secured first place among competing teams.",
      image: "/activity/compfest.jpeg?height=300&width=500",
      date: "September 2024",
    },
    {
      id: 4,
      title: "Mentor UI/UX design at Himavo MicroIT",
      description: "Led an interactive workshop covering modern web development fundamentals, from user research techniques to rapid prototyping in Figma. Guided participants through hands-on exercises on wireframing, visual hierarchy, and design thinking, resulting in functional prototypes by session end.",
      image: "/activity/micro.jpg?height=300&width=500",
      date: "March 2023",
    },
    
    {
      id: 5,
      title: "1st Winner UI/UX Competition Vocational Of Champions.",
      description: "Awarded first place in the UI/UX Competition “Vocational Of Champions.”",
      image: "/activity/voc.jpg?height=300&width=500",
      date: "November 2024",
    },
    {
     id: 6,
      title: "2nd Winner UI/UX Design at Smart IT Competition",
      description: "Awarded second place in the UI/UX track of the Smart IT Competition.",
      image: "/activity/sic.jpeg?height=300&width=500",
      date: "Augustus 2024", 
    },
    {
     id: 7,
      title: "Mentor UI/UX design at SMKN 4 Bogor",
      description: "Led hands-on UI/UX design workshops for vocational high school students at SMKN 4 Bogor, covering user research, wireframing, and interactive prototyping using Figma.",
      image: "/activity/mte.jpeg?height=300&width=500",
      date: "Mei 2024", 
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const nextSlide = () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(activities.length - 1)
    }
  }

  // Scroll to current index
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      const newIndex = Math.round(sliderRef.current.scrollLeft / slideWidth)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Activities</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into my professional journey and community involvement
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="flex transition-transform duration-300 ease-out">
              {activities.map((activity, index) => (
                <div key={activity.id} className="min-w-full px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8 items-center"
                  >
                    <div className="w-full md:w-1/2">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative overflow-hidden rounded-xl group"
                      >
                        <div className="aspect-w-16 aspect-h-9 relative">
                          <img
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.title}
                            className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <span className="inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                            {activity.date}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="w-full md:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                          {activity.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{activity.description}</p>

                        <div className="flex space-x-2">
                          {Array.from({ length: activities.length }).map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentIndex(i)}
                              className={`w-3 h-3 rounded-full transition-colors ${
                                i === currentIndex ? "bg-indigo-600 dark:bg-indigo-400" : "bg-gray-300 dark:bg-gray-700"
                              }`}
                              aria-label={`Go to slide ${i + 1}`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
