"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, GraduationCap, Users, ChevronDown } from "lucide-react"
import Image from "next/image"
import {
  getWorkExperiences,
  getEducationExperiences,
  getOrganizationExperiences,
} from "@/lib/supabase/data"

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work")
  const [workExperiences, setWorkExperiences] = useState<any[]>([])
  const [educationExperiences, setEducationExperiences] = useState<any[]>([])
  const [organizationExperiences, setOrganizationExperiences] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  // Memoized toggle function for accordion
  const toggleExpanded = useCallback((key: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      return newSet
    })
  }, [])

  // Helper function to deduplicate experiences - memoized with useCallback
  const deduplicateExperiences = useCallback((experiences: any[]) => {
    const seen = new Set<string>()
    return experiences.filter((exp) => {
      // Create a unique key from title, company, and period
      const key = `${exp.title || ""}-${exp.company || ""}-${exp.period || ""}`
      if (seen.has(key)) {
        return false
      }
      seen.add(key)
      return true
    })
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const [work, education, org] = await Promise.all([
          getWorkExperiences(),
          getEducationExperiences(),
          getOrganizationExperiences(),
        ])
        
        // Deduplicate each array
        const deduplicatedWork = deduplicateExperiences(work || [])
        const deduplicatedEducation = deduplicateExperiences(education || [])
        const deduplicatedOrg = deduplicateExperiences(org || [])
        
        setWorkExperiences(deduplicatedWork)
        setEducationExperiences(deduplicatedEducation)
        setOrganizationExperiences(deduplicatedOrg)
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching experiences:", error)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [deduplicateExperiences])

  const tabs = [
    { id: "work", name: "Work Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "organization", name: "Organization", icon: Users },
  ]

  // Helper function to calculate duration in months from period string
  const calculateDuration = (period: string): number | null => {
    try {
      // Parse period like "Jun 2025 – Dec 2025" or "Jan 2024 - Feb 2024" or "2021 - Present" or "2021 - 2025"
      const parts = period.split(/[–-]/).map((p) => p.trim())
      if (parts.length !== 2) return null

      const monthNames = [
        "jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sep", "oct", "nov", "dec"
      ]

      const parseDate = (str: string) => {
        const trimmed = str.toLowerCase().trim()
        const parts = trimmed.split(" ")
        
        // Handle format like "2021" or "2021 - Present" (year only)
        if (parts.length === 1) {
          const year = parseInt(parts[0])
          if (!isNaN(year)) {
            return { month: 0, year } // Default to January if only year
          }
        }
        
        // Handle format like "Jun 2025" or "Jan 2024"
        if (parts.length === 2) {
          const month = monthNames.findIndex((m) => parts[0].startsWith(m))
          const year = parseInt(parts[1])
          if (month !== -1 && !isNaN(year)) {
            return { month, year }
          }
        }
        
        return null
      }

      const start = parseDate(parts[0])
      const endStr = parts[1].toLowerCase().trim()
      
      // Handle "Present" case
      if (endStr.includes("present") || endStr.includes("sekarang")) {
        const now = new Date()
        const end = { month: now.getMonth(), year: now.getFullYear() }
        if (!start) return null
        const months = (end.year - start.year) * 12 + (end.month - start.month) + 1
        return months
      }

      const end = parseDate(parts[1])
      if (!start || !end) return null

      const months = (end.year - start.year) * 12 + (end.month - start.month) + 1
      return months
    } catch {
      return null
    }
  }

  // Helper function to format duration
  const formatDuration = (months: number): string => {
    if (months < 1) return "Less than 1 month"
    if (months === 1) return "1 month"
    if (months < 12) return `${months} months`
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    if (remainingMonths === 0) {
      return years === 1 ? "1 year" : `${years} years`
    }
    return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
  }

  // Helper function to group experiences by company (for nested structure) - memoized
  const groupExperiencesByCompany = useCallback((experiences: any[]) => {
    const grouped = new Map<string, any[]>()
    
    experiences.forEach((exp) => {
      const companyKey = exp.company?.toLowerCase().trim() || ""
      if (!grouped.has(companyKey)) {
        grouped.set(companyKey, [])
      }
      grouped.get(companyKey)!.push(exp)
    })

    // Convert to array and sort by first experience period
    return Array.from(grouped.entries()).map(([companyKey, exps]) => {
      // Sort experiences by period (most recent first)
      const sortedExps = exps.sort((a, b) => {
        // Simple date comparison - you might want to improve this
        return b.period.localeCompare(a.period)
      })
      
      // Calculate total duration for all roles
      let totalMonths = 0
      const durations = sortedExps.map((exp) => calculateDuration(exp.period))
      const validDurations = durations.filter((d): d is number => d !== null)
      if (validDurations.length > 0) {
        // For multiple roles, sum up the durations
        totalMonths = validDurations.reduce((sum, months) => sum + months, 0)
      }
      
      return {
        company: exps[0].company,
        logo: exps[0].logo,
        experiences: sortedExps,
        // Calculate total duration if needed
        totalDuration: exps.length > 1 ? `${exps.length} roles` : null,
        totalMonths: totalMonths > 0 ? totalMonths : null,
      }
    })
  }, [])

  // Get the appropriate experiences based on the active tab - memoized
  const rawExperiences = useMemo(() => {
    return activeTab === "work" ? workExperiences : activeTab === "education" ? educationExperiences : organizationExperiences
  }, [activeTab, workExperiences, educationExperiences, organizationExperiences])

  // Group by company for nested structure (applies to all tabs) - memoized
  const groupedExperiences = useMemo(() => {
    return groupExperiencesByCompany(rawExperiences)
  }, [rawExperiences, groupExperiencesByCompany])

  if (loading) {
    return (
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {tab.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Experience List - Clean Minimalist Design */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#fafafa] dark:bg-gray-950 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {activeTab === "work" ? "Experience" : activeTab === "education" ? "Education" : "Organization"}
            </h2>

            {/* Experience Items */}
            <div className="space-y-0">
              {/* Nested structure for all tabs */}
              {groupedExperiences.map((group, groupIndex) => {
                  const groupKey = `group-${group.company}-${groupIndex}`
                  const isGroupExpanded = expandedItems.has(groupKey)
                  
                  return (
                    <motion.div
                      key={groupKey}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                      className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                    >
                      {/* Company Header */}
                      <div className="py-4">
                        <div className="flex items-center gap-4">
                          {/* Company Logo */}
                          {group.logo && (
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-shrink-0 flex items-center justify-center">
                              <Image
                                src={group.logo.split("?")[0] || "/placeholder.svg"}
                                alt={group.company}
                                width={48}
                                height={48}
                                className="object-contain p-1"
                                unoptimized
                              />
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                              {group.company}
                            </h3>
                            {group.totalMonths && (
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                                {formatDuration(group.totalMonths)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Roles (Nested) */}
                      <div className="space-y-0 border-l-2 border-gray-200 dark:border-gray-800 ml-5 md:ml-6 pl-4 md:pl-6">
                        {group.experiences.map((exp: any, roleIndex: number) => {
                          const uniqueKey = exp.id || `${exp.title || ""}-${exp.company || ""}-${exp.period || ""}-${roleIndex}`
                          const isExpanded = expandedItems.has(uniqueKey)
                          const hasDescription = exp.description || (exp.details && exp.details.length > 0)

                          return (
                            <div key={uniqueKey} className="border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                              {/* Role Content */}
                              <div
                                className={`py-3 -ml-4 md:-ml-6 pl-[44px] md:pl-[40px] ${hasDescription ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded transition-colors" : ""}`}
                                onClick={() => {
                                  if (hasDescription) {
                                    toggleExpanded(uniqueKey)
                                  }
                                }}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  {/* Left: Role Title */}
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm md:text-base font-medium text-gray-900 dark:text-white leading-tight">
                                      {exp.title}
                                    </h4>
                                  </div>

                                  {/* Right: Period & Location + Expand Icon */}
                                  <div className="flex items-start gap-3 flex-shrink-0">
                                    <div className="text-right whitespace-nowrap">
                                      <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white leading-tight">
                                        {exp.period}
                                      </p>
                                      {exp.location && (
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-tight">{exp.location}</p>
                                      )}
                                    </div>
                                    
                                    {/* Expand/Collapse Icon */}
                                    {hasDescription && (
                                      <motion.div
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0 mt-0.5"
                                      >
                                        <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                      </motion.div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Accordion Content for Role */}
                              <AnimatePresence>
                                {isExpanded && hasDescription && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pb-4 pl-4 md:pl-6 space-y-3">
                                      {/* Description */}
                                      {exp.description && (
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                          {exp.description}
                                        </p>
                                      )}

                                      {/* Details/Key Achievements */}
                                      {exp.details && exp.details.length > 0 && (
                                        <div>
                                          <h5 className="text-xs font-semibold text-gray-900 dark:text-white mb-1.5">
                                            Key Achievements:
                                          </h5>
                                          <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-600 dark:text-gray-400">
                                            {exp.details.map((detail: string, idx: number) => (
                                              <li key={idx}>{detail}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {/* Skills */}
                                      {exp.skills && exp.skills.length > 0 && (
                                        <div>
                                          <h5 className="text-xs font-semibold text-gray-900 dark:text-white mb-1.5">
                                            Skills:
                                          </h5>
                                          <div className="flex flex-wrap gap-1.5">
                                            {exp.skills.map((skill: string, idx: number) => (
                                              <span
                                                key={idx}
                                                className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full"
                                              >
                                                {skill}
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
