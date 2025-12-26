"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { getPortfolioItems, getWorkExperiences, getEducationExperiences, getOrganizationExperiences, getVisitorAnalytics, getTopPages, getRecentVisitors } from "@/lib/supabase/data"
import { Briefcase, GraduationCap, Monitor, Activity, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import RecentVisitors from "@/components/admin/recent-visitors"

// --- DYNAMIC IMPORTS FOR PERFORMANCE ---
// Load heavy chart component only when needed (reduces initial bundle size)
const VisitorChart = dynamic(() => import("@/components/admin/visitor-chart"), {
  ssr: false,
  loading: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm h-full flex items-center justify-center">
      <div className="text-gray-400 text-sm">Loading chart...</div>
    </div>
  )
})

const AnalyticsSidebar = dynamic(() => import("@/components/admin/analytics-sidebar"), {
  ssr: false,
  loading: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm h-full flex items-center justify-center">
      <div className="text-gray-400 text-sm">Loading...</div>
    </div>
  )
})

// --- MAIN PAGE ---
export default function AdminDashboard() {
  const { theme, setTheme } = useTheme()
  const [stats, setStats] = useState({
    portfolio: 0,
    work: 0,
    education: 0,
    organization: 0,
  })
  const [analyticsData, setAnalyticsData] = useState<any[]>([])
  const [topPages, setTopPages] = useState<any[]>([])
  const [recentVisitors, setRecentVisitors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [portfolio, work, education, org, analytics, pages, visitors] = await Promise.all([
          getPortfolioItems(true),
          getWorkExperiences(),
          getEducationExperiences(),
          getOrganizationExperiences(),
          getVisitorAnalytics(7),
          getTopPages(10),
          getRecentVisitors(20),
        ])

        setStats({
          portfolio: portfolio.length,
          work: work.length,
          education: education.length,
          organization: org.length,
        })

        setAnalyticsData(analytics)
        setTopPages(pages)
        setRecentVisitors(visitors)
      } catch (error) {
        console.error("❌ Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  // Calculate generic stats
  const totalVisits = analyticsData.reduce((sum, d) => sum + (Number(d.total_visits) || 0), 0)
  const visitorsToday = analyticsData.length > 0 ? (Number(analyticsData[analyticsData.length - 1].total_visits) || 0) : 0

  const statCards = [
    {
      title: "Projects",
      value: stats.portfolio,
      icon: Briefcase,
      href: "/admin/portfolio",
      color: "indigo",
      trend: "Total Items"
    },
    {
      title: "Experience",
      value: stats.work,
      icon: Monitor,
      href: "/admin/experience",
      color: "blue",
      trend: "Career"
    },
    {
      title: "Education",
      value: stats.education,
      icon: GraduationCap,
      href: "/admin/education",
      color: "emerald",
      trend: "Academic"
    },
    {
      title: "Page Views",
      value: totalVisits,
      icon: Activity,
      href: "/admin/organization",
      color: "amber",
      trend: "Last 7 Days"
    },
  ]

  if (loading) {
    return (
      <div className="space-y-6 pb-10 animate-pulse">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg" />
            <div className="h-4 w-60 bg-gray-100 dark:bg-gray-800/50 rounded-lg" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-200 dark:bg-gray-800 rounded-lg" />
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded hidden sm:block" />
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 h-[100px] flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800" />
                <div className="h-3 w-20 bg-gray-100 dark:bg-gray-800 rounded" />
              </div>
              <div>
                <div className="h-8 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-1" />
                <div className="h-2 w-24 bg-gray-100 dark:bg-gray-800 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
          {/* Chart Skeleton */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded-full" />
            </div>
            <div className="flex-1 bg-gray-50 dark:bg-gray-800/30 rounded-xl w-full" />
          </div>

          {/* Sidebar Skeleton */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-4 w-16 bg-gray-100 dark:bg-gray-800 rounded" />
            </div>
            <div className="space-y-4 flex-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="h-3 w-32 bg-gray-100 dark:bg-gray-800 rounded" />
                    <div className="h-3 w-8 bg-gray-100 dark:bg-gray-800 rounded" />
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full" />
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-3">
              <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-xl" />
              <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 pb-10">
      {/* Compact Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Admin.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <div className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded hidden sm:block">
            Analytics Active
          </div>
        </div>
      </div>

      {/* Stats Cards - More compact */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.href}
              href={stat.href}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-${stat.color}-50 dark:group-hover:bg-${stat.color}-900/20 transition-colors`}>
                  <Icon className={`w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-${stat.color}-600 dark:group-hover:text-${stat.color}-400 transition-colors`} />
                </div>
                <h3 className="text-gray-500 dark:text-gray-400 text-xs font-medium">{stat.title}</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.value}</p>
              <p className="text-[10px] text-gray-400 mt-1">{stat.trend}</p>
            </Link>
          )
        })}
      </div>

      {/* Main Grid: Chart + Combined Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Line Chart (2/3 width) - Fixed Height */}
        <div className="lg:col-span-2 h-[400px]">
          <VisitorChart data={analyticsData} />
        </div>

        {/* Right Sidebar: Combined Widget (1/3 width) - Fixed Height matches chart */}
        <div className="lg:col-span-1 h-[400px]">
          <AnalyticsSidebar pages={topPages} visitorsToday={visitorsToday} />
        </div>
      </div>

      {/* Recent Visitors Section */}
      <div className="h-[400px]">
        <RecentVisitors visitors={recentVisitors} />
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex flex-wrap gap-2">
          {['Portfolio', 'Experience', 'Education', 'Organization'].map((item) => (
            <Link
              key={item}
              href={`/admin/${item.toLowerCase()}/new`}
              className="px-3 py-1.5 text-xs font-semibold bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-indigo-300 text-gray-600 dark:text-gray-400 rounded-lg hover:text-indigo-600 transition-all flex items-center gap-1.5"
            >
              <span>+ {item}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
