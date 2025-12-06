"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { getPortfolioItems } from "@/lib/supabase/data"
import Link from "next/link"
import { Plus, Edit, Trash2, Eye, Search } from "lucide-react"
import Image from "next/image"
import { useDebounce } from "@/lib/utils/use-debounce"
import { memo } from "react"

// Memoized table row component
const PortfolioRow = memo(({ item, onDelete }: { item: any; onDelete: (id: string) => void }) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
    <td className="px-6 py-4">
      <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
        {item.image ? (
          <Image
            src={item.image.split("?")[0]}
            alt={item.title}
            fill
            className="object-cover"
            unoptimized
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="font-medium text-gray-900 dark:text-white">
        {item.title}
      </div>
      {item.subtitle && (
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {item.subtitle}
        </div>
      )}
    </td>
    <td className="px-6 py-4">
      <span className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full">
        {item.category}
      </span>
    </td>
    <td className="px-6 py-4">
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
        item.status === "published"
          ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
      }`}>
        {item.status || "draft"}
      </span>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center justify-end gap-2">
        <Link
          href={`/portfolio/${item.id}`}
          target="_blank"
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          title="View"
        >
          <Eye className="w-5 h-5" />
        </Link>
        <Link
          href={`/admin/portfolio/${item.id}/edit`}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          title="Edit"
        >
          <Edit className="w-5 h-5" />
        </Link>
        <button
          onClick={() => onDelete(item.id)}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          title="Delete"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </td>
  </tr>
))
PortfolioRow.displayName = "PortfolioRow"

export default function PortfolioManagement() {
  const [portfolioItems, setPortfolioItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearch = useDebounce(searchQuery, 300)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPortfolioItems()
        setPortfolioItems(data)
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

  const filteredItems = useMemo(() => {
    if (!debouncedSearch.trim()) return portfolioItems
    const query = debouncedSearch.toLowerCase()
    return portfolioItems.filter((item) =>
      item.title?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    )
  }, [portfolioItems, debouncedSearch])

  const handleDelete = useCallback(async (id: string) => {
    const item = portfolioItems.find((p) => p.id === id)
    if (!confirm(`Are you sure you want to delete "${item?.title}"?`)) return

    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setPortfolioItems((prev) => prev.filter((p) => p.id !== id))
      } else {
        const error = await response.json()
        alert(error.error || "Failed to delete portfolio")
      }
    } catch (error) {
      alert("Failed to delete portfolio")
    }
  }, [portfolioItems])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64 animate-pulse"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Portfolio Management
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Manage your portfolio items and content
          </p>
        </div>
        <Link
          href="/admin/portfolio/new"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm sm:text-base"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="whitespace-nowrap">New Portfolio</span>
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search portfolio items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Portfolio List - Desktop Table */}
      <div className="hidden md:block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                    {searchQuery ? "No portfolio items found" : "No portfolio items yet. Create your first one!"}
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <PortfolioRow key={item.id} item={item} onDelete={handleDelete} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio List - Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filteredItems.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-12 text-center text-gray-500 dark:text-gray-400">
            {searchQuery ? "No portfolio items found" : "No portfolio items yet. Create your first one!"}
          </div>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image.split("?")[0]}
                      alt={item.title}
                      fill
                      className="object-cover"
                      unoptimized
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      No Image
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-white truncate">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {item.subtitle}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full">
                      {item.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === "published"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                        : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                    }`}>
                      {item.status || "draft"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href={`/portfolio/${item.id}`}
                  target="_blank"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="View"
                >
                  <Eye className="w-5 h-5" />
                </Link>
                <Link
                  href={`/admin/portfolio/${item.id}/edit`}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="Edit"
                >
                  <Edit className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        Showing {filteredItems.length} of {portfolioItems.length} portfolio items
      </div>
    </div>
  )
}

