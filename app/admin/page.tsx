"use client"

import { useState, useEffect, useMemo } from "react"
import { getPortfolioItems, getWorkExperiences, getEducationExperiences, getOrganizationExperiences } from "@/lib/supabase/data"
import { Briefcase, GraduationCap, Users, FileText, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    portfolio: 0,
    work: 0,
    education: 0,
    organization: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchStats() {
      try {
        const [portfolio, work, education, org] = await Promise.all([
          getPortfolioItems(),
          getWorkExperiences(),
          getEducationExperiences(),
          getOrganizationExperiences(),
        ])

        if (!cancelled) {
          setStats({
            portfolio: portfolio.length,
            work: work.length,
            education: education.length,
            organization: org.length,
          })
        }
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching stats:", error)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }
    fetchStats()

    return () => {
      cancelled = true
    }
  }, [])

  const statCards = [
    {
      title: "Portfolio Items",
      value: stats.portfolio,
      icon: Briefcase,
      href: "/admin/portfolio",
      color: "indigo",
    },
    {
      title: "Work Experience",
      value: stats.work,
      icon: FileText,
      href: "/admin/experience",
      color: "blue",
    },
    {
      title: "Education",
      value: stats.education,
      icon: GraduationCap,
      href: "/admin/education",
      color: "green",
    },
    {
      title: "Organization",
      value: stats.organization,
      icon: Users,
      href: "/admin/organization",
      color: "purple",
    },
  ]

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Manage your portfolio website content
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.href}
              href={stat.href}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
                <Eye className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/portfolio/new"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            + New Portfolio Item
          </Link>
          <Link
            href="/admin/experience/new"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + New Work Experience
          </Link>
          <Link
            href="/admin/education/new"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            + New Education
          </Link>
          <Link
            href="/admin/organization/new"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            + New Organization
          </Link>
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
          >
            View Website
          </Link>
        </div>
      </div>
    </div>
  )
}

