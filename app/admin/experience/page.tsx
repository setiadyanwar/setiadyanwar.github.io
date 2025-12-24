"use client"

import { useState, useEffect, useMemo, useCallback, memo } from "react"
import { getWorkExperiences } from "@/lib/supabase/data"
import Link from "next/link"
import {
  Plus, Edit, Trash2, Search,
  ChevronLeft, ChevronRight, ArrowUpDown,
  Building2
} from "lucide-react"
import Image from "next/image"
import { useDebounce } from "@/lib/utils/use-debounce"
import { motion, AnimatePresence } from "framer-motion"

// --- TYPES ---
type SortField = 'title' | 'company' | 'period' | 'id'
type SortOrder = 'asc' | 'desc'

// --- COMPONENT: Sortable Header ---
const SortableHeader = ({
  label,
  field,
  currentSort,
  currentOrder,
  onSort,
  className = ""
}: {
  label: string,
  field: SortField,
  currentSort: SortField,
  currentOrder: SortOrder,
  onSort: (field: SortField) => void,
  className?: string
}) => (
  <th
    className={`px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors select-none group ${className}`}
    onClick={() => onSort(field)}
  >
    <div className="flex items-center gap-2">
      {label}
      <span className={`transition-opacity duration-200 ${currentSort === field ? 'opacity-100 text-indigo-600 dark:text-indigo-400' : 'opacity-0 group-hover:opacity-50'}`}>
        <ArrowUpDown className="w-3 h-3" />
      </span>
    </div>
  </th>
)

// --- COMPONENT: Experience Row ---
const ExperienceRow = memo(({ item, onDelete }: { item: any; onDelete: (id: number) => void }) => (
  <motion.tr
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="group border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-indigo-50/30 dark:hover:bg-white/5 transition-colors"
  >
    <td className="px-6 py-4">
      <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-md transition-all">
        {item.logo ? (
          <Image
            src={item.logo.split("?")[0]}
            alt={item.company}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-900">
            <Building2 className="w-5 h-5" />
          </div>
        )}
      </div>
    </td>
    <td className="px-6 py-4">
      <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm block max-w-[200px] truncate">
        {item.company}
      </span>
    </td>
    <td className="px-6 py-4">
      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm block max-w-[200px] truncate">
        {item.title}
      </span>
    </td>
    <td className="px-6 py-4">
      <span className="inline-flex px-2.5 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap">
        {item.period}
      </span>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
        <Link
          href={`/admin/experience/${item.id}/edit`}
          className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all tooltip-trigger"
          title="Edit Details"
        >
          <Edit className="w-4 h-4" />
        </Link>
        <button
          onClick={() => onDelete(item.id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
          title="Delete Item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </td>
  </motion.tr>
))
ExperienceRow.displayName = "ExperienceRow"

// --- MAIN PAGE COMPONENT ---
export default function ExperienceManagement() {
  // State
  const [experiences, setExperiences] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  // Pagination & Sorting State
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [sortField, setSortField] = useState<SortField>('id') // Default sort by ID usually means creation order if auto-inc
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  const debouncedSearch = useDebounce(searchQuery, 300)

  // Fetch Data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWorkExperiences()
        setExperiences(data)
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching work experiences:", error)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Handle Sort
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  // Filter & Sort Logic
  const filteredAndSortedItems = useMemo(() => {
    // 1. Filter
    let items = experiences.filter((item) => {
      const matchesSearch = !debouncedSearch.trim() ||
        item.title?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.company?.toLowerCase().includes(debouncedSearch.toLowerCase())

      return matchesSearch
    })

    // 2. Sort
    items.sort((a, b) => {
      const aValue = a[sortField] || ''
      const bValue = b[sortField] || ''

      // Handle ID sorting as numbers
      if (sortField === 'id') {
        return sortOrder === 'asc' ? a.id - b.id : b.id - a.id
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue)
        return sortOrder === 'asc' ? comparison : -comparison
      }
      return 0
    })

    return items
  }, [experiences, debouncedSearch, sortField, sortOrder])

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage)
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredAndSortedItems.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredAndSortedItems, currentPage, itemsPerPage])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearch])

  // Delete Handler
  const handleDelete = useCallback(async (id: number) => {
    const item = experiences.find((e) => e.id === id)
    if (!confirm(`Are you sure you want to delete "${item?.title}" at ${item?.company}?`)) return

    try {
      const response = await fetch(`/api/admin/experience/${id}`, { method: "DELETE" })
      if (response.ok) {
        setExperiences((prev) => prev.filter((e) => e.id !== id))
      } else {
        const error = await response.json()
        alert(error.error || "Failed to delete experience")
      }
    } catch (error) {
      alert("Failed to delete experience")
    }
  }, [experiences])

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64"></div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 h-[600px] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500">Loading your career journey...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 pb-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Experience
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your professional background and roles.
          </p>
        </div>
        <Link
          href="/admin/experience/new"
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Add Experience</span>
        </Link>
      </div>

      {/* Control Bar: Search */}
      <div className="bg-white dark:bg-gray-900 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search role or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-xl transition-all"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto flex-1">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800 sticky top-0 backdrop-blur-sm z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Logo</th>
                <SortableHeader label="Company" field="company" currentSort={sortField} currentOrder={sortOrder} onSort={handleSort} />
                <SortableHeader label="Role" field="title" currentSort={sortField} currentOrder={sortOrder} onSort={handleSort} />
                <SortableHeader label="Period" field="period" currentSort={sortField} currentOrder={sortOrder} onSort={handleSort} />
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900 relative">
              <AnimatePresence mode="wait">
                {paginatedItems.length === 0 ? (
                  <motion.tr
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <td colSpan={5} className="px-6 py-24 text-center">
                      <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-full mb-6">
                          <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No experience found</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                          We couldn&apos;t find any experience matching your search.
                        </p>
                      </div>
                    </td>
                  </motion.tr>
                ) : (
                  paginatedItems.map((item) => (
                    <ExperienceRow key={item.id} item={item} onDelete={handleDelete} />
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950/50">
          <AnimatePresence mode="wait">
            {paginatedItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-500">No experience found</p>
              </motion.div>
            ) : (
              paginatedItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm active:scale-[0.99] transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0 border border-gray-100 dark:border-gray-800">
                      {item.logo ? (
                        <Image src={item.logo.split("?")[0]} alt={item.company} fill className="object-cover" unoptimized loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <Building2 className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base truncate pr-2">{item.company}</h3>
                      </div>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 flex items-center gap-1 bg-gray-100 dark:bg-gray-800 w-fit px-2 py-1 rounded">
                        {item.period}
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <Link href={`/admin/experience/${item.id}/edit`} className="flex-1 text-center py-2 text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/10 text-indigo-700 dark:text-indigo-400 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/20 transition-colors">
                          Edit Detail
                        </Link>
                        <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 bg-red-50 dark:bg-red-900/10 rounded-lg hover:bg-red-100 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Footer */}
        {filteredAndSortedItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-500 dark:text-gray-400 text-center sm:text-left font-medium">
              Showing <span className="text-gray-900 dark:text-white">{Math.min((currentPage - 1) * itemsPerPage + 1, filteredAndSortedItems.length)}</span> to <span className="text-gray-900 dark:text-white">{Math.min(currentPage * itemsPerPage, filteredAndSortedItems.length)}</span> of <span className="text-gray-900 dark:text-white">{filteredAndSortedItems.length}</span> results
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-gray-600 dark:text-gray-300 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="hidden sm:flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum = i + 1;
                  if (totalPages > 5) {
                    if (currentPage <= 3) pageNum = i + 1;
                    else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                    else pageNum = currentPage - 2 + i;
                  }

                  if (pageNum <= totalPages && pageNum > 0) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`min-w-[36px] h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-all ${currentPage === pageNum
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                            : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                      >
                        {pageNum}
                      </button>
                    )
                  }
                  return null;
                })}
              </div>
              <span className="sm:hidden font-semibold text-gray-900 dark:text-white">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-gray-600 dark:text-gray-300 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
