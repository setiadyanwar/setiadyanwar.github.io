"use client"

import { useState, useEffect } from "react"
import { getEducationExperiences } from "@/lib/supabase/data"
import Link from "next/link"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import Image from "next/image"

export default function EducationManagement() {
  const [experiences, setExperiences] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEducationExperiences()
        setExperiences(data)
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching education experiences:", error)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredItems = experiences.filter((item) =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.company?.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Education Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your education entries
          </p>
        </div>
        <Link
          href="/admin/education/new"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Education
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search education entries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Education List - Desktop Table */}
      <div className="hidden md:block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Logo
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Institution
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Period
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
                    {searchQuery ? "No education entries found" : "No education entries yet. Create your first one!"}
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {item.logo ? (
                          <Image
                            src={item.logo.split("?")[0]}
                            alt={item.company}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                            No Logo
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 dark:text-white">
                        {item.company}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.period}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/education/${item.id}/edit`}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={async () => {
                            if (confirm(`Are you sure you want to delete "${item.title}"?`)) {
                              try {
                                const response = await fetch(`/api/admin/education/${item.id}`, {
                                  method: "DELETE",
                                })
                                if (response.ok) {
                                  setExperiences(experiences.filter((e) => e.id !== item.id))
                                } else {
                                  const error = await response.json()
                                  alert(error.error || "Failed to delete education")
                                }
                              } catch (error) {
                                alert("Failed to delete education")
                              }
                            }
                          }}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Education List - Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filteredItems.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-12 text-center text-gray-500 dark:text-gray-400">
            {searchQuery ? "No education entries found" : "No education entries yet. Create your first one!"}
          </div>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                  {item.logo ? (
                    <Image
                      src={item.logo.split("?")[0]}
                      alt={item.company}
                      fill
                      className="object-cover"
                      unoptimized
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      No Logo
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.company}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {item.period}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href={`/admin/education/${item.id}/edit`}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="Edit"
                >
                  <Edit className="w-5 h-5" />
                </Link>
                <button
                  onClick={async () => {
                    if (confirm(`Are you sure you want to delete "${item.title}"?`)) {
                      try {
                        const response = await fetch(`/api/admin/education/${item.id}`, {
                          method: "DELETE",
                        })
                        if (response.ok) {
                          setExperiences(experiences.filter((e) => e.id !== item.id))
                        } else {
                          const error = await response.json()
                          alert(error.error || "Failed to delete education")
                        }
                      } catch (error) {
                        alert("Failed to delete education")
                      }
                    }
                  }}
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
        Showing {filteredItems.length} of {experiences.length} education entries
      </div>
    </div>
  )
}
