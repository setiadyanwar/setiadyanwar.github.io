"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PortfolioCard from "@/components/portfolio-card"

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Sample portfolio items (would be replaced with actual projects)
  const portfolioItems = [
    {
      id: "kreavoks",
      title: "Agency & E-learning Website",
      category: "web",
      image: "/portfolio/web/kreavoks.png?height=400&width=600",
      technologies: ["React", "Next.js", "TailwindCSS"],
      demoUrl: "kreavoks.my.id",
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
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "skillify",
      title: "Skillify E-Course App - UI Mobile App",
      category: "ui",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "gobojongsoang",
      title: "Gobojongsoang.id Reporting Platform - UI Website",
      category: "ui",
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/portfolio/uiux/transmate.png?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "famiapp",
      title: "FamiApp Redesign Checkout Flow - UI Mobile App",
      category: "ui",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "investra",
      title: " Investra Financial Intelligence Platform - UI Website",
      category: "ui",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
    {
      id: "temanibu",
      title: "Teman Ibu Freelance Job Marketplace - UI Mobile App",
      category: "ui",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      // demoUrl: "#",
      // repoUrl: "Gobojongsoang.id",
    },
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

  // Calculate counts for each category
  const categoryCounts = {
    all: portfolioItems.length,
    web: portfolioItems.filter((item) => item.category === "web").length,
    mobile: portfolioItems.filter((item) => item.category === "mobile").length,
    ui: portfolioItems.filter((item) => item.category === "ui").length,
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ui", name: "UI/UX Design" },
  ]

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setFilter(category.id)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <span className="flex items-center">
                  {category.name}
                  <span
                    className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                      filter === category.id
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            />
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1
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
                  onClick={() => {
                    setCurrentPage(i + 1)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === i + 1
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages
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
