"use client"

import { useState, useEffect, useMemo, useCallback, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PortfolioCard from "@/components/portfolio-card"
import { getPortfolioItems } from "@/lib/supabase/data"
import PortfolioListSkeleton from "@/components/portfolio/portfolio-list-skeleton"

function PortfolioContent() {
  const searchParams = useSearchParams()
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [portfolioItems, setPortfolioItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const itemsPerPage = 6

  // Handle URL parameters for filtering
  useEffect(() => {
    const filterParam = searchParams.get("filter")
    if (filterParam) {
      setFilter(filterParam)
    }
  }, [searchParams])

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

        setPortfolioItems(transformed)
      } catch (error) {

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

export default function PortfolioSection() {
  return (
    <Suspense fallback={<PortfolioListSkeleton />}>
      <PortfolioContent />
    </Suspense>
  )
}
