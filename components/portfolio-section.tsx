"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PortfolioCard from "@/components/portfolio-card"
import { getPortfolioItems } from "@/lib/supabase/data"
import PortfolioListSkeleton from "@/components/portfolio/portfolio-list-skeleton"

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [portfolioItems, setPortfolioItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const itemsPerPage = 6

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPortfolioItems()
        // Transform data to match component expectations
        const transformed = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          category: item.category,
          image: item.image,
          technologies: item.technologies || [],
          demoUrl: item.demo_url,
          repoUrl: item.repo_url,
        }))

        // Debug: log first item to verify order
        if (process.env.NODE_ENV !== "production" && transformed.length > 0) {
          console.log("📋 Portfolio Section - First item:", transformed[0].id, transformed[0].title)
        }

        setPortfolioItems(transformed)
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching portfolio items:", error)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Memoize filtered and paginated items - must be before conditional return
  const filteredItems = useMemo(() => {
    if (filter === "all") return portfolioItems
    return portfolioItems.filter((item) => item.category === filter)
  }, [portfolioItems, filter])

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredItems.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredItems, currentPage, itemsPerPage])

  const totalPages = useMemo(() => {
    return Math.ceil(filteredItems.length / itemsPerPage)
  }, [filteredItems.length, itemsPerPage])

  // Memoize category counts
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = { all: portfolioItems.length }
    portfolioItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1
    })
    return counts
  }, [portfolioItems])

  const handleFilterChange = useCallback((newFilter: string) => {
    setFilter(newFilter)
    setCurrentPage(1) // Reset to first page when filter changes
  }, [])

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  if (loading) {
    return <PortfolioListSkeleton />
  }

  const portfolioItemsList = [
    {
      id: "ess",
      title: "Employee Self Service Portal",
      category: "web",
      image: "/portfolio/web/ESS.png?height=400&width=600",
      technologies: ["Nuxt 3", "Vue.js", "TailwindCSS", "Pinia"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "nobarin",
      title: "Nobarin Movie Streaming Platform",
      category: "web",
      image: "/portfolio/web/nobar.png?height=400&width=600",
      technologies: ["Vue.js", "Pinia", "TailwindCSS", "TMDB API", "Vite"],
      demoUrl: "https://nobarin-phi.vercel.app/",
      // repoUrl: "#",
    },
    {
      id: "kreavoks",
      title: "Agency & E-learning Website",
      category: "web",
      image: "/portfolio/web/kreavoks.png?height=400&width=600",
      technologies: ["React", "Next.js", "TailwindCSS"],
      demoUrl: "https://kreavoks.my.id",
      // repoUrl: "#",
    },
    {
      id: "studylens",
      title: "Studylens - Ai for Learning Website",
      category: "web",
      image: "/portfolio/web/studylens.png?height=400&width=600",
      technologies: ["Flask", "Tensorflow", "tailwind", "opencv", "yolov8", "pytorch", "python"],
      //demoUrl: "#",
      repoUrl: "https://github.com/egagaluh28/studylens",
    },
    {
      id: "freezemart",
      title: "Freezemart - E-commerce Frozen food Website with Recommendation System",
      category: "web",
      image: "/portfolio/web/freezemart.png?height=400&width=600",
      technologies: [
        "Laravel",
        "PHP",
        "Xendit",
        "Blade",
        "MySQL",
        "Livewire",
        "TailwindCSS",
        "HTML/CSS",
        "Javascript",
        "python",
        "Flask",
        "TDF-IDF",
      ],
      demoUrl: "freezemart.osk.dom.my.id",
      repoUrl: "https://github.com/setiadyanwar/freezemart",
    },
    {
      id: "nexaid",
      title: "Nexaid - Dashboard Website",
      category: "web",
      image: "/portfolio/web/nexaid.png?height=400&width=600",
      technologies: ["React", "Typescript", "Laravel", "TailwindCSS"],
      demoUrl: "nexaid.osk.dom.my.id",
      repoUrl: "https://github.com/setiadyanwar/Nexaid",
    },
    {
      id: "wingspos",
      title: "WingsPOS - Point Of Sales Website",
      category: "web",
      image: "/portfolio/web/wingspos.png?height=400&width=600",
      technologies: ["Laravel", "TailwindCSS", "MySQL", "HTML/CSS", "Javascript"],
      demoUrl: "https://ayamgeprek.id/",
      repoUrl: "https://github.com/setiadyanwar/wingspos",
    },
    {
      id: "upala",
      title: "Upala - Company Profile Website",
      category: "web",
      image: "/portfolio/web/upala.png?height=400&width=600",
      technologies: ["Tailwind", "Figma", "Laravel", "HTML/CSS", "MySQL"],
      // demoUrl: "#",
      repoUrl: "https://github.com/setiadyanwar/upala-coffee.git",
    },
    {
      id: "nusoundtara",
      title: "Nusoundtara - Ticket Booking Website",
      category: "web",
      image: "/portfolio/web/Nusoundtara.png?height=400&width=600",
      technologies: ["HTML/CSS", "Javascript", "PHP", "MySQL", "Laravel"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "bemkmipb",
      title: "BEM KM IPB – Organization Profile Website",
      category: "ui",
      image: "/portfolio/uiux/bemkm.png?height=400&width=600",
      technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Zeplin"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "butchery",
      title: "Butchery Meat E-Commerce - Mobile App",
      category: "mobile",
      image: "/portfolio/mobile/butchery.png?height=400&width=600",
      technologies: ["Java", "MongoDB", "Figma", "XML", "Android Studio"],
      demoUrl: "https://www.mediafire.com/file/xqutrpgkgvbbewy/Butchery.apk/file",
      repoUrl: "https://github.com/setiadyanwar/ButcheryApp",
    },
    {
      id: "ecotainment",
      title: "Ecotainment E-Commerce Plant - Mobile App",
      category: "mobile",
      image: "/portfolio/mobile/ecotainment.png?height=400&width=600",
      technologies: ["Kotlin", "Firebase", "Laravel", "Figma", "XML", "Android Studio"],
      // demoUrl: "#",
      // repoUrl: "https://github.com/egagaluh28/studylens",
    },
    {
      id: "skilpath",
      title: "Skillpath AI learning app - UI Mobile App",
      category: "ui",
      image: "/portfolio/uiux/skillpath.png?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "skillify",
      title: "Skillify E-Course App - UI Mobile App",
      category: "ui",
      image: "/portfolio/uiux/skillify.png?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "gobojongsoang",
      title: "Gobojongsoang.id Reporting Platform - UI Website",
      category: "ui",
      image: "/portfolio/uiux/GOBojongsoang.png?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "rescuisine",
      title: "Rescuisine Solve Food Waste - UI Mobile App",
      category: "ui",
      image: "/portfolio/uiux/rescuisine.png?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "transmate",
      title: "Transmate Transjakarta Platform With AR - UI Mobile App",
      category: "ui",
      image: "/portfolio/uiux/Transmate.png?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "hotelid",
      title: "Hotel.id Booking Hotel - UI Website",
      category: "ui",
      image: "/portfolio/uiux/hotelid.png?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "swiftcare",
      title: "SwiftCare Crowdfunding Platform - Mobile App",
      category: "mobile",
      image: "/portfolio/mobile/swiftcare.png?height=400&width=600",
      technologies: ["Kotlin", "Firebase", "Chat-GPT API", "XML", "Android Studio"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "uvan",
      title: "Uvan E-Commerce Shoes Store - UI Website",
      category: "ui",
      image: "/portfolio/uiux/Uvan.png?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "agridation",
      title: "Agridation 2023 - Competition Website",
      category: "web",
      image: "/portfolio/web/Agridation.png?height=400&width=600",
      technologies: ["Figma", "Laravel", "TailwindCSS", "HTML/CSS", "MySQL"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "pembimbingid",
      title: "Dashboard Pembimbing.id - Academic Mentoring Platform",
      category: "ui",
      image: "/portfolio/uiux/Pembimbing.id.png?height=400&width=600",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "famiapp",
      title: "FamiApp Redesign Checkout Flow - UI Mobile App",
      category: "ui",
      image: "/portfolio/uiux/FamiApp.png?height=400&width=600",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      // demoUrl: "#",
      repoUrl: "https://www.linkedin.com/posts/setiadyanwar_study-case-to-redesign-the-checkout-screen-activity-7221889939687268352-4JNc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVhymkBCv31S7dFmvxRVbPg_hXaaQCCBKE",
    },
    // {
    //   id: "investra",
    //   title: " Investra Financial Intelligence Platform - UI Website",
    //   category: "ui",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    //   // demoUrl: "#",
    //   // repoUrl: "Gobojongsoang.id",
    // },
    // {
    //   id: "temanibu",
    //   title: "Teman Ibu Freelance Job Marketplace - UI Mobile App",
    //   category: "ui",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    //   // demoUrl: "#",
    //   // repoUrl: "Gobojongsoang.id",
    // },
    {
      id: "redesignipb",
      title: "Redesign IPB University Website",
      category: "web",
      image: "/portfolio/web/ipbredesign.png?height=400&width=600",
      technologies: ["Html", "CSS", "Javascript"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ui", name: "UI/UX Design" },
  ]

  // Use memoized values instead of recalculating

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                <span className="flex items-center">
                  {category.name}
                  <span
                    className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${filter === category.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                  >
                    {categoryCounts[category.id as keyof typeof categoryCounts]}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${currentPage}`}
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {paginatedItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                technologies={item.technologies}
                demoUrl={item.demoUrl}
                repoUrl={item.repoUrl ?? undefined}
                delay={index}
                filterKey={filter}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === i + 1
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                }`}
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
